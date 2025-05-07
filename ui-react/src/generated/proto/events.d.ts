import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace events. */
export namespace events {

    /** Properties of a LlmMessage. */
    interface ILlmMessage {

        /** LlmMessage role */
        role?: (string|null);

        /** LlmMessage content */
        content?: (string|null);
    }

    /** Represents a LlmMessage. */
    class LlmMessage implements ILlmMessage {

        /**
         * Constructs a new LlmMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.ILlmMessage);

        /** LlmMessage role. */
        public role: string;

        /** LlmMessage content. */
        public content: string;

        /**
         * Creates a new LlmMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LlmMessage instance
         */
        public static create(properties?: events.ILlmMessage): events.LlmMessage;

        /**
         * Encodes the specified LlmMessage message. Does not implicitly {@link events.LlmMessage.verify|verify} messages.
         * @param message LlmMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.ILlmMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LlmMessage message, length delimited. Does not implicitly {@link events.LlmMessage.verify|verify} messages.
         * @param message LlmMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.ILlmMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LlmMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LlmMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.LlmMessage;

        /**
         * Decodes a LlmMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LlmMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.LlmMessage;

        /**
         * Verifies a LlmMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LlmMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LlmMessage
         */
        public static fromObject(object: { [k: string]: any }): events.LlmMessage;

        /**
         * Creates a plain object from a LlmMessage message. Also converts values to other types if specified.
         * @param message LlmMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.LlmMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LlmMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LlmMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StepStartedPayload. */
    interface IStepStartedPayload {

        /** StepStartedPayload step */
        step?: (number|null);

        /** StepStartedPayload nodeId */
        nodeId?: (string|null);

        /** StepStartedPayload nodeGoal */
        nodeGoal?: (string|null);

        /** StepStartedPayload rootId */
        rootId?: (string|null);
    }

    /** Represents a StepStartedPayload. */
    class StepStartedPayload implements IStepStartedPayload {

        /**
         * Constructs a new StepStartedPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IStepStartedPayload);

        /** StepStartedPayload step. */
        public step: number;

        /** StepStartedPayload nodeId. */
        public nodeId: string;

        /** StepStartedPayload nodeGoal. */
        public nodeGoal: string;

        /** StepStartedPayload rootId. */
        public rootId: string;

        /**
         * Creates a new StepStartedPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StepStartedPayload instance
         */
        public static create(properties?: events.IStepStartedPayload): events.StepStartedPayload;

        /**
         * Encodes the specified StepStartedPayload message. Does not implicitly {@link events.StepStartedPayload.verify|verify} messages.
         * @param message StepStartedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IStepStartedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StepStartedPayload message, length delimited. Does not implicitly {@link events.StepStartedPayload.verify|verify} messages.
         * @param message StepStartedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IStepStartedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StepStartedPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StepStartedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.StepStartedPayload;

        /**
         * Decodes a StepStartedPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StepStartedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.StepStartedPayload;

        /**
         * Verifies a StepStartedPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StepStartedPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StepStartedPayload
         */
        public static fromObject(object: { [k: string]: any }): events.StepStartedPayload;

        /**
         * Creates a plain object from a StepStartedPayload message. Also converts values to other types if specified.
         * @param message StepStartedPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.StepStartedPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StepStartedPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StepStartedPayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StepFinishedPayload. */
    interface IStepFinishedPayload {

        /** StepFinishedPayload step */
        step?: (number|null);

        /** StepFinishedPayload nodeId */
        nodeId?: (string|null);

        /** StepFinishedPayload actionName */
        actionName?: (string|null);

        /** StepFinishedPayload statusAfter */
        statusAfter?: (string|null);

        /** StepFinishedPayload durationSeconds */
        durationSeconds?: (number|null);
    }

    /** Represents a StepFinishedPayload. */
    class StepFinishedPayload implements IStepFinishedPayload {

        /**
         * Constructs a new StepFinishedPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IStepFinishedPayload);

        /** StepFinishedPayload step. */
        public step: number;

        /** StepFinishedPayload nodeId. */
        public nodeId: string;

        /** StepFinishedPayload actionName. */
        public actionName: string;

        /** StepFinishedPayload statusAfter. */
        public statusAfter: string;

        /** StepFinishedPayload durationSeconds. */
        public durationSeconds: number;

        /**
         * Creates a new StepFinishedPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StepFinishedPayload instance
         */
        public static create(properties?: events.IStepFinishedPayload): events.StepFinishedPayload;

        /**
         * Encodes the specified StepFinishedPayload message. Does not implicitly {@link events.StepFinishedPayload.verify|verify} messages.
         * @param message StepFinishedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IStepFinishedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StepFinishedPayload message, length delimited. Does not implicitly {@link events.StepFinishedPayload.verify|verify} messages.
         * @param message StepFinishedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IStepFinishedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StepFinishedPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StepFinishedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.StepFinishedPayload;

        /**
         * Decodes a StepFinishedPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StepFinishedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.StepFinishedPayload;

        /**
         * Verifies a StepFinishedPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StepFinishedPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StepFinishedPayload
         */
        public static fromObject(object: { [k: string]: any }): events.StepFinishedPayload;

        /**
         * Creates a plain object from a StepFinishedPayload message. Also converts values to other types if specified.
         * @param message StepFinishedPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.StepFinishedPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StepFinishedPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StepFinishedPayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NodeStatusChangePayload. */
    interface INodeStatusChangePayload {

        /** NodeStatusChangePayload nodeId */
        nodeId?: (string|null);

        /** NodeStatusChangePayload nodeGoal */
        nodeGoal?: (string|null);

        /** NodeStatusChangePayload oldStatus */
        oldStatus?: (string|null);

        /** NodeStatusChangePayload newStatus */
        newStatus?: (string|null);

        /** NodeStatusChangePayload step */
        step?: (number|null);
    }

    /** Represents a NodeStatusChangePayload. */
    class NodeStatusChangePayload implements INodeStatusChangePayload {

        /**
         * Constructs a new NodeStatusChangePayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.INodeStatusChangePayload);

        /** NodeStatusChangePayload nodeId. */
        public nodeId: string;

        /** NodeStatusChangePayload nodeGoal. */
        public nodeGoal: string;

        /** NodeStatusChangePayload oldStatus. */
        public oldStatus: string;

        /** NodeStatusChangePayload newStatus. */
        public newStatus: string;

        /** NodeStatusChangePayload step. */
        public step?: (number|null);

        /**
         * Creates a new NodeStatusChangePayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeStatusChangePayload instance
         */
        public static create(properties?: events.INodeStatusChangePayload): events.NodeStatusChangePayload;

        /**
         * Encodes the specified NodeStatusChangePayload message. Does not implicitly {@link events.NodeStatusChangePayload.verify|verify} messages.
         * @param message NodeStatusChangePayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.INodeStatusChangePayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeStatusChangePayload message, length delimited. Does not implicitly {@link events.NodeStatusChangePayload.verify|verify} messages.
         * @param message NodeStatusChangePayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.INodeStatusChangePayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeStatusChangePayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeStatusChangePayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.NodeStatusChangePayload;

        /**
         * Decodes a NodeStatusChangePayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeStatusChangePayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.NodeStatusChangePayload;

        /**
         * Verifies a NodeStatusChangePayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeStatusChangePayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeStatusChangePayload
         */
        public static fromObject(object: { [k: string]: any }): events.NodeStatusChangePayload;

        /**
         * Creates a plain object from a NodeStatusChangePayload message. Also converts values to other types if specified.
         * @param message NodeStatusChangePayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.NodeStatusChangePayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeStatusChangePayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NodeStatusChangePayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TokenUsage. */
    interface ITokenUsage {

        /** TokenUsage promptTokens */
        promptTokens?: (number|null);

        /** TokenUsage completionTokens */
        completionTokens?: (number|null);

        /** TokenUsage error */
        error?: (string|null);

        /** TokenUsage nodeId */
        nodeId?: (string|null);
    }

    /** Represents a TokenUsage. */
    class TokenUsage implements ITokenUsage {

        /**
         * Constructs a new TokenUsage.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.ITokenUsage);

        /** TokenUsage promptTokens. */
        public promptTokens: number;

        /** TokenUsage completionTokens. */
        public completionTokens: number;

        /** TokenUsage error. */
        public error?: (string|null);

        /** TokenUsage nodeId. */
        public nodeId?: (string|null);

        /**
         * Creates a new TokenUsage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenUsage instance
         */
        public static create(properties?: events.ITokenUsage): events.TokenUsage;

        /**
         * Encodes the specified TokenUsage message. Does not implicitly {@link events.TokenUsage.verify|verify} messages.
         * @param message TokenUsage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.ITokenUsage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TokenUsage message, length delimited. Does not implicitly {@link events.TokenUsage.verify|verify} messages.
         * @param message TokenUsage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.ITokenUsage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenUsage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenUsage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.TokenUsage;

        /**
         * Decodes a TokenUsage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TokenUsage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.TokenUsage;

        /**
         * Verifies a TokenUsage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TokenUsage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TokenUsage
         */
        public static fromObject(object: { [k: string]: any }): events.TokenUsage;

        /**
         * Creates a plain object from a TokenUsage message. Also converts values to other types if specified.
         * @param message TokenUsage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.TokenUsage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TokenUsage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TokenUsage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LlmCallStartedPayload. */
    interface ILlmCallStartedPayload {

        /** LlmCallStartedPayload agentClass */
        agentClass?: (string|null);

        /** LlmCallStartedPayload model */
        model?: (string|null);

        /** LlmCallStartedPayload prompt */
        prompt?: (events.ILlmMessage[]|null);

        /** LlmCallStartedPayload promptPreview */
        promptPreview?: (string|null);

        /** LlmCallStartedPayload step */
        step?: (number|null);

        /** LlmCallStartedPayload nodeId */
        nodeId?: (string|null);

        /** LlmCallStartedPayload actionName */
        actionName?: (string|null);

        /** LlmCallStartedPayload callId */
        callId?: (string|null);
    }

    /** Represents a LlmCallStartedPayload. */
    class LlmCallStartedPayload implements ILlmCallStartedPayload {

        /**
         * Constructs a new LlmCallStartedPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.ILlmCallStartedPayload);

        /** LlmCallStartedPayload agentClass. */
        public agentClass: string;

        /** LlmCallStartedPayload model. */
        public model: string;

        /** LlmCallStartedPayload prompt. */
        public prompt: events.ILlmMessage[];

        /** LlmCallStartedPayload promptPreview. */
        public promptPreview: string;

        /** LlmCallStartedPayload step. */
        public step?: (number|null);

        /** LlmCallStartedPayload nodeId. */
        public nodeId?: (string|null);

        /** LlmCallStartedPayload actionName. */
        public actionName?: (string|null);

        /** LlmCallStartedPayload callId. */
        public callId: string;

        /**
         * Creates a new LlmCallStartedPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LlmCallStartedPayload instance
         */
        public static create(properties?: events.ILlmCallStartedPayload): events.LlmCallStartedPayload;

        /**
         * Encodes the specified LlmCallStartedPayload message. Does not implicitly {@link events.LlmCallStartedPayload.verify|verify} messages.
         * @param message LlmCallStartedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.ILlmCallStartedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LlmCallStartedPayload message, length delimited. Does not implicitly {@link events.LlmCallStartedPayload.verify|verify} messages.
         * @param message LlmCallStartedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.ILlmCallStartedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LlmCallStartedPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LlmCallStartedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.LlmCallStartedPayload;

        /**
         * Decodes a LlmCallStartedPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LlmCallStartedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.LlmCallStartedPayload;

        /**
         * Verifies a LlmCallStartedPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LlmCallStartedPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LlmCallStartedPayload
         */
        public static fromObject(object: { [k: string]: any }): events.LlmCallStartedPayload;

        /**
         * Creates a plain object from a LlmCallStartedPayload message. Also converts values to other types if specified.
         * @param message LlmCallStartedPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.LlmCallStartedPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LlmCallStartedPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LlmCallStartedPayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LlmCallCompletedPayload. */
    interface ILlmCallCompletedPayload {

        /** LlmCallCompletedPayload agentClass */
        agentClass?: (string|null);

        /** LlmCallCompletedPayload model */
        model?: (string|null);

        /** LlmCallCompletedPayload durationSeconds */
        durationSeconds?: (number|null);

        /** LlmCallCompletedPayload response */
        response?: (string|null);

        /** LlmCallCompletedPayload resultSummary */
        resultSummary?: (string|null);

        /** LlmCallCompletedPayload error */
        error?: (string|null);

        /** LlmCallCompletedPayload step */
        step?: (number|null);

        /** LlmCallCompletedPayload nodeId */
        nodeId?: (string|null);

        /** LlmCallCompletedPayload tokenUsage */
        tokenUsage?: (events.ITokenUsage|null);

        /** LlmCallCompletedPayload actionName */
        actionName?: (string|null);

        /** LlmCallCompletedPayload callId */
        callId?: (string|null);
    }

    /** Represents a LlmCallCompletedPayload. */
    class LlmCallCompletedPayload implements ILlmCallCompletedPayload {

        /**
         * Constructs a new LlmCallCompletedPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.ILlmCallCompletedPayload);

        /** LlmCallCompletedPayload agentClass. */
        public agentClass: string;

        /** LlmCallCompletedPayload model. */
        public model: string;

        /** LlmCallCompletedPayload durationSeconds. */
        public durationSeconds: number;

        /** LlmCallCompletedPayload response. */
        public response: string;

        /** LlmCallCompletedPayload resultSummary. */
        public resultSummary: string;

        /** LlmCallCompletedPayload error. */
        public error?: (string|null);

        /** LlmCallCompletedPayload step. */
        public step?: (number|null);

        /** LlmCallCompletedPayload nodeId. */
        public nodeId?: (string|null);

        /** LlmCallCompletedPayload tokenUsage. */
        public tokenUsage?: (events.ITokenUsage|null);

        /** LlmCallCompletedPayload actionName. */
        public actionName?: (string|null);

        /** LlmCallCompletedPayload callId. */
        public callId: string;

        /**
         * Creates a new LlmCallCompletedPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LlmCallCompletedPayload instance
         */
        public static create(properties?: events.ILlmCallCompletedPayload): events.LlmCallCompletedPayload;

        /**
         * Encodes the specified LlmCallCompletedPayload message. Does not implicitly {@link events.LlmCallCompletedPayload.verify|verify} messages.
         * @param message LlmCallCompletedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.ILlmCallCompletedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LlmCallCompletedPayload message, length delimited. Does not implicitly {@link events.LlmCallCompletedPayload.verify|verify} messages.
         * @param message LlmCallCompletedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.ILlmCallCompletedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LlmCallCompletedPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LlmCallCompletedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.LlmCallCompletedPayload;

        /**
         * Decodes a LlmCallCompletedPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LlmCallCompletedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.LlmCallCompletedPayload;

        /**
         * Verifies a LlmCallCompletedPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LlmCallCompletedPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LlmCallCompletedPayload
         */
        public static fromObject(object: { [k: string]: any }): events.LlmCallCompletedPayload;

        /**
         * Creates a plain object from a LlmCallCompletedPayload message. Also converts values to other types if specified.
         * @param message LlmCallCompletedPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.LlmCallCompletedPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LlmCallCompletedPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LlmCallCompletedPayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ToolInvokedPayload. */
    interface IToolInvokedPayload {

        /** ToolInvokedPayload toolName */
        toolName?: (string|null);

        /** ToolInvokedPayload apiName */
        apiName?: (string|null);

        /** ToolInvokedPayload argsSummary */
        argsSummary?: (string|null);

        /** ToolInvokedPayload nodeId */
        nodeId?: (string|null);

        /** ToolInvokedPayload step */
        step?: (number|null);

        /** ToolInvokedPayload agentClass */
        agentClass?: (string|null);

        /** ToolInvokedPayload toolCallId */
        toolCallId?: (string|null);
    }

    /** Represents a ToolInvokedPayload. */
    class ToolInvokedPayload implements IToolInvokedPayload {

        /**
         * Constructs a new ToolInvokedPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IToolInvokedPayload);

        /** ToolInvokedPayload toolName. */
        public toolName: string;

        /** ToolInvokedPayload apiName. */
        public apiName: string;

        /** ToolInvokedPayload argsSummary. */
        public argsSummary: string;

        /** ToolInvokedPayload nodeId. */
        public nodeId?: (string|null);

        /** ToolInvokedPayload step. */
        public step?: (number|null);

        /** ToolInvokedPayload agentClass. */
        public agentClass?: (string|null);

        /** ToolInvokedPayload toolCallId. */
        public toolCallId: string;

        /**
         * Creates a new ToolInvokedPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ToolInvokedPayload instance
         */
        public static create(properties?: events.IToolInvokedPayload): events.ToolInvokedPayload;

        /**
         * Encodes the specified ToolInvokedPayload message. Does not implicitly {@link events.ToolInvokedPayload.verify|verify} messages.
         * @param message ToolInvokedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IToolInvokedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ToolInvokedPayload message, length delimited. Does not implicitly {@link events.ToolInvokedPayload.verify|verify} messages.
         * @param message ToolInvokedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IToolInvokedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ToolInvokedPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ToolInvokedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.ToolInvokedPayload;

        /**
         * Decodes a ToolInvokedPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ToolInvokedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.ToolInvokedPayload;

        /**
         * Verifies a ToolInvokedPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ToolInvokedPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ToolInvokedPayload
         */
        public static fromObject(object: { [k: string]: any }): events.ToolInvokedPayload;

        /**
         * Creates a plain object from a ToolInvokedPayload message. Also converts values to other types if specified.
         * @param message ToolInvokedPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.ToolInvokedPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ToolInvokedPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ToolInvokedPayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ToolReturnedPayload. */
    interface IToolReturnedPayload {

        /** ToolReturnedPayload toolName */
        toolName?: (string|null);

        /** ToolReturnedPayload apiName */
        apiName?: (string|null);

        /** ToolReturnedPayload state */
        state?: (string|null);

        /** ToolReturnedPayload durationSeconds */
        durationSeconds?: (number|null);

        /** ToolReturnedPayload resultSummary */
        resultSummary?: (string|null);

        /** ToolReturnedPayload error */
        error?: (string|null);

        /** ToolReturnedPayload nodeId */
        nodeId?: (string|null);

        /** ToolReturnedPayload step */
        step?: (number|null);

        /** ToolReturnedPayload agentClass */
        agentClass?: (string|null);

        /** ToolReturnedPayload toolCallId */
        toolCallId?: (string|null);
    }

    /** Represents a ToolReturnedPayload. */
    class ToolReturnedPayload implements IToolReturnedPayload {

        /**
         * Constructs a new ToolReturnedPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IToolReturnedPayload);

        /** ToolReturnedPayload toolName. */
        public toolName: string;

        /** ToolReturnedPayload apiName. */
        public apiName: string;

        /** ToolReturnedPayload state. */
        public state: string;

        /** ToolReturnedPayload durationSeconds. */
        public durationSeconds: number;

        /** ToolReturnedPayload resultSummary. */
        public resultSummary: string;

        /** ToolReturnedPayload error. */
        public error?: (string|null);

        /** ToolReturnedPayload nodeId. */
        public nodeId?: (string|null);

        /** ToolReturnedPayload step. */
        public step?: (number|null);

        /** ToolReturnedPayload agentClass. */
        public agentClass?: (string|null);

        /** ToolReturnedPayload toolCallId. */
        public toolCallId: string;

        /**
         * Creates a new ToolReturnedPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ToolReturnedPayload instance
         */
        public static create(properties?: events.IToolReturnedPayload): events.ToolReturnedPayload;

        /**
         * Encodes the specified ToolReturnedPayload message. Does not implicitly {@link events.ToolReturnedPayload.verify|verify} messages.
         * @param message ToolReturnedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IToolReturnedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ToolReturnedPayload message, length delimited. Does not implicitly {@link events.ToolReturnedPayload.verify|verify} messages.
         * @param message ToolReturnedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IToolReturnedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ToolReturnedPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ToolReturnedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.ToolReturnedPayload;

        /**
         * Decodes a ToolReturnedPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ToolReturnedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.ToolReturnedPayload;

        /**
         * Verifies a ToolReturnedPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ToolReturnedPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ToolReturnedPayload
         */
        public static fromObject(object: { [k: string]: any }): events.ToolReturnedPayload;

        /**
         * Creates a plain object from a ToolReturnedPayload message. Also converts values to other types if specified.
         * @param message ToolReturnedPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.ToolReturnedPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ToolReturnedPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ToolReturnedPayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NodeCreatedPayload. */
    interface INodeCreatedPayload {

        /** NodeCreatedPayload nodeId */
        nodeId?: (string|null);

        /** NodeCreatedPayload nodeNid */
        nodeNid?: (string|null);

        /** NodeCreatedPayload nodeType */
        nodeType?: (string|null);

        /** NodeCreatedPayload taskType */
        taskType?: (string|null);

        /** NodeCreatedPayload taskGoal */
        taskGoal?: (string|null);

        /** NodeCreatedPayload layer */
        layer?: (number|null);

        /** NodeCreatedPayload outerNodeId */
        outerNodeId?: (string|null);

        /** NodeCreatedPayload rootNodeId */
        rootNodeId?: (string|null);

        /** NodeCreatedPayload initialParentNids */
        initialParentNids?: (string[]|null);

        /** NodeCreatedPayload step */
        step?: (number|null);
    }

    /** Represents a NodeCreatedPayload. */
    class NodeCreatedPayload implements INodeCreatedPayload {

        /**
         * Constructs a new NodeCreatedPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.INodeCreatedPayload);

        /** NodeCreatedPayload nodeId. */
        public nodeId: string;

        /** NodeCreatedPayload nodeNid. */
        public nodeNid: string;

        /** NodeCreatedPayload nodeType. */
        public nodeType: string;

        /** NodeCreatedPayload taskType. */
        public taskType: string;

        /** NodeCreatedPayload taskGoal. */
        public taskGoal: string;

        /** NodeCreatedPayload layer. */
        public layer: number;

        /** NodeCreatedPayload outerNodeId. */
        public outerNodeId?: (string|null);

        /** NodeCreatedPayload rootNodeId. */
        public rootNodeId: string;

        /** NodeCreatedPayload initialParentNids. */
        public initialParentNids: string[];

        /** NodeCreatedPayload step. */
        public step?: (number|null);

        /**
         * Creates a new NodeCreatedPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeCreatedPayload instance
         */
        public static create(properties?: events.INodeCreatedPayload): events.NodeCreatedPayload;

        /**
         * Encodes the specified NodeCreatedPayload message. Does not implicitly {@link events.NodeCreatedPayload.verify|verify} messages.
         * @param message NodeCreatedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.INodeCreatedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeCreatedPayload message, length delimited. Does not implicitly {@link events.NodeCreatedPayload.verify|verify} messages.
         * @param message NodeCreatedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.INodeCreatedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeCreatedPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeCreatedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.NodeCreatedPayload;

        /**
         * Decodes a NodeCreatedPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeCreatedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.NodeCreatedPayload;

        /**
         * Verifies a NodeCreatedPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeCreatedPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeCreatedPayload
         */
        public static fromObject(object: { [k: string]: any }): events.NodeCreatedPayload;

        /**
         * Creates a plain object from a NodeCreatedPayload message. Also converts values to other types if specified.
         * @param message NodeCreatedPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.NodeCreatedPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeCreatedPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NodeCreatedPayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PlanReceivedPayload. */
    interface IPlanReceivedPayload {

        /** PlanReceivedPayload nodeId */
        nodeId?: (string|null);

        /** PlanReceivedPayload rawPlan */
        rawPlan?: (google.protobuf.IStruct|null);

        /** PlanReceivedPayload step */
        step?: (number|null);

        /** PlanReceivedPayload taskType */
        taskType?: (string|null);

        /** PlanReceivedPayload taskGoal */
        taskGoal?: (string|null);
    }

    /** Represents a PlanReceivedPayload. */
    class PlanReceivedPayload implements IPlanReceivedPayload {

        /**
         * Constructs a new PlanReceivedPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IPlanReceivedPayload);

        /** PlanReceivedPayload nodeId. */
        public nodeId: string;

        /** PlanReceivedPayload rawPlan. */
        public rawPlan?: (google.protobuf.IStruct|null);

        /** PlanReceivedPayload step. */
        public step?: (number|null);

        /** PlanReceivedPayload taskType. */
        public taskType?: (string|null);

        /** PlanReceivedPayload taskGoal. */
        public taskGoal?: (string|null);

        /**
         * Creates a new PlanReceivedPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlanReceivedPayload instance
         */
        public static create(properties?: events.IPlanReceivedPayload): events.PlanReceivedPayload;

        /**
         * Encodes the specified PlanReceivedPayload message. Does not implicitly {@link events.PlanReceivedPayload.verify|verify} messages.
         * @param message PlanReceivedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IPlanReceivedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlanReceivedPayload message, length delimited. Does not implicitly {@link events.PlanReceivedPayload.verify|verify} messages.
         * @param message PlanReceivedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IPlanReceivedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlanReceivedPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlanReceivedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.PlanReceivedPayload;

        /**
         * Decodes a PlanReceivedPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlanReceivedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.PlanReceivedPayload;

        /**
         * Verifies a PlanReceivedPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlanReceivedPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlanReceivedPayload
         */
        public static fromObject(object: { [k: string]: any }): events.PlanReceivedPayload;

        /**
         * Creates a plain object from a PlanReceivedPayload message. Also converts values to other types if specified.
         * @param message PlanReceivedPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.PlanReceivedPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlanReceivedPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlanReceivedPayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NodeAddedPayload. */
    interface INodeAddedPayload {

        /** NodeAddedPayload graphOwnerNodeId */
        graphOwnerNodeId?: (string|null);

        /** NodeAddedPayload addedNodeId */
        addedNodeId?: (string|null);

        /** NodeAddedPayload addedNodeNid */
        addedNodeNid?: (string|null);

        /** NodeAddedPayload step */
        step?: (number|null);

        /** NodeAddedPayload taskType */
        taskType?: (string|null);

        /** NodeAddedPayload taskGoal */
        taskGoal?: (string|null);
    }

    /** Represents a NodeAddedPayload. */
    class NodeAddedPayload implements INodeAddedPayload {

        /**
         * Constructs a new NodeAddedPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.INodeAddedPayload);

        /** NodeAddedPayload graphOwnerNodeId. */
        public graphOwnerNodeId: string;

        /** NodeAddedPayload addedNodeId. */
        public addedNodeId: string;

        /** NodeAddedPayload addedNodeNid. */
        public addedNodeNid: string;

        /** NodeAddedPayload step. */
        public step?: (number|null);

        /** NodeAddedPayload taskType. */
        public taskType?: (string|null);

        /** NodeAddedPayload taskGoal. */
        public taskGoal?: (string|null);

        /**
         * Creates a new NodeAddedPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeAddedPayload instance
         */
        public static create(properties?: events.INodeAddedPayload): events.NodeAddedPayload;

        /**
         * Encodes the specified NodeAddedPayload message. Does not implicitly {@link events.NodeAddedPayload.verify|verify} messages.
         * @param message NodeAddedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.INodeAddedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeAddedPayload message, length delimited. Does not implicitly {@link events.NodeAddedPayload.verify|verify} messages.
         * @param message NodeAddedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.INodeAddedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeAddedPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeAddedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.NodeAddedPayload;

        /**
         * Decodes a NodeAddedPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeAddedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.NodeAddedPayload;

        /**
         * Verifies a NodeAddedPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeAddedPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeAddedPayload
         */
        public static fromObject(object: { [k: string]: any }): events.NodeAddedPayload;

        /**
         * Creates a plain object from a NodeAddedPayload message. Also converts values to other types if specified.
         * @param message NodeAddedPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.NodeAddedPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeAddedPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NodeAddedPayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EdgeAddedPayload. */
    interface IEdgeAddedPayload {

        /** EdgeAddedPayload graphOwnerNodeId */
        graphOwnerNodeId?: (string|null);

        /** EdgeAddedPayload parentNodeId */
        parentNodeId?: (string|null);

        /** EdgeAddedPayload childNodeId */
        childNodeId?: (string|null);

        /** EdgeAddedPayload parentNodeNid */
        parentNodeNid?: (string|null);

        /** EdgeAddedPayload childNodeNid */
        childNodeNid?: (string|null);

        /** EdgeAddedPayload step */
        step?: (number|null);

        /** EdgeAddedPayload taskType */
        taskType?: (string|null);

        /** EdgeAddedPayload taskGoal */
        taskGoal?: (string|null);
    }

    /** Represents an EdgeAddedPayload. */
    class EdgeAddedPayload implements IEdgeAddedPayload {

        /**
         * Constructs a new EdgeAddedPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IEdgeAddedPayload);

        /** EdgeAddedPayload graphOwnerNodeId. */
        public graphOwnerNodeId: string;

        /** EdgeAddedPayload parentNodeId. */
        public parentNodeId: string;

        /** EdgeAddedPayload childNodeId. */
        public childNodeId: string;

        /** EdgeAddedPayload parentNodeNid. */
        public parentNodeNid: string;

        /** EdgeAddedPayload childNodeNid. */
        public childNodeNid: string;

        /** EdgeAddedPayload step. */
        public step?: (number|null);

        /** EdgeAddedPayload taskType. */
        public taskType?: (string|null);

        /** EdgeAddedPayload taskGoal. */
        public taskGoal?: (string|null);

        /**
         * Creates a new EdgeAddedPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EdgeAddedPayload instance
         */
        public static create(properties?: events.IEdgeAddedPayload): events.EdgeAddedPayload;

        /**
         * Encodes the specified EdgeAddedPayload message. Does not implicitly {@link events.EdgeAddedPayload.verify|verify} messages.
         * @param message EdgeAddedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IEdgeAddedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EdgeAddedPayload message, length delimited. Does not implicitly {@link events.EdgeAddedPayload.verify|verify} messages.
         * @param message EdgeAddedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IEdgeAddedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EdgeAddedPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EdgeAddedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.EdgeAddedPayload;

        /**
         * Decodes an EdgeAddedPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EdgeAddedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.EdgeAddedPayload;

        /**
         * Verifies an EdgeAddedPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EdgeAddedPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EdgeAddedPayload
         */
        public static fromObject(object: { [k: string]: any }): events.EdgeAddedPayload;

        /**
         * Creates a plain object from an EdgeAddedPayload message. Also converts values to other types if specified.
         * @param message EdgeAddedPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.EdgeAddedPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EdgeAddedPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EdgeAddedPayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an InnerGraphBuiltPayload. */
    interface IInnerGraphBuiltPayload {

        /** InnerGraphBuiltPayload nodeId */
        nodeId?: (string|null);

        /** InnerGraphBuiltPayload nodeCount */
        nodeCount?: (number|null);

        /** InnerGraphBuiltPayload edgeCount */
        edgeCount?: (number|null);

        /** InnerGraphBuiltPayload nodeIds */
        nodeIds?: (string[]|null);

        /** InnerGraphBuiltPayload step */
        step?: (number|null);

        /** InnerGraphBuiltPayload taskType */
        taskType?: (string|null);

        /** InnerGraphBuiltPayload taskGoal */
        taskGoal?: (string|null);
    }

    /** Represents an InnerGraphBuiltPayload. */
    class InnerGraphBuiltPayload implements IInnerGraphBuiltPayload {

        /**
         * Constructs a new InnerGraphBuiltPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IInnerGraphBuiltPayload);

        /** InnerGraphBuiltPayload nodeId. */
        public nodeId: string;

        /** InnerGraphBuiltPayload nodeCount. */
        public nodeCount: number;

        /** InnerGraphBuiltPayload edgeCount. */
        public edgeCount: number;

        /** InnerGraphBuiltPayload nodeIds. */
        public nodeIds: string[];

        /** InnerGraphBuiltPayload step. */
        public step?: (number|null);

        /** InnerGraphBuiltPayload taskType. */
        public taskType?: (string|null);

        /** InnerGraphBuiltPayload taskGoal. */
        public taskGoal?: (string|null);

        /**
         * Creates a new InnerGraphBuiltPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InnerGraphBuiltPayload instance
         */
        public static create(properties?: events.IInnerGraphBuiltPayload): events.InnerGraphBuiltPayload;

        /**
         * Encodes the specified InnerGraphBuiltPayload message. Does not implicitly {@link events.InnerGraphBuiltPayload.verify|verify} messages.
         * @param message InnerGraphBuiltPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IInnerGraphBuiltPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InnerGraphBuiltPayload message, length delimited. Does not implicitly {@link events.InnerGraphBuiltPayload.verify|verify} messages.
         * @param message InnerGraphBuiltPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IInnerGraphBuiltPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InnerGraphBuiltPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InnerGraphBuiltPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.InnerGraphBuiltPayload;

        /**
         * Decodes an InnerGraphBuiltPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InnerGraphBuiltPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.InnerGraphBuiltPayload;

        /**
         * Verifies an InnerGraphBuiltPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InnerGraphBuiltPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InnerGraphBuiltPayload
         */
        public static fromObject(object: { [k: string]: any }): events.InnerGraphBuiltPayload;

        /**
         * Creates a plain object from an InnerGraphBuiltPayload message. Also converts values to other types if specified.
         * @param message InnerGraphBuiltPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.InnerGraphBuiltPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InnerGraphBuiltPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for InnerGraphBuiltPayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NodeResultAvailablePayload. */
    interface INodeResultAvailablePayload {

        /** NodeResultAvailablePayload nodeId */
        nodeId?: (string|null);

        /** NodeResultAvailablePayload actionName */
        actionName?: (string|null);

        /** NodeResultAvailablePayload resultSummary */
        resultSummary?: (string|null);

        /** NodeResultAvailablePayload step */
        step?: (number|null);

        /** NodeResultAvailablePayload taskType */
        taskType?: (string|null);

        /** NodeResultAvailablePayload taskGoal */
        taskGoal?: (string|null);
    }

    /** Represents a NodeResultAvailablePayload. */
    class NodeResultAvailablePayload implements INodeResultAvailablePayload {

        /**
         * Constructs a new NodeResultAvailablePayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.INodeResultAvailablePayload);

        /** NodeResultAvailablePayload nodeId. */
        public nodeId: string;

        /** NodeResultAvailablePayload actionName. */
        public actionName: string;

        /** NodeResultAvailablePayload resultSummary. */
        public resultSummary: string;

        /** NodeResultAvailablePayload step. */
        public step?: (number|null);

        /** NodeResultAvailablePayload taskType. */
        public taskType?: (string|null);

        /** NodeResultAvailablePayload taskGoal. */
        public taskGoal?: (string|null);

        /**
         * Creates a new NodeResultAvailablePayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeResultAvailablePayload instance
         */
        public static create(properties?: events.INodeResultAvailablePayload): events.NodeResultAvailablePayload;

        /**
         * Encodes the specified NodeResultAvailablePayload message. Does not implicitly {@link events.NodeResultAvailablePayload.verify|verify} messages.
         * @param message NodeResultAvailablePayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.INodeResultAvailablePayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeResultAvailablePayload message, length delimited. Does not implicitly {@link events.NodeResultAvailablePayload.verify|verify} messages.
         * @param message NodeResultAvailablePayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.INodeResultAvailablePayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeResultAvailablePayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeResultAvailablePayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.NodeResultAvailablePayload;

        /**
         * Decodes a NodeResultAvailablePayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeResultAvailablePayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.NodeResultAvailablePayload;

        /**
         * Verifies a NodeResultAvailablePayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeResultAvailablePayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeResultAvailablePayload
         */
        public static fromObject(object: { [k: string]: any }): events.NodeResultAvailablePayload;

        /**
         * Creates a plain object from a NodeResultAvailablePayload message. Also converts values to other types if specified.
         * @param message NodeResultAvailablePayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.NodeResultAvailablePayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeResultAvailablePayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NodeResultAvailablePayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RunStartedPayload. */
    interface IRunStartedPayload {

        /** RunStartedPayload inputData */
        inputData?: (google.protobuf.IStruct|null);

        /** RunStartedPayload config */
        config?: (google.protobuf.IStruct|null);

        /** RunStartedPayload runMode */
        runMode?: (string|null);

        /** RunStartedPayload timestampUtc */
        timestampUtc?: (google.protobuf.ITimestamp|null);
    }

    /** Represents a RunStartedPayload. */
    class RunStartedPayload implements IRunStartedPayload {

        /**
         * Constructs a new RunStartedPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IRunStartedPayload);

        /** RunStartedPayload inputData. */
        public inputData?: (google.protobuf.IStruct|null);

        /** RunStartedPayload config. */
        public config?: (google.protobuf.IStruct|null);

        /** RunStartedPayload runMode. */
        public runMode: string;

        /** RunStartedPayload timestampUtc. */
        public timestampUtc?: (google.protobuf.ITimestamp|null);

        /**
         * Creates a new RunStartedPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RunStartedPayload instance
         */
        public static create(properties?: events.IRunStartedPayload): events.RunStartedPayload;

        /**
         * Encodes the specified RunStartedPayload message. Does not implicitly {@link events.RunStartedPayload.verify|verify} messages.
         * @param message RunStartedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IRunStartedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RunStartedPayload message, length delimited. Does not implicitly {@link events.RunStartedPayload.verify|verify} messages.
         * @param message RunStartedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IRunStartedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RunStartedPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RunStartedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.RunStartedPayload;

        /**
         * Decodes a RunStartedPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RunStartedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.RunStartedPayload;

        /**
         * Verifies a RunStartedPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RunStartedPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RunStartedPayload
         */
        public static fromObject(object: { [k: string]: any }): events.RunStartedPayload;

        /**
         * Creates a plain object from a RunStartedPayload message. Also converts values to other types if specified.
         * @param message RunStartedPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.RunStartedPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RunStartedPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RunStartedPayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RunFinishedPayload. */
    interface IRunFinishedPayload {

        /** RunFinishedPayload totalSteps */
        totalSteps?: (number|null);

        /** RunFinishedPayload durationSeconds */
        durationSeconds?: (number|null);

        /** RunFinishedPayload totalNodes */
        totalNodes?: (number|null);

        /** RunFinishedPayload totalLlmCalls */
        totalLlmCalls?: (number|null);

        /** RunFinishedPayload totalToolCalls */
        totalToolCalls?: (number|null);

        /** RunFinishedPayload tokenUsageSummary */
        tokenUsageSummary?: (events.RunFinishedPayload.ITokenUsageSummary|null);

        /** RunFinishedPayload nodeStatistics */
        nodeStatistics?: (events.RunFinishedPayload.INodeStatistics|null);

        /** RunFinishedPayload searchStatistics */
        searchStatistics?: (events.RunFinishedPayload.ISearchStatistics|null);
    }

    /** Represents a RunFinishedPayload. */
    class RunFinishedPayload implements IRunFinishedPayload {

        /**
         * Constructs a new RunFinishedPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IRunFinishedPayload);

        /** RunFinishedPayload totalSteps. */
        public totalSteps: number;

        /** RunFinishedPayload durationSeconds. */
        public durationSeconds: number;

        /** RunFinishedPayload totalNodes. */
        public totalNodes: number;

        /** RunFinishedPayload totalLlmCalls. */
        public totalLlmCalls: number;

        /** RunFinishedPayload totalToolCalls. */
        public totalToolCalls: number;

        /** RunFinishedPayload tokenUsageSummary. */
        public tokenUsageSummary?: (events.RunFinishedPayload.ITokenUsageSummary|null);

        /** RunFinishedPayload nodeStatistics. */
        public nodeStatistics?: (events.RunFinishedPayload.INodeStatistics|null);

        /** RunFinishedPayload searchStatistics. */
        public searchStatistics?: (events.RunFinishedPayload.ISearchStatistics|null);

        /**
         * Creates a new RunFinishedPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RunFinishedPayload instance
         */
        public static create(properties?: events.IRunFinishedPayload): events.RunFinishedPayload;

        /**
         * Encodes the specified RunFinishedPayload message. Does not implicitly {@link events.RunFinishedPayload.verify|verify} messages.
         * @param message RunFinishedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IRunFinishedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RunFinishedPayload message, length delimited. Does not implicitly {@link events.RunFinishedPayload.verify|verify} messages.
         * @param message RunFinishedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IRunFinishedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RunFinishedPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RunFinishedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.RunFinishedPayload;

        /**
         * Decodes a RunFinishedPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RunFinishedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.RunFinishedPayload;

        /**
         * Verifies a RunFinishedPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RunFinishedPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RunFinishedPayload
         */
        public static fromObject(object: { [k: string]: any }): events.RunFinishedPayload;

        /**
         * Creates a plain object from a RunFinishedPayload message. Also converts values to other types if specified.
         * @param message RunFinishedPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.RunFinishedPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RunFinishedPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RunFinishedPayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace RunFinishedPayload {

        /** Properties of a TokenUsageSummary. */
        interface ITokenUsageSummary {

            /** TokenUsageSummary totalPromptTokens */
            totalPromptTokens?: (number|null);

            /** TokenUsageSummary totalCompletionTokens */
            totalCompletionTokens?: (number|null);
        }

        /** Represents a TokenUsageSummary. */
        class TokenUsageSummary implements ITokenUsageSummary {

            /**
             * Constructs a new TokenUsageSummary.
             * @param [properties] Properties to set
             */
            constructor(properties?: events.RunFinishedPayload.ITokenUsageSummary);

            /** TokenUsageSummary totalPromptTokens. */
            public totalPromptTokens: number;

            /** TokenUsageSummary totalCompletionTokens. */
            public totalCompletionTokens: number;

            /**
             * Creates a new TokenUsageSummary instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TokenUsageSummary instance
             */
            public static create(properties?: events.RunFinishedPayload.ITokenUsageSummary): events.RunFinishedPayload.TokenUsageSummary;

            /**
             * Encodes the specified TokenUsageSummary message. Does not implicitly {@link events.RunFinishedPayload.TokenUsageSummary.verify|verify} messages.
             * @param message TokenUsageSummary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: events.RunFinishedPayload.ITokenUsageSummary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TokenUsageSummary message, length delimited. Does not implicitly {@link events.RunFinishedPayload.TokenUsageSummary.verify|verify} messages.
             * @param message TokenUsageSummary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: events.RunFinishedPayload.ITokenUsageSummary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TokenUsageSummary message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TokenUsageSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.RunFinishedPayload.TokenUsageSummary;

            /**
             * Decodes a TokenUsageSummary message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TokenUsageSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.RunFinishedPayload.TokenUsageSummary;

            /**
             * Verifies a TokenUsageSummary message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TokenUsageSummary message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TokenUsageSummary
             */
            public static fromObject(object: { [k: string]: any }): events.RunFinishedPayload.TokenUsageSummary;

            /**
             * Creates a plain object from a TokenUsageSummary message. Also converts values to other types if specified.
             * @param message TokenUsageSummary
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: events.RunFinishedPayload.TokenUsageSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TokenUsageSummary to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TokenUsageSummary
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NodeStatistics. */
        interface INodeStatistics {

            /** NodeStatistics totalCreated */
            totalCreated?: (number|null);

            /** NodeStatistics totalCompleted */
            totalCompleted?: (number|null);

            /** NodeStatistics byType */
            byType?: ({ [k: string]: number }|null);
        }

        /** Represents a NodeStatistics. */
        class NodeStatistics implements INodeStatistics {

            /**
             * Constructs a new NodeStatistics.
             * @param [properties] Properties to set
             */
            constructor(properties?: events.RunFinishedPayload.INodeStatistics);

            /** NodeStatistics totalCreated. */
            public totalCreated: number;

            /** NodeStatistics totalCompleted. */
            public totalCompleted: number;

            /** NodeStatistics byType. */
            public byType: { [k: string]: number };

            /**
             * Creates a new NodeStatistics instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeStatistics instance
             */
            public static create(properties?: events.RunFinishedPayload.INodeStatistics): events.RunFinishedPayload.NodeStatistics;

            /**
             * Encodes the specified NodeStatistics message. Does not implicitly {@link events.RunFinishedPayload.NodeStatistics.verify|verify} messages.
             * @param message NodeStatistics message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: events.RunFinishedPayload.INodeStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NodeStatistics message, length delimited. Does not implicitly {@link events.RunFinishedPayload.NodeStatistics.verify|verify} messages.
             * @param message NodeStatistics message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: events.RunFinishedPayload.INodeStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeStatistics message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeStatistics
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.RunFinishedPayload.NodeStatistics;

            /**
             * Decodes a NodeStatistics message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NodeStatistics
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.RunFinishedPayload.NodeStatistics;

            /**
             * Verifies a NodeStatistics message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NodeStatistics message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NodeStatistics
             */
            public static fromObject(object: { [k: string]: any }): events.RunFinishedPayload.NodeStatistics;

            /**
             * Creates a plain object from a NodeStatistics message. Also converts values to other types if specified.
             * @param message NodeStatistics
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: events.RunFinishedPayload.NodeStatistics, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NodeStatistics to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NodeStatistics
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SearchStatistics. */
        interface ISearchStatistics {

            /** SearchStatistics totalSearches */
            totalSearches?: (number|null);

            /** SearchStatistics totalPagesProcessed */
            totalPagesProcessed?: (number|null);

            /** SearchStatistics totalSearchTokens */
            totalSearchTokens?: (number|null);
        }

        /** Represents a SearchStatistics. */
        class SearchStatistics implements ISearchStatistics {

            /**
             * Constructs a new SearchStatistics.
             * @param [properties] Properties to set
             */
            constructor(properties?: events.RunFinishedPayload.ISearchStatistics);

            /** SearchStatistics totalSearches. */
            public totalSearches: number;

            /** SearchStatistics totalPagesProcessed. */
            public totalPagesProcessed: number;

            /** SearchStatistics totalSearchTokens. */
            public totalSearchTokens: number;

            /**
             * Creates a new SearchStatistics instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SearchStatistics instance
             */
            public static create(properties?: events.RunFinishedPayload.ISearchStatistics): events.RunFinishedPayload.SearchStatistics;

            /**
             * Encodes the specified SearchStatistics message. Does not implicitly {@link events.RunFinishedPayload.SearchStatistics.verify|verify} messages.
             * @param message SearchStatistics message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: events.RunFinishedPayload.ISearchStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SearchStatistics message, length delimited. Does not implicitly {@link events.RunFinishedPayload.SearchStatistics.verify|verify} messages.
             * @param message SearchStatistics message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: events.RunFinishedPayload.ISearchStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SearchStatistics message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SearchStatistics
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.RunFinishedPayload.SearchStatistics;

            /**
             * Decodes a SearchStatistics message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SearchStatistics
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.RunFinishedPayload.SearchStatistics;

            /**
             * Verifies a SearchStatistics message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SearchStatistics message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SearchStatistics
             */
            public static fromObject(object: { [k: string]: any }): events.RunFinishedPayload.SearchStatistics;

            /**
             * Creates a plain object from a SearchStatistics message. Also converts values to other types if specified.
             * @param message SearchStatistics
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: events.RunFinishedPayload.SearchStatistics, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SearchStatistics to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SearchStatistics
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a RunErrorPayload. */
    interface IRunErrorPayload {

        /** RunErrorPayload errorType */
        errorType?: (string|null);

        /** RunErrorPayload errorMessage */
        errorMessage?: (string|null);

        /** RunErrorPayload stackTrace */
        stackTrace?: (string|null);

        /** RunErrorPayload nodeId */
        nodeId?: (string|null);

        /** RunErrorPayload step */
        step?: (number|null);

        /** RunErrorPayload context */
        context?: (events.RunErrorPayload.IContext|null);
    }

    /** Represents a RunErrorPayload. */
    class RunErrorPayload implements IRunErrorPayload {

        /**
         * Constructs a new RunErrorPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IRunErrorPayload);

        /** RunErrorPayload errorType. */
        public errorType: string;

        /** RunErrorPayload errorMessage. */
        public errorMessage: string;

        /** RunErrorPayload stackTrace. */
        public stackTrace: string;

        /** RunErrorPayload nodeId. */
        public nodeId?: (string|null);

        /** RunErrorPayload step. */
        public step?: (number|null);

        /** RunErrorPayload context. */
        public context?: (events.RunErrorPayload.IContext|null);

        /**
         * Creates a new RunErrorPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RunErrorPayload instance
         */
        public static create(properties?: events.IRunErrorPayload): events.RunErrorPayload;

        /**
         * Encodes the specified RunErrorPayload message. Does not implicitly {@link events.RunErrorPayload.verify|verify} messages.
         * @param message RunErrorPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IRunErrorPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RunErrorPayload message, length delimited. Does not implicitly {@link events.RunErrorPayload.verify|verify} messages.
         * @param message RunErrorPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IRunErrorPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RunErrorPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RunErrorPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.RunErrorPayload;

        /**
         * Decodes a RunErrorPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RunErrorPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.RunErrorPayload;

        /**
         * Verifies a RunErrorPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RunErrorPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RunErrorPayload
         */
        public static fromObject(object: { [k: string]: any }): events.RunErrorPayload;

        /**
         * Creates a plain object from a RunErrorPayload message. Also converts values to other types if specified.
         * @param message RunErrorPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.RunErrorPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RunErrorPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RunErrorPayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace RunErrorPayload {

        /** Properties of a Context. */
        interface IContext {

            /** Context lastSuccessfulStep */
            lastSuccessfulStep?: (number|null);

            /** Context totalProcessedItems */
            totalProcessedItems?: (number|null);

            /** Context lastItemId */
            lastItemId?: (string|null);

            /** Context engineBackend */
            engineBackend?: (string|null);
        }

        /** Represents a Context. */
        class Context implements IContext {

            /**
             * Constructs a new Context.
             * @param [properties] Properties to set
             */
            constructor(properties?: events.RunErrorPayload.IContext);

            /** Context lastSuccessfulStep. */
            public lastSuccessfulStep: number;

            /** Context totalProcessedItems. */
            public totalProcessedItems: number;

            /** Context lastItemId. */
            public lastItemId: string;

            /** Context engineBackend. */
            public engineBackend?: (string|null);

            /**
             * Creates a new Context instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Context instance
             */
            public static create(properties?: events.RunErrorPayload.IContext): events.RunErrorPayload.Context;

            /**
             * Encodes the specified Context message. Does not implicitly {@link events.RunErrorPayload.Context.verify|verify} messages.
             * @param message Context message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: events.RunErrorPayload.IContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Context message, length delimited. Does not implicitly {@link events.RunErrorPayload.Context.verify|verify} messages.
             * @param message Context message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: events.RunErrorPayload.IContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Context message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Context
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.RunErrorPayload.Context;

            /**
             * Decodes a Context message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Context
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.RunErrorPayload.Context;

            /**
             * Verifies a Context message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Context message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Context
             */
            public static fromObject(object: { [k: string]: any }): events.RunErrorPayload.Context;

            /**
             * Creates a plain object from a Context message. Also converts values to other types if specified.
             * @param message Context
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: events.RunErrorPayload.Context, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Context to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Context
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** EventType enum. */
    enum EventType {
        EVENT_TYPE_UNSPECIFIED = 0,
        EVENT_TYPE_STEP_STARTED = 1,
        EVENT_TYPE_STEP_FINISHED = 2,
        EVENT_TYPE_NODE_STATUS_CHANGED = 3,
        EVENT_TYPE_LLM_CALL_STARTED = 4,
        EVENT_TYPE_LLM_CALL_COMPLETED = 5,
        EVENT_TYPE_TOOL_INVOKED = 6,
        EVENT_TYPE_TOOL_RETURNED = 7,
        EVENT_TYPE_NODE_CREATED = 8,
        EVENT_TYPE_PLAN_RECEIVED = 9,
        EVENT_TYPE_NODE_ADDED = 10,
        EVENT_TYPE_EDGE_ADDED = 11,
        EVENT_TYPE_INNER_GRAPH_BUILT = 12,
        EVENT_TYPE_NODE_RESULT_AVAILABLE = 13,
        EVENT_TYPE_RUN_STARTED = 14,
        EVENT_TYPE_RUN_FINISHED = 15,
        EVENT_TYPE_RUN_ERROR = 16
    }

    /** ConnectionStatus enum. */
    enum ConnectionStatus {
        CONNECTION_STATUS_UNSPECIFIED = 0,
        CONNECTION_STATUS_CONNECTING = 1,
        CONNECTION_STATUS_CONNECTED = 2,
        CONNECTION_STATUS_DISCONNECTED = 3
    }

    /** Properties of an Event. */
    interface IEvent {

        /** Event eventId */
        eventId?: (string|null);

        /** Event timestamp */
        timestamp?: (google.protobuf.ITimestamp|null);

        /** Event eventType */
        eventType?: (events.EventType|null);

        /** Event runId */
        runId?: (string|null);

        /** Event stepStarted */
        stepStarted?: (events.IStepStartedPayload|null);

        /** Event stepFinished */
        stepFinished?: (events.IStepFinishedPayload|null);

        /** Event nodeStatusChanged */
        nodeStatusChanged?: (events.INodeStatusChangePayload|null);

        /** Event llmCallStarted */
        llmCallStarted?: (events.ILlmCallStartedPayload|null);

        /** Event llmCallCompleted */
        llmCallCompleted?: (events.ILlmCallCompletedPayload|null);

        /** Event toolInvoked */
        toolInvoked?: (events.IToolInvokedPayload|null);

        /** Event toolReturned */
        toolReturned?: (events.IToolReturnedPayload|null);

        /** Event nodeCreated */
        nodeCreated?: (events.INodeCreatedPayload|null);

        /** Event planReceived */
        planReceived?: (events.IPlanReceivedPayload|null);

        /** Event nodeAdded */
        nodeAdded?: (events.INodeAddedPayload|null);

        /** Event edgeAdded */
        edgeAdded?: (events.IEdgeAddedPayload|null);

        /** Event innerGraphBuilt */
        innerGraphBuilt?: (events.IInnerGraphBuiltPayload|null);

        /** Event nodeResultAvailable */
        nodeResultAvailable?: (events.INodeResultAvailablePayload|null);

        /** Event runStarted */
        runStarted?: (events.IRunStartedPayload|null);

        /** Event runFinished */
        runFinished?: (events.IRunFinishedPayload|null);

        /** Event runError */
        runError?: (events.IRunErrorPayload|null);

        /** Event unknownPayload */
        unknownPayload?: (google.protobuf.IStruct|null);
    }

    /** Represents an Event. */
    class Event implements IEvent {

        /**
         * Constructs a new Event.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IEvent);

        /** Event eventId. */
        public eventId: string;

        /** Event timestamp. */
        public timestamp?: (google.protobuf.ITimestamp|null);

        /** Event eventType. */
        public eventType: events.EventType;

        /** Event runId. */
        public runId?: (string|null);

        /** Event stepStarted. */
        public stepStarted?: (events.IStepStartedPayload|null);

        /** Event stepFinished. */
        public stepFinished?: (events.IStepFinishedPayload|null);

        /** Event nodeStatusChanged. */
        public nodeStatusChanged?: (events.INodeStatusChangePayload|null);

        /** Event llmCallStarted. */
        public llmCallStarted?: (events.ILlmCallStartedPayload|null);

        /** Event llmCallCompleted. */
        public llmCallCompleted?: (events.ILlmCallCompletedPayload|null);

        /** Event toolInvoked. */
        public toolInvoked?: (events.IToolInvokedPayload|null);

        /** Event toolReturned. */
        public toolReturned?: (events.IToolReturnedPayload|null);

        /** Event nodeCreated. */
        public nodeCreated?: (events.INodeCreatedPayload|null);

        /** Event planReceived. */
        public planReceived?: (events.IPlanReceivedPayload|null);

        /** Event nodeAdded. */
        public nodeAdded?: (events.INodeAddedPayload|null);

        /** Event edgeAdded. */
        public edgeAdded?: (events.IEdgeAddedPayload|null);

        /** Event innerGraphBuilt. */
        public innerGraphBuilt?: (events.IInnerGraphBuiltPayload|null);

        /** Event nodeResultAvailable. */
        public nodeResultAvailable?: (events.INodeResultAvailablePayload|null);

        /** Event runStarted. */
        public runStarted?: (events.IRunStartedPayload|null);

        /** Event runFinished. */
        public runFinished?: (events.IRunFinishedPayload|null);

        /** Event runError. */
        public runError?: (events.IRunErrorPayload|null);

        /** Event unknownPayload. */
        public unknownPayload?: (google.protobuf.IStruct|null);

        /** Event payload. */
        public payload?: ("stepStarted"|"stepFinished"|"nodeStatusChanged"|"llmCallStarted"|"llmCallCompleted"|"toolInvoked"|"toolReturned"|"nodeCreated"|"planReceived"|"nodeAdded"|"edgeAdded"|"innerGraphBuilt"|"nodeResultAvailable"|"runStarted"|"runFinished"|"runError"|"unknownPayload");

        /**
         * Creates a new Event instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Event instance
         */
        public static create(properties?: events.IEvent): events.Event;

        /**
         * Encodes the specified Event message. Does not implicitly {@link events.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Event message, length delimited. Does not implicitly {@link events.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Event message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.Event;

        /**
         * Decodes an Event message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.Event;

        /**
         * Verifies an Event message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Event message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Event
         */
        public static fromObject(object: { [k: string]: any }): events.Event;

        /**
         * Creates a plain object from an Event message. Also converts values to other types if specified.
         * @param message Event
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Event to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Event
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EventsResponse. */
    interface IEventsResponse {

        /** EventsResponse status */
        status?: (events.ConnectionStatus|null);

        /** EventsResponse events */
        events?: (events.IEvent[]|null);
    }

    /** Represents an EventsResponse. */
    class EventsResponse implements IEventsResponse {

        /**
         * Constructs a new EventsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: events.IEventsResponse);

        /** EventsResponse status. */
        public status: events.ConnectionStatus;

        /** EventsResponse events. */
        public events: events.IEvent[];

        /**
         * Creates a new EventsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventsResponse instance
         */
        public static create(properties?: events.IEventsResponse): events.EventsResponse;

        /**
         * Encodes the specified EventsResponse message. Does not implicitly {@link events.EventsResponse.verify|verify} messages.
         * @param message EventsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: events.IEventsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventsResponse message, length delimited. Does not implicitly {@link events.EventsResponse.verify|verify} messages.
         * @param message EventsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: events.IEventsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): events.EventsResponse;

        /**
         * Decodes an EventsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): events.EventsResponse;

        /**
         * Verifies an EventsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventsResponse
         */
        public static fromObject(object: { [k: string]: any }): events.EventsResponse;

        /**
         * Creates a plain object from an EventsResponse message. Also converts values to other types if specified.
         * @param message EventsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: events.EventsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EventsResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Struct
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue. */
            public numberValue?: (number|null);

            /** Value stringValue. */
            public stringValue?: (string|null);

            /** Value boolValue. */
            public boolValue?: (boolean|null);

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
