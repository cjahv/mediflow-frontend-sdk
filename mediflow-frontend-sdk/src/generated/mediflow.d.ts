import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace mediflow. */
export namespace mediflow {

    /** Namespace v3. */
    namespace v3 {

        /**
         * Properties of a Person.
         * @deprecated Use mediflow.v3.Person.$Properties instead.
         */
        interface IPerson extends mediflow.v3.Person.$Properties {
        }

        /** Represents a Person. */
        class Person {

            /**
             * Constructs a new Person.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Person.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Person id. */
            id?: (string|null);

            /** Person name. */
            name?: (string|null);

            /** Person order. */
            order?: (number|null);

            /** Person displayNumber. */
            displayNumber?: (string|null);

            /**
             * Creates a new Person instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Person instance
             */
            static create(properties: mediflow.v3.Person.$Shape): mediflow.v3.Person & mediflow.v3.Person.$Shape;
            static create(properties?: mediflow.v3.Person.$Properties): mediflow.v3.Person;

            /**
             * Encodes the specified Person message. Does not implicitly {@link mediflow.v3.Person.verify|verify} messages.
             * @param message Person message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Person.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Person message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Person & mediflow.v3.Person.$Shape} Person
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Person & mediflow.v3.Person.$Shape;

            /**
             * Verifies a Person message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Person message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Person
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Person;

            /**
             * Creates a plain object from a Person message. Also converts values to other types if specified.
             * @param message Person
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Person, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Person to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Person
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Person {

            /** Properties of a Person. */
            interface $Properties {

                /** Person id */
                id?: (string|null);

                /** Person name */
                name?: (string|null);

                /** Person order */
                order?: (number|null);

                /** Person displayNumber */
                displayNumber?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Person. */
            type $Shape = mediflow.v3.Person.$Properties;
        }

        /**
         * Properties of a Section.
         * @deprecated Use mediflow.v3.Section.$Properties instead.
         */
        interface ISection extends mediflow.v3.Section.$Properties {
        }

        /** Represents a Section. */
        class Section {

            /**
             * Constructs a new Section.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Section.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Section id. */
            id?: (string|null);

            /** Section name. */
            name?: (string|null);

            /** Section persons. */
            persons: mediflow.v3.Person.$Properties[];

            /**
             * Creates a new Section instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Section instance
             */
            static create(properties: mediflow.v3.Section.$Shape): mediflow.v3.Section & mediflow.v3.Section.$Shape;
            static create(properties?: mediflow.v3.Section.$Properties): mediflow.v3.Section;

            /**
             * Encodes the specified Section message. Does not implicitly {@link mediflow.v3.Section.verify|verify} messages.
             * @param message Section message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Section.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Section message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Section & mediflow.v3.Section.$Shape} Section
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Section & mediflow.v3.Section.$Shape;

            /**
             * Verifies a Section message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Section message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Section
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Section;

            /**
             * Creates a plain object from a Section message. Also converts values to other types if specified.
             * @param message Section
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Section, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Section to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Section
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Section {

            /** Properties of a Section. */
            interface $Properties {

                /** Section id */
                id?: (string|null);

                /** Section name */
                name?: (string|null);

                /** Section persons */
                persons?: (mediflow.v3.Person.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Section. */
            type $Shape = mediflow.v3.Section.$Properties;
        }

        /**
         * Properties of a Queue.
         * @deprecated Use mediflow.v3.Queue.$Properties instead.
         */
        interface IQueue extends mediflow.v3.Queue.$Properties {
        }

        /** Represents a Queue. */
        class Queue {

            /**
             * Constructs a new Queue.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Queue.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Queue id. */
            id?: (string|null);

            /** Queue name. */
            name?: (string|null);

            /** Queue sections. */
            sections: mediflow.v3.Section.$Properties[];

            /**
             * Creates a new Queue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Queue instance
             */
            static create(properties: mediflow.v3.Queue.$Shape): mediflow.v3.Queue & mediflow.v3.Queue.$Shape;
            static create(properties?: mediflow.v3.Queue.$Properties): mediflow.v3.Queue;

            /**
             * Encodes the specified Queue message. Does not implicitly {@link mediflow.v3.Queue.verify|verify} messages.
             * @param message Queue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Queue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Queue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Queue & mediflow.v3.Queue.$Shape} Queue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Queue & mediflow.v3.Queue.$Shape;

            /**
             * Verifies a Queue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Queue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Queue
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Queue;

            /**
             * Creates a plain object from a Queue message. Also converts values to other types if specified.
             * @param message Queue
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Queue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Queue to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Queue
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Queue {

            /** Properties of a Queue. */
            interface $Properties {

                /** Queue id */
                id?: (string|null);

                /** Queue name */
                name?: (string|null);

                /** Queue sections */
                sections?: (mediflow.v3.Section.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Queue. */
            type $Shape = mediflow.v3.Queue.$Properties;
        }

        /**
         * Properties of a Template.
         * @deprecated Use mediflow.v3.Template.$Properties instead.
         */
        interface ITemplate extends mediflow.v3.Template.$Properties {
        }

        /** Represents a Template. */
        class Template {

            /**
             * Constructs a new Template.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Template.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Template queues. */
            queues: mediflow.v3.Queue.$Properties[];

            /**
             * Creates a new Template instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Template instance
             */
            static create(properties: mediflow.v3.Template.$Shape): mediflow.v3.Template & mediflow.v3.Template.$Shape;
            static create(properties?: mediflow.v3.Template.$Properties): mediflow.v3.Template;

            /**
             * Encodes the specified Template message. Does not implicitly {@link mediflow.v3.Template.verify|verify} messages.
             * @param message Template message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Template.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Template message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Template & mediflow.v3.Template.$Shape} Template
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Template & mediflow.v3.Template.$Shape;

            /**
             * Verifies a Template message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Template message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Template
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Template;

            /**
             * Creates a plain object from a Template message. Also converts values to other types if specified.
             * @param message Template
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Template, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Template to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Template
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Template {

            /** Properties of a Template. */
            interface $Properties {

                /** Template queues */
                queues?: (mediflow.v3.Queue.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Template. */
            type $Shape = mediflow.v3.Template.$Properties;
        }

        /**
         * Properties of a Snapshot.
         * @deprecated Use mediflow.v3.Snapshot.$Properties instead.
         */
        interface ISnapshot extends mediflow.v3.Snapshot.$Properties {
        }

        /** Represents a Snapshot. */
        class Snapshot {

            /**
             * Constructs a new Snapshot.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Snapshot.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Snapshot epoch. */
            epoch?: (string|null);

            /** Snapshot screenId. */
            screenId?: (string|null);

            /** Snapshot version. */
            version?: (number|Long|null);

            /** Snapshot templateVersion. */
            templateVersion?: (string|null);

            /** Snapshot data. */
            data?: (mediflow.v3.Template.$Properties|null);

            /**
             * Creates a new Snapshot instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Snapshot instance
             */
            static create(properties: mediflow.v3.Snapshot.$Shape): mediflow.v3.Snapshot & mediflow.v3.Snapshot.$Shape;
            static create(properties?: mediflow.v3.Snapshot.$Properties): mediflow.v3.Snapshot;

            /**
             * Encodes the specified Snapshot message. Does not implicitly {@link mediflow.v3.Snapshot.verify|verify} messages.
             * @param message Snapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Snapshot.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Snapshot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Snapshot & mediflow.v3.Snapshot.$Shape} Snapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Snapshot & mediflow.v3.Snapshot.$Shape;

            /**
             * Verifies a Snapshot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Snapshot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Snapshot
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Snapshot;

            /**
             * Creates a plain object from a Snapshot message. Also converts values to other types if specified.
             * @param message Snapshot
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Snapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Snapshot to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Snapshot
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Snapshot {

            /** Properties of a Snapshot. */
            interface $Properties {

                /** Snapshot epoch */
                epoch?: (string|null);

                /** Snapshot screenId */
                screenId?: (string|null);

                /** Snapshot version */
                version?: (number|Long|null);

                /** Snapshot templateVersion */
                templateVersion?: (string|null);

                /** Snapshot data */
                data?: (mediflow.v3.Template.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Snapshot. */
            type $Shape = mediflow.v3.Snapshot.$Properties;
        }

        /**
         * Properties of a Screen.
         * @deprecated Use mediflow.v3.Screen.$Properties instead.
         */
        interface IScreen extends mediflow.v3.Screen.$Properties {
        }

        /** Represents a Screen. */
        class Screen {

            /**
             * Constructs a new Screen.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Screen.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Screen id. */
            id?: (string|null);

            /** Screen name. */
            name?: (string|null);

            /** Screen token. */
            token?: (string|null);

            /** Screen createdAt. */
            createdAt?: (string|null);

            /** Screen online. */
            online?: (boolean|null);

            /** Screen version. */
            version?: (number|Long|null);

            /**
             * Creates a new Screen instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Screen instance
             */
            static create(properties: mediflow.v3.Screen.$Shape): mediflow.v3.Screen & mediflow.v3.Screen.$Shape;
            static create(properties?: mediflow.v3.Screen.$Properties): mediflow.v3.Screen;

            /**
             * Encodes the specified Screen message. Does not implicitly {@link mediflow.v3.Screen.verify|verify} messages.
             * @param message Screen message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Screen.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Screen message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Screen & mediflow.v3.Screen.$Shape} Screen
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Screen & mediflow.v3.Screen.$Shape;

            /**
             * Verifies a Screen message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Screen message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Screen
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Screen;

            /**
             * Creates a plain object from a Screen message. Also converts values to other types if specified.
             * @param message Screen
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Screen, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Screen to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Screen
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Screen {

            /** Properties of a Screen. */
            interface $Properties {

                /** Screen id */
                id?: (string|null);

                /** Screen name */
                name?: (string|null);

                /** Screen token */
                token?: (string|null);

                /** Screen createdAt */
                createdAt?: (string|null);

                /** Screen online */
                online?: (boolean|null);

                /** Screen version */
                version?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Screen. */
            type $Shape = mediflow.v3.Screen.$Properties;
        }

        /**
         * Properties of a Call.
         * @deprecated Use mediflow.v3.Call.$Properties instead.
         */
        interface ICall extends mediflow.v3.Call.$Properties {
        }

        /** Represents a Call. */
        class Call {

            /**
             * Constructs a new Call.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Call.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Call id. */
            id?: (string|null);

            /** Call queueId. */
            queueId?: (string|null);

            /** Call personId. */
            personId?: (string|null);

            /** Call text. */
            text?: (string|null);

            /** Call totalQuota. */
            totalQuota?: (number|null);

            /** Call expiresAt. */
            expiresAt?: (string|null);

            /** Call active. */
            active?: (boolean|null);

            /** Call targets. */
            targets: string[];

            /** Call createdAt. */
            createdAt?: (string|null);

            /** Call consumed. */
            consumed?: (number|null);

            /** Call remaining. */
            remaining?: (number|null);

            /** Call targetNames. */
            targetNames: { [k: string]: string };

            /**
             * Creates a new Call instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Call instance
             */
            static create(properties: mediflow.v3.Call.$Shape): mediflow.v3.Call & mediflow.v3.Call.$Shape;
            static create(properties?: mediflow.v3.Call.$Properties): mediflow.v3.Call;

            /**
             * Encodes the specified Call message. Does not implicitly {@link mediflow.v3.Call.verify|verify} messages.
             * @param message Call message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Call.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Call message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Call & mediflow.v3.Call.$Shape} Call
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Call & mediflow.v3.Call.$Shape;

            /**
             * Verifies a Call message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Call message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Call
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Call;

            /**
             * Creates a plain object from a Call message. Also converts values to other types if specified.
             * @param message Call
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Call, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Call to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Call
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Call {

            /** Properties of a Call. */
            interface $Properties {

                /** Call id */
                id?: (string|null);

                /** Call queueId */
                queueId?: (string|null);

                /** Call personId */
                personId?: (string|null);

                /** Call text */
                text?: (string|null);

                /** Call totalQuota */
                totalQuota?: (number|null);

                /** Call expiresAt */
                expiresAt?: (string|null);

                /** Call active */
                active?: (boolean|null);

                /** Call targets */
                targets?: (string[]|null);

                /** Call createdAt */
                createdAt?: (string|null);

                /** Call consumed */
                consumed?: (number|null);

                /** Call remaining */
                remaining?: (number|null);

                /** Call targetNames */
                targetNames?: ({ [k: string]: string }|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Call. */
            type $Shape = mediflow.v3.Call.$Properties;
        }

        /**
         * Properties of a Consumption.
         * @deprecated Use mediflow.v3.Consumption.$Properties instead.
         */
        interface IConsumption extends mediflow.v3.Consumption.$Properties {
        }

        /** Represents a Consumption. */
        class Consumption {

            /**
             * Constructs a new Consumption.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Consumption.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Consumption requestId. */
            requestId?: (string|null);

            /** Consumption callId. */
            callId?: (string|null);

            /** Consumption screenId. */
            screenId?: (string|null);

            /** Consumption granted. */
            granted?: (boolean|null);

            /** Consumption remaining. */
            remaining?: (number|null);

            /** Consumption text. */
            text?: (string|null);

            /** Consumption consumedAt. */
            consumedAt?: (string|null);

            /** Consumption reason. */
            reason?: (string|null);

            /** Consumption screenName. */
            screenName?: (string|null);

            /**
             * Creates a new Consumption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Consumption instance
             */
            static create(properties: mediflow.v3.Consumption.$Shape): mediflow.v3.Consumption & mediflow.v3.Consumption.$Shape;
            static create(properties?: mediflow.v3.Consumption.$Properties): mediflow.v3.Consumption;

            /**
             * Encodes the specified Consumption message. Does not implicitly {@link mediflow.v3.Consumption.verify|verify} messages.
             * @param message Consumption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Consumption.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Consumption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Consumption & mediflow.v3.Consumption.$Shape} Consumption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Consumption & mediflow.v3.Consumption.$Shape;

            /**
             * Verifies a Consumption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Consumption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Consumption
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Consumption;

            /**
             * Creates a plain object from a Consumption message. Also converts values to other types if specified.
             * @param message Consumption
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Consumption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Consumption to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Consumption
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Consumption {

            /** Properties of a Consumption. */
            interface $Properties {

                /** Consumption requestId */
                requestId?: (string|null);

                /** Consumption callId */
                callId?: (string|null);

                /** Consumption screenId */
                screenId?: (string|null);

                /** Consumption granted */
                granted?: (boolean|null);

                /** Consumption remaining */
                remaining?: (number|null);

                /** Consumption text */
                text?: (string|null);

                /** Consumption consumedAt */
                consumedAt?: (string|null);

                /** Consumption reason */
                reason?: (string|null);

                /** Consumption screenName */
                screenName?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Consumption. */
            type $Shape = mediflow.v3.Consumption.$Properties;
        }

        /**
         * Properties of an Audit.
         * @deprecated Use mediflow.v3.Audit.$Properties instead.
         */
        interface IAudit extends mediflow.v3.Audit.$Properties {
        }

        /** Represents an Audit. */
        class Audit {

            /**
             * Constructs a new Audit.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Audit.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Audit sequence. */
            sequence?: (number|Long|null);

            /** Audit actor. */
            actor?: (string|null);

            /** Audit outcome. */
            outcome?: (string|null);

            /** Audit id. */
            id?: (string|null);

            /** Audit time. */
            time?: (string|null);

            /** Audit action. */
            action?: (string|null);

            /** Audit screenId. */
            screenId?: (string|null);

            /** Audit callId. */
            callId?: (string|null);

            /** Audit requestId. */
            requestId?: (string|null);

            /** Audit detail. */
            detail?: (string|null);

            /** Audit screenName. */
            screenName?: (string|null);

            /**
             * Creates a new Audit instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Audit instance
             */
            static create(properties: mediflow.v3.Audit.$Shape): mediflow.v3.Audit & mediflow.v3.Audit.$Shape;
            static create(properties?: mediflow.v3.Audit.$Properties): mediflow.v3.Audit;

            /**
             * Encodes the specified Audit message. Does not implicitly {@link mediflow.v3.Audit.verify|verify} messages.
             * @param message Audit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Audit.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Audit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Audit & mediflow.v3.Audit.$Shape} Audit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Audit & mediflow.v3.Audit.$Shape;

            /**
             * Verifies an Audit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Audit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Audit
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Audit;

            /**
             * Creates a plain object from an Audit message. Also converts values to other types if specified.
             * @param message Audit
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Audit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Audit to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Audit
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Audit {

            /** Properties of an Audit. */
            interface $Properties {

                /** Audit sequence */
                sequence?: (number|Long|null);

                /** Audit actor */
                actor?: (string|null);

                /** Audit outcome */
                outcome?: (string|null);

                /** Audit id */
                id?: (string|null);

                /** Audit time */
                time?: (string|null);

                /** Audit action */
                action?: (string|null);

                /** Audit screenId */
                screenId?: (string|null);

                /** Audit callId */
                callId?: (string|null);

                /** Audit requestId */
                requestId?: (string|null);

                /** Audit detail */
                detail?: (string|null);

                /** Audit screenName */
                screenName?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an Audit. */
            type $Shape = mediflow.v3.Audit.$Properties;
        }

        /**
         * Properties of an Archive.
         * @deprecated Use mediflow.v3.Archive.$Properties instead.
         */
        interface IArchive extends mediflow.v3.Archive.$Properties {
        }

        /** Represents an Archive. */
        class Archive {

            /**
             * Constructs a new Archive.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Archive.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Archive sha256. */
            sha256?: (string|null);

            /** Archive id. */
            id?: (string|null);

            /** Archive createdAt. */
            createdAt?: (string|null);

            /** Archive eventCount. */
            eventCount?: (number|Long|null);

            /** Archive from. */
            from?: (string|null);

            /** Archive to. */
            to?: (string|null);

            /**
             * Creates a new Archive instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Archive instance
             */
            static create(properties: mediflow.v3.Archive.$Shape): mediflow.v3.Archive & mediflow.v3.Archive.$Shape;
            static create(properties?: mediflow.v3.Archive.$Properties): mediflow.v3.Archive;

            /**
             * Encodes the specified Archive message. Does not implicitly {@link mediflow.v3.Archive.verify|verify} messages.
             * @param message Archive message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Archive.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Archive message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Archive & mediflow.v3.Archive.$Shape} Archive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Archive & mediflow.v3.Archive.$Shape;

            /**
             * Verifies an Archive message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Archive message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Archive
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Archive;

            /**
             * Creates a plain object from an Archive message. Also converts values to other types if specified.
             * @param message Archive
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Archive, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Archive to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Archive
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Archive {

            /** Properties of an Archive. */
            interface $Properties {

                /** Archive sha256 */
                sha256?: (string|null);

                /** Archive id */
                id?: (string|null);

                /** Archive createdAt */
                createdAt?: (string|null);

                /** Archive eventCount */
                eventCount?: (number|Long|null);

                /** Archive from */
                from?: (string|null);

                /** Archive to */
                to?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an Archive. */
            type $Shape = mediflow.v3.Archive.$Properties;
        }

        /**
         * Properties of a Target.
         * @deprecated Use mediflow.v3.Target.$Properties instead.
         */
        interface ITarget extends mediflow.v3.Target.$Properties {
        }

        /** Represents a Target. */
        class Target {

            /**
             * Constructs a new Target.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Target.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Target screenId. */
            screenId?: (string|null);

            /** Target callId. */
            callId?: (string|null);

            /** Target consumed. */
            consumed?: (number|null);

            /**
             * Creates a new Target instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Target instance
             */
            static create(properties: mediflow.v3.Target.$Shape): mediflow.v3.Target & mediflow.v3.Target.$Shape;
            static create(properties?: mediflow.v3.Target.$Properties): mediflow.v3.Target;

            /**
             * Encodes the specified Target message. Does not implicitly {@link mediflow.v3.Target.verify|verify} messages.
             * @param message Target message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Target.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Target message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Target & mediflow.v3.Target.$Shape} Target
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Target & mediflow.v3.Target.$Shape;

            /**
             * Verifies a Target message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Target message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Target
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Target;

            /**
             * Creates a plain object from a Target message. Also converts values to other types if specified.
             * @param message Target
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Target, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Target to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Target
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Target {

            /** Properties of a Target. */
            interface $Properties {

                /** Target screenId */
                screenId?: (string|null);

                /** Target callId */
                callId?: (string|null);

                /** Target consumed */
                consumed?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Target. */
            type $Shape = mediflow.v3.Target.$Properties;
        }

        /**
         * Properties of a HistoryItem.
         * @deprecated Use mediflow.v3.HistoryItem.$Properties instead.
         */
        interface IHistoryItem extends mediflow.v3.HistoryItem.$Properties {
        }

        /** Represents a HistoryItem. */
        class HistoryItem {

            /**
             * Constructs a new HistoryItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.HistoryItem.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** HistoryItem kind. */
            kind?: (string|null);

            /** HistoryItem key. */
            key?: (string|null);

            /** HistoryItem time. */
            time?: (string|null);

            /** HistoryItem sha256. */
            sha256?: (string|null);

            /** HistoryItem snapshot. */
            snapshot?: (mediflow.v3.Snapshot.$Properties|null);

            /** HistoryItem consumption. */
            consumption?: (mediflow.v3.Consumption.$Properties|null);

            /** HistoryItem audit. */
            audit?: (mediflow.v3.Audit.$Properties|null);

            /** HistoryItem call. */
            call?: (mediflow.v3.Call.$Properties|null);

            /** HistoryItem target. */
            target?: (mediflow.v3.Target.$Properties|null);

            /** HistoryItem playback. */
            playback?: (mediflow.v3.PlaybackEvent.$Properties|null);

            /** HistoryItem record. */
            record?: ("snapshot"|"consumption"|"audit"|"call"|"target"|"playback");

            /**
             * Creates a new HistoryItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HistoryItem instance
             */
            static create(properties: mediflow.v3.HistoryItem.$Shape): mediflow.v3.HistoryItem & mediflow.v3.HistoryItem.$Shape;
            static create(properties?: mediflow.v3.HistoryItem.$Properties): mediflow.v3.HistoryItem;

            /**
             * Encodes the specified HistoryItem message. Does not implicitly {@link mediflow.v3.HistoryItem.verify|verify} messages.
             * @param message HistoryItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.HistoryItem.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HistoryItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.HistoryItem & mediflow.v3.HistoryItem.$Shape} HistoryItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.HistoryItem & mediflow.v3.HistoryItem.$Shape;

            /**
             * Verifies a HistoryItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HistoryItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HistoryItem
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.HistoryItem;

            /**
             * Creates a plain object from a HistoryItem message. Also converts values to other types if specified.
             * @param message HistoryItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.HistoryItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HistoryItem to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for HistoryItem
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace HistoryItem {

            /** Properties of a HistoryItem. */
            interface $Properties {

                /** HistoryItem kind */
                kind?: (string|null);

                /** HistoryItem key */
                key?: (string|null);

                /** HistoryItem time */
                time?: (string|null);

                /** HistoryItem sha256 */
                sha256?: (string|null);

                /** HistoryItem snapshot */
                snapshot?: (mediflow.v3.Snapshot.$Properties|null);

                /** HistoryItem consumption */
                consumption?: (mediflow.v3.Consumption.$Properties|null);

                /** HistoryItem audit */
                audit?: (mediflow.v3.Audit.$Properties|null);

                /** HistoryItem call */
                call?: (mediflow.v3.Call.$Properties|null);

                /** HistoryItem target */
                target?: (mediflow.v3.Target.$Properties|null);

                /** HistoryItem playback */
                playback?: (mediflow.v3.PlaybackEvent.$Properties|null);

                /** HistoryItem record */
                record?: ("snapshot"|"consumption"|"audit"|"call"|"target"|"playback");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a HistoryItem. */
            type $Shape = {
              kind?: string|null;
              key?: string|null;
              time?: string|null;
              sha256?: string|null;
              snapshot?: mediflow.v3.Snapshot.$Shape|null;
              consumption?: mediflow.v3.Consumption.$Shape|null;
              audit?: mediflow.v3.Audit.$Shape|null;
              call?: mediflow.v3.Call.$Shape|null;
              target?: mediflow.v3.Target.$Shape|null;
              playback?: mediflow.v3.PlaybackEvent.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ record?: undefined; snapshot?: null; consumption?: null; audit?: null; call?: null; target?: null; playback?: null }|{ record?: "snapshot"; snapshot: mediflow.v3.Snapshot.$Shape; consumption?: null; audit?: null; call?: null; target?: null; playback?: null }|{ record?: "consumption"; snapshot?: null; consumption: mediflow.v3.Consumption.$Shape; audit?: null; call?: null; target?: null; playback?: null }|{ record?: "audit"; snapshot?: null; consumption?: null; audit: mediflow.v3.Audit.$Shape; call?: null; target?: null; playback?: null }|{ record?: "call"; snapshot?: null; consumption?: null; audit?: null; call: mediflow.v3.Call.$Shape; target?: null; playback?: null }|{ record?: "target"; snapshot?: null; consumption?: null; audit?: null; call?: null; target: mediflow.v3.Target.$Shape; playback?: null }|{ record?: "playback"; snapshot?: null; consumption?: null; audit?: null; call?: null; target?: null; playback: mediflow.v3.PlaybackEvent.$Shape })
            );
        }

        /**
         * Properties of a CallPage.
         * @deprecated Use mediflow.v3.CallPage.$Properties instead.
         */
        interface ICallPage extends mediflow.v3.CallPage.$Properties {
        }

        /** Represents a CallPage. */
        class CallPage {

            /**
             * Constructs a new CallPage.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.CallPage.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** CallPage items. */
            items: mediflow.v3.Call.$Properties[];

            /** CallPage total. */
            total?: (number|Long|null);

            /** CallPage page. */
            page?: (number|null);

            /** CallPage pageSize. */
            pageSize?: (number|null);

            /**
             * Creates a new CallPage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CallPage instance
             */
            static create(properties: mediflow.v3.CallPage.$Shape): mediflow.v3.CallPage & mediflow.v3.CallPage.$Shape;
            static create(properties?: mediflow.v3.CallPage.$Properties): mediflow.v3.CallPage;

            /**
             * Encodes the specified CallPage message. Does not implicitly {@link mediflow.v3.CallPage.verify|verify} messages.
             * @param message CallPage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.CallPage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CallPage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.CallPage & mediflow.v3.CallPage.$Shape} CallPage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.CallPage & mediflow.v3.CallPage.$Shape;

            /**
             * Verifies a CallPage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CallPage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CallPage
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.CallPage;

            /**
             * Creates a plain object from a CallPage message. Also converts values to other types if specified.
             * @param message CallPage
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.CallPage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CallPage to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for CallPage
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace CallPage {

            /** Properties of a CallPage. */
            interface $Properties {

                /** CallPage items */
                items?: (mediflow.v3.Call.$Properties[]|null);

                /** CallPage total */
                total?: (number|Long|null);

                /** CallPage page */
                page?: (number|null);

                /** CallPage pageSize */
                pageSize?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a CallPage. */
            type $Shape = mediflow.v3.CallPage.$Properties;
        }

        /**
         * Properties of a ScreenPage.
         * @deprecated Use mediflow.v3.ScreenPage.$Properties instead.
         */
        interface IScreenPage extends mediflow.v3.ScreenPage.$Properties {
        }

        /** Represents a ScreenPage. */
        class ScreenPage {

            /**
             * Constructs a new ScreenPage.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.ScreenPage.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ScreenPage items. */
            items: mediflow.v3.Screen.$Properties[];

            /** ScreenPage total. */
            total?: (number|Long|null);

            /** ScreenPage page. */
            page?: (number|null);

            /** ScreenPage pageSize. */
            pageSize?: (number|null);

            /**
             * Creates a new ScreenPage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ScreenPage instance
             */
            static create(properties: mediflow.v3.ScreenPage.$Shape): mediflow.v3.ScreenPage & mediflow.v3.ScreenPage.$Shape;
            static create(properties?: mediflow.v3.ScreenPage.$Properties): mediflow.v3.ScreenPage;

            /**
             * Encodes the specified ScreenPage message. Does not implicitly {@link mediflow.v3.ScreenPage.verify|verify} messages.
             * @param message ScreenPage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.ScreenPage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ScreenPage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.ScreenPage & mediflow.v3.ScreenPage.$Shape} ScreenPage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.ScreenPage & mediflow.v3.ScreenPage.$Shape;

            /**
             * Verifies a ScreenPage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ScreenPage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ScreenPage
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.ScreenPage;

            /**
             * Creates a plain object from a ScreenPage message. Also converts values to other types if specified.
             * @param message ScreenPage
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.ScreenPage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ScreenPage to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ScreenPage
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ScreenPage {

            /** Properties of a ScreenPage. */
            interface $Properties {

                /** ScreenPage items */
                items?: (mediflow.v3.Screen.$Properties[]|null);

                /** ScreenPage total */
                total?: (number|Long|null);

                /** ScreenPage page */
                page?: (number|null);

                /** ScreenPage pageSize */
                pageSize?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ScreenPage. */
            type $Shape = mediflow.v3.ScreenPage.$Properties;
        }

        /**
         * Properties of a ConsumptionPage.
         * @deprecated Use mediflow.v3.ConsumptionPage.$Properties instead.
         */
        interface IConsumptionPage extends mediflow.v3.ConsumptionPage.$Properties {
        }

        /** Represents a ConsumptionPage. */
        class ConsumptionPage {

            /**
             * Constructs a new ConsumptionPage.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.ConsumptionPage.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ConsumptionPage items. */
            items: mediflow.v3.Consumption.$Properties[];

            /** ConsumptionPage total. */
            total?: (number|Long|null);

            /** ConsumptionPage page. */
            page?: (number|null);

            /** ConsumptionPage pageSize. */
            pageSize?: (number|null);

            /**
             * Creates a new ConsumptionPage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConsumptionPage instance
             */
            static create(properties: mediflow.v3.ConsumptionPage.$Shape): mediflow.v3.ConsumptionPage & mediflow.v3.ConsumptionPage.$Shape;
            static create(properties?: mediflow.v3.ConsumptionPage.$Properties): mediflow.v3.ConsumptionPage;

            /**
             * Encodes the specified ConsumptionPage message. Does not implicitly {@link mediflow.v3.ConsumptionPage.verify|verify} messages.
             * @param message ConsumptionPage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.ConsumptionPage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConsumptionPage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.ConsumptionPage & mediflow.v3.ConsumptionPage.$Shape} ConsumptionPage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.ConsumptionPage & mediflow.v3.ConsumptionPage.$Shape;

            /**
             * Verifies a ConsumptionPage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConsumptionPage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConsumptionPage
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.ConsumptionPage;

            /**
             * Creates a plain object from a ConsumptionPage message. Also converts values to other types if specified.
             * @param message ConsumptionPage
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.ConsumptionPage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConsumptionPage to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ConsumptionPage
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ConsumptionPage {

            /** Properties of a ConsumptionPage. */
            interface $Properties {

                /** ConsumptionPage items */
                items?: (mediflow.v3.Consumption.$Properties[]|null);

                /** ConsumptionPage total */
                total?: (number|Long|null);

                /** ConsumptionPage page */
                page?: (number|null);

                /** ConsumptionPage pageSize */
                pageSize?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ConsumptionPage. */
            type $Shape = mediflow.v3.ConsumptionPage.$Properties;
        }

        /**
         * Properties of an AuditPage.
         * @deprecated Use mediflow.v3.AuditPage.$Properties instead.
         */
        interface IAuditPage extends mediflow.v3.AuditPage.$Properties {
        }

        /** Represents an AuditPage. */
        class AuditPage {

            /**
             * Constructs a new AuditPage.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.AuditPage.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** AuditPage items. */
            items: mediflow.v3.Audit.$Properties[];

            /** AuditPage total. */
            total?: (number|Long|null);

            /** AuditPage page. */
            page?: (number|null);

            /** AuditPage pageSize. */
            pageSize?: (number|null);

            /**
             * Creates a new AuditPage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AuditPage instance
             */
            static create(properties: mediflow.v3.AuditPage.$Shape): mediflow.v3.AuditPage & mediflow.v3.AuditPage.$Shape;
            static create(properties?: mediflow.v3.AuditPage.$Properties): mediflow.v3.AuditPage;

            /**
             * Encodes the specified AuditPage message. Does not implicitly {@link mediflow.v3.AuditPage.verify|verify} messages.
             * @param message AuditPage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.AuditPage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AuditPage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.AuditPage & mediflow.v3.AuditPage.$Shape} AuditPage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.AuditPage & mediflow.v3.AuditPage.$Shape;

            /**
             * Verifies an AuditPage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AuditPage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AuditPage
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.AuditPage;

            /**
             * Creates a plain object from an AuditPage message. Also converts values to other types if specified.
             * @param message AuditPage
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.AuditPage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AuditPage to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AuditPage
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AuditPage {

            /** Properties of an AuditPage. */
            interface $Properties {

                /** AuditPage items */
                items?: (mediflow.v3.Audit.$Properties[]|null);

                /** AuditPage total */
                total?: (number|Long|null);

                /** AuditPage page */
                page?: (number|null);

                /** AuditPage pageSize */
                pageSize?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an AuditPage. */
            type $Shape = mediflow.v3.AuditPage.$Properties;
        }

        /**
         * Properties of an ArchivePage.
         * @deprecated Use mediflow.v3.ArchivePage.$Properties instead.
         */
        interface IArchivePage extends mediflow.v3.ArchivePage.$Properties {
        }

        /** Represents an ArchivePage. */
        class ArchivePage {

            /**
             * Constructs a new ArchivePage.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.ArchivePage.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ArchivePage items. */
            items: mediflow.v3.Archive.$Properties[];

            /** ArchivePage total. */
            total?: (number|Long|null);

            /** ArchivePage page. */
            page?: (number|null);

            /** ArchivePage pageSize. */
            pageSize?: (number|null);

            /**
             * Creates a new ArchivePage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ArchivePage instance
             */
            static create(properties: mediflow.v3.ArchivePage.$Shape): mediflow.v3.ArchivePage & mediflow.v3.ArchivePage.$Shape;
            static create(properties?: mediflow.v3.ArchivePage.$Properties): mediflow.v3.ArchivePage;

            /**
             * Encodes the specified ArchivePage message. Does not implicitly {@link mediflow.v3.ArchivePage.verify|verify} messages.
             * @param message ArchivePage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.ArchivePage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ArchivePage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.ArchivePage & mediflow.v3.ArchivePage.$Shape} ArchivePage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.ArchivePage & mediflow.v3.ArchivePage.$Shape;

            /**
             * Verifies an ArchivePage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ArchivePage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ArchivePage
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.ArchivePage;

            /**
             * Creates a plain object from an ArchivePage message. Also converts values to other types if specified.
             * @param message ArchivePage
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.ArchivePage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ArchivePage to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ArchivePage
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ArchivePage {

            /** Properties of an ArchivePage. */
            interface $Properties {

                /** ArchivePage items */
                items?: (mediflow.v3.Archive.$Properties[]|null);

                /** ArchivePage total */
                total?: (number|Long|null);

                /** ArchivePage page */
                page?: (number|null);

                /** ArchivePage pageSize */
                pageSize?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an ArchivePage. */
            type $Shape = mediflow.v3.ArchivePage.$Properties;
        }

        /**
         * Properties of a HistoryPage.
         * @deprecated Use mediflow.v3.HistoryPage.$Properties instead.
         */
        interface IHistoryPage extends mediflow.v3.HistoryPage.$Properties {
        }

        /** Represents a HistoryPage. */
        class HistoryPage {

            /**
             * Constructs a new HistoryPage.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.HistoryPage.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** HistoryPage items. */
            items: mediflow.v3.HistoryItem.$Properties[];

            /** HistoryPage total. */
            total?: (number|Long|null);

            /** HistoryPage page. */
            page?: (number|null);

            /** HistoryPage pageSize. */
            pageSize?: (number|null);

            /**
             * Creates a new HistoryPage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HistoryPage instance
             */
            static create(properties: mediflow.v3.HistoryPage.$Shape): mediflow.v3.HistoryPage & mediflow.v3.HistoryPage.$Shape;
            static create(properties?: mediflow.v3.HistoryPage.$Properties): mediflow.v3.HistoryPage;

            /**
             * Encodes the specified HistoryPage message. Does not implicitly {@link mediflow.v3.HistoryPage.verify|verify} messages.
             * @param message HistoryPage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.HistoryPage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HistoryPage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.HistoryPage & mediflow.v3.HistoryPage.$Shape} HistoryPage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.HistoryPage & mediflow.v3.HistoryPage.$Shape;

            /**
             * Verifies a HistoryPage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HistoryPage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HistoryPage
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.HistoryPage;

            /**
             * Creates a plain object from a HistoryPage message. Also converts values to other types if specified.
             * @param message HistoryPage
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.HistoryPage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HistoryPage to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for HistoryPage
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace HistoryPage {

            /** Properties of a HistoryPage. */
            interface $Properties {

                /** HistoryPage items */
                items?: (mediflow.v3.HistoryItem.$Properties[]|null);

                /** HistoryPage total */
                total?: (number|Long|null);

                /** HistoryPage page */
                page?: (number|null);

                /** HistoryPage pageSize */
                pageSize?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a HistoryPage. */
            type $Shape = {
              items?: mediflow.v3.HistoryItem.$Shape[]|null;
              total?: number|Long|null;
              page?: number|null;
              pageSize?: number|null;
              $unknowns?: Uint8Array[];
            };
        }

        /**
         * Properties of a ScreenDetail.
         * @deprecated Use mediflow.v3.ScreenDetail.$Properties instead.
         */
        interface IScreenDetail extends mediflow.v3.ScreenDetail.$Properties {
        }

        /** Represents a ScreenDetail. */
        class ScreenDetail {

            /**
             * Constructs a new ScreenDetail.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.ScreenDetail.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ScreenDetail screen. */
            screen?: (mediflow.v3.Screen.$Properties|null);

            /** ScreenDetail state. */
            state?: (mediflow.v3.Snapshot.$Properties|null);

            /** ScreenDetail calls. */
            calls?: (mediflow.v3.CallPage.$Properties|null);

            /**
             * Creates a new ScreenDetail instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ScreenDetail instance
             */
            static create(properties: mediflow.v3.ScreenDetail.$Shape): mediflow.v3.ScreenDetail & mediflow.v3.ScreenDetail.$Shape;
            static create(properties?: mediflow.v3.ScreenDetail.$Properties): mediflow.v3.ScreenDetail;

            /**
             * Encodes the specified ScreenDetail message. Does not implicitly {@link mediflow.v3.ScreenDetail.verify|verify} messages.
             * @param message ScreenDetail message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.ScreenDetail.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ScreenDetail message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.ScreenDetail & mediflow.v3.ScreenDetail.$Shape} ScreenDetail
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.ScreenDetail & mediflow.v3.ScreenDetail.$Shape;

            /**
             * Verifies a ScreenDetail message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ScreenDetail message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ScreenDetail
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.ScreenDetail;

            /**
             * Creates a plain object from a ScreenDetail message. Also converts values to other types if specified.
             * @param message ScreenDetail
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.ScreenDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ScreenDetail to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ScreenDetail
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ScreenDetail {

            /** Properties of a ScreenDetail. */
            interface $Properties {

                /** ScreenDetail screen */
                screen?: (mediflow.v3.Screen.$Properties|null);

                /** ScreenDetail state */
                state?: (mediflow.v3.Snapshot.$Properties|null);

                /** ScreenDetail calls */
                calls?: (mediflow.v3.CallPage.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ScreenDetail. */
            type $Shape = mediflow.v3.ScreenDetail.$Properties;
        }

        /**
         * Properties of an Overview.
         * @deprecated Use mediflow.v3.Overview.$Properties instead.
         */
        interface IOverview extends mediflow.v3.Overview.$Properties {
        }

        /** Represents an Overview. */
        class Overview {

            /**
             * Constructs a new Overview.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Overview.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Overview screens. */
            screens?: (number|Long|null);

            /** Overview calls. */
            calls?: (number|Long|null);

            /** Overview consumptions. */
            consumptions?: (number|Long|null);

            /** Overview auditEvents. */
            auditEvents?: (number|Long|null);

            /** Overview onlineScreens. */
            onlineScreens?: (number|Long|null);

            /**
             * Creates a new Overview instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Overview instance
             */
            static create(properties: mediflow.v3.Overview.$Shape): mediflow.v3.Overview & mediflow.v3.Overview.$Shape;
            static create(properties?: mediflow.v3.Overview.$Properties): mediflow.v3.Overview;

            /**
             * Encodes the specified Overview message. Does not implicitly {@link mediflow.v3.Overview.verify|verify} messages.
             * @param message Overview message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Overview.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Overview message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Overview & mediflow.v3.Overview.$Shape} Overview
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Overview & mediflow.v3.Overview.$Shape;

            /**
             * Verifies an Overview message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Overview message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Overview
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Overview;

            /**
             * Creates a plain object from an Overview message. Also converts values to other types if specified.
             * @param message Overview
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Overview, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Overview to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Overview
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Overview {

            /** Properties of an Overview. */
            interface $Properties {

                /** Overview screens */
                screens?: (number|Long|null);

                /** Overview calls */
                calls?: (number|Long|null);

                /** Overview consumptions */
                consumptions?: (number|Long|null);

                /** Overview auditEvents */
                auditEvents?: (number|Long|null);

                /** Overview onlineScreens */
                onlineScreens?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an Overview. */
            type $Shape = mediflow.v3.Overview.$Properties;
        }

        /**
         * Properties of an ArchiveBundle.
         * @deprecated Use mediflow.v3.ArchiveBundle.$Properties instead.
         */
        interface IArchiveBundle extends mediflow.v3.ArchiveBundle.$Properties {
        }

        /** Represents an ArchiveBundle. */
        class ArchiveBundle {

            /**
             * Constructs a new ArchiveBundle.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.ArchiveBundle.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ArchiveBundle screens. */
            screens: mediflow.v3.Screen.$Properties[];

            /** ArchiveBundle states. */
            states: { [k: string]: mediflow.v3.Snapshot.$Properties };

            /** ArchiveBundle snapshotHistory. */
            snapshotHistory: { [k: string]: mediflow.v3.Snapshot.$Properties };

            /** ArchiveBundle calls. */
            calls: { [k: string]: mediflow.v3.Call.$Properties };

            /** ArchiveBundle consumptions. */
            consumptions: { [k: string]: mediflow.v3.Consumption.$Properties };

            /** ArchiveBundle audit. */
            audit: mediflow.v3.Audit.$Properties[];

            /** ArchiveBundle checkpoints. */
            checkpoints: mediflow.v3.Archive.$Properties[];

            /** ArchiveBundle from. */
            from?: (string|null);

            /** ArchiveBundle to. */
            to?: (string|null);

            /** ArchiveBundle formatVersion. */
            formatVersion?: (string|null);

            /** ArchiveBundle epoch. */
            epoch?: (string|null);

            /** ArchiveBundle exportedAt. */
            exportedAt?: (string|null);

            /**
             * Creates a new ArchiveBundle instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ArchiveBundle instance
             */
            static create(properties: mediflow.v3.ArchiveBundle.$Shape): mediflow.v3.ArchiveBundle & mediflow.v3.ArchiveBundle.$Shape;
            static create(properties?: mediflow.v3.ArchiveBundle.$Properties): mediflow.v3.ArchiveBundle;

            /**
             * Encodes the specified ArchiveBundle message. Does not implicitly {@link mediflow.v3.ArchiveBundle.verify|verify} messages.
             * @param message ArchiveBundle message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.ArchiveBundle.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ArchiveBundle message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.ArchiveBundle & mediflow.v3.ArchiveBundle.$Shape} ArchiveBundle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.ArchiveBundle & mediflow.v3.ArchiveBundle.$Shape;

            /**
             * Verifies an ArchiveBundle message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ArchiveBundle message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ArchiveBundle
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.ArchiveBundle;

            /**
             * Creates a plain object from an ArchiveBundle message. Also converts values to other types if specified.
             * @param message ArchiveBundle
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.ArchiveBundle, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ArchiveBundle to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ArchiveBundle
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ArchiveBundle {

            /** Properties of an ArchiveBundle. */
            interface $Properties {

                /** ArchiveBundle screens */
                screens?: (mediflow.v3.Screen.$Properties[]|null);

                /** ArchiveBundle states */
                states?: ({ [k: string]: mediflow.v3.Snapshot.$Properties }|null);

                /** ArchiveBundle snapshotHistory */
                snapshotHistory?: ({ [k: string]: mediflow.v3.Snapshot.$Properties }|null);

                /** ArchiveBundle calls */
                calls?: ({ [k: string]: mediflow.v3.Call.$Properties }|null);

                /** ArchiveBundle consumptions */
                consumptions?: ({ [k: string]: mediflow.v3.Consumption.$Properties }|null);

                /** ArchiveBundle audit */
                audit?: (mediflow.v3.Audit.$Properties[]|null);

                /** ArchiveBundle checkpoints */
                checkpoints?: (mediflow.v3.Archive.$Properties[]|null);

                /** ArchiveBundle from */
                from?: (string|null);

                /** ArchiveBundle to */
                to?: (string|null);

                /** ArchiveBundle formatVersion */
                formatVersion?: (string|null);

                /** ArchiveBundle epoch */
                epoch?: (string|null);

                /** ArchiveBundle exportedAt */
                exportedAt?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an ArchiveBundle. */
            type $Shape = mediflow.v3.ArchiveBundle.$Properties;
        }

        /**
         * Properties of a Login.
         * @deprecated Use mediflow.v3.Login.$Properties instead.
         */
        interface ILogin extends mediflow.v3.Login.$Properties {
        }

        /** Represents a Login. */
        class Login {

            /**
             * Constructs a new Login.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Login.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Login username. */
            username?: (string|null);

            /** Login password. */
            password?: (string|null);

            /**
             * Creates a new Login instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Login instance
             */
            static create(properties: mediflow.v3.Login.$Shape): mediflow.v3.Login & mediflow.v3.Login.$Shape;
            static create(properties?: mediflow.v3.Login.$Properties): mediflow.v3.Login;

            /**
             * Encodes the specified Login message. Does not implicitly {@link mediflow.v3.Login.verify|verify} messages.
             * @param message Login message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Login.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Login message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Login & mediflow.v3.Login.$Shape} Login
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Login & mediflow.v3.Login.$Shape;

            /**
             * Verifies a Login message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Login message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Login
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Login;

            /**
             * Creates a plain object from a Login message. Also converts values to other types if specified.
             * @param message Login
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Login, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Login to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Login
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Login {

            /** Properties of a Login. */
            interface $Properties {

                /** Login username */
                username?: (string|null);

                /** Login password */
                password?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Login. */
            type $Shape = mediflow.v3.Login.$Properties;
        }

        /**
         * Properties of a User.
         * @deprecated Use mediflow.v3.User.$Properties instead.
         */
        interface IUser extends mediflow.v3.User.$Properties {
        }

        /** Represents a User. */
        class User {

            /**
             * Constructs a new User.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.User.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** User username. */
            username?: (string|null);

            /**
             * Creates a new User instance using the specified properties.
             * @param [properties] Properties to set
             * @returns User instance
             */
            static create(properties: mediflow.v3.User.$Shape): mediflow.v3.User & mediflow.v3.User.$Shape;
            static create(properties?: mediflow.v3.User.$Properties): mediflow.v3.User;

            /**
             * Encodes the specified User message. Does not implicitly {@link mediflow.v3.User.verify|verify} messages.
             * @param message User message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.User.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a User message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.User & mediflow.v3.User.$Shape} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.User & mediflow.v3.User.$Shape;

            /**
             * Verifies a User message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns User
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.User;

            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @param message User
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this User to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for User
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace User {

            /** Properties of a User. */
            interface $Properties {

                /** User username */
                username?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a User. */
            type $Shape = mediflow.v3.User.$Properties;
        }

        /**
         * Properties of a Publish.
         * @deprecated Use mediflow.v3.Publish.$Properties instead.
         */
        interface IPublish extends mediflow.v3.Publish.$Properties {
        }

        /** Represents a Publish. */
        class Publish {

            /**
             * Constructs a new Publish.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Publish.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Publish requestId. */
            requestId?: (string|null);

            /** Publish data. */
            data?: (mediflow.v3.Template.$Properties|null);

            /**
             * Creates a new Publish instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Publish instance
             */
            static create(properties: mediflow.v3.Publish.$Shape): mediflow.v3.Publish & mediflow.v3.Publish.$Shape;
            static create(properties?: mediflow.v3.Publish.$Properties): mediflow.v3.Publish;

            /**
             * Encodes the specified Publish message. Does not implicitly {@link mediflow.v3.Publish.verify|verify} messages.
             * @param message Publish message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Publish.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Publish message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Publish & mediflow.v3.Publish.$Shape} Publish
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Publish & mediflow.v3.Publish.$Shape;

            /**
             * Verifies a Publish message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Publish message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Publish
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Publish;

            /**
             * Creates a plain object from a Publish message. Also converts values to other types if specified.
             * @param message Publish
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Publish, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Publish to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Publish
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Publish {

            /** Properties of a Publish. */
            interface $Properties {

                /** Publish requestId */
                requestId?: (string|null);

                /** Publish data */
                data?: (mediflow.v3.Template.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Publish. */
            type $Shape = mediflow.v3.Publish.$Properties;
        }

        /**
         * Properties of a Consume.
         * @deprecated Use mediflow.v3.Consume.$Properties instead.
         */
        interface IConsume extends mediflow.v3.Consume.$Properties {
        }

        /** Represents a Consume. */
        class Consume {

            /**
             * Constructs a new Consume.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Consume.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Consume requestId. */
            requestId?: (string|null);

            /** Consume callId. */
            callId?: (string|null);

            /**
             * Creates a new Consume instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Consume instance
             */
            static create(properties: mediflow.v3.Consume.$Shape): mediflow.v3.Consume & mediflow.v3.Consume.$Shape;
            static create(properties?: mediflow.v3.Consume.$Properties): mediflow.v3.Consume;

            /**
             * Encodes the specified Consume message. Does not implicitly {@link mediflow.v3.Consume.verify|verify} messages.
             * @param message Consume message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Consume.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Consume message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Consume & mediflow.v3.Consume.$Shape} Consume
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Consume & mediflow.v3.Consume.$Shape;

            /**
             * Verifies a Consume message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Consume message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Consume
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Consume;

            /**
             * Creates a plain object from a Consume message. Also converts values to other types if specified.
             * @param message Consume
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Consume, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Consume to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Consume
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Consume {

            /** Properties of a Consume. */
            interface $Properties {

                /** Consume requestId */
                requestId?: (string|null);

                /** Consume callId */
                callId?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Consume. */
            type $Shape = mediflow.v3.Consume.$Properties;
        }

        /**
         * Properties of a Playback.
         * @deprecated Use mediflow.v3.Playback.$Properties instead.
         */
        interface IPlayback extends mediflow.v3.Playback.$Properties {
        }

        /** Represents a Playback. */
        class Playback {

            /**
             * Constructs a new Playback.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Playback.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Playback eventId. */
            eventId?: (string|null);

            /** Playback requestId. */
            requestId?: (string|null);

            /** Playback callId. */
            callId?: (string|null);

            /** Playback status. */
            status?: (string|null);

            /** Playback error. */
            error?: (string|null);

            /**
             * Creates a new Playback instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Playback instance
             */
            static create(properties: mediflow.v3.Playback.$Shape): mediflow.v3.Playback & mediflow.v3.Playback.$Shape;
            static create(properties?: mediflow.v3.Playback.$Properties): mediflow.v3.Playback;

            /**
             * Encodes the specified Playback message. Does not implicitly {@link mediflow.v3.Playback.verify|verify} messages.
             * @param message Playback message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Playback.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Playback message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Playback & mediflow.v3.Playback.$Shape} Playback
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Playback & mediflow.v3.Playback.$Shape;

            /**
             * Verifies a Playback message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Playback message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Playback
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Playback;

            /**
             * Creates a plain object from a Playback message. Also converts values to other types if specified.
             * @param message Playback
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Playback, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Playback to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Playback
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Playback {

            /** Properties of a Playback. */
            interface $Properties {

                /** Playback eventId */
                eventId?: (string|null);

                /** Playback requestId */
                requestId?: (string|null);

                /** Playback callId */
                callId?: (string|null);

                /** Playback status */
                status?: (string|null);

                /** Playback error */
                error?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Playback. */
            type $Shape = mediflow.v3.Playback.$Properties;
        }

        /**
         * Properties of a PlaybackResult.
         * @deprecated Use mediflow.v3.PlaybackResult.$Properties instead.
         */
        interface IPlaybackResult extends mediflow.v3.PlaybackResult.$Properties {
        }

        /** Represents a PlaybackResult. */
        class PlaybackResult {

            /**
             * Constructs a new PlaybackResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.PlaybackResult.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PlaybackResult eventId. */
            eventId?: (string|null);

            /** PlaybackResult requestId. */
            requestId?: (string|null);

            /** PlaybackResult callId. */
            callId?: (string|null);

            /** PlaybackResult status. */
            status?: (string|null);

            /** PlaybackResult ok. */
            ok?: (boolean|null);

            /**
             * Creates a new PlaybackResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlaybackResult instance
             */
            static create(properties: mediflow.v3.PlaybackResult.$Shape): mediflow.v3.PlaybackResult & mediflow.v3.PlaybackResult.$Shape;
            static create(properties?: mediflow.v3.PlaybackResult.$Properties): mediflow.v3.PlaybackResult;

            /**
             * Encodes the specified PlaybackResult message. Does not implicitly {@link mediflow.v3.PlaybackResult.verify|verify} messages.
             * @param message PlaybackResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.PlaybackResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlaybackResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.PlaybackResult & mediflow.v3.PlaybackResult.$Shape} PlaybackResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.PlaybackResult & mediflow.v3.PlaybackResult.$Shape;

            /**
             * Verifies a PlaybackResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlaybackResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlaybackResult
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.PlaybackResult;

            /**
             * Creates a plain object from a PlaybackResult message. Also converts values to other types if specified.
             * @param message PlaybackResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.PlaybackResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlaybackResult to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PlaybackResult
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PlaybackResult {

            /** Properties of a PlaybackResult. */
            interface $Properties {

                /** PlaybackResult eventId */
                eventId?: (string|null);

                /** PlaybackResult requestId */
                requestId?: (string|null);

                /** PlaybackResult callId */
                callId?: (string|null);

                /** PlaybackResult status */
                status?: (string|null);

                /** PlaybackResult ok */
                ok?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PlaybackResult. */
            type $Shape = mediflow.v3.PlaybackResult.$Properties;
        }

        /**
         * Properties of a Result.
         * @deprecated Use mediflow.v3.Result.$Properties instead.
         */
        interface IResult extends mediflow.v3.Result.$Properties {
        }

        /** Represents a Result. */
        class Result {

            /**
             * Constructs a new Result.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Result.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Result ok. */
            ok?: (boolean|null);

            /**
             * Creates a new Result instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Result instance
             */
            static create(properties: mediflow.v3.Result.$Shape): mediflow.v3.Result & mediflow.v3.Result.$Shape;
            static create(properties?: mediflow.v3.Result.$Properties): mediflow.v3.Result;

            /**
             * Encodes the specified Result message. Does not implicitly {@link mediflow.v3.Result.verify|verify} messages.
             * @param message Result message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Result.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Result message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Result & mediflow.v3.Result.$Shape} Result
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Result & mediflow.v3.Result.$Shape;

            /**
             * Verifies a Result message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Result message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Result
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Result;

            /**
             * Creates a plain object from a Result message. Also converts values to other types if specified.
             * @param message Result
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Result, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Result to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Result
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Result {

            /** Properties of a Result. */
            interface $Properties {

                /** Result ok */
                ok?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Result. */
            type $Shape = mediflow.v3.Result.$Properties;
        }

        /**
         * Properties of a Problem.
         * @deprecated Use mediflow.v3.Problem.$Properties instead.
         */
        interface IProblem extends mediflow.v3.Problem.$Properties {
        }

        /** Represents a Problem. */
        class Problem {

            /**
             * Constructs a new Problem.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Problem.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Problem error. */
            error?: (string|null);

            /**
             * Creates a new Problem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Problem instance
             */
            static create(properties: mediflow.v3.Problem.$Shape): mediflow.v3.Problem & mediflow.v3.Problem.$Shape;
            static create(properties?: mediflow.v3.Problem.$Properties): mediflow.v3.Problem;

            /**
             * Encodes the specified Problem message. Does not implicitly {@link mediflow.v3.Problem.verify|verify} messages.
             * @param message Problem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Problem.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Problem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Problem & mediflow.v3.Problem.$Shape} Problem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Problem & mediflow.v3.Problem.$Shape;

            /**
             * Verifies a Problem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Problem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Problem
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Problem;

            /**
             * Creates a plain object from a Problem message. Also converts values to other types if specified.
             * @param message Problem
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Problem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Problem to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Problem
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Problem {

            /** Properties of a Problem. */
            interface $Properties {

                /** Problem error */
                error?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Problem. */
            type $Shape = mediflow.v3.Problem.$Properties;
        }

        /**
         * Properties of a Health.
         * @deprecated Use mediflow.v3.Health.$Properties instead.
         */
        interface IHealth extends mediflow.v3.Health.$Properties {
        }

        /** Represents a Health. */
        class Health {

            /**
             * Constructs a new Health.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Health.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Health status. */
            status?: (string|null);

            /**
             * Creates a new Health instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Health instance
             */
            static create(properties: mediflow.v3.Health.$Shape): mediflow.v3.Health & mediflow.v3.Health.$Shape;
            static create(properties?: mediflow.v3.Health.$Properties): mediflow.v3.Health;

            /**
             * Encodes the specified Health message. Does not implicitly {@link mediflow.v3.Health.verify|verify} messages.
             * @param message Health message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Health.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Health message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Health & mediflow.v3.Health.$Shape} Health
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Health & mediflow.v3.Health.$Shape;

            /**
             * Verifies a Health message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Health message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Health
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Health;

            /**
             * Creates a plain object from a Health message. Also converts values to other types if specified.
             * @param message Health
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Health, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Health to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Health
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Health {

            /** Properties of a Health. */
            interface $Properties {

                /** Health status */
                status?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Health. */
            type $Shape = mediflow.v3.Health.$Properties;
        }

        /**
         * Properties of a Retain.
         * @deprecated Use mediflow.v3.Retain.$Properties instead.
         */
        interface IRetain extends mediflow.v3.Retain.$Properties {
        }

        /** Represents a Retain. */
        class Retain {

            /**
             * Constructs a new Retain.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Retain.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Retain dryRun. */
            dryRun?: (boolean|null);

            /**
             * Creates a new Retain instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Retain instance
             */
            static create(properties: mediflow.v3.Retain.$Shape): mediflow.v3.Retain & mediflow.v3.Retain.$Shape;
            static create(properties?: mediflow.v3.Retain.$Properties): mediflow.v3.Retain;

            /**
             * Encodes the specified Retain message. Does not implicitly {@link mediflow.v3.Retain.verify|verify} messages.
             * @param message Retain message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Retain.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Retain message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Retain & mediflow.v3.Retain.$Shape} Retain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Retain & mediflow.v3.Retain.$Shape;

            /**
             * Verifies a Retain message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Retain message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Retain
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Retain;

            /**
             * Creates a plain object from a Retain message. Also converts values to other types if specified.
             * @param message Retain
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Retain, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Retain to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Retain
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Retain {

            /** Properties of a Retain. */
            interface $Properties {

                /** Retain dryRun */
                dryRun?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Retain. */
            type $Shape = mediflow.v3.Retain.$Properties;
        }

        /**
         * Properties of a Retained.
         * @deprecated Use mediflow.v3.Retained.$Properties instead.
         */
        interface IRetained extends mediflow.v3.Retained.$Properties {
        }

        /** Represents a Retained. */
        class Retained {

            /**
             * Constructs a new Retained.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Retained.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Retained cutoff. */
            cutoff?: (string|null);

            /** Retained dryRun. */
            dryRun?: (boolean|null);

            /** Retained moved. */
            moved: { [k: string]: (number|Long) };

            /** Retained hasMore. */
            hasMore?: (boolean|null);

            /** Retained skipped. */
            skipped: { [k: string]: (number|Long) };

            /**
             * Creates a new Retained instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Retained instance
             */
            static create(properties: mediflow.v3.Retained.$Shape): mediflow.v3.Retained & mediflow.v3.Retained.$Shape;
            static create(properties?: mediflow.v3.Retained.$Properties): mediflow.v3.Retained;

            /**
             * Encodes the specified Retained message. Does not implicitly {@link mediflow.v3.Retained.verify|verify} messages.
             * @param message Retained message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Retained.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Retained message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Retained & mediflow.v3.Retained.$Shape} Retained
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Retained & mediflow.v3.Retained.$Shape;

            /**
             * Verifies a Retained message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Retained message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Retained
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Retained;

            /**
             * Creates a plain object from a Retained message. Also converts values to other types if specified.
             * @param message Retained
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Retained, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Retained to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Retained
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Retained {

            /** Properties of a Retained. */
            interface $Properties {

                /** Retained cutoff */
                cutoff?: (string|null);

                /** Retained dryRun */
                dryRun?: (boolean|null);

                /** Retained moved */
                moved?: ({ [k: string]: (number|Long) }|null);

                /** Retained hasMore */
                hasMore?: (boolean|null);

                /** Retained skipped */
                skipped?: ({ [k: string]: (number|Long) }|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Retained. */
            type $Shape = mediflow.v3.Retained.$Properties;
        }

        /**
         * Properties of an Auth.
         * @deprecated Use mediflow.v3.Auth.$Properties instead.
         */
        interface IAuth extends mediflow.v3.Auth.$Properties {
        }

        /** Represents an Auth. */
        class Auth {

            /**
             * Constructs a new Auth.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Auth.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Auth token. */
            token?: (string|null);

            /**
             * Creates a new Auth instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Auth instance
             */
            static create(properties: mediflow.v3.Auth.$Shape): mediflow.v3.Auth & mediflow.v3.Auth.$Shape;
            static create(properties?: mediflow.v3.Auth.$Properties): mediflow.v3.Auth;

            /**
             * Encodes the specified Auth message. Does not implicitly {@link mediflow.v3.Auth.verify|verify} messages.
             * @param message Auth message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Auth.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Auth message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Auth & mediflow.v3.Auth.$Shape} Auth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Auth & mediflow.v3.Auth.$Shape;

            /**
             * Verifies an Auth message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Auth message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Auth
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Auth;

            /**
             * Creates a plain object from an Auth message. Also converts values to other types if specified.
             * @param message Auth
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Auth, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Auth to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Auth
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Auth {

            /** Properties of an Auth. */
            interface $Properties {

                /** Auth token */
                token?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an Auth. */
            type $Shape = mediflow.v3.Auth.$Properties;
        }

        /**
         * Properties of a Sync.
         * @deprecated Use mediflow.v3.Sync.$Properties instead.
         */
        interface ISync extends mediflow.v3.Sync.$Properties {
        }

        /** Represents a Sync. */
        class Sync {

            /**
             * Constructs a new Sync.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Sync.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Sync page. */
            page?: (number|null);

            /** Sync pageSize. */
            pageSize?: (number|null);

            /**
             * Creates a new Sync instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Sync instance
             */
            static create(properties: mediflow.v3.Sync.$Shape): mediflow.v3.Sync & mediflow.v3.Sync.$Shape;
            static create(properties?: mediflow.v3.Sync.$Properties): mediflow.v3.Sync;

            /**
             * Encodes the specified Sync message. Does not implicitly {@link mediflow.v3.Sync.verify|verify} messages.
             * @param message Sync message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Sync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Sync message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Sync & mediflow.v3.Sync.$Shape} Sync
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Sync & mediflow.v3.Sync.$Shape;

            /**
             * Verifies a Sync message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Sync message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Sync
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Sync;

            /**
             * Creates a plain object from a Sync message. Also converts values to other types if specified.
             * @param message Sync
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Sync, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Sync to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Sync
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Sync {

            /** Properties of a Sync. */
            interface $Properties {

                /** Sync page */
                page?: (number|null);

                /** Sync pageSize */
                pageSize?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Sync. */
            type $Shape = mediflow.v3.Sync.$Properties;
        }

        /**
         * Properties of a PendingSync.
         * @deprecated Use mediflow.v3.PendingSync.$Properties instead.
         */
        interface IPendingSync extends mediflow.v3.PendingSync.$Properties {
        }

        /** Represents a PendingSync. */
        class PendingSync {

            /**
             * Constructs a new PendingSync.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.PendingSync.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PendingSync cursor. */
            cursor?: (string|null);

            /** PendingSync requestId. */
            requestId?: (string|null);

            /**
             * Creates a new PendingSync instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PendingSync instance
             */
            static create(properties: mediflow.v3.PendingSync.$Shape): mediflow.v3.PendingSync & mediflow.v3.PendingSync.$Shape;
            static create(properties?: mediflow.v3.PendingSync.$Properties): mediflow.v3.PendingSync;

            /**
             * Encodes the specified PendingSync message. Does not implicitly {@link mediflow.v3.PendingSync.verify|verify} messages.
             * @param message PendingSync message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.PendingSync.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PendingSync message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.PendingSync & mediflow.v3.PendingSync.$Shape} PendingSync
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.PendingSync & mediflow.v3.PendingSync.$Shape;

            /**
             * Verifies a PendingSync message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PendingSync message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PendingSync
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.PendingSync;

            /**
             * Creates a plain object from a PendingSync message. Also converts values to other types if specified.
             * @param message PendingSync
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.PendingSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PendingSync to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PendingSync
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PendingSync {

            /** Properties of a PendingSync. */
            interface $Properties {

                /** PendingSync cursor */
                cursor?: (string|null);

                /** PendingSync requestId */
                requestId?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PendingSync. */
            type $Shape = mediflow.v3.PendingSync.$Properties;
        }

        /**
         * Properties of a PendingCalls.
         * @deprecated Use mediflow.v3.PendingCalls.$Properties instead.
         */
        interface IPendingCalls extends mediflow.v3.PendingCalls.$Properties {
        }

        /** Represents a PendingCalls. */
        class PendingCalls {

            /**
             * Constructs a new PendingCalls.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.PendingCalls.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PendingCalls payload. */
            payload: mediflow.v3.Call.$Properties[];

            /** PendingCalls nextCursor. */
            nextCursor?: (string|null);

            /** PendingCalls requestId. */
            requestId?: (string|null);

            /** PendingCalls screenId. */
            screenId?: (string|null);

            /**
             * Creates a new PendingCalls instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PendingCalls instance
             */
            static create(properties: mediflow.v3.PendingCalls.$Shape): mediflow.v3.PendingCalls & mediflow.v3.PendingCalls.$Shape;
            static create(properties?: mediflow.v3.PendingCalls.$Properties): mediflow.v3.PendingCalls;

            /**
             * Encodes the specified PendingCalls message. Does not implicitly {@link mediflow.v3.PendingCalls.verify|verify} messages.
             * @param message PendingCalls message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.PendingCalls.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PendingCalls message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.PendingCalls & mediflow.v3.PendingCalls.$Shape} PendingCalls
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.PendingCalls & mediflow.v3.PendingCalls.$Shape;

            /**
             * Verifies a PendingCalls message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PendingCalls message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PendingCalls
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.PendingCalls;

            /**
             * Creates a plain object from a PendingCalls message. Also converts values to other types if specified.
             * @param message PendingCalls
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.PendingCalls, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PendingCalls to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PendingCalls
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PendingCalls {

            /** Properties of a PendingCalls. */
            interface $Properties {

                /** PendingCalls payload */
                payload?: (mediflow.v3.Call.$Properties[]|null);

                /** PendingCalls nextCursor */
                nextCursor?: (string|null);

                /** PendingCalls requestId */
                requestId?: (string|null);

                /** PendingCalls screenId */
                screenId?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PendingCalls. */
            type $Shape = mediflow.v3.PendingCalls.$Properties;
        }

        /**
         * Properties of a CallFrame.
         * @deprecated Use mediflow.v3.CallFrame.$Properties instead.
         */
        interface ICallFrame extends mediflow.v3.CallFrame.$Properties {
        }

        /** Represents a CallFrame. */
        class CallFrame {

            /**
             * Constructs a new CallFrame.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.CallFrame.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** CallFrame payload. */
            payload: mediflow.v3.Call.$Properties[];

            /** CallFrame page. */
            page?: (number|null);

            /** CallFrame pageSize. */
            pageSize?: (number|null);

            /** CallFrame total. */
            total?: (number|Long|null);

            /**
             * Creates a new CallFrame instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CallFrame instance
             */
            static create(properties: mediflow.v3.CallFrame.$Shape): mediflow.v3.CallFrame & mediflow.v3.CallFrame.$Shape;
            static create(properties?: mediflow.v3.CallFrame.$Properties): mediflow.v3.CallFrame;

            /**
             * Encodes the specified CallFrame message. Does not implicitly {@link mediflow.v3.CallFrame.verify|verify} messages.
             * @param message CallFrame message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.CallFrame.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CallFrame message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.CallFrame & mediflow.v3.CallFrame.$Shape} CallFrame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.CallFrame & mediflow.v3.CallFrame.$Shape;

            /**
             * Verifies a CallFrame message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CallFrame message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CallFrame
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.CallFrame;

            /**
             * Creates a plain object from a CallFrame message. Also converts values to other types if specified.
             * @param message CallFrame
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.CallFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CallFrame to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for CallFrame
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace CallFrame {

            /** Properties of a CallFrame. */
            interface $Properties {

                /** CallFrame payload */
                payload?: (mediflow.v3.Call.$Properties[]|null);

                /** CallFrame page */
                page?: (number|null);

                /** CallFrame pageSize */
                pageSize?: (number|null);

                /** CallFrame total */
                total?: (number|Long|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a CallFrame. */
            type $Shape = mediflow.v3.CallFrame.$Properties;
        }

        /**
         * Properties of a Failure.
         * @deprecated Use mediflow.v3.Failure.$Properties instead.
         */
        interface IFailure extends mediflow.v3.Failure.$Properties {
        }

        /** Represents a Failure. */
        class Failure {

            /**
             * Constructs a new Failure.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Failure.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Failure requestId. */
            requestId?: (string|null);

            /** Failure eventId. */
            eventId?: (string|null);

            /** Failure message. */
            message?: (string|null);

            /**
             * Creates a new Failure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Failure instance
             */
            static create(properties: mediflow.v3.Failure.$Shape): mediflow.v3.Failure & mediflow.v3.Failure.$Shape;
            static create(properties?: mediflow.v3.Failure.$Properties): mediflow.v3.Failure;

            /**
             * Encodes the specified Failure message. Does not implicitly {@link mediflow.v3.Failure.verify|verify} messages.
             * @param message Failure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Failure.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Failure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Failure & mediflow.v3.Failure.$Shape} Failure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Failure & mediflow.v3.Failure.$Shape;

            /**
             * Verifies a Failure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Failure message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Failure
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Failure;

            /**
             * Creates a plain object from a Failure message. Also converts values to other types if specified.
             * @param message Failure
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Failure, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Failure to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Failure
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Failure {

            /** Properties of a Failure. */
            interface $Properties {

                /** Failure requestId */
                requestId?: (string|null);

                /** Failure eventId */
                eventId?: (string|null);

                /** Failure message */
                message?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Failure. */
            type $Shape = mediflow.v3.Failure.$Properties;
        }

        /**
         * Properties of an Empty.
         * @deprecated Use mediflow.v3.Empty.$Properties instead.
         */
        interface IEmpty extends mediflow.v3.Empty.$Properties {
        }

        /** Represents an Empty. */
        class Empty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Empty.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            static create(properties: mediflow.v3.Empty.$Shape): mediflow.v3.Empty & mediflow.v3.Empty.$Shape;
            static create(properties?: mediflow.v3.Empty.$Properties): mediflow.v3.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link mediflow.v3.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Empty.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Empty & mediflow.v3.Empty.$Shape} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Empty & mediflow.v3.Empty.$Shape;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Empty
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Empty {

            /** Properties of an Empty. */
            interface $Properties {

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an Empty. */
            type $Shape = mediflow.v3.Empty.$Properties;
        }

        /**
         * Properties of a Frame.
         * @deprecated Use mediflow.v3.Frame.$Properties instead.
         */
        interface IFrame extends mediflow.v3.Frame.$Properties {
        }

        /** Represents a Frame. */
        class Frame {

            /**
             * Constructs a new Frame.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Frame.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Frame auth. */
            auth?: (mediflow.v3.Auth.$Properties|null);

            /** Frame sync. */
            sync?: (mediflow.v3.Sync.$Properties|null);

            /** Frame consume. */
            consume?: (mediflow.v3.Consume.$Properties|null);

            /** Frame playback. */
            playback?: (mediflow.v3.Playback.$Properties|null);

            /** Frame pendingSync. */
            pendingSync?: (mediflow.v3.PendingSync.$Properties|null);

            /** Frame ping. */
            ping?: (mediflow.v3.Empty.$Properties|null);

            /** Frame snapshot. */
            snapshot?: (mediflow.v3.Snapshot.$Properties|null);

            /** Frame calls. */
            calls?: (mediflow.v3.CallFrame.$Properties|null);

            /** Frame consumeResult. */
            consumeResult?: (mediflow.v3.Consumption.$Properties|null);

            /** Frame playbackResult. */
            playbackResult?: (mediflow.v3.PlaybackResult.$Properties|null);

            /** Frame pendingCalls. */
            pendingCalls?: (mediflow.v3.PendingCalls.$Properties|null);

            /** Frame error. */
            error?: (mediflow.v3.Failure.$Properties|null);

            /** Frame pong. */
            pong?: (mediflow.v3.Empty.$Properties|null);

            /** Frame body. */
            body?: ("auth"|"sync"|"consume"|"playback"|"pendingSync"|"ping"|"snapshot"|"calls"|"consumeResult"|"playbackResult"|"pendingCalls"|"error"|"pong");

            /**
             * Creates a new Frame instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Frame instance
             */
            static create(properties: mediflow.v3.Frame.$Shape): mediflow.v3.Frame & mediflow.v3.Frame.$Shape;
            static create(properties?: mediflow.v3.Frame.$Properties): mediflow.v3.Frame;

            /**
             * Encodes the specified Frame message. Does not implicitly {@link mediflow.v3.Frame.verify|verify} messages.
             * @param message Frame message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Frame.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Frame message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Frame & mediflow.v3.Frame.$Shape} Frame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Frame & mediflow.v3.Frame.$Shape;

            /**
             * Verifies a Frame message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Frame message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Frame
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Frame;

            /**
             * Creates a plain object from a Frame message. Also converts values to other types if specified.
             * @param message Frame
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Frame, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Frame to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Frame
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Frame {

            /** Properties of a Frame. */
            interface $Properties {

                /** Frame auth */
                auth?: (mediflow.v3.Auth.$Properties|null);

                /** Frame sync */
                sync?: (mediflow.v3.Sync.$Properties|null);

                /** Frame consume */
                consume?: (mediflow.v3.Consume.$Properties|null);

                /** Frame playback */
                playback?: (mediflow.v3.Playback.$Properties|null);

                /** Frame pendingSync */
                pendingSync?: (mediflow.v3.PendingSync.$Properties|null);

                /** Frame ping */
                ping?: (mediflow.v3.Empty.$Properties|null);

                /** Frame snapshot */
                snapshot?: (mediflow.v3.Snapshot.$Properties|null);

                /** Frame calls */
                calls?: (mediflow.v3.CallFrame.$Properties|null);

                /** Frame consumeResult */
                consumeResult?: (mediflow.v3.Consumption.$Properties|null);

                /** Frame playbackResult */
                playbackResult?: (mediflow.v3.PlaybackResult.$Properties|null);

                /** Frame pendingCalls */
                pendingCalls?: (mediflow.v3.PendingCalls.$Properties|null);

                /** Frame error */
                error?: (mediflow.v3.Failure.$Properties|null);

                /** Frame pong */
                pong?: (mediflow.v3.Empty.$Properties|null);

                /** Frame body */
                body?: ("auth"|"sync"|"consume"|"playback"|"pendingSync"|"ping"|"snapshot"|"calls"|"consumeResult"|"playbackResult"|"pendingCalls"|"error"|"pong");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a Frame. */
            type $Shape = {
              auth?: mediflow.v3.Auth.$Shape|null;
              sync?: mediflow.v3.Sync.$Shape|null;
              consume?: mediflow.v3.Consume.$Shape|null;
              playback?: mediflow.v3.Playback.$Shape|null;
              pendingSync?: mediflow.v3.PendingSync.$Shape|null;
              ping?: mediflow.v3.Empty.$Shape|null;
              snapshot?: mediflow.v3.Snapshot.$Shape|null;
              calls?: mediflow.v3.CallFrame.$Shape|null;
              consumeResult?: mediflow.v3.Consumption.$Shape|null;
              playbackResult?: mediflow.v3.PlaybackResult.$Shape|null;
              pendingCalls?: mediflow.v3.PendingCalls.$Shape|null;
              error?: mediflow.v3.Failure.$Shape|null;
              pong?: mediflow.v3.Empty.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ body?: undefined; auth?: null; sync?: null; consume?: null; playback?: null; pendingSync?: null; ping?: null; snapshot?: null; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error?: null; pong?: null }|{ body?: "auth"; auth: mediflow.v3.Auth.$Shape; sync?: null; consume?: null; playback?: null; pendingSync?: null; ping?: null; snapshot?: null; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error?: null; pong?: null }|{ body?: "sync"; auth?: null; sync: mediflow.v3.Sync.$Shape; consume?: null; playback?: null; pendingSync?: null; ping?: null; snapshot?: null; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error?: null; pong?: null }|{ body?: "consume"; auth?: null; sync?: null; consume: mediflow.v3.Consume.$Shape; playback?: null; pendingSync?: null; ping?: null; snapshot?: null; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error?: null; pong?: null }|{ body?: "playback"; auth?: null; sync?: null; consume?: null; playback: mediflow.v3.Playback.$Shape; pendingSync?: null; ping?: null; snapshot?: null; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error?: null; pong?: null }|{ body?: "pendingSync"; auth?: null; sync?: null; consume?: null; playback?: null; pendingSync: mediflow.v3.PendingSync.$Shape; ping?: null; snapshot?: null; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error?: null; pong?: null }|{ body?: "ping"; auth?: null; sync?: null; consume?: null; playback?: null; pendingSync?: null; ping: mediflow.v3.Empty.$Shape; snapshot?: null; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error?: null; pong?: null }|{ body?: "snapshot"; auth?: null; sync?: null; consume?: null; playback?: null; pendingSync?: null; ping?: null; snapshot: mediflow.v3.Snapshot.$Shape; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error?: null; pong?: null }|{ body?: "calls"; auth?: null; sync?: null; consume?: null; playback?: null; pendingSync?: null; ping?: null; snapshot?: null; calls: mediflow.v3.CallFrame.$Shape; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error?: null; pong?: null }|{ body?: "consumeResult"; auth?: null; sync?: null; consume?: null; playback?: null; pendingSync?: null; ping?: null; snapshot?: null; calls?: null; consumeResult: mediflow.v3.Consumption.$Shape; playbackResult?: null; pendingCalls?: null; error?: null; pong?: null }|{ body?: "playbackResult"; auth?: null; sync?: null; consume?: null; playback?: null; pendingSync?: null; ping?: null; snapshot?: null; calls?: null; consumeResult?: null; playbackResult: mediflow.v3.PlaybackResult.$Shape; pendingCalls?: null; error?: null; pong?: null }|{ body?: "pendingCalls"; auth?: null; sync?: null; consume?: null; playback?: null; pendingSync?: null; ping?: null; snapshot?: null; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls: mediflow.v3.PendingCalls.$Shape; error?: null; pong?: null }|{ body?: "error"; auth?: null; sync?: null; consume?: null; playback?: null; pendingSync?: null; ping?: null; snapshot?: null; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error: mediflow.v3.Failure.$Shape; pong?: null }|{ body?: "pong"; auth?: null; sync?: null; consume?: null; playback?: null; pendingSync?: null; ping?: null; snapshot?: null; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error?: null; pong: mediflow.v3.Empty.$Shape })
            );
        }

        /**
         * Properties of a Packet.
         * @deprecated Use mediflow.v3.Packet.$Properties instead.
         */
        interface IPacket extends mediflow.v3.Packet.$Properties {
        }

        /** Represents a Packet. */
        class Packet {

            /**
             * Constructs a new Packet.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.Packet.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Packet protocolVersion. */
            protocolVersion?: (number|null);

            /** Packet frame. */
            frame?: (mediflow.v3.Frame.$Properties|null);

            /** Packet snapshot. */
            snapshot?: (mediflow.v3.Snapshot.$Properties|null);

            /** Packet screen. */
            screen?: (mediflow.v3.Screen.$Properties|null);

            /** Packet call. */
            call?: (mediflow.v3.Call.$Properties|null);

            /** Packet consumption. */
            consumption?: (mediflow.v3.Consumption.$Properties|null);

            /** Packet audit. */
            audit?: (mediflow.v3.Audit.$Properties|null);

            /** Packet archive. */
            archive?: (mediflow.v3.Archive.$Properties|null);

            /** Packet callPage. */
            callPage?: (mediflow.v3.CallPage.$Properties|null);

            /** Packet screenPage. */
            screenPage?: (mediflow.v3.ScreenPage.$Properties|null);

            /** Packet consumptionPage. */
            consumptionPage?: (mediflow.v3.ConsumptionPage.$Properties|null);

            /** Packet auditPage. */
            auditPage?: (mediflow.v3.AuditPage.$Properties|null);

            /** Packet archivePage. */
            archivePage?: (mediflow.v3.ArchivePage.$Properties|null);

            /** Packet historyPage. */
            historyPage?: (mediflow.v3.HistoryPage.$Properties|null);

            /** Packet screenDetail. */
            screenDetail?: (mediflow.v3.ScreenDetail.$Properties|null);

            /** Packet overview. */
            overview?: (mediflow.v3.Overview.$Properties|null);

            /** Packet archiveBundle. */
            archiveBundle?: (mediflow.v3.ArchiveBundle.$Properties|null);

            /** Packet login. */
            login?: (mediflow.v3.Login.$Properties|null);

            /** Packet user. */
            user?: (mediflow.v3.User.$Properties|null);

            /** Packet publish. */
            publish?: (mediflow.v3.Publish.$Properties|null);

            /** Packet consume. */
            consume?: (mediflow.v3.Consume.$Properties|null);

            /** Packet playback. */
            playback?: (mediflow.v3.Playback.$Properties|null);

            /** Packet playbackResult. */
            playbackResult?: (mediflow.v3.PlaybackResult.$Properties|null);

            /** Packet result. */
            result?: (mediflow.v3.Result.$Properties|null);

            /** Packet problem. */
            problem?: (mediflow.v3.Problem.$Properties|null);

            /** Packet health. */
            health?: (mediflow.v3.Health.$Properties|null);

            /** Packet retain. */
            retain?: (mediflow.v3.Retain.$Properties|null);

            /** Packet retained. */
            retained?: (mediflow.v3.Retained.$Properties|null);

            /** Packet empty. */
            empty?: (mediflow.v3.Empty.$Properties|null);

            /** Packet pendingCalls. */
            pendingCalls?: (mediflow.v3.PendingCalls.$Properties|null);

            /** Packet body. */
            body?: ("frame"|"snapshot"|"screen"|"call"|"consumption"|"audit"|"archive"|"callPage"|"screenPage"|"consumptionPage"|"auditPage"|"archivePage"|"historyPage"|"screenDetail"|"overview"|"archiveBundle"|"login"|"user"|"publish"|"consume"|"playback"|"playbackResult"|"result"|"problem"|"health"|"retain"|"retained"|"empty"|"pendingCalls");

            /**
             * Creates a new Packet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Packet instance
             */
            static create(properties: mediflow.v3.Packet.$Shape): mediflow.v3.Packet & mediflow.v3.Packet.$Shape;
            static create(properties?: mediflow.v3.Packet.$Properties): mediflow.v3.Packet;

            /**
             * Encodes the specified Packet message. Does not implicitly {@link mediflow.v3.Packet.verify|verify} messages.
             * @param message Packet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.Packet.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Packet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.Packet & mediflow.v3.Packet.$Shape} Packet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.Packet & mediflow.v3.Packet.$Shape;

            /**
             * Verifies a Packet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Packet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Packet
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.Packet;

            /**
             * Creates a plain object from a Packet message. Also converts values to other types if specified.
             * @param message Packet
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.Packet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Packet to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Packet
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Packet {

            /** Properties of a Packet. */
            interface $Properties {

                /** Packet protocolVersion */
                protocolVersion?: (number|null);

                /** Packet frame */
                frame?: (mediflow.v3.Frame.$Properties|null);

                /** Packet snapshot */
                snapshot?: (mediflow.v3.Snapshot.$Properties|null);

                /** Packet screen */
                screen?: (mediflow.v3.Screen.$Properties|null);

                /** Packet call */
                call?: (mediflow.v3.Call.$Properties|null);

                /** Packet consumption */
                consumption?: (mediflow.v3.Consumption.$Properties|null);

                /** Packet audit */
                audit?: (mediflow.v3.Audit.$Properties|null);

                /** Packet archive */
                archive?: (mediflow.v3.Archive.$Properties|null);

                /** Packet callPage */
                callPage?: (mediflow.v3.CallPage.$Properties|null);

                /** Packet screenPage */
                screenPage?: (mediflow.v3.ScreenPage.$Properties|null);

                /** Packet consumptionPage */
                consumptionPage?: (mediflow.v3.ConsumptionPage.$Properties|null);

                /** Packet auditPage */
                auditPage?: (mediflow.v3.AuditPage.$Properties|null);

                /** Packet archivePage */
                archivePage?: (mediflow.v3.ArchivePage.$Properties|null);

                /** Packet historyPage */
                historyPage?: (mediflow.v3.HistoryPage.$Properties|null);

                /** Packet screenDetail */
                screenDetail?: (mediflow.v3.ScreenDetail.$Properties|null);

                /** Packet overview */
                overview?: (mediflow.v3.Overview.$Properties|null);

                /** Packet archiveBundle */
                archiveBundle?: (mediflow.v3.ArchiveBundle.$Properties|null);

                /** Packet login */
                login?: (mediflow.v3.Login.$Properties|null);

                /** Packet user */
                user?: (mediflow.v3.User.$Properties|null);

                /** Packet publish */
                publish?: (mediflow.v3.Publish.$Properties|null);

                /** Packet consume */
                consume?: (mediflow.v3.Consume.$Properties|null);

                /** Packet playback */
                playback?: (mediflow.v3.Playback.$Properties|null);

                /** Packet playbackResult */
                playbackResult?: (mediflow.v3.PlaybackResult.$Properties|null);

                /** Packet result */
                result?: (mediflow.v3.Result.$Properties|null);

                /** Packet problem */
                problem?: (mediflow.v3.Problem.$Properties|null);

                /** Packet health */
                health?: (mediflow.v3.Health.$Properties|null);

                /** Packet retain */
                retain?: (mediflow.v3.Retain.$Properties|null);

                /** Packet retained */
                retained?: (mediflow.v3.Retained.$Properties|null);

                /** Packet empty */
                empty?: (mediflow.v3.Empty.$Properties|null);

                /** Packet pendingCalls */
                pendingCalls?: (mediflow.v3.PendingCalls.$Properties|null);

                /** Packet body */
                body?: ("frame"|"snapshot"|"screen"|"call"|"consumption"|"audit"|"archive"|"callPage"|"screenPage"|"consumptionPage"|"auditPage"|"archivePage"|"historyPage"|"screenDetail"|"overview"|"archiveBundle"|"login"|"user"|"publish"|"consume"|"playback"|"playbackResult"|"result"|"problem"|"health"|"retain"|"retained"|"empty"|"pendingCalls");

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a Packet. */
            type $Shape = {
              protocolVersion?: number|null;
              frame?: mediflow.v3.Frame.$Shape|null;
              snapshot?: mediflow.v3.Snapshot.$Shape|null;
              screen?: mediflow.v3.Screen.$Shape|null;
              call?: mediflow.v3.Call.$Shape|null;
              consumption?: mediflow.v3.Consumption.$Shape|null;
              audit?: mediflow.v3.Audit.$Shape|null;
              archive?: mediflow.v3.Archive.$Shape|null;
              callPage?: mediflow.v3.CallPage.$Shape|null;
              screenPage?: mediflow.v3.ScreenPage.$Shape|null;
              consumptionPage?: mediflow.v3.ConsumptionPage.$Shape|null;
              auditPage?: mediflow.v3.AuditPage.$Shape|null;
              archivePage?: mediflow.v3.ArchivePage.$Shape|null;
              historyPage?: mediflow.v3.HistoryPage.$Shape|null;
              screenDetail?: mediflow.v3.ScreenDetail.$Shape|null;
              overview?: mediflow.v3.Overview.$Shape|null;
              archiveBundle?: mediflow.v3.ArchiveBundle.$Shape|null;
              login?: mediflow.v3.Login.$Shape|null;
              user?: mediflow.v3.User.$Shape|null;
              publish?: mediflow.v3.Publish.$Shape|null;
              consume?: mediflow.v3.Consume.$Shape|null;
              playback?: mediflow.v3.Playback.$Shape|null;
              playbackResult?: mediflow.v3.PlaybackResult.$Shape|null;
              result?: mediflow.v3.Result.$Shape|null;
              problem?: mediflow.v3.Problem.$Shape|null;
              health?: mediflow.v3.Health.$Shape|null;
              retain?: mediflow.v3.Retain.$Shape|null;
              retained?: mediflow.v3.Retained.$Shape|null;
              empty?: mediflow.v3.Empty.$Shape|null;
              pendingCalls?: mediflow.v3.PendingCalls.$Shape|null;
              $unknowns?: Uint8Array[];
            } & (
              ({ body?: undefined; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "frame"; frame: mediflow.v3.Frame.$Shape; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "snapshot"; frame?: null; snapshot: mediflow.v3.Snapshot.$Shape; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "screen"; frame?: null; snapshot?: null; screen: mediflow.v3.Screen.$Shape; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "call"; frame?: null; snapshot?: null; screen?: null; call: mediflow.v3.Call.$Shape; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "consumption"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption: mediflow.v3.Consumption.$Shape; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "audit"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit: mediflow.v3.Audit.$Shape; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "archive"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive: mediflow.v3.Archive.$Shape; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "callPage"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage: mediflow.v3.CallPage.$Shape; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "screenPage"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage: mediflow.v3.ScreenPage.$Shape; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "consumptionPage"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage: mediflow.v3.ConsumptionPage.$Shape; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "auditPage"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage: mediflow.v3.AuditPage.$Shape; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "archivePage"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage: mediflow.v3.ArchivePage.$Shape; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "historyPage"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage: mediflow.v3.HistoryPage.$Shape; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "screenDetail"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail: mediflow.v3.ScreenDetail.$Shape; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "overview"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview: mediflow.v3.Overview.$Shape; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "archiveBundle"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle: mediflow.v3.ArchiveBundle.$Shape; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "login"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login: mediflow.v3.Login.$Shape; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "user"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user: mediflow.v3.User.$Shape; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "publish"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish: mediflow.v3.Publish.$Shape; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "consume"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume: mediflow.v3.Consume.$Shape; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "playback"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback: mediflow.v3.Playback.$Shape; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "playbackResult"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult: mediflow.v3.PlaybackResult.$Shape; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "result"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result: mediflow.v3.Result.$Shape; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "problem"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem: mediflow.v3.Problem.$Shape; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "health"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health: mediflow.v3.Health.$Shape; retain?: null; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "retain"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain: mediflow.v3.Retain.$Shape; retained?: null; empty?: null; pendingCalls?: null }|{ body?: "retained"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained: mediflow.v3.Retained.$Shape; empty?: null; pendingCalls?: null }|{ body?: "empty"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty: mediflow.v3.Empty.$Shape; pendingCalls?: null }|{ body?: "pendingCalls"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls: mediflow.v3.PendingCalls.$Shape })
            );
        }

        /**
         * Properties of a PlaybackEvent.
         * @deprecated Use mediflow.v3.PlaybackEvent.$Properties instead.
         */
        interface IPlaybackEvent extends mediflow.v3.PlaybackEvent.$Properties {
        }

        /** Represents a PlaybackEvent. */
        class PlaybackEvent {

            /**
             * Constructs a new PlaybackEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediflow.v3.PlaybackEvent.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PlaybackEvent screenId. */
            screenId?: (string|null);

            /** PlaybackEvent eventId. */
            eventId?: (string|null);

            /** PlaybackEvent requestId. */
            requestId?: (string|null);

            /** PlaybackEvent callId. */
            callId?: (string|null);

            /** PlaybackEvent status. */
            status?: (string|null);

            /** PlaybackEvent detail. */
            detail?: (string|null);

            /** PlaybackEvent createdAt. */
            createdAt?: (string|null);

            /**
             * Creates a new PlaybackEvent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlaybackEvent instance
             */
            static create(properties: mediflow.v3.PlaybackEvent.$Shape): mediflow.v3.PlaybackEvent & mediflow.v3.PlaybackEvent.$Shape;
            static create(properties?: mediflow.v3.PlaybackEvent.$Properties): mediflow.v3.PlaybackEvent;

            /**
             * Encodes the specified PlaybackEvent message. Does not implicitly {@link mediflow.v3.PlaybackEvent.verify|verify} messages.
             * @param message PlaybackEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: mediflow.v3.PlaybackEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlaybackEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {mediflow.v3.PlaybackEvent & mediflow.v3.PlaybackEvent.$Shape} PlaybackEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediflow.v3.PlaybackEvent & mediflow.v3.PlaybackEvent.$Shape;

            /**
             * Verifies a PlaybackEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlaybackEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlaybackEvent
             */
            static fromObject(object: { [k: string]: any }): mediflow.v3.PlaybackEvent;

            /**
             * Creates a plain object from a PlaybackEvent message. Also converts values to other types if specified.
             * @param message PlaybackEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: mediflow.v3.PlaybackEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlaybackEvent to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PlaybackEvent
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PlaybackEvent {

            /** Properties of a PlaybackEvent. */
            interface $Properties {

                /** PlaybackEvent screenId */
                screenId?: (string|null);

                /** PlaybackEvent eventId */
                eventId?: (string|null);

                /** PlaybackEvent requestId */
                requestId?: (string|null);

                /** PlaybackEvent callId */
                callId?: (string|null);

                /** PlaybackEvent status */
                status?: (string|null);

                /** PlaybackEvent detail */
                detail?: (string|null);

                /** PlaybackEvent createdAt */
                createdAt?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PlaybackEvent. */
            type $Shape = mediflow.v3.PlaybackEvent.$Properties;
        }
    }
}
