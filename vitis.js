/* jshint esversion: 6 */
/* eslint "indent": [ "error", 4, { "SwitchCase": 1 } ] */

var vitis = vitis || {};
var base = base || require('./base');

vitis.ModelFactory = class {

    match(context) {
        if(context.buffer.length > 0)
            return true;
        return false;
    }

    open(context, host) {
        try {
            let xmodel = require('./vitis-proto');
            let G = xmodel.serial_v2.Graph.decode(context.buffer);

            return Promise.resolve(new vitis.Model(G));
        }
        catch (error) {
            host.exception(error, false);
            throw new vitis.Error("Error loading xmodel: "+error);
        }
    }

};

vitis.Model = class {

    constructor(metadata) {

        this._graphs = [new vitis.Graph(metadata)];
    }

    get format() {
        return 'xmodel';
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
        nodes.forEach(node => {
            // if(node.opType != "const-fix" && node.opType != "data-fix"  && node.opType != "const")
            this._nodes.push(new vitis.Node(node));
        });

        // let args = [];
        // args.push(new vitis.Argument('input', 'float32', null));
        // this._inputs.push(new vitis.Parameter('inop', true, args));

        // for (let i = 0; i < 4; i++) {
        //     this._nodes.push(new vitis.Node([], 'conv' + i, ''));
        // }

        // this._outputs.push(new vitis.Parameter('outop', true, args));

        // let inputSet = new Set();
        // for (let i = 0; i < net.oplistsLength(); i++) {
        //     const op = net.oplists(i);
        //     if (vitis.schema.OpTypeName[op.type()] === 'Input') {
        //         let args = [];
        //         for (let j = 0; j < op.outputIndexesLength(); j++) {
        //             const index = op.outputIndexes(j);
        //             const name = net.tensorName(index);
        //             const extraTensorDescribe = net.extraTensorDescribe(index);
        //             const blob = extraTensorDescribe ? extraTensorDescribe.blob() : null;
        //             const type = blob ? vitis.Graph._blobTensorType(blob) : null;
        //             args.push(new vitis.Argument(name, type, null));
        //         }
        //         this._inputs.push(new vitis.Parameter(op.name(), true, args));
        //     }
        //     else {
        //         this._nodes.push(new vitis.Node(metadata, op, net));
        //     }
        //     for (let k = 0; k < op.inputIndexesLength(); k++) {
        //         const index = op.inputIndexes(k);
        //         inputSet.add(index);
        //     }
        // }

        // for (let i = 0; i < net.tensorNameLength(); i++) {
        //     if (!inputSet.has(i)) {
        //         const name = net.tensorName(i);
        //         const extraTensorDescribe = net.extraTensorDescribe(i);
        //         const blob = extraTensorDescribe ? extraTensorDescribe.blob() : null;
        //         const type = blob ? vitis.Graph._blobTensorType(blob) : null;
        //         this._outputs.push(new vitis.Parameter(name, true, [
        //             new vitis.Argument(name, type, null)
        //         ]));
        //     }
        // }
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
            this._inputs.push(new vitis.Parameter(arg.argName, true, {'name':arg.argOps[0]}));
        });

        for (const attr of Object.entries(nodeDesc.opAttr)) {
            this._attributes.push(new vitis.Attribute(null,attr[0],Object.values(attr[1])[0],true));
        }

        // let ot = nodeDesc.outputTensor;
        this._outputs.push(new vitis.Parameter("output", true, {'name':nodeDesc.opName}));

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
        return this._context().state;
    }

    get value() {
        return 'tensor value';
    }

    toString() {
        return '[tensor string]';
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
        return this._dataType + this._shape.toString();
    }
};

vitis.TensorShape = class {

    constructor(dimensions) {
        this._dimensions = dimensions;
    }

    get dimensions() {
        return [1, 2, 3, 4];
    }

    toString() {
        return '[1,2,3,4]';
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
        return "attri_haha"
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
