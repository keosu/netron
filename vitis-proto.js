/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    // var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    var $root = $protobuf.roots.vitis || ($protobuf.roots.vitis = {});
    
    $root.serial_v2 = (function() {
        
    
        /**
         * Namespace serial_v2.
         * @exports serial_v2
         * @namespace
         */
        var serial_v2 = {};
    
        serial_v2.Graph = (function() {
    
            /**
             * Properties of a Graph.
             * @memberof serial_v2
             * @interface IGraph
             * @property {string|null} [graphName] Graph graphName
             * @property {Array.<serial_v2.IOPNode>|null} [opNode] Graph opNode
             * @property {serial_v2.ISubGraph|null} [subgRoot] Graph subgRoot
             * @property {Object.<string,serial_v2.IAttrValue>|null} [graphAttr] Graph graphAttr
             * @property {Array.<serial_v2.IOpDef>|null} [opDefs] Graph opDefs
             */
    
            /**
             * Constructs a new Graph.
             * @memberof serial_v2
             * @classdesc Represents a Graph.
             * @implements IGraph
             * @constructor
             * @param {serial_v2.IGraph=} [properties] Properties to set
             */
            function Graph(properties) {
                this.opNode = [];
                this.graphAttr = {};
                this.opDefs = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Graph graphName.
             * @member {string} graphName
             * @memberof serial_v2.Graph
             * @instance
             */
            Graph.prototype.graphName = "";
    
            /**
             * Graph opNode.
             * @member {Array.<serial_v2.IOPNode>} opNode
             * @memberof serial_v2.Graph
             * @instance
             */
            Graph.prototype.opNode = $util.emptyArray;
    
            /**
             * Graph subgRoot.
             * @member {serial_v2.ISubGraph|null|undefined} subgRoot
             * @memberof serial_v2.Graph
             * @instance
             */
            Graph.prototype.subgRoot = null;
    
            /**
             * Graph graphAttr.
             * @member {Object.<string,serial_v2.IAttrValue>} graphAttr
             * @memberof serial_v2.Graph
             * @instance
             */
            Graph.prototype.graphAttr = $util.emptyObject;
    
            /**
             * Graph opDefs.
             * @member {Array.<serial_v2.IOpDef>} opDefs
             * @memberof serial_v2.Graph
             * @instance
             */
            Graph.prototype.opDefs = $util.emptyArray;
    
            /**
             * Creates a new Graph instance using the specified properties.
             * @function create
             * @memberof serial_v2.Graph
             * @static
             * @param {serial_v2.IGraph=} [properties] Properties to set
             * @returns {serial_v2.Graph} Graph instance
             */
            Graph.create = function create(properties) {
                return new Graph(properties);
            };
    
            /**
             * Encodes the specified Graph message. Does not implicitly {@link serial_v2.Graph.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.Graph
             * @static
             * @param {serial_v2.IGraph} message Graph message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Graph.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.graphName != null && Object.hasOwnProperty.call(message, "graphName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.graphName);
                if (message.opNode != null && message.opNode.length)
                    for (var i = 0; i < message.opNode.length; ++i)
                        $root.serial_v2.OPNode.encode(message.opNode[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.subgRoot != null && Object.hasOwnProperty.call(message, "subgRoot"))
                    $root.serial_v2.SubGraph.encode(message.subgRoot, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.graphAttr != null && Object.hasOwnProperty.call(message, "graphAttr"))
                    for (var keys = Object.keys(message.graphAttr), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 11, wireType 2 =*/90).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.serial_v2.AttrValue.encode(message.graphAttr[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                if (message.opDefs != null && message.opDefs.length)
                    for (var i = 0; i < message.opDefs.length; ++i)
                        $root.serial_v2.OpDef.encode(message.opDefs[i], writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Graph message, length delimited. Does not implicitly {@link serial_v2.Graph.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.Graph
             * @static
             * @param {serial_v2.IGraph} message Graph message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Graph.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Graph message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.Graph
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.Graph} Graph
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Graph.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.Graph(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.graphName = reader.string();
                        break;
                    case 5:
                        if (!(message.opNode && message.opNode.length))
                            message.opNode = [];
                        message.opNode.push($root.serial_v2.OPNode.decode(reader, reader.uint32()));
                        break;
                    case 10:
                        message.subgRoot = $root.serial_v2.SubGraph.decode(reader, reader.uint32());
                        break;
                    case 11:
                        reader.skip().pos++;
                        if (message.graphAttr === $util.emptyObject)
                            message.graphAttr = {};
                        key = reader.string();
                        reader.pos++;
                        message.graphAttr[key] = $root.serial_v2.AttrValue.decode(reader, reader.uint32());
                        break;
                    case 101:
                        if (!(message.opDefs && message.opDefs.length))
                            message.opDefs = [];
                        message.opDefs.push($root.serial_v2.OpDef.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Graph message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.Graph
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.Graph} Graph
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Graph.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Graph message.
             * @function verify
             * @memberof serial_v2.Graph
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Graph.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.graphName != null && message.hasOwnProperty("graphName"))
                    if (!$util.isString(message.graphName))
                        return "graphName: string expected";
                if (message.opNode != null && message.hasOwnProperty("opNode")) {
                    if (!Array.isArray(message.opNode))
                        return "opNode: array expected";
                    for (var i = 0; i < message.opNode.length; ++i) {
                        var error = $root.serial_v2.OPNode.verify(message.opNode[i]);
                        if (error)
                            return "opNode." + error;
                    }
                }
                if (message.subgRoot != null && message.hasOwnProperty("subgRoot")) {
                    var error = $root.serial_v2.SubGraph.verify(message.subgRoot);
                    if (error)
                        return "subgRoot." + error;
                }
                if (message.graphAttr != null && message.hasOwnProperty("graphAttr")) {
                    if (!$util.isObject(message.graphAttr))
                        return "graphAttr: object expected";
                    var key = Object.keys(message.graphAttr);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.serial_v2.AttrValue.verify(message.graphAttr[key[i]]);
                        if (error)
                            return "graphAttr." + error;
                    }
                }
                if (message.opDefs != null && message.hasOwnProperty("opDefs")) {
                    if (!Array.isArray(message.opDefs))
                        return "opDefs: array expected";
                    for (var i = 0; i < message.opDefs.length; ++i) {
                        var error = $root.serial_v2.OpDef.verify(message.opDefs[i]);
                        if (error)
                            return "opDefs." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Graph message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.Graph
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.Graph} Graph
             */
            Graph.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.Graph)
                    return object;
                var message = new $root.serial_v2.Graph();
                if (object.graphName != null)
                    message.graphName = String(object.graphName);
                if (object.opNode) {
                    if (!Array.isArray(object.opNode))
                        throw TypeError(".serial_v2.Graph.opNode: array expected");
                    message.opNode = [];
                    for (var i = 0; i < object.opNode.length; ++i) {
                        if (typeof object.opNode[i] !== "object")
                            throw TypeError(".serial_v2.Graph.opNode: object expected");
                        message.opNode[i] = $root.serial_v2.OPNode.fromObject(object.opNode[i]);
                    }
                }
                if (object.subgRoot != null) {
                    if (typeof object.subgRoot !== "object")
                        throw TypeError(".serial_v2.Graph.subgRoot: object expected");
                    message.subgRoot = $root.serial_v2.SubGraph.fromObject(object.subgRoot);
                }
                if (object.graphAttr) {
                    if (typeof object.graphAttr !== "object")
                        throw TypeError(".serial_v2.Graph.graphAttr: object expected");
                    message.graphAttr = {};
                    for (var keys = Object.keys(object.graphAttr), i = 0; i < keys.length; ++i) {
                        if (typeof object.graphAttr[keys[i]] !== "object")
                            throw TypeError(".serial_v2.Graph.graphAttr: object expected");
                        message.graphAttr[keys[i]] = $root.serial_v2.AttrValue.fromObject(object.graphAttr[keys[i]]);
                    }
                }
                if (object.opDefs) {
                    if (!Array.isArray(object.opDefs))
                        throw TypeError(".serial_v2.Graph.opDefs: array expected");
                    message.opDefs = [];
                    for (var i = 0; i < object.opDefs.length; ++i) {
                        if (typeof object.opDefs[i] !== "object")
                            throw TypeError(".serial_v2.Graph.opDefs: object expected");
                        message.opDefs[i] = $root.serial_v2.OpDef.fromObject(object.opDefs[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Graph message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.Graph
             * @static
             * @param {serial_v2.Graph} message Graph
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Graph.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.opNode = [];
                    object.opDefs = [];
                }
                if (options.objects || options.defaults)
                    object.graphAttr = {};
                if (options.defaults) {
                    object.graphName = "";
                    object.subgRoot = null;
                }
                if (message.graphName != null && message.hasOwnProperty("graphName"))
                    object.graphName = message.graphName;
                if (message.opNode && message.opNode.length) {
                    object.opNode = [];
                    for (var j = 0; j < message.opNode.length; ++j)
                        object.opNode[j] = $root.serial_v2.OPNode.toObject(message.opNode[j], options);
                }
                if (message.subgRoot != null && message.hasOwnProperty("subgRoot"))
                    object.subgRoot = $root.serial_v2.SubGraph.toObject(message.subgRoot, options);
                var keys2;
                if (message.graphAttr && (keys2 = Object.keys(message.graphAttr)).length) {
                    object.graphAttr = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.graphAttr[keys2[j]] = $root.serial_v2.AttrValue.toObject(message.graphAttr[keys2[j]], options);
                }
                if (message.opDefs && message.opDefs.length) {
                    object.opDefs = [];
                    for (var j = 0; j < message.opDefs.length; ++j)
                        object.opDefs[j] = $root.serial_v2.OpDef.toObject(message.opDefs[j], options);
                }
                return object;
            };
    
            /**
             * Converts this Graph to JSON.
             * @function toJSON
             * @memberof serial_v2.Graph
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Graph.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Graph;
        })();
    
        serial_v2.OPNode = (function() {
    
            /**
             * Properties of a OPNode.
             * @memberof serial_v2
             * @interface IOPNode
             * @property {string|null} [opName] OPNode opName
             * @property {string|null} [opType] OPNode opType
             * @property {Object.<string,serial_v2.IAttrValue>|null} [opAttr] OPNode opAttr
             * @property {Array.<serial_v2.IOpArg>|null} [args] OPNode args
             * @property {serial_v2.ITensor|null} [outputTensor] OPNode outputTensor
             */
    
            /**
             * Constructs a new OPNode.
             * @memberof serial_v2
             * @classdesc Represents a OPNode.
             * @implements IOPNode
             * @constructor
             * @param {serial_v2.IOPNode=} [properties] Properties to set
             */
            function OPNode(properties) {
                this.opAttr = {};
                this.args = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * OPNode opName.
             * @member {string} opName
             * @memberof serial_v2.OPNode
             * @instance
             */
            OPNode.prototype.opName = "";
    
            /**
             * OPNode opType.
             * @member {string} opType
             * @memberof serial_v2.OPNode
             * @instance
             */
            OPNode.prototype.opType = "";
    
            /**
             * OPNode opAttr.
             * @member {Object.<string,serial_v2.IAttrValue>} opAttr
             * @memberof serial_v2.OPNode
             * @instance
             */
            OPNode.prototype.opAttr = $util.emptyObject;
    
            /**
             * OPNode args.
             * @member {Array.<serial_v2.IOpArg>} args
             * @memberof serial_v2.OPNode
             * @instance
             */
            OPNode.prototype.args = $util.emptyArray;
    
            /**
             * OPNode outputTensor.
             * @member {serial_v2.ITensor|null|undefined} outputTensor
             * @memberof serial_v2.OPNode
             * @instance
             */
            OPNode.prototype.outputTensor = null;
    
            /**
             * Creates a new OPNode instance using the specified properties.
             * @function create
             * @memberof serial_v2.OPNode
             * @static
             * @param {serial_v2.IOPNode=} [properties] Properties to set
             * @returns {serial_v2.OPNode} OPNode instance
             */
            OPNode.create = function create(properties) {
                return new OPNode(properties);
            };
    
            /**
             * Encodes the specified OPNode message. Does not implicitly {@link serial_v2.OPNode.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.OPNode
             * @static
             * @param {serial_v2.IOPNode} message OPNode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OPNode.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.opName != null && Object.hasOwnProperty.call(message, "opName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.opName);
                if (message.opType != null && Object.hasOwnProperty.call(message, "opType"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.opType);
                if (message.opAttr != null && Object.hasOwnProperty.call(message, "opAttr"))
                    for (var keys = Object.keys(message.opAttr), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.serial_v2.AttrValue.encode(message.opAttr[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                if (message.args != null && message.args.length)
                    for (var i = 0; i < message.args.length; ++i)
                        $root.serial_v2.OpArg.encode(message.args[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.outputTensor != null && Object.hasOwnProperty.call(message, "outputTensor"))
                    $root.serial_v2.Tensor.encode(message.outputTensor, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified OPNode message, length delimited. Does not implicitly {@link serial_v2.OPNode.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.OPNode
             * @static
             * @param {serial_v2.IOPNode} message OPNode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OPNode.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a OPNode message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.OPNode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.OPNode} OPNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OPNode.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.OPNode(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.opName = reader.string();
                        break;
                    case 2:
                        message.opType = reader.string();
                        break;
                    case 3:
                        reader.skip().pos++;
                        if (message.opAttr === $util.emptyObject)
                            message.opAttr = {};
                        key = reader.string();
                        reader.pos++;
                        message.opAttr[key] = $root.serial_v2.AttrValue.decode(reader, reader.uint32());
                        break;
                    case 4:
                        if (!(message.args && message.args.length))
                            message.args = [];
                        message.args.push($root.serial_v2.OpArg.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        message.outputTensor = $root.serial_v2.Tensor.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a OPNode message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.OPNode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.OPNode} OPNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OPNode.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a OPNode message.
             * @function verify
             * @memberof serial_v2.OPNode
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OPNode.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.opName != null && message.hasOwnProperty("opName"))
                    if (!$util.isString(message.opName))
                        return "opName: string expected";
                if (message.opType != null && message.hasOwnProperty("opType"))
                    if (!$util.isString(message.opType))
                        return "opType: string expected";
                if (message.opAttr != null && message.hasOwnProperty("opAttr")) {
                    if (!$util.isObject(message.opAttr))
                        return "opAttr: object expected";
                    var key = Object.keys(message.opAttr);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.serial_v2.AttrValue.verify(message.opAttr[key[i]]);
                        if (error)
                            return "opAttr." + error;
                    }
                }
                if (message.args != null && message.hasOwnProperty("args")) {
                    if (!Array.isArray(message.args))
                        return "args: array expected";
                    for (var i = 0; i < message.args.length; ++i) {
                        var error = $root.serial_v2.OpArg.verify(message.args[i]);
                        if (error)
                            return "args." + error;
                    }
                }
                if (message.outputTensor != null && message.hasOwnProperty("outputTensor")) {
                    var error = $root.serial_v2.Tensor.verify(message.outputTensor);
                    if (error)
                        return "outputTensor." + error;
                }
                return null;
            };
    
            /**
             * Creates a OPNode message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.OPNode
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.OPNode} OPNode
             */
            OPNode.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.OPNode)
                    return object;
                var message = new $root.serial_v2.OPNode();
                if (object.opName != null)
                    message.opName = String(object.opName);
                if (object.opType != null)
                    message.opType = String(object.opType);
                if (object.opAttr) {
                    if (typeof object.opAttr !== "object")
                        throw TypeError(".serial_v2.OPNode.opAttr: object expected");
                    message.opAttr = {};
                    for (var keys = Object.keys(object.opAttr), i = 0; i < keys.length; ++i) {
                        if (typeof object.opAttr[keys[i]] !== "object")
                            throw TypeError(".serial_v2.OPNode.opAttr: object expected");
                        message.opAttr[keys[i]] = $root.serial_v2.AttrValue.fromObject(object.opAttr[keys[i]]);
                    }
                }
                if (object.args) {
                    if (!Array.isArray(object.args))
                        throw TypeError(".serial_v2.OPNode.args: array expected");
                    message.args = [];
                    for (var i = 0; i < object.args.length; ++i) {
                        if (typeof object.args[i] !== "object")
                            throw TypeError(".serial_v2.OPNode.args: object expected");
                        message.args[i] = $root.serial_v2.OpArg.fromObject(object.args[i]);
                    }
                }
                if (object.outputTensor != null) {
                    if (typeof object.outputTensor !== "object")
                        throw TypeError(".serial_v2.OPNode.outputTensor: object expected");
                    message.outputTensor = $root.serial_v2.Tensor.fromObject(object.outputTensor);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a OPNode message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.OPNode
             * @static
             * @param {serial_v2.OPNode} message OPNode
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OPNode.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.args = [];
                if (options.objects || options.defaults)
                    object.opAttr = {};
                if (options.defaults) {
                    object.opName = "";
                    object.opType = "";
                    object.outputTensor = null;
                }
                if (message.opName != null && message.hasOwnProperty("opName"))
                    object.opName = message.opName;
                if (message.opType != null && message.hasOwnProperty("opType"))
                    object.opType = message.opType;
                var keys2;
                if (message.opAttr && (keys2 = Object.keys(message.opAttr)).length) {
                    object.opAttr = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.opAttr[keys2[j]] = $root.serial_v2.AttrValue.toObject(message.opAttr[keys2[j]], options);
                }
                if (message.args && message.args.length) {
                    object.args = [];
                    for (var j = 0; j < message.args.length; ++j)
                        object.args[j] = $root.serial_v2.OpArg.toObject(message.args[j], options);
                }
                if (message.outputTensor != null && message.hasOwnProperty("outputTensor"))
                    object.outputTensor = $root.serial_v2.Tensor.toObject(message.outputTensor, options);
                return object;
            };
    
            /**
             * Converts this OPNode to JSON.
             * @function toJSON
             * @memberof serial_v2.OPNode
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OPNode.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return OPNode;
        })();
    
        serial_v2.OpArg = (function() {
    
            /**
             * Properties of an OpArg.
             * @memberof serial_v2
             * @interface IOpArg
             * @property {string|null} [argName] OpArg argName
             * @property {Array.<string>|null} [argOps] OpArg argOps
             */
    
            /**
             * Constructs a new OpArg.
             * @memberof serial_v2
             * @classdesc Represents an OpArg.
             * @implements IOpArg
             * @constructor
             * @param {serial_v2.IOpArg=} [properties] Properties to set
             */
            function OpArg(properties) {
                this.argOps = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * OpArg argName.
             * @member {string} argName
             * @memberof serial_v2.OpArg
             * @instance
             */
            OpArg.prototype.argName = "";
    
            /**
             * OpArg argOps.
             * @member {Array.<string>} argOps
             * @memberof serial_v2.OpArg
             * @instance
             */
            OpArg.prototype.argOps = $util.emptyArray;
    
            /**
             * Creates a new OpArg instance using the specified properties.
             * @function create
             * @memberof serial_v2.OpArg
             * @static
             * @param {serial_v2.IOpArg=} [properties] Properties to set
             * @returns {serial_v2.OpArg} OpArg instance
             */
            OpArg.create = function create(properties) {
                return new OpArg(properties);
            };
    
            /**
             * Encodes the specified OpArg message. Does not implicitly {@link serial_v2.OpArg.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.OpArg
             * @static
             * @param {serial_v2.IOpArg} message OpArg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpArg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.argName != null && Object.hasOwnProperty.call(message, "argName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.argName);
                if (message.argOps != null && message.argOps.length)
                    for (var i = 0; i < message.argOps.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.argOps[i]);
                return writer;
            };
    
            /**
             * Encodes the specified OpArg message, length delimited. Does not implicitly {@link serial_v2.OpArg.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.OpArg
             * @static
             * @param {serial_v2.IOpArg} message OpArg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpArg.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an OpArg message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.OpArg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.OpArg} OpArg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpArg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.OpArg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.argName = reader.string();
                        break;
                    case 2:
                        if (!(message.argOps && message.argOps.length))
                            message.argOps = [];
                        message.argOps.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an OpArg message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.OpArg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.OpArg} OpArg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpArg.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an OpArg message.
             * @function verify
             * @memberof serial_v2.OpArg
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OpArg.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.argName != null && message.hasOwnProperty("argName"))
                    if (!$util.isString(message.argName))
                        return "argName: string expected";
                if (message.argOps != null && message.hasOwnProperty("argOps")) {
                    if (!Array.isArray(message.argOps))
                        return "argOps: array expected";
                    for (var i = 0; i < message.argOps.length; ++i)
                        if (!$util.isString(message.argOps[i]))
                            return "argOps: string[] expected";
                }
                return null;
            };
    
            /**
             * Creates an OpArg message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.OpArg
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.OpArg} OpArg
             */
            OpArg.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.OpArg)
                    return object;
                var message = new $root.serial_v2.OpArg();
                if (object.argName != null)
                    message.argName = String(object.argName);
                if (object.argOps) {
                    if (!Array.isArray(object.argOps))
                        throw TypeError(".serial_v2.OpArg.argOps: array expected");
                    message.argOps = [];
                    for (var i = 0; i < object.argOps.length; ++i)
                        message.argOps[i] = String(object.argOps[i]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from an OpArg message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.OpArg
             * @static
             * @param {serial_v2.OpArg} message OpArg
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OpArg.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.argOps = [];
                if (options.defaults)
                    object.argName = "";
                if (message.argName != null && message.hasOwnProperty("argName"))
                    object.argName = message.argName;
                if (message.argOps && message.argOps.length) {
                    object.argOps = [];
                    for (var j = 0; j < message.argOps.length; ++j)
                        object.argOps[j] = message.argOps[j];
                }
                return object;
            };
    
            /**
             * Converts this OpArg to JSON.
             * @function toJSON
             * @memberof serial_v2.OpArg
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OpArg.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return OpArg;
        })();
    
        serial_v2.Tensor = (function() {
    
            /**
             * Properties of a Tensor.
             * @memberof serial_v2
             * @interface ITensor
             * @property {string|null} [tensorName] Tensor tensorName
             * @property {Array.<number>|null} [tensorDim] Tensor tensorDim
             * @property {number|null} [dataType] Tensor dataType
             * @property {number|null} [tensorBitWidth] Tensor tensorBitWidth
             * @property {Object.<string,serial_v2.IAttrValue>|null} [tensorAttr] Tensor tensorAttr
             */
    
            /**
             * Constructs a new Tensor.
             * @memberof serial_v2
             * @classdesc Represents a Tensor.
             * @implements ITensor
             * @constructor
             * @param {serial_v2.ITensor=} [properties] Properties to set
             */
            function Tensor(properties) {
                this.tensorDim = [];
                this.tensorAttr = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Tensor tensorName.
             * @member {string} tensorName
             * @memberof serial_v2.Tensor
             * @instance
             */
            Tensor.prototype.tensorName = "";
    
            /**
             * Tensor tensorDim.
             * @member {Array.<number>} tensorDim
             * @memberof serial_v2.Tensor
             * @instance
             */
            Tensor.prototype.tensorDim = $util.emptyArray;
    
            /**
             * Tensor dataType.
             * @member {number} dataType
             * @memberof serial_v2.Tensor
             * @instance
             */
            Tensor.prototype.dataType = 0;
    
            /**
             * Tensor tensorBitWidth.
             * @member {number} tensorBitWidth
             * @memberof serial_v2.Tensor
             * @instance
             */
            Tensor.prototype.tensorBitWidth = 0;
    
            /**
             * Tensor tensorAttr.
             * @member {Object.<string,serial_v2.IAttrValue>} tensorAttr
             * @memberof serial_v2.Tensor
             * @instance
             */
            Tensor.prototype.tensorAttr = $util.emptyObject;
    
            /**
             * Creates a new Tensor instance using the specified properties.
             * @function create
             * @memberof serial_v2.Tensor
             * @static
             * @param {serial_v2.ITensor=} [properties] Properties to set
             * @returns {serial_v2.Tensor} Tensor instance
             */
            Tensor.create = function create(properties) {
                return new Tensor(properties);
            };
    
            /**
             * Encodes the specified Tensor message. Does not implicitly {@link serial_v2.Tensor.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.Tensor
             * @static
             * @param {serial_v2.ITensor} message Tensor message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tensor.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tensorName != null && Object.hasOwnProperty.call(message, "tensorName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.tensorName);
                if (message.tensorDim != null && message.tensorDim.length) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork();
                    for (var i = 0; i < message.tensorDim.length; ++i)
                        writer.uint32(message.tensorDim[i]);
                    writer.ldelim();
                }
                if (message.dataType != null && Object.hasOwnProperty.call(message, "dataType"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.dataType);
                if (message.tensorBitWidth != null && Object.hasOwnProperty.call(message, "tensorBitWidth"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.tensorBitWidth);
                if (message.tensorAttr != null && Object.hasOwnProperty.call(message, "tensorAttr"))
                    for (var keys = Object.keys(message.tensorAttr), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 10, wireType 2 =*/82).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.serial_v2.AttrValue.encode(message.tensorAttr[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };
    
            /**
             * Encodes the specified Tensor message, length delimited. Does not implicitly {@link serial_v2.Tensor.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.Tensor
             * @static
             * @param {serial_v2.ITensor} message Tensor message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tensor.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Tensor message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.Tensor
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.Tensor} Tensor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tensor.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.Tensor(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tensorName = reader.string();
                        break;
                    case 2:
                        if (!(message.tensorDim && message.tensorDim.length))
                            message.tensorDim = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.tensorDim.push(reader.uint32());
                        } else
                            message.tensorDim.push(reader.uint32());
                        break;
                    case 5:
                        message.dataType = reader.int32();
                        break;
                    case 6:
                        message.tensorBitWidth = reader.int32();
                        break;
                    case 10:
                        reader.skip().pos++;
                        if (message.tensorAttr === $util.emptyObject)
                            message.tensorAttr = {};
                        key = reader.string();
                        reader.pos++;
                        message.tensorAttr[key] = $root.serial_v2.AttrValue.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Tensor message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.Tensor
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.Tensor} Tensor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tensor.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Tensor message.
             * @function verify
             * @memberof serial_v2.Tensor
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Tensor.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tensorName != null && message.hasOwnProperty("tensorName"))
                    if (!$util.isString(message.tensorName))
                        return "tensorName: string expected";
                if (message.tensorDim != null && message.hasOwnProperty("tensorDim")) {
                    if (!Array.isArray(message.tensorDim))
                        return "tensorDim: array expected";
                    for (var i = 0; i < message.tensorDim.length; ++i)
                        if (!$util.isInteger(message.tensorDim[i]))
                            return "tensorDim: integer[] expected";
                }
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    if (!$util.isInteger(message.dataType))
                        return "dataType: integer expected";
                if (message.tensorBitWidth != null && message.hasOwnProperty("tensorBitWidth"))
                    if (!$util.isInteger(message.tensorBitWidth))
                        return "tensorBitWidth: integer expected";
                if (message.tensorAttr != null && message.hasOwnProperty("tensorAttr")) {
                    if (!$util.isObject(message.tensorAttr))
                        return "tensorAttr: object expected";
                    var key = Object.keys(message.tensorAttr);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.serial_v2.AttrValue.verify(message.tensorAttr[key[i]]);
                        if (error)
                            return "tensorAttr." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Tensor message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.Tensor
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.Tensor} Tensor
             */
            Tensor.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.Tensor)
                    return object;
                var message = new $root.serial_v2.Tensor();
                if (object.tensorName != null)
                    message.tensorName = String(object.tensorName);
                if (object.tensorDim) {
                    if (!Array.isArray(object.tensorDim))
                        throw TypeError(".serial_v2.Tensor.tensorDim: array expected");
                    message.tensorDim = [];
                    for (var i = 0; i < object.tensorDim.length; ++i)
                        message.tensorDim[i] = object.tensorDim[i] >>> 0;
                }
                if (object.dataType != null)
                    message.dataType = object.dataType | 0;
                if (object.tensorBitWidth != null)
                    message.tensorBitWidth = object.tensorBitWidth | 0;
                if (object.tensorAttr) {
                    if (typeof object.tensorAttr !== "object")
                        throw TypeError(".serial_v2.Tensor.tensorAttr: object expected");
                    message.tensorAttr = {};
                    for (var keys = Object.keys(object.tensorAttr), i = 0; i < keys.length; ++i) {
                        if (typeof object.tensorAttr[keys[i]] !== "object")
                            throw TypeError(".serial_v2.Tensor.tensorAttr: object expected");
                        message.tensorAttr[keys[i]] = $root.serial_v2.AttrValue.fromObject(object.tensorAttr[keys[i]]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Tensor message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.Tensor
             * @static
             * @param {serial_v2.Tensor} message Tensor
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Tensor.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.tensorDim = [];
                if (options.objects || options.defaults)
                    object.tensorAttr = {};
                if (options.defaults) {
                    object.tensorName = "";
                    object.dataType = 0;
                    object.tensorBitWidth = 0;
                }
                if (message.tensorName != null && message.hasOwnProperty("tensorName"))
                    object.tensorName = message.tensorName;
                if (message.tensorDim && message.tensorDim.length) {
                    object.tensorDim = [];
                    for (var j = 0; j < message.tensorDim.length; ++j)
                        object.tensorDim[j] = message.tensorDim[j];
                }
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    object.dataType = message.dataType;
                if (message.tensorBitWidth != null && message.hasOwnProperty("tensorBitWidth"))
                    object.tensorBitWidth = message.tensorBitWidth;
                var keys2;
                if (message.tensorAttr && (keys2 = Object.keys(message.tensorAttr)).length) {
                    object.tensorAttr = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.tensorAttr[keys2[j]] = $root.serial_v2.AttrValue.toObject(message.tensorAttr[keys2[j]], options);
                }
                return object;
            };
    
            /**
             * Converts this Tensor to JSON.
             * @function toJSON
             * @memberof serial_v2.Tensor
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Tensor.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Tensor;
        })();
    
        serial_v2.SubGraph = (function() {
    
            /**
             * Properties of a SubGraph.
             * @memberof serial_v2
             * @interface ISubGraph
             * @property {string|null} [subgraphName] SubGraph subgraphName
             * @property {Array.<string>|null} [opName] SubGraph opName
             * @property {Object.<string,serial_v2.IAttrValue>|null} [subgAttr] SubGraph subgAttr
             * @property {Array.<serial_v2.ISubGraph>|null} [subgChild] SubGraph subgChild
             */
    
            /**
             * Constructs a new SubGraph.
             * @memberof serial_v2
             * @classdesc Represents a SubGraph.
             * @implements ISubGraph
             * @constructor
             * @param {serial_v2.ISubGraph=} [properties] Properties to set
             */
            function SubGraph(properties) {
                this.opName = [];
                this.subgAttr = {};
                this.subgChild = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SubGraph subgraphName.
             * @member {string} subgraphName
             * @memberof serial_v2.SubGraph
             * @instance
             */
            SubGraph.prototype.subgraphName = "";
    
            /**
             * SubGraph opName.
             * @member {Array.<string>} opName
             * @memberof serial_v2.SubGraph
             * @instance
             */
            SubGraph.prototype.opName = $util.emptyArray;
    
            /**
             * SubGraph subgAttr.
             * @member {Object.<string,serial_v2.IAttrValue>} subgAttr
             * @memberof serial_v2.SubGraph
             * @instance
             */
            SubGraph.prototype.subgAttr = $util.emptyObject;
    
            /**
             * SubGraph subgChild.
             * @member {Array.<serial_v2.ISubGraph>} subgChild
             * @memberof serial_v2.SubGraph
             * @instance
             */
            SubGraph.prototype.subgChild = $util.emptyArray;
    
            /**
             * Creates a new SubGraph instance using the specified properties.
             * @function create
             * @memberof serial_v2.SubGraph
             * @static
             * @param {serial_v2.ISubGraph=} [properties] Properties to set
             * @returns {serial_v2.SubGraph} SubGraph instance
             */
            SubGraph.create = function create(properties) {
                return new SubGraph(properties);
            };
    
            /**
             * Encodes the specified SubGraph message. Does not implicitly {@link serial_v2.SubGraph.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.SubGraph
             * @static
             * @param {serial_v2.ISubGraph} message SubGraph message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubGraph.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.subgraphName != null && Object.hasOwnProperty.call(message, "subgraphName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.subgraphName);
                if (message.opName != null && message.opName.length)
                    for (var i = 0; i < message.opName.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.opName[i]);
                if (message.subgAttr != null && Object.hasOwnProperty.call(message, "subgAttr"))
                    for (var keys = Object.keys(message.subgAttr), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.serial_v2.AttrValue.encode(message.subgAttr[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                if (message.subgChild != null && message.subgChild.length)
                    for (var i = 0; i < message.subgChild.length; ++i)
                        $root.serial_v2.SubGraph.encode(message.subgChild[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified SubGraph message, length delimited. Does not implicitly {@link serial_v2.SubGraph.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.SubGraph
             * @static
             * @param {serial_v2.ISubGraph} message SubGraph message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubGraph.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SubGraph message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.SubGraph
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.SubGraph} SubGraph
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubGraph.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.SubGraph(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.subgraphName = reader.string();
                        break;
                    case 3:
                        if (!(message.opName && message.opName.length))
                            message.opName = [];
                        message.opName.push(reader.string());
                        break;
                    case 5:
                        reader.skip().pos++;
                        if (message.subgAttr === $util.emptyObject)
                            message.subgAttr = {};
                        key = reader.string();
                        reader.pos++;
                        message.subgAttr[key] = $root.serial_v2.AttrValue.decode(reader, reader.uint32());
                        break;
                    case 10:
                        if (!(message.subgChild && message.subgChild.length))
                            message.subgChild = [];
                        message.subgChild.push($root.serial_v2.SubGraph.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SubGraph message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.SubGraph
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.SubGraph} SubGraph
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubGraph.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SubGraph message.
             * @function verify
             * @memberof serial_v2.SubGraph
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SubGraph.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.subgraphName != null && message.hasOwnProperty("subgraphName"))
                    if (!$util.isString(message.subgraphName))
                        return "subgraphName: string expected";
                if (message.opName != null && message.hasOwnProperty("opName")) {
                    if (!Array.isArray(message.opName))
                        return "opName: array expected";
                    for (var i = 0; i < message.opName.length; ++i)
                        if (!$util.isString(message.opName[i]))
                            return "opName: string[] expected";
                }
                if (message.subgAttr != null && message.hasOwnProperty("subgAttr")) {
                    if (!$util.isObject(message.subgAttr))
                        return "subgAttr: object expected";
                    var key = Object.keys(message.subgAttr);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.serial_v2.AttrValue.verify(message.subgAttr[key[i]]);
                        if (error)
                            return "subgAttr." + error;
                    }
                }
                if (message.subgChild != null && message.hasOwnProperty("subgChild")) {
                    if (!Array.isArray(message.subgChild))
                        return "subgChild: array expected";
                    for (var i = 0; i < message.subgChild.length; ++i) {
                        var error = $root.serial_v2.SubGraph.verify(message.subgChild[i]);
                        if (error)
                            return "subgChild." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a SubGraph message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.SubGraph
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.SubGraph} SubGraph
             */
            SubGraph.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.SubGraph)
                    return object;
                var message = new $root.serial_v2.SubGraph();
                if (object.subgraphName != null)
                    message.subgraphName = String(object.subgraphName);
                if (object.opName) {
                    if (!Array.isArray(object.opName))
                        throw TypeError(".serial_v2.SubGraph.opName: array expected");
                    message.opName = [];
                    for (var i = 0; i < object.opName.length; ++i)
                        message.opName[i] = String(object.opName[i]);
                }
                if (object.subgAttr) {
                    if (typeof object.subgAttr !== "object")
                        throw TypeError(".serial_v2.SubGraph.subgAttr: object expected");
                    message.subgAttr = {};
                    for (var keys = Object.keys(object.subgAttr), i = 0; i < keys.length; ++i) {
                        if (typeof object.subgAttr[keys[i]] !== "object")
                            throw TypeError(".serial_v2.SubGraph.subgAttr: object expected");
                        message.subgAttr[keys[i]] = $root.serial_v2.AttrValue.fromObject(object.subgAttr[keys[i]]);
                    }
                }
                if (object.subgChild) {
                    if (!Array.isArray(object.subgChild))
                        throw TypeError(".serial_v2.SubGraph.subgChild: array expected");
                    message.subgChild = [];
                    for (var i = 0; i < object.subgChild.length; ++i) {
                        if (typeof object.subgChild[i] !== "object")
                            throw TypeError(".serial_v2.SubGraph.subgChild: object expected");
                        message.subgChild[i] = $root.serial_v2.SubGraph.fromObject(object.subgChild[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a SubGraph message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.SubGraph
             * @static
             * @param {serial_v2.SubGraph} message SubGraph
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SubGraph.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.opName = [];
                    object.subgChild = [];
                }
                if (options.objects || options.defaults)
                    object.subgAttr = {};
                if (options.defaults)
                    object.subgraphName = "";
                if (message.subgraphName != null && message.hasOwnProperty("subgraphName"))
                    object.subgraphName = message.subgraphName;
                if (message.opName && message.opName.length) {
                    object.opName = [];
                    for (var j = 0; j < message.opName.length; ++j)
                        object.opName[j] = message.opName[j];
                }
                var keys2;
                if (message.subgAttr && (keys2 = Object.keys(message.subgAttr)).length) {
                    object.subgAttr = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.subgAttr[keys2[j]] = $root.serial_v2.AttrValue.toObject(message.subgAttr[keys2[j]], options);
                }
                if (message.subgChild && message.subgChild.length) {
                    object.subgChild = [];
                    for (var j = 0; j < message.subgChild.length; ++j)
                        object.subgChild[j] = $root.serial_v2.SubGraph.toObject(message.subgChild[j], options);
                }
                return object;
            };
    
            /**
             * Converts this SubGraph to JSON.
             * @function toJSON
             * @memberof serial_v2.SubGraph
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SubGraph.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SubGraph;
        })();
    
        serial_v2.OpDef = (function() {
    
            /**
             * Properties of an OpDef.
             * @memberof serial_v2
             * @interface IOpDef
             * @property {string|null} [name] OpDef name
             * @property {Array.<serial_v2.IOpArgDef>|null} [inputArgs] OpDef inputArgs
             * @property {Array.<serial_v2.IAttrDef>|null} [attrs] OpDef attrs
             * @property {string|null} [annotation] OpDef annotation
             */
    
            /**
             * Constructs a new OpDef.
             * @memberof serial_v2
             * @classdesc Represents an OpDef.
             * @implements IOpDef
             * @constructor
             * @param {serial_v2.IOpDef=} [properties] Properties to set
             */
            function OpDef(properties) {
                this.inputArgs = [];
                this.attrs = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * OpDef name.
             * @member {string} name
             * @memberof serial_v2.OpDef
             * @instance
             */
            OpDef.prototype.name = "";
    
            /**
             * OpDef inputArgs.
             * @member {Array.<serial_v2.IOpArgDef>} inputArgs
             * @memberof serial_v2.OpDef
             * @instance
             */
            OpDef.prototype.inputArgs = $util.emptyArray;
    
            /**
             * OpDef attrs.
             * @member {Array.<serial_v2.IAttrDef>} attrs
             * @memberof serial_v2.OpDef
             * @instance
             */
            OpDef.prototype.attrs = $util.emptyArray;
    
            /**
             * OpDef annotation.
             * @member {string} annotation
             * @memberof serial_v2.OpDef
             * @instance
             */
            OpDef.prototype.annotation = "";
    
            /**
             * Creates a new OpDef instance using the specified properties.
             * @function create
             * @memberof serial_v2.OpDef
             * @static
             * @param {serial_v2.IOpDef=} [properties] Properties to set
             * @returns {serial_v2.OpDef} OpDef instance
             */
            OpDef.create = function create(properties) {
                return new OpDef(properties);
            };
    
            /**
             * Encodes the specified OpDef message. Does not implicitly {@link serial_v2.OpDef.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.OpDef
             * @static
             * @param {serial_v2.IOpDef} message OpDef message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpDef.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.inputArgs != null && message.inputArgs.length)
                    for (var i = 0; i < message.inputArgs.length; ++i)
                        $root.serial_v2.OpArgDef.encode(message.inputArgs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.attrs != null && message.attrs.length)
                    for (var i = 0; i < message.attrs.length; ++i)
                        $root.serial_v2.AttrDef.encode(message.attrs[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.annotation != null && Object.hasOwnProperty.call(message, "annotation"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.annotation);
                return writer;
            };
    
            /**
             * Encodes the specified OpDef message, length delimited. Does not implicitly {@link serial_v2.OpDef.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.OpDef
             * @static
             * @param {serial_v2.IOpDef} message OpDef message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpDef.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an OpDef message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.OpDef
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.OpDef} OpDef
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpDef.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.OpDef();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.inputArgs && message.inputArgs.length))
                            message.inputArgs = [];
                        message.inputArgs.push($root.serial_v2.OpArgDef.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.attrs && message.attrs.length))
                            message.attrs = [];
                        message.attrs.push($root.serial_v2.AttrDef.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        message.annotation = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an OpDef message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.OpDef
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.OpDef} OpDef
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpDef.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an OpDef message.
             * @function verify
             * @memberof serial_v2.OpDef
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OpDef.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.inputArgs != null && message.hasOwnProperty("inputArgs")) {
                    if (!Array.isArray(message.inputArgs))
                        return "inputArgs: array expected";
                    for (var i = 0; i < message.inputArgs.length; ++i) {
                        var error = $root.serial_v2.OpArgDef.verify(message.inputArgs[i]);
                        if (error)
                            return "inputArgs." + error;
                    }
                }
                if (message.attrs != null && message.hasOwnProperty("attrs")) {
                    if (!Array.isArray(message.attrs))
                        return "attrs: array expected";
                    for (var i = 0; i < message.attrs.length; ++i) {
                        var error = $root.serial_v2.AttrDef.verify(message.attrs[i]);
                        if (error)
                            return "attrs." + error;
                    }
                }
                if (message.annotation != null && message.hasOwnProperty("annotation"))
                    if (!$util.isString(message.annotation))
                        return "annotation: string expected";
                return null;
            };
    
            /**
             * Creates an OpDef message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.OpDef
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.OpDef} OpDef
             */
            OpDef.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.OpDef)
                    return object;
                var message = new $root.serial_v2.OpDef();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.inputArgs) {
                    if (!Array.isArray(object.inputArgs))
                        throw TypeError(".serial_v2.OpDef.inputArgs: array expected");
                    message.inputArgs = [];
                    for (var i = 0; i < object.inputArgs.length; ++i) {
                        if (typeof object.inputArgs[i] !== "object")
                            throw TypeError(".serial_v2.OpDef.inputArgs: object expected");
                        message.inputArgs[i] = $root.serial_v2.OpArgDef.fromObject(object.inputArgs[i]);
                    }
                }
                if (object.attrs) {
                    if (!Array.isArray(object.attrs))
                        throw TypeError(".serial_v2.OpDef.attrs: array expected");
                    message.attrs = [];
                    for (var i = 0; i < object.attrs.length; ++i) {
                        if (typeof object.attrs[i] !== "object")
                            throw TypeError(".serial_v2.OpDef.attrs: object expected");
                        message.attrs[i] = $root.serial_v2.AttrDef.fromObject(object.attrs[i]);
                    }
                }
                if (object.annotation != null)
                    message.annotation = String(object.annotation);
                return message;
            };
    
            /**
             * Creates a plain object from an OpDef message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.OpDef
             * @static
             * @param {serial_v2.OpDef} message OpDef
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OpDef.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.inputArgs = [];
                    object.attrs = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.annotation = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.inputArgs && message.inputArgs.length) {
                    object.inputArgs = [];
                    for (var j = 0; j < message.inputArgs.length; ++j)
                        object.inputArgs[j] = $root.serial_v2.OpArgDef.toObject(message.inputArgs[j], options);
                }
                if (message.attrs && message.attrs.length) {
                    object.attrs = [];
                    for (var j = 0; j < message.attrs.length; ++j)
                        object.attrs[j] = $root.serial_v2.AttrDef.toObject(message.attrs[j], options);
                }
                if (message.annotation != null && message.hasOwnProperty("annotation"))
                    object.annotation = message.annotation;
                return object;
            };
    
            /**
             * Converts this OpDef to JSON.
             * @function toJSON
             * @memberof serial_v2.OpDef
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OpDef.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return OpDef;
        })();
    
        serial_v2.AttrDef = (function() {
    
            /**
             * Properties of an AttrDef.
             * @memberof serial_v2
             * @interface IAttrDef
             * @property {string|null} [name] AttrDef name
             * @property {serial_v2.AttrDef.OccurType|null} [occurType] AttrDef occurType
             * @property {serial_v2.IAttrValue|null} [defaultValue] AttrDef defaultValue
             * @property {number|null} [listLength] AttrDef listLength
             * @property {string|null} [annotation] AttrDef annotation
             */
    
            /**
             * Constructs a new AttrDef.
             * @memberof serial_v2
             * @classdesc Represents an AttrDef.
             * @implements IAttrDef
             * @constructor
             * @param {serial_v2.IAttrDef=} [properties] Properties to set
             */
            function AttrDef(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AttrDef name.
             * @member {string} name
             * @memberof serial_v2.AttrDef
             * @instance
             */
            AttrDef.prototype.name = "";
    
            /**
             * AttrDef occurType.
             * @member {serial_v2.AttrDef.OccurType} occurType
             * @memberof serial_v2.AttrDef
             * @instance
             */
            AttrDef.prototype.occurType = 0;
    
            /**
             * AttrDef defaultValue.
             * @member {serial_v2.IAttrValue|null|undefined} defaultValue
             * @memberof serial_v2.AttrDef
             * @instance
             */
            AttrDef.prototype.defaultValue = null;
    
            /**
             * AttrDef listLength.
             * @member {number} listLength
             * @memberof serial_v2.AttrDef
             * @instance
             */
            AttrDef.prototype.listLength = 0;
    
            /**
             * AttrDef annotation.
             * @member {string} annotation
             * @memberof serial_v2.AttrDef
             * @instance
             */
            AttrDef.prototype.annotation = "";
    
            /**
             * Creates a new AttrDef instance using the specified properties.
             * @function create
             * @memberof serial_v2.AttrDef
             * @static
             * @param {serial_v2.IAttrDef=} [properties] Properties to set
             * @returns {serial_v2.AttrDef} AttrDef instance
             */
            AttrDef.create = function create(properties) {
                return new AttrDef(properties);
            };
    
            /**
             * Encodes the specified AttrDef message. Does not implicitly {@link serial_v2.AttrDef.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.AttrDef
             * @static
             * @param {serial_v2.IAttrDef} message AttrDef message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AttrDef.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.occurType != null && Object.hasOwnProperty.call(message, "occurType"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.occurType);
                if (message.defaultValue != null && Object.hasOwnProperty.call(message, "defaultValue"))
                    $root.serial_v2.AttrValue.encode(message.defaultValue, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.listLength != null && Object.hasOwnProperty.call(message, "listLength"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.listLength);
                if (message.annotation != null && Object.hasOwnProperty.call(message, "annotation"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.annotation);
                return writer;
            };
    
            /**
             * Encodes the specified AttrDef message, length delimited. Does not implicitly {@link serial_v2.AttrDef.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.AttrDef
             * @static
             * @param {serial_v2.IAttrDef} message AttrDef message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AttrDef.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an AttrDef message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.AttrDef
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.AttrDef} AttrDef
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AttrDef.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.AttrDef();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.occurType = reader.int32();
                        break;
                    case 4:
                        message.defaultValue = $root.serial_v2.AttrValue.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.listLength = reader.int32();
                        break;
                    case 7:
                        message.annotation = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an AttrDef message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.AttrDef
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.AttrDef} AttrDef
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AttrDef.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an AttrDef message.
             * @function verify
             * @memberof serial_v2.AttrDef
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AttrDef.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.occurType != null && message.hasOwnProperty("occurType"))
                    switch (message.occurType) {
                    default:
                        return "occurType: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue")) {
                    var error = $root.serial_v2.AttrValue.verify(message.defaultValue);
                    if (error)
                        return "defaultValue." + error;
                }
                if (message.listLength != null && message.hasOwnProperty("listLength"))
                    if (!$util.isInteger(message.listLength))
                        return "listLength: integer expected";
                if (message.annotation != null && message.hasOwnProperty("annotation"))
                    if (!$util.isString(message.annotation))
                        return "annotation: string expected";
                return null;
            };
    
            /**
             * Creates an AttrDef message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.AttrDef
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.AttrDef} AttrDef
             */
            AttrDef.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.AttrDef)
                    return object;
                var message = new $root.serial_v2.AttrDef();
                if (object.name != null)
                    message.name = String(object.name);
                switch (object.occurType) {
                case "REQUIRED":
                case 0:
                    message.occurType = 0;
                    break;
                case "OPTIONAL":
                case 1:
                    message.occurType = 1;
                    break;
                }
                if (object.defaultValue != null) {
                    if (typeof object.defaultValue !== "object")
                        throw TypeError(".serial_v2.AttrDef.defaultValue: object expected");
                    message.defaultValue = $root.serial_v2.AttrValue.fromObject(object.defaultValue);
                }
                if (object.listLength != null)
                    message.listLength = object.listLength | 0;
                if (object.annotation != null)
                    message.annotation = String(object.annotation);
                return message;
            };
    
            /**
             * Creates a plain object from an AttrDef message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.AttrDef
             * @static
             * @param {serial_v2.AttrDef} message AttrDef
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AttrDef.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.occurType = options.enums === String ? "REQUIRED" : 0;
                    object.defaultValue = null;
                    object.listLength = 0;
                    object.annotation = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.occurType != null && message.hasOwnProperty("occurType"))
                    object.occurType = options.enums === String ? $root.serial_v2.AttrDef.OccurType[message.occurType] : message.occurType;
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    object.defaultValue = $root.serial_v2.AttrValue.toObject(message.defaultValue, options);
                if (message.listLength != null && message.hasOwnProperty("listLength"))
                    object.listLength = message.listLength;
                if (message.annotation != null && message.hasOwnProperty("annotation"))
                    object.annotation = message.annotation;
                return object;
            };
    
            /**
             * Converts this AttrDef to JSON.
             * @function toJSON
             * @memberof serial_v2.AttrDef
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AttrDef.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * OccurType enum.
             * @name serial_v2.AttrDef.OccurType
             * @enum {number}
             * @property {number} REQUIRED=0 REQUIRED value
             * @property {number} OPTIONAL=1 OPTIONAL value
             */
            AttrDef.OccurType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "REQUIRED"] = 0;
                values[valuesById[1] = "OPTIONAL"] = 1;
                return values;
            })();
    
            return AttrDef;
        })();
    
        serial_v2.OpArgDef = (function() {
    
            /**
             * Properties of an OpArgDef.
             * @memberof serial_v2
             * @interface IOpArgDef
             * @property {string|null} [name] OpArgDef name
             * @property {serial_v2.OpArgDef.OccurType|null} [occurType] OpArgDef occurType
             * @property {number|null} [dataType] OpArgDef dataType
             * @property {string|null} [annotation] OpArgDef annotation
             */
    
            /**
             * Constructs a new OpArgDef.
             * @memberof serial_v2
             * @classdesc Represents an OpArgDef.
             * @implements IOpArgDef
             * @constructor
             * @param {serial_v2.IOpArgDef=} [properties] Properties to set
             */
            function OpArgDef(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * OpArgDef name.
             * @member {string} name
             * @memberof serial_v2.OpArgDef
             * @instance
             */
            OpArgDef.prototype.name = "";
    
            /**
             * OpArgDef occurType.
             * @member {serial_v2.OpArgDef.OccurType} occurType
             * @memberof serial_v2.OpArgDef
             * @instance
             */
            OpArgDef.prototype.occurType = 0;
    
            /**
             * OpArgDef dataType.
             * @member {number} dataType
             * @memberof serial_v2.OpArgDef
             * @instance
             */
            OpArgDef.prototype.dataType = 0;
    
            /**
             * OpArgDef annotation.
             * @member {string} annotation
             * @memberof serial_v2.OpArgDef
             * @instance
             */
            OpArgDef.prototype.annotation = "";
    
            /**
             * Creates a new OpArgDef instance using the specified properties.
             * @function create
             * @memberof serial_v2.OpArgDef
             * @static
             * @param {serial_v2.IOpArgDef=} [properties] Properties to set
             * @returns {serial_v2.OpArgDef} OpArgDef instance
             */
            OpArgDef.create = function create(properties) {
                return new OpArgDef(properties);
            };
    
            /**
             * Encodes the specified OpArgDef message. Does not implicitly {@link serial_v2.OpArgDef.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.OpArgDef
             * @static
             * @param {serial_v2.IOpArgDef} message OpArgDef message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpArgDef.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.occurType != null && Object.hasOwnProperty.call(message, "occurType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.occurType);
                if (message.dataType != null && Object.hasOwnProperty.call(message, "dataType"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.dataType);
                if (message.annotation != null && Object.hasOwnProperty.call(message, "annotation"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.annotation);
                return writer;
            };
    
            /**
             * Encodes the specified OpArgDef message, length delimited. Does not implicitly {@link serial_v2.OpArgDef.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.OpArgDef
             * @static
             * @param {serial_v2.IOpArgDef} message OpArgDef message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OpArgDef.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an OpArgDef message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.OpArgDef
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.OpArgDef} OpArgDef
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpArgDef.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.OpArgDef();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.occurType = reader.int32();
                        break;
                    case 3:
                        message.dataType = reader.int32();
                        break;
                    case 4:
                        message.annotation = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an OpArgDef message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.OpArgDef
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.OpArgDef} OpArgDef
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OpArgDef.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an OpArgDef message.
             * @function verify
             * @memberof serial_v2.OpArgDef
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OpArgDef.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.occurType != null && message.hasOwnProperty("occurType"))
                    switch (message.occurType) {
                    default:
                        return "occurType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    if (!$util.isInteger(message.dataType))
                        return "dataType: integer expected";
                if (message.annotation != null && message.hasOwnProperty("annotation"))
                    if (!$util.isString(message.annotation))
                        return "annotation: string expected";
                return null;
            };
    
            /**
             * Creates an OpArgDef message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.OpArgDef
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.OpArgDef} OpArgDef
             */
            OpArgDef.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.OpArgDef)
                    return object;
                var message = new $root.serial_v2.OpArgDef();
                if (object.name != null)
                    message.name = String(object.name);
                switch (object.occurType) {
                case "REQUIRED":
                case 0:
                    message.occurType = 0;
                    break;
                case "OPTIONAL":
                case 1:
                    message.occurType = 1;
                    break;
                case "REPEATED":
                case 2:
                    message.occurType = 2;
                    break;
                case "REQUIRED_AND_REPEATED":
                case 3:
                    message.occurType = 3;
                    break;
                }
                if (object.dataType != null)
                    message.dataType = object.dataType | 0;
                if (object.annotation != null)
                    message.annotation = String(object.annotation);
                return message;
            };
    
            /**
             * Creates a plain object from an OpArgDef message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.OpArgDef
             * @static
             * @param {serial_v2.OpArgDef} message OpArgDef
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OpArgDef.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.occurType = options.enums === String ? "REQUIRED" : 0;
                    object.dataType = 0;
                    object.annotation = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.occurType != null && message.hasOwnProperty("occurType"))
                    object.occurType = options.enums === String ? $root.serial_v2.OpArgDef.OccurType[message.occurType] : message.occurType;
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    object.dataType = message.dataType;
                if (message.annotation != null && message.hasOwnProperty("annotation"))
                    object.annotation = message.annotation;
                return object;
            };
    
            /**
             * Converts this OpArgDef to JSON.
             * @function toJSON
             * @memberof serial_v2.OpArgDef
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OpArgDef.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * OccurType enum.
             * @name serial_v2.OpArgDef.OccurType
             * @enum {number}
             * @property {number} REQUIRED=0 REQUIRED value
             * @property {number} OPTIONAL=1 OPTIONAL value
             * @property {number} REPEATED=2 REPEATED value
             * @property {number} REQUIRED_AND_REPEATED=3 REQUIRED_AND_REPEATED value
             */
            OpArgDef.OccurType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "REQUIRED"] = 0;
                values[valuesById[1] = "OPTIONAL"] = 1;
                values[valuesById[2] = "REPEATED"] = 2;
                values[valuesById[3] = "REQUIRED_AND_REPEATED"] = 3;
                return values;
            })();
    
            return OpArgDef;
        })();
    
        serial_v2.AttrValue = (function() {
    
            /**
             * Properties of an AttrValue.
             * @memberof serial_v2
             * @interface IAttrValue
             * @property {boolean|null} [boolValue] AttrValue boolValue
             * @property {number|null} [int32Value] AttrValue int32Value
             * @property {number|null} [uint32Value] AttrValue uint32Value
             * @property {number|Long|null} [int64Value] AttrValue int64Value
             * @property {number|Long|null} [uint64Value] AttrValue uint64Value
             * @property {number|null} [floatValue] AttrValue floatValue
             * @property {number|null} [doubleValue] AttrValue doubleValue
             * @property {string|null} [stringValue] AttrValue stringValue
             * @property {serial_v2.IBytes|null} [bytesValue] AttrValue bytesValue
             * @property {serial_v2.IBoolVec|null} [boolVecValue] AttrValue boolVecValue
             * @property {serial_v2.IInt32Vec|null} [int32VecValue] AttrValue int32VecValue
             * @property {serial_v2.IUint32Vec|null} [uint32VecValue] AttrValue uint32VecValue
             * @property {serial_v2.IInt64Vec|null} [int64VecValue] AttrValue int64VecValue
             * @property {serial_v2.IUint64Vec|null} [uint64VecValue] AttrValue uint64VecValue
             * @property {serial_v2.IFloatVec|null} [floatVecValue] AttrValue floatVecValue
             * @property {serial_v2.IDoubleVec|null} [doubleVecValue] AttrValue doubleVecValue
             * @property {serial_v2.IStringVec|null} [stringVecValue] AttrValue stringVecValue
             * @property {serial_v2.IBytesVec|null} [bytesVecValue] AttrValue bytesVecValue
             * @property {serial_v2.IMapString2Int32|null} [mapString_2Int32Value] AttrValue mapString_2Int32Value
             * @property {serial_v2.IMapString2Uint32|null} [mapString_2Uint32Value] AttrValue mapString_2Uint32Value
             * @property {serial_v2.IMapString2Int64|null} [mapString_2Int64Value] AttrValue mapString_2Int64Value
             * @property {serial_v2.IMapString2Uint64|null} [mapString_2Uint64Value] AttrValue mapString_2Uint64Value
             * @property {serial_v2.IMapString2String|null} [mapString_2StringValue] AttrValue mapString_2StringValue
             * @property {serial_v2.IMapString2Bytes|null} [mapString_2BytesValue] AttrValue mapString_2BytesValue
             * @property {serial_v2.IMapString2Int32Vec|null} [mapString_2Int32VecValue] AttrValue mapString_2Int32VecValue
             * @property {serial_v2.IMapString2Uint32Vec|null} [mapString_2Uint32VecValue] AttrValue mapString_2Uint32VecValue
             * @property {serial_v2.IMapString2Int64Vec|null} [mapString_2Int64VecValue] AttrValue mapString_2Int64VecValue
             * @property {serial_v2.IMapString2Uint64Vec|null} [mapString_2Uint64VecValue] AttrValue mapString_2Uint64VecValue
             * @property {serial_v2.IMapString2StringVec|null} [mapString_2StringVecValue] AttrValue mapString_2StringVecValue
             */
    
            /**
             * Constructs a new AttrValue.
             * @memberof serial_v2
             * @classdesc Represents an AttrValue.
             * @implements IAttrValue
             * @constructor
             * @param {serial_v2.IAttrValue=} [properties] Properties to set
             */
            function AttrValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AttrValue boolValue.
             * @member {boolean} boolValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.boolValue = false;
    
            /**
             * AttrValue int32Value.
             * @member {number} int32Value
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.int32Value = 0;
    
            /**
             * AttrValue uint32Value.
             * @member {number} uint32Value
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.uint32Value = 0;
    
            /**
             * AttrValue int64Value.
             * @member {number|Long} int64Value
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.int64Value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * AttrValue uint64Value.
             * @member {number|Long} uint64Value
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.uint64Value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * AttrValue floatValue.
             * @member {number} floatValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.floatValue = 0;
    
            /**
             * AttrValue doubleValue.
             * @member {number} doubleValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.doubleValue = 0;
    
            /**
             * AttrValue stringValue.
             * @member {string} stringValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.stringValue = "";
    
            /**
             * AttrValue bytesValue.
             * @member {serial_v2.IBytes|null|undefined} bytesValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.bytesValue = null;
    
            /**
             * AttrValue boolVecValue.
             * @member {serial_v2.IBoolVec|null|undefined} boolVecValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.boolVecValue = null;
    
            /**
             * AttrValue int32VecValue.
             * @member {serial_v2.IInt32Vec|null|undefined} int32VecValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.int32VecValue = null;
    
            /**
             * AttrValue uint32VecValue.
             * @member {serial_v2.IUint32Vec|null|undefined} uint32VecValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.uint32VecValue = null;
    
            /**
             * AttrValue int64VecValue.
             * @member {serial_v2.IInt64Vec|null|undefined} int64VecValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.int64VecValue = null;
    
            /**
             * AttrValue uint64VecValue.
             * @member {serial_v2.IUint64Vec|null|undefined} uint64VecValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.uint64VecValue = null;
    
            /**
             * AttrValue floatVecValue.
             * @member {serial_v2.IFloatVec|null|undefined} floatVecValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.floatVecValue = null;
    
            /**
             * AttrValue doubleVecValue.
             * @member {serial_v2.IDoubleVec|null|undefined} doubleVecValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.doubleVecValue = null;
    
            /**
             * AttrValue stringVecValue.
             * @member {serial_v2.IStringVec|null|undefined} stringVecValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.stringVecValue = null;
    
            /**
             * AttrValue bytesVecValue.
             * @member {serial_v2.IBytesVec|null|undefined} bytesVecValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.bytesVecValue = null;
    
            /**
             * AttrValue mapString_2Int32Value.
             * @member {serial_v2.IMapString2Int32|null|undefined} mapString_2Int32Value
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.mapString_2Int32Value = null;
    
            /**
             * AttrValue mapString_2Uint32Value.
             * @member {serial_v2.IMapString2Uint32|null|undefined} mapString_2Uint32Value
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.mapString_2Uint32Value = null;
    
            /**
             * AttrValue mapString_2Int64Value.
             * @member {serial_v2.IMapString2Int64|null|undefined} mapString_2Int64Value
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.mapString_2Int64Value = null;
    
            /**
             * AttrValue mapString_2Uint64Value.
             * @member {serial_v2.IMapString2Uint64|null|undefined} mapString_2Uint64Value
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.mapString_2Uint64Value = null;
    
            /**
             * AttrValue mapString_2StringValue.
             * @member {serial_v2.IMapString2String|null|undefined} mapString_2StringValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.mapString_2StringValue = null;
    
            /**
             * AttrValue mapString_2BytesValue.
             * @member {serial_v2.IMapString2Bytes|null|undefined} mapString_2BytesValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.mapString_2BytesValue = null;
    
            /**
             * AttrValue mapString_2Int32VecValue.
             * @member {serial_v2.IMapString2Int32Vec|null|undefined} mapString_2Int32VecValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.mapString_2Int32VecValue = null;
    
            /**
             * AttrValue mapString_2Uint32VecValue.
             * @member {serial_v2.IMapString2Uint32Vec|null|undefined} mapString_2Uint32VecValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.mapString_2Uint32VecValue = null;
    
            /**
             * AttrValue mapString_2Int64VecValue.
             * @member {serial_v2.IMapString2Int64Vec|null|undefined} mapString_2Int64VecValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.mapString_2Int64VecValue = null;
    
            /**
             * AttrValue mapString_2Uint64VecValue.
             * @member {serial_v2.IMapString2Uint64Vec|null|undefined} mapString_2Uint64VecValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.mapString_2Uint64VecValue = null;
    
            /**
             * AttrValue mapString_2StringVecValue.
             * @member {serial_v2.IMapString2StringVec|null|undefined} mapString_2StringVecValue
             * @memberof serial_v2.AttrValue
             * @instance
             */
            AttrValue.prototype.mapString_2StringVecValue = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * AttrValue value.
             * @member {"boolValue"|"int32Value"|"uint32Value"|"int64Value"|"uint64Value"|"floatValue"|"doubleValue"|"stringValue"|"bytesValue"|"boolVecValue"|"int32VecValue"|"uint32VecValue"|"int64VecValue"|"uint64VecValue"|"floatVecValue"|"doubleVecValue"|"stringVecValue"|"bytesVecValue"|"mapString_2Int32Value"|"mapString_2Uint32Value"|"mapString_2Int64Value"|"mapString_2Uint64Value"|"mapString_2StringValue"|"mapString_2BytesValue"|"mapString_2Int32VecValue"|"mapString_2Uint32VecValue"|"mapString_2Int64VecValue"|"mapString_2Uint64VecValue"|"mapString_2StringVecValue"|undefined} value
             * @memberof serial_v2.AttrValue
             * @instance
             */
            Object.defineProperty(AttrValue.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["boolValue", "int32Value", "uint32Value", "int64Value", "uint64Value", "floatValue", "doubleValue", "stringValue", "bytesValue", "boolVecValue", "int32VecValue", "uint32VecValue", "int64VecValue", "uint64VecValue", "floatVecValue", "doubleVecValue", "stringVecValue", "bytesVecValue", "mapString_2Int32Value", "mapString_2Uint32Value", "mapString_2Int64Value", "mapString_2Uint64Value", "mapString_2StringValue", "mapString_2BytesValue", "mapString_2Int32VecValue", "mapString_2Uint32VecValue", "mapString_2Int64VecValue", "mapString_2Uint64VecValue", "mapString_2StringVecValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new AttrValue instance using the specified properties.
             * @function create
             * @memberof serial_v2.AttrValue
             * @static
             * @param {serial_v2.IAttrValue=} [properties] Properties to set
             * @returns {serial_v2.AttrValue} AttrValue instance
             */
            AttrValue.create = function create(properties) {
                return new AttrValue(properties);
            };
    
            /**
             * Encodes the specified AttrValue message. Does not implicitly {@link serial_v2.AttrValue.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.AttrValue
             * @static
             * @param {serial_v2.IAttrValue} message AttrValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AttrValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.boolValue != null && Object.hasOwnProperty.call(message, "boolValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.boolValue);
                if (message.int32Value != null && Object.hasOwnProperty.call(message, "int32Value"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.int32Value);
                if (message.uint32Value != null && Object.hasOwnProperty.call(message, "uint32Value"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.uint32Value);
                if (message.int64Value != null && Object.hasOwnProperty.call(message, "int64Value"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int64(message.int64Value);
                if (message.uint64Value != null && Object.hasOwnProperty.call(message, "uint64Value"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.uint64Value);
                if (message.floatValue != null && Object.hasOwnProperty.call(message, "floatValue"))
                    writer.uint32(/* id 9, wireType 5 =*/77).float(message.floatValue);
                if (message.doubleValue != null && Object.hasOwnProperty.call(message, "doubleValue"))
                    writer.uint32(/* id 10, wireType 1 =*/81).double(message.doubleValue);
                if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.stringValue);
                if (message.bytesValue != null && Object.hasOwnProperty.call(message, "bytesValue"))
                    $root.serial_v2.Bytes.encode(message.bytesValue, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                if (message.boolVecValue != null && Object.hasOwnProperty.call(message, "boolVecValue"))
                    $root.serial_v2.BoolVec.encode(message.boolVecValue, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                if (message.int32VecValue != null && Object.hasOwnProperty.call(message, "int32VecValue"))
                    $root.serial_v2.Int32Vec.encode(message.int32VecValue, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                if (message.uint32VecValue != null && Object.hasOwnProperty.call(message, "uint32VecValue"))
                    $root.serial_v2.Uint32Vec.encode(message.uint32VecValue, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                if (message.int64VecValue != null && Object.hasOwnProperty.call(message, "int64VecValue"))
                    $root.serial_v2.Int64Vec.encode(message.int64VecValue, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                if (message.uint64VecValue != null && Object.hasOwnProperty.call(message, "uint64VecValue"))
                    $root.serial_v2.Uint64Vec.encode(message.uint64VecValue, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
                if (message.floatVecValue != null && Object.hasOwnProperty.call(message, "floatVecValue"))
                    $root.serial_v2.FloatVec.encode(message.floatVecValue, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
                if (message.doubleVecValue != null && Object.hasOwnProperty.call(message, "doubleVecValue"))
                    $root.serial_v2.DoubleVec.encode(message.doubleVecValue, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
                if (message.stringVecValue != null && Object.hasOwnProperty.call(message, "stringVecValue"))
                    $root.serial_v2.StringVec.encode(message.stringVecValue, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
                if (message.bytesVecValue != null && Object.hasOwnProperty.call(message, "bytesVecValue"))
                    $root.serial_v2.BytesVec.encode(message.bytesVecValue, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
                if (message.mapString_2Int32Value != null && Object.hasOwnProperty.call(message, "mapString_2Int32Value"))
                    $root.serial_v2.MapString2Int32.encode(message.mapString_2Int32Value, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
                if (message.mapString_2Uint32Value != null && Object.hasOwnProperty.call(message, "mapString_2Uint32Value"))
                    $root.serial_v2.MapString2Uint32.encode(message.mapString_2Uint32Value, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
                if (message.mapString_2Int64Value != null && Object.hasOwnProperty.call(message, "mapString_2Int64Value"))
                    $root.serial_v2.MapString2Int64.encode(message.mapString_2Int64Value, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
                if (message.mapString_2Uint64Value != null && Object.hasOwnProperty.call(message, "mapString_2Uint64Value"))
                    $root.serial_v2.MapString2Uint64.encode(message.mapString_2Uint64Value, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
                if (message.mapString_2StringValue != null && Object.hasOwnProperty.call(message, "mapString_2StringValue"))
                    $root.serial_v2.MapString2String.encode(message.mapString_2StringValue, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
                if (message.mapString_2BytesValue != null && Object.hasOwnProperty.call(message, "mapString_2BytesValue"))
                    $root.serial_v2.MapString2Bytes.encode(message.mapString_2BytesValue, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
                if (message.mapString_2Int32VecValue != null && Object.hasOwnProperty.call(message, "mapString_2Int32VecValue"))
                    $root.serial_v2.MapString2Int32Vec.encode(message.mapString_2Int32VecValue, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
                if (message.mapString_2Uint32VecValue != null && Object.hasOwnProperty.call(message, "mapString_2Uint32VecValue"))
                    $root.serial_v2.MapString2Uint32Vec.encode(message.mapString_2Uint32VecValue, writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
                if (message.mapString_2Int64VecValue != null && Object.hasOwnProperty.call(message, "mapString_2Int64VecValue"))
                    $root.serial_v2.MapString2Int64Vec.encode(message.mapString_2Int64VecValue, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
                if (message.mapString_2Uint64VecValue != null && Object.hasOwnProperty.call(message, "mapString_2Uint64VecValue"))
                    $root.serial_v2.MapString2Uint64Vec.encode(message.mapString_2Uint64VecValue, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
                if (message.mapString_2StringVecValue != null && Object.hasOwnProperty.call(message, "mapString_2StringVecValue"))
                    $root.serial_v2.MapString2StringVec.encode(message.mapString_2StringVecValue, writer.uint32(/* id 32, wireType 2 =*/258).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified AttrValue message, length delimited. Does not implicitly {@link serial_v2.AttrValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.AttrValue
             * @static
             * @param {serial_v2.IAttrValue} message AttrValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AttrValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an AttrValue message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.AttrValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.AttrValue} AttrValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AttrValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.AttrValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 4:
                        message.boolValue = reader.bool();
                        break;
                    case 5:
                        message.int32Value = reader.int32();
                        break;
                    case 6:
                        message.uint32Value = reader.uint32();
                        break;
                    case 7:
                        message.int64Value = reader.int64();
                        break;
                    case 8:
                        message.uint64Value = reader.uint64();
                        break;
                    case 9:
                        message.floatValue = reader.float();
                        break;
                    case 10:
                        message.doubleValue = reader.double();
                        break;
                    case 11:
                        message.stringValue = reader.string();
                        break;
                    case 12:
                        message.bytesValue = $root.serial_v2.Bytes.decode(reader, reader.uint32());
                        break;
                    case 13:
                        message.boolVecValue = $root.serial_v2.BoolVec.decode(reader, reader.uint32());
                        break;
                    case 14:
                        message.int32VecValue = $root.serial_v2.Int32Vec.decode(reader, reader.uint32());
                        break;
                    case 15:
                        message.uint32VecValue = $root.serial_v2.Uint32Vec.decode(reader, reader.uint32());
                        break;
                    case 16:
                        message.int64VecValue = $root.serial_v2.Int64Vec.decode(reader, reader.uint32());
                        break;
                    case 17:
                        message.uint64VecValue = $root.serial_v2.Uint64Vec.decode(reader, reader.uint32());
                        break;
                    case 18:
                        message.floatVecValue = $root.serial_v2.FloatVec.decode(reader, reader.uint32());
                        break;
                    case 19:
                        message.doubleVecValue = $root.serial_v2.DoubleVec.decode(reader, reader.uint32());
                        break;
                    case 20:
                        message.stringVecValue = $root.serial_v2.StringVec.decode(reader, reader.uint32());
                        break;
                    case 21:
                        message.bytesVecValue = $root.serial_v2.BytesVec.decode(reader, reader.uint32());
                        break;
                    case 22:
                        message.mapString_2Int32Value = $root.serial_v2.MapString2Int32.decode(reader, reader.uint32());
                        break;
                    case 23:
                        message.mapString_2Uint32Value = $root.serial_v2.MapString2Uint32.decode(reader, reader.uint32());
                        break;
                    case 24:
                        message.mapString_2Int64Value = $root.serial_v2.MapString2Int64.decode(reader, reader.uint32());
                        break;
                    case 25:
                        message.mapString_2Uint64Value = $root.serial_v2.MapString2Uint64.decode(reader, reader.uint32());
                        break;
                    case 26:
                        message.mapString_2StringValue = $root.serial_v2.MapString2String.decode(reader, reader.uint32());
                        break;
                    case 27:
                        message.mapString_2BytesValue = $root.serial_v2.MapString2Bytes.decode(reader, reader.uint32());
                        break;
                    case 28:
                        message.mapString_2Int32VecValue = $root.serial_v2.MapString2Int32Vec.decode(reader, reader.uint32());
                        break;
                    case 29:
                        message.mapString_2Uint32VecValue = $root.serial_v2.MapString2Uint32Vec.decode(reader, reader.uint32());
                        break;
                    case 30:
                        message.mapString_2Int64VecValue = $root.serial_v2.MapString2Int64Vec.decode(reader, reader.uint32());
                        break;
                    case 31:
                        message.mapString_2Uint64VecValue = $root.serial_v2.MapString2Uint64Vec.decode(reader, reader.uint32());
                        break;
                    case 32:
                        message.mapString_2StringVecValue = $root.serial_v2.MapString2StringVec.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an AttrValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.AttrValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.AttrValue} AttrValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AttrValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an AttrValue message.
             * @function verify
             * @memberof serial_v2.AttrValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AttrValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    properties.value = 1;
                    if (typeof message.boolValue !== "boolean")
                        return "boolValue: boolean expected";
                }
                if (message.int32Value != null && message.hasOwnProperty("int32Value")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (!$util.isInteger(message.int32Value))
                        return "int32Value: integer expected";
                }
                if (message.uint32Value != null && message.hasOwnProperty("uint32Value")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (!$util.isInteger(message.uint32Value))
                        return "uint32Value: integer expected";
                }
                if (message.int64Value != null && message.hasOwnProperty("int64Value")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (!$util.isInteger(message.int64Value) && !(message.int64Value && $util.isInteger(message.int64Value.low) && $util.isInteger(message.int64Value.high)))
                        return "int64Value: integer|Long expected";
                }
                if (message.uint64Value != null && message.hasOwnProperty("uint64Value")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (!$util.isInteger(message.uint64Value) && !(message.uint64Value && $util.isInteger(message.uint64Value.low) && $util.isInteger(message.uint64Value.high)))
                        return "uint64Value: integer|Long expected";
                }
                if (message.floatValue != null && message.hasOwnProperty("floatValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (typeof message.floatValue !== "number")
                        return "floatValue: number expected";
                }
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (typeof message.doubleValue !== "number")
                        return "doubleValue: number expected";
                }
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (!$util.isString(message.stringValue))
                        return "stringValue: string expected";
                }
                if (message.bytesValue != null && message.hasOwnProperty("bytesValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.Bytes.verify(message.bytesValue);
                        if (error)
                            return "bytesValue." + error;
                    }
                }
                if (message.boolVecValue != null && message.hasOwnProperty("boolVecValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.BoolVec.verify(message.boolVecValue);
                        if (error)
                            return "boolVecValue." + error;
                    }
                }
                if (message.int32VecValue != null && message.hasOwnProperty("int32VecValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.Int32Vec.verify(message.int32VecValue);
                        if (error)
                            return "int32VecValue." + error;
                    }
                }
                if (message.uint32VecValue != null && message.hasOwnProperty("uint32VecValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.Uint32Vec.verify(message.uint32VecValue);
                        if (error)
                            return "uint32VecValue." + error;
                    }
                }
                if (message.int64VecValue != null && message.hasOwnProperty("int64VecValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.Int64Vec.verify(message.int64VecValue);
                        if (error)
                            return "int64VecValue." + error;
                    }
                }
                if (message.uint64VecValue != null && message.hasOwnProperty("uint64VecValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.Uint64Vec.verify(message.uint64VecValue);
                        if (error)
                            return "uint64VecValue." + error;
                    }
                }
                if (message.floatVecValue != null && message.hasOwnProperty("floatVecValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.FloatVec.verify(message.floatVecValue);
                        if (error)
                            return "floatVecValue." + error;
                    }
                }
                if (message.doubleVecValue != null && message.hasOwnProperty("doubleVecValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.DoubleVec.verify(message.doubleVecValue);
                        if (error)
                            return "doubleVecValue." + error;
                    }
                }
                if (message.stringVecValue != null && message.hasOwnProperty("stringVecValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.StringVec.verify(message.stringVecValue);
                        if (error)
                            return "stringVecValue." + error;
                    }
                }
                if (message.bytesVecValue != null && message.hasOwnProperty("bytesVecValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.BytesVec.verify(message.bytesVecValue);
                        if (error)
                            return "bytesVecValue." + error;
                    }
                }
                if (message.mapString_2Int32Value != null && message.hasOwnProperty("mapString_2Int32Value")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.MapString2Int32.verify(message.mapString_2Int32Value);
                        if (error)
                            return "mapString_2Int32Value." + error;
                    }
                }
                if (message.mapString_2Uint32Value != null && message.hasOwnProperty("mapString_2Uint32Value")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.MapString2Uint32.verify(message.mapString_2Uint32Value);
                        if (error)
                            return "mapString_2Uint32Value." + error;
                    }
                }
                if (message.mapString_2Int64Value != null && message.hasOwnProperty("mapString_2Int64Value")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.MapString2Int64.verify(message.mapString_2Int64Value);
                        if (error)
                            return "mapString_2Int64Value." + error;
                    }
                }
                if (message.mapString_2Uint64Value != null && message.hasOwnProperty("mapString_2Uint64Value")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.MapString2Uint64.verify(message.mapString_2Uint64Value);
                        if (error)
                            return "mapString_2Uint64Value." + error;
                    }
                }
                if (message.mapString_2StringValue != null && message.hasOwnProperty("mapString_2StringValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.MapString2String.verify(message.mapString_2StringValue);
                        if (error)
                            return "mapString_2StringValue." + error;
                    }
                }
                if (message.mapString_2BytesValue != null && message.hasOwnProperty("mapString_2BytesValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.MapString2Bytes.verify(message.mapString_2BytesValue);
                        if (error)
                            return "mapString_2BytesValue." + error;
                    }
                }
                if (message.mapString_2Int32VecValue != null && message.hasOwnProperty("mapString_2Int32VecValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.MapString2Int32Vec.verify(message.mapString_2Int32VecValue);
                        if (error)
                            return "mapString_2Int32VecValue." + error;
                    }
                }
                if (message.mapString_2Uint32VecValue != null && message.hasOwnProperty("mapString_2Uint32VecValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.MapString2Uint32Vec.verify(message.mapString_2Uint32VecValue);
                        if (error)
                            return "mapString_2Uint32VecValue." + error;
                    }
                }
                if (message.mapString_2Int64VecValue != null && message.hasOwnProperty("mapString_2Int64VecValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.MapString2Int64Vec.verify(message.mapString_2Int64VecValue);
                        if (error)
                            return "mapString_2Int64VecValue." + error;
                    }
                }
                if (message.mapString_2Uint64VecValue != null && message.hasOwnProperty("mapString_2Uint64VecValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.MapString2Uint64Vec.verify(message.mapString_2Uint64VecValue);
                        if (error)
                            return "mapString_2Uint64VecValue." + error;
                    }
                }
                if (message.mapString_2StringVecValue != null && message.hasOwnProperty("mapString_2StringVecValue")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.serial_v2.MapString2StringVec.verify(message.mapString_2StringVecValue);
                        if (error)
                            return "mapString_2StringVecValue." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates an AttrValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.AttrValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.AttrValue} AttrValue
             */
            AttrValue.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.AttrValue)
                    return object;
                var message = new $root.serial_v2.AttrValue();
                if (object.boolValue != null)
                    message.boolValue = Boolean(object.boolValue);
                if (object.int32Value != null)
                    message.int32Value = object.int32Value | 0;
                if (object.uint32Value != null)
                    message.uint32Value = object.uint32Value >>> 0;
                if (object.int64Value != null)
                    if ($util.Long)
                        (message.int64Value = $util.Long.fromValue(object.int64Value)).unsigned = false;
                    else if (typeof object.int64Value === "string")
                        message.int64Value = parseInt(object.int64Value, 10);
                    else if (typeof object.int64Value === "number")
                        message.int64Value = object.int64Value;
                    else if (typeof object.int64Value === "object")
                        message.int64Value = new $util.LongBits(object.int64Value.low >>> 0, object.int64Value.high >>> 0).toNumber();
                if (object.uint64Value != null)
                    if ($util.Long)
                        (message.uint64Value = $util.Long.fromValue(object.uint64Value)).unsigned = true;
                    else if (typeof object.uint64Value === "string")
                        message.uint64Value = parseInt(object.uint64Value, 10);
                    else if (typeof object.uint64Value === "number")
                        message.uint64Value = object.uint64Value;
                    else if (typeof object.uint64Value === "object")
                        message.uint64Value = new $util.LongBits(object.uint64Value.low >>> 0, object.uint64Value.high >>> 0).toNumber(true);
                if (object.floatValue != null)
                    message.floatValue = Number(object.floatValue);
                if (object.doubleValue != null)
                    message.doubleValue = Number(object.doubleValue);
                if (object.stringValue != null)
                    message.stringValue = String(object.stringValue);
                if (object.bytesValue != null) {
                    if (typeof object.bytesValue !== "object")
                        throw TypeError(".serial_v2.AttrValue.bytesValue: object expected");
                    message.bytesValue = $root.serial_v2.Bytes.fromObject(object.bytesValue);
                }
                if (object.boolVecValue != null) {
                    if (typeof object.boolVecValue !== "object")
                        throw TypeError(".serial_v2.AttrValue.boolVecValue: object expected");
                    message.boolVecValue = $root.serial_v2.BoolVec.fromObject(object.boolVecValue);
                }
                if (object.int32VecValue != null) {
                    if (typeof object.int32VecValue !== "object")
                        throw TypeError(".serial_v2.AttrValue.int32VecValue: object expected");
                    message.int32VecValue = $root.serial_v2.Int32Vec.fromObject(object.int32VecValue);
                }
                if (object.uint32VecValue != null) {
                    if (typeof object.uint32VecValue !== "object")
                        throw TypeError(".serial_v2.AttrValue.uint32VecValue: object expected");
                    message.uint32VecValue = $root.serial_v2.Uint32Vec.fromObject(object.uint32VecValue);
                }
                if (object.int64VecValue != null) {
                    if (typeof object.int64VecValue !== "object")
                        throw TypeError(".serial_v2.AttrValue.int64VecValue: object expected");
                    message.int64VecValue = $root.serial_v2.Int64Vec.fromObject(object.int64VecValue);
                }
                if (object.uint64VecValue != null) {
                    if (typeof object.uint64VecValue !== "object")
                        throw TypeError(".serial_v2.AttrValue.uint64VecValue: object expected");
                    message.uint64VecValue = $root.serial_v2.Uint64Vec.fromObject(object.uint64VecValue);
                }
                if (object.floatVecValue != null) {
                    if (typeof object.floatVecValue !== "object")
                        throw TypeError(".serial_v2.AttrValue.floatVecValue: object expected");
                    message.floatVecValue = $root.serial_v2.FloatVec.fromObject(object.floatVecValue);
                }
                if (object.doubleVecValue != null) {
                    if (typeof object.doubleVecValue !== "object")
                        throw TypeError(".serial_v2.AttrValue.doubleVecValue: object expected");
                    message.doubleVecValue = $root.serial_v2.DoubleVec.fromObject(object.doubleVecValue);
                }
                if (object.stringVecValue != null) {
                    if (typeof object.stringVecValue !== "object")
                        throw TypeError(".serial_v2.AttrValue.stringVecValue: object expected");
                    message.stringVecValue = $root.serial_v2.StringVec.fromObject(object.stringVecValue);
                }
                if (object.bytesVecValue != null) {
                    if (typeof object.bytesVecValue !== "object")
                        throw TypeError(".serial_v2.AttrValue.bytesVecValue: object expected");
                    message.bytesVecValue = $root.serial_v2.BytesVec.fromObject(object.bytesVecValue);
                }
                if (object.mapString_2Int32Value != null) {
                    if (typeof object.mapString_2Int32Value !== "object")
                        throw TypeError(".serial_v2.AttrValue.mapString_2Int32Value: object expected");
                    message.mapString_2Int32Value = $root.serial_v2.MapString2Int32.fromObject(object.mapString_2Int32Value);
                }
                if (object.mapString_2Uint32Value != null) {
                    if (typeof object.mapString_2Uint32Value !== "object")
                        throw TypeError(".serial_v2.AttrValue.mapString_2Uint32Value: object expected");
                    message.mapString_2Uint32Value = $root.serial_v2.MapString2Uint32.fromObject(object.mapString_2Uint32Value);
                }
                if (object.mapString_2Int64Value != null) {
                    if (typeof object.mapString_2Int64Value !== "object")
                        throw TypeError(".serial_v2.AttrValue.mapString_2Int64Value: object expected");
                    message.mapString_2Int64Value = $root.serial_v2.MapString2Int64.fromObject(object.mapString_2Int64Value);
                }
                if (object.mapString_2Uint64Value != null) {
                    if (typeof object.mapString_2Uint64Value !== "object")
                        throw TypeError(".serial_v2.AttrValue.mapString_2Uint64Value: object expected");
                    message.mapString_2Uint64Value = $root.serial_v2.MapString2Uint64.fromObject(object.mapString_2Uint64Value);
                }
                if (object.mapString_2StringValue != null) {
                    if (typeof object.mapString_2StringValue !== "object")
                        throw TypeError(".serial_v2.AttrValue.mapString_2StringValue: object expected");
                    message.mapString_2StringValue = $root.serial_v2.MapString2String.fromObject(object.mapString_2StringValue);
                }
                if (object.mapString_2BytesValue != null) {
                    if (typeof object.mapString_2BytesValue !== "object")
                        throw TypeError(".serial_v2.AttrValue.mapString_2BytesValue: object expected");
                    message.mapString_2BytesValue = $root.serial_v2.MapString2Bytes.fromObject(object.mapString_2BytesValue);
                }
                if (object.mapString_2Int32VecValue != null) {
                    if (typeof object.mapString_2Int32VecValue !== "object")
                        throw TypeError(".serial_v2.AttrValue.mapString_2Int32VecValue: object expected");
                    message.mapString_2Int32VecValue = $root.serial_v2.MapString2Int32Vec.fromObject(object.mapString_2Int32VecValue);
                }
                if (object.mapString_2Uint32VecValue != null) {
                    if (typeof object.mapString_2Uint32VecValue !== "object")
                        throw TypeError(".serial_v2.AttrValue.mapString_2Uint32VecValue: object expected");
                    message.mapString_2Uint32VecValue = $root.serial_v2.MapString2Uint32Vec.fromObject(object.mapString_2Uint32VecValue);
                }
                if (object.mapString_2Int64VecValue != null) {
                    if (typeof object.mapString_2Int64VecValue !== "object")
                        throw TypeError(".serial_v2.AttrValue.mapString_2Int64VecValue: object expected");
                    message.mapString_2Int64VecValue = $root.serial_v2.MapString2Int64Vec.fromObject(object.mapString_2Int64VecValue);
                }
                if (object.mapString_2Uint64VecValue != null) {
                    if (typeof object.mapString_2Uint64VecValue !== "object")
                        throw TypeError(".serial_v2.AttrValue.mapString_2Uint64VecValue: object expected");
                    message.mapString_2Uint64VecValue = $root.serial_v2.MapString2Uint64Vec.fromObject(object.mapString_2Uint64VecValue);
                }
                if (object.mapString_2StringVecValue != null) {
                    if (typeof object.mapString_2StringVecValue !== "object")
                        throw TypeError(".serial_v2.AttrValue.mapString_2StringVecValue: object expected");
                    message.mapString_2StringVecValue = $root.serial_v2.MapString2StringVec.fromObject(object.mapString_2StringVecValue);
                }
                return message;
            };
    
            /**
             * Creates a plain object from an AttrValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.AttrValue
             * @static
             * @param {serial_v2.AttrValue} message AttrValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AttrValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    object.boolValue = message.boolValue;
                    if (options.oneofs)
                        object.value = "boolValue";
                }
                if (message.int32Value != null && message.hasOwnProperty("int32Value")) {
                    object.int32Value = message.int32Value;
                    if (options.oneofs)
                        object.value = "int32Value";
                }
                if (message.uint32Value != null && message.hasOwnProperty("uint32Value")) {
                    object.uint32Value = message.uint32Value;
                    if (options.oneofs)
                        object.value = "uint32Value";
                }
                if (message.int64Value != null && message.hasOwnProperty("int64Value")) {
                    if (typeof message.int64Value === "number")
                        object.int64Value = options.longs === String ? String(message.int64Value) : message.int64Value;
                    else
                        object.int64Value = options.longs === String ? $util.Long.prototype.toString.call(message.int64Value) : options.longs === Number ? new $util.LongBits(message.int64Value.low >>> 0, message.int64Value.high >>> 0).toNumber() : message.int64Value;
                    if (options.oneofs)
                        object.value = "int64Value";
                }
                if (message.uint64Value != null && message.hasOwnProperty("uint64Value")) {
                    if (typeof message.uint64Value === "number")
                        object.uint64Value = options.longs === String ? String(message.uint64Value) : message.uint64Value;
                    else
                        object.uint64Value = options.longs === String ? $util.Long.prototype.toString.call(message.uint64Value) : options.longs === Number ? new $util.LongBits(message.uint64Value.low >>> 0, message.uint64Value.high >>> 0).toNumber(true) : message.uint64Value;
                    if (options.oneofs)
                        object.value = "uint64Value";
                }
                if (message.floatValue != null && message.hasOwnProperty("floatValue")) {
                    object.floatValue = options.json && !isFinite(message.floatValue) ? String(message.floatValue) : message.floatValue;
                    if (options.oneofs)
                        object.value = "floatValue";
                }
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue")) {
                    object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                    if (options.oneofs)
                        object.value = "doubleValue";
                }
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    object.stringValue = message.stringValue;
                    if (options.oneofs)
                        object.value = "stringValue";
                }
                if (message.bytesValue != null && message.hasOwnProperty("bytesValue")) {
                    object.bytesValue = $root.serial_v2.Bytes.toObject(message.bytesValue, options);
                    if (options.oneofs)
                        object.value = "bytesValue";
                }
                if (message.boolVecValue != null && message.hasOwnProperty("boolVecValue")) {
                    object.boolVecValue = $root.serial_v2.BoolVec.toObject(message.boolVecValue, options);
                    if (options.oneofs)
                        object.value = "boolVecValue";
                }
                if (message.int32VecValue != null && message.hasOwnProperty("int32VecValue")) {
                    object.int32VecValue = $root.serial_v2.Int32Vec.toObject(message.int32VecValue, options);
                    if (options.oneofs)
                        object.value = "int32VecValue";
                }
                if (message.uint32VecValue != null && message.hasOwnProperty("uint32VecValue")) {
                    object.uint32VecValue = $root.serial_v2.Uint32Vec.toObject(message.uint32VecValue, options);
                    if (options.oneofs)
                        object.value = "uint32VecValue";
                }
                if (message.int64VecValue != null && message.hasOwnProperty("int64VecValue")) {
                    object.int64VecValue = $root.serial_v2.Int64Vec.toObject(message.int64VecValue, options);
                    if (options.oneofs)
                        object.value = "int64VecValue";
                }
                if (message.uint64VecValue != null && message.hasOwnProperty("uint64VecValue")) {
                    object.uint64VecValue = $root.serial_v2.Uint64Vec.toObject(message.uint64VecValue, options);
                    if (options.oneofs)
                        object.value = "uint64VecValue";
                }
                if (message.floatVecValue != null && message.hasOwnProperty("floatVecValue")) {
                    object.floatVecValue = $root.serial_v2.FloatVec.toObject(message.floatVecValue, options);
                    if (options.oneofs)
                        object.value = "floatVecValue";
                }
                if (message.doubleVecValue != null && message.hasOwnProperty("doubleVecValue")) {
                    object.doubleVecValue = $root.serial_v2.DoubleVec.toObject(message.doubleVecValue, options);
                    if (options.oneofs)
                        object.value = "doubleVecValue";
                }
                if (message.stringVecValue != null && message.hasOwnProperty("stringVecValue")) {
                    object.stringVecValue = $root.serial_v2.StringVec.toObject(message.stringVecValue, options);
                    if (options.oneofs)
                        object.value = "stringVecValue";
                }
                if (message.bytesVecValue != null && message.hasOwnProperty("bytesVecValue")) {
                    object.bytesVecValue = $root.serial_v2.BytesVec.toObject(message.bytesVecValue, options);
                    if (options.oneofs)
                        object.value = "bytesVecValue";
                }
                if (message.mapString_2Int32Value != null && message.hasOwnProperty("mapString_2Int32Value")) {
                    object.mapString_2Int32Value = $root.serial_v2.MapString2Int32.toObject(message.mapString_2Int32Value, options);
                    if (options.oneofs)
                        object.value = "mapString_2Int32Value";
                }
                if (message.mapString_2Uint32Value != null && message.hasOwnProperty("mapString_2Uint32Value")) {
                    object.mapString_2Uint32Value = $root.serial_v2.MapString2Uint32.toObject(message.mapString_2Uint32Value, options);
                    if (options.oneofs)
                        object.value = "mapString_2Uint32Value";
                }
                if (message.mapString_2Int64Value != null && message.hasOwnProperty("mapString_2Int64Value")) {
                    object.mapString_2Int64Value = $root.serial_v2.MapString2Int64.toObject(message.mapString_2Int64Value, options);
                    if (options.oneofs)
                        object.value = "mapString_2Int64Value";
                }
                if (message.mapString_2Uint64Value != null && message.hasOwnProperty("mapString_2Uint64Value")) {
                    object.mapString_2Uint64Value = $root.serial_v2.MapString2Uint64.toObject(message.mapString_2Uint64Value, options);
                    if (options.oneofs)
                        object.value = "mapString_2Uint64Value";
                }
                if (message.mapString_2StringValue != null && message.hasOwnProperty("mapString_2StringValue")) {
                    object.mapString_2StringValue = $root.serial_v2.MapString2String.toObject(message.mapString_2StringValue, options);
                    if (options.oneofs)
                        object.value = "mapString_2StringValue";
                }
                if (message.mapString_2BytesValue != null && message.hasOwnProperty("mapString_2BytesValue")) {
                    object.mapString_2BytesValue = $root.serial_v2.MapString2Bytes.toObject(message.mapString_2BytesValue, options);
                    if (options.oneofs)
                        object.value = "mapString_2BytesValue";
                }
                if (message.mapString_2Int32VecValue != null && message.hasOwnProperty("mapString_2Int32VecValue")) {
                    object.mapString_2Int32VecValue = $root.serial_v2.MapString2Int32Vec.toObject(message.mapString_2Int32VecValue, options);
                    if (options.oneofs)
                        object.value = "mapString_2Int32VecValue";
                }
                if (message.mapString_2Uint32VecValue != null && message.hasOwnProperty("mapString_2Uint32VecValue")) {
                    object.mapString_2Uint32VecValue = $root.serial_v2.MapString2Uint32Vec.toObject(message.mapString_2Uint32VecValue, options);
                    if (options.oneofs)
                        object.value = "mapString_2Uint32VecValue";
                }
                if (message.mapString_2Int64VecValue != null && message.hasOwnProperty("mapString_2Int64VecValue")) {
                    object.mapString_2Int64VecValue = $root.serial_v2.MapString2Int64Vec.toObject(message.mapString_2Int64VecValue, options);
                    if (options.oneofs)
                        object.value = "mapString_2Int64VecValue";
                }
                if (message.mapString_2Uint64VecValue != null && message.hasOwnProperty("mapString_2Uint64VecValue")) {
                    object.mapString_2Uint64VecValue = $root.serial_v2.MapString2Uint64Vec.toObject(message.mapString_2Uint64VecValue, options);
                    if (options.oneofs)
                        object.value = "mapString_2Uint64VecValue";
                }
                if (message.mapString_2StringVecValue != null && message.hasOwnProperty("mapString_2StringVecValue")) {
                    object.mapString_2StringVecValue = $root.serial_v2.MapString2StringVec.toObject(message.mapString_2StringVecValue, options);
                    if (options.oneofs)
                        object.value = "mapString_2StringVecValue";
                }
                return object;
            };
    
            /**
             * Converts this AttrValue to JSON.
             * @function toJSON
             * @memberof serial_v2.AttrValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AttrValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return AttrValue;
        })();
    
        serial_v2.Bytes = (function() {
    
            /**
             * Properties of a Bytes.
             * @memberof serial_v2
             * @interface IBytes
             * @property {Uint8Array|null} [value] Bytes value
             */
    
            /**
             * Constructs a new Bytes.
             * @memberof serial_v2
             * @classdesc Represents a Bytes.
             * @implements IBytes
             * @constructor
             * @param {serial_v2.IBytes=} [properties] Properties to set
             */
            function Bytes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Bytes value.
             * @member {Uint8Array} value
             * @memberof serial_v2.Bytes
             * @instance
             */
            Bytes.prototype.value = $util.newBuffer([]);
    
            /**
             * Creates a new Bytes instance using the specified properties.
             * @function create
             * @memberof serial_v2.Bytes
             * @static
             * @param {serial_v2.IBytes=} [properties] Properties to set
             * @returns {serial_v2.Bytes} Bytes instance
             */
            Bytes.create = function create(properties) {
                return new Bytes(properties);
            };
    
            /**
             * Encodes the specified Bytes message. Does not implicitly {@link serial_v2.Bytes.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.Bytes
             * @static
             * @param {serial_v2.IBytes} message Bytes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Bytes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                return writer;
            };
    
            /**
             * Encodes the specified Bytes message, length delimited. Does not implicitly {@link serial_v2.Bytes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.Bytes
             * @static
             * @param {serial_v2.IBytes} message Bytes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Bytes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Bytes message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.Bytes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.Bytes} Bytes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Bytes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.Bytes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Bytes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.Bytes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.Bytes} Bytes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Bytes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Bytes message.
             * @function verify
             * @memberof serial_v2.Bytes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Bytes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };
    
            /**
             * Creates a Bytes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.Bytes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.Bytes} Bytes
             */
            Bytes.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.Bytes)
                    return object;
                var message = new $root.serial_v2.Bytes();
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };
    
            /**
             * Creates a plain object from a Bytes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.Bytes
             * @static
             * @param {serial_v2.Bytes} message Bytes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Bytes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };
    
            /**
             * Converts this Bytes to JSON.
             * @function toJSON
             * @memberof serial_v2.Bytes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Bytes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Bytes;
        })();
    
        serial_v2.BoolVec = (function() {
    
            /**
             * Properties of a BoolVec.
             * @memberof serial_v2
             * @interface IBoolVec
             * @property {Array.<boolean>|null} [value] BoolVec value
             */
    
            /**
             * Constructs a new BoolVec.
             * @memberof serial_v2
             * @classdesc Represents a BoolVec.
             * @implements IBoolVec
             * @constructor
             * @param {serial_v2.IBoolVec=} [properties] Properties to set
             */
            function BoolVec(properties) {
                this.value = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * BoolVec value.
             * @member {Array.<boolean>} value
             * @memberof serial_v2.BoolVec
             * @instance
             */
            BoolVec.prototype.value = $util.emptyArray;
    
            /**
             * Creates a new BoolVec instance using the specified properties.
             * @function create
             * @memberof serial_v2.BoolVec
             * @static
             * @param {serial_v2.IBoolVec=} [properties] Properties to set
             * @returns {serial_v2.BoolVec} BoolVec instance
             */
            BoolVec.create = function create(properties) {
                return new BoolVec(properties);
            };
    
            /**
             * Encodes the specified BoolVec message. Does not implicitly {@link serial_v2.BoolVec.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.BoolVec
             * @static
             * @param {serial_v2.IBoolVec} message BoolVec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolVec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.value.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.value.length; ++i)
                        writer.bool(message.value[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified BoolVec message, length delimited. Does not implicitly {@link serial_v2.BoolVec.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.BoolVec
             * @static
             * @param {serial_v2.IBoolVec} message BoolVec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolVec.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a BoolVec message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.BoolVec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.BoolVec} BoolVec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolVec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.BoolVec();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.value.push(reader.bool());
                        } else
                            message.value.push(reader.bool());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a BoolVec message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.BoolVec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.BoolVec} BoolVec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolVec.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a BoolVec message.
             * @function verify
             * @memberof serial_v2.BoolVec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BoolVec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (var i = 0; i < message.value.length; ++i)
                        if (typeof message.value[i] !== "boolean")
                            return "value: boolean[] expected";
                }
                return null;
            };
    
            /**
             * Creates a BoolVec message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.BoolVec
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.BoolVec} BoolVec
             */
            BoolVec.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.BoolVec)
                    return object;
                var message = new $root.serial_v2.BoolVec();
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".serial_v2.BoolVec.value: array expected");
                    message.value = [];
                    for (var i = 0; i < object.value.length; ++i)
                        message.value[i] = Boolean(object.value[i]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a BoolVec message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.BoolVec
             * @static
             * @param {serial_v2.BoolVec} message BoolVec
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BoolVec.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (message.value && message.value.length) {
                    object.value = [];
                    for (var j = 0; j < message.value.length; ++j)
                        object.value[j] = message.value[j];
                }
                return object;
            };
    
            /**
             * Converts this BoolVec to JSON.
             * @function toJSON
             * @memberof serial_v2.BoolVec
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BoolVec.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return BoolVec;
        })();
    
        serial_v2.Int32Vec = (function() {
    
            /**
             * Properties of an Int32Vec.
             * @memberof serial_v2
             * @interface IInt32Vec
             * @property {Array.<number>|null} [value] Int32Vec value
             */
    
            /**
             * Constructs a new Int32Vec.
             * @memberof serial_v2
             * @classdesc Represents an Int32Vec.
             * @implements IInt32Vec
             * @constructor
             * @param {serial_v2.IInt32Vec=} [properties] Properties to set
             */
            function Int32Vec(properties) {
                this.value = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Int32Vec value.
             * @member {Array.<number>} value
             * @memberof serial_v2.Int32Vec
             * @instance
             */
            Int32Vec.prototype.value = $util.emptyArray;
    
            /**
             * Creates a new Int32Vec instance using the specified properties.
             * @function create
             * @memberof serial_v2.Int32Vec
             * @static
             * @param {serial_v2.IInt32Vec=} [properties] Properties to set
             * @returns {serial_v2.Int32Vec} Int32Vec instance
             */
            Int32Vec.create = function create(properties) {
                return new Int32Vec(properties);
            };
    
            /**
             * Encodes the specified Int32Vec message. Does not implicitly {@link serial_v2.Int32Vec.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.Int32Vec
             * @static
             * @param {serial_v2.IInt32Vec} message Int32Vec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Vec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.value.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.value.length; ++i)
                        writer.int32(message.value[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified Int32Vec message, length delimited. Does not implicitly {@link serial_v2.Int32Vec.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.Int32Vec
             * @static
             * @param {serial_v2.IInt32Vec} message Int32Vec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Vec.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Int32Vec message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.Int32Vec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.Int32Vec} Int32Vec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Vec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.Int32Vec();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.value.push(reader.int32());
                        } else
                            message.value.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Int32Vec message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.Int32Vec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.Int32Vec} Int32Vec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Vec.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Int32Vec message.
             * @function verify
             * @memberof serial_v2.Int32Vec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int32Vec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (var i = 0; i < message.value.length; ++i)
                        if (!$util.isInteger(message.value[i]))
                            return "value: integer[] expected";
                }
                return null;
            };
    
            /**
             * Creates an Int32Vec message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.Int32Vec
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.Int32Vec} Int32Vec
             */
            Int32Vec.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.Int32Vec)
                    return object;
                var message = new $root.serial_v2.Int32Vec();
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".serial_v2.Int32Vec.value: array expected");
                    message.value = [];
                    for (var i = 0; i < object.value.length; ++i)
                        message.value[i] = object.value[i] | 0;
                }
                return message;
            };
    
            /**
             * Creates a plain object from an Int32Vec message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.Int32Vec
             * @static
             * @param {serial_v2.Int32Vec} message Int32Vec
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int32Vec.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (message.value && message.value.length) {
                    object.value = [];
                    for (var j = 0; j < message.value.length; ++j)
                        object.value[j] = message.value[j];
                }
                return object;
            };
    
            /**
             * Converts this Int32Vec to JSON.
             * @function toJSON
             * @memberof serial_v2.Int32Vec
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int32Vec.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Int32Vec;
        })();
    
        serial_v2.Uint32Vec = (function() {
    
            /**
             * Properties of an Uint32Vec.
             * @memberof serial_v2
             * @interface IUint32Vec
             * @property {Array.<number>|null} [value] Uint32Vec value
             */
    
            /**
             * Constructs a new Uint32Vec.
             * @memberof serial_v2
             * @classdesc Represents an Uint32Vec.
             * @implements IUint32Vec
             * @constructor
             * @param {serial_v2.IUint32Vec=} [properties] Properties to set
             */
            function Uint32Vec(properties) {
                this.value = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Uint32Vec value.
             * @member {Array.<number>} value
             * @memberof serial_v2.Uint32Vec
             * @instance
             */
            Uint32Vec.prototype.value = $util.emptyArray;
    
            /**
             * Creates a new Uint32Vec instance using the specified properties.
             * @function create
             * @memberof serial_v2.Uint32Vec
             * @static
             * @param {serial_v2.IUint32Vec=} [properties] Properties to set
             * @returns {serial_v2.Uint32Vec} Uint32Vec instance
             */
            Uint32Vec.create = function create(properties) {
                return new Uint32Vec(properties);
            };
    
            /**
             * Encodes the specified Uint32Vec message. Does not implicitly {@link serial_v2.Uint32Vec.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.Uint32Vec
             * @static
             * @param {serial_v2.IUint32Vec} message Uint32Vec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Uint32Vec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.value.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.value.length; ++i)
                        writer.uint32(message.value[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified Uint32Vec message, length delimited. Does not implicitly {@link serial_v2.Uint32Vec.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.Uint32Vec
             * @static
             * @param {serial_v2.IUint32Vec} message Uint32Vec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Uint32Vec.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Uint32Vec message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.Uint32Vec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.Uint32Vec} Uint32Vec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Uint32Vec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.Uint32Vec();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.value.push(reader.uint32());
                        } else
                            message.value.push(reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Uint32Vec message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.Uint32Vec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.Uint32Vec} Uint32Vec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Uint32Vec.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Uint32Vec message.
             * @function verify
             * @memberof serial_v2.Uint32Vec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Uint32Vec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (var i = 0; i < message.value.length; ++i)
                        if (!$util.isInteger(message.value[i]))
                            return "value: integer[] expected";
                }
                return null;
            };
    
            /**
             * Creates an Uint32Vec message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.Uint32Vec
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.Uint32Vec} Uint32Vec
             */
            Uint32Vec.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.Uint32Vec)
                    return object;
                var message = new $root.serial_v2.Uint32Vec();
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".serial_v2.Uint32Vec.value: array expected");
                    message.value = [];
                    for (var i = 0; i < object.value.length; ++i)
                        message.value[i] = object.value[i] >>> 0;
                }
                return message;
            };
    
            /**
             * Creates a plain object from an Uint32Vec message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.Uint32Vec
             * @static
             * @param {serial_v2.Uint32Vec} message Uint32Vec
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Uint32Vec.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (message.value && message.value.length) {
                    object.value = [];
                    for (var j = 0; j < message.value.length; ++j)
                        object.value[j] = message.value[j];
                }
                return object;
            };
    
            /**
             * Converts this Uint32Vec to JSON.
             * @function toJSON
             * @memberof serial_v2.Uint32Vec
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Uint32Vec.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Uint32Vec;
        })();
    
        serial_v2.Int64Vec = (function() {
    
            /**
             * Properties of an Int64Vec.
             * @memberof serial_v2
             * @interface IInt64Vec
             * @property {Array.<number|Long>|null} [value] Int64Vec value
             */
    
            /**
             * Constructs a new Int64Vec.
             * @memberof serial_v2
             * @classdesc Represents an Int64Vec.
             * @implements IInt64Vec
             * @constructor
             * @param {serial_v2.IInt64Vec=} [properties] Properties to set
             */
            function Int64Vec(properties) {
                this.value = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Int64Vec value.
             * @member {Array.<number|Long>} value
             * @memberof serial_v2.Int64Vec
             * @instance
             */
            Int64Vec.prototype.value = $util.emptyArray;
    
            /**
             * Creates a new Int64Vec instance using the specified properties.
             * @function create
             * @memberof serial_v2.Int64Vec
             * @static
             * @param {serial_v2.IInt64Vec=} [properties] Properties to set
             * @returns {serial_v2.Int64Vec} Int64Vec instance
             */
            Int64Vec.create = function create(properties) {
                return new Int64Vec(properties);
            };
    
            /**
             * Encodes the specified Int64Vec message. Does not implicitly {@link serial_v2.Int64Vec.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.Int64Vec
             * @static
             * @param {serial_v2.IInt64Vec} message Int64Vec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Vec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.value.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.value.length; ++i)
                        writer.int64(message.value[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified Int64Vec message, length delimited. Does not implicitly {@link serial_v2.Int64Vec.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.Int64Vec
             * @static
             * @param {serial_v2.IInt64Vec} message Int64Vec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Vec.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Int64Vec message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.Int64Vec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.Int64Vec} Int64Vec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Vec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.Int64Vec();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.value.push(reader.int64());
                        } else
                            message.value.push(reader.int64());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Int64Vec message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.Int64Vec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.Int64Vec} Int64Vec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Vec.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Int64Vec message.
             * @function verify
             * @memberof serial_v2.Int64Vec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int64Vec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (var i = 0; i < message.value.length; ++i)
                        if (!$util.isInteger(message.value[i]) && !(message.value[i] && $util.isInteger(message.value[i].low) && $util.isInteger(message.value[i].high)))
                            return "value: integer|Long[] expected";
                }
                return null;
            };
    
            /**
             * Creates an Int64Vec message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.Int64Vec
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.Int64Vec} Int64Vec
             */
            Int64Vec.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.Int64Vec)
                    return object;
                var message = new $root.serial_v2.Int64Vec();
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".serial_v2.Int64Vec.value: array expected");
                    message.value = [];
                    for (var i = 0; i < object.value.length; ++i)
                        if ($util.Long)
                            (message.value[i] = $util.Long.fromValue(object.value[i])).unsigned = false;
                        else if (typeof object.value[i] === "string")
                            message.value[i] = parseInt(object.value[i], 10);
                        else if (typeof object.value[i] === "number")
                            message.value[i] = object.value[i];
                        else if (typeof object.value[i] === "object")
                            message.value[i] = new $util.LongBits(object.value[i].low >>> 0, object.value[i].high >>> 0).toNumber();
                }
                return message;
            };
    
            /**
             * Creates a plain object from an Int64Vec message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.Int64Vec
             * @static
             * @param {serial_v2.Int64Vec} message Int64Vec
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int64Vec.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (message.value && message.value.length) {
                    object.value = [];
                    for (var j = 0; j < message.value.length; ++j)
                        if (typeof message.value[j] === "number")
                            object.value[j] = options.longs === String ? String(message.value[j]) : message.value[j];
                        else
                            object.value[j] = options.longs === String ? $util.Long.prototype.toString.call(message.value[j]) : options.longs === Number ? new $util.LongBits(message.value[j].low >>> 0, message.value[j].high >>> 0).toNumber() : message.value[j];
                }
                return object;
            };
    
            /**
             * Converts this Int64Vec to JSON.
             * @function toJSON
             * @memberof serial_v2.Int64Vec
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int64Vec.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Int64Vec;
        })();
    
        serial_v2.Uint64Vec = (function() {
    
            /**
             * Properties of an Uint64Vec.
             * @memberof serial_v2
             * @interface IUint64Vec
             * @property {Array.<number|Long>|null} [value] Uint64Vec value
             */
    
            /**
             * Constructs a new Uint64Vec.
             * @memberof serial_v2
             * @classdesc Represents an Uint64Vec.
             * @implements IUint64Vec
             * @constructor
             * @param {serial_v2.IUint64Vec=} [properties] Properties to set
             */
            function Uint64Vec(properties) {
                this.value = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Uint64Vec value.
             * @member {Array.<number|Long>} value
             * @memberof serial_v2.Uint64Vec
             * @instance
             */
            Uint64Vec.prototype.value = $util.emptyArray;
    
            /**
             * Creates a new Uint64Vec instance using the specified properties.
             * @function create
             * @memberof serial_v2.Uint64Vec
             * @static
             * @param {serial_v2.IUint64Vec=} [properties] Properties to set
             * @returns {serial_v2.Uint64Vec} Uint64Vec instance
             */
            Uint64Vec.create = function create(properties) {
                return new Uint64Vec(properties);
            };
    
            /**
             * Encodes the specified Uint64Vec message. Does not implicitly {@link serial_v2.Uint64Vec.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.Uint64Vec
             * @static
             * @param {serial_v2.IUint64Vec} message Uint64Vec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Uint64Vec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.value.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.value.length; ++i)
                        writer.uint64(message.value[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified Uint64Vec message, length delimited. Does not implicitly {@link serial_v2.Uint64Vec.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.Uint64Vec
             * @static
             * @param {serial_v2.IUint64Vec} message Uint64Vec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Uint64Vec.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Uint64Vec message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.Uint64Vec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.Uint64Vec} Uint64Vec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Uint64Vec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.Uint64Vec();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.value.push(reader.uint64());
                        } else
                            message.value.push(reader.uint64());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Uint64Vec message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.Uint64Vec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.Uint64Vec} Uint64Vec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Uint64Vec.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Uint64Vec message.
             * @function verify
             * @memberof serial_v2.Uint64Vec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Uint64Vec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (var i = 0; i < message.value.length; ++i)
                        if (!$util.isInteger(message.value[i]) && !(message.value[i] && $util.isInteger(message.value[i].low) && $util.isInteger(message.value[i].high)))
                            return "value: integer|Long[] expected";
                }
                return null;
            };
    
            /**
             * Creates an Uint64Vec message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.Uint64Vec
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.Uint64Vec} Uint64Vec
             */
            Uint64Vec.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.Uint64Vec)
                    return object;
                var message = new $root.serial_v2.Uint64Vec();
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".serial_v2.Uint64Vec.value: array expected");
                    message.value = [];
                    for (var i = 0; i < object.value.length; ++i)
                        if ($util.Long)
                            (message.value[i] = $util.Long.fromValue(object.value[i])).unsigned = true;
                        else if (typeof object.value[i] === "string")
                            message.value[i] = parseInt(object.value[i], 10);
                        else if (typeof object.value[i] === "number")
                            message.value[i] = object.value[i];
                        else if (typeof object.value[i] === "object")
                            message.value[i] = new $util.LongBits(object.value[i].low >>> 0, object.value[i].high >>> 0).toNumber(true);
                }
                return message;
            };
    
            /**
             * Creates a plain object from an Uint64Vec message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.Uint64Vec
             * @static
             * @param {serial_v2.Uint64Vec} message Uint64Vec
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Uint64Vec.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (message.value && message.value.length) {
                    object.value = [];
                    for (var j = 0; j < message.value.length; ++j)
                        if (typeof message.value[j] === "number")
                            object.value[j] = options.longs === String ? String(message.value[j]) : message.value[j];
                        else
                            object.value[j] = options.longs === String ? $util.Long.prototype.toString.call(message.value[j]) : options.longs === Number ? new $util.LongBits(message.value[j].low >>> 0, message.value[j].high >>> 0).toNumber(true) : message.value[j];
                }
                return object;
            };
    
            /**
             * Converts this Uint64Vec to JSON.
             * @function toJSON
             * @memberof serial_v2.Uint64Vec
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Uint64Vec.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Uint64Vec;
        })();
    
        serial_v2.FloatVec = (function() {
    
            /**
             * Properties of a FloatVec.
             * @memberof serial_v2
             * @interface IFloatVec
             * @property {Array.<number>|null} [value] FloatVec value
             */
    
            /**
             * Constructs a new FloatVec.
             * @memberof serial_v2
             * @classdesc Represents a FloatVec.
             * @implements IFloatVec
             * @constructor
             * @param {serial_v2.IFloatVec=} [properties] Properties to set
             */
            function FloatVec(properties) {
                this.value = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * FloatVec value.
             * @member {Array.<number>} value
             * @memberof serial_v2.FloatVec
             * @instance
             */
            FloatVec.prototype.value = $util.emptyArray;
    
            /**
             * Creates a new FloatVec instance using the specified properties.
             * @function create
             * @memberof serial_v2.FloatVec
             * @static
             * @param {serial_v2.IFloatVec=} [properties] Properties to set
             * @returns {serial_v2.FloatVec} FloatVec instance
             */
            FloatVec.create = function create(properties) {
                return new FloatVec(properties);
            };
    
            /**
             * Encodes the specified FloatVec message. Does not implicitly {@link serial_v2.FloatVec.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.FloatVec
             * @static
             * @param {serial_v2.IFloatVec} message FloatVec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatVec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.value.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.value.length; ++i)
                        writer.float(message.value[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified FloatVec message, length delimited. Does not implicitly {@link serial_v2.FloatVec.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.FloatVec
             * @static
             * @param {serial_v2.IFloatVec} message FloatVec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatVec.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a FloatVec message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.FloatVec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.FloatVec} FloatVec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatVec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.FloatVec();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.value.push(reader.float());
                        } else
                            message.value.push(reader.float());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a FloatVec message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.FloatVec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.FloatVec} FloatVec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatVec.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a FloatVec message.
             * @function verify
             * @memberof serial_v2.FloatVec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FloatVec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (var i = 0; i < message.value.length; ++i)
                        if (typeof message.value[i] !== "number")
                            return "value: number[] expected";
                }
                return null;
            };
    
            /**
             * Creates a FloatVec message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.FloatVec
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.FloatVec} FloatVec
             */
            FloatVec.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.FloatVec)
                    return object;
                var message = new $root.serial_v2.FloatVec();
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".serial_v2.FloatVec.value: array expected");
                    message.value = [];
                    for (var i = 0; i < object.value.length; ++i)
                        message.value[i] = Number(object.value[i]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a FloatVec message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.FloatVec
             * @static
             * @param {serial_v2.FloatVec} message FloatVec
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FloatVec.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (message.value && message.value.length) {
                    object.value = [];
                    for (var j = 0; j < message.value.length; ++j)
                        object.value[j] = options.json && !isFinite(message.value[j]) ? String(message.value[j]) : message.value[j];
                }
                return object;
            };
    
            /**
             * Converts this FloatVec to JSON.
             * @function toJSON
             * @memberof serial_v2.FloatVec
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FloatVec.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return FloatVec;
        })();
    
        serial_v2.DoubleVec = (function() {
    
            /**
             * Properties of a DoubleVec.
             * @memberof serial_v2
             * @interface IDoubleVec
             * @property {Array.<number>|null} [value] DoubleVec value
             */
    
            /**
             * Constructs a new DoubleVec.
             * @memberof serial_v2
             * @classdesc Represents a DoubleVec.
             * @implements IDoubleVec
             * @constructor
             * @param {serial_v2.IDoubleVec=} [properties] Properties to set
             */
            function DoubleVec(properties) {
                this.value = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DoubleVec value.
             * @member {Array.<number>} value
             * @memberof serial_v2.DoubleVec
             * @instance
             */
            DoubleVec.prototype.value = $util.emptyArray;
    
            /**
             * Creates a new DoubleVec instance using the specified properties.
             * @function create
             * @memberof serial_v2.DoubleVec
             * @static
             * @param {serial_v2.IDoubleVec=} [properties] Properties to set
             * @returns {serial_v2.DoubleVec} DoubleVec instance
             */
            DoubleVec.create = function create(properties) {
                return new DoubleVec(properties);
            };
    
            /**
             * Encodes the specified DoubleVec message. Does not implicitly {@link serial_v2.DoubleVec.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.DoubleVec
             * @static
             * @param {serial_v2.IDoubleVec} message DoubleVec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleVec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.value.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.value.length; ++i)
                        writer.double(message.value[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified DoubleVec message, length delimited. Does not implicitly {@link serial_v2.DoubleVec.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.DoubleVec
             * @static
             * @param {serial_v2.IDoubleVec} message DoubleVec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleVec.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DoubleVec message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.DoubleVec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.DoubleVec} DoubleVec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleVec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.DoubleVec();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.value.push(reader.double());
                        } else
                            message.value.push(reader.double());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DoubleVec message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.DoubleVec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.DoubleVec} DoubleVec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleVec.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DoubleVec message.
             * @function verify
             * @memberof serial_v2.DoubleVec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DoubleVec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (var i = 0; i < message.value.length; ++i)
                        if (typeof message.value[i] !== "number")
                            return "value: number[] expected";
                }
                return null;
            };
    
            /**
             * Creates a DoubleVec message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.DoubleVec
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.DoubleVec} DoubleVec
             */
            DoubleVec.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.DoubleVec)
                    return object;
                var message = new $root.serial_v2.DoubleVec();
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".serial_v2.DoubleVec.value: array expected");
                    message.value = [];
                    for (var i = 0; i < object.value.length; ++i)
                        message.value[i] = Number(object.value[i]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a DoubleVec message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.DoubleVec
             * @static
             * @param {serial_v2.DoubleVec} message DoubleVec
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DoubleVec.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (message.value && message.value.length) {
                    object.value = [];
                    for (var j = 0; j < message.value.length; ++j)
                        object.value[j] = options.json && !isFinite(message.value[j]) ? String(message.value[j]) : message.value[j];
                }
                return object;
            };
    
            /**
             * Converts this DoubleVec to JSON.
             * @function toJSON
             * @memberof serial_v2.DoubleVec
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DoubleVec.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DoubleVec;
        })();
    
        serial_v2.StringVec = (function() {
    
            /**
             * Properties of a StringVec.
             * @memberof serial_v2
             * @interface IStringVec
             * @property {Array.<string>|null} [value] StringVec value
             */
    
            /**
             * Constructs a new StringVec.
             * @memberof serial_v2
             * @classdesc Represents a StringVec.
             * @implements IStringVec
             * @constructor
             * @param {serial_v2.IStringVec=} [properties] Properties to set
             */
            function StringVec(properties) {
                this.value = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * StringVec value.
             * @member {Array.<string>} value
             * @memberof serial_v2.StringVec
             * @instance
             */
            StringVec.prototype.value = $util.emptyArray;
    
            /**
             * Creates a new StringVec instance using the specified properties.
             * @function create
             * @memberof serial_v2.StringVec
             * @static
             * @param {serial_v2.IStringVec=} [properties] Properties to set
             * @returns {serial_v2.StringVec} StringVec instance
             */
            StringVec.create = function create(properties) {
                return new StringVec(properties);
            };
    
            /**
             * Encodes the specified StringVec message. Does not implicitly {@link serial_v2.StringVec.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.StringVec
             * @static
             * @param {serial_v2.IStringVec} message StringVec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringVec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.value.length)
                    for (var i = 0; i < message.value.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.value[i]);
                return writer;
            };
    
            /**
             * Encodes the specified StringVec message, length delimited. Does not implicitly {@link serial_v2.StringVec.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.StringVec
             * @static
             * @param {serial_v2.IStringVec} message StringVec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringVec.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a StringVec message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.StringVec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.StringVec} StringVec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringVec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.StringVec();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        message.value.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a StringVec message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.StringVec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.StringVec} StringVec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringVec.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a StringVec message.
             * @function verify
             * @memberof serial_v2.StringVec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StringVec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (var i = 0; i < message.value.length; ++i)
                        if (!$util.isString(message.value[i]))
                            return "value: string[] expected";
                }
                return null;
            };
    
            /**
             * Creates a StringVec message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.StringVec
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.StringVec} StringVec
             */
            StringVec.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.StringVec)
                    return object;
                var message = new $root.serial_v2.StringVec();
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".serial_v2.StringVec.value: array expected");
                    message.value = [];
                    for (var i = 0; i < object.value.length; ++i)
                        message.value[i] = String(object.value[i]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a StringVec message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.StringVec
             * @static
             * @param {serial_v2.StringVec} message StringVec
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StringVec.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (message.value && message.value.length) {
                    object.value = [];
                    for (var j = 0; j < message.value.length; ++j)
                        object.value[j] = message.value[j];
                }
                return object;
            };
    
            /**
             * Converts this StringVec to JSON.
             * @function toJSON
             * @memberof serial_v2.StringVec
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StringVec.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return StringVec;
        })();
    
        serial_v2.BytesVec = (function() {
    
            /**
             * Properties of a BytesVec.
             * @memberof serial_v2
             * @interface IBytesVec
             * @property {Array.<serial_v2.IBytes>|null} [value] BytesVec value
             */
    
            /**
             * Constructs a new BytesVec.
             * @memberof serial_v2
             * @classdesc Represents a BytesVec.
             * @implements IBytesVec
             * @constructor
             * @param {serial_v2.IBytesVec=} [properties] Properties to set
             */
            function BytesVec(properties) {
                this.value = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * BytesVec value.
             * @member {Array.<serial_v2.IBytes>} value
             * @memberof serial_v2.BytesVec
             * @instance
             */
            BytesVec.prototype.value = $util.emptyArray;
    
            /**
             * Creates a new BytesVec instance using the specified properties.
             * @function create
             * @memberof serial_v2.BytesVec
             * @static
             * @param {serial_v2.IBytesVec=} [properties] Properties to set
             * @returns {serial_v2.BytesVec} BytesVec instance
             */
            BytesVec.create = function create(properties) {
                return new BytesVec(properties);
            };
    
            /**
             * Encodes the specified BytesVec message. Does not implicitly {@link serial_v2.BytesVec.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.BytesVec
             * @static
             * @param {serial_v2.IBytesVec} message BytesVec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesVec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.value.length)
                    for (var i = 0; i < message.value.length; ++i)
                        $root.serial_v2.Bytes.encode(message.value[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified BytesVec message, length delimited. Does not implicitly {@link serial_v2.BytesVec.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.BytesVec
             * @static
             * @param {serial_v2.IBytesVec} message BytesVec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesVec.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a BytesVec message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.BytesVec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.BytesVec} BytesVec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesVec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.BytesVec();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        message.value.push($root.serial_v2.Bytes.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a BytesVec message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.BytesVec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.BytesVec} BytesVec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesVec.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a BytesVec message.
             * @function verify
             * @memberof serial_v2.BytesVec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BytesVec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (var i = 0; i < message.value.length; ++i) {
                        var error = $root.serial_v2.Bytes.verify(message.value[i]);
                        if (error)
                            return "value." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a BytesVec message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.BytesVec
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.BytesVec} BytesVec
             */
            BytesVec.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.BytesVec)
                    return object;
                var message = new $root.serial_v2.BytesVec();
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".serial_v2.BytesVec.value: array expected");
                    message.value = [];
                    for (var i = 0; i < object.value.length; ++i) {
                        if (typeof object.value[i] !== "object")
                            throw TypeError(".serial_v2.BytesVec.value: object expected");
                        message.value[i] = $root.serial_v2.Bytes.fromObject(object.value[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a BytesVec message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.BytesVec
             * @static
             * @param {serial_v2.BytesVec} message BytesVec
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BytesVec.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (message.value && message.value.length) {
                    object.value = [];
                    for (var j = 0; j < message.value.length; ++j)
                        object.value[j] = $root.serial_v2.Bytes.toObject(message.value[j], options);
                }
                return object;
            };
    
            /**
             * Converts this BytesVec to JSON.
             * @function toJSON
             * @memberof serial_v2.BytesVec
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BytesVec.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return BytesVec;
        })();
    
        serial_v2.MapString2Int32 = (function() {
    
            /**
             * Properties of a MapString2Int32.
             * @memberof serial_v2
             * @interface IMapString2Int32
             * @property {Object.<string,number>|null} [value] MapString2Int32 value
             */
    
            /**
             * Constructs a new MapString2Int32.
             * @memberof serial_v2
             * @classdesc Represents a MapString2Int32.
             * @implements IMapString2Int32
             * @constructor
             * @param {serial_v2.IMapString2Int32=} [properties] Properties to set
             */
            function MapString2Int32(properties) {
                this.value = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MapString2Int32 value.
             * @member {Object.<string,number>} value
             * @memberof serial_v2.MapString2Int32
             * @instance
             */
            MapString2Int32.prototype.value = $util.emptyObject;
    
            /**
             * Creates a new MapString2Int32 instance using the specified properties.
             * @function create
             * @memberof serial_v2.MapString2Int32
             * @static
             * @param {serial_v2.IMapString2Int32=} [properties] Properties to set
             * @returns {serial_v2.MapString2Int32} MapString2Int32 instance
             */
            MapString2Int32.create = function create(properties) {
                return new MapString2Int32(properties);
            };
    
            /**
             * Encodes the specified MapString2Int32 message. Does not implicitly {@link serial_v2.MapString2Int32.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.MapString2Int32
             * @static
             * @param {serial_v2.IMapString2Int32} message MapString2Int32 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2Int32.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    for (var keys = Object.keys(message.value), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.value[keys[i]]).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified MapString2Int32 message, length delimited. Does not implicitly {@link serial_v2.MapString2Int32.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.MapString2Int32
             * @static
             * @param {serial_v2.IMapString2Int32} message MapString2Int32 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2Int32.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MapString2Int32 message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.MapString2Int32
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.MapString2Int32} MapString2Int32
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2Int32.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.MapString2Int32(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.value === $util.emptyObject)
                            message.value = {};
                        key = reader.string();
                        reader.pos++;
                        message.value[key] = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MapString2Int32 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.MapString2Int32
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.MapString2Int32} MapString2Int32
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2Int32.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MapString2Int32 message.
             * @function verify
             * @memberof serial_v2.MapString2Int32
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MapString2Int32.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!$util.isObject(message.value))
                        return "value: object expected";
                    var key = Object.keys(message.value);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isInteger(message.value[key[i]]))
                            return "value: integer{k:string} expected";
                }
                return null;
            };
    
            /**
             * Creates a MapString2Int32 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.MapString2Int32
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.MapString2Int32} MapString2Int32
             */
            MapString2Int32.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.MapString2Int32)
                    return object;
                var message = new $root.serial_v2.MapString2Int32();
                if (object.value) {
                    if (typeof object.value !== "object")
                        throw TypeError(".serial_v2.MapString2Int32.value: object expected");
                    message.value = {};
                    for (var keys = Object.keys(object.value), i = 0; i < keys.length; ++i)
                        message.value[keys[i]] = object.value[keys[i]] | 0;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a MapString2Int32 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.MapString2Int32
             * @static
             * @param {serial_v2.MapString2Int32} message MapString2Int32
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MapString2Int32.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.value = {};
                var keys2;
                if (message.value && (keys2 = Object.keys(message.value)).length) {
                    object.value = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.value[keys2[j]] = message.value[keys2[j]];
                }
                return object;
            };
    
            /**
             * Converts this MapString2Int32 to JSON.
             * @function toJSON
             * @memberof serial_v2.MapString2Int32
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MapString2Int32.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MapString2Int32;
        })();
    
        serial_v2.MapString2Uint32 = (function() {
    
            /**
             * Properties of a MapString2Uint32.
             * @memberof serial_v2
             * @interface IMapString2Uint32
             * @property {Object.<string,number>|null} [value] MapString2Uint32 value
             */
    
            /**
             * Constructs a new MapString2Uint32.
             * @memberof serial_v2
             * @classdesc Represents a MapString2Uint32.
             * @implements IMapString2Uint32
             * @constructor
             * @param {serial_v2.IMapString2Uint32=} [properties] Properties to set
             */
            function MapString2Uint32(properties) {
                this.value = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MapString2Uint32 value.
             * @member {Object.<string,number>} value
             * @memberof serial_v2.MapString2Uint32
             * @instance
             */
            MapString2Uint32.prototype.value = $util.emptyObject;
    
            /**
             * Creates a new MapString2Uint32 instance using the specified properties.
             * @function create
             * @memberof serial_v2.MapString2Uint32
             * @static
             * @param {serial_v2.IMapString2Uint32=} [properties] Properties to set
             * @returns {serial_v2.MapString2Uint32} MapString2Uint32 instance
             */
            MapString2Uint32.create = function create(properties) {
                return new MapString2Uint32(properties);
            };
    
            /**
             * Encodes the specified MapString2Uint32 message. Does not implicitly {@link serial_v2.MapString2Uint32.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.MapString2Uint32
             * @static
             * @param {serial_v2.IMapString2Uint32} message MapString2Uint32 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2Uint32.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    for (var keys = Object.keys(message.value), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.value[keys[i]]).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified MapString2Uint32 message, length delimited. Does not implicitly {@link serial_v2.MapString2Uint32.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.MapString2Uint32
             * @static
             * @param {serial_v2.IMapString2Uint32} message MapString2Uint32 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2Uint32.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MapString2Uint32 message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.MapString2Uint32
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.MapString2Uint32} MapString2Uint32
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2Uint32.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.MapString2Uint32(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.value === $util.emptyObject)
                            message.value = {};
                        key = reader.string();
                        reader.pos++;
                        message.value[key] = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MapString2Uint32 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.MapString2Uint32
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.MapString2Uint32} MapString2Uint32
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2Uint32.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MapString2Uint32 message.
             * @function verify
             * @memberof serial_v2.MapString2Uint32
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MapString2Uint32.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!$util.isObject(message.value))
                        return "value: object expected";
                    var key = Object.keys(message.value);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isInteger(message.value[key[i]]))
                            return "value: integer{k:string} expected";
                }
                return null;
            };
    
            /**
             * Creates a MapString2Uint32 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.MapString2Uint32
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.MapString2Uint32} MapString2Uint32
             */
            MapString2Uint32.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.MapString2Uint32)
                    return object;
                var message = new $root.serial_v2.MapString2Uint32();
                if (object.value) {
                    if (typeof object.value !== "object")
                        throw TypeError(".serial_v2.MapString2Uint32.value: object expected");
                    message.value = {};
                    for (var keys = Object.keys(object.value), i = 0; i < keys.length; ++i)
                        message.value[keys[i]] = object.value[keys[i]] >>> 0;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a MapString2Uint32 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.MapString2Uint32
             * @static
             * @param {serial_v2.MapString2Uint32} message MapString2Uint32
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MapString2Uint32.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.value = {};
                var keys2;
                if (message.value && (keys2 = Object.keys(message.value)).length) {
                    object.value = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.value[keys2[j]] = message.value[keys2[j]];
                }
                return object;
            };
    
            /**
             * Converts this MapString2Uint32 to JSON.
             * @function toJSON
             * @memberof serial_v2.MapString2Uint32
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MapString2Uint32.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MapString2Uint32;
        })();
    
        serial_v2.MapString2Int64 = (function() {
    
            /**
             * Properties of a MapString2Int64.
             * @memberof serial_v2
             * @interface IMapString2Int64
             * @property {Object.<string,number|Long>|null} [value] MapString2Int64 value
             */
    
            /**
             * Constructs a new MapString2Int64.
             * @memberof serial_v2
             * @classdesc Represents a MapString2Int64.
             * @implements IMapString2Int64
             * @constructor
             * @param {serial_v2.IMapString2Int64=} [properties] Properties to set
             */
            function MapString2Int64(properties) {
                this.value = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MapString2Int64 value.
             * @member {Object.<string,number|Long>} value
             * @memberof serial_v2.MapString2Int64
             * @instance
             */
            MapString2Int64.prototype.value = $util.emptyObject;
    
            /**
             * Creates a new MapString2Int64 instance using the specified properties.
             * @function create
             * @memberof serial_v2.MapString2Int64
             * @static
             * @param {serial_v2.IMapString2Int64=} [properties] Properties to set
             * @returns {serial_v2.MapString2Int64} MapString2Int64 instance
             */
            MapString2Int64.create = function create(properties) {
                return new MapString2Int64(properties);
            };
    
            /**
             * Encodes the specified MapString2Int64 message. Does not implicitly {@link serial_v2.MapString2Int64.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.MapString2Int64
             * @static
             * @param {serial_v2.IMapString2Int64} message MapString2Int64 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2Int64.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    for (var keys = Object.keys(message.value), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.value[keys[i]]).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified MapString2Int64 message, length delimited. Does not implicitly {@link serial_v2.MapString2Int64.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.MapString2Int64
             * @static
             * @param {serial_v2.IMapString2Int64} message MapString2Int64 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2Int64.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MapString2Int64 message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.MapString2Int64
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.MapString2Int64} MapString2Int64
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2Int64.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.MapString2Int64(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.value === $util.emptyObject)
                            message.value = {};
                        key = reader.string();
                        reader.pos++;
                        message.value[key] = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MapString2Int64 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.MapString2Int64
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.MapString2Int64} MapString2Int64
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2Int64.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MapString2Int64 message.
             * @function verify
             * @memberof serial_v2.MapString2Int64
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MapString2Int64.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!$util.isObject(message.value))
                        return "value: object expected";
                    var key = Object.keys(message.value);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isInteger(message.value[key[i]]) && !(message.value[key[i]] && $util.isInteger(message.value[key[i]].low) && $util.isInteger(message.value[key[i]].high)))
                            return "value: integer|Long{k:string} expected";
                }
                return null;
            };
    
            /**
             * Creates a MapString2Int64 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.MapString2Int64
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.MapString2Int64} MapString2Int64
             */
            MapString2Int64.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.MapString2Int64)
                    return object;
                var message = new $root.serial_v2.MapString2Int64();
                if (object.value) {
                    if (typeof object.value !== "object")
                        throw TypeError(".serial_v2.MapString2Int64.value: object expected");
                    message.value = {};
                    for (var keys = Object.keys(object.value), i = 0; i < keys.length; ++i)
                        if ($util.Long)
                            (message.value[keys[i]] = $util.Long.fromValue(object.value[keys[i]])).unsigned = false;
                        else if (typeof object.value[keys[i]] === "string")
                            message.value[keys[i]] = parseInt(object.value[keys[i]], 10);
                        else if (typeof object.value[keys[i]] === "number")
                            message.value[keys[i]] = object.value[keys[i]];
                        else if (typeof object.value[keys[i]] === "object")
                            message.value[keys[i]] = new $util.LongBits(object.value[keys[i]].low >>> 0, object.value[keys[i]].high >>> 0).toNumber();
                }
                return message;
            };
    
            /**
             * Creates a plain object from a MapString2Int64 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.MapString2Int64
             * @static
             * @param {serial_v2.MapString2Int64} message MapString2Int64
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MapString2Int64.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.value = {};
                var keys2;
                if (message.value && (keys2 = Object.keys(message.value)).length) {
                    object.value = {};
                    for (var j = 0; j < keys2.length; ++j)
                        if (typeof message.value[keys2[j]] === "number")
                            object.value[keys2[j]] = options.longs === String ? String(message.value[keys2[j]]) : message.value[keys2[j]];
                        else
                            object.value[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.value[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.value[keys2[j]].low >>> 0, message.value[keys2[j]].high >>> 0).toNumber() : message.value[keys2[j]];
                }
                return object;
            };
    
            /**
             * Converts this MapString2Int64 to JSON.
             * @function toJSON
             * @memberof serial_v2.MapString2Int64
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MapString2Int64.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MapString2Int64;
        })();
    
        serial_v2.MapString2Uint64 = (function() {
    
            /**
             * Properties of a MapString2Uint64.
             * @memberof serial_v2
             * @interface IMapString2Uint64
             * @property {Object.<string,number|Long>|null} [value] MapString2Uint64 value
             */
    
            /**
             * Constructs a new MapString2Uint64.
             * @memberof serial_v2
             * @classdesc Represents a MapString2Uint64.
             * @implements IMapString2Uint64
             * @constructor
             * @param {serial_v2.IMapString2Uint64=} [properties] Properties to set
             */
            function MapString2Uint64(properties) {
                this.value = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MapString2Uint64 value.
             * @member {Object.<string,number|Long>} value
             * @memberof serial_v2.MapString2Uint64
             * @instance
             */
            MapString2Uint64.prototype.value = $util.emptyObject;
    
            /**
             * Creates a new MapString2Uint64 instance using the specified properties.
             * @function create
             * @memberof serial_v2.MapString2Uint64
             * @static
             * @param {serial_v2.IMapString2Uint64=} [properties] Properties to set
             * @returns {serial_v2.MapString2Uint64} MapString2Uint64 instance
             */
            MapString2Uint64.create = function create(properties) {
                return new MapString2Uint64(properties);
            };
    
            /**
             * Encodes the specified MapString2Uint64 message. Does not implicitly {@link serial_v2.MapString2Uint64.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.MapString2Uint64
             * @static
             * @param {serial_v2.IMapString2Uint64} message MapString2Uint64 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2Uint64.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    for (var keys = Object.keys(message.value), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint64(message.value[keys[i]]).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified MapString2Uint64 message, length delimited. Does not implicitly {@link serial_v2.MapString2Uint64.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.MapString2Uint64
             * @static
             * @param {serial_v2.IMapString2Uint64} message MapString2Uint64 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2Uint64.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MapString2Uint64 message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.MapString2Uint64
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.MapString2Uint64} MapString2Uint64
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2Uint64.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.MapString2Uint64(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.value === $util.emptyObject)
                            message.value = {};
                        key = reader.string();
                        reader.pos++;
                        message.value[key] = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MapString2Uint64 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.MapString2Uint64
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.MapString2Uint64} MapString2Uint64
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2Uint64.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MapString2Uint64 message.
             * @function verify
             * @memberof serial_v2.MapString2Uint64
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MapString2Uint64.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!$util.isObject(message.value))
                        return "value: object expected";
                    var key = Object.keys(message.value);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isInteger(message.value[key[i]]) && !(message.value[key[i]] && $util.isInteger(message.value[key[i]].low) && $util.isInteger(message.value[key[i]].high)))
                            return "value: integer|Long{k:string} expected";
                }
                return null;
            };
    
            /**
             * Creates a MapString2Uint64 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.MapString2Uint64
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.MapString2Uint64} MapString2Uint64
             */
            MapString2Uint64.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.MapString2Uint64)
                    return object;
                var message = new $root.serial_v2.MapString2Uint64();
                if (object.value) {
                    if (typeof object.value !== "object")
                        throw TypeError(".serial_v2.MapString2Uint64.value: object expected");
                    message.value = {};
                    for (var keys = Object.keys(object.value), i = 0; i < keys.length; ++i)
                        if ($util.Long)
                            (message.value[keys[i]] = $util.Long.fromValue(object.value[keys[i]])).unsigned = true;
                        else if (typeof object.value[keys[i]] === "string")
                            message.value[keys[i]] = parseInt(object.value[keys[i]], 10);
                        else if (typeof object.value[keys[i]] === "number")
                            message.value[keys[i]] = object.value[keys[i]];
                        else if (typeof object.value[keys[i]] === "object")
                            message.value[keys[i]] = new $util.LongBits(object.value[keys[i]].low >>> 0, object.value[keys[i]].high >>> 0).toNumber(true);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a MapString2Uint64 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.MapString2Uint64
             * @static
             * @param {serial_v2.MapString2Uint64} message MapString2Uint64
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MapString2Uint64.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.value = {};
                var keys2;
                if (message.value && (keys2 = Object.keys(message.value)).length) {
                    object.value = {};
                    for (var j = 0; j < keys2.length; ++j)
                        if (typeof message.value[keys2[j]] === "number")
                            object.value[keys2[j]] = options.longs === String ? String(message.value[keys2[j]]) : message.value[keys2[j]];
                        else
                            object.value[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.value[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.value[keys2[j]].low >>> 0, message.value[keys2[j]].high >>> 0).toNumber(true) : message.value[keys2[j]];
                }
                return object;
            };
    
            /**
             * Converts this MapString2Uint64 to JSON.
             * @function toJSON
             * @memberof serial_v2.MapString2Uint64
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MapString2Uint64.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MapString2Uint64;
        })();
    
        serial_v2.MapString2Bytes = (function() {
    
            /**
             * Properties of a MapString2Bytes.
             * @memberof serial_v2
             * @interface IMapString2Bytes
             * @property {Object.<string,serial_v2.IBytes>|null} [value] MapString2Bytes value
             */
    
            /**
             * Constructs a new MapString2Bytes.
             * @memberof serial_v2
             * @classdesc Represents a MapString2Bytes.
             * @implements IMapString2Bytes
             * @constructor
             * @param {serial_v2.IMapString2Bytes=} [properties] Properties to set
             */
            function MapString2Bytes(properties) {
                this.value = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MapString2Bytes value.
             * @member {Object.<string,serial_v2.IBytes>} value
             * @memberof serial_v2.MapString2Bytes
             * @instance
             */
            MapString2Bytes.prototype.value = $util.emptyObject;
    
            /**
             * Creates a new MapString2Bytes instance using the specified properties.
             * @function create
             * @memberof serial_v2.MapString2Bytes
             * @static
             * @param {serial_v2.IMapString2Bytes=} [properties] Properties to set
             * @returns {serial_v2.MapString2Bytes} MapString2Bytes instance
             */
            MapString2Bytes.create = function create(properties) {
                return new MapString2Bytes(properties);
            };
    
            /**
             * Encodes the specified MapString2Bytes message. Does not implicitly {@link serial_v2.MapString2Bytes.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.MapString2Bytes
             * @static
             * @param {serial_v2.IMapString2Bytes} message MapString2Bytes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2Bytes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    for (var keys = Object.keys(message.value), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.serial_v2.Bytes.encode(message.value[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };
    
            /**
             * Encodes the specified MapString2Bytes message, length delimited. Does not implicitly {@link serial_v2.MapString2Bytes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.MapString2Bytes
             * @static
             * @param {serial_v2.IMapString2Bytes} message MapString2Bytes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2Bytes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MapString2Bytes message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.MapString2Bytes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.MapString2Bytes} MapString2Bytes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2Bytes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.MapString2Bytes(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.value === $util.emptyObject)
                            message.value = {};
                        key = reader.string();
                        reader.pos++;
                        message.value[key] = $root.serial_v2.Bytes.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MapString2Bytes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.MapString2Bytes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.MapString2Bytes} MapString2Bytes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2Bytes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MapString2Bytes message.
             * @function verify
             * @memberof serial_v2.MapString2Bytes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MapString2Bytes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!$util.isObject(message.value))
                        return "value: object expected";
                    var key = Object.keys(message.value);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.serial_v2.Bytes.verify(message.value[key[i]]);
                        if (error)
                            return "value." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a MapString2Bytes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.MapString2Bytes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.MapString2Bytes} MapString2Bytes
             */
            MapString2Bytes.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.MapString2Bytes)
                    return object;
                var message = new $root.serial_v2.MapString2Bytes();
                if (object.value) {
                    if (typeof object.value !== "object")
                        throw TypeError(".serial_v2.MapString2Bytes.value: object expected");
                    message.value = {};
                    for (var keys = Object.keys(object.value), i = 0; i < keys.length; ++i) {
                        if (typeof object.value[keys[i]] !== "object")
                            throw TypeError(".serial_v2.MapString2Bytes.value: object expected");
                        message.value[keys[i]] = $root.serial_v2.Bytes.fromObject(object.value[keys[i]]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a MapString2Bytes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.MapString2Bytes
             * @static
             * @param {serial_v2.MapString2Bytes} message MapString2Bytes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MapString2Bytes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.value = {};
                var keys2;
                if (message.value && (keys2 = Object.keys(message.value)).length) {
                    object.value = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.value[keys2[j]] = $root.serial_v2.Bytes.toObject(message.value[keys2[j]], options);
                }
                return object;
            };
    
            /**
             * Converts this MapString2Bytes to JSON.
             * @function toJSON
             * @memberof serial_v2.MapString2Bytes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MapString2Bytes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MapString2Bytes;
        })();
    
        serial_v2.MapString2String = (function() {
    
            /**
             * Properties of a MapString2String.
             * @memberof serial_v2
             * @interface IMapString2String
             * @property {Object.<string,string>|null} [value] MapString2String value
             */
    
            /**
             * Constructs a new MapString2String.
             * @memberof serial_v2
             * @classdesc Represents a MapString2String.
             * @implements IMapString2String
             * @constructor
             * @param {serial_v2.IMapString2String=} [properties] Properties to set
             */
            function MapString2String(properties) {
                this.value = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MapString2String value.
             * @member {Object.<string,string>} value
             * @memberof serial_v2.MapString2String
             * @instance
             */
            MapString2String.prototype.value = $util.emptyObject;
    
            /**
             * Creates a new MapString2String instance using the specified properties.
             * @function create
             * @memberof serial_v2.MapString2String
             * @static
             * @param {serial_v2.IMapString2String=} [properties] Properties to set
             * @returns {serial_v2.MapString2String} MapString2String instance
             */
            MapString2String.create = function create(properties) {
                return new MapString2String(properties);
            };
    
            /**
             * Encodes the specified MapString2String message. Does not implicitly {@link serial_v2.MapString2String.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.MapString2String
             * @static
             * @param {serial_v2.IMapString2String} message MapString2String message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2String.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    for (var keys = Object.keys(message.value), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.value[keys[i]]).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified MapString2String message, length delimited. Does not implicitly {@link serial_v2.MapString2String.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.MapString2String
             * @static
             * @param {serial_v2.IMapString2String} message MapString2String message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2String.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MapString2String message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.MapString2String
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.MapString2String} MapString2String
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2String.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.MapString2String(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.value === $util.emptyObject)
                            message.value = {};
                        key = reader.string();
                        reader.pos++;
                        message.value[key] = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MapString2String message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.MapString2String
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.MapString2String} MapString2String
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2String.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MapString2String message.
             * @function verify
             * @memberof serial_v2.MapString2String
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MapString2String.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!$util.isObject(message.value))
                        return "value: object expected";
                    var key = Object.keys(message.value);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isString(message.value[key[i]]))
                            return "value: string{k:string} expected";
                }
                return null;
            };
    
            /**
             * Creates a MapString2String message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.MapString2String
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.MapString2String} MapString2String
             */
            MapString2String.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.MapString2String)
                    return object;
                var message = new $root.serial_v2.MapString2String();
                if (object.value) {
                    if (typeof object.value !== "object")
                        throw TypeError(".serial_v2.MapString2String.value: object expected");
                    message.value = {};
                    for (var keys = Object.keys(object.value), i = 0; i < keys.length; ++i)
                        message.value[keys[i]] = String(object.value[keys[i]]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a MapString2String message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.MapString2String
             * @static
             * @param {serial_v2.MapString2String} message MapString2String
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MapString2String.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.value = {};
                var keys2;
                if (message.value && (keys2 = Object.keys(message.value)).length) {
                    object.value = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.value[keys2[j]] = message.value[keys2[j]];
                }
                return object;
            };
    
            /**
             * Converts this MapString2String to JSON.
             * @function toJSON
             * @memberof serial_v2.MapString2String
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MapString2String.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MapString2String;
        })();
    
        serial_v2.MapString2Int32Vec = (function() {
    
            /**
             * Properties of a MapString2Int32Vec.
             * @memberof serial_v2
             * @interface IMapString2Int32Vec
             * @property {Object.<string,serial_v2.IInt32Vec>|null} [value] MapString2Int32Vec value
             */
    
            /**
             * Constructs a new MapString2Int32Vec.
             * @memberof serial_v2
             * @classdesc Represents a MapString2Int32Vec.
             * @implements IMapString2Int32Vec
             * @constructor
             * @param {serial_v2.IMapString2Int32Vec=} [properties] Properties to set
             */
            function MapString2Int32Vec(properties) {
                this.value = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MapString2Int32Vec value.
             * @member {Object.<string,serial_v2.IInt32Vec>} value
             * @memberof serial_v2.MapString2Int32Vec
             * @instance
             */
            MapString2Int32Vec.prototype.value = $util.emptyObject;
    
            /**
             * Creates a new MapString2Int32Vec instance using the specified properties.
             * @function create
             * @memberof serial_v2.MapString2Int32Vec
             * @static
             * @param {serial_v2.IMapString2Int32Vec=} [properties] Properties to set
             * @returns {serial_v2.MapString2Int32Vec} MapString2Int32Vec instance
             */
            MapString2Int32Vec.create = function create(properties) {
                return new MapString2Int32Vec(properties);
            };
    
            /**
             * Encodes the specified MapString2Int32Vec message. Does not implicitly {@link serial_v2.MapString2Int32Vec.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.MapString2Int32Vec
             * @static
             * @param {serial_v2.IMapString2Int32Vec} message MapString2Int32Vec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2Int32Vec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    for (var keys = Object.keys(message.value), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.serial_v2.Int32Vec.encode(message.value[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };
    
            /**
             * Encodes the specified MapString2Int32Vec message, length delimited. Does not implicitly {@link serial_v2.MapString2Int32Vec.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.MapString2Int32Vec
             * @static
             * @param {serial_v2.IMapString2Int32Vec} message MapString2Int32Vec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2Int32Vec.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MapString2Int32Vec message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.MapString2Int32Vec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.MapString2Int32Vec} MapString2Int32Vec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2Int32Vec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.MapString2Int32Vec(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.value === $util.emptyObject)
                            message.value = {};
                        key = reader.string();
                        reader.pos++;
                        message.value[key] = $root.serial_v2.Int32Vec.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MapString2Int32Vec message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.MapString2Int32Vec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.MapString2Int32Vec} MapString2Int32Vec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2Int32Vec.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MapString2Int32Vec message.
             * @function verify
             * @memberof serial_v2.MapString2Int32Vec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MapString2Int32Vec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!$util.isObject(message.value))
                        return "value: object expected";
                    var key = Object.keys(message.value);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.serial_v2.Int32Vec.verify(message.value[key[i]]);
                        if (error)
                            return "value." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a MapString2Int32Vec message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.MapString2Int32Vec
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.MapString2Int32Vec} MapString2Int32Vec
             */
            MapString2Int32Vec.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.MapString2Int32Vec)
                    return object;
                var message = new $root.serial_v2.MapString2Int32Vec();
                if (object.value) {
                    if (typeof object.value !== "object")
                        throw TypeError(".serial_v2.MapString2Int32Vec.value: object expected");
                    message.value = {};
                    for (var keys = Object.keys(object.value), i = 0; i < keys.length; ++i) {
                        if (typeof object.value[keys[i]] !== "object")
                            throw TypeError(".serial_v2.MapString2Int32Vec.value: object expected");
                        message.value[keys[i]] = $root.serial_v2.Int32Vec.fromObject(object.value[keys[i]]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a MapString2Int32Vec message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.MapString2Int32Vec
             * @static
             * @param {serial_v2.MapString2Int32Vec} message MapString2Int32Vec
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MapString2Int32Vec.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.value = {};
                var keys2;
                if (message.value && (keys2 = Object.keys(message.value)).length) {
                    object.value = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.value[keys2[j]] = $root.serial_v2.Int32Vec.toObject(message.value[keys2[j]], options);
                }
                return object;
            };
    
            /**
             * Converts this MapString2Int32Vec to JSON.
             * @function toJSON
             * @memberof serial_v2.MapString2Int32Vec
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MapString2Int32Vec.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MapString2Int32Vec;
        })();
    
        serial_v2.MapString2Uint32Vec = (function() {
    
            /**
             * Properties of a MapString2Uint32Vec.
             * @memberof serial_v2
             * @interface IMapString2Uint32Vec
             * @property {Object.<string,serial_v2.IUint32Vec>|null} [value] MapString2Uint32Vec value
             */
    
            /**
             * Constructs a new MapString2Uint32Vec.
             * @memberof serial_v2
             * @classdesc Represents a MapString2Uint32Vec.
             * @implements IMapString2Uint32Vec
             * @constructor
             * @param {serial_v2.IMapString2Uint32Vec=} [properties] Properties to set
             */
            function MapString2Uint32Vec(properties) {
                this.value = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MapString2Uint32Vec value.
             * @member {Object.<string,serial_v2.IUint32Vec>} value
             * @memberof serial_v2.MapString2Uint32Vec
             * @instance
             */
            MapString2Uint32Vec.prototype.value = $util.emptyObject;
    
            /**
             * Creates a new MapString2Uint32Vec instance using the specified properties.
             * @function create
             * @memberof serial_v2.MapString2Uint32Vec
             * @static
             * @param {serial_v2.IMapString2Uint32Vec=} [properties] Properties to set
             * @returns {serial_v2.MapString2Uint32Vec} MapString2Uint32Vec instance
             */
            MapString2Uint32Vec.create = function create(properties) {
                return new MapString2Uint32Vec(properties);
            };
    
            /**
             * Encodes the specified MapString2Uint32Vec message. Does not implicitly {@link serial_v2.MapString2Uint32Vec.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.MapString2Uint32Vec
             * @static
             * @param {serial_v2.IMapString2Uint32Vec} message MapString2Uint32Vec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2Uint32Vec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    for (var keys = Object.keys(message.value), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.serial_v2.Uint32Vec.encode(message.value[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };
    
            /**
             * Encodes the specified MapString2Uint32Vec message, length delimited. Does not implicitly {@link serial_v2.MapString2Uint32Vec.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.MapString2Uint32Vec
             * @static
             * @param {serial_v2.IMapString2Uint32Vec} message MapString2Uint32Vec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2Uint32Vec.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MapString2Uint32Vec message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.MapString2Uint32Vec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.MapString2Uint32Vec} MapString2Uint32Vec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2Uint32Vec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.MapString2Uint32Vec(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.value === $util.emptyObject)
                            message.value = {};
                        key = reader.string();
                        reader.pos++;
                        message.value[key] = $root.serial_v2.Uint32Vec.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MapString2Uint32Vec message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.MapString2Uint32Vec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.MapString2Uint32Vec} MapString2Uint32Vec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2Uint32Vec.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MapString2Uint32Vec message.
             * @function verify
             * @memberof serial_v2.MapString2Uint32Vec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MapString2Uint32Vec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!$util.isObject(message.value))
                        return "value: object expected";
                    var key = Object.keys(message.value);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.serial_v2.Uint32Vec.verify(message.value[key[i]]);
                        if (error)
                            return "value." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a MapString2Uint32Vec message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.MapString2Uint32Vec
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.MapString2Uint32Vec} MapString2Uint32Vec
             */
            MapString2Uint32Vec.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.MapString2Uint32Vec)
                    return object;
                var message = new $root.serial_v2.MapString2Uint32Vec();
                if (object.value) {
                    if (typeof object.value !== "object")
                        throw TypeError(".serial_v2.MapString2Uint32Vec.value: object expected");
                    message.value = {};
                    for (var keys = Object.keys(object.value), i = 0; i < keys.length; ++i) {
                        if (typeof object.value[keys[i]] !== "object")
                            throw TypeError(".serial_v2.MapString2Uint32Vec.value: object expected");
                        message.value[keys[i]] = $root.serial_v2.Uint32Vec.fromObject(object.value[keys[i]]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a MapString2Uint32Vec message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.MapString2Uint32Vec
             * @static
             * @param {serial_v2.MapString2Uint32Vec} message MapString2Uint32Vec
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MapString2Uint32Vec.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.value = {};
                var keys2;
                if (message.value && (keys2 = Object.keys(message.value)).length) {
                    object.value = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.value[keys2[j]] = $root.serial_v2.Uint32Vec.toObject(message.value[keys2[j]], options);
                }
                return object;
            };
    
            /**
             * Converts this MapString2Uint32Vec to JSON.
             * @function toJSON
             * @memberof serial_v2.MapString2Uint32Vec
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MapString2Uint32Vec.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MapString2Uint32Vec;
        })();
    
        serial_v2.MapString2Int64Vec = (function() {
    
            /**
             * Properties of a MapString2Int64Vec.
             * @memberof serial_v2
             * @interface IMapString2Int64Vec
             * @property {Object.<string,serial_v2.IInt64Vec>|null} [value] MapString2Int64Vec value
             */
    
            /**
             * Constructs a new MapString2Int64Vec.
             * @memberof serial_v2
             * @classdesc Represents a MapString2Int64Vec.
             * @implements IMapString2Int64Vec
             * @constructor
             * @param {serial_v2.IMapString2Int64Vec=} [properties] Properties to set
             */
            function MapString2Int64Vec(properties) {
                this.value = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MapString2Int64Vec value.
             * @member {Object.<string,serial_v2.IInt64Vec>} value
             * @memberof serial_v2.MapString2Int64Vec
             * @instance
             */
            MapString2Int64Vec.prototype.value = $util.emptyObject;
    
            /**
             * Creates a new MapString2Int64Vec instance using the specified properties.
             * @function create
             * @memberof serial_v2.MapString2Int64Vec
             * @static
             * @param {serial_v2.IMapString2Int64Vec=} [properties] Properties to set
             * @returns {serial_v2.MapString2Int64Vec} MapString2Int64Vec instance
             */
            MapString2Int64Vec.create = function create(properties) {
                return new MapString2Int64Vec(properties);
            };
    
            /**
             * Encodes the specified MapString2Int64Vec message. Does not implicitly {@link serial_v2.MapString2Int64Vec.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.MapString2Int64Vec
             * @static
             * @param {serial_v2.IMapString2Int64Vec} message MapString2Int64Vec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2Int64Vec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    for (var keys = Object.keys(message.value), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.serial_v2.Int64Vec.encode(message.value[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };
    
            /**
             * Encodes the specified MapString2Int64Vec message, length delimited. Does not implicitly {@link serial_v2.MapString2Int64Vec.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.MapString2Int64Vec
             * @static
             * @param {serial_v2.IMapString2Int64Vec} message MapString2Int64Vec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2Int64Vec.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MapString2Int64Vec message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.MapString2Int64Vec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.MapString2Int64Vec} MapString2Int64Vec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2Int64Vec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.MapString2Int64Vec(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.value === $util.emptyObject)
                            message.value = {};
                        key = reader.string();
                        reader.pos++;
                        message.value[key] = $root.serial_v2.Int64Vec.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MapString2Int64Vec message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.MapString2Int64Vec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.MapString2Int64Vec} MapString2Int64Vec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2Int64Vec.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MapString2Int64Vec message.
             * @function verify
             * @memberof serial_v2.MapString2Int64Vec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MapString2Int64Vec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!$util.isObject(message.value))
                        return "value: object expected";
                    var key = Object.keys(message.value);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.serial_v2.Int64Vec.verify(message.value[key[i]]);
                        if (error)
                            return "value." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a MapString2Int64Vec message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.MapString2Int64Vec
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.MapString2Int64Vec} MapString2Int64Vec
             */
            MapString2Int64Vec.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.MapString2Int64Vec)
                    return object;
                var message = new $root.serial_v2.MapString2Int64Vec();
                if (object.value) {
                    if (typeof object.value !== "object")
                        throw TypeError(".serial_v2.MapString2Int64Vec.value: object expected");
                    message.value = {};
                    for (var keys = Object.keys(object.value), i = 0; i < keys.length; ++i) {
                        if (typeof object.value[keys[i]] !== "object")
                            throw TypeError(".serial_v2.MapString2Int64Vec.value: object expected");
                        message.value[keys[i]] = $root.serial_v2.Int64Vec.fromObject(object.value[keys[i]]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a MapString2Int64Vec message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.MapString2Int64Vec
             * @static
             * @param {serial_v2.MapString2Int64Vec} message MapString2Int64Vec
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MapString2Int64Vec.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.value = {};
                var keys2;
                if (message.value && (keys2 = Object.keys(message.value)).length) {
                    object.value = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.value[keys2[j]] = $root.serial_v2.Int64Vec.toObject(message.value[keys2[j]], options);
                }
                return object;
            };
    
            /**
             * Converts this MapString2Int64Vec to JSON.
             * @function toJSON
             * @memberof serial_v2.MapString2Int64Vec
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MapString2Int64Vec.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MapString2Int64Vec;
        })();
    
        serial_v2.MapString2Uint64Vec = (function() {
    
            /**
             * Properties of a MapString2Uint64Vec.
             * @memberof serial_v2
             * @interface IMapString2Uint64Vec
             * @property {Object.<string,serial_v2.IUint64Vec>|null} [value] MapString2Uint64Vec value
             */
    
            /**
             * Constructs a new MapString2Uint64Vec.
             * @memberof serial_v2
             * @classdesc Represents a MapString2Uint64Vec.
             * @implements IMapString2Uint64Vec
             * @constructor
             * @param {serial_v2.IMapString2Uint64Vec=} [properties] Properties to set
             */
            function MapString2Uint64Vec(properties) {
                this.value = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MapString2Uint64Vec value.
             * @member {Object.<string,serial_v2.IUint64Vec>} value
             * @memberof serial_v2.MapString2Uint64Vec
             * @instance
             */
            MapString2Uint64Vec.prototype.value = $util.emptyObject;
    
            /**
             * Creates a new MapString2Uint64Vec instance using the specified properties.
             * @function create
             * @memberof serial_v2.MapString2Uint64Vec
             * @static
             * @param {serial_v2.IMapString2Uint64Vec=} [properties] Properties to set
             * @returns {serial_v2.MapString2Uint64Vec} MapString2Uint64Vec instance
             */
            MapString2Uint64Vec.create = function create(properties) {
                return new MapString2Uint64Vec(properties);
            };
    
            /**
             * Encodes the specified MapString2Uint64Vec message. Does not implicitly {@link serial_v2.MapString2Uint64Vec.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.MapString2Uint64Vec
             * @static
             * @param {serial_v2.IMapString2Uint64Vec} message MapString2Uint64Vec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2Uint64Vec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    for (var keys = Object.keys(message.value), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.serial_v2.Uint64Vec.encode(message.value[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };
    
            /**
             * Encodes the specified MapString2Uint64Vec message, length delimited. Does not implicitly {@link serial_v2.MapString2Uint64Vec.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.MapString2Uint64Vec
             * @static
             * @param {serial_v2.IMapString2Uint64Vec} message MapString2Uint64Vec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2Uint64Vec.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MapString2Uint64Vec message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.MapString2Uint64Vec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.MapString2Uint64Vec} MapString2Uint64Vec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2Uint64Vec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.MapString2Uint64Vec(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.value === $util.emptyObject)
                            message.value = {};
                        key = reader.string();
                        reader.pos++;
                        message.value[key] = $root.serial_v2.Uint64Vec.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MapString2Uint64Vec message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.MapString2Uint64Vec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.MapString2Uint64Vec} MapString2Uint64Vec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2Uint64Vec.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MapString2Uint64Vec message.
             * @function verify
             * @memberof serial_v2.MapString2Uint64Vec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MapString2Uint64Vec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!$util.isObject(message.value))
                        return "value: object expected";
                    var key = Object.keys(message.value);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.serial_v2.Uint64Vec.verify(message.value[key[i]]);
                        if (error)
                            return "value." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a MapString2Uint64Vec message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.MapString2Uint64Vec
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.MapString2Uint64Vec} MapString2Uint64Vec
             */
            MapString2Uint64Vec.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.MapString2Uint64Vec)
                    return object;
                var message = new $root.serial_v2.MapString2Uint64Vec();
                if (object.value) {
                    if (typeof object.value !== "object")
                        throw TypeError(".serial_v2.MapString2Uint64Vec.value: object expected");
                    message.value = {};
                    for (var keys = Object.keys(object.value), i = 0; i < keys.length; ++i) {
                        if (typeof object.value[keys[i]] !== "object")
                            throw TypeError(".serial_v2.MapString2Uint64Vec.value: object expected");
                        message.value[keys[i]] = $root.serial_v2.Uint64Vec.fromObject(object.value[keys[i]]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a MapString2Uint64Vec message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.MapString2Uint64Vec
             * @static
             * @param {serial_v2.MapString2Uint64Vec} message MapString2Uint64Vec
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MapString2Uint64Vec.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.value = {};
                var keys2;
                if (message.value && (keys2 = Object.keys(message.value)).length) {
                    object.value = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.value[keys2[j]] = $root.serial_v2.Uint64Vec.toObject(message.value[keys2[j]], options);
                }
                return object;
            };
    
            /**
             * Converts this MapString2Uint64Vec to JSON.
             * @function toJSON
             * @memberof serial_v2.MapString2Uint64Vec
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MapString2Uint64Vec.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MapString2Uint64Vec;
        })();
    
        serial_v2.MapString2BytesVec = (function() {
    
            /**
             * Properties of a MapString2BytesVec.
             * @memberof serial_v2
             * @interface IMapString2BytesVec
             * @property {Object.<string,serial_v2.IBytesVec>|null} [value] MapString2BytesVec value
             */
    
            /**
             * Constructs a new MapString2BytesVec.
             * @memberof serial_v2
             * @classdesc Represents a MapString2BytesVec.
             * @implements IMapString2BytesVec
             * @constructor
             * @param {serial_v2.IMapString2BytesVec=} [properties] Properties to set
             */
            function MapString2BytesVec(properties) {
                this.value = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MapString2BytesVec value.
             * @member {Object.<string,serial_v2.IBytesVec>} value
             * @memberof serial_v2.MapString2BytesVec
             * @instance
             */
            MapString2BytesVec.prototype.value = $util.emptyObject;
    
            /**
             * Creates a new MapString2BytesVec instance using the specified properties.
             * @function create
             * @memberof serial_v2.MapString2BytesVec
             * @static
             * @param {serial_v2.IMapString2BytesVec=} [properties] Properties to set
             * @returns {serial_v2.MapString2BytesVec} MapString2BytesVec instance
             */
            MapString2BytesVec.create = function create(properties) {
                return new MapString2BytesVec(properties);
            };
    
            /**
             * Encodes the specified MapString2BytesVec message. Does not implicitly {@link serial_v2.MapString2BytesVec.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.MapString2BytesVec
             * @static
             * @param {serial_v2.IMapString2BytesVec} message MapString2BytesVec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2BytesVec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    for (var keys = Object.keys(message.value), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.serial_v2.BytesVec.encode(message.value[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };
    
            /**
             * Encodes the specified MapString2BytesVec message, length delimited. Does not implicitly {@link serial_v2.MapString2BytesVec.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.MapString2BytesVec
             * @static
             * @param {serial_v2.IMapString2BytesVec} message MapString2BytesVec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2BytesVec.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MapString2BytesVec message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.MapString2BytesVec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.MapString2BytesVec} MapString2BytesVec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2BytesVec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.MapString2BytesVec(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.value === $util.emptyObject)
                            message.value = {};
                        key = reader.string();
                        reader.pos++;
                        message.value[key] = $root.serial_v2.BytesVec.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MapString2BytesVec message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.MapString2BytesVec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.MapString2BytesVec} MapString2BytesVec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2BytesVec.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MapString2BytesVec message.
             * @function verify
             * @memberof serial_v2.MapString2BytesVec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MapString2BytesVec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!$util.isObject(message.value))
                        return "value: object expected";
                    var key = Object.keys(message.value);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.serial_v2.BytesVec.verify(message.value[key[i]]);
                        if (error)
                            return "value." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a MapString2BytesVec message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.MapString2BytesVec
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.MapString2BytesVec} MapString2BytesVec
             */
            MapString2BytesVec.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.MapString2BytesVec)
                    return object;
                var message = new $root.serial_v2.MapString2BytesVec();
                if (object.value) {
                    if (typeof object.value !== "object")
                        throw TypeError(".serial_v2.MapString2BytesVec.value: object expected");
                    message.value = {};
                    for (var keys = Object.keys(object.value), i = 0; i < keys.length; ++i) {
                        if (typeof object.value[keys[i]] !== "object")
                            throw TypeError(".serial_v2.MapString2BytesVec.value: object expected");
                        message.value[keys[i]] = $root.serial_v2.BytesVec.fromObject(object.value[keys[i]]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a MapString2BytesVec message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.MapString2BytesVec
             * @static
             * @param {serial_v2.MapString2BytesVec} message MapString2BytesVec
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MapString2BytesVec.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.value = {};
                var keys2;
                if (message.value && (keys2 = Object.keys(message.value)).length) {
                    object.value = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.value[keys2[j]] = $root.serial_v2.BytesVec.toObject(message.value[keys2[j]], options);
                }
                return object;
            };
    
            /**
             * Converts this MapString2BytesVec to JSON.
             * @function toJSON
             * @memberof serial_v2.MapString2BytesVec
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MapString2BytesVec.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MapString2BytesVec;
        })();
    
        serial_v2.MapString2StringVec = (function() {
    
            /**
             * Properties of a MapString2StringVec.
             * @memberof serial_v2
             * @interface IMapString2StringVec
             * @property {Object.<string,serial_v2.IStringVec>|null} [value] MapString2StringVec value
             */
    
            /**
             * Constructs a new MapString2StringVec.
             * @memberof serial_v2
             * @classdesc Represents a MapString2StringVec.
             * @implements IMapString2StringVec
             * @constructor
             * @param {serial_v2.IMapString2StringVec=} [properties] Properties to set
             */
            function MapString2StringVec(properties) {
                this.value = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MapString2StringVec value.
             * @member {Object.<string,serial_v2.IStringVec>} value
             * @memberof serial_v2.MapString2StringVec
             * @instance
             */
            MapString2StringVec.prototype.value = $util.emptyObject;
    
            /**
             * Creates a new MapString2StringVec instance using the specified properties.
             * @function create
             * @memberof serial_v2.MapString2StringVec
             * @static
             * @param {serial_v2.IMapString2StringVec=} [properties] Properties to set
             * @returns {serial_v2.MapString2StringVec} MapString2StringVec instance
             */
            MapString2StringVec.create = function create(properties) {
                return new MapString2StringVec(properties);
            };
    
            /**
             * Encodes the specified MapString2StringVec message. Does not implicitly {@link serial_v2.MapString2StringVec.verify|verify} messages.
             * @function encode
             * @memberof serial_v2.MapString2StringVec
             * @static
             * @param {serial_v2.IMapString2StringVec} message MapString2StringVec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2StringVec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    for (var keys = Object.keys(message.value), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.serial_v2.StringVec.encode(message.value[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };
    
            /**
             * Encodes the specified MapString2StringVec message, length delimited. Does not implicitly {@link serial_v2.MapString2StringVec.verify|verify} messages.
             * @function encodeDelimited
             * @memberof serial_v2.MapString2StringVec
             * @static
             * @param {serial_v2.IMapString2StringVec} message MapString2StringVec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapString2StringVec.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MapString2StringVec message from the specified reader or buffer.
             * @function decode
             * @memberof serial_v2.MapString2StringVec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {serial_v2.MapString2StringVec} MapString2StringVec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2StringVec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serial_v2.MapString2StringVec(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.value === $util.emptyObject)
                            message.value = {};
                        key = reader.string();
                        reader.pos++;
                        message.value[key] = $root.serial_v2.StringVec.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MapString2StringVec message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof serial_v2.MapString2StringVec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {serial_v2.MapString2StringVec} MapString2StringVec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapString2StringVec.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MapString2StringVec message.
             * @function verify
             * @memberof serial_v2.MapString2StringVec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MapString2StringVec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!$util.isObject(message.value))
                        return "value: object expected";
                    var key = Object.keys(message.value);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.serial_v2.StringVec.verify(message.value[key[i]]);
                        if (error)
                            return "value." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a MapString2StringVec message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof serial_v2.MapString2StringVec
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {serial_v2.MapString2StringVec} MapString2StringVec
             */
            MapString2StringVec.fromObject = function fromObject(object) {
                if (object instanceof $root.serial_v2.MapString2StringVec)
                    return object;
                var message = new $root.serial_v2.MapString2StringVec();
                if (object.value) {
                    if (typeof object.value !== "object")
                        throw TypeError(".serial_v2.MapString2StringVec.value: object expected");
                    message.value = {};
                    for (var keys = Object.keys(object.value), i = 0; i < keys.length; ++i) {
                        if (typeof object.value[keys[i]] !== "object")
                            throw TypeError(".serial_v2.MapString2StringVec.value: object expected");
                        message.value[keys[i]] = $root.serial_v2.StringVec.fromObject(object.value[keys[i]]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a MapString2StringVec message. Also converts values to other types if specified.
             * @function toObject
             * @memberof serial_v2.MapString2StringVec
             * @static
             * @param {serial_v2.MapString2StringVec} message MapString2StringVec
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MapString2StringVec.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.value = {};
                var keys2;
                if (message.value && (keys2 = Object.keys(message.value)).length) {
                    object.value = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.value[keys2[j]] = $root.serial_v2.StringVec.toObject(message.value[keys2[j]], options);
                }
                return object;
            };
    
            /**
             * Converts this MapString2StringVec to JSON.
             * @function toJSON
             * @memberof serial_v2.MapString2StringVec
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MapString2StringVec.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MapString2StringVec;
        })();
    
        return serial_v2;
    })();

    return $root;
})(protobuf);
