/* jshint esversion: 6 */
/* eslint "indent": [ "error", 4, { "SwitchCase": 1 } ] */

var vitis = vitis || {};
var base = base || require('./base');

vitis.ModelFactory = class {

    match(context) {
        if (context.buffer.length > 0)
            return true;
        return false;
    }

    open(context, host) {
        try {
            return host.require('./vitis-proto').then(() => {
                let G = protobuf.roots.vitis.serial_v2.Graph.decode(context.buffer);
                return Promise.resolve(new vitis.Model(G));
            });
        }
        catch (error) {
            host.exception(error, false);
            throw new vitis.Error("Error loading xmodel: " + error);
        }
    }

};

vitis.Model = class {

    constructor(metadata) {

        this._graphs = [new vitis.Graph(metadata)];
    }

    get format() {
        return 'Vitis-AI xmodel';
    }

    get source() {
        return '';
    }

    get graphs() {
        return this._graphs;
    }
};

vitis.Graph = class {

    constructor(graphDesc) {
        this._nodes = [];
        this._inputs = [];
        this._outputs = [];

        let nodes = graphDesc.opNode;

        vitis.nodeMap = vitis.nodeMap || new Map();
        vitis.nodes = graphDesc.opNode;
        nodes.forEach((node,idx) => {
            vitis.nodeMap.set(node.opName,idx);
        });
        nodes.forEach(node => {
            if (node.opType != "const-fix" && node.opType != "const"
                    && (node.opName.search("weights") < 0 && node.opName.search("bias") < 0 ))
                this._nodes.push(new vitis.Node(node));
        });
    }

    get name() {
        return '';
    }

    get groups() {
        return false;
    }

    get nodes() {
        return this._nodes;
    }

    get outputs() {
        return this._outputs;
    }

    get inputs() {
        return this._inputs;
    }

};

vitis.Node = class {

    constructor(nodeDesc) {
        this._metadata = nodeDesc;
        this._type = nodeDesc.opType;
        this._name = nodeDesc.opName;
        this._attributes = [];
        this._inputs = [];
        this._outputs = [];
        this._chains = [];



        nodeDesc.args.forEach((arg) => {

            let para = null;
            if (arg.argName === "weights" || arg.argName === "bias") {
                let protoNode = vitis.nodes[vitis.nodeMap.get(arg.argOps[0])];
                let protoTensor = protoNode.outputTensor;
                let tensorType = new vitis.TensorType("float32" ,new vitis.TensorShape(protoTensor.tensorDim));
                let data = null;
                if(protoNode.opAttr['data'])
                    data = protoNode.opAttr['data'].bytesValue.value;
                let tensor = new vitis.Tensor(protoNode.opName,tensorType, data);
                para = new vitis.Parameter(arg.argName, true, new vitis.Argument(arg.argOps[0], null, tensor));
            }
            else
                para = new vitis.Parameter(arg.argName, true, new vitis.Argument(arg.argOps[0]));
            this._inputs.push(para);
        });

        for (const attr of Object.entries(nodeDesc.opAttr)) {
            this._attributes.push(new vitis.Attribute(null, attr[0], Object.values(attr[1])[0], true));
        }

        this._outputs.push(new vitis.Parameter("output", true, new vitis.Argument(nodeDesc.opName,"")));

    }


    get type() {
        return this._type;
    }

    get name() {
        return this._name;
    }

    get domain() {
        return null;
    }

    get metadata() {
        return this._metadata;
    }

    get group() {
        return null;
    }

    get inputs() {
        return this._inputs;
    }

    get outputs() {
        return this._outputs;
    }

    get chain() {
        return this._chains;
    }

    get attributes() {
        return this._attributes;
    }
};

vitis.Attribute = class {

    constructor(schema, name, value, visible) {
        this._type = null;
        this._value = value;
        this._name = name;
        this._visible = visible;
        if (schema) {
            if (schema.type) {
                this._type = schema.type;
                const type = vitis.schema[this._type + 'Name'];
                if (type) {
                    this._value = type[this._value];
                }
            }
        }
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    get value() {
        return this._value;
    }

    get visible() {
        return this._visible == false ? false : true;
    }
};

vitis.Parameter = class {

    constructor(name, visible, args) {
        this._name = name;
        this._visible = visible;
        this._arguments = [args];
    }

    get name() {
        return this._name;
    }

    get visible() {
        return this._visible;
    }

    get arguments() {
        return this._arguments;
    }
};

vitis.Argument = class {

    constructor(name, type, initializer) {
        this._name = name;
        this._type = type || null;
        this._initializer = initializer || null;
    }

    get name() {
        return this._name;
    }

    get type() {
        if (this._initializer) {
            return this._initializer.type;
        }
        return this._type;
    }

    get initializer() {
        return this._initializer;
    }
};

vitis.Tensor = class {

    constructor(kind, type, data) {
        this._kind = kind;
        this._type = type;
        this._data = data;
    }

    get kind() {
        return this._kind;
    }

    get type() {
        return this._type;
    }

    get state() {
        return null;
    }

    get value() {
        return this._data;
    }

    toString() {
        if(this._data)
            return this._data.toJSON().data;
        else
            return null;
    }

};

vitis.TensorType = class {

    constructor(dataType, shape) {
        this._dataType = dataType || '?';
        this._shape = shape;
    }

    get dataType() {
        return this._dataType;
    }

    get shape() {
        return this._shape;
    }

    toString() {
        return this._dataType + "<" + this._shape.toString() + ">";
    }
};

vitis.TensorShape = class {

    constructor(dimensions) {
        this._dimensions = dimensions;
    }

    get dimensions() {
        return this._dimensions;
    }

    toString() {
        return this._dimensions.toString();
    }
};

vitis.Metadata = class {

    static open(host) {
        return new vitis.Metadata(null);
    }

    constructor(data) {
        this._map = new Map();
        this._map.set('metaname', 'metaval');

    }

    type(name) {
        return 'meta_val';
    }

    attribute(type, name) {
        return "attri_haha";
    }
};

vitis.Error = class extends Error {

    constructor(message) {
        super(message);
        this.name = 'Error loading Vitis model.';
    }
};

if (typeof module !== 'undefined' && typeof module.exports === 'object') {
    module.exports.ModelFactory = vitis.ModelFactory;
}
