/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const events = $root.events = (() => {

    /**
     * Namespace events.
     * @exports events
     * @namespace
     */
    const events = {};

    events.LlmMessage = (function() {

        /**
         * Properties of a LlmMessage.
         * @memberof events
         * @interface ILlmMessage
         * @property {string|null} [role] LlmMessage role
         * @property {string|null} [content] LlmMessage content
         */

        /**
         * Constructs a new LlmMessage.
         * @memberof events
         * @classdesc Represents a LlmMessage.
         * @implements ILlmMessage
         * @constructor
         * @param {events.ILlmMessage=} [properties] Properties to set
         */
        function LlmMessage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LlmMessage role.
         * @member {string} role
         * @memberof events.LlmMessage
         * @instance
         */
        LlmMessage.prototype.role = "";

        /**
         * LlmMessage content.
         * @member {string} content
         * @memberof events.LlmMessage
         * @instance
         */
        LlmMessage.prototype.content = "";

        /**
         * Creates a new LlmMessage instance using the specified properties.
         * @function create
         * @memberof events.LlmMessage
         * @static
         * @param {events.ILlmMessage=} [properties] Properties to set
         * @returns {events.LlmMessage} LlmMessage instance
         */
        LlmMessage.create = function create(properties) {
            return new LlmMessage(properties);
        };

        /**
         * Encodes the specified LlmMessage message. Does not implicitly {@link events.LlmMessage.verify|verify} messages.
         * @function encode
         * @memberof events.LlmMessage
         * @static
         * @param {events.ILlmMessage} message LlmMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LlmMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.role);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified LlmMessage message, length delimited. Does not implicitly {@link events.LlmMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.LlmMessage
         * @static
         * @param {events.ILlmMessage} message LlmMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LlmMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LlmMessage message from the specified reader or buffer.
         * @function decode
         * @memberof events.LlmMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.LlmMessage} LlmMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LlmMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.LlmMessage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.role = reader.string();
                        break;
                    }
                case 2: {
                        message.content = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LlmMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.LlmMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.LlmMessage} LlmMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LlmMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LlmMessage message.
         * @function verify
         * @memberof events.LlmMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LlmMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.role != null && message.hasOwnProperty("role"))
                if (!$util.isString(message.role))
                    return "role: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a LlmMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.LlmMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.LlmMessage} LlmMessage
         */
        LlmMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.events.LlmMessage)
                return object;
            let message = new $root.events.LlmMessage();
            if (object.role != null)
                message.role = String(object.role);
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a LlmMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.LlmMessage
         * @static
         * @param {events.LlmMessage} message LlmMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LlmMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.role = "";
                object.content = "";
            }
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = message.role;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this LlmMessage to JSON.
         * @function toJSON
         * @memberof events.LlmMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LlmMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LlmMessage
         * @function getTypeUrl
         * @memberof events.LlmMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LlmMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/events.LlmMessage";
        };

        return LlmMessage;
    })();

    events.StepStartedPayload = (function() {

        /**
         * Properties of a StepStartedPayload.
         * @memberof events
         * @interface IStepStartedPayload
         * @property {number|null} [step] StepStartedPayload step
         * @property {string|null} [nodeId] StepStartedPayload nodeId
         * @property {string|null} [nodeGoal] StepStartedPayload nodeGoal
         * @property {string|null} [rootId] StepStartedPayload rootId
         */

        /**
         * Constructs a new StepStartedPayload.
         * @memberof events
         * @classdesc Represents a StepStartedPayload.
         * @implements IStepStartedPayload
         * @constructor
         * @param {events.IStepStartedPayload=} [properties] Properties to set
         */
        function StepStartedPayload(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StepStartedPayload step.
         * @member {number} step
         * @memberof events.StepStartedPayload
         * @instance
         */
        StepStartedPayload.prototype.step = 0;

        /**
         * StepStartedPayload nodeId.
         * @member {string} nodeId
         * @memberof events.StepStartedPayload
         * @instance
         */
        StepStartedPayload.prototype.nodeId = "";

        /**
         * StepStartedPayload nodeGoal.
         * @member {string} nodeGoal
         * @memberof events.StepStartedPayload
         * @instance
         */
        StepStartedPayload.prototype.nodeGoal = "";

        /**
         * StepStartedPayload rootId.
         * @member {string} rootId
         * @memberof events.StepStartedPayload
         * @instance
         */
        StepStartedPayload.prototype.rootId = "";

        /**
         * Creates a new StepStartedPayload instance using the specified properties.
         * @function create
         * @memberof events.StepStartedPayload
         * @static
         * @param {events.IStepStartedPayload=} [properties] Properties to set
         * @returns {events.StepStartedPayload} StepStartedPayload instance
         */
        StepStartedPayload.create = function create(properties) {
            return new StepStartedPayload(properties);
        };

        /**
         * Encodes the specified StepStartedPayload message. Does not implicitly {@link events.StepStartedPayload.verify|verify} messages.
         * @function encode
         * @memberof events.StepStartedPayload
         * @static
         * @param {events.IStepStartedPayload} message StepStartedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StepStartedPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.step);
            if (message.nodeId != null && Object.hasOwnProperty.call(message, "nodeId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nodeId);
            if (message.nodeGoal != null && Object.hasOwnProperty.call(message, "nodeGoal"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nodeGoal);
            if (message.rootId != null && Object.hasOwnProperty.call(message, "rootId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.rootId);
            return writer;
        };

        /**
         * Encodes the specified StepStartedPayload message, length delimited. Does not implicitly {@link events.StepStartedPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.StepStartedPayload
         * @static
         * @param {events.IStepStartedPayload} message StepStartedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StepStartedPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StepStartedPayload message from the specified reader or buffer.
         * @function decode
         * @memberof events.StepStartedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.StepStartedPayload} StepStartedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StepStartedPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.StepStartedPayload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.step = reader.int32();
                        break;
                    }
                case 2: {
                        message.nodeId = reader.string();
                        break;
                    }
                case 3: {
                        message.nodeGoal = reader.string();
                        break;
                    }
                case 4: {
                        message.rootId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StepStartedPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.StepStartedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.StepStartedPayload} StepStartedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StepStartedPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StepStartedPayload message.
         * @function verify
         * @memberof events.StepStartedPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StepStartedPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.step != null && message.hasOwnProperty("step"))
                if (!$util.isInteger(message.step))
                    return "step: integer expected";
            if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                if (!$util.isString(message.nodeId))
                    return "nodeId: string expected";
            if (message.nodeGoal != null && message.hasOwnProperty("nodeGoal"))
                if (!$util.isString(message.nodeGoal))
                    return "nodeGoal: string expected";
            if (message.rootId != null && message.hasOwnProperty("rootId"))
                if (!$util.isString(message.rootId))
                    return "rootId: string expected";
            return null;
        };

        /**
         * Creates a StepStartedPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.StepStartedPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.StepStartedPayload} StepStartedPayload
         */
        StepStartedPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.events.StepStartedPayload)
                return object;
            let message = new $root.events.StepStartedPayload();
            if (object.step != null)
                message.step = object.step | 0;
            if (object.nodeId != null)
                message.nodeId = String(object.nodeId);
            if (object.nodeGoal != null)
                message.nodeGoal = String(object.nodeGoal);
            if (object.rootId != null)
                message.rootId = String(object.rootId);
            return message;
        };

        /**
         * Creates a plain object from a StepStartedPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.StepStartedPayload
         * @static
         * @param {events.StepStartedPayload} message StepStartedPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StepStartedPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.step = 0;
                object.nodeId = "";
                object.nodeGoal = "";
                object.rootId = "";
            }
            if (message.step != null && message.hasOwnProperty("step"))
                object.step = message.step;
            if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                object.nodeId = message.nodeId;
            if (message.nodeGoal != null && message.hasOwnProperty("nodeGoal"))
                object.nodeGoal = message.nodeGoal;
            if (message.rootId != null && message.hasOwnProperty("rootId"))
                object.rootId = message.rootId;
            return object;
        };

        /**
         * Converts this StepStartedPayload to JSON.
         * @function toJSON
         * @memberof events.StepStartedPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StepStartedPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StepStartedPayload
         * @function getTypeUrl
         * @memberof events.StepStartedPayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StepStartedPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/events.StepStartedPayload";
        };

        return StepStartedPayload;
    })();

    events.StepFinishedPayload = (function() {

        /**
         * Properties of a StepFinishedPayload.
         * @memberof events
         * @interface IStepFinishedPayload
         * @property {number|null} [step] StepFinishedPayload step
         * @property {string|null} [nodeId] StepFinishedPayload nodeId
         * @property {string|null} [actionName] StepFinishedPayload actionName
         * @property {string|null} [statusAfter] StepFinishedPayload statusAfter
         * @property {number|null} [durationSeconds] StepFinishedPayload durationSeconds
         */

        /**
         * Constructs a new StepFinishedPayload.
         * @memberof events
         * @classdesc Represents a StepFinishedPayload.
         * @implements IStepFinishedPayload
         * @constructor
         * @param {events.IStepFinishedPayload=} [properties] Properties to set
         */
        function StepFinishedPayload(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StepFinishedPayload step.
         * @member {number} step
         * @memberof events.StepFinishedPayload
         * @instance
         */
        StepFinishedPayload.prototype.step = 0;

        /**
         * StepFinishedPayload nodeId.
         * @member {string} nodeId
         * @memberof events.StepFinishedPayload
         * @instance
         */
        StepFinishedPayload.prototype.nodeId = "";

        /**
         * StepFinishedPayload actionName.
         * @member {string} actionName
         * @memberof events.StepFinishedPayload
         * @instance
         */
        StepFinishedPayload.prototype.actionName = "";

        /**
         * StepFinishedPayload statusAfter.
         * @member {string} statusAfter
         * @memberof events.StepFinishedPayload
         * @instance
         */
        StepFinishedPayload.prototype.statusAfter = "";

        /**
         * StepFinishedPayload durationSeconds.
         * @member {number} durationSeconds
         * @memberof events.StepFinishedPayload
         * @instance
         */
        StepFinishedPayload.prototype.durationSeconds = 0;

        /**
         * Creates a new StepFinishedPayload instance using the specified properties.
         * @function create
         * @memberof events.StepFinishedPayload
         * @static
         * @param {events.IStepFinishedPayload=} [properties] Properties to set
         * @returns {events.StepFinishedPayload} StepFinishedPayload instance
         */
        StepFinishedPayload.create = function create(properties) {
            return new StepFinishedPayload(properties);
        };

        /**
         * Encodes the specified StepFinishedPayload message. Does not implicitly {@link events.StepFinishedPayload.verify|verify} messages.
         * @function encode
         * @memberof events.StepFinishedPayload
         * @static
         * @param {events.IStepFinishedPayload} message StepFinishedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StepFinishedPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.step);
            if (message.nodeId != null && Object.hasOwnProperty.call(message, "nodeId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nodeId);
            if (message.actionName != null && Object.hasOwnProperty.call(message, "actionName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.actionName);
            if (message.statusAfter != null && Object.hasOwnProperty.call(message, "statusAfter"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.statusAfter);
            if (message.durationSeconds != null && Object.hasOwnProperty.call(message, "durationSeconds"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.durationSeconds);
            return writer;
        };

        /**
         * Encodes the specified StepFinishedPayload message, length delimited. Does not implicitly {@link events.StepFinishedPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.StepFinishedPayload
         * @static
         * @param {events.IStepFinishedPayload} message StepFinishedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StepFinishedPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StepFinishedPayload message from the specified reader or buffer.
         * @function decode
         * @memberof events.StepFinishedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.StepFinishedPayload} StepFinishedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StepFinishedPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.StepFinishedPayload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.step = reader.int32();
                        break;
                    }
                case 2: {
                        message.nodeId = reader.string();
                        break;
                    }
                case 3: {
                        message.actionName = reader.string();
                        break;
                    }
                case 4: {
                        message.statusAfter = reader.string();
                        break;
                    }
                case 5: {
                        message.durationSeconds = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StepFinishedPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.StepFinishedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.StepFinishedPayload} StepFinishedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StepFinishedPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StepFinishedPayload message.
         * @function verify
         * @memberof events.StepFinishedPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StepFinishedPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.step != null && message.hasOwnProperty("step"))
                if (!$util.isInteger(message.step))
                    return "step: integer expected";
            if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                if (!$util.isString(message.nodeId))
                    return "nodeId: string expected";
            if (message.actionName != null && message.hasOwnProperty("actionName"))
                if (!$util.isString(message.actionName))
                    return "actionName: string expected";
            if (message.statusAfter != null && message.hasOwnProperty("statusAfter"))
                if (!$util.isString(message.statusAfter))
                    return "statusAfter: string expected";
            if (message.durationSeconds != null && message.hasOwnProperty("durationSeconds"))
                if (typeof message.durationSeconds !== "number")
                    return "durationSeconds: number expected";
            return null;
        };

        /**
         * Creates a StepFinishedPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.StepFinishedPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.StepFinishedPayload} StepFinishedPayload
         */
        StepFinishedPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.events.StepFinishedPayload)
                return object;
            let message = new $root.events.StepFinishedPayload();
            if (object.step != null)
                message.step = object.step | 0;
            if (object.nodeId != null)
                message.nodeId = String(object.nodeId);
            if (object.actionName != null)
                message.actionName = String(object.actionName);
            if (object.statusAfter != null)
                message.statusAfter = String(object.statusAfter);
            if (object.durationSeconds != null)
                message.durationSeconds = Number(object.durationSeconds);
            return message;
        };

        /**
         * Creates a plain object from a StepFinishedPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.StepFinishedPayload
         * @static
         * @param {events.StepFinishedPayload} message StepFinishedPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StepFinishedPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.step = 0;
                object.nodeId = "";
                object.actionName = "";
                object.statusAfter = "";
                object.durationSeconds = 0;
            }
            if (message.step != null && message.hasOwnProperty("step"))
                object.step = message.step;
            if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                object.nodeId = message.nodeId;
            if (message.actionName != null && message.hasOwnProperty("actionName"))
                object.actionName = message.actionName;
            if (message.statusAfter != null && message.hasOwnProperty("statusAfter"))
                object.statusAfter = message.statusAfter;
            if (message.durationSeconds != null && message.hasOwnProperty("durationSeconds"))
                object.durationSeconds = options.json && !isFinite(message.durationSeconds) ? String(message.durationSeconds) : message.durationSeconds;
            return object;
        };

        /**
         * Converts this StepFinishedPayload to JSON.
         * @function toJSON
         * @memberof events.StepFinishedPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StepFinishedPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StepFinishedPayload
         * @function getTypeUrl
         * @memberof events.StepFinishedPayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StepFinishedPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/events.StepFinishedPayload";
        };

        return StepFinishedPayload;
    })();

    events.NodeStatusChangePayload = (function() {

        /**
         * Properties of a NodeStatusChangePayload.
         * @memberof events
         * @interface INodeStatusChangePayload
         * @property {string|null} [nodeId] NodeStatusChangePayload nodeId
         * @property {string|null} [nodeGoal] NodeStatusChangePayload nodeGoal
         * @property {string|null} [oldStatus] NodeStatusChangePayload oldStatus
         * @property {string|null} [newStatus] NodeStatusChangePayload newStatus
         * @property {number|null} [step] NodeStatusChangePayload step
         */

        /**
         * Constructs a new NodeStatusChangePayload.
         * @memberof events
         * @classdesc Represents a NodeStatusChangePayload.
         * @implements INodeStatusChangePayload
         * @constructor
         * @param {events.INodeStatusChangePayload=} [properties] Properties to set
         */
        function NodeStatusChangePayload(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NodeStatusChangePayload nodeId.
         * @member {string} nodeId
         * @memberof events.NodeStatusChangePayload
         * @instance
         */
        NodeStatusChangePayload.prototype.nodeId = "";

        /**
         * NodeStatusChangePayload nodeGoal.
         * @member {string} nodeGoal
         * @memberof events.NodeStatusChangePayload
         * @instance
         */
        NodeStatusChangePayload.prototype.nodeGoal = "";

        /**
         * NodeStatusChangePayload oldStatus.
         * @member {string} oldStatus
         * @memberof events.NodeStatusChangePayload
         * @instance
         */
        NodeStatusChangePayload.prototype.oldStatus = "";

        /**
         * NodeStatusChangePayload newStatus.
         * @member {string} newStatus
         * @memberof events.NodeStatusChangePayload
         * @instance
         */
        NodeStatusChangePayload.prototype.newStatus = "";

        /**
         * NodeStatusChangePayload step.
         * @member {number|null|undefined} step
         * @memberof events.NodeStatusChangePayload
         * @instance
         */
        NodeStatusChangePayload.prototype.step = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NodeStatusChangePayload.prototype, "_step", {
            get: $util.oneOfGetter($oneOfFields = ["step"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new NodeStatusChangePayload instance using the specified properties.
         * @function create
         * @memberof events.NodeStatusChangePayload
         * @static
         * @param {events.INodeStatusChangePayload=} [properties] Properties to set
         * @returns {events.NodeStatusChangePayload} NodeStatusChangePayload instance
         */
        NodeStatusChangePayload.create = function create(properties) {
            return new NodeStatusChangePayload(properties);
        };

        /**
         * Encodes the specified NodeStatusChangePayload message. Does not implicitly {@link events.NodeStatusChangePayload.verify|verify} messages.
         * @function encode
         * @memberof events.NodeStatusChangePayload
         * @static
         * @param {events.INodeStatusChangePayload} message NodeStatusChangePayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeStatusChangePayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nodeId != null && Object.hasOwnProperty.call(message, "nodeId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nodeId);
            if (message.nodeGoal != null && Object.hasOwnProperty.call(message, "nodeGoal"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nodeGoal);
            if (message.oldStatus != null && Object.hasOwnProperty.call(message, "oldStatus"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.oldStatus);
            if (message.newStatus != null && Object.hasOwnProperty.call(message, "newStatus"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.newStatus);
            if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.step);
            return writer;
        };

        /**
         * Encodes the specified NodeStatusChangePayload message, length delimited. Does not implicitly {@link events.NodeStatusChangePayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.NodeStatusChangePayload
         * @static
         * @param {events.INodeStatusChangePayload} message NodeStatusChangePayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeStatusChangePayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NodeStatusChangePayload message from the specified reader or buffer.
         * @function decode
         * @memberof events.NodeStatusChangePayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.NodeStatusChangePayload} NodeStatusChangePayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeStatusChangePayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.NodeStatusChangePayload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.nodeId = reader.string();
                        break;
                    }
                case 2: {
                        message.nodeGoal = reader.string();
                        break;
                    }
                case 3: {
                        message.oldStatus = reader.string();
                        break;
                    }
                case 4: {
                        message.newStatus = reader.string();
                        break;
                    }
                case 5: {
                        message.step = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NodeStatusChangePayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.NodeStatusChangePayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.NodeStatusChangePayload} NodeStatusChangePayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeStatusChangePayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NodeStatusChangePayload message.
         * @function verify
         * @memberof events.NodeStatusChangePayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NodeStatusChangePayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                if (!$util.isString(message.nodeId))
                    return "nodeId: string expected";
            if (message.nodeGoal != null && message.hasOwnProperty("nodeGoal"))
                if (!$util.isString(message.nodeGoal))
                    return "nodeGoal: string expected";
            if (message.oldStatus != null && message.hasOwnProperty("oldStatus"))
                if (!$util.isString(message.oldStatus))
                    return "oldStatus: string expected";
            if (message.newStatus != null && message.hasOwnProperty("newStatus"))
                if (!$util.isString(message.newStatus))
                    return "newStatus: string expected";
            if (message.step != null && message.hasOwnProperty("step")) {
                properties._step = 1;
                if (!$util.isInteger(message.step))
                    return "step: integer expected";
            }
            return null;
        };

        /**
         * Creates a NodeStatusChangePayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.NodeStatusChangePayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.NodeStatusChangePayload} NodeStatusChangePayload
         */
        NodeStatusChangePayload.fromObject = function fromObject(object) {
            if (object instanceof $root.events.NodeStatusChangePayload)
                return object;
            let message = new $root.events.NodeStatusChangePayload();
            if (object.nodeId != null)
                message.nodeId = String(object.nodeId);
            if (object.nodeGoal != null)
                message.nodeGoal = String(object.nodeGoal);
            if (object.oldStatus != null)
                message.oldStatus = String(object.oldStatus);
            if (object.newStatus != null)
                message.newStatus = String(object.newStatus);
            if (object.step != null)
                message.step = object.step | 0;
            return message;
        };

        /**
         * Creates a plain object from a NodeStatusChangePayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.NodeStatusChangePayload
         * @static
         * @param {events.NodeStatusChangePayload} message NodeStatusChangePayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NodeStatusChangePayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.nodeId = "";
                object.nodeGoal = "";
                object.oldStatus = "";
                object.newStatus = "";
            }
            if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                object.nodeId = message.nodeId;
            if (message.nodeGoal != null && message.hasOwnProperty("nodeGoal"))
                object.nodeGoal = message.nodeGoal;
            if (message.oldStatus != null && message.hasOwnProperty("oldStatus"))
                object.oldStatus = message.oldStatus;
            if (message.newStatus != null && message.hasOwnProperty("newStatus"))
                object.newStatus = message.newStatus;
            if (message.step != null && message.hasOwnProperty("step")) {
                object.step = message.step;
                if (options.oneofs)
                    object._step = "step";
            }
            return object;
        };

        /**
         * Converts this NodeStatusChangePayload to JSON.
         * @function toJSON
         * @memberof events.NodeStatusChangePayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NodeStatusChangePayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NodeStatusChangePayload
         * @function getTypeUrl
         * @memberof events.NodeStatusChangePayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NodeStatusChangePayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/events.NodeStatusChangePayload";
        };

        return NodeStatusChangePayload;
    })();

    events.TokenUsage = (function() {

        /**
         * Properties of a TokenUsage.
         * @memberof events
         * @interface ITokenUsage
         * @property {number|null} [promptTokens] TokenUsage promptTokens
         * @property {number|null} [completionTokens] TokenUsage completionTokens
         * @property {string|null} [error] TokenUsage error
         * @property {string|null} [nodeId] TokenUsage nodeId
         */

        /**
         * Constructs a new TokenUsage.
         * @memberof events
         * @classdesc Represents a TokenUsage.
         * @implements ITokenUsage
         * @constructor
         * @param {events.ITokenUsage=} [properties] Properties to set
         */
        function TokenUsage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenUsage promptTokens.
         * @member {number} promptTokens
         * @memberof events.TokenUsage
         * @instance
         */
        TokenUsage.prototype.promptTokens = 0;

        /**
         * TokenUsage completionTokens.
         * @member {number} completionTokens
         * @memberof events.TokenUsage
         * @instance
         */
        TokenUsage.prototype.completionTokens = 0;

        /**
         * TokenUsage error.
         * @member {string|null|undefined} error
         * @memberof events.TokenUsage
         * @instance
         */
        TokenUsage.prototype.error = null;

        /**
         * TokenUsage nodeId.
         * @member {string|null|undefined} nodeId
         * @memberof events.TokenUsage
         * @instance
         */
        TokenUsage.prototype.nodeId = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(TokenUsage.prototype, "_error", {
            get: $util.oneOfGetter($oneOfFields = ["error"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(TokenUsage.prototype, "_nodeId", {
            get: $util.oneOfGetter($oneOfFields = ["nodeId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new TokenUsage instance using the specified properties.
         * @function create
         * @memberof events.TokenUsage
         * @static
         * @param {events.ITokenUsage=} [properties] Properties to set
         * @returns {events.TokenUsage} TokenUsage instance
         */
        TokenUsage.create = function create(properties) {
            return new TokenUsage(properties);
        };

        /**
         * Encodes the specified TokenUsage message. Does not implicitly {@link events.TokenUsage.verify|verify} messages.
         * @function encode
         * @memberof events.TokenUsage
         * @static
         * @param {events.ITokenUsage} message TokenUsage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenUsage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.promptTokens != null && Object.hasOwnProperty.call(message, "promptTokens"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.promptTokens);
            if (message.completionTokens != null && Object.hasOwnProperty.call(message, "completionTokens"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.completionTokens);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.error);
            if (message.nodeId != null && Object.hasOwnProperty.call(message, "nodeId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.nodeId);
            return writer;
        };

        /**
         * Encodes the specified TokenUsage message, length delimited. Does not implicitly {@link events.TokenUsage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.TokenUsage
         * @static
         * @param {events.ITokenUsage} message TokenUsage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenUsage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenUsage message from the specified reader or buffer.
         * @function decode
         * @memberof events.TokenUsage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.TokenUsage} TokenUsage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenUsage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.TokenUsage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.promptTokens = reader.int32();
                        break;
                    }
                case 2: {
                        message.completionTokens = reader.int32();
                        break;
                    }
                case 3: {
                        message.error = reader.string();
                        break;
                    }
                case 4: {
                        message.nodeId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TokenUsage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.TokenUsage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.TokenUsage} TokenUsage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenUsage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenUsage message.
         * @function verify
         * @memberof events.TokenUsage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenUsage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.promptTokens != null && message.hasOwnProperty("promptTokens"))
                if (!$util.isInteger(message.promptTokens))
                    return "promptTokens: integer expected";
            if (message.completionTokens != null && message.hasOwnProperty("completionTokens"))
                if (!$util.isInteger(message.completionTokens))
                    return "completionTokens: integer expected";
            if (message.error != null && message.hasOwnProperty("error")) {
                properties._error = 1;
                if (!$util.isString(message.error))
                    return "error: string expected";
            }
            if (message.nodeId != null && message.hasOwnProperty("nodeId")) {
                properties._nodeId = 1;
                if (!$util.isString(message.nodeId))
                    return "nodeId: string expected";
            }
            return null;
        };

        /**
         * Creates a TokenUsage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.TokenUsage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.TokenUsage} TokenUsage
         */
        TokenUsage.fromObject = function fromObject(object) {
            if (object instanceof $root.events.TokenUsage)
                return object;
            let message = new $root.events.TokenUsage();
            if (object.promptTokens != null)
                message.promptTokens = object.promptTokens | 0;
            if (object.completionTokens != null)
                message.completionTokens = object.completionTokens | 0;
            if (object.error != null)
                message.error = String(object.error);
            if (object.nodeId != null)
                message.nodeId = String(object.nodeId);
            return message;
        };

        /**
         * Creates a plain object from a TokenUsage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.TokenUsage
         * @static
         * @param {events.TokenUsage} message TokenUsage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenUsage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.promptTokens = 0;
                object.completionTokens = 0;
            }
            if (message.promptTokens != null && message.hasOwnProperty("promptTokens"))
                object.promptTokens = message.promptTokens;
            if (message.completionTokens != null && message.hasOwnProperty("completionTokens"))
                object.completionTokens = message.completionTokens;
            if (message.error != null && message.hasOwnProperty("error")) {
                object.error = message.error;
                if (options.oneofs)
                    object._error = "error";
            }
            if (message.nodeId != null && message.hasOwnProperty("nodeId")) {
                object.nodeId = message.nodeId;
                if (options.oneofs)
                    object._nodeId = "nodeId";
            }
            return object;
        };

        /**
         * Converts this TokenUsage to JSON.
         * @function toJSON
         * @memberof events.TokenUsage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenUsage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TokenUsage
         * @function getTypeUrl
         * @memberof events.TokenUsage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TokenUsage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/events.TokenUsage";
        };

        return TokenUsage;
    })();

    events.LlmCallStartedPayload = (function() {

        /**
         * Properties of a LlmCallStartedPayload.
         * @memberof events
         * @interface ILlmCallStartedPayload
         * @property {string|null} [agentClass] LlmCallStartedPayload agentClass
         * @property {string|null} [model] LlmCallStartedPayload model
         * @property {Array.<events.ILlmMessage>|null} [prompt] LlmCallStartedPayload prompt
         * @property {string|null} [promptPreview] LlmCallStartedPayload promptPreview
         * @property {number|null} [step] LlmCallStartedPayload step
         * @property {string|null} [nodeId] LlmCallStartedPayload nodeId
         * @property {string|null} [actionName] LlmCallStartedPayload actionName
         * @property {string|null} [callId] LlmCallStartedPayload callId
         */

        /**
         * Constructs a new LlmCallStartedPayload.
         * @memberof events
         * @classdesc Represents a LlmCallStartedPayload.
         * @implements ILlmCallStartedPayload
         * @constructor
         * @param {events.ILlmCallStartedPayload=} [properties] Properties to set
         */
        function LlmCallStartedPayload(properties) {
            this.prompt = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LlmCallStartedPayload agentClass.
         * @member {string} agentClass
         * @memberof events.LlmCallStartedPayload
         * @instance
         */
        LlmCallStartedPayload.prototype.agentClass = "";

        /**
         * LlmCallStartedPayload model.
         * @member {string} model
         * @memberof events.LlmCallStartedPayload
         * @instance
         */
        LlmCallStartedPayload.prototype.model = "";

        /**
         * LlmCallStartedPayload prompt.
         * @member {Array.<events.ILlmMessage>} prompt
         * @memberof events.LlmCallStartedPayload
         * @instance
         */
        LlmCallStartedPayload.prototype.prompt = $util.emptyArray;

        /**
         * LlmCallStartedPayload promptPreview.
         * @member {string} promptPreview
         * @memberof events.LlmCallStartedPayload
         * @instance
         */
        LlmCallStartedPayload.prototype.promptPreview = "";

        /**
         * LlmCallStartedPayload step.
         * @member {number|null|undefined} step
         * @memberof events.LlmCallStartedPayload
         * @instance
         */
        LlmCallStartedPayload.prototype.step = null;

        /**
         * LlmCallStartedPayload nodeId.
         * @member {string|null|undefined} nodeId
         * @memberof events.LlmCallStartedPayload
         * @instance
         */
        LlmCallStartedPayload.prototype.nodeId = null;

        /**
         * LlmCallStartedPayload actionName.
         * @member {string|null|undefined} actionName
         * @memberof events.LlmCallStartedPayload
         * @instance
         */
        LlmCallStartedPayload.prototype.actionName = null;

        /**
         * LlmCallStartedPayload callId.
         * @member {string} callId
         * @memberof events.LlmCallStartedPayload
         * @instance
         */
        LlmCallStartedPayload.prototype.callId = "";

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LlmCallStartedPayload.prototype, "_step", {
            get: $util.oneOfGetter($oneOfFields = ["step"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LlmCallStartedPayload.prototype, "_nodeId", {
            get: $util.oneOfGetter($oneOfFields = ["nodeId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LlmCallStartedPayload.prototype, "_actionName", {
            get: $util.oneOfGetter($oneOfFields = ["actionName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new LlmCallStartedPayload instance using the specified properties.
         * @function create
         * @memberof events.LlmCallStartedPayload
         * @static
         * @param {events.ILlmCallStartedPayload=} [properties] Properties to set
         * @returns {events.LlmCallStartedPayload} LlmCallStartedPayload instance
         */
        LlmCallStartedPayload.create = function create(properties) {
            return new LlmCallStartedPayload(properties);
        };

        /**
         * Encodes the specified LlmCallStartedPayload message. Does not implicitly {@link events.LlmCallStartedPayload.verify|verify} messages.
         * @function encode
         * @memberof events.LlmCallStartedPayload
         * @static
         * @param {events.ILlmCallStartedPayload} message LlmCallStartedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LlmCallStartedPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.agentClass != null && Object.hasOwnProperty.call(message, "agentClass"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.agentClass);
            if (message.model != null && Object.hasOwnProperty.call(message, "model"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.model);
            if (message.prompt != null && message.prompt.length)
                for (let i = 0; i < message.prompt.length; ++i)
                    $root.events.LlmMessage.encode(message.prompt[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.promptPreview != null && Object.hasOwnProperty.call(message, "promptPreview"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.promptPreview);
            if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.step);
            if (message.nodeId != null && Object.hasOwnProperty.call(message, "nodeId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.nodeId);
            if (message.actionName != null && Object.hasOwnProperty.call(message, "actionName"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.actionName);
            if (message.callId != null && Object.hasOwnProperty.call(message, "callId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.callId);
            return writer;
        };

        /**
         * Encodes the specified LlmCallStartedPayload message, length delimited. Does not implicitly {@link events.LlmCallStartedPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.LlmCallStartedPayload
         * @static
         * @param {events.ILlmCallStartedPayload} message LlmCallStartedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LlmCallStartedPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LlmCallStartedPayload message from the specified reader or buffer.
         * @function decode
         * @memberof events.LlmCallStartedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.LlmCallStartedPayload} LlmCallStartedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LlmCallStartedPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.LlmCallStartedPayload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.agentClass = reader.string();
                        break;
                    }
                case 2: {
                        message.model = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.prompt && message.prompt.length))
                            message.prompt = [];
                        message.prompt.push($root.events.LlmMessage.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.promptPreview = reader.string();
                        break;
                    }
                case 5: {
                        message.step = reader.int32();
                        break;
                    }
                case 6: {
                        message.nodeId = reader.string();
                        break;
                    }
                case 7: {
                        message.actionName = reader.string();
                        break;
                    }
                case 8: {
                        message.callId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LlmCallStartedPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.LlmCallStartedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.LlmCallStartedPayload} LlmCallStartedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LlmCallStartedPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LlmCallStartedPayload message.
         * @function verify
         * @memberof events.LlmCallStartedPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LlmCallStartedPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.agentClass != null && message.hasOwnProperty("agentClass"))
                if (!$util.isString(message.agentClass))
                    return "agentClass: string expected";
            if (message.model != null && message.hasOwnProperty("model"))
                if (!$util.isString(message.model))
                    return "model: string expected";
            if (message.prompt != null && message.hasOwnProperty("prompt")) {
                if (!Array.isArray(message.prompt))
                    return "prompt: array expected";
                for (let i = 0; i < message.prompt.length; ++i) {
                    let error = $root.events.LlmMessage.verify(message.prompt[i]);
                    if (error)
                        return "prompt." + error;
                }
            }
            if (message.promptPreview != null && message.hasOwnProperty("promptPreview"))
                if (!$util.isString(message.promptPreview))
                    return "promptPreview: string expected";
            if (message.step != null && message.hasOwnProperty("step")) {
                properties._step = 1;
                if (!$util.isInteger(message.step))
                    return "step: integer expected";
            }
            if (message.nodeId != null && message.hasOwnProperty("nodeId")) {
                properties._nodeId = 1;
                if (!$util.isString(message.nodeId))
                    return "nodeId: string expected";
            }
            if (message.actionName != null && message.hasOwnProperty("actionName")) {
                properties._actionName = 1;
                if (!$util.isString(message.actionName))
                    return "actionName: string expected";
            }
            if (message.callId != null && message.hasOwnProperty("callId"))
                if (!$util.isString(message.callId))
                    return "callId: string expected";
            return null;
        };

        /**
         * Creates a LlmCallStartedPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.LlmCallStartedPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.LlmCallStartedPayload} LlmCallStartedPayload
         */
        LlmCallStartedPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.events.LlmCallStartedPayload)
                return object;
            let message = new $root.events.LlmCallStartedPayload();
            if (object.agentClass != null)
                message.agentClass = String(object.agentClass);
            if (object.model != null)
                message.model = String(object.model);
            if (object.prompt) {
                if (!Array.isArray(object.prompt))
                    throw TypeError(".events.LlmCallStartedPayload.prompt: array expected");
                message.prompt = [];
                for (let i = 0; i < object.prompt.length; ++i) {
                    if (typeof object.prompt[i] !== "object")
                        throw TypeError(".events.LlmCallStartedPayload.prompt: object expected");
                    message.prompt[i] = $root.events.LlmMessage.fromObject(object.prompt[i]);
                }
            }
            if (object.promptPreview != null)
                message.promptPreview = String(object.promptPreview);
            if (object.step != null)
                message.step = object.step | 0;
            if (object.nodeId != null)
                message.nodeId = String(object.nodeId);
            if (object.actionName != null)
                message.actionName = String(object.actionName);
            if (object.callId != null)
                message.callId = String(object.callId);
            return message;
        };

        /**
         * Creates a plain object from a LlmCallStartedPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.LlmCallStartedPayload
         * @static
         * @param {events.LlmCallStartedPayload} message LlmCallStartedPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LlmCallStartedPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.prompt = [];
            if (options.defaults) {
                object.agentClass = "";
                object.model = "";
                object.promptPreview = "";
                object.callId = "";
            }
            if (message.agentClass != null && message.hasOwnProperty("agentClass"))
                object.agentClass = message.agentClass;
            if (message.model != null && message.hasOwnProperty("model"))
                object.model = message.model;
            if (message.prompt && message.prompt.length) {
                object.prompt = [];
                for (let j = 0; j < message.prompt.length; ++j)
                    object.prompt[j] = $root.events.LlmMessage.toObject(message.prompt[j], options);
            }
            if (message.promptPreview != null && message.hasOwnProperty("promptPreview"))
                object.promptPreview = message.promptPreview;
            if (message.step != null && message.hasOwnProperty("step")) {
                object.step = message.step;
                if (options.oneofs)
                    object._step = "step";
            }
            if (message.nodeId != null && message.hasOwnProperty("nodeId")) {
                object.nodeId = message.nodeId;
                if (options.oneofs)
                    object._nodeId = "nodeId";
            }
            if (message.actionName != null && message.hasOwnProperty("actionName")) {
                object.actionName = message.actionName;
                if (options.oneofs)
                    object._actionName = "actionName";
            }
            if (message.callId != null && message.hasOwnProperty("callId"))
                object.callId = message.callId;
            return object;
        };

        /**
         * Converts this LlmCallStartedPayload to JSON.
         * @function toJSON
         * @memberof events.LlmCallStartedPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LlmCallStartedPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LlmCallStartedPayload
         * @function getTypeUrl
         * @memberof events.LlmCallStartedPayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LlmCallStartedPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/events.LlmCallStartedPayload";
        };

        return LlmCallStartedPayload;
    })();

    events.LlmCallCompletedPayload = (function() {

        /**
         * Properties of a LlmCallCompletedPayload.
         * @memberof events
         * @interface ILlmCallCompletedPayload
         * @property {string|null} [agentClass] LlmCallCompletedPayload agentClass
         * @property {string|null} [model] LlmCallCompletedPayload model
         * @property {number|null} [durationSeconds] LlmCallCompletedPayload durationSeconds
         * @property {string|null} [response] LlmCallCompletedPayload response
         * @property {string|null} [resultSummary] LlmCallCompletedPayload resultSummary
         * @property {string|null} [error] LlmCallCompletedPayload error
         * @property {number|null} [step] LlmCallCompletedPayload step
         * @property {string|null} [nodeId] LlmCallCompletedPayload nodeId
         * @property {events.ITokenUsage|null} [tokenUsage] LlmCallCompletedPayload tokenUsage
         * @property {string|null} [actionName] LlmCallCompletedPayload actionName
         * @property {string|null} [callId] LlmCallCompletedPayload callId
         */

        /**
         * Constructs a new LlmCallCompletedPayload.
         * @memberof events
         * @classdesc Represents a LlmCallCompletedPayload.
         * @implements ILlmCallCompletedPayload
         * @constructor
         * @param {events.ILlmCallCompletedPayload=} [properties] Properties to set
         */
        function LlmCallCompletedPayload(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LlmCallCompletedPayload agentClass.
         * @member {string} agentClass
         * @memberof events.LlmCallCompletedPayload
         * @instance
         */
        LlmCallCompletedPayload.prototype.agentClass = "";

        /**
         * LlmCallCompletedPayload model.
         * @member {string} model
         * @memberof events.LlmCallCompletedPayload
         * @instance
         */
        LlmCallCompletedPayload.prototype.model = "";

        /**
         * LlmCallCompletedPayload durationSeconds.
         * @member {number} durationSeconds
         * @memberof events.LlmCallCompletedPayload
         * @instance
         */
        LlmCallCompletedPayload.prototype.durationSeconds = 0;

        /**
         * LlmCallCompletedPayload response.
         * @member {string} response
         * @memberof events.LlmCallCompletedPayload
         * @instance
         */
        LlmCallCompletedPayload.prototype.response = "";

        /**
         * LlmCallCompletedPayload resultSummary.
         * @member {string} resultSummary
         * @memberof events.LlmCallCompletedPayload
         * @instance
         */
        LlmCallCompletedPayload.prototype.resultSummary = "";

        /**
         * LlmCallCompletedPayload error.
         * @member {string|null|undefined} error
         * @memberof events.LlmCallCompletedPayload
         * @instance
         */
        LlmCallCompletedPayload.prototype.error = null;

        /**
         * LlmCallCompletedPayload step.
         * @member {number|null|undefined} step
         * @memberof events.LlmCallCompletedPayload
         * @instance
         */
        LlmCallCompletedPayload.prototype.step = null;

        /**
         * LlmCallCompletedPayload nodeId.
         * @member {string|null|undefined} nodeId
         * @memberof events.LlmCallCompletedPayload
         * @instance
         */
        LlmCallCompletedPayload.prototype.nodeId = null;

        /**
         * LlmCallCompletedPayload tokenUsage.
         * @member {events.ITokenUsage|null|undefined} tokenUsage
         * @memberof events.LlmCallCompletedPayload
         * @instance
         */
        LlmCallCompletedPayload.prototype.tokenUsage = null;

        /**
         * LlmCallCompletedPayload actionName.
         * @member {string|null|undefined} actionName
         * @memberof events.LlmCallCompletedPayload
         * @instance
         */
        LlmCallCompletedPayload.prototype.actionName = null;

        /**
         * LlmCallCompletedPayload callId.
         * @member {string} callId
         * @memberof events.LlmCallCompletedPayload
         * @instance
         */
        LlmCallCompletedPayload.prototype.callId = "";

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LlmCallCompletedPayload.prototype, "_error", {
            get: $util.oneOfGetter($oneOfFields = ["error"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LlmCallCompletedPayload.prototype, "_step", {
            get: $util.oneOfGetter($oneOfFields = ["step"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LlmCallCompletedPayload.prototype, "_nodeId", {
            get: $util.oneOfGetter($oneOfFields = ["nodeId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LlmCallCompletedPayload.prototype, "_tokenUsage", {
            get: $util.oneOfGetter($oneOfFields = ["tokenUsage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LlmCallCompletedPayload.prototype, "_actionName", {
            get: $util.oneOfGetter($oneOfFields = ["actionName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new LlmCallCompletedPayload instance using the specified properties.
         * @function create
         * @memberof events.LlmCallCompletedPayload
         * @static
         * @param {events.ILlmCallCompletedPayload=} [properties] Properties to set
         * @returns {events.LlmCallCompletedPayload} LlmCallCompletedPayload instance
         */
        LlmCallCompletedPayload.create = function create(properties) {
            return new LlmCallCompletedPayload(properties);
        };

        /**
         * Encodes the specified LlmCallCompletedPayload message. Does not implicitly {@link events.LlmCallCompletedPayload.verify|verify} messages.
         * @function encode
         * @memberof events.LlmCallCompletedPayload
         * @static
         * @param {events.ILlmCallCompletedPayload} message LlmCallCompletedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LlmCallCompletedPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.agentClass != null && Object.hasOwnProperty.call(message, "agentClass"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.agentClass);
            if (message.model != null && Object.hasOwnProperty.call(message, "model"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.model);
            if (message.durationSeconds != null && Object.hasOwnProperty.call(message, "durationSeconds"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.durationSeconds);
            if (message.response != null && Object.hasOwnProperty.call(message, "response"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.response);
            if (message.resultSummary != null && Object.hasOwnProperty.call(message, "resultSummary"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.resultSummary);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.error);
            if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.step);
            if (message.nodeId != null && Object.hasOwnProperty.call(message, "nodeId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.nodeId);
            if (message.tokenUsage != null && Object.hasOwnProperty.call(message, "tokenUsage"))
                $root.events.TokenUsage.encode(message.tokenUsage, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.actionName != null && Object.hasOwnProperty.call(message, "actionName"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.actionName);
            if (message.callId != null && Object.hasOwnProperty.call(message, "callId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.callId);
            return writer;
        };

        /**
         * Encodes the specified LlmCallCompletedPayload message, length delimited. Does not implicitly {@link events.LlmCallCompletedPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.LlmCallCompletedPayload
         * @static
         * @param {events.ILlmCallCompletedPayload} message LlmCallCompletedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LlmCallCompletedPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LlmCallCompletedPayload message from the specified reader or buffer.
         * @function decode
         * @memberof events.LlmCallCompletedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.LlmCallCompletedPayload} LlmCallCompletedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LlmCallCompletedPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.LlmCallCompletedPayload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.agentClass = reader.string();
                        break;
                    }
                case 2: {
                        message.model = reader.string();
                        break;
                    }
                case 3: {
                        message.durationSeconds = reader.double();
                        break;
                    }
                case 4: {
                        message.response = reader.string();
                        break;
                    }
                case 5: {
                        message.resultSummary = reader.string();
                        break;
                    }
                case 6: {
                        message.error = reader.string();
                        break;
                    }
                case 7: {
                        message.step = reader.int32();
                        break;
                    }
                case 8: {
                        message.nodeId = reader.string();
                        break;
                    }
                case 9: {
                        message.tokenUsage = $root.events.TokenUsage.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.actionName = reader.string();
                        break;
                    }
                case 11: {
                        message.callId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LlmCallCompletedPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.LlmCallCompletedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.LlmCallCompletedPayload} LlmCallCompletedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LlmCallCompletedPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LlmCallCompletedPayload message.
         * @function verify
         * @memberof events.LlmCallCompletedPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LlmCallCompletedPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.agentClass != null && message.hasOwnProperty("agentClass"))
                if (!$util.isString(message.agentClass))
                    return "agentClass: string expected";
            if (message.model != null && message.hasOwnProperty("model"))
                if (!$util.isString(message.model))
                    return "model: string expected";
            if (message.durationSeconds != null && message.hasOwnProperty("durationSeconds"))
                if (typeof message.durationSeconds !== "number")
                    return "durationSeconds: number expected";
            if (message.response != null && message.hasOwnProperty("response"))
                if (!$util.isString(message.response))
                    return "response: string expected";
            if (message.resultSummary != null && message.hasOwnProperty("resultSummary"))
                if (!$util.isString(message.resultSummary))
                    return "resultSummary: string expected";
            if (message.error != null && message.hasOwnProperty("error")) {
                properties._error = 1;
                if (!$util.isString(message.error))
                    return "error: string expected";
            }
            if (message.step != null && message.hasOwnProperty("step")) {
                properties._step = 1;
                if (!$util.isInteger(message.step))
                    return "step: integer expected";
            }
            if (message.nodeId != null && message.hasOwnProperty("nodeId")) {
                properties._nodeId = 1;
                if (!$util.isString(message.nodeId))
                    return "nodeId: string expected";
            }
            if (message.tokenUsage != null && message.hasOwnProperty("tokenUsage")) {
                properties._tokenUsage = 1;
                {
                    let error = $root.events.TokenUsage.verify(message.tokenUsage);
                    if (error)
                        return "tokenUsage." + error;
                }
            }
            if (message.actionName != null && message.hasOwnProperty("actionName")) {
                properties._actionName = 1;
                if (!$util.isString(message.actionName))
                    return "actionName: string expected";
            }
            if (message.callId != null && message.hasOwnProperty("callId"))
                if (!$util.isString(message.callId))
                    return "callId: string expected";
            return null;
        };

        /**
         * Creates a LlmCallCompletedPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.LlmCallCompletedPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.LlmCallCompletedPayload} LlmCallCompletedPayload
         */
        LlmCallCompletedPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.events.LlmCallCompletedPayload)
                return object;
            let message = new $root.events.LlmCallCompletedPayload();
            if (object.agentClass != null)
                message.agentClass = String(object.agentClass);
            if (object.model != null)
                message.model = String(object.model);
            if (object.durationSeconds != null)
                message.durationSeconds = Number(object.durationSeconds);
            if (object.response != null)
                message.response = String(object.response);
            if (object.resultSummary != null)
                message.resultSummary = String(object.resultSummary);
            if (object.error != null)
                message.error = String(object.error);
            if (object.step != null)
                message.step = object.step | 0;
            if (object.nodeId != null)
                message.nodeId = String(object.nodeId);
            if (object.tokenUsage != null) {
                if (typeof object.tokenUsage !== "object")
                    throw TypeError(".events.LlmCallCompletedPayload.tokenUsage: object expected");
                message.tokenUsage = $root.events.TokenUsage.fromObject(object.tokenUsage);
            }
            if (object.actionName != null)
                message.actionName = String(object.actionName);
            if (object.callId != null)
                message.callId = String(object.callId);
            return message;
        };

        /**
         * Creates a plain object from a LlmCallCompletedPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.LlmCallCompletedPayload
         * @static
         * @param {events.LlmCallCompletedPayload} message LlmCallCompletedPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LlmCallCompletedPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.agentClass = "";
                object.model = "";
                object.durationSeconds = 0;
                object.response = "";
                object.resultSummary = "";
                object.callId = "";
            }
            if (message.agentClass != null && message.hasOwnProperty("agentClass"))
                object.agentClass = message.agentClass;
            if (message.model != null && message.hasOwnProperty("model"))
                object.model = message.model;
            if (message.durationSeconds != null && message.hasOwnProperty("durationSeconds"))
                object.durationSeconds = options.json && !isFinite(message.durationSeconds) ? String(message.durationSeconds) : message.durationSeconds;
            if (message.response != null && message.hasOwnProperty("response"))
                object.response = message.response;
            if (message.resultSummary != null && message.hasOwnProperty("resultSummary"))
                object.resultSummary = message.resultSummary;
            if (message.error != null && message.hasOwnProperty("error")) {
                object.error = message.error;
                if (options.oneofs)
                    object._error = "error";
            }
            if (message.step != null && message.hasOwnProperty("step")) {
                object.step = message.step;
                if (options.oneofs)
                    object._step = "step";
            }
            if (message.nodeId != null && message.hasOwnProperty("nodeId")) {
                object.nodeId = message.nodeId;
                if (options.oneofs)
                    object._nodeId = "nodeId";
            }
            if (message.tokenUsage != null && message.hasOwnProperty("tokenUsage")) {
                object.tokenUsage = $root.events.TokenUsage.toObject(message.tokenUsage, options);
                if (options.oneofs)
                    object._tokenUsage = "tokenUsage";
            }
            if (message.actionName != null && message.hasOwnProperty("actionName")) {
                object.actionName = message.actionName;
                if (options.oneofs)
                    object._actionName = "actionName";
            }
            if (message.callId != null && message.hasOwnProperty("callId"))
                object.callId = message.callId;
            return object;
        };

        /**
         * Converts this LlmCallCompletedPayload to JSON.
         * @function toJSON
         * @memberof events.LlmCallCompletedPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LlmCallCompletedPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LlmCallCompletedPayload
         * @function getTypeUrl
         * @memberof events.LlmCallCompletedPayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LlmCallCompletedPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/events.LlmCallCompletedPayload";
        };

        return LlmCallCompletedPayload;
    })();

    events.ToolInvokedPayload = (function() {

        /**
         * Properties of a ToolInvokedPayload.
         * @memberof events
         * @interface IToolInvokedPayload
         * @property {string|null} [toolName] ToolInvokedPayload toolName
         * @property {string|null} [apiName] ToolInvokedPayload apiName
         * @property {string|null} [argsSummary] ToolInvokedPayload argsSummary
         * @property {string|null} [nodeId] ToolInvokedPayload nodeId
         * @property {number|null} [step] ToolInvokedPayload step
         * @property {string|null} [agentClass] ToolInvokedPayload agentClass
         * @property {string|null} [toolCallId] ToolInvokedPayload toolCallId
         */

        /**
         * Constructs a new ToolInvokedPayload.
         * @memberof events
         * @classdesc Represents a ToolInvokedPayload.
         * @implements IToolInvokedPayload
         * @constructor
         * @param {events.IToolInvokedPayload=} [properties] Properties to set
         */
        function ToolInvokedPayload(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ToolInvokedPayload toolName.
         * @member {string} toolName
         * @memberof events.ToolInvokedPayload
         * @instance
         */
        ToolInvokedPayload.prototype.toolName = "";

        /**
         * ToolInvokedPayload apiName.
         * @member {string} apiName
         * @memberof events.ToolInvokedPayload
         * @instance
         */
        ToolInvokedPayload.prototype.apiName = "";

        /**
         * ToolInvokedPayload argsSummary.
         * @member {string} argsSummary
         * @memberof events.ToolInvokedPayload
         * @instance
         */
        ToolInvokedPayload.prototype.argsSummary = "";

        /**
         * ToolInvokedPayload nodeId.
         * @member {string|null|undefined} nodeId
         * @memberof events.ToolInvokedPayload
         * @instance
         */
        ToolInvokedPayload.prototype.nodeId = null;

        /**
         * ToolInvokedPayload step.
         * @member {number|null|undefined} step
         * @memberof events.ToolInvokedPayload
         * @instance
         */
        ToolInvokedPayload.prototype.step = null;

        /**
         * ToolInvokedPayload agentClass.
         * @member {string|null|undefined} agentClass
         * @memberof events.ToolInvokedPayload
         * @instance
         */
        ToolInvokedPayload.prototype.agentClass = null;

        /**
         * ToolInvokedPayload toolCallId.
         * @member {string} toolCallId
         * @memberof events.ToolInvokedPayload
         * @instance
         */
        ToolInvokedPayload.prototype.toolCallId = "";

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ToolInvokedPayload.prototype, "_nodeId", {
            get: $util.oneOfGetter($oneOfFields = ["nodeId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ToolInvokedPayload.prototype, "_step", {
            get: $util.oneOfGetter($oneOfFields = ["step"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ToolInvokedPayload.prototype, "_agentClass", {
            get: $util.oneOfGetter($oneOfFields = ["agentClass"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ToolInvokedPayload instance using the specified properties.
         * @function create
         * @memberof events.ToolInvokedPayload
         * @static
         * @param {events.IToolInvokedPayload=} [properties] Properties to set
         * @returns {events.ToolInvokedPayload} ToolInvokedPayload instance
         */
        ToolInvokedPayload.create = function create(properties) {
            return new ToolInvokedPayload(properties);
        };

        /**
         * Encodes the specified ToolInvokedPayload message. Does not implicitly {@link events.ToolInvokedPayload.verify|verify} messages.
         * @function encode
         * @memberof events.ToolInvokedPayload
         * @static
         * @param {events.IToolInvokedPayload} message ToolInvokedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ToolInvokedPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.toolName != null && Object.hasOwnProperty.call(message, "toolName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.toolName);
            if (message.apiName != null && Object.hasOwnProperty.call(message, "apiName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.apiName);
            if (message.argsSummary != null && Object.hasOwnProperty.call(message, "argsSummary"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.argsSummary);
            if (message.nodeId != null && Object.hasOwnProperty.call(message, "nodeId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.nodeId);
            if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.step);
            if (message.agentClass != null && Object.hasOwnProperty.call(message, "agentClass"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.agentClass);
            if (message.toolCallId != null && Object.hasOwnProperty.call(message, "toolCallId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.toolCallId);
            return writer;
        };

        /**
         * Encodes the specified ToolInvokedPayload message, length delimited. Does not implicitly {@link events.ToolInvokedPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.ToolInvokedPayload
         * @static
         * @param {events.IToolInvokedPayload} message ToolInvokedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ToolInvokedPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ToolInvokedPayload message from the specified reader or buffer.
         * @function decode
         * @memberof events.ToolInvokedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.ToolInvokedPayload} ToolInvokedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ToolInvokedPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.ToolInvokedPayload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.toolName = reader.string();
                        break;
                    }
                case 2: {
                        message.apiName = reader.string();
                        break;
                    }
                case 3: {
                        message.argsSummary = reader.string();
                        break;
                    }
                case 4: {
                        message.nodeId = reader.string();
                        break;
                    }
                case 5: {
                        message.step = reader.int32();
                        break;
                    }
                case 6: {
                        message.agentClass = reader.string();
                        break;
                    }
                case 7: {
                        message.toolCallId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ToolInvokedPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.ToolInvokedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.ToolInvokedPayload} ToolInvokedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ToolInvokedPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ToolInvokedPayload message.
         * @function verify
         * @memberof events.ToolInvokedPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ToolInvokedPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.toolName != null && message.hasOwnProperty("toolName"))
                if (!$util.isString(message.toolName))
                    return "toolName: string expected";
            if (message.apiName != null && message.hasOwnProperty("apiName"))
                if (!$util.isString(message.apiName))
                    return "apiName: string expected";
            if (message.argsSummary != null && message.hasOwnProperty("argsSummary"))
                if (!$util.isString(message.argsSummary))
                    return "argsSummary: string expected";
            if (message.nodeId != null && message.hasOwnProperty("nodeId")) {
                properties._nodeId = 1;
                if (!$util.isString(message.nodeId))
                    return "nodeId: string expected";
            }
            if (message.step != null && message.hasOwnProperty("step")) {
                properties._step = 1;
                if (!$util.isInteger(message.step))
                    return "step: integer expected";
            }
            if (message.agentClass != null && message.hasOwnProperty("agentClass")) {
                properties._agentClass = 1;
                if (!$util.isString(message.agentClass))
                    return "agentClass: string expected";
            }
            if (message.toolCallId != null && message.hasOwnProperty("toolCallId"))
                if (!$util.isString(message.toolCallId))
                    return "toolCallId: string expected";
            return null;
        };

        /**
         * Creates a ToolInvokedPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.ToolInvokedPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.ToolInvokedPayload} ToolInvokedPayload
         */
        ToolInvokedPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.events.ToolInvokedPayload)
                return object;
            let message = new $root.events.ToolInvokedPayload();
            if (object.toolName != null)
                message.toolName = String(object.toolName);
            if (object.apiName != null)
                message.apiName = String(object.apiName);
            if (object.argsSummary != null)
                message.argsSummary = String(object.argsSummary);
            if (object.nodeId != null)
                message.nodeId = String(object.nodeId);
            if (object.step != null)
                message.step = object.step | 0;
            if (object.agentClass != null)
                message.agentClass = String(object.agentClass);
            if (object.toolCallId != null)
                message.toolCallId = String(object.toolCallId);
            return message;
        };

        /**
         * Creates a plain object from a ToolInvokedPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.ToolInvokedPayload
         * @static
         * @param {events.ToolInvokedPayload} message ToolInvokedPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ToolInvokedPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.toolName = "";
                object.apiName = "";
                object.argsSummary = "";
                object.toolCallId = "";
            }
            if (message.toolName != null && message.hasOwnProperty("toolName"))
                object.toolName = message.toolName;
            if (message.apiName != null && message.hasOwnProperty("apiName"))
                object.apiName = message.apiName;
            if (message.argsSummary != null && message.hasOwnProperty("argsSummary"))
                object.argsSummary = message.argsSummary;
            if (message.nodeId != null && message.hasOwnProperty("nodeId")) {
                object.nodeId = message.nodeId;
                if (options.oneofs)
                    object._nodeId = "nodeId";
            }
            if (message.step != null && message.hasOwnProperty("step")) {
                object.step = message.step;
                if (options.oneofs)
                    object._step = "step";
            }
            if (message.agentClass != null && message.hasOwnProperty("agentClass")) {
                object.agentClass = message.agentClass;
                if (options.oneofs)
                    object._agentClass = "agentClass";
            }
            if (message.toolCallId != null && message.hasOwnProperty("toolCallId"))
                object.toolCallId = message.toolCallId;
            return object;
        };

        /**
         * Converts this ToolInvokedPayload to JSON.
         * @function toJSON
         * @memberof events.ToolInvokedPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ToolInvokedPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ToolInvokedPayload
         * @function getTypeUrl
         * @memberof events.ToolInvokedPayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ToolInvokedPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/events.ToolInvokedPayload";
        };

        return ToolInvokedPayload;
    })();

    events.ToolReturnedPayload = (function() {

        /**
         * Properties of a ToolReturnedPayload.
         * @memberof events
         * @interface IToolReturnedPayload
         * @property {string|null} [toolName] ToolReturnedPayload toolName
         * @property {string|null} [apiName] ToolReturnedPayload apiName
         * @property {string|null} [state] ToolReturnedPayload state
         * @property {number|null} [durationSeconds] ToolReturnedPayload durationSeconds
         * @property {string|null} [resultSummary] ToolReturnedPayload resultSummary
         * @property {string|null} [error] ToolReturnedPayload error
         * @property {string|null} [nodeId] ToolReturnedPayload nodeId
         * @property {number|null} [step] ToolReturnedPayload step
         * @property {string|null} [agentClass] ToolReturnedPayload agentClass
         * @property {string|null} [toolCallId] ToolReturnedPayload toolCallId
         */

        /**
         * Constructs a new ToolReturnedPayload.
         * @memberof events
         * @classdesc Represents a ToolReturnedPayload.
         * @implements IToolReturnedPayload
         * @constructor
         * @param {events.IToolReturnedPayload=} [properties] Properties to set
         */
        function ToolReturnedPayload(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ToolReturnedPayload toolName.
         * @member {string} toolName
         * @memberof events.ToolReturnedPayload
         * @instance
         */
        ToolReturnedPayload.prototype.toolName = "";

        /**
         * ToolReturnedPayload apiName.
         * @member {string} apiName
         * @memberof events.ToolReturnedPayload
         * @instance
         */
        ToolReturnedPayload.prototype.apiName = "";

        /**
         * ToolReturnedPayload state.
         * @member {string} state
         * @memberof events.ToolReturnedPayload
         * @instance
         */
        ToolReturnedPayload.prototype.state = "";

        /**
         * ToolReturnedPayload durationSeconds.
         * @member {number} durationSeconds
         * @memberof events.ToolReturnedPayload
         * @instance
         */
        ToolReturnedPayload.prototype.durationSeconds = 0;

        /**
         * ToolReturnedPayload resultSummary.
         * @member {string} resultSummary
         * @memberof events.ToolReturnedPayload
         * @instance
         */
        ToolReturnedPayload.prototype.resultSummary = "";

        /**
         * ToolReturnedPayload error.
         * @member {string|null|undefined} error
         * @memberof events.ToolReturnedPayload
         * @instance
         */
        ToolReturnedPayload.prototype.error = null;

        /**
         * ToolReturnedPayload nodeId.
         * @member {string|null|undefined} nodeId
         * @memberof events.ToolReturnedPayload
         * @instance
         */
        ToolReturnedPayload.prototype.nodeId = null;

        /**
         * ToolReturnedPayload step.
         * @member {number|null|undefined} step
         * @memberof events.ToolReturnedPayload
         * @instance
         */
        ToolReturnedPayload.prototype.step = null;

        /**
         * ToolReturnedPayload agentClass.
         * @member {string|null|undefined} agentClass
         * @memberof events.ToolReturnedPayload
         * @instance
         */
        ToolReturnedPayload.prototype.agentClass = null;

        /**
         * ToolReturnedPayload toolCallId.
         * @member {string} toolCallId
         * @memberof events.ToolReturnedPayload
         * @instance
         */
        ToolReturnedPayload.prototype.toolCallId = "";

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ToolReturnedPayload.prototype, "_error", {
            get: $util.oneOfGetter($oneOfFields = ["error"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ToolReturnedPayload.prototype, "_nodeId", {
            get: $util.oneOfGetter($oneOfFields = ["nodeId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ToolReturnedPayload.prototype, "_step", {
            get: $util.oneOfGetter($oneOfFields = ["step"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ToolReturnedPayload.prototype, "_agentClass", {
            get: $util.oneOfGetter($oneOfFields = ["agentClass"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ToolReturnedPayload instance using the specified properties.
         * @function create
         * @memberof events.ToolReturnedPayload
         * @static
         * @param {events.IToolReturnedPayload=} [properties] Properties to set
         * @returns {events.ToolReturnedPayload} ToolReturnedPayload instance
         */
        ToolReturnedPayload.create = function create(properties) {
            return new ToolReturnedPayload(properties);
        };

        /**
         * Encodes the specified ToolReturnedPayload message. Does not implicitly {@link events.ToolReturnedPayload.verify|verify} messages.
         * @function encode
         * @memberof events.ToolReturnedPayload
         * @static
         * @param {events.IToolReturnedPayload} message ToolReturnedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ToolReturnedPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.toolName != null && Object.hasOwnProperty.call(message, "toolName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.toolName);
            if (message.apiName != null && Object.hasOwnProperty.call(message, "apiName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.apiName);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.state);
            if (message.durationSeconds != null && Object.hasOwnProperty.call(message, "durationSeconds"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.durationSeconds);
            if (message.resultSummary != null && Object.hasOwnProperty.call(message, "resultSummary"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.resultSummary);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.error);
            if (message.nodeId != null && Object.hasOwnProperty.call(message, "nodeId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.nodeId);
            if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.step);
            if (message.agentClass != null && Object.hasOwnProperty.call(message, "agentClass"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.agentClass);
            if (message.toolCallId != null && Object.hasOwnProperty.call(message, "toolCallId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.toolCallId);
            return writer;
        };

        /**
         * Encodes the specified ToolReturnedPayload message, length delimited. Does not implicitly {@link events.ToolReturnedPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.ToolReturnedPayload
         * @static
         * @param {events.IToolReturnedPayload} message ToolReturnedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ToolReturnedPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ToolReturnedPayload message from the specified reader or buffer.
         * @function decode
         * @memberof events.ToolReturnedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.ToolReturnedPayload} ToolReturnedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ToolReturnedPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.ToolReturnedPayload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.toolName = reader.string();
                        break;
                    }
                case 2: {
                        message.apiName = reader.string();
                        break;
                    }
                case 3: {
                        message.state = reader.string();
                        break;
                    }
                case 4: {
                        message.durationSeconds = reader.double();
                        break;
                    }
                case 5: {
                        message.resultSummary = reader.string();
                        break;
                    }
                case 6: {
                        message.error = reader.string();
                        break;
                    }
                case 7: {
                        message.nodeId = reader.string();
                        break;
                    }
                case 8: {
                        message.step = reader.int32();
                        break;
                    }
                case 9: {
                        message.agentClass = reader.string();
                        break;
                    }
                case 10: {
                        message.toolCallId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ToolReturnedPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.ToolReturnedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.ToolReturnedPayload} ToolReturnedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ToolReturnedPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ToolReturnedPayload message.
         * @function verify
         * @memberof events.ToolReturnedPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ToolReturnedPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.toolName != null && message.hasOwnProperty("toolName"))
                if (!$util.isString(message.toolName))
                    return "toolName: string expected";
            if (message.apiName != null && message.hasOwnProperty("apiName"))
                if (!$util.isString(message.apiName))
                    return "apiName: string expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isString(message.state))
                    return "state: string expected";
            if (message.durationSeconds != null && message.hasOwnProperty("durationSeconds"))
                if (typeof message.durationSeconds !== "number")
                    return "durationSeconds: number expected";
            if (message.resultSummary != null && message.hasOwnProperty("resultSummary"))
                if (!$util.isString(message.resultSummary))
                    return "resultSummary: string expected";
            if (message.error != null && message.hasOwnProperty("error")) {
                properties._error = 1;
                if (!$util.isString(message.error))
                    return "error: string expected";
            }
            if (message.nodeId != null && message.hasOwnProperty("nodeId")) {
                properties._nodeId = 1;
                if (!$util.isString(message.nodeId))
                    return "nodeId: string expected";
            }
            if (message.step != null && message.hasOwnProperty("step")) {
                properties._step = 1;
                if (!$util.isInteger(message.step))
                    return "step: integer expected";
            }
            if (message.agentClass != null && message.hasOwnProperty("agentClass")) {
                properties._agentClass = 1;
                if (!$util.isString(message.agentClass))
                    return "agentClass: string expected";
            }
            if (message.toolCallId != null && message.hasOwnProperty("toolCallId"))
                if (!$util.isString(message.toolCallId))
                    return "toolCallId: string expected";
            return null;
        };

        /**
         * Creates a ToolReturnedPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.ToolReturnedPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.ToolReturnedPayload} ToolReturnedPayload
         */
        ToolReturnedPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.events.ToolReturnedPayload)
                return object;
            let message = new $root.events.ToolReturnedPayload();
            if (object.toolName != null)
                message.toolName = String(object.toolName);
            if (object.apiName != null)
                message.apiName = String(object.apiName);
            if (object.state != null)
                message.state = String(object.state);
            if (object.durationSeconds != null)
                message.durationSeconds = Number(object.durationSeconds);
            if (object.resultSummary != null)
                message.resultSummary = String(object.resultSummary);
            if (object.error != null)
                message.error = String(object.error);
            if (object.nodeId != null)
                message.nodeId = String(object.nodeId);
            if (object.step != null)
                message.step = object.step | 0;
            if (object.agentClass != null)
                message.agentClass = String(object.agentClass);
            if (object.toolCallId != null)
                message.toolCallId = String(object.toolCallId);
            return message;
        };

        /**
         * Creates a plain object from a ToolReturnedPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.ToolReturnedPayload
         * @static
         * @param {events.ToolReturnedPayload} message ToolReturnedPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ToolReturnedPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.toolName = "";
                object.apiName = "";
                object.state = "";
                object.durationSeconds = 0;
                object.resultSummary = "";
                object.toolCallId = "";
            }
            if (message.toolName != null && message.hasOwnProperty("toolName"))
                object.toolName = message.toolName;
            if (message.apiName != null && message.hasOwnProperty("apiName"))
                object.apiName = message.apiName;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.durationSeconds != null && message.hasOwnProperty("durationSeconds"))
                object.durationSeconds = options.json && !isFinite(message.durationSeconds) ? String(message.durationSeconds) : message.durationSeconds;
            if (message.resultSummary != null && message.hasOwnProperty("resultSummary"))
                object.resultSummary = message.resultSummary;
            if (message.error != null && message.hasOwnProperty("error")) {
                object.error = message.error;
                if (options.oneofs)
                    object._error = "error";
            }
            if (message.nodeId != null && message.hasOwnProperty("nodeId")) {
                object.nodeId = message.nodeId;
                if (options.oneofs)
                    object._nodeId = "nodeId";
            }
            if (message.step != null && message.hasOwnProperty("step")) {
                object.step = message.step;
                if (options.oneofs)
                    object._step = "step";
            }
            if (message.agentClass != null && message.hasOwnProperty("agentClass")) {
                object.agentClass = message.agentClass;
                if (options.oneofs)
                    object._agentClass = "agentClass";
            }
            if (message.toolCallId != null && message.hasOwnProperty("toolCallId"))
                object.toolCallId = message.toolCallId;
            return object;
        };

        /**
         * Converts this ToolReturnedPayload to JSON.
         * @function toJSON
         * @memberof events.ToolReturnedPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ToolReturnedPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ToolReturnedPayload
         * @function getTypeUrl
         * @memberof events.ToolReturnedPayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ToolReturnedPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/events.ToolReturnedPayload";
        };

        return ToolReturnedPayload;
    })();

    events.NodeCreatedPayload = (function() {

        /**
         * Properties of a NodeCreatedPayload.
         * @memberof events
         * @interface INodeCreatedPayload
         * @property {string|null} [nodeId] NodeCreatedPayload nodeId
         * @property {string|null} [nodeNid] NodeCreatedPayload nodeNid
         * @property {string|null} [nodeType] NodeCreatedPayload nodeType
         * @property {string|null} [taskType] NodeCreatedPayload taskType
         * @property {string|null} [taskGoal] NodeCreatedPayload taskGoal
         * @property {number|null} [layer] NodeCreatedPayload layer
         * @property {string|null} [outerNodeId] NodeCreatedPayload outerNodeId
         * @property {string|null} [rootNodeId] NodeCreatedPayload rootNodeId
         * @property {Array.<string>|null} [initialParentNids] NodeCreatedPayload initialParentNids
         * @property {number|null} [step] NodeCreatedPayload step
         */

        /**
         * Constructs a new NodeCreatedPayload.
         * @memberof events
         * @classdesc Represents a NodeCreatedPayload.
         * @implements INodeCreatedPayload
         * @constructor
         * @param {events.INodeCreatedPayload=} [properties] Properties to set
         */
        function NodeCreatedPayload(properties) {
            this.initialParentNids = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NodeCreatedPayload nodeId.
         * @member {string} nodeId
         * @memberof events.NodeCreatedPayload
         * @instance
         */
        NodeCreatedPayload.prototype.nodeId = "";

        /**
         * NodeCreatedPayload nodeNid.
         * @member {string} nodeNid
         * @memberof events.NodeCreatedPayload
         * @instance
         */
        NodeCreatedPayload.prototype.nodeNid = "";

        /**
         * NodeCreatedPayload nodeType.
         * @member {string} nodeType
         * @memberof events.NodeCreatedPayload
         * @instance
         */
        NodeCreatedPayload.prototype.nodeType = "";

        /**
         * NodeCreatedPayload taskType.
         * @member {string} taskType
         * @memberof events.NodeCreatedPayload
         * @instance
         */
        NodeCreatedPayload.prototype.taskType = "";

        /**
         * NodeCreatedPayload taskGoal.
         * @member {string} taskGoal
         * @memberof events.NodeCreatedPayload
         * @instance
         */
        NodeCreatedPayload.prototype.taskGoal = "";

        /**
         * NodeCreatedPayload layer.
         * @member {number} layer
         * @memberof events.NodeCreatedPayload
         * @instance
         */
        NodeCreatedPayload.prototype.layer = 0;

        /**
         * NodeCreatedPayload outerNodeId.
         * @member {string|null|undefined} outerNodeId
         * @memberof events.NodeCreatedPayload
         * @instance
         */
        NodeCreatedPayload.prototype.outerNodeId = null;

        /**
         * NodeCreatedPayload rootNodeId.
         * @member {string} rootNodeId
         * @memberof events.NodeCreatedPayload
         * @instance
         */
        NodeCreatedPayload.prototype.rootNodeId = "";

        /**
         * NodeCreatedPayload initialParentNids.
         * @member {Array.<string>} initialParentNids
         * @memberof events.NodeCreatedPayload
         * @instance
         */
        NodeCreatedPayload.prototype.initialParentNids = $util.emptyArray;

        /**
         * NodeCreatedPayload step.
         * @member {number|null|undefined} step
         * @memberof events.NodeCreatedPayload
         * @instance
         */
        NodeCreatedPayload.prototype.step = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NodeCreatedPayload.prototype, "_outerNodeId", {
            get: $util.oneOfGetter($oneOfFields = ["outerNodeId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NodeCreatedPayload.prototype, "_step", {
            get: $util.oneOfGetter($oneOfFields = ["step"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new NodeCreatedPayload instance using the specified properties.
         * @function create
         * @memberof events.NodeCreatedPayload
         * @static
         * @param {events.INodeCreatedPayload=} [properties] Properties to set
         * @returns {events.NodeCreatedPayload} NodeCreatedPayload instance
         */
        NodeCreatedPayload.create = function create(properties) {
            return new NodeCreatedPayload(properties);
        };

        /**
         * Encodes the specified NodeCreatedPayload message. Does not implicitly {@link events.NodeCreatedPayload.verify|verify} messages.
         * @function encode
         * @memberof events.NodeCreatedPayload
         * @static
         * @param {events.INodeCreatedPayload} message NodeCreatedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeCreatedPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nodeId != null && Object.hasOwnProperty.call(message, "nodeId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nodeId);
            if (message.nodeNid != null && Object.hasOwnProperty.call(message, "nodeNid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nodeNid);
            if (message.nodeType != null && Object.hasOwnProperty.call(message, "nodeType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nodeType);
            if (message.taskType != null && Object.hasOwnProperty.call(message, "taskType"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.taskType);
            if (message.taskGoal != null && Object.hasOwnProperty.call(message, "taskGoal"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.taskGoal);
            if (message.layer != null && Object.hasOwnProperty.call(message, "layer"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.layer);
            if (message.outerNodeId != null && Object.hasOwnProperty.call(message, "outerNodeId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.outerNodeId);
            if (message.rootNodeId != null && Object.hasOwnProperty.call(message, "rootNodeId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.rootNodeId);
            if (message.initialParentNids != null && message.initialParentNids.length)
                for (let i = 0; i < message.initialParentNids.length; ++i)
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.initialParentNids[i]);
            if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.step);
            return writer;
        };

        /**
         * Encodes the specified NodeCreatedPayload message, length delimited. Does not implicitly {@link events.NodeCreatedPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.NodeCreatedPayload
         * @static
         * @param {events.INodeCreatedPayload} message NodeCreatedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeCreatedPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NodeCreatedPayload message from the specified reader or buffer.
         * @function decode
         * @memberof events.NodeCreatedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.NodeCreatedPayload} NodeCreatedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeCreatedPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.NodeCreatedPayload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.nodeId = reader.string();
                        break;
                    }
                case 2: {
                        message.nodeNid = reader.string();
                        break;
                    }
                case 3: {
                        message.nodeType = reader.string();
                        break;
                    }
                case 4: {
                        message.taskType = reader.string();
                        break;
                    }
                case 5: {
                        message.taskGoal = reader.string();
                        break;
                    }
                case 6: {
                        message.layer = reader.int32();
                        break;
                    }
                case 7: {
                        message.outerNodeId = reader.string();
                        break;
                    }
                case 8: {
                        message.rootNodeId = reader.string();
                        break;
                    }
                case 9: {
                        if (!(message.initialParentNids && message.initialParentNids.length))
                            message.initialParentNids = [];
                        message.initialParentNids.push(reader.string());
                        break;
                    }
                case 10: {
                        message.step = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NodeCreatedPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.NodeCreatedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.NodeCreatedPayload} NodeCreatedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeCreatedPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NodeCreatedPayload message.
         * @function verify
         * @memberof events.NodeCreatedPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NodeCreatedPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                if (!$util.isString(message.nodeId))
                    return "nodeId: string expected";
            if (message.nodeNid != null && message.hasOwnProperty("nodeNid"))
                if (!$util.isString(message.nodeNid))
                    return "nodeNid: string expected";
            if (message.nodeType != null && message.hasOwnProperty("nodeType"))
                if (!$util.isString(message.nodeType))
                    return "nodeType: string expected";
            if (message.taskType != null && message.hasOwnProperty("taskType"))
                if (!$util.isString(message.taskType))
                    return "taskType: string expected";
            if (message.taskGoal != null && message.hasOwnProperty("taskGoal"))
                if (!$util.isString(message.taskGoal))
                    return "taskGoal: string expected";
            if (message.layer != null && message.hasOwnProperty("layer"))
                if (!$util.isInteger(message.layer))
                    return "layer: integer expected";
            if (message.outerNodeId != null && message.hasOwnProperty("outerNodeId")) {
                properties._outerNodeId = 1;
                if (!$util.isString(message.outerNodeId))
                    return "outerNodeId: string expected";
            }
            if (message.rootNodeId != null && message.hasOwnProperty("rootNodeId"))
                if (!$util.isString(message.rootNodeId))
                    return "rootNodeId: string expected";
            if (message.initialParentNids != null && message.hasOwnProperty("initialParentNids")) {
                if (!Array.isArray(message.initialParentNids))
                    return "initialParentNids: array expected";
                for (let i = 0; i < message.initialParentNids.length; ++i)
                    if (!$util.isString(message.initialParentNids[i]))
                        return "initialParentNids: string[] expected";
            }
            if (message.step != null && message.hasOwnProperty("step")) {
                properties._step = 1;
                if (!$util.isInteger(message.step))
                    return "step: integer expected";
            }
            return null;
        };

        /**
         * Creates a NodeCreatedPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.NodeCreatedPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.NodeCreatedPayload} NodeCreatedPayload
         */
        NodeCreatedPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.events.NodeCreatedPayload)
                return object;
            let message = new $root.events.NodeCreatedPayload();
            if (object.nodeId != null)
                message.nodeId = String(object.nodeId);
            if (object.nodeNid != null)
                message.nodeNid = String(object.nodeNid);
            if (object.nodeType != null)
                message.nodeType = String(object.nodeType);
            if (object.taskType != null)
                message.taskType = String(object.taskType);
            if (object.taskGoal != null)
                message.taskGoal = String(object.taskGoal);
            if (object.layer != null)
                message.layer = object.layer | 0;
            if (object.outerNodeId != null)
                message.outerNodeId = String(object.outerNodeId);
            if (object.rootNodeId != null)
                message.rootNodeId = String(object.rootNodeId);
            if (object.initialParentNids) {
                if (!Array.isArray(object.initialParentNids))
                    throw TypeError(".events.NodeCreatedPayload.initialParentNids: array expected");
                message.initialParentNids = [];
                for (let i = 0; i < object.initialParentNids.length; ++i)
                    message.initialParentNids[i] = String(object.initialParentNids[i]);
            }
            if (object.step != null)
                message.step = object.step | 0;
            return message;
        };

        /**
         * Creates a plain object from a NodeCreatedPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.NodeCreatedPayload
         * @static
         * @param {events.NodeCreatedPayload} message NodeCreatedPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NodeCreatedPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.initialParentNids = [];
            if (options.defaults) {
                object.nodeId = "";
                object.nodeNid = "";
                object.nodeType = "";
                object.taskType = "";
                object.taskGoal = "";
                object.layer = 0;
                object.rootNodeId = "";
            }
            if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                object.nodeId = message.nodeId;
            if (message.nodeNid != null && message.hasOwnProperty("nodeNid"))
                object.nodeNid = message.nodeNid;
            if (message.nodeType != null && message.hasOwnProperty("nodeType"))
                object.nodeType = message.nodeType;
            if (message.taskType != null && message.hasOwnProperty("taskType"))
                object.taskType = message.taskType;
            if (message.taskGoal != null && message.hasOwnProperty("taskGoal"))
                object.taskGoal = message.taskGoal;
            if (message.layer != null && message.hasOwnProperty("layer"))
                object.layer = message.layer;
            if (message.outerNodeId != null && message.hasOwnProperty("outerNodeId")) {
                object.outerNodeId = message.outerNodeId;
                if (options.oneofs)
                    object._outerNodeId = "outerNodeId";
            }
            if (message.rootNodeId != null && message.hasOwnProperty("rootNodeId"))
                object.rootNodeId = message.rootNodeId;
            if (message.initialParentNids && message.initialParentNids.length) {
                object.initialParentNids = [];
                for (let j = 0; j < message.initialParentNids.length; ++j)
                    object.initialParentNids[j] = message.initialParentNids[j];
            }
            if (message.step != null && message.hasOwnProperty("step")) {
                object.step = message.step;
                if (options.oneofs)
                    object._step = "step";
            }
            return object;
        };

        /**
         * Converts this NodeCreatedPayload to JSON.
         * @function toJSON
         * @memberof events.NodeCreatedPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NodeCreatedPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NodeCreatedPayload
         * @function getTypeUrl
         * @memberof events.NodeCreatedPayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NodeCreatedPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/events.NodeCreatedPayload";
        };

        return NodeCreatedPayload;
    })();

    events.PlanReceivedPayload = (function() {

        /**
         * Properties of a PlanReceivedPayload.
         * @memberof events
         * @interface IPlanReceivedPayload
         * @property {string|null} [nodeId] PlanReceivedPayload nodeId
         * @property {google.protobuf.IStruct|null} [rawPlan] PlanReceivedPayload rawPlan
         * @property {number|null} [step] PlanReceivedPayload step
         * @property {string|null} [taskType] PlanReceivedPayload taskType
         * @property {string|null} [taskGoal] PlanReceivedPayload taskGoal
         */

        /**
         * Constructs a new PlanReceivedPayload.
         * @memberof events
         * @classdesc Represents a PlanReceivedPayload.
         * @implements IPlanReceivedPayload
         * @constructor
         * @param {events.IPlanReceivedPayload=} [properties] Properties to set
         */
        function PlanReceivedPayload(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlanReceivedPayload nodeId.
         * @member {string} nodeId
         * @memberof events.PlanReceivedPayload
         * @instance
         */
        PlanReceivedPayload.prototype.nodeId = "";

        /**
         * PlanReceivedPayload rawPlan.
         * @member {google.protobuf.IStruct|null|undefined} rawPlan
         * @memberof events.PlanReceivedPayload
         * @instance
         */
        PlanReceivedPayload.prototype.rawPlan = null;

        /**
         * PlanReceivedPayload step.
         * @member {number|null|undefined} step
         * @memberof events.PlanReceivedPayload
         * @instance
         */
        PlanReceivedPayload.prototype.step = null;

        /**
         * PlanReceivedPayload taskType.
         * @member {string|null|undefined} taskType
         * @memberof events.PlanReceivedPayload
         * @instance
         */
        PlanReceivedPayload.prototype.taskType = null;

        /**
         * PlanReceivedPayload taskGoal.
         * @member {string|null|undefined} taskGoal
         * @memberof events.PlanReceivedPayload
         * @instance
         */
        PlanReceivedPayload.prototype.taskGoal = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PlanReceivedPayload.prototype, "_step", {
            get: $util.oneOfGetter($oneOfFields = ["step"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PlanReceivedPayload.prototype, "_taskType", {
            get: $util.oneOfGetter($oneOfFields = ["taskType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PlanReceivedPayload.prototype, "_taskGoal", {
            get: $util.oneOfGetter($oneOfFields = ["taskGoal"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PlanReceivedPayload instance using the specified properties.
         * @function create
         * @memberof events.PlanReceivedPayload
         * @static
         * @param {events.IPlanReceivedPayload=} [properties] Properties to set
         * @returns {events.PlanReceivedPayload} PlanReceivedPayload instance
         */
        PlanReceivedPayload.create = function create(properties) {
            return new PlanReceivedPayload(properties);
        };

        /**
         * Encodes the specified PlanReceivedPayload message. Does not implicitly {@link events.PlanReceivedPayload.verify|verify} messages.
         * @function encode
         * @memberof events.PlanReceivedPayload
         * @static
         * @param {events.IPlanReceivedPayload} message PlanReceivedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlanReceivedPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nodeId != null && Object.hasOwnProperty.call(message, "nodeId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nodeId);
            if (message.rawPlan != null && Object.hasOwnProperty.call(message, "rawPlan"))
                $root.google.protobuf.Struct.encode(message.rawPlan, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.step);
            if (message.taskType != null && Object.hasOwnProperty.call(message, "taskType"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.taskType);
            if (message.taskGoal != null && Object.hasOwnProperty.call(message, "taskGoal"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.taskGoal);
            return writer;
        };

        /**
         * Encodes the specified PlanReceivedPayload message, length delimited. Does not implicitly {@link events.PlanReceivedPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.PlanReceivedPayload
         * @static
         * @param {events.IPlanReceivedPayload} message PlanReceivedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlanReceivedPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlanReceivedPayload message from the specified reader or buffer.
         * @function decode
         * @memberof events.PlanReceivedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.PlanReceivedPayload} PlanReceivedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlanReceivedPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.PlanReceivedPayload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.nodeId = reader.string();
                        break;
                    }
                case 2: {
                        message.rawPlan = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.step = reader.int32();
                        break;
                    }
                case 4: {
                        message.taskType = reader.string();
                        break;
                    }
                case 5: {
                        message.taskGoal = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlanReceivedPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.PlanReceivedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.PlanReceivedPayload} PlanReceivedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlanReceivedPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlanReceivedPayload message.
         * @function verify
         * @memberof events.PlanReceivedPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlanReceivedPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                if (!$util.isString(message.nodeId))
                    return "nodeId: string expected";
            if (message.rawPlan != null && message.hasOwnProperty("rawPlan")) {
                let error = $root.google.protobuf.Struct.verify(message.rawPlan);
                if (error)
                    return "rawPlan." + error;
            }
            if (message.step != null && message.hasOwnProperty("step")) {
                properties._step = 1;
                if (!$util.isInteger(message.step))
                    return "step: integer expected";
            }
            if (message.taskType != null && message.hasOwnProperty("taskType")) {
                properties._taskType = 1;
                if (!$util.isString(message.taskType))
                    return "taskType: string expected";
            }
            if (message.taskGoal != null && message.hasOwnProperty("taskGoal")) {
                properties._taskGoal = 1;
                if (!$util.isString(message.taskGoal))
                    return "taskGoal: string expected";
            }
            return null;
        };

        /**
         * Creates a PlanReceivedPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.PlanReceivedPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.PlanReceivedPayload} PlanReceivedPayload
         */
        PlanReceivedPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.events.PlanReceivedPayload)
                return object;
            let message = new $root.events.PlanReceivedPayload();
            if (object.nodeId != null)
                message.nodeId = String(object.nodeId);
            if (object.rawPlan != null) {
                if (typeof object.rawPlan !== "object")
                    throw TypeError(".events.PlanReceivedPayload.rawPlan: object expected");
                message.rawPlan = $root.google.protobuf.Struct.fromObject(object.rawPlan);
            }
            if (object.step != null)
                message.step = object.step | 0;
            if (object.taskType != null)
                message.taskType = String(object.taskType);
            if (object.taskGoal != null)
                message.taskGoal = String(object.taskGoal);
            return message;
        };

        /**
         * Creates a plain object from a PlanReceivedPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.PlanReceivedPayload
         * @static
         * @param {events.PlanReceivedPayload} message PlanReceivedPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlanReceivedPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.nodeId = "";
                object.rawPlan = null;
            }
            if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                object.nodeId = message.nodeId;
            if (message.rawPlan != null && message.hasOwnProperty("rawPlan"))
                object.rawPlan = $root.google.protobuf.Struct.toObject(message.rawPlan, options);
            if (message.step != null && message.hasOwnProperty("step")) {
                object.step = message.step;
                if (options.oneofs)
                    object._step = "step";
            }
            if (message.taskType != null && message.hasOwnProperty("taskType")) {
                object.taskType = message.taskType;
                if (options.oneofs)
                    object._taskType = "taskType";
            }
            if (message.taskGoal != null && message.hasOwnProperty("taskGoal")) {
                object.taskGoal = message.taskGoal;
                if (options.oneofs)
                    object._taskGoal = "taskGoal";
            }
            return object;
        };

        /**
         * Converts this PlanReceivedPayload to JSON.
         * @function toJSON
         * @memberof events.PlanReceivedPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlanReceivedPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PlanReceivedPayload
         * @function getTypeUrl
         * @memberof events.PlanReceivedPayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlanReceivedPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/events.PlanReceivedPayload";
        };

        return PlanReceivedPayload;
    })();

    events.NodeAddedPayload = (function() {

        /**
         * Properties of a NodeAddedPayload.
         * @memberof events
         * @interface INodeAddedPayload
         * @property {string|null} [graphOwnerNodeId] NodeAddedPayload graphOwnerNodeId
         * @property {string|null} [addedNodeId] NodeAddedPayload addedNodeId
         * @property {string|null} [addedNodeNid] NodeAddedPayload addedNodeNid
         * @property {number|null} [step] NodeAddedPayload step
         * @property {string|null} [taskType] NodeAddedPayload taskType
         * @property {string|null} [taskGoal] NodeAddedPayload taskGoal
         */

        /**
         * Constructs a new NodeAddedPayload.
         * @memberof events
         * @classdesc Represents a NodeAddedPayload.
         * @implements INodeAddedPayload
         * @constructor
         * @param {events.INodeAddedPayload=} [properties] Properties to set
         */
        function NodeAddedPayload(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NodeAddedPayload graphOwnerNodeId.
         * @member {string} graphOwnerNodeId
         * @memberof events.NodeAddedPayload
         * @instance
         */
        NodeAddedPayload.prototype.graphOwnerNodeId = "";

        /**
         * NodeAddedPayload addedNodeId.
         * @member {string} addedNodeId
         * @memberof events.NodeAddedPayload
         * @instance
         */
        NodeAddedPayload.prototype.addedNodeId = "";

        /**
         * NodeAddedPayload addedNodeNid.
         * @member {string} addedNodeNid
         * @memberof events.NodeAddedPayload
         * @instance
         */
        NodeAddedPayload.prototype.addedNodeNid = "";

        /**
         * NodeAddedPayload step.
         * @member {number|null|undefined} step
         * @memberof events.NodeAddedPayload
         * @instance
         */
        NodeAddedPayload.prototype.step = null;

        /**
         * NodeAddedPayload taskType.
         * @member {string|null|undefined} taskType
         * @memberof events.NodeAddedPayload
         * @instance
         */
        NodeAddedPayload.prototype.taskType = null;

        /**
         * NodeAddedPayload taskGoal.
         * @member {string|null|undefined} taskGoal
         * @memberof events.NodeAddedPayload
         * @instance
         */
        NodeAddedPayload.prototype.taskGoal = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NodeAddedPayload.prototype, "_step", {
            get: $util.oneOfGetter($oneOfFields = ["step"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NodeAddedPayload.prototype, "_taskType", {
            get: $util.oneOfGetter($oneOfFields = ["taskType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NodeAddedPayload.prototype, "_taskGoal", {
            get: $util.oneOfGetter($oneOfFields = ["taskGoal"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new NodeAddedPayload instance using the specified properties.
         * @function create
         * @memberof events.NodeAddedPayload
         * @static
         * @param {events.INodeAddedPayload=} [properties] Properties to set
         * @returns {events.NodeAddedPayload} NodeAddedPayload instance
         */
        NodeAddedPayload.create = function create(properties) {
            return new NodeAddedPayload(properties);
        };

        /**
         * Encodes the specified NodeAddedPayload message. Does not implicitly {@link events.NodeAddedPayload.verify|verify} messages.
         * @function encode
         * @memberof events.NodeAddedPayload
         * @static
         * @param {events.INodeAddedPayload} message NodeAddedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeAddedPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.graphOwnerNodeId != null && Object.hasOwnProperty.call(message, "graphOwnerNodeId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.graphOwnerNodeId);
            if (message.addedNodeId != null && Object.hasOwnProperty.call(message, "addedNodeId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.addedNodeId);
            if (message.addedNodeNid != null && Object.hasOwnProperty.call(message, "addedNodeNid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.addedNodeNid);
            if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.step);
            if (message.taskType != null && Object.hasOwnProperty.call(message, "taskType"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.taskType);
            if (message.taskGoal != null && Object.hasOwnProperty.call(message, "taskGoal"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.taskGoal);
            return writer;
        };

        /**
         * Encodes the specified NodeAddedPayload message, length delimited. Does not implicitly {@link events.NodeAddedPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.NodeAddedPayload
         * @static
         * @param {events.INodeAddedPayload} message NodeAddedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeAddedPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NodeAddedPayload message from the specified reader or buffer.
         * @function decode
         * @memberof events.NodeAddedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.NodeAddedPayload} NodeAddedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeAddedPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.NodeAddedPayload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.graphOwnerNodeId = reader.string();
                        break;
                    }
                case 2: {
                        message.addedNodeId = reader.string();
                        break;
                    }
                case 3: {
                        message.addedNodeNid = reader.string();
                        break;
                    }
                case 4: {
                        message.step = reader.int32();
                        break;
                    }
                case 5: {
                        message.taskType = reader.string();
                        break;
                    }
                case 6: {
                        message.taskGoal = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NodeAddedPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.NodeAddedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.NodeAddedPayload} NodeAddedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeAddedPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NodeAddedPayload message.
         * @function verify
         * @memberof events.NodeAddedPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NodeAddedPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.graphOwnerNodeId != null && message.hasOwnProperty("graphOwnerNodeId"))
                if (!$util.isString(message.graphOwnerNodeId))
                    return "graphOwnerNodeId: string expected";
            if (message.addedNodeId != null && message.hasOwnProperty("addedNodeId"))
                if (!$util.isString(message.addedNodeId))
                    return "addedNodeId: string expected";
            if (message.addedNodeNid != null && message.hasOwnProperty("addedNodeNid"))
                if (!$util.isString(message.addedNodeNid))
                    return "addedNodeNid: string expected";
            if (message.step != null && message.hasOwnProperty("step")) {
                properties._step = 1;
                if (!$util.isInteger(message.step))
                    return "step: integer expected";
            }
            if (message.taskType != null && message.hasOwnProperty("taskType")) {
                properties._taskType = 1;
                if (!$util.isString(message.taskType))
                    return "taskType: string expected";
            }
            if (message.taskGoal != null && message.hasOwnProperty("taskGoal")) {
                properties._taskGoal = 1;
                if (!$util.isString(message.taskGoal))
                    return "taskGoal: string expected";
            }
            return null;
        };

        /**
         * Creates a NodeAddedPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.NodeAddedPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.NodeAddedPayload} NodeAddedPayload
         */
        NodeAddedPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.events.NodeAddedPayload)
                return object;
            let message = new $root.events.NodeAddedPayload();
            if (object.graphOwnerNodeId != null)
                message.graphOwnerNodeId = String(object.graphOwnerNodeId);
            if (object.addedNodeId != null)
                message.addedNodeId = String(object.addedNodeId);
            if (object.addedNodeNid != null)
                message.addedNodeNid = String(object.addedNodeNid);
            if (object.step != null)
                message.step = object.step | 0;
            if (object.taskType != null)
                message.taskType = String(object.taskType);
            if (object.taskGoal != null)
                message.taskGoal = String(object.taskGoal);
            return message;
        };

        /**
         * Creates a plain object from a NodeAddedPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.NodeAddedPayload
         * @static
         * @param {events.NodeAddedPayload} message NodeAddedPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NodeAddedPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.graphOwnerNodeId = "";
                object.addedNodeId = "";
                object.addedNodeNid = "";
            }
            if (message.graphOwnerNodeId != null && message.hasOwnProperty("graphOwnerNodeId"))
                object.graphOwnerNodeId = message.graphOwnerNodeId;
            if (message.addedNodeId != null && message.hasOwnProperty("addedNodeId"))
                object.addedNodeId = message.addedNodeId;
            if (message.addedNodeNid != null && message.hasOwnProperty("addedNodeNid"))
                object.addedNodeNid = message.addedNodeNid;
            if (message.step != null && message.hasOwnProperty("step")) {
                object.step = message.step;
                if (options.oneofs)
                    object._step = "step";
            }
            if (message.taskType != null && message.hasOwnProperty("taskType")) {
                object.taskType = message.taskType;
                if (options.oneofs)
                    object._taskType = "taskType";
            }
            if (message.taskGoal != null && message.hasOwnProperty("taskGoal")) {
                object.taskGoal = message.taskGoal;
                if (options.oneofs)
                    object._taskGoal = "taskGoal";
            }
            return object;
        };

        /**
         * Converts this NodeAddedPayload to JSON.
         * @function toJSON
         * @memberof events.NodeAddedPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NodeAddedPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NodeAddedPayload
         * @function getTypeUrl
         * @memberof events.NodeAddedPayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NodeAddedPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/events.NodeAddedPayload";
        };

        return NodeAddedPayload;
    })();

    events.EdgeAddedPayload = (function() {

        /**
         * Properties of an EdgeAddedPayload.
         * @memberof events
         * @interface IEdgeAddedPayload
         * @property {string|null} [graphOwnerNodeId] EdgeAddedPayload graphOwnerNodeId
         * @property {string|null} [parentNodeId] EdgeAddedPayload parentNodeId
         * @property {string|null} [childNodeId] EdgeAddedPayload childNodeId
         * @property {string|null} [parentNodeNid] EdgeAddedPayload parentNodeNid
         * @property {string|null} [childNodeNid] EdgeAddedPayload childNodeNid
         * @property {number|null} [step] EdgeAddedPayload step
         * @property {string|null} [taskType] EdgeAddedPayload taskType
         * @property {string|null} [taskGoal] EdgeAddedPayload taskGoal
         */

        /**
         * Constructs a new EdgeAddedPayload.
         * @memberof events
         * @classdesc Represents an EdgeAddedPayload.
         * @implements IEdgeAddedPayload
         * @constructor
         * @param {events.IEdgeAddedPayload=} [properties] Properties to set
         */
        function EdgeAddedPayload(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EdgeAddedPayload graphOwnerNodeId.
         * @member {string} graphOwnerNodeId
         * @memberof events.EdgeAddedPayload
         * @instance
         */
        EdgeAddedPayload.prototype.graphOwnerNodeId = "";

        /**
         * EdgeAddedPayload parentNodeId.
         * @member {string} parentNodeId
         * @memberof events.EdgeAddedPayload
         * @instance
         */
        EdgeAddedPayload.prototype.parentNodeId = "";

        /**
         * EdgeAddedPayload childNodeId.
         * @member {string} childNodeId
         * @memberof events.EdgeAddedPayload
         * @instance
         */
        EdgeAddedPayload.prototype.childNodeId = "";

        /**
         * EdgeAddedPayload parentNodeNid.
         * @member {string} parentNodeNid
         * @memberof events.EdgeAddedPayload
         * @instance
         */
        EdgeAddedPayload.prototype.parentNodeNid = "";

        /**
         * EdgeAddedPayload childNodeNid.
         * @member {string} childNodeNid
         * @memberof events.EdgeAddedPayload
         * @instance
         */
        EdgeAddedPayload.prototype.childNodeNid = "";

        /**
         * EdgeAddedPayload step.
         * @member {number|null|undefined} step
         * @memberof events.EdgeAddedPayload
         * @instance
         */
        EdgeAddedPayload.prototype.step = null;

        /**
         * EdgeAddedPayload taskType.
         * @member {string|null|undefined} taskType
         * @memberof events.EdgeAddedPayload
         * @instance
         */
        EdgeAddedPayload.prototype.taskType = null;

        /**
         * EdgeAddedPayload taskGoal.
         * @member {string|null|undefined} taskGoal
         * @memberof events.EdgeAddedPayload
         * @instance
         */
        EdgeAddedPayload.prototype.taskGoal = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(EdgeAddedPayload.prototype, "_step", {
            get: $util.oneOfGetter($oneOfFields = ["step"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(EdgeAddedPayload.prototype, "_taskType", {
            get: $util.oneOfGetter($oneOfFields = ["taskType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(EdgeAddedPayload.prototype, "_taskGoal", {
            get: $util.oneOfGetter($oneOfFields = ["taskGoal"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new EdgeAddedPayload instance using the specified properties.
         * @function create
         * @memberof events.EdgeAddedPayload
         * @static
         * @param {events.IEdgeAddedPayload=} [properties] Properties to set
         * @returns {events.EdgeAddedPayload} EdgeAddedPayload instance
         */
        EdgeAddedPayload.create = function create(properties) {
            return new EdgeAddedPayload(properties);
        };

        /**
         * Encodes the specified EdgeAddedPayload message. Does not implicitly {@link events.EdgeAddedPayload.verify|verify} messages.
         * @function encode
         * @memberof events.EdgeAddedPayload
         * @static
         * @param {events.IEdgeAddedPayload} message EdgeAddedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EdgeAddedPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.graphOwnerNodeId != null && Object.hasOwnProperty.call(message, "graphOwnerNodeId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.graphOwnerNodeId);
            if (message.parentNodeId != null && Object.hasOwnProperty.call(message, "parentNodeId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.parentNodeId);
            if (message.childNodeId != null && Object.hasOwnProperty.call(message, "childNodeId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.childNodeId);
            if (message.parentNodeNid != null && Object.hasOwnProperty.call(message, "parentNodeNid"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.parentNodeNid);
            if (message.childNodeNid != null && Object.hasOwnProperty.call(message, "childNodeNid"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.childNodeNid);
            if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.step);
            if (message.taskType != null && Object.hasOwnProperty.call(message, "taskType"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.taskType);
            if (message.taskGoal != null && Object.hasOwnProperty.call(message, "taskGoal"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.taskGoal);
            return writer;
        };

        /**
         * Encodes the specified EdgeAddedPayload message, length delimited. Does not implicitly {@link events.EdgeAddedPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.EdgeAddedPayload
         * @static
         * @param {events.IEdgeAddedPayload} message EdgeAddedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EdgeAddedPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EdgeAddedPayload message from the specified reader or buffer.
         * @function decode
         * @memberof events.EdgeAddedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.EdgeAddedPayload} EdgeAddedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EdgeAddedPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.EdgeAddedPayload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.graphOwnerNodeId = reader.string();
                        break;
                    }
                case 2: {
                        message.parentNodeId = reader.string();
                        break;
                    }
                case 3: {
                        message.childNodeId = reader.string();
                        break;
                    }
                case 4: {
                        message.parentNodeNid = reader.string();
                        break;
                    }
                case 5: {
                        message.childNodeNid = reader.string();
                        break;
                    }
                case 6: {
                        message.step = reader.int32();
                        break;
                    }
                case 7: {
                        message.taskType = reader.string();
                        break;
                    }
                case 8: {
                        message.taskGoal = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EdgeAddedPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.EdgeAddedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.EdgeAddedPayload} EdgeAddedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EdgeAddedPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EdgeAddedPayload message.
         * @function verify
         * @memberof events.EdgeAddedPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EdgeAddedPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.graphOwnerNodeId != null && message.hasOwnProperty("graphOwnerNodeId"))
                if (!$util.isString(message.graphOwnerNodeId))
                    return "graphOwnerNodeId: string expected";
            if (message.parentNodeId != null && message.hasOwnProperty("parentNodeId"))
                if (!$util.isString(message.parentNodeId))
                    return "parentNodeId: string expected";
            if (message.childNodeId != null && message.hasOwnProperty("childNodeId"))
                if (!$util.isString(message.childNodeId))
                    return "childNodeId: string expected";
            if (message.parentNodeNid != null && message.hasOwnProperty("parentNodeNid"))
                if (!$util.isString(message.parentNodeNid))
                    return "parentNodeNid: string expected";
            if (message.childNodeNid != null && message.hasOwnProperty("childNodeNid"))
                if (!$util.isString(message.childNodeNid))
                    return "childNodeNid: string expected";
            if (message.step != null && message.hasOwnProperty("step")) {
                properties._step = 1;
                if (!$util.isInteger(message.step))
                    return "step: integer expected";
            }
            if (message.taskType != null && message.hasOwnProperty("taskType")) {
                properties._taskType = 1;
                if (!$util.isString(message.taskType))
                    return "taskType: string expected";
            }
            if (message.taskGoal != null && message.hasOwnProperty("taskGoal")) {
                properties._taskGoal = 1;
                if (!$util.isString(message.taskGoal))
                    return "taskGoal: string expected";
            }
            return null;
        };

        /**
         * Creates an EdgeAddedPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.EdgeAddedPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.EdgeAddedPayload} EdgeAddedPayload
         */
        EdgeAddedPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.events.EdgeAddedPayload)
                return object;
            let message = new $root.events.EdgeAddedPayload();
            if (object.graphOwnerNodeId != null)
                message.graphOwnerNodeId = String(object.graphOwnerNodeId);
            if (object.parentNodeId != null)
                message.parentNodeId = String(object.parentNodeId);
            if (object.childNodeId != null)
                message.childNodeId = String(object.childNodeId);
            if (object.parentNodeNid != null)
                message.parentNodeNid = String(object.parentNodeNid);
            if (object.childNodeNid != null)
                message.childNodeNid = String(object.childNodeNid);
            if (object.step != null)
                message.step = object.step | 0;
            if (object.taskType != null)
                message.taskType = String(object.taskType);
            if (object.taskGoal != null)
                message.taskGoal = String(object.taskGoal);
            return message;
        };

        /**
         * Creates a plain object from an EdgeAddedPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.EdgeAddedPayload
         * @static
         * @param {events.EdgeAddedPayload} message EdgeAddedPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EdgeAddedPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.graphOwnerNodeId = "";
                object.parentNodeId = "";
                object.childNodeId = "";
                object.parentNodeNid = "";
                object.childNodeNid = "";
            }
            if (message.graphOwnerNodeId != null && message.hasOwnProperty("graphOwnerNodeId"))
                object.graphOwnerNodeId = message.graphOwnerNodeId;
            if (message.parentNodeId != null && message.hasOwnProperty("parentNodeId"))
                object.parentNodeId = message.parentNodeId;
            if (message.childNodeId != null && message.hasOwnProperty("childNodeId"))
                object.childNodeId = message.childNodeId;
            if (message.parentNodeNid != null && message.hasOwnProperty("parentNodeNid"))
                object.parentNodeNid = message.parentNodeNid;
            if (message.childNodeNid != null && message.hasOwnProperty("childNodeNid"))
                object.childNodeNid = message.childNodeNid;
            if (message.step != null && message.hasOwnProperty("step")) {
                object.step = message.step;
                if (options.oneofs)
                    object._step = "step";
            }
            if (message.taskType != null && message.hasOwnProperty("taskType")) {
                object.taskType = message.taskType;
                if (options.oneofs)
                    object._taskType = "taskType";
            }
            if (message.taskGoal != null && message.hasOwnProperty("taskGoal")) {
                object.taskGoal = message.taskGoal;
                if (options.oneofs)
                    object._taskGoal = "taskGoal";
            }
            return object;
        };

        /**
         * Converts this EdgeAddedPayload to JSON.
         * @function toJSON
         * @memberof events.EdgeAddedPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EdgeAddedPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EdgeAddedPayload
         * @function getTypeUrl
         * @memberof events.EdgeAddedPayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EdgeAddedPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/events.EdgeAddedPayload";
        };

        return EdgeAddedPayload;
    })();

    events.InnerGraphBuiltPayload = (function() {

        /**
         * Properties of an InnerGraphBuiltPayload.
         * @memberof events
         * @interface IInnerGraphBuiltPayload
         * @property {string|null} [nodeId] InnerGraphBuiltPayload nodeId
         * @property {number|null} [nodeCount] InnerGraphBuiltPayload nodeCount
         * @property {number|null} [edgeCount] InnerGraphBuiltPayload edgeCount
         * @property {Array.<string>|null} [nodeIds] InnerGraphBuiltPayload nodeIds
         * @property {number|null} [step] InnerGraphBuiltPayload step
         * @property {string|null} [taskType] InnerGraphBuiltPayload taskType
         * @property {string|null} [taskGoal] InnerGraphBuiltPayload taskGoal
         */

        /**
         * Constructs a new InnerGraphBuiltPayload.
         * @memberof events
         * @classdesc Represents an InnerGraphBuiltPayload.
         * @implements IInnerGraphBuiltPayload
         * @constructor
         * @param {events.IInnerGraphBuiltPayload=} [properties] Properties to set
         */
        function InnerGraphBuiltPayload(properties) {
            this.nodeIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InnerGraphBuiltPayload nodeId.
         * @member {string} nodeId
         * @memberof events.InnerGraphBuiltPayload
         * @instance
         */
        InnerGraphBuiltPayload.prototype.nodeId = "";

        /**
         * InnerGraphBuiltPayload nodeCount.
         * @member {number} nodeCount
         * @memberof events.InnerGraphBuiltPayload
         * @instance
         */
        InnerGraphBuiltPayload.prototype.nodeCount = 0;

        /**
         * InnerGraphBuiltPayload edgeCount.
         * @member {number} edgeCount
         * @memberof events.InnerGraphBuiltPayload
         * @instance
         */
        InnerGraphBuiltPayload.prototype.edgeCount = 0;

        /**
         * InnerGraphBuiltPayload nodeIds.
         * @member {Array.<string>} nodeIds
         * @memberof events.InnerGraphBuiltPayload
         * @instance
         */
        InnerGraphBuiltPayload.prototype.nodeIds = $util.emptyArray;

        /**
         * InnerGraphBuiltPayload step.
         * @member {number|null|undefined} step
         * @memberof events.InnerGraphBuiltPayload
         * @instance
         */
        InnerGraphBuiltPayload.prototype.step = null;

        /**
         * InnerGraphBuiltPayload taskType.
         * @member {string|null|undefined} taskType
         * @memberof events.InnerGraphBuiltPayload
         * @instance
         */
        InnerGraphBuiltPayload.prototype.taskType = null;

        /**
         * InnerGraphBuiltPayload taskGoal.
         * @member {string|null|undefined} taskGoal
         * @memberof events.InnerGraphBuiltPayload
         * @instance
         */
        InnerGraphBuiltPayload.prototype.taskGoal = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InnerGraphBuiltPayload.prototype, "_step", {
            get: $util.oneOfGetter($oneOfFields = ["step"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InnerGraphBuiltPayload.prototype, "_taskType", {
            get: $util.oneOfGetter($oneOfFields = ["taskType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InnerGraphBuiltPayload.prototype, "_taskGoal", {
            get: $util.oneOfGetter($oneOfFields = ["taskGoal"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new InnerGraphBuiltPayload instance using the specified properties.
         * @function create
         * @memberof events.InnerGraphBuiltPayload
         * @static
         * @param {events.IInnerGraphBuiltPayload=} [properties] Properties to set
         * @returns {events.InnerGraphBuiltPayload} InnerGraphBuiltPayload instance
         */
        InnerGraphBuiltPayload.create = function create(properties) {
            return new InnerGraphBuiltPayload(properties);
        };

        /**
         * Encodes the specified InnerGraphBuiltPayload message. Does not implicitly {@link events.InnerGraphBuiltPayload.verify|verify} messages.
         * @function encode
         * @memberof events.InnerGraphBuiltPayload
         * @static
         * @param {events.IInnerGraphBuiltPayload} message InnerGraphBuiltPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InnerGraphBuiltPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nodeId != null && Object.hasOwnProperty.call(message, "nodeId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nodeId);
            if (message.nodeCount != null && Object.hasOwnProperty.call(message, "nodeCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nodeCount);
            if (message.edgeCount != null && Object.hasOwnProperty.call(message, "edgeCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.edgeCount);
            if (message.nodeIds != null && message.nodeIds.length)
                for (let i = 0; i < message.nodeIds.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.nodeIds[i]);
            if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.step);
            if (message.taskType != null && Object.hasOwnProperty.call(message, "taskType"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.taskType);
            if (message.taskGoal != null && Object.hasOwnProperty.call(message, "taskGoal"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.taskGoal);
            return writer;
        };

        /**
         * Encodes the specified InnerGraphBuiltPayload message, length delimited. Does not implicitly {@link events.InnerGraphBuiltPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.InnerGraphBuiltPayload
         * @static
         * @param {events.IInnerGraphBuiltPayload} message InnerGraphBuiltPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InnerGraphBuiltPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InnerGraphBuiltPayload message from the specified reader or buffer.
         * @function decode
         * @memberof events.InnerGraphBuiltPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.InnerGraphBuiltPayload} InnerGraphBuiltPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InnerGraphBuiltPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.InnerGraphBuiltPayload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.nodeId = reader.string();
                        break;
                    }
                case 2: {
                        message.nodeCount = reader.int32();
                        break;
                    }
                case 3: {
                        message.edgeCount = reader.int32();
                        break;
                    }
                case 4: {
                        if (!(message.nodeIds && message.nodeIds.length))
                            message.nodeIds = [];
                        message.nodeIds.push(reader.string());
                        break;
                    }
                case 5: {
                        message.step = reader.int32();
                        break;
                    }
                case 6: {
                        message.taskType = reader.string();
                        break;
                    }
                case 7: {
                        message.taskGoal = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InnerGraphBuiltPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.InnerGraphBuiltPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.InnerGraphBuiltPayload} InnerGraphBuiltPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InnerGraphBuiltPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InnerGraphBuiltPayload message.
         * @function verify
         * @memberof events.InnerGraphBuiltPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InnerGraphBuiltPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                if (!$util.isString(message.nodeId))
                    return "nodeId: string expected";
            if (message.nodeCount != null && message.hasOwnProperty("nodeCount"))
                if (!$util.isInteger(message.nodeCount))
                    return "nodeCount: integer expected";
            if (message.edgeCount != null && message.hasOwnProperty("edgeCount"))
                if (!$util.isInteger(message.edgeCount))
                    return "edgeCount: integer expected";
            if (message.nodeIds != null && message.hasOwnProperty("nodeIds")) {
                if (!Array.isArray(message.nodeIds))
                    return "nodeIds: array expected";
                for (let i = 0; i < message.nodeIds.length; ++i)
                    if (!$util.isString(message.nodeIds[i]))
                        return "nodeIds: string[] expected";
            }
            if (message.step != null && message.hasOwnProperty("step")) {
                properties._step = 1;
                if (!$util.isInteger(message.step))
                    return "step: integer expected";
            }
            if (message.taskType != null && message.hasOwnProperty("taskType")) {
                properties._taskType = 1;
                if (!$util.isString(message.taskType))
                    return "taskType: string expected";
            }
            if (message.taskGoal != null && message.hasOwnProperty("taskGoal")) {
                properties._taskGoal = 1;
                if (!$util.isString(message.taskGoal))
                    return "taskGoal: string expected";
            }
            return null;
        };

        /**
         * Creates an InnerGraphBuiltPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.InnerGraphBuiltPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.InnerGraphBuiltPayload} InnerGraphBuiltPayload
         */
        InnerGraphBuiltPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.events.InnerGraphBuiltPayload)
                return object;
            let message = new $root.events.InnerGraphBuiltPayload();
            if (object.nodeId != null)
                message.nodeId = String(object.nodeId);
            if (object.nodeCount != null)
                message.nodeCount = object.nodeCount | 0;
            if (object.edgeCount != null)
                message.edgeCount = object.edgeCount | 0;
            if (object.nodeIds) {
                if (!Array.isArray(object.nodeIds))
                    throw TypeError(".events.InnerGraphBuiltPayload.nodeIds: array expected");
                message.nodeIds = [];
                for (let i = 0; i < object.nodeIds.length; ++i)
                    message.nodeIds[i] = String(object.nodeIds[i]);
            }
            if (object.step != null)
                message.step = object.step | 0;
            if (object.taskType != null)
                message.taskType = String(object.taskType);
            if (object.taskGoal != null)
                message.taskGoal = String(object.taskGoal);
            return message;
        };

        /**
         * Creates a plain object from an InnerGraphBuiltPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.InnerGraphBuiltPayload
         * @static
         * @param {events.InnerGraphBuiltPayload} message InnerGraphBuiltPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InnerGraphBuiltPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.nodeIds = [];
            if (options.defaults) {
                object.nodeId = "";
                object.nodeCount = 0;
                object.edgeCount = 0;
            }
            if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                object.nodeId = message.nodeId;
            if (message.nodeCount != null && message.hasOwnProperty("nodeCount"))
                object.nodeCount = message.nodeCount;
            if (message.edgeCount != null && message.hasOwnProperty("edgeCount"))
                object.edgeCount = message.edgeCount;
            if (message.nodeIds && message.nodeIds.length) {
                object.nodeIds = [];
                for (let j = 0; j < message.nodeIds.length; ++j)
                    object.nodeIds[j] = message.nodeIds[j];
            }
            if (message.step != null && message.hasOwnProperty("step")) {
                object.step = message.step;
                if (options.oneofs)
                    object._step = "step";
            }
            if (message.taskType != null && message.hasOwnProperty("taskType")) {
                object.taskType = message.taskType;
                if (options.oneofs)
                    object._taskType = "taskType";
            }
            if (message.taskGoal != null && message.hasOwnProperty("taskGoal")) {
                object.taskGoal = message.taskGoal;
                if (options.oneofs)
                    object._taskGoal = "taskGoal";
            }
            return object;
        };

        /**
         * Converts this InnerGraphBuiltPayload to JSON.
         * @function toJSON
         * @memberof events.InnerGraphBuiltPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InnerGraphBuiltPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for InnerGraphBuiltPayload
         * @function getTypeUrl
         * @memberof events.InnerGraphBuiltPayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InnerGraphBuiltPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/events.InnerGraphBuiltPayload";
        };

        return InnerGraphBuiltPayload;
    })();

    events.NodeResultAvailablePayload = (function() {

        /**
         * Properties of a NodeResultAvailablePayload.
         * @memberof events
         * @interface INodeResultAvailablePayload
         * @property {string|null} [nodeId] NodeResultAvailablePayload nodeId
         * @property {string|null} [actionName] NodeResultAvailablePayload actionName
         * @property {string|null} [resultSummary] NodeResultAvailablePayload resultSummary
         * @property {number|null} [step] NodeResultAvailablePayload step
         * @property {string|null} [taskType] NodeResultAvailablePayload taskType
         * @property {string|null} [taskGoal] NodeResultAvailablePayload taskGoal
         */

        /**
         * Constructs a new NodeResultAvailablePayload.
         * @memberof events
         * @classdesc Represents a NodeResultAvailablePayload.
         * @implements INodeResultAvailablePayload
         * @constructor
         * @param {events.INodeResultAvailablePayload=} [properties] Properties to set
         */
        function NodeResultAvailablePayload(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NodeResultAvailablePayload nodeId.
         * @member {string} nodeId
         * @memberof events.NodeResultAvailablePayload
         * @instance
         */
        NodeResultAvailablePayload.prototype.nodeId = "";

        /**
         * NodeResultAvailablePayload actionName.
         * @member {string} actionName
         * @memberof events.NodeResultAvailablePayload
         * @instance
         */
        NodeResultAvailablePayload.prototype.actionName = "";

        /**
         * NodeResultAvailablePayload resultSummary.
         * @member {string} resultSummary
         * @memberof events.NodeResultAvailablePayload
         * @instance
         */
        NodeResultAvailablePayload.prototype.resultSummary = "";

        /**
         * NodeResultAvailablePayload step.
         * @member {number|null|undefined} step
         * @memberof events.NodeResultAvailablePayload
         * @instance
         */
        NodeResultAvailablePayload.prototype.step = null;

        /**
         * NodeResultAvailablePayload taskType.
         * @member {string|null|undefined} taskType
         * @memberof events.NodeResultAvailablePayload
         * @instance
         */
        NodeResultAvailablePayload.prototype.taskType = null;

        /**
         * NodeResultAvailablePayload taskGoal.
         * @member {string|null|undefined} taskGoal
         * @memberof events.NodeResultAvailablePayload
         * @instance
         */
        NodeResultAvailablePayload.prototype.taskGoal = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NodeResultAvailablePayload.prototype, "_step", {
            get: $util.oneOfGetter($oneOfFields = ["step"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NodeResultAvailablePayload.prototype, "_taskType", {
            get: $util.oneOfGetter($oneOfFields = ["taskType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NodeResultAvailablePayload.prototype, "_taskGoal", {
            get: $util.oneOfGetter($oneOfFields = ["taskGoal"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new NodeResultAvailablePayload instance using the specified properties.
         * @function create
         * @memberof events.NodeResultAvailablePayload
         * @static
         * @param {events.INodeResultAvailablePayload=} [properties] Properties to set
         * @returns {events.NodeResultAvailablePayload} NodeResultAvailablePayload instance
         */
        NodeResultAvailablePayload.create = function create(properties) {
            return new NodeResultAvailablePayload(properties);
        };

        /**
         * Encodes the specified NodeResultAvailablePayload message. Does not implicitly {@link events.NodeResultAvailablePayload.verify|verify} messages.
         * @function encode
         * @memberof events.NodeResultAvailablePayload
         * @static
         * @param {events.INodeResultAvailablePayload} message NodeResultAvailablePayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeResultAvailablePayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nodeId != null && Object.hasOwnProperty.call(message, "nodeId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nodeId);
            if (message.actionName != null && Object.hasOwnProperty.call(message, "actionName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.actionName);
            if (message.resultSummary != null && Object.hasOwnProperty.call(message, "resultSummary"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.resultSummary);
            if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.step);
            if (message.taskType != null && Object.hasOwnProperty.call(message, "taskType"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.taskType);
            if (message.taskGoal != null && Object.hasOwnProperty.call(message, "taskGoal"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.taskGoal);
            return writer;
        };

        /**
         * Encodes the specified NodeResultAvailablePayload message, length delimited. Does not implicitly {@link events.NodeResultAvailablePayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.NodeResultAvailablePayload
         * @static
         * @param {events.INodeResultAvailablePayload} message NodeResultAvailablePayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeResultAvailablePayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NodeResultAvailablePayload message from the specified reader or buffer.
         * @function decode
         * @memberof events.NodeResultAvailablePayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.NodeResultAvailablePayload} NodeResultAvailablePayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeResultAvailablePayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.NodeResultAvailablePayload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.nodeId = reader.string();
                        break;
                    }
                case 2: {
                        message.actionName = reader.string();
                        break;
                    }
                case 3: {
                        message.resultSummary = reader.string();
                        break;
                    }
                case 4: {
                        message.step = reader.int32();
                        break;
                    }
                case 5: {
                        message.taskType = reader.string();
                        break;
                    }
                case 6: {
                        message.taskGoal = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NodeResultAvailablePayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.NodeResultAvailablePayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.NodeResultAvailablePayload} NodeResultAvailablePayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeResultAvailablePayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NodeResultAvailablePayload message.
         * @function verify
         * @memberof events.NodeResultAvailablePayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NodeResultAvailablePayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                if (!$util.isString(message.nodeId))
                    return "nodeId: string expected";
            if (message.actionName != null && message.hasOwnProperty("actionName"))
                if (!$util.isString(message.actionName))
                    return "actionName: string expected";
            if (message.resultSummary != null && message.hasOwnProperty("resultSummary"))
                if (!$util.isString(message.resultSummary))
                    return "resultSummary: string expected";
            if (message.step != null && message.hasOwnProperty("step")) {
                properties._step = 1;
                if (!$util.isInteger(message.step))
                    return "step: integer expected";
            }
            if (message.taskType != null && message.hasOwnProperty("taskType")) {
                properties._taskType = 1;
                if (!$util.isString(message.taskType))
                    return "taskType: string expected";
            }
            if (message.taskGoal != null && message.hasOwnProperty("taskGoal")) {
                properties._taskGoal = 1;
                if (!$util.isString(message.taskGoal))
                    return "taskGoal: string expected";
            }
            return null;
        };

        /**
         * Creates a NodeResultAvailablePayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.NodeResultAvailablePayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.NodeResultAvailablePayload} NodeResultAvailablePayload
         */
        NodeResultAvailablePayload.fromObject = function fromObject(object) {
            if (object instanceof $root.events.NodeResultAvailablePayload)
                return object;
            let message = new $root.events.NodeResultAvailablePayload();
            if (object.nodeId != null)
                message.nodeId = String(object.nodeId);
            if (object.actionName != null)
                message.actionName = String(object.actionName);
            if (object.resultSummary != null)
                message.resultSummary = String(object.resultSummary);
            if (object.step != null)
                message.step = object.step | 0;
            if (object.taskType != null)
                message.taskType = String(object.taskType);
            if (object.taskGoal != null)
                message.taskGoal = String(object.taskGoal);
            return message;
        };

        /**
         * Creates a plain object from a NodeResultAvailablePayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.NodeResultAvailablePayload
         * @static
         * @param {events.NodeResultAvailablePayload} message NodeResultAvailablePayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NodeResultAvailablePayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.nodeId = "";
                object.actionName = "";
                object.resultSummary = "";
            }
            if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                object.nodeId = message.nodeId;
            if (message.actionName != null && message.hasOwnProperty("actionName"))
                object.actionName = message.actionName;
            if (message.resultSummary != null && message.hasOwnProperty("resultSummary"))
                object.resultSummary = message.resultSummary;
            if (message.step != null && message.hasOwnProperty("step")) {
                object.step = message.step;
                if (options.oneofs)
                    object._step = "step";
            }
            if (message.taskType != null && message.hasOwnProperty("taskType")) {
                object.taskType = message.taskType;
                if (options.oneofs)
                    object._taskType = "taskType";
            }
            if (message.taskGoal != null && message.hasOwnProperty("taskGoal")) {
                object.taskGoal = message.taskGoal;
                if (options.oneofs)
                    object._taskGoal = "taskGoal";
            }
            return object;
        };

        /**
         * Converts this NodeResultAvailablePayload to JSON.
         * @function toJSON
         * @memberof events.NodeResultAvailablePayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NodeResultAvailablePayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NodeResultAvailablePayload
         * @function getTypeUrl
         * @memberof events.NodeResultAvailablePayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NodeResultAvailablePayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/events.NodeResultAvailablePayload";
        };

        return NodeResultAvailablePayload;
    })();

    events.RunStartedPayload = (function() {

        /**
         * Properties of a RunStartedPayload.
         * @memberof events
         * @interface IRunStartedPayload
         * @property {google.protobuf.IStruct|null} [inputData] RunStartedPayload inputData
         * @property {google.protobuf.IStruct|null} [config] RunStartedPayload config
         * @property {string|null} [runMode] RunStartedPayload runMode
         * @property {google.protobuf.ITimestamp|null} [timestampUtc] RunStartedPayload timestampUtc
         */

        /**
         * Constructs a new RunStartedPayload.
         * @memberof events
         * @classdesc Represents a RunStartedPayload.
         * @implements IRunStartedPayload
         * @constructor
         * @param {events.IRunStartedPayload=} [properties] Properties to set
         */
        function RunStartedPayload(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RunStartedPayload inputData.
         * @member {google.protobuf.IStruct|null|undefined} inputData
         * @memberof events.RunStartedPayload
         * @instance
         */
        RunStartedPayload.prototype.inputData = null;

        /**
         * RunStartedPayload config.
         * @member {google.protobuf.IStruct|null|undefined} config
         * @memberof events.RunStartedPayload
         * @instance
         */
        RunStartedPayload.prototype.config = null;

        /**
         * RunStartedPayload runMode.
         * @member {string} runMode
         * @memberof events.RunStartedPayload
         * @instance
         */
        RunStartedPayload.prototype.runMode = "";

        /**
         * RunStartedPayload timestampUtc.
         * @member {google.protobuf.ITimestamp|null|undefined} timestampUtc
         * @memberof events.RunStartedPayload
         * @instance
         */
        RunStartedPayload.prototype.timestampUtc = null;

        /**
         * Creates a new RunStartedPayload instance using the specified properties.
         * @function create
         * @memberof events.RunStartedPayload
         * @static
         * @param {events.IRunStartedPayload=} [properties] Properties to set
         * @returns {events.RunStartedPayload} RunStartedPayload instance
         */
        RunStartedPayload.create = function create(properties) {
            return new RunStartedPayload(properties);
        };

        /**
         * Encodes the specified RunStartedPayload message. Does not implicitly {@link events.RunStartedPayload.verify|verify} messages.
         * @function encode
         * @memberof events.RunStartedPayload
         * @static
         * @param {events.IRunStartedPayload} message RunStartedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RunStartedPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.inputData != null && Object.hasOwnProperty.call(message, "inputData"))
                $root.google.protobuf.Struct.encode(message.inputData, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                $root.google.protobuf.Struct.encode(message.config, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.runMode != null && Object.hasOwnProperty.call(message, "runMode"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.runMode);
            if (message.timestampUtc != null && Object.hasOwnProperty.call(message, "timestampUtc"))
                $root.google.protobuf.Timestamp.encode(message.timestampUtc, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RunStartedPayload message, length delimited. Does not implicitly {@link events.RunStartedPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.RunStartedPayload
         * @static
         * @param {events.IRunStartedPayload} message RunStartedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RunStartedPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RunStartedPayload message from the specified reader or buffer.
         * @function decode
         * @memberof events.RunStartedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.RunStartedPayload} RunStartedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RunStartedPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.RunStartedPayload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.inputData = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.config = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.runMode = reader.string();
                        break;
                    }
                case 4: {
                        message.timestampUtc = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RunStartedPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.RunStartedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.RunStartedPayload} RunStartedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RunStartedPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RunStartedPayload message.
         * @function verify
         * @memberof events.RunStartedPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RunStartedPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.inputData != null && message.hasOwnProperty("inputData")) {
                let error = $root.google.protobuf.Struct.verify(message.inputData);
                if (error)
                    return "inputData." + error;
            }
            if (message.config != null && message.hasOwnProperty("config")) {
                let error = $root.google.protobuf.Struct.verify(message.config);
                if (error)
                    return "config." + error;
            }
            if (message.runMode != null && message.hasOwnProperty("runMode"))
                if (!$util.isString(message.runMode))
                    return "runMode: string expected";
            if (message.timestampUtc != null && message.hasOwnProperty("timestampUtc")) {
                let error = $root.google.protobuf.Timestamp.verify(message.timestampUtc);
                if (error)
                    return "timestampUtc." + error;
            }
            return null;
        };

        /**
         * Creates a RunStartedPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.RunStartedPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.RunStartedPayload} RunStartedPayload
         */
        RunStartedPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.events.RunStartedPayload)
                return object;
            let message = new $root.events.RunStartedPayload();
            if (object.inputData != null) {
                if (typeof object.inputData !== "object")
                    throw TypeError(".events.RunStartedPayload.inputData: object expected");
                message.inputData = $root.google.protobuf.Struct.fromObject(object.inputData);
            }
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".events.RunStartedPayload.config: object expected");
                message.config = $root.google.protobuf.Struct.fromObject(object.config);
            }
            if (object.runMode != null)
                message.runMode = String(object.runMode);
            if (object.timestampUtc != null) {
                if (typeof object.timestampUtc !== "object")
                    throw TypeError(".events.RunStartedPayload.timestampUtc: object expected");
                message.timestampUtc = $root.google.protobuf.Timestamp.fromObject(object.timestampUtc);
            }
            return message;
        };

        /**
         * Creates a plain object from a RunStartedPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.RunStartedPayload
         * @static
         * @param {events.RunStartedPayload} message RunStartedPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RunStartedPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.inputData = null;
                object.config = null;
                object.runMode = "";
                object.timestampUtc = null;
            }
            if (message.inputData != null && message.hasOwnProperty("inputData"))
                object.inputData = $root.google.protobuf.Struct.toObject(message.inputData, options);
            if (message.config != null && message.hasOwnProperty("config"))
                object.config = $root.google.protobuf.Struct.toObject(message.config, options);
            if (message.runMode != null && message.hasOwnProperty("runMode"))
                object.runMode = message.runMode;
            if (message.timestampUtc != null && message.hasOwnProperty("timestampUtc"))
                object.timestampUtc = $root.google.protobuf.Timestamp.toObject(message.timestampUtc, options);
            return object;
        };

        /**
         * Converts this RunStartedPayload to JSON.
         * @function toJSON
         * @memberof events.RunStartedPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RunStartedPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RunStartedPayload
         * @function getTypeUrl
         * @memberof events.RunStartedPayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RunStartedPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/events.RunStartedPayload";
        };

        return RunStartedPayload;
    })();

    events.RunFinishedPayload = (function() {

        /**
         * Properties of a RunFinishedPayload.
         * @memberof events
         * @interface IRunFinishedPayload
         * @property {number|null} [totalSteps] RunFinishedPayload totalSteps
         * @property {number|null} [durationSeconds] RunFinishedPayload durationSeconds
         * @property {number|null} [totalNodes] RunFinishedPayload totalNodes
         * @property {number|null} [totalLlmCalls] RunFinishedPayload totalLlmCalls
         * @property {number|null} [totalToolCalls] RunFinishedPayload totalToolCalls
         * @property {events.RunFinishedPayload.ITokenUsageSummary|null} [tokenUsageSummary] RunFinishedPayload tokenUsageSummary
         * @property {events.RunFinishedPayload.INodeStatistics|null} [nodeStatistics] RunFinishedPayload nodeStatistics
         * @property {events.RunFinishedPayload.ISearchStatistics|null} [searchStatistics] RunFinishedPayload searchStatistics
         */

        /**
         * Constructs a new RunFinishedPayload.
         * @memberof events
         * @classdesc Represents a RunFinishedPayload.
         * @implements IRunFinishedPayload
         * @constructor
         * @param {events.IRunFinishedPayload=} [properties] Properties to set
         */
        function RunFinishedPayload(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RunFinishedPayload totalSteps.
         * @member {number} totalSteps
         * @memberof events.RunFinishedPayload
         * @instance
         */
        RunFinishedPayload.prototype.totalSteps = 0;

        /**
         * RunFinishedPayload durationSeconds.
         * @member {number} durationSeconds
         * @memberof events.RunFinishedPayload
         * @instance
         */
        RunFinishedPayload.prototype.durationSeconds = 0;

        /**
         * RunFinishedPayload totalNodes.
         * @member {number} totalNodes
         * @memberof events.RunFinishedPayload
         * @instance
         */
        RunFinishedPayload.prototype.totalNodes = 0;

        /**
         * RunFinishedPayload totalLlmCalls.
         * @member {number} totalLlmCalls
         * @memberof events.RunFinishedPayload
         * @instance
         */
        RunFinishedPayload.prototype.totalLlmCalls = 0;

        /**
         * RunFinishedPayload totalToolCalls.
         * @member {number} totalToolCalls
         * @memberof events.RunFinishedPayload
         * @instance
         */
        RunFinishedPayload.prototype.totalToolCalls = 0;

        /**
         * RunFinishedPayload tokenUsageSummary.
         * @member {events.RunFinishedPayload.ITokenUsageSummary|null|undefined} tokenUsageSummary
         * @memberof events.RunFinishedPayload
         * @instance
         */
        RunFinishedPayload.prototype.tokenUsageSummary = null;

        /**
         * RunFinishedPayload nodeStatistics.
         * @member {events.RunFinishedPayload.INodeStatistics|null|undefined} nodeStatistics
         * @memberof events.RunFinishedPayload
         * @instance
         */
        RunFinishedPayload.prototype.nodeStatistics = null;

        /**
         * RunFinishedPayload searchStatistics.
         * @member {events.RunFinishedPayload.ISearchStatistics|null|undefined} searchStatistics
         * @memberof events.RunFinishedPayload
         * @instance
         */
        RunFinishedPayload.prototype.searchStatistics = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(RunFinishedPayload.prototype, "_searchStatistics", {
            get: $util.oneOfGetter($oneOfFields = ["searchStatistics"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RunFinishedPayload instance using the specified properties.
         * @function create
         * @memberof events.RunFinishedPayload
         * @static
         * @param {events.IRunFinishedPayload=} [properties] Properties to set
         * @returns {events.RunFinishedPayload} RunFinishedPayload instance
         */
        RunFinishedPayload.create = function create(properties) {
            return new RunFinishedPayload(properties);
        };

        /**
         * Encodes the specified RunFinishedPayload message. Does not implicitly {@link events.RunFinishedPayload.verify|verify} messages.
         * @function encode
         * @memberof events.RunFinishedPayload
         * @static
         * @param {events.IRunFinishedPayload} message RunFinishedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RunFinishedPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.totalSteps != null && Object.hasOwnProperty.call(message, "totalSteps"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.totalSteps);
            if (message.durationSeconds != null && Object.hasOwnProperty.call(message, "durationSeconds"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.durationSeconds);
            if (message.totalNodes != null && Object.hasOwnProperty.call(message, "totalNodes"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.totalNodes);
            if (message.totalLlmCalls != null && Object.hasOwnProperty.call(message, "totalLlmCalls"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.totalLlmCalls);
            if (message.totalToolCalls != null && Object.hasOwnProperty.call(message, "totalToolCalls"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.totalToolCalls);
            if (message.tokenUsageSummary != null && Object.hasOwnProperty.call(message, "tokenUsageSummary"))
                $root.events.RunFinishedPayload.TokenUsageSummary.encode(message.tokenUsageSummary, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.nodeStatistics != null && Object.hasOwnProperty.call(message, "nodeStatistics"))
                $root.events.RunFinishedPayload.NodeStatistics.encode(message.nodeStatistics, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.searchStatistics != null && Object.hasOwnProperty.call(message, "searchStatistics"))
                $root.events.RunFinishedPayload.SearchStatistics.encode(message.searchStatistics, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RunFinishedPayload message, length delimited. Does not implicitly {@link events.RunFinishedPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.RunFinishedPayload
         * @static
         * @param {events.IRunFinishedPayload} message RunFinishedPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RunFinishedPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RunFinishedPayload message from the specified reader or buffer.
         * @function decode
         * @memberof events.RunFinishedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.RunFinishedPayload} RunFinishedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RunFinishedPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.RunFinishedPayload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.totalSteps = reader.int32();
                        break;
                    }
                case 2: {
                        message.durationSeconds = reader.double();
                        break;
                    }
                case 3: {
                        message.totalNodes = reader.int32();
                        break;
                    }
                case 4: {
                        message.totalLlmCalls = reader.int32();
                        break;
                    }
                case 5: {
                        message.totalToolCalls = reader.int32();
                        break;
                    }
                case 6: {
                        message.tokenUsageSummary = $root.events.RunFinishedPayload.TokenUsageSummary.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.nodeStatistics = $root.events.RunFinishedPayload.NodeStatistics.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.searchStatistics = $root.events.RunFinishedPayload.SearchStatistics.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RunFinishedPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.RunFinishedPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.RunFinishedPayload} RunFinishedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RunFinishedPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RunFinishedPayload message.
         * @function verify
         * @memberof events.RunFinishedPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RunFinishedPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.totalSteps != null && message.hasOwnProperty("totalSteps"))
                if (!$util.isInteger(message.totalSteps))
                    return "totalSteps: integer expected";
            if (message.durationSeconds != null && message.hasOwnProperty("durationSeconds"))
                if (typeof message.durationSeconds !== "number")
                    return "durationSeconds: number expected";
            if (message.totalNodes != null && message.hasOwnProperty("totalNodes"))
                if (!$util.isInteger(message.totalNodes))
                    return "totalNodes: integer expected";
            if (message.totalLlmCalls != null && message.hasOwnProperty("totalLlmCalls"))
                if (!$util.isInteger(message.totalLlmCalls))
                    return "totalLlmCalls: integer expected";
            if (message.totalToolCalls != null && message.hasOwnProperty("totalToolCalls"))
                if (!$util.isInteger(message.totalToolCalls))
                    return "totalToolCalls: integer expected";
            if (message.tokenUsageSummary != null && message.hasOwnProperty("tokenUsageSummary")) {
                let error = $root.events.RunFinishedPayload.TokenUsageSummary.verify(message.tokenUsageSummary);
                if (error)
                    return "tokenUsageSummary." + error;
            }
            if (message.nodeStatistics != null && message.hasOwnProperty("nodeStatistics")) {
                let error = $root.events.RunFinishedPayload.NodeStatistics.verify(message.nodeStatistics);
                if (error)
                    return "nodeStatistics." + error;
            }
            if (message.searchStatistics != null && message.hasOwnProperty("searchStatistics")) {
                properties._searchStatistics = 1;
                {
                    let error = $root.events.RunFinishedPayload.SearchStatistics.verify(message.searchStatistics);
                    if (error)
                        return "searchStatistics." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RunFinishedPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.RunFinishedPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.RunFinishedPayload} RunFinishedPayload
         */
        RunFinishedPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.events.RunFinishedPayload)
                return object;
            let message = new $root.events.RunFinishedPayload();
            if (object.totalSteps != null)
                message.totalSteps = object.totalSteps | 0;
            if (object.durationSeconds != null)
                message.durationSeconds = Number(object.durationSeconds);
            if (object.totalNodes != null)
                message.totalNodes = object.totalNodes | 0;
            if (object.totalLlmCalls != null)
                message.totalLlmCalls = object.totalLlmCalls | 0;
            if (object.totalToolCalls != null)
                message.totalToolCalls = object.totalToolCalls | 0;
            if (object.tokenUsageSummary != null) {
                if (typeof object.tokenUsageSummary !== "object")
                    throw TypeError(".events.RunFinishedPayload.tokenUsageSummary: object expected");
                message.tokenUsageSummary = $root.events.RunFinishedPayload.TokenUsageSummary.fromObject(object.tokenUsageSummary);
            }
            if (object.nodeStatistics != null) {
                if (typeof object.nodeStatistics !== "object")
                    throw TypeError(".events.RunFinishedPayload.nodeStatistics: object expected");
                message.nodeStatistics = $root.events.RunFinishedPayload.NodeStatistics.fromObject(object.nodeStatistics);
            }
            if (object.searchStatistics != null) {
                if (typeof object.searchStatistics !== "object")
                    throw TypeError(".events.RunFinishedPayload.searchStatistics: object expected");
                message.searchStatistics = $root.events.RunFinishedPayload.SearchStatistics.fromObject(object.searchStatistics);
            }
            return message;
        };

        /**
         * Creates a plain object from a RunFinishedPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.RunFinishedPayload
         * @static
         * @param {events.RunFinishedPayload} message RunFinishedPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RunFinishedPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.totalSteps = 0;
                object.durationSeconds = 0;
                object.totalNodes = 0;
                object.totalLlmCalls = 0;
                object.totalToolCalls = 0;
                object.tokenUsageSummary = null;
                object.nodeStatistics = null;
            }
            if (message.totalSteps != null && message.hasOwnProperty("totalSteps"))
                object.totalSteps = message.totalSteps;
            if (message.durationSeconds != null && message.hasOwnProperty("durationSeconds"))
                object.durationSeconds = options.json && !isFinite(message.durationSeconds) ? String(message.durationSeconds) : message.durationSeconds;
            if (message.totalNodes != null && message.hasOwnProperty("totalNodes"))
                object.totalNodes = message.totalNodes;
            if (message.totalLlmCalls != null && message.hasOwnProperty("totalLlmCalls"))
                object.totalLlmCalls = message.totalLlmCalls;
            if (message.totalToolCalls != null && message.hasOwnProperty("totalToolCalls"))
                object.totalToolCalls = message.totalToolCalls;
            if (message.tokenUsageSummary != null && message.hasOwnProperty("tokenUsageSummary"))
                object.tokenUsageSummary = $root.events.RunFinishedPayload.TokenUsageSummary.toObject(message.tokenUsageSummary, options);
            if (message.nodeStatistics != null && message.hasOwnProperty("nodeStatistics"))
                object.nodeStatistics = $root.events.RunFinishedPayload.NodeStatistics.toObject(message.nodeStatistics, options);
            if (message.searchStatistics != null && message.hasOwnProperty("searchStatistics")) {
                object.searchStatistics = $root.events.RunFinishedPayload.SearchStatistics.toObject(message.searchStatistics, options);
                if (options.oneofs)
                    object._searchStatistics = "searchStatistics";
            }
            return object;
        };

        /**
         * Converts this RunFinishedPayload to JSON.
         * @function toJSON
         * @memberof events.RunFinishedPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RunFinishedPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RunFinishedPayload
         * @function getTypeUrl
         * @memberof events.RunFinishedPayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RunFinishedPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/events.RunFinishedPayload";
        };

        RunFinishedPayload.TokenUsageSummary = (function() {

            /**
             * Properties of a TokenUsageSummary.
             * @memberof events.RunFinishedPayload
             * @interface ITokenUsageSummary
             * @property {number|null} [totalPromptTokens] TokenUsageSummary totalPromptTokens
             * @property {number|null} [totalCompletionTokens] TokenUsageSummary totalCompletionTokens
             */

            /**
             * Constructs a new TokenUsageSummary.
             * @memberof events.RunFinishedPayload
             * @classdesc Represents a TokenUsageSummary.
             * @implements ITokenUsageSummary
             * @constructor
             * @param {events.RunFinishedPayload.ITokenUsageSummary=} [properties] Properties to set
             */
            function TokenUsageSummary(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TokenUsageSummary totalPromptTokens.
             * @member {number} totalPromptTokens
             * @memberof events.RunFinishedPayload.TokenUsageSummary
             * @instance
             */
            TokenUsageSummary.prototype.totalPromptTokens = 0;

            /**
             * TokenUsageSummary totalCompletionTokens.
             * @member {number} totalCompletionTokens
             * @memberof events.RunFinishedPayload.TokenUsageSummary
             * @instance
             */
            TokenUsageSummary.prototype.totalCompletionTokens = 0;

            /**
             * Creates a new TokenUsageSummary instance using the specified properties.
             * @function create
             * @memberof events.RunFinishedPayload.TokenUsageSummary
             * @static
             * @param {events.RunFinishedPayload.ITokenUsageSummary=} [properties] Properties to set
             * @returns {events.RunFinishedPayload.TokenUsageSummary} TokenUsageSummary instance
             */
            TokenUsageSummary.create = function create(properties) {
                return new TokenUsageSummary(properties);
            };

            /**
             * Encodes the specified TokenUsageSummary message. Does not implicitly {@link events.RunFinishedPayload.TokenUsageSummary.verify|verify} messages.
             * @function encode
             * @memberof events.RunFinishedPayload.TokenUsageSummary
             * @static
             * @param {events.RunFinishedPayload.ITokenUsageSummary} message TokenUsageSummary message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TokenUsageSummary.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.totalPromptTokens != null && Object.hasOwnProperty.call(message, "totalPromptTokens"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.totalPromptTokens);
                if (message.totalCompletionTokens != null && Object.hasOwnProperty.call(message, "totalCompletionTokens"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.totalCompletionTokens);
                return writer;
            };

            /**
             * Encodes the specified TokenUsageSummary message, length delimited. Does not implicitly {@link events.RunFinishedPayload.TokenUsageSummary.verify|verify} messages.
             * @function encodeDelimited
             * @memberof events.RunFinishedPayload.TokenUsageSummary
             * @static
             * @param {events.RunFinishedPayload.ITokenUsageSummary} message TokenUsageSummary message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TokenUsageSummary.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TokenUsageSummary message from the specified reader or buffer.
             * @function decode
             * @memberof events.RunFinishedPayload.TokenUsageSummary
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {events.RunFinishedPayload.TokenUsageSummary} TokenUsageSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TokenUsageSummary.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.RunFinishedPayload.TokenUsageSummary();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.totalPromptTokens = reader.int32();
                            break;
                        }
                    case 2: {
                            message.totalCompletionTokens = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TokenUsageSummary message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof events.RunFinishedPayload.TokenUsageSummary
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {events.RunFinishedPayload.TokenUsageSummary} TokenUsageSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TokenUsageSummary.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TokenUsageSummary message.
             * @function verify
             * @memberof events.RunFinishedPayload.TokenUsageSummary
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TokenUsageSummary.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.totalPromptTokens != null && message.hasOwnProperty("totalPromptTokens"))
                    if (!$util.isInteger(message.totalPromptTokens))
                        return "totalPromptTokens: integer expected";
                if (message.totalCompletionTokens != null && message.hasOwnProperty("totalCompletionTokens"))
                    if (!$util.isInteger(message.totalCompletionTokens))
                        return "totalCompletionTokens: integer expected";
                return null;
            };

            /**
             * Creates a TokenUsageSummary message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof events.RunFinishedPayload.TokenUsageSummary
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {events.RunFinishedPayload.TokenUsageSummary} TokenUsageSummary
             */
            TokenUsageSummary.fromObject = function fromObject(object) {
                if (object instanceof $root.events.RunFinishedPayload.TokenUsageSummary)
                    return object;
                let message = new $root.events.RunFinishedPayload.TokenUsageSummary();
                if (object.totalPromptTokens != null)
                    message.totalPromptTokens = object.totalPromptTokens | 0;
                if (object.totalCompletionTokens != null)
                    message.totalCompletionTokens = object.totalCompletionTokens | 0;
                return message;
            };

            /**
             * Creates a plain object from a TokenUsageSummary message. Also converts values to other types if specified.
             * @function toObject
             * @memberof events.RunFinishedPayload.TokenUsageSummary
             * @static
             * @param {events.RunFinishedPayload.TokenUsageSummary} message TokenUsageSummary
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TokenUsageSummary.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.totalPromptTokens = 0;
                    object.totalCompletionTokens = 0;
                }
                if (message.totalPromptTokens != null && message.hasOwnProperty("totalPromptTokens"))
                    object.totalPromptTokens = message.totalPromptTokens;
                if (message.totalCompletionTokens != null && message.hasOwnProperty("totalCompletionTokens"))
                    object.totalCompletionTokens = message.totalCompletionTokens;
                return object;
            };

            /**
             * Converts this TokenUsageSummary to JSON.
             * @function toJSON
             * @memberof events.RunFinishedPayload.TokenUsageSummary
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TokenUsageSummary.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TokenUsageSummary
             * @function getTypeUrl
             * @memberof events.RunFinishedPayload.TokenUsageSummary
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TokenUsageSummary.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/events.RunFinishedPayload.TokenUsageSummary";
            };

            return TokenUsageSummary;
        })();

        RunFinishedPayload.NodeStatistics = (function() {

            /**
             * Properties of a NodeStatistics.
             * @memberof events.RunFinishedPayload
             * @interface INodeStatistics
             * @property {number|null} [totalCreated] NodeStatistics totalCreated
             * @property {number|null} [totalCompleted] NodeStatistics totalCompleted
             * @property {Object.<string,number>|null} [byType] NodeStatistics byType
             */

            /**
             * Constructs a new NodeStatistics.
             * @memberof events.RunFinishedPayload
             * @classdesc Represents a NodeStatistics.
             * @implements INodeStatistics
             * @constructor
             * @param {events.RunFinishedPayload.INodeStatistics=} [properties] Properties to set
             */
            function NodeStatistics(properties) {
                this.byType = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NodeStatistics totalCreated.
             * @member {number} totalCreated
             * @memberof events.RunFinishedPayload.NodeStatistics
             * @instance
             */
            NodeStatistics.prototype.totalCreated = 0;

            /**
             * NodeStatistics totalCompleted.
             * @member {number} totalCompleted
             * @memberof events.RunFinishedPayload.NodeStatistics
             * @instance
             */
            NodeStatistics.prototype.totalCompleted = 0;

            /**
             * NodeStatistics byType.
             * @member {Object.<string,number>} byType
             * @memberof events.RunFinishedPayload.NodeStatistics
             * @instance
             */
            NodeStatistics.prototype.byType = $util.emptyObject;

            /**
             * Creates a new NodeStatistics instance using the specified properties.
             * @function create
             * @memberof events.RunFinishedPayload.NodeStatistics
             * @static
             * @param {events.RunFinishedPayload.INodeStatistics=} [properties] Properties to set
             * @returns {events.RunFinishedPayload.NodeStatistics} NodeStatistics instance
             */
            NodeStatistics.create = function create(properties) {
                return new NodeStatistics(properties);
            };

            /**
             * Encodes the specified NodeStatistics message. Does not implicitly {@link events.RunFinishedPayload.NodeStatistics.verify|verify} messages.
             * @function encode
             * @memberof events.RunFinishedPayload.NodeStatistics
             * @static
             * @param {events.RunFinishedPayload.INodeStatistics} message NodeStatistics message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NodeStatistics.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.totalCreated != null && Object.hasOwnProperty.call(message, "totalCreated"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.totalCreated);
                if (message.totalCompleted != null && Object.hasOwnProperty.call(message, "totalCompleted"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.totalCompleted);
                if (message.byType != null && Object.hasOwnProperty.call(message, "byType"))
                    for (let keys = Object.keys(message.byType), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.byType[keys[i]]).ldelim();
                return writer;
            };

            /**
             * Encodes the specified NodeStatistics message, length delimited. Does not implicitly {@link events.RunFinishedPayload.NodeStatistics.verify|verify} messages.
             * @function encodeDelimited
             * @memberof events.RunFinishedPayload.NodeStatistics
             * @static
             * @param {events.RunFinishedPayload.INodeStatistics} message NodeStatistics message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NodeStatistics.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NodeStatistics message from the specified reader or buffer.
             * @function decode
             * @memberof events.RunFinishedPayload.NodeStatistics
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {events.RunFinishedPayload.NodeStatistics} NodeStatistics
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NodeStatistics.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.RunFinishedPayload.NodeStatistics(), key, value;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.totalCreated = reader.int32();
                            break;
                        }
                    case 2: {
                            message.totalCompleted = reader.int32();
                            break;
                        }
                    case 3: {
                            if (message.byType === $util.emptyObject)
                                message.byType = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.byType[key] = value;
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a NodeStatistics message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof events.RunFinishedPayload.NodeStatistics
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {events.RunFinishedPayload.NodeStatistics} NodeStatistics
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NodeStatistics.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NodeStatistics message.
             * @function verify
             * @memberof events.RunFinishedPayload.NodeStatistics
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NodeStatistics.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.totalCreated != null && message.hasOwnProperty("totalCreated"))
                    if (!$util.isInteger(message.totalCreated))
                        return "totalCreated: integer expected";
                if (message.totalCompleted != null && message.hasOwnProperty("totalCompleted"))
                    if (!$util.isInteger(message.totalCompleted))
                        return "totalCompleted: integer expected";
                if (message.byType != null && message.hasOwnProperty("byType")) {
                    if (!$util.isObject(message.byType))
                        return "byType: object expected";
                    let key = Object.keys(message.byType);
                    for (let i = 0; i < key.length; ++i)
                        if (!$util.isInteger(message.byType[key[i]]))
                            return "byType: integer{k:string} expected";
                }
                return null;
            };

            /**
             * Creates a NodeStatistics message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof events.RunFinishedPayload.NodeStatistics
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {events.RunFinishedPayload.NodeStatistics} NodeStatistics
             */
            NodeStatistics.fromObject = function fromObject(object) {
                if (object instanceof $root.events.RunFinishedPayload.NodeStatistics)
                    return object;
                let message = new $root.events.RunFinishedPayload.NodeStatistics();
                if (object.totalCreated != null)
                    message.totalCreated = object.totalCreated | 0;
                if (object.totalCompleted != null)
                    message.totalCompleted = object.totalCompleted | 0;
                if (object.byType) {
                    if (typeof object.byType !== "object")
                        throw TypeError(".events.RunFinishedPayload.NodeStatistics.byType: object expected");
                    message.byType = {};
                    for (let keys = Object.keys(object.byType), i = 0; i < keys.length; ++i)
                        message.byType[keys[i]] = object.byType[keys[i]] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a NodeStatistics message. Also converts values to other types if specified.
             * @function toObject
             * @memberof events.RunFinishedPayload.NodeStatistics
             * @static
             * @param {events.RunFinishedPayload.NodeStatistics} message NodeStatistics
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NodeStatistics.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.objects || options.defaults)
                    object.byType = {};
                if (options.defaults) {
                    object.totalCreated = 0;
                    object.totalCompleted = 0;
                }
                if (message.totalCreated != null && message.hasOwnProperty("totalCreated"))
                    object.totalCreated = message.totalCreated;
                if (message.totalCompleted != null && message.hasOwnProperty("totalCompleted"))
                    object.totalCompleted = message.totalCompleted;
                let keys2;
                if (message.byType && (keys2 = Object.keys(message.byType)).length) {
                    object.byType = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.byType[keys2[j]] = message.byType[keys2[j]];
                }
                return object;
            };

            /**
             * Converts this NodeStatistics to JSON.
             * @function toJSON
             * @memberof events.RunFinishedPayload.NodeStatistics
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NodeStatistics.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for NodeStatistics
             * @function getTypeUrl
             * @memberof events.RunFinishedPayload.NodeStatistics
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            NodeStatistics.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/events.RunFinishedPayload.NodeStatistics";
            };

            return NodeStatistics;
        })();

        RunFinishedPayload.SearchStatistics = (function() {

            /**
             * Properties of a SearchStatistics.
             * @memberof events.RunFinishedPayload
             * @interface ISearchStatistics
             * @property {number|null} [totalSearches] SearchStatistics totalSearches
             * @property {number|null} [totalPagesProcessed] SearchStatistics totalPagesProcessed
             * @property {number|null} [totalSearchTokens] SearchStatistics totalSearchTokens
             */

            /**
             * Constructs a new SearchStatistics.
             * @memberof events.RunFinishedPayload
             * @classdesc Represents a SearchStatistics.
             * @implements ISearchStatistics
             * @constructor
             * @param {events.RunFinishedPayload.ISearchStatistics=} [properties] Properties to set
             */
            function SearchStatistics(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SearchStatistics totalSearches.
             * @member {number} totalSearches
             * @memberof events.RunFinishedPayload.SearchStatistics
             * @instance
             */
            SearchStatistics.prototype.totalSearches = 0;

            /**
             * SearchStatistics totalPagesProcessed.
             * @member {number} totalPagesProcessed
             * @memberof events.RunFinishedPayload.SearchStatistics
             * @instance
             */
            SearchStatistics.prototype.totalPagesProcessed = 0;

            /**
             * SearchStatistics totalSearchTokens.
             * @member {number} totalSearchTokens
             * @memberof events.RunFinishedPayload.SearchStatistics
             * @instance
             */
            SearchStatistics.prototype.totalSearchTokens = 0;

            /**
             * Creates a new SearchStatistics instance using the specified properties.
             * @function create
             * @memberof events.RunFinishedPayload.SearchStatistics
             * @static
             * @param {events.RunFinishedPayload.ISearchStatistics=} [properties] Properties to set
             * @returns {events.RunFinishedPayload.SearchStatistics} SearchStatistics instance
             */
            SearchStatistics.create = function create(properties) {
                return new SearchStatistics(properties);
            };

            /**
             * Encodes the specified SearchStatistics message. Does not implicitly {@link events.RunFinishedPayload.SearchStatistics.verify|verify} messages.
             * @function encode
             * @memberof events.RunFinishedPayload.SearchStatistics
             * @static
             * @param {events.RunFinishedPayload.ISearchStatistics} message SearchStatistics message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SearchStatistics.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.totalSearches != null && Object.hasOwnProperty.call(message, "totalSearches"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.totalSearches);
                if (message.totalPagesProcessed != null && Object.hasOwnProperty.call(message, "totalPagesProcessed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.totalPagesProcessed);
                if (message.totalSearchTokens != null && Object.hasOwnProperty.call(message, "totalSearchTokens"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.totalSearchTokens);
                return writer;
            };

            /**
             * Encodes the specified SearchStatistics message, length delimited. Does not implicitly {@link events.RunFinishedPayload.SearchStatistics.verify|verify} messages.
             * @function encodeDelimited
             * @memberof events.RunFinishedPayload.SearchStatistics
             * @static
             * @param {events.RunFinishedPayload.ISearchStatistics} message SearchStatistics message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SearchStatistics.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SearchStatistics message from the specified reader or buffer.
             * @function decode
             * @memberof events.RunFinishedPayload.SearchStatistics
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {events.RunFinishedPayload.SearchStatistics} SearchStatistics
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SearchStatistics.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.RunFinishedPayload.SearchStatistics();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.totalSearches = reader.int32();
                            break;
                        }
                    case 2: {
                            message.totalPagesProcessed = reader.int32();
                            break;
                        }
                    case 3: {
                            message.totalSearchTokens = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SearchStatistics message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof events.RunFinishedPayload.SearchStatistics
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {events.RunFinishedPayload.SearchStatistics} SearchStatistics
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SearchStatistics.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SearchStatistics message.
             * @function verify
             * @memberof events.RunFinishedPayload.SearchStatistics
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SearchStatistics.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.totalSearches != null && message.hasOwnProperty("totalSearches"))
                    if (!$util.isInteger(message.totalSearches))
                        return "totalSearches: integer expected";
                if (message.totalPagesProcessed != null && message.hasOwnProperty("totalPagesProcessed"))
                    if (!$util.isInteger(message.totalPagesProcessed))
                        return "totalPagesProcessed: integer expected";
                if (message.totalSearchTokens != null && message.hasOwnProperty("totalSearchTokens"))
                    if (!$util.isInteger(message.totalSearchTokens))
                        return "totalSearchTokens: integer expected";
                return null;
            };

            /**
             * Creates a SearchStatistics message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof events.RunFinishedPayload.SearchStatistics
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {events.RunFinishedPayload.SearchStatistics} SearchStatistics
             */
            SearchStatistics.fromObject = function fromObject(object) {
                if (object instanceof $root.events.RunFinishedPayload.SearchStatistics)
                    return object;
                let message = new $root.events.RunFinishedPayload.SearchStatistics();
                if (object.totalSearches != null)
                    message.totalSearches = object.totalSearches | 0;
                if (object.totalPagesProcessed != null)
                    message.totalPagesProcessed = object.totalPagesProcessed | 0;
                if (object.totalSearchTokens != null)
                    message.totalSearchTokens = object.totalSearchTokens | 0;
                return message;
            };

            /**
             * Creates a plain object from a SearchStatistics message. Also converts values to other types if specified.
             * @function toObject
             * @memberof events.RunFinishedPayload.SearchStatistics
             * @static
             * @param {events.RunFinishedPayload.SearchStatistics} message SearchStatistics
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SearchStatistics.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.totalSearches = 0;
                    object.totalPagesProcessed = 0;
                    object.totalSearchTokens = 0;
                }
                if (message.totalSearches != null && message.hasOwnProperty("totalSearches"))
                    object.totalSearches = message.totalSearches;
                if (message.totalPagesProcessed != null && message.hasOwnProperty("totalPagesProcessed"))
                    object.totalPagesProcessed = message.totalPagesProcessed;
                if (message.totalSearchTokens != null && message.hasOwnProperty("totalSearchTokens"))
                    object.totalSearchTokens = message.totalSearchTokens;
                return object;
            };

            /**
             * Converts this SearchStatistics to JSON.
             * @function toJSON
             * @memberof events.RunFinishedPayload.SearchStatistics
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SearchStatistics.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SearchStatistics
             * @function getTypeUrl
             * @memberof events.RunFinishedPayload.SearchStatistics
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SearchStatistics.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/events.RunFinishedPayload.SearchStatistics";
            };

            return SearchStatistics;
        })();

        return RunFinishedPayload;
    })();

    events.RunErrorPayload = (function() {

        /**
         * Properties of a RunErrorPayload.
         * @memberof events
         * @interface IRunErrorPayload
         * @property {string|null} [errorType] RunErrorPayload errorType
         * @property {string|null} [errorMessage] RunErrorPayload errorMessage
         * @property {string|null} [stackTrace] RunErrorPayload stackTrace
         * @property {string|null} [nodeId] RunErrorPayload nodeId
         * @property {number|null} [step] RunErrorPayload step
         * @property {events.RunErrorPayload.IContext|null} [context] RunErrorPayload context
         */

        /**
         * Constructs a new RunErrorPayload.
         * @memberof events
         * @classdesc Represents a RunErrorPayload.
         * @implements IRunErrorPayload
         * @constructor
         * @param {events.IRunErrorPayload=} [properties] Properties to set
         */
        function RunErrorPayload(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RunErrorPayload errorType.
         * @member {string} errorType
         * @memberof events.RunErrorPayload
         * @instance
         */
        RunErrorPayload.prototype.errorType = "";

        /**
         * RunErrorPayload errorMessage.
         * @member {string} errorMessage
         * @memberof events.RunErrorPayload
         * @instance
         */
        RunErrorPayload.prototype.errorMessage = "";

        /**
         * RunErrorPayload stackTrace.
         * @member {string} stackTrace
         * @memberof events.RunErrorPayload
         * @instance
         */
        RunErrorPayload.prototype.stackTrace = "";

        /**
         * RunErrorPayload nodeId.
         * @member {string|null|undefined} nodeId
         * @memberof events.RunErrorPayload
         * @instance
         */
        RunErrorPayload.prototype.nodeId = null;

        /**
         * RunErrorPayload step.
         * @member {number|null|undefined} step
         * @memberof events.RunErrorPayload
         * @instance
         */
        RunErrorPayload.prototype.step = null;

        /**
         * RunErrorPayload context.
         * @member {events.RunErrorPayload.IContext|null|undefined} context
         * @memberof events.RunErrorPayload
         * @instance
         */
        RunErrorPayload.prototype.context = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(RunErrorPayload.prototype, "_nodeId", {
            get: $util.oneOfGetter($oneOfFields = ["nodeId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(RunErrorPayload.prototype, "_step", {
            get: $util.oneOfGetter($oneOfFields = ["step"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RunErrorPayload instance using the specified properties.
         * @function create
         * @memberof events.RunErrorPayload
         * @static
         * @param {events.IRunErrorPayload=} [properties] Properties to set
         * @returns {events.RunErrorPayload} RunErrorPayload instance
         */
        RunErrorPayload.create = function create(properties) {
            return new RunErrorPayload(properties);
        };

        /**
         * Encodes the specified RunErrorPayload message. Does not implicitly {@link events.RunErrorPayload.verify|verify} messages.
         * @function encode
         * @memberof events.RunErrorPayload
         * @static
         * @param {events.IRunErrorPayload} message RunErrorPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RunErrorPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorType != null && Object.hasOwnProperty.call(message, "errorType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.errorType);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            if (message.stackTrace != null && Object.hasOwnProperty.call(message, "stackTrace"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.stackTrace);
            if (message.nodeId != null && Object.hasOwnProperty.call(message, "nodeId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.nodeId);
            if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.step);
            if (message.context != null && Object.hasOwnProperty.call(message, "context"))
                $root.events.RunErrorPayload.Context.encode(message.context, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RunErrorPayload message, length delimited. Does not implicitly {@link events.RunErrorPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.RunErrorPayload
         * @static
         * @param {events.IRunErrorPayload} message RunErrorPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RunErrorPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RunErrorPayload message from the specified reader or buffer.
         * @function decode
         * @memberof events.RunErrorPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.RunErrorPayload} RunErrorPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RunErrorPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.RunErrorPayload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.errorType = reader.string();
                        break;
                    }
                case 2: {
                        message.errorMessage = reader.string();
                        break;
                    }
                case 3: {
                        message.stackTrace = reader.string();
                        break;
                    }
                case 4: {
                        message.nodeId = reader.string();
                        break;
                    }
                case 5: {
                        message.step = reader.int32();
                        break;
                    }
                case 6: {
                        message.context = $root.events.RunErrorPayload.Context.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RunErrorPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.RunErrorPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.RunErrorPayload} RunErrorPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RunErrorPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RunErrorPayload message.
         * @function verify
         * @memberof events.RunErrorPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RunErrorPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.errorType != null && message.hasOwnProperty("errorType"))
                if (!$util.isString(message.errorType))
                    return "errorType: string expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.stackTrace != null && message.hasOwnProperty("stackTrace"))
                if (!$util.isString(message.stackTrace))
                    return "stackTrace: string expected";
            if (message.nodeId != null && message.hasOwnProperty("nodeId")) {
                properties._nodeId = 1;
                if (!$util.isString(message.nodeId))
                    return "nodeId: string expected";
            }
            if (message.step != null && message.hasOwnProperty("step")) {
                properties._step = 1;
                if (!$util.isInteger(message.step))
                    return "step: integer expected";
            }
            if (message.context != null && message.hasOwnProperty("context")) {
                let error = $root.events.RunErrorPayload.Context.verify(message.context);
                if (error)
                    return "context." + error;
            }
            return null;
        };

        /**
         * Creates a RunErrorPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.RunErrorPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.RunErrorPayload} RunErrorPayload
         */
        RunErrorPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.events.RunErrorPayload)
                return object;
            let message = new $root.events.RunErrorPayload();
            if (object.errorType != null)
                message.errorType = String(object.errorType);
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.stackTrace != null)
                message.stackTrace = String(object.stackTrace);
            if (object.nodeId != null)
                message.nodeId = String(object.nodeId);
            if (object.step != null)
                message.step = object.step | 0;
            if (object.context != null) {
                if (typeof object.context !== "object")
                    throw TypeError(".events.RunErrorPayload.context: object expected");
                message.context = $root.events.RunErrorPayload.Context.fromObject(object.context);
            }
            return message;
        };

        /**
         * Creates a plain object from a RunErrorPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.RunErrorPayload
         * @static
         * @param {events.RunErrorPayload} message RunErrorPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RunErrorPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.errorType = "";
                object.errorMessage = "";
                object.stackTrace = "";
                object.context = null;
            }
            if (message.errorType != null && message.hasOwnProperty("errorType"))
                object.errorType = message.errorType;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.stackTrace != null && message.hasOwnProperty("stackTrace"))
                object.stackTrace = message.stackTrace;
            if (message.nodeId != null && message.hasOwnProperty("nodeId")) {
                object.nodeId = message.nodeId;
                if (options.oneofs)
                    object._nodeId = "nodeId";
            }
            if (message.step != null && message.hasOwnProperty("step")) {
                object.step = message.step;
                if (options.oneofs)
                    object._step = "step";
            }
            if (message.context != null && message.hasOwnProperty("context"))
                object.context = $root.events.RunErrorPayload.Context.toObject(message.context, options);
            return object;
        };

        /**
         * Converts this RunErrorPayload to JSON.
         * @function toJSON
         * @memberof events.RunErrorPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RunErrorPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RunErrorPayload
         * @function getTypeUrl
         * @memberof events.RunErrorPayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RunErrorPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/events.RunErrorPayload";
        };

        RunErrorPayload.Context = (function() {

            /**
             * Properties of a Context.
             * @memberof events.RunErrorPayload
             * @interface IContext
             * @property {number|null} [lastSuccessfulStep] Context lastSuccessfulStep
             * @property {number|null} [totalProcessedItems] Context totalProcessedItems
             * @property {string|null} [lastItemId] Context lastItemId
             * @property {string|null} [engineBackend] Context engineBackend
             */

            /**
             * Constructs a new Context.
             * @memberof events.RunErrorPayload
             * @classdesc Represents a Context.
             * @implements IContext
             * @constructor
             * @param {events.RunErrorPayload.IContext=} [properties] Properties to set
             */
            function Context(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Context lastSuccessfulStep.
             * @member {number} lastSuccessfulStep
             * @memberof events.RunErrorPayload.Context
             * @instance
             */
            Context.prototype.lastSuccessfulStep = 0;

            /**
             * Context totalProcessedItems.
             * @member {number} totalProcessedItems
             * @memberof events.RunErrorPayload.Context
             * @instance
             */
            Context.prototype.totalProcessedItems = 0;

            /**
             * Context lastItemId.
             * @member {string} lastItemId
             * @memberof events.RunErrorPayload.Context
             * @instance
             */
            Context.prototype.lastItemId = "";

            /**
             * Context engineBackend.
             * @member {string|null|undefined} engineBackend
             * @memberof events.RunErrorPayload.Context
             * @instance
             */
            Context.prototype.engineBackend = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Context.prototype, "_engineBackend", {
                get: $util.oneOfGetter($oneOfFields = ["engineBackend"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Context instance using the specified properties.
             * @function create
             * @memberof events.RunErrorPayload.Context
             * @static
             * @param {events.RunErrorPayload.IContext=} [properties] Properties to set
             * @returns {events.RunErrorPayload.Context} Context instance
             */
            Context.create = function create(properties) {
                return new Context(properties);
            };

            /**
             * Encodes the specified Context message. Does not implicitly {@link events.RunErrorPayload.Context.verify|verify} messages.
             * @function encode
             * @memberof events.RunErrorPayload.Context
             * @static
             * @param {events.RunErrorPayload.IContext} message Context message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Context.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.lastSuccessfulStep != null && Object.hasOwnProperty.call(message, "lastSuccessfulStep"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.lastSuccessfulStep);
                if (message.totalProcessedItems != null && Object.hasOwnProperty.call(message, "totalProcessedItems"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.totalProcessedItems);
                if (message.lastItemId != null && Object.hasOwnProperty.call(message, "lastItemId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.lastItemId);
                if (message.engineBackend != null && Object.hasOwnProperty.call(message, "engineBackend"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.engineBackend);
                return writer;
            };

            /**
             * Encodes the specified Context message, length delimited. Does not implicitly {@link events.RunErrorPayload.Context.verify|verify} messages.
             * @function encodeDelimited
             * @memberof events.RunErrorPayload.Context
             * @static
             * @param {events.RunErrorPayload.IContext} message Context message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Context.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Context message from the specified reader or buffer.
             * @function decode
             * @memberof events.RunErrorPayload.Context
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {events.RunErrorPayload.Context} Context
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Context.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.RunErrorPayload.Context();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.lastSuccessfulStep = reader.int32();
                            break;
                        }
                    case 2: {
                            message.totalProcessedItems = reader.int32();
                            break;
                        }
                    case 3: {
                            message.lastItemId = reader.string();
                            break;
                        }
                    case 4: {
                            message.engineBackend = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Context message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof events.RunErrorPayload.Context
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {events.RunErrorPayload.Context} Context
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Context.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Context message.
             * @function verify
             * @memberof events.RunErrorPayload.Context
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Context.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.lastSuccessfulStep != null && message.hasOwnProperty("lastSuccessfulStep"))
                    if (!$util.isInteger(message.lastSuccessfulStep))
                        return "lastSuccessfulStep: integer expected";
                if (message.totalProcessedItems != null && message.hasOwnProperty("totalProcessedItems"))
                    if (!$util.isInteger(message.totalProcessedItems))
                        return "totalProcessedItems: integer expected";
                if (message.lastItemId != null && message.hasOwnProperty("lastItemId"))
                    if (!$util.isString(message.lastItemId))
                        return "lastItemId: string expected";
                if (message.engineBackend != null && message.hasOwnProperty("engineBackend")) {
                    properties._engineBackend = 1;
                    if (!$util.isString(message.engineBackend))
                        return "engineBackend: string expected";
                }
                return null;
            };

            /**
             * Creates a Context message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof events.RunErrorPayload.Context
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {events.RunErrorPayload.Context} Context
             */
            Context.fromObject = function fromObject(object) {
                if (object instanceof $root.events.RunErrorPayload.Context)
                    return object;
                let message = new $root.events.RunErrorPayload.Context();
                if (object.lastSuccessfulStep != null)
                    message.lastSuccessfulStep = object.lastSuccessfulStep | 0;
                if (object.totalProcessedItems != null)
                    message.totalProcessedItems = object.totalProcessedItems | 0;
                if (object.lastItemId != null)
                    message.lastItemId = String(object.lastItemId);
                if (object.engineBackend != null)
                    message.engineBackend = String(object.engineBackend);
                return message;
            };

            /**
             * Creates a plain object from a Context message. Also converts values to other types if specified.
             * @function toObject
             * @memberof events.RunErrorPayload.Context
             * @static
             * @param {events.RunErrorPayload.Context} message Context
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Context.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.lastSuccessfulStep = 0;
                    object.totalProcessedItems = 0;
                    object.lastItemId = "";
                }
                if (message.lastSuccessfulStep != null && message.hasOwnProperty("lastSuccessfulStep"))
                    object.lastSuccessfulStep = message.lastSuccessfulStep;
                if (message.totalProcessedItems != null && message.hasOwnProperty("totalProcessedItems"))
                    object.totalProcessedItems = message.totalProcessedItems;
                if (message.lastItemId != null && message.hasOwnProperty("lastItemId"))
                    object.lastItemId = message.lastItemId;
                if (message.engineBackend != null && message.hasOwnProperty("engineBackend")) {
                    object.engineBackend = message.engineBackend;
                    if (options.oneofs)
                        object._engineBackend = "engineBackend";
                }
                return object;
            };

            /**
             * Converts this Context to JSON.
             * @function toJSON
             * @memberof events.RunErrorPayload.Context
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Context.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Context
             * @function getTypeUrl
             * @memberof events.RunErrorPayload.Context
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Context.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/events.RunErrorPayload.Context";
            };

            return Context;
        })();

        return RunErrorPayload;
    })();

    /**
     * EventType enum.
     * @name events.EventType
     * @enum {number}
     * @property {number} EVENT_TYPE_UNSPECIFIED=0 EVENT_TYPE_UNSPECIFIED value
     * @property {number} EVENT_TYPE_STEP_STARTED=1 EVENT_TYPE_STEP_STARTED value
     * @property {number} EVENT_TYPE_STEP_FINISHED=2 EVENT_TYPE_STEP_FINISHED value
     * @property {number} EVENT_TYPE_NODE_STATUS_CHANGED=3 EVENT_TYPE_NODE_STATUS_CHANGED value
     * @property {number} EVENT_TYPE_LLM_CALL_STARTED=4 EVENT_TYPE_LLM_CALL_STARTED value
     * @property {number} EVENT_TYPE_LLM_CALL_COMPLETED=5 EVENT_TYPE_LLM_CALL_COMPLETED value
     * @property {number} EVENT_TYPE_TOOL_INVOKED=6 EVENT_TYPE_TOOL_INVOKED value
     * @property {number} EVENT_TYPE_TOOL_RETURNED=7 EVENT_TYPE_TOOL_RETURNED value
     * @property {number} EVENT_TYPE_NODE_CREATED=8 EVENT_TYPE_NODE_CREATED value
     * @property {number} EVENT_TYPE_PLAN_RECEIVED=9 EVENT_TYPE_PLAN_RECEIVED value
     * @property {number} EVENT_TYPE_NODE_ADDED=10 EVENT_TYPE_NODE_ADDED value
     * @property {number} EVENT_TYPE_EDGE_ADDED=11 EVENT_TYPE_EDGE_ADDED value
     * @property {number} EVENT_TYPE_INNER_GRAPH_BUILT=12 EVENT_TYPE_INNER_GRAPH_BUILT value
     * @property {number} EVENT_TYPE_NODE_RESULT_AVAILABLE=13 EVENT_TYPE_NODE_RESULT_AVAILABLE value
     * @property {number} EVENT_TYPE_RUN_STARTED=14 EVENT_TYPE_RUN_STARTED value
     * @property {number} EVENT_TYPE_RUN_FINISHED=15 EVENT_TYPE_RUN_FINISHED value
     * @property {number} EVENT_TYPE_RUN_ERROR=16 EVENT_TYPE_RUN_ERROR value
     */
    events.EventType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EVENT_TYPE_UNSPECIFIED"] = 0;
        values[valuesById[1] = "EVENT_TYPE_STEP_STARTED"] = 1;
        values[valuesById[2] = "EVENT_TYPE_STEP_FINISHED"] = 2;
        values[valuesById[3] = "EVENT_TYPE_NODE_STATUS_CHANGED"] = 3;
        values[valuesById[4] = "EVENT_TYPE_LLM_CALL_STARTED"] = 4;
        values[valuesById[5] = "EVENT_TYPE_LLM_CALL_COMPLETED"] = 5;
        values[valuesById[6] = "EVENT_TYPE_TOOL_INVOKED"] = 6;
        values[valuesById[7] = "EVENT_TYPE_TOOL_RETURNED"] = 7;
        values[valuesById[8] = "EVENT_TYPE_NODE_CREATED"] = 8;
        values[valuesById[9] = "EVENT_TYPE_PLAN_RECEIVED"] = 9;
        values[valuesById[10] = "EVENT_TYPE_NODE_ADDED"] = 10;
        values[valuesById[11] = "EVENT_TYPE_EDGE_ADDED"] = 11;
        values[valuesById[12] = "EVENT_TYPE_INNER_GRAPH_BUILT"] = 12;
        values[valuesById[13] = "EVENT_TYPE_NODE_RESULT_AVAILABLE"] = 13;
        values[valuesById[14] = "EVENT_TYPE_RUN_STARTED"] = 14;
        values[valuesById[15] = "EVENT_TYPE_RUN_FINISHED"] = 15;
        values[valuesById[16] = "EVENT_TYPE_RUN_ERROR"] = 16;
        return values;
    })();

    /**
     * ConnectionStatus enum.
     * @name events.ConnectionStatus
     * @enum {number}
     * @property {number} CONNECTION_STATUS_UNSPECIFIED=0 CONNECTION_STATUS_UNSPECIFIED value
     * @property {number} CONNECTION_STATUS_CONNECTING=1 CONNECTION_STATUS_CONNECTING value
     * @property {number} CONNECTION_STATUS_CONNECTED=2 CONNECTION_STATUS_CONNECTED value
     * @property {number} CONNECTION_STATUS_DISCONNECTED=3 CONNECTION_STATUS_DISCONNECTED value
     */
    events.ConnectionStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CONNECTION_STATUS_UNSPECIFIED"] = 0;
        values[valuesById[1] = "CONNECTION_STATUS_CONNECTING"] = 1;
        values[valuesById[2] = "CONNECTION_STATUS_CONNECTED"] = 2;
        values[valuesById[3] = "CONNECTION_STATUS_DISCONNECTED"] = 3;
        return values;
    })();

    events.Event = (function() {

        /**
         * Properties of an Event.
         * @memberof events
         * @interface IEvent
         * @property {string|null} [eventId] Event eventId
         * @property {google.protobuf.ITimestamp|null} [timestamp] Event timestamp
         * @property {events.EventType|null} [eventType] Event eventType
         * @property {string|null} [runId] Event runId
         * @property {events.IStepStartedPayload|null} [stepStarted] Event stepStarted
         * @property {events.IStepFinishedPayload|null} [stepFinished] Event stepFinished
         * @property {events.INodeStatusChangePayload|null} [nodeStatusChanged] Event nodeStatusChanged
         * @property {events.ILlmCallStartedPayload|null} [llmCallStarted] Event llmCallStarted
         * @property {events.ILlmCallCompletedPayload|null} [llmCallCompleted] Event llmCallCompleted
         * @property {events.IToolInvokedPayload|null} [toolInvoked] Event toolInvoked
         * @property {events.IToolReturnedPayload|null} [toolReturned] Event toolReturned
         * @property {events.INodeCreatedPayload|null} [nodeCreated] Event nodeCreated
         * @property {events.IPlanReceivedPayload|null} [planReceived] Event planReceived
         * @property {events.INodeAddedPayload|null} [nodeAdded] Event nodeAdded
         * @property {events.IEdgeAddedPayload|null} [edgeAdded] Event edgeAdded
         * @property {events.IInnerGraphBuiltPayload|null} [innerGraphBuilt] Event innerGraphBuilt
         * @property {events.INodeResultAvailablePayload|null} [nodeResultAvailable] Event nodeResultAvailable
         * @property {events.IRunStartedPayload|null} [runStarted] Event runStarted
         * @property {events.IRunFinishedPayload|null} [runFinished] Event runFinished
         * @property {events.IRunErrorPayload|null} [runError] Event runError
         * @property {google.protobuf.IStruct|null} [unknownPayload] Event unknownPayload
         */

        /**
         * Constructs a new Event.
         * @memberof events
         * @classdesc Represents an Event.
         * @implements IEvent
         * @constructor
         * @param {events.IEvent=} [properties] Properties to set
         */
        function Event(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Event eventId.
         * @member {string} eventId
         * @memberof events.Event
         * @instance
         */
        Event.prototype.eventId = "";

        /**
         * Event timestamp.
         * @member {google.protobuf.ITimestamp|null|undefined} timestamp
         * @memberof events.Event
         * @instance
         */
        Event.prototype.timestamp = null;

        /**
         * Event eventType.
         * @member {events.EventType} eventType
         * @memberof events.Event
         * @instance
         */
        Event.prototype.eventType = 0;

        /**
         * Event runId.
         * @member {string|null|undefined} runId
         * @memberof events.Event
         * @instance
         */
        Event.prototype.runId = null;

        /**
         * Event stepStarted.
         * @member {events.IStepStartedPayload|null|undefined} stepStarted
         * @memberof events.Event
         * @instance
         */
        Event.prototype.stepStarted = null;

        /**
         * Event stepFinished.
         * @member {events.IStepFinishedPayload|null|undefined} stepFinished
         * @memberof events.Event
         * @instance
         */
        Event.prototype.stepFinished = null;

        /**
         * Event nodeStatusChanged.
         * @member {events.INodeStatusChangePayload|null|undefined} nodeStatusChanged
         * @memberof events.Event
         * @instance
         */
        Event.prototype.nodeStatusChanged = null;

        /**
         * Event llmCallStarted.
         * @member {events.ILlmCallStartedPayload|null|undefined} llmCallStarted
         * @memberof events.Event
         * @instance
         */
        Event.prototype.llmCallStarted = null;

        /**
         * Event llmCallCompleted.
         * @member {events.ILlmCallCompletedPayload|null|undefined} llmCallCompleted
         * @memberof events.Event
         * @instance
         */
        Event.prototype.llmCallCompleted = null;

        /**
         * Event toolInvoked.
         * @member {events.IToolInvokedPayload|null|undefined} toolInvoked
         * @memberof events.Event
         * @instance
         */
        Event.prototype.toolInvoked = null;

        /**
         * Event toolReturned.
         * @member {events.IToolReturnedPayload|null|undefined} toolReturned
         * @memberof events.Event
         * @instance
         */
        Event.prototype.toolReturned = null;

        /**
         * Event nodeCreated.
         * @member {events.INodeCreatedPayload|null|undefined} nodeCreated
         * @memberof events.Event
         * @instance
         */
        Event.prototype.nodeCreated = null;

        /**
         * Event planReceived.
         * @member {events.IPlanReceivedPayload|null|undefined} planReceived
         * @memberof events.Event
         * @instance
         */
        Event.prototype.planReceived = null;

        /**
         * Event nodeAdded.
         * @member {events.INodeAddedPayload|null|undefined} nodeAdded
         * @memberof events.Event
         * @instance
         */
        Event.prototype.nodeAdded = null;

        /**
         * Event edgeAdded.
         * @member {events.IEdgeAddedPayload|null|undefined} edgeAdded
         * @memberof events.Event
         * @instance
         */
        Event.prototype.edgeAdded = null;

        /**
         * Event innerGraphBuilt.
         * @member {events.IInnerGraphBuiltPayload|null|undefined} innerGraphBuilt
         * @memberof events.Event
         * @instance
         */
        Event.prototype.innerGraphBuilt = null;

        /**
         * Event nodeResultAvailable.
         * @member {events.INodeResultAvailablePayload|null|undefined} nodeResultAvailable
         * @memberof events.Event
         * @instance
         */
        Event.prototype.nodeResultAvailable = null;

        /**
         * Event runStarted.
         * @member {events.IRunStartedPayload|null|undefined} runStarted
         * @memberof events.Event
         * @instance
         */
        Event.prototype.runStarted = null;

        /**
         * Event runFinished.
         * @member {events.IRunFinishedPayload|null|undefined} runFinished
         * @memberof events.Event
         * @instance
         */
        Event.prototype.runFinished = null;

        /**
         * Event runError.
         * @member {events.IRunErrorPayload|null|undefined} runError
         * @memberof events.Event
         * @instance
         */
        Event.prototype.runError = null;

        /**
         * Event unknownPayload.
         * @member {google.protobuf.IStruct|null|undefined} unknownPayload
         * @memberof events.Event
         * @instance
         */
        Event.prototype.unknownPayload = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Event.prototype, "_runId", {
            get: $util.oneOfGetter($oneOfFields = ["runId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Event payload.
         * @member {"stepStarted"|"stepFinished"|"nodeStatusChanged"|"llmCallStarted"|"llmCallCompleted"|"toolInvoked"|"toolReturned"|"nodeCreated"|"planReceived"|"nodeAdded"|"edgeAdded"|"innerGraphBuilt"|"nodeResultAvailable"|"runStarted"|"runFinished"|"runError"|"unknownPayload"|undefined} payload
         * @memberof events.Event
         * @instance
         */
        Object.defineProperty(Event.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["stepStarted", "stepFinished", "nodeStatusChanged", "llmCallStarted", "llmCallCompleted", "toolInvoked", "toolReturned", "nodeCreated", "planReceived", "nodeAdded", "edgeAdded", "innerGraphBuilt", "nodeResultAvailable", "runStarted", "runFinished", "runError", "unknownPayload"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Event instance using the specified properties.
         * @function create
         * @memberof events.Event
         * @static
         * @param {events.IEvent=} [properties] Properties to set
         * @returns {events.Event} Event instance
         */
        Event.create = function create(properties) {
            return new Event(properties);
        };

        /**
         * Encodes the specified Event message. Does not implicitly {@link events.Event.verify|verify} messages.
         * @function encode
         * @memberof events.Event
         * @static
         * @param {events.IEvent} message Event message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Event.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.eventType != null && Object.hasOwnProperty.call(message, "eventType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.eventType);
            if (message.runId != null && Object.hasOwnProperty.call(message, "runId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.runId);
            if (message.stepStarted != null && Object.hasOwnProperty.call(message, "stepStarted"))
                $root.events.StepStartedPayload.encode(message.stepStarted, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.stepFinished != null && Object.hasOwnProperty.call(message, "stepFinished"))
                $root.events.StepFinishedPayload.encode(message.stepFinished, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.nodeStatusChanged != null && Object.hasOwnProperty.call(message, "nodeStatusChanged"))
                $root.events.NodeStatusChangePayload.encode(message.nodeStatusChanged, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.llmCallStarted != null && Object.hasOwnProperty.call(message, "llmCallStarted"))
                $root.events.LlmCallStartedPayload.encode(message.llmCallStarted, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.llmCallCompleted != null && Object.hasOwnProperty.call(message, "llmCallCompleted"))
                $root.events.LlmCallCompletedPayload.encode(message.llmCallCompleted, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.toolInvoked != null && Object.hasOwnProperty.call(message, "toolInvoked"))
                $root.events.ToolInvokedPayload.encode(message.toolInvoked, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.toolReturned != null && Object.hasOwnProperty.call(message, "toolReturned"))
                $root.events.ToolReturnedPayload.encode(message.toolReturned, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.nodeCreated != null && Object.hasOwnProperty.call(message, "nodeCreated"))
                $root.events.NodeCreatedPayload.encode(message.nodeCreated, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.planReceived != null && Object.hasOwnProperty.call(message, "planReceived"))
                $root.events.PlanReceivedPayload.encode(message.planReceived, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.nodeAdded != null && Object.hasOwnProperty.call(message, "nodeAdded"))
                $root.events.NodeAddedPayload.encode(message.nodeAdded, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.edgeAdded != null && Object.hasOwnProperty.call(message, "edgeAdded"))
                $root.events.EdgeAddedPayload.encode(message.edgeAdded, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.innerGraphBuilt != null && Object.hasOwnProperty.call(message, "innerGraphBuilt"))
                $root.events.InnerGraphBuiltPayload.encode(message.innerGraphBuilt, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.nodeResultAvailable != null && Object.hasOwnProperty.call(message, "nodeResultAvailable"))
                $root.events.NodeResultAvailablePayload.encode(message.nodeResultAvailable, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.runStarted != null && Object.hasOwnProperty.call(message, "runStarted"))
                $root.events.RunStartedPayload.encode(message.runStarted, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.runFinished != null && Object.hasOwnProperty.call(message, "runFinished"))
                $root.events.RunFinishedPayload.encode(message.runFinished, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.runError != null && Object.hasOwnProperty.call(message, "runError"))
                $root.events.RunErrorPayload.encode(message.runError, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.unknownPayload != null && Object.hasOwnProperty.call(message, "unknownPayload"))
                $root.google.protobuf.Struct.encode(message.unknownPayload, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Event message, length delimited. Does not implicitly {@link events.Event.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.Event
         * @static
         * @param {events.IEvent} message Event message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Event.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Event message from the specified reader or buffer.
         * @function decode
         * @memberof events.Event
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.Event} Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Event.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.Event();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.eventId = reader.string();
                        break;
                    }
                case 2: {
                        message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.eventType = reader.int32();
                        break;
                    }
                case 4: {
                        message.runId = reader.string();
                        break;
                    }
                case 5: {
                        message.stepStarted = $root.events.StepStartedPayload.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.stepFinished = $root.events.StepFinishedPayload.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.nodeStatusChanged = $root.events.NodeStatusChangePayload.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.llmCallStarted = $root.events.LlmCallStartedPayload.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.llmCallCompleted = $root.events.LlmCallCompletedPayload.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.toolInvoked = $root.events.ToolInvokedPayload.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.toolReturned = $root.events.ToolReturnedPayload.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.nodeCreated = $root.events.NodeCreatedPayload.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.planReceived = $root.events.PlanReceivedPayload.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.nodeAdded = $root.events.NodeAddedPayload.decode(reader, reader.uint32());
                        break;
                    }
                case 15: {
                        message.edgeAdded = $root.events.EdgeAddedPayload.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.innerGraphBuilt = $root.events.InnerGraphBuiltPayload.decode(reader, reader.uint32());
                        break;
                    }
                case 17: {
                        message.nodeResultAvailable = $root.events.NodeResultAvailablePayload.decode(reader, reader.uint32());
                        break;
                    }
                case 18: {
                        message.runStarted = $root.events.RunStartedPayload.decode(reader, reader.uint32());
                        break;
                    }
                case 19: {
                        message.runFinished = $root.events.RunFinishedPayload.decode(reader, reader.uint32());
                        break;
                    }
                case 20: {
                        message.runError = $root.events.RunErrorPayload.decode(reader, reader.uint32());
                        break;
                    }
                case 100: {
                        message.unknownPayload = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Event message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.Event
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.Event} Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Event.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Event message.
         * @function verify
         * @memberof events.Event
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Event.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                let error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                if (error)
                    return "timestamp." + error;
            }
            if (message.eventType != null && message.hasOwnProperty("eventType"))
                switch (message.eventType) {
                default:
                    return "eventType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                    break;
                }
            if (message.runId != null && message.hasOwnProperty("runId")) {
                properties._runId = 1;
                if (!$util.isString(message.runId))
                    return "runId: string expected";
            }
            if (message.stepStarted != null && message.hasOwnProperty("stepStarted")) {
                properties.payload = 1;
                {
                    let error = $root.events.StepStartedPayload.verify(message.stepStarted);
                    if (error)
                        return "stepStarted." + error;
                }
            }
            if (message.stepFinished != null && message.hasOwnProperty("stepFinished")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.events.StepFinishedPayload.verify(message.stepFinished);
                    if (error)
                        return "stepFinished." + error;
                }
            }
            if (message.nodeStatusChanged != null && message.hasOwnProperty("nodeStatusChanged")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.events.NodeStatusChangePayload.verify(message.nodeStatusChanged);
                    if (error)
                        return "nodeStatusChanged." + error;
                }
            }
            if (message.llmCallStarted != null && message.hasOwnProperty("llmCallStarted")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.events.LlmCallStartedPayload.verify(message.llmCallStarted);
                    if (error)
                        return "llmCallStarted." + error;
                }
            }
            if (message.llmCallCompleted != null && message.hasOwnProperty("llmCallCompleted")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.events.LlmCallCompletedPayload.verify(message.llmCallCompleted);
                    if (error)
                        return "llmCallCompleted." + error;
                }
            }
            if (message.toolInvoked != null && message.hasOwnProperty("toolInvoked")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.events.ToolInvokedPayload.verify(message.toolInvoked);
                    if (error)
                        return "toolInvoked." + error;
                }
            }
            if (message.toolReturned != null && message.hasOwnProperty("toolReturned")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.events.ToolReturnedPayload.verify(message.toolReturned);
                    if (error)
                        return "toolReturned." + error;
                }
            }
            if (message.nodeCreated != null && message.hasOwnProperty("nodeCreated")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.events.NodeCreatedPayload.verify(message.nodeCreated);
                    if (error)
                        return "nodeCreated." + error;
                }
            }
            if (message.planReceived != null && message.hasOwnProperty("planReceived")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.events.PlanReceivedPayload.verify(message.planReceived);
                    if (error)
                        return "planReceived." + error;
                }
            }
            if (message.nodeAdded != null && message.hasOwnProperty("nodeAdded")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.events.NodeAddedPayload.verify(message.nodeAdded);
                    if (error)
                        return "nodeAdded." + error;
                }
            }
            if (message.edgeAdded != null && message.hasOwnProperty("edgeAdded")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.events.EdgeAddedPayload.verify(message.edgeAdded);
                    if (error)
                        return "edgeAdded." + error;
                }
            }
            if (message.innerGraphBuilt != null && message.hasOwnProperty("innerGraphBuilt")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.events.InnerGraphBuiltPayload.verify(message.innerGraphBuilt);
                    if (error)
                        return "innerGraphBuilt." + error;
                }
            }
            if (message.nodeResultAvailable != null && message.hasOwnProperty("nodeResultAvailable")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.events.NodeResultAvailablePayload.verify(message.nodeResultAvailable);
                    if (error)
                        return "nodeResultAvailable." + error;
                }
            }
            if (message.runStarted != null && message.hasOwnProperty("runStarted")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.events.RunStartedPayload.verify(message.runStarted);
                    if (error)
                        return "runStarted." + error;
                }
            }
            if (message.runFinished != null && message.hasOwnProperty("runFinished")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.events.RunFinishedPayload.verify(message.runFinished);
                    if (error)
                        return "runFinished." + error;
                }
            }
            if (message.runError != null && message.hasOwnProperty("runError")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.events.RunErrorPayload.verify(message.runError);
                    if (error)
                        return "runError." + error;
                }
            }
            if (message.unknownPayload != null && message.hasOwnProperty("unknownPayload")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.google.protobuf.Struct.verify(message.unknownPayload);
                    if (error)
                        return "unknownPayload." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Event message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.Event
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.Event} Event
         */
        Event.fromObject = function fromObject(object) {
            if (object instanceof $root.events.Event)
                return object;
            let message = new $root.events.Event();
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            if (object.timestamp != null) {
                if (typeof object.timestamp !== "object")
                    throw TypeError(".events.Event.timestamp: object expected");
                message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
            }
            switch (object.eventType) {
            default:
                if (typeof object.eventType === "number") {
                    message.eventType = object.eventType;
                    break;
                }
                break;
            case "EVENT_TYPE_UNSPECIFIED":
            case 0:
                message.eventType = 0;
                break;
            case "EVENT_TYPE_STEP_STARTED":
            case 1:
                message.eventType = 1;
                break;
            case "EVENT_TYPE_STEP_FINISHED":
            case 2:
                message.eventType = 2;
                break;
            case "EVENT_TYPE_NODE_STATUS_CHANGED":
            case 3:
                message.eventType = 3;
                break;
            case "EVENT_TYPE_LLM_CALL_STARTED":
            case 4:
                message.eventType = 4;
                break;
            case "EVENT_TYPE_LLM_CALL_COMPLETED":
            case 5:
                message.eventType = 5;
                break;
            case "EVENT_TYPE_TOOL_INVOKED":
            case 6:
                message.eventType = 6;
                break;
            case "EVENT_TYPE_TOOL_RETURNED":
            case 7:
                message.eventType = 7;
                break;
            case "EVENT_TYPE_NODE_CREATED":
            case 8:
                message.eventType = 8;
                break;
            case "EVENT_TYPE_PLAN_RECEIVED":
            case 9:
                message.eventType = 9;
                break;
            case "EVENT_TYPE_NODE_ADDED":
            case 10:
                message.eventType = 10;
                break;
            case "EVENT_TYPE_EDGE_ADDED":
            case 11:
                message.eventType = 11;
                break;
            case "EVENT_TYPE_INNER_GRAPH_BUILT":
            case 12:
                message.eventType = 12;
                break;
            case "EVENT_TYPE_NODE_RESULT_AVAILABLE":
            case 13:
                message.eventType = 13;
                break;
            case "EVENT_TYPE_RUN_STARTED":
            case 14:
                message.eventType = 14;
                break;
            case "EVENT_TYPE_RUN_FINISHED":
            case 15:
                message.eventType = 15;
                break;
            case "EVENT_TYPE_RUN_ERROR":
            case 16:
                message.eventType = 16;
                break;
            }
            if (object.runId != null)
                message.runId = String(object.runId);
            if (object.stepStarted != null) {
                if (typeof object.stepStarted !== "object")
                    throw TypeError(".events.Event.stepStarted: object expected");
                message.stepStarted = $root.events.StepStartedPayload.fromObject(object.stepStarted);
            }
            if (object.stepFinished != null) {
                if (typeof object.stepFinished !== "object")
                    throw TypeError(".events.Event.stepFinished: object expected");
                message.stepFinished = $root.events.StepFinishedPayload.fromObject(object.stepFinished);
            }
            if (object.nodeStatusChanged != null) {
                if (typeof object.nodeStatusChanged !== "object")
                    throw TypeError(".events.Event.nodeStatusChanged: object expected");
                message.nodeStatusChanged = $root.events.NodeStatusChangePayload.fromObject(object.nodeStatusChanged);
            }
            if (object.llmCallStarted != null) {
                if (typeof object.llmCallStarted !== "object")
                    throw TypeError(".events.Event.llmCallStarted: object expected");
                message.llmCallStarted = $root.events.LlmCallStartedPayload.fromObject(object.llmCallStarted);
            }
            if (object.llmCallCompleted != null) {
                if (typeof object.llmCallCompleted !== "object")
                    throw TypeError(".events.Event.llmCallCompleted: object expected");
                message.llmCallCompleted = $root.events.LlmCallCompletedPayload.fromObject(object.llmCallCompleted);
            }
            if (object.toolInvoked != null) {
                if (typeof object.toolInvoked !== "object")
                    throw TypeError(".events.Event.toolInvoked: object expected");
                message.toolInvoked = $root.events.ToolInvokedPayload.fromObject(object.toolInvoked);
            }
            if (object.toolReturned != null) {
                if (typeof object.toolReturned !== "object")
                    throw TypeError(".events.Event.toolReturned: object expected");
                message.toolReturned = $root.events.ToolReturnedPayload.fromObject(object.toolReturned);
            }
            if (object.nodeCreated != null) {
                if (typeof object.nodeCreated !== "object")
                    throw TypeError(".events.Event.nodeCreated: object expected");
                message.nodeCreated = $root.events.NodeCreatedPayload.fromObject(object.nodeCreated);
            }
            if (object.planReceived != null) {
                if (typeof object.planReceived !== "object")
                    throw TypeError(".events.Event.planReceived: object expected");
                message.planReceived = $root.events.PlanReceivedPayload.fromObject(object.planReceived);
            }
            if (object.nodeAdded != null) {
                if (typeof object.nodeAdded !== "object")
                    throw TypeError(".events.Event.nodeAdded: object expected");
                message.nodeAdded = $root.events.NodeAddedPayload.fromObject(object.nodeAdded);
            }
            if (object.edgeAdded != null) {
                if (typeof object.edgeAdded !== "object")
                    throw TypeError(".events.Event.edgeAdded: object expected");
                message.edgeAdded = $root.events.EdgeAddedPayload.fromObject(object.edgeAdded);
            }
            if (object.innerGraphBuilt != null) {
                if (typeof object.innerGraphBuilt !== "object")
                    throw TypeError(".events.Event.innerGraphBuilt: object expected");
                message.innerGraphBuilt = $root.events.InnerGraphBuiltPayload.fromObject(object.innerGraphBuilt);
            }
            if (object.nodeResultAvailable != null) {
                if (typeof object.nodeResultAvailable !== "object")
                    throw TypeError(".events.Event.nodeResultAvailable: object expected");
                message.nodeResultAvailable = $root.events.NodeResultAvailablePayload.fromObject(object.nodeResultAvailable);
            }
            if (object.runStarted != null) {
                if (typeof object.runStarted !== "object")
                    throw TypeError(".events.Event.runStarted: object expected");
                message.runStarted = $root.events.RunStartedPayload.fromObject(object.runStarted);
            }
            if (object.runFinished != null) {
                if (typeof object.runFinished !== "object")
                    throw TypeError(".events.Event.runFinished: object expected");
                message.runFinished = $root.events.RunFinishedPayload.fromObject(object.runFinished);
            }
            if (object.runError != null) {
                if (typeof object.runError !== "object")
                    throw TypeError(".events.Event.runError: object expected");
                message.runError = $root.events.RunErrorPayload.fromObject(object.runError);
            }
            if (object.unknownPayload != null) {
                if (typeof object.unknownPayload !== "object")
                    throw TypeError(".events.Event.unknownPayload: object expected");
                message.unknownPayload = $root.google.protobuf.Struct.fromObject(object.unknownPayload);
            }
            return message;
        };

        /**
         * Creates a plain object from an Event message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.Event
         * @static
         * @param {events.Event} message Event
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Event.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.eventId = "";
                object.timestamp = null;
                object.eventType = options.enums === String ? "EVENT_TYPE_UNSPECIFIED" : 0;
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
            if (message.eventType != null && message.hasOwnProperty("eventType"))
                object.eventType = options.enums === String ? $root.events.EventType[message.eventType] === undefined ? message.eventType : $root.events.EventType[message.eventType] : message.eventType;
            if (message.runId != null && message.hasOwnProperty("runId")) {
                object.runId = message.runId;
                if (options.oneofs)
                    object._runId = "runId";
            }
            if (message.stepStarted != null && message.hasOwnProperty("stepStarted")) {
                object.stepStarted = $root.events.StepStartedPayload.toObject(message.stepStarted, options);
                if (options.oneofs)
                    object.payload = "stepStarted";
            }
            if (message.stepFinished != null && message.hasOwnProperty("stepFinished")) {
                object.stepFinished = $root.events.StepFinishedPayload.toObject(message.stepFinished, options);
                if (options.oneofs)
                    object.payload = "stepFinished";
            }
            if (message.nodeStatusChanged != null && message.hasOwnProperty("nodeStatusChanged")) {
                object.nodeStatusChanged = $root.events.NodeStatusChangePayload.toObject(message.nodeStatusChanged, options);
                if (options.oneofs)
                    object.payload = "nodeStatusChanged";
            }
            if (message.llmCallStarted != null && message.hasOwnProperty("llmCallStarted")) {
                object.llmCallStarted = $root.events.LlmCallStartedPayload.toObject(message.llmCallStarted, options);
                if (options.oneofs)
                    object.payload = "llmCallStarted";
            }
            if (message.llmCallCompleted != null && message.hasOwnProperty("llmCallCompleted")) {
                object.llmCallCompleted = $root.events.LlmCallCompletedPayload.toObject(message.llmCallCompleted, options);
                if (options.oneofs)
                    object.payload = "llmCallCompleted";
            }
            if (message.toolInvoked != null && message.hasOwnProperty("toolInvoked")) {
                object.toolInvoked = $root.events.ToolInvokedPayload.toObject(message.toolInvoked, options);
                if (options.oneofs)
                    object.payload = "toolInvoked";
            }
            if (message.toolReturned != null && message.hasOwnProperty("toolReturned")) {
                object.toolReturned = $root.events.ToolReturnedPayload.toObject(message.toolReturned, options);
                if (options.oneofs)
                    object.payload = "toolReturned";
            }
            if (message.nodeCreated != null && message.hasOwnProperty("nodeCreated")) {
                object.nodeCreated = $root.events.NodeCreatedPayload.toObject(message.nodeCreated, options);
                if (options.oneofs)
                    object.payload = "nodeCreated";
            }
            if (message.planReceived != null && message.hasOwnProperty("planReceived")) {
                object.planReceived = $root.events.PlanReceivedPayload.toObject(message.planReceived, options);
                if (options.oneofs)
                    object.payload = "planReceived";
            }
            if (message.nodeAdded != null && message.hasOwnProperty("nodeAdded")) {
                object.nodeAdded = $root.events.NodeAddedPayload.toObject(message.nodeAdded, options);
                if (options.oneofs)
                    object.payload = "nodeAdded";
            }
            if (message.edgeAdded != null && message.hasOwnProperty("edgeAdded")) {
                object.edgeAdded = $root.events.EdgeAddedPayload.toObject(message.edgeAdded, options);
                if (options.oneofs)
                    object.payload = "edgeAdded";
            }
            if (message.innerGraphBuilt != null && message.hasOwnProperty("innerGraphBuilt")) {
                object.innerGraphBuilt = $root.events.InnerGraphBuiltPayload.toObject(message.innerGraphBuilt, options);
                if (options.oneofs)
                    object.payload = "innerGraphBuilt";
            }
            if (message.nodeResultAvailable != null && message.hasOwnProperty("nodeResultAvailable")) {
                object.nodeResultAvailable = $root.events.NodeResultAvailablePayload.toObject(message.nodeResultAvailable, options);
                if (options.oneofs)
                    object.payload = "nodeResultAvailable";
            }
            if (message.runStarted != null && message.hasOwnProperty("runStarted")) {
                object.runStarted = $root.events.RunStartedPayload.toObject(message.runStarted, options);
                if (options.oneofs)
                    object.payload = "runStarted";
            }
            if (message.runFinished != null && message.hasOwnProperty("runFinished")) {
                object.runFinished = $root.events.RunFinishedPayload.toObject(message.runFinished, options);
                if (options.oneofs)
                    object.payload = "runFinished";
            }
            if (message.runError != null && message.hasOwnProperty("runError")) {
                object.runError = $root.events.RunErrorPayload.toObject(message.runError, options);
                if (options.oneofs)
                    object.payload = "runError";
            }
            if (message.unknownPayload != null && message.hasOwnProperty("unknownPayload")) {
                object.unknownPayload = $root.google.protobuf.Struct.toObject(message.unknownPayload, options);
                if (options.oneofs)
                    object.payload = "unknownPayload";
            }
            return object;
        };

        /**
         * Converts this Event to JSON.
         * @function toJSON
         * @memberof events.Event
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Event.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Event
         * @function getTypeUrl
         * @memberof events.Event
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Event.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/events.Event";
        };

        return Event;
    })();

    events.EventsResponse = (function() {

        /**
         * Properties of an EventsResponse.
         * @memberof events
         * @interface IEventsResponse
         * @property {events.ConnectionStatus|null} [status] EventsResponse status
         * @property {Array.<events.IEvent>|null} [events] EventsResponse events
         */

        /**
         * Constructs a new EventsResponse.
         * @memberof events
         * @classdesc Represents an EventsResponse.
         * @implements IEventsResponse
         * @constructor
         * @param {events.IEventsResponse=} [properties] Properties to set
         */
        function EventsResponse(properties) {
            this.events = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EventsResponse status.
         * @member {events.ConnectionStatus} status
         * @memberof events.EventsResponse
         * @instance
         */
        EventsResponse.prototype.status = 0;

        /**
         * EventsResponse events.
         * @member {Array.<events.IEvent>} events
         * @memberof events.EventsResponse
         * @instance
         */
        EventsResponse.prototype.events = $util.emptyArray;

        /**
         * Creates a new EventsResponse instance using the specified properties.
         * @function create
         * @memberof events.EventsResponse
         * @static
         * @param {events.IEventsResponse=} [properties] Properties to set
         * @returns {events.EventsResponse} EventsResponse instance
         */
        EventsResponse.create = function create(properties) {
            return new EventsResponse(properties);
        };

        /**
         * Encodes the specified EventsResponse message. Does not implicitly {@link events.EventsResponse.verify|verify} messages.
         * @function encode
         * @memberof events.EventsResponse
         * @static
         * @param {events.IEventsResponse} message EventsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.events != null && message.events.length)
                for (let i = 0; i < message.events.length; ++i)
                    $root.events.Event.encode(message.events[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EventsResponse message, length delimited. Does not implicitly {@link events.EventsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof events.EventsResponse
         * @static
         * @param {events.IEventsResponse} message EventsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EventsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof events.EventsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {events.EventsResponse} EventsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.events.EventsResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.events && message.events.length))
                            message.events = [];
                        message.events.push($root.events.Event.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EventsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof events.EventsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {events.EventsResponse} EventsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EventsResponse message.
         * @function verify
         * @memberof events.EventsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EventsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.events != null && message.hasOwnProperty("events")) {
                if (!Array.isArray(message.events))
                    return "events: array expected";
                for (let i = 0; i < message.events.length; ++i) {
                    let error = $root.events.Event.verify(message.events[i]);
                    if (error)
                        return "events." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EventsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof events.EventsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {events.EventsResponse} EventsResponse
         */
        EventsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.events.EventsResponse)
                return object;
            let message = new $root.events.EventsResponse();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "CONNECTION_STATUS_UNSPECIFIED":
            case 0:
                message.status = 0;
                break;
            case "CONNECTION_STATUS_CONNECTING":
            case 1:
                message.status = 1;
                break;
            case "CONNECTION_STATUS_CONNECTED":
            case 2:
                message.status = 2;
                break;
            case "CONNECTION_STATUS_DISCONNECTED":
            case 3:
                message.status = 3;
                break;
            }
            if (object.events) {
                if (!Array.isArray(object.events))
                    throw TypeError(".events.EventsResponse.events: array expected");
                message.events = [];
                for (let i = 0; i < object.events.length; ++i) {
                    if (typeof object.events[i] !== "object")
                        throw TypeError(".events.EventsResponse.events: object expected");
                    message.events[i] = $root.events.Event.fromObject(object.events[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an EventsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof events.EventsResponse
         * @static
         * @param {events.EventsResponse} message EventsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EventsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.events = [];
            if (options.defaults)
                object.status = options.enums === String ? "CONNECTION_STATUS_UNSPECIFIED" : 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.events.ConnectionStatus[message.status] === undefined ? message.status : $root.events.ConnectionStatus[message.status] : message.status;
            if (message.events && message.events.length) {
                object.events = [];
                for (let j = 0; j < message.events.length; ++j)
                    object.events[j] = $root.events.Event.toObject(message.events[j], options);
            }
            return object;
        };

        /**
         * Converts this EventsResponse to JSON.
         * @function toJSON
         * @memberof events.EventsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EventsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EventsResponse
         * @function getTypeUrl
         * @memberof events.EventsResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EventsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/events.EventsResponse";
        };

        return EventsResponse;
    })();

    return events;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Struct = (function() {

            /**
             * Properties of a Struct.
             * @memberof google.protobuf
             * @interface IStruct
             * @property {Object.<string,google.protobuf.IValue>|null} [fields] Struct fields
             */

            /**
             * Constructs a new Struct.
             * @memberof google.protobuf
             * @classdesc Represents a Struct.
             * @implements IStruct
             * @constructor
             * @param {google.protobuf.IStruct=} [properties] Properties to set
             */
            function Struct(properties) {
                this.fields = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Struct fields.
             * @member {Object.<string,google.protobuf.IValue>} fields
             * @memberof google.protobuf.Struct
             * @instance
             */
            Struct.prototype.fields = $util.emptyObject;

            /**
             * Creates a new Struct instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct=} [properties] Properties to set
             * @returns {google.protobuf.Struct} Struct instance
             */
            Struct.create = function create(properties) {
                return new Struct(properties);
            };

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct} message Struct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Struct.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fields != null && Object.hasOwnProperty.call(message, "fields"))
                    for (let keys = Object.keys(message.fields), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.google.protobuf.Value.encode(message.fields[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct} message Struct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Struct.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Struct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Struct} Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Struct.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Struct(), key, value;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (message.fields === $util.emptyObject)
                                message.fields = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.google.protobuf.Value.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.fields[key] = value;
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Struct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Struct} Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Struct.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Struct message.
             * @function verify
             * @memberof google.protobuf.Struct
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Struct.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.fields != null && message.hasOwnProperty("fields")) {
                    if (!$util.isObject(message.fields))
                        return "fields: object expected";
                    let key = Object.keys(message.fields);
                    for (let i = 0; i < key.length; ++i) {
                        let error = $root.google.protobuf.Value.verify(message.fields[key[i]]);
                        if (error)
                            return "fields." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Struct
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Struct} Struct
             */
            Struct.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Struct)
                    return object;
                let message = new $root.google.protobuf.Struct();
                if (object.fields) {
                    if (typeof object.fields !== "object")
                        throw TypeError(".google.protobuf.Struct.fields: object expected");
                    message.fields = {};
                    for (let keys = Object.keys(object.fields), i = 0; i < keys.length; ++i) {
                        if (typeof object.fields[keys[i]] !== "object")
                            throw TypeError(".google.protobuf.Struct.fields: object expected");
                        message.fields[keys[i]] = $root.google.protobuf.Value.fromObject(object.fields[keys[i]]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.Struct} message Struct
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Struct.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.objects || options.defaults)
                    object.fields = {};
                let keys2;
                if (message.fields && (keys2 = Object.keys(message.fields)).length) {
                    object.fields = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.fields[keys2[j]] = $root.google.protobuf.Value.toObject(message.fields[keys2[j]], options);
                }
                return object;
            };

            /**
             * Converts this Struct to JSON.
             * @function toJSON
             * @memberof google.protobuf.Struct
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Struct.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Struct
             * @function getTypeUrl
             * @memberof google.protobuf.Struct
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Struct.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Struct";
            };

            return Struct;
        })();

        protobuf.Value = (function() {

            /**
             * Properties of a Value.
             * @memberof google.protobuf
             * @interface IValue
             * @property {google.protobuf.NullValue|null} [nullValue] Value nullValue
             * @property {number|null} [numberValue] Value numberValue
             * @property {string|null} [stringValue] Value stringValue
             * @property {boolean|null} [boolValue] Value boolValue
             * @property {google.protobuf.IStruct|null} [structValue] Value structValue
             * @property {google.protobuf.IListValue|null} [listValue] Value listValue
             */

            /**
             * Constructs a new Value.
             * @memberof google.protobuf
             * @classdesc Represents a Value.
             * @implements IValue
             * @constructor
             * @param {google.protobuf.IValue=} [properties] Properties to set
             */
            function Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Value nullValue.
             * @member {google.protobuf.NullValue|null|undefined} nullValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.nullValue = null;

            /**
             * Value numberValue.
             * @member {number|null|undefined} numberValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.numberValue = null;

            /**
             * Value stringValue.
             * @member {string|null|undefined} stringValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.stringValue = null;

            /**
             * Value boolValue.
             * @member {boolean|null|undefined} boolValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.boolValue = null;

            /**
             * Value structValue.
             * @member {google.protobuf.IStruct|null|undefined} structValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.structValue = null;

            /**
             * Value listValue.
             * @member {google.protobuf.IListValue|null|undefined} listValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.listValue = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Value kind.
             * @member {"nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue"|undefined} kind
             * @memberof google.protobuf.Value
             * @instance
             */
            Object.defineProperty(Value.prototype, "kind", {
                get: $util.oneOfGetter($oneOfFields = ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue=} [properties] Properties to set
             * @returns {google.protobuf.Value} Value instance
             */
            Value.create = function create(properties) {
                return new Value(properties);
            };

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nullValue != null && Object.hasOwnProperty.call(message, "nullValue"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nullValue);
                if (message.numberValue != null && Object.hasOwnProperty.call(message, "numberValue"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.numberValue);
                if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.stringValue);
                if (message.boolValue != null && Object.hasOwnProperty.call(message, "boolValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.boolValue);
                if (message.structValue != null && Object.hasOwnProperty.call(message, "structValue"))
                    $root.google.protobuf.Struct.encode(message.structValue, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.listValue != null && Object.hasOwnProperty.call(message, "listValue"))
                    $root.google.protobuf.ListValue.encode(message.listValue, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.nullValue = reader.int32();
                            break;
                        }
                    case 2: {
                            message.numberValue = reader.double();
                            break;
                        }
                    case 3: {
                            message.stringValue = reader.string();
                            break;
                        }
                    case 4: {
                            message.boolValue = reader.bool();
                            break;
                        }
                    case 5: {
                            message.structValue = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            message.listValue = $root.google.protobuf.ListValue.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Value message.
             * @function verify
             * @memberof google.protobuf.Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
                    properties.kind = 1;
                    switch (message.nullValue) {
                    default:
                        return "nullValue: enum value expected";
                    case 0:
                        break;
                    }
                }
                if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (typeof message.numberValue !== "number")
                        return "numberValue: number expected";
                }
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (!$util.isString(message.stringValue))
                        return "stringValue: string expected";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (typeof message.boolValue !== "boolean")
                        return "boolValue: boolean expected";
                }
                if (message.structValue != null && message.hasOwnProperty("structValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        let error = $root.google.protobuf.Struct.verify(message.structValue);
                        if (error)
                            return "structValue." + error;
                    }
                }
                if (message.listValue != null && message.hasOwnProperty("listValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        let error = $root.google.protobuf.ListValue.verify(message.listValue);
                        if (error)
                            return "listValue." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Value} Value
             */
            Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Value)
                    return object;
                let message = new $root.google.protobuf.Value();
                switch (object.nullValue) {
                default:
                    if (typeof object.nullValue === "number") {
                        message.nullValue = object.nullValue;
                        break;
                    }
                    break;
                case "NULL_VALUE":
                case 0:
                    message.nullValue = 0;
                    break;
                }
                if (object.numberValue != null)
                    message.numberValue = Number(object.numberValue);
                if (object.stringValue != null)
                    message.stringValue = String(object.stringValue);
                if (object.boolValue != null)
                    message.boolValue = Boolean(object.boolValue);
                if (object.structValue != null) {
                    if (typeof object.structValue !== "object")
                        throw TypeError(".google.protobuf.Value.structValue: object expected");
                    message.structValue = $root.google.protobuf.Struct.fromObject(object.structValue);
                }
                if (object.listValue != null) {
                    if (typeof object.listValue !== "object")
                        throw TypeError(".google.protobuf.Value.listValue: object expected");
                    message.listValue = $root.google.protobuf.ListValue.fromObject(object.listValue);
                }
                return message;
            };

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.Value} message Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
                    object.nullValue = options.enums === String ? $root.google.protobuf.NullValue[message.nullValue] === undefined ? message.nullValue : $root.google.protobuf.NullValue[message.nullValue] : message.nullValue;
                    if (options.oneofs)
                        object.kind = "nullValue";
                }
                if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                    object.numberValue = options.json && !isFinite(message.numberValue) ? String(message.numberValue) : message.numberValue;
                    if (options.oneofs)
                        object.kind = "numberValue";
                }
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    object.stringValue = message.stringValue;
                    if (options.oneofs)
                        object.kind = "stringValue";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    object.boolValue = message.boolValue;
                    if (options.oneofs)
                        object.kind = "boolValue";
                }
                if (message.structValue != null && message.hasOwnProperty("structValue")) {
                    object.structValue = $root.google.protobuf.Struct.toObject(message.structValue, options);
                    if (options.oneofs)
                        object.kind = "structValue";
                }
                if (message.listValue != null && message.hasOwnProperty("listValue")) {
                    object.listValue = $root.google.protobuf.ListValue.toObject(message.listValue, options);
                    if (options.oneofs)
                        object.kind = "listValue";
                }
                return object;
            };

            /**
             * Converts this Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Value
             * @function getTypeUrl
             * @memberof google.protobuf.Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Value";
            };

            return Value;
        })();

        /**
         * NullValue enum.
         * @name google.protobuf.NullValue
         * @enum {number}
         * @property {number} NULL_VALUE=0 NULL_VALUE value
         */
        protobuf.NullValue = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NULL_VALUE"] = 0;
            return values;
        })();

        protobuf.ListValue = (function() {

            /**
             * Properties of a ListValue.
             * @memberof google.protobuf
             * @interface IListValue
             * @property {Array.<google.protobuf.IValue>|null} [values] ListValue values
             */

            /**
             * Constructs a new ListValue.
             * @memberof google.protobuf
             * @classdesc Represents a ListValue.
             * @implements IListValue
             * @constructor
             * @param {google.protobuf.IListValue=} [properties] Properties to set
             */
            function ListValue(properties) {
                this.values = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListValue values.
             * @member {Array.<google.protobuf.IValue>} values
             * @memberof google.protobuf.ListValue
             * @instance
             */
            ListValue.prototype.values = $util.emptyArray;

            /**
             * Creates a new ListValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue=} [properties] Properties to set
             * @returns {google.protobuf.ListValue} ListValue instance
             */
            ListValue.create = function create(properties) {
                return new ListValue(properties);
            };

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue} message ListValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.values != null && message.values.length)
                    for (let i = 0; i < message.values.length; ++i)
                        $root.google.protobuf.Value.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue} message ListValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ListValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ListValue} ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ListValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.values && message.values.length))
                                message.values = [];
                            message.values.push($root.google.protobuf.Value.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ListValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ListValue} ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListValue message.
             * @function verify
             * @memberof google.protobuf.ListValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.values != null && message.hasOwnProperty("values")) {
                    if (!Array.isArray(message.values))
                        return "values: array expected";
                    for (let i = 0; i < message.values.length; ++i) {
                        let error = $root.google.protobuf.Value.verify(message.values[i]);
                        if (error)
                            return "values." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ListValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ListValue} ListValue
             */
            ListValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ListValue)
                    return object;
                let message = new $root.google.protobuf.ListValue();
                if (object.values) {
                    if (!Array.isArray(object.values))
                        throw TypeError(".google.protobuf.ListValue.values: array expected");
                    message.values = [];
                    for (let i = 0; i < object.values.length; ++i) {
                        if (typeof object.values[i] !== "object")
                            throw TypeError(".google.protobuf.ListValue.values: object expected");
                        message.values[i] = $root.google.protobuf.Value.fromObject(object.values[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.ListValue} message ListValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.values = [];
                if (message.values && message.values.length) {
                    object.values = [];
                    for (let j = 0; j < message.values.length; ++j)
                        object.values[j] = $root.google.protobuf.Value.toObject(message.values[j], options);
                }
                return object;
            };

            /**
             * Converts this ListValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.ListValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ListValue
             * @function getTypeUrl
             * @memberof google.protobuf.ListValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ListValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.ListValue";
            };

            return ListValue;
        })();

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Timestamp";
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
