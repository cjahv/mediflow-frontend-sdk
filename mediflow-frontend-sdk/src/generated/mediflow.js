/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $RangeError = $util.global.RangeError, $TypeError = $util.global.TypeError, $String = $util.global.String, $Number = $util.global.Number, $Array = $util.global.Array, $isFinite = $util.global.isFinite, $parseInt = $util.global.parseInt, $BigInt = $util.global.BigInt, $Boolean = $util.global.Boolean;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const mediflow = $root.mediflow = (() => {

    /**
     * Namespace mediflow.
     * @exports mediflow
     * @namespace
     */
    const mediflow = {};

    mediflow.v4 = (function() {

        /**
         * Namespace v4.
         * @memberof mediflow
         * @namespace
         */
        const v4 = {};

        v4.Person = (function() {

            /**
             * Properties of a Person.
             * @typedef {Object} mediflow.v4.Person.$Properties
             * @property {Uint8Array|null} [id] Person id
             * @property {string|null} [name] Person name
             * @property {number|null} [order] Person order
             * @property {string|null} [displayNumber] Person displayNumber
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Person.
             * @memberof mediflow.v4
             * @interface IPerson
             * @augments mediflow.v4.Person.$Properties
             * @deprecated Use mediflow.v4.Person.$Properties instead.
             */

            /**
             * Shape of a Person.
             * @typedef {mediflow.v4.Person.$Properties} mediflow.v4.Person.$Shape
             */

            /**
             * Constructs a new Person.
             * @memberof mediflow.v4
             * @classdesc Represents a Person.
             * @constructor
             * @param {mediflow.v4.Person.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Person = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Person id.
             * @member {Uint8Array|null|undefined} id
             * @memberof mediflow.v4.Person
             * @instance
             */
            Person.prototype.id = null;

            /**
             * Person name.
             * @member {string|null|undefined} name
             * @memberof mediflow.v4.Person
             * @instance
             */
            Person.prototype.name = null;

            /**
             * Person order.
             * @member {number|null|undefined} order
             * @memberof mediflow.v4.Person
             * @instance
             */
            Person.prototype.order = null;

            /**
             * Person displayNumber.
             * @member {string|null|undefined} displayNumber
             * @memberof mediflow.v4.Person
             * @instance
             */
            Person.prototype.displayNumber = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Person.prototype, "_id", {
                get: $util.oneOfGetter($oneOfFields = ["id"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Person.prototype, "_name", {
                get: $util.oneOfGetter($oneOfFields = ["name"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Person.prototype, "_order", {
                get: $util.oneOfGetter($oneOfFields = ["order"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Person.prototype, "_displayNumber", {
                get: $util.oneOfGetter($oneOfFields = ["displayNumber"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Person instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Person
             * @static
             * @param {mediflow.v4.Person.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Person} Person instance
             * @type {{
             *   (properties: mediflow.v4.Person.$Shape): mediflow.v4.Person & mediflow.v4.Person.$Shape;
             *   (properties?: mediflow.v4.Person.$Properties): mediflow.v4.Person;
             * }}
             */
            Person.create = function(properties) {
                return new Person(properties);
            };

            /**
             * Encodes the specified Person message. Does not implicitly {@link mediflow.v4.Person.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Person
             * @static
             * @param {mediflow.v4.Person.$Properties} message Person message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Person.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.order != null && $Object.hasOwnProperty.call(message, "order"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.order);
                if (message.displayNumber != null && $Object.hasOwnProperty.call(message, "displayNumber"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.displayNumber);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Person message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Person
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Person & mediflow.v4.Person.$Shape} Person
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Person.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Person();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.id = reader.bytes();
                            message._id = "id";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.name = reader.stringVerify();
                            message._name = "name";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 1)
                                break;
                            message.order = reader.double();
                            message._order = "order";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.displayNumber = reader.stringVerify();
                            message._displayNumber = "displayNumber";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Person message.
             * @function verify
             * @memberof mediflow.v4.Person
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Person.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.id != null && $Object.hasOwnProperty.call(message, "id")) {
                    properties._id = 1;
                    if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                        return "id: buffer expected";
                }
                if (message.name != null && $Object.hasOwnProperty.call(message, "name")) {
                    properties._name = 1;
                    if (!$util.isString(message.name))
                        return "name: string expected";
                }
                if (message.order != null && $Object.hasOwnProperty.call(message, "order")) {
                    properties._order = 1;
                    if (typeof message.order !== "number")
                        return "order: number expected";
                }
                if (message.displayNumber != null && $Object.hasOwnProperty.call(message, "displayNumber")) {
                    properties._displayNumber = 1;
                    if (!$util.isString(message.displayNumber))
                        return "displayNumber: string expected";
                }
                return null;
            };

            /**
             * Creates a Person message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Person
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Person} Person
             */
            Person.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Person)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Person: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Person();
                if (object.id != null)
                    if (typeof object.id === "string")
                        $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                    else if (object.id.length >= 0)
                        message.id = object.id;
                if (object.name != null)
                    message.name = $String(object.name);
                if (object.order != null)
                    message.order = $Number(object.order);
                if (object.displayNumber != null)
                    message.displayNumber = $String(object.displayNumber);
                return message;
            };

            /**
             * Creates a plain object from a Person message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Person
             * @static
             * @param {mediflow.v4.Person} message Person
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Person.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    object.id = options.bytes === $String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.id) : message.id;
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    object.name = message.name;
                if (message.order != null && $Object.hasOwnProperty.call(message, "order"))
                    object.order = options.json && !$isFinite(message.order) ? $String(message.order) : message.order;
                if (message.displayNumber != null && $Object.hasOwnProperty.call(message, "displayNumber"))
                    object.displayNumber = message.displayNumber;
                return object;
            };

            /**
             * Converts this Person to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Person
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Person.prototype.toJSON = function() {
                return Person.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Person
             * @function getTypeUrl
             * @memberof mediflow.v4.Person
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Person.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Person";
            };

            return Person;
        })();

        v4.Section = (function() {

            /**
             * Properties of a Section.
             * @typedef {Object} mediflow.v4.Section.$Properties
             * @property {Uint8Array|null} [id] Section id
             * @property {string|null} [name] Section name
             * @property {Array.<mediflow.v4.Person.$Properties>|null} [persons] Section persons
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Section.
             * @memberof mediflow.v4
             * @interface ISection
             * @augments mediflow.v4.Section.$Properties
             * @deprecated Use mediflow.v4.Section.$Properties instead.
             */

            /**
             * Shape of a Section.
             * @typedef {mediflow.v4.Section.$Properties} mediflow.v4.Section.$Shape
             */

            /**
             * Constructs a new Section.
             * @memberof mediflow.v4
             * @classdesc Represents a Section.
             * @constructor
             * @param {mediflow.v4.Section.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Section = function (properties) {
                this.persons = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Section id.
             * @member {Uint8Array|null|undefined} id
             * @memberof mediflow.v4.Section
             * @instance
             */
            Section.prototype.id = null;

            /**
             * Section name.
             * @member {string|null|undefined} name
             * @memberof mediflow.v4.Section
             * @instance
             */
            Section.prototype.name = null;

            /**
             * Section persons.
             * @member {Array.<mediflow.v4.Person.$Properties>} persons
             * @memberof mediflow.v4.Section
             * @instance
             */
            Section.prototype.persons = $util.emptyArray;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Section.prototype, "_id", {
                get: $util.oneOfGetter($oneOfFields = ["id"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Section.prototype, "_name", {
                get: $util.oneOfGetter($oneOfFields = ["name"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Section instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Section
             * @static
             * @param {mediflow.v4.Section.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Section} Section instance
             * @type {{
             *   (properties: mediflow.v4.Section.$Shape): mediflow.v4.Section & mediflow.v4.Section.$Shape;
             *   (properties?: mediflow.v4.Section.$Properties): mediflow.v4.Section;
             * }}
             */
            Section.create = function(properties) {
                return new Section(properties);
            };

            /**
             * Encodes the specified Section message. Does not implicitly {@link mediflow.v4.Section.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Section
             * @static
             * @param {mediflow.v4.Section.$Properties} message Section message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Section.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.persons != null && message.persons.length)
                    for (let i = 0; i < message.persons.length; ++i)
                        $root.mediflow.v4.Person.encode(message.persons[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Section message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Section
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Section & mediflow.v4.Section.$Shape} Section
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Section.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Section();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.id = reader.bytes();
                            message._id = "id";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.name = reader.stringVerify();
                            message._name = "name";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if (!(message.persons && message.persons.length))
                                message.persons = [];
                            message.persons.push($root.mediflow.v4.Person.decode(reader, reader.size(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Section message.
             * @function verify
             * @memberof mediflow.v4.Section
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Section.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.id != null && $Object.hasOwnProperty.call(message, "id")) {
                    properties._id = 1;
                    if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                        return "id: buffer expected";
                }
                if (message.name != null && $Object.hasOwnProperty.call(message, "name")) {
                    properties._name = 1;
                    if (!$util.isString(message.name))
                        return "name: string expected";
                }
                if (message.persons != null && $Object.hasOwnProperty.call(message, "persons")) {
                    if (!$Array.isArray(message.persons))
                        return "persons: array expected";
                    for (let i = 0; i < message.persons.length; ++i) {
                        let error = $root.mediflow.v4.Person.verify(message.persons[i], _depth + 1);
                        if (error)
                            return "persons." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Section message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Section
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Section} Section
             */
            Section.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Section)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Section: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Section();
                if (object.id != null)
                    if (typeof object.id === "string")
                        $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                    else if (object.id.length >= 0)
                        message.id = object.id;
                if (object.name != null)
                    message.name = $String(object.name);
                if (object.persons) {
                    if (!$Array.isArray(object.persons))
                        throw $TypeError(".mediflow.v4.Section.persons: array expected");
                    message.persons = $Array(object.persons.length);
                    for (let i = 0; i < object.persons.length; ++i) {
                        if (!$util.isObject(object.persons[i]))
                            throw $TypeError(".mediflow.v4.Section.persons: object expected");
                        message.persons[i] = $root.mediflow.v4.Person.fromObject(object.persons[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Section message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Section
             * @static
             * @param {mediflow.v4.Section} message Section
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Section.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.persons = [];
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    object.id = options.bytes === $String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.id) : message.id;
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    object.name = message.name;
                if (message.persons && message.persons.length) {
                    object.persons = $Array(message.persons.length);
                    for (let j = 0; j < message.persons.length; ++j)
                        object.persons[j] = $root.mediflow.v4.Person.toObject(message.persons[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this Section to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Section
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Section.prototype.toJSON = function() {
                return Section.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Section
             * @function getTypeUrl
             * @memberof mediflow.v4.Section
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Section.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Section";
            };

            return Section;
        })();

        v4.Queue = (function() {

            /**
             * Properties of a Queue.
             * @typedef {Object} mediflow.v4.Queue.$Properties
             * @property {Uint8Array|null} [id] Queue id
             * @property {string|null} [name] Queue name
             * @property {Array.<mediflow.v4.Section.$Properties>|null} [sections] Queue sections
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Queue.
             * @memberof mediflow.v4
             * @interface IQueue
             * @augments mediflow.v4.Queue.$Properties
             * @deprecated Use mediflow.v4.Queue.$Properties instead.
             */

            /**
             * Shape of a Queue.
             * @typedef {mediflow.v4.Queue.$Properties} mediflow.v4.Queue.$Shape
             */

            /**
             * Constructs a new Queue.
             * @memberof mediflow.v4
             * @classdesc Represents a Queue.
             * @constructor
             * @param {mediflow.v4.Queue.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Queue = function (properties) {
                this.sections = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Queue id.
             * @member {Uint8Array|null|undefined} id
             * @memberof mediflow.v4.Queue
             * @instance
             */
            Queue.prototype.id = null;

            /**
             * Queue name.
             * @member {string|null|undefined} name
             * @memberof mediflow.v4.Queue
             * @instance
             */
            Queue.prototype.name = null;

            /**
             * Queue sections.
             * @member {Array.<mediflow.v4.Section.$Properties>} sections
             * @memberof mediflow.v4.Queue
             * @instance
             */
            Queue.prototype.sections = $util.emptyArray;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Queue.prototype, "_id", {
                get: $util.oneOfGetter($oneOfFields = ["id"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Queue.prototype, "_name", {
                get: $util.oneOfGetter($oneOfFields = ["name"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Queue instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Queue
             * @static
             * @param {mediflow.v4.Queue.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Queue} Queue instance
             * @type {{
             *   (properties: mediflow.v4.Queue.$Shape): mediflow.v4.Queue & mediflow.v4.Queue.$Shape;
             *   (properties?: mediflow.v4.Queue.$Properties): mediflow.v4.Queue;
             * }}
             */
            Queue.create = function(properties) {
                return new Queue(properties);
            };

            /**
             * Encodes the specified Queue message. Does not implicitly {@link mediflow.v4.Queue.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Queue
             * @static
             * @param {mediflow.v4.Queue.$Properties} message Queue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Queue.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.sections != null && message.sections.length)
                    for (let i = 0; i < message.sections.length; ++i)
                        $root.mediflow.v4.Section.encode(message.sections[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Queue message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Queue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Queue & mediflow.v4.Queue.$Shape} Queue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Queue.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Queue();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.id = reader.bytes();
                            message._id = "id";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.name = reader.stringVerify();
                            message._name = "name";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if (!(message.sections && message.sections.length))
                                message.sections = [];
                            message.sections.push($root.mediflow.v4.Section.decode(reader, reader.size(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Queue message.
             * @function verify
             * @memberof mediflow.v4.Queue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Queue.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.id != null && $Object.hasOwnProperty.call(message, "id")) {
                    properties._id = 1;
                    if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                        return "id: buffer expected";
                }
                if (message.name != null && $Object.hasOwnProperty.call(message, "name")) {
                    properties._name = 1;
                    if (!$util.isString(message.name))
                        return "name: string expected";
                }
                if (message.sections != null && $Object.hasOwnProperty.call(message, "sections")) {
                    if (!$Array.isArray(message.sections))
                        return "sections: array expected";
                    for (let i = 0; i < message.sections.length; ++i) {
                        let error = $root.mediflow.v4.Section.verify(message.sections[i], _depth + 1);
                        if (error)
                            return "sections." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Queue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Queue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Queue} Queue
             */
            Queue.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Queue)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Queue: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Queue();
                if (object.id != null)
                    if (typeof object.id === "string")
                        $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                    else if (object.id.length >= 0)
                        message.id = object.id;
                if (object.name != null)
                    message.name = $String(object.name);
                if (object.sections) {
                    if (!$Array.isArray(object.sections))
                        throw $TypeError(".mediflow.v4.Queue.sections: array expected");
                    message.sections = $Array(object.sections.length);
                    for (let i = 0; i < object.sections.length; ++i) {
                        if (!$util.isObject(object.sections[i]))
                            throw $TypeError(".mediflow.v4.Queue.sections: object expected");
                        message.sections[i] = $root.mediflow.v4.Section.fromObject(object.sections[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Queue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Queue
             * @static
             * @param {mediflow.v4.Queue} message Queue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Queue.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.sections = [];
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    object.id = options.bytes === $String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.id) : message.id;
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    object.name = message.name;
                if (message.sections && message.sections.length) {
                    object.sections = $Array(message.sections.length);
                    for (let j = 0; j < message.sections.length; ++j)
                        object.sections[j] = $root.mediflow.v4.Section.toObject(message.sections[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this Queue to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Queue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Queue.prototype.toJSON = function() {
                return Queue.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Queue
             * @function getTypeUrl
             * @memberof mediflow.v4.Queue
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Queue.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Queue";
            };

            return Queue;
        })();

        v4.Template = (function() {

            /**
             * Properties of a Template.
             * @typedef {Object} mediflow.v4.Template.$Properties
             * @property {Array.<mediflow.v4.Queue.$Properties>|null} [queues] Template queues
             * @property {string|null} [callTextTemplate] Template callTextTemplate
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Template.
             * @memberof mediflow.v4
             * @interface ITemplate
             * @augments mediflow.v4.Template.$Properties
             * @deprecated Use mediflow.v4.Template.$Properties instead.
             */

            /**
             * Shape of a Template.
             * @typedef {mediflow.v4.Template.$Properties} mediflow.v4.Template.$Shape
             */

            /**
             * Constructs a new Template.
             * @memberof mediflow.v4
             * @classdesc Represents a Template.
             * @constructor
             * @param {mediflow.v4.Template.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Template = function (properties) {
                this.queues = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Template queues.
             * @member {Array.<mediflow.v4.Queue.$Properties>} queues
             * @memberof mediflow.v4.Template
             * @instance
             */
            Template.prototype.queues = $util.emptyArray;

            /**
             * Template callTextTemplate.
             * @member {string|null|undefined} callTextTemplate
             * @memberof mediflow.v4.Template
             * @instance
             */
            Template.prototype.callTextTemplate = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Template.prototype, "_callTextTemplate", {
                get: $util.oneOfGetter($oneOfFields = ["callTextTemplate"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Template instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Template
             * @static
             * @param {mediflow.v4.Template.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Template} Template instance
             * @type {{
             *   (properties: mediflow.v4.Template.$Shape): mediflow.v4.Template & mediflow.v4.Template.$Shape;
             *   (properties?: mediflow.v4.Template.$Properties): mediflow.v4.Template;
             * }}
             */
            Template.create = function(properties) {
                return new Template(properties);
            };

            /**
             * Encodes the specified Template message. Does not implicitly {@link mediflow.v4.Template.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Template
             * @static
             * @param {mediflow.v4.Template.$Properties} message Template message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Template.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.queues != null && message.queues.length)
                    for (let i = 0; i < message.queues.length; ++i)
                        $root.mediflow.v4.Queue.encode(message.queues[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.callTextTemplate != null && $Object.hasOwnProperty.call(message, "callTextTemplate"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.callTextTemplate);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Template message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Template
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Template & mediflow.v4.Template.$Shape} Template
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Template.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Template();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.queues && message.queues.length))
                                message.queues = [];
                            message.queues.push($root.mediflow.v4.Queue.decode(reader, reader.size(), $undefined, _depth + 1));
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.callTextTemplate = reader.stringVerify();
                            message._callTextTemplate = "callTextTemplate";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Template message.
             * @function verify
             * @memberof mediflow.v4.Template
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Template.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.queues != null && $Object.hasOwnProperty.call(message, "queues")) {
                    if (!$Array.isArray(message.queues))
                        return "queues: array expected";
                    for (let i = 0; i < message.queues.length; ++i) {
                        let error = $root.mediflow.v4.Queue.verify(message.queues[i], _depth + 1);
                        if (error)
                            return "queues." + error;
                    }
                }
                if (message.callTextTemplate != null && $Object.hasOwnProperty.call(message, "callTextTemplate")) {
                    properties._callTextTemplate = 1;
                    if (!$util.isString(message.callTextTemplate))
                        return "callTextTemplate: string expected";
                }
                return null;
            };

            /**
             * Creates a Template message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Template
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Template} Template
             */
            Template.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Template)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Template: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Template();
                if (object.queues) {
                    if (!$Array.isArray(object.queues))
                        throw $TypeError(".mediflow.v4.Template.queues: array expected");
                    message.queues = $Array(object.queues.length);
                    for (let i = 0; i < object.queues.length; ++i) {
                        if (!$util.isObject(object.queues[i]))
                            throw $TypeError(".mediflow.v4.Template.queues: object expected");
                        message.queues[i] = $root.mediflow.v4.Queue.fromObject(object.queues[i], _depth + 1);
                    }
                }
                if (object.callTextTemplate != null)
                    message.callTextTemplate = $String(object.callTextTemplate);
                return message;
            };

            /**
             * Creates a plain object from a Template message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Template
             * @static
             * @param {mediflow.v4.Template} message Template
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Template.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.queues = [];
                if (message.queues && message.queues.length) {
                    object.queues = $Array(message.queues.length);
                    for (let j = 0; j < message.queues.length; ++j)
                        object.queues[j] = $root.mediflow.v4.Queue.toObject(message.queues[j], options, _depth + 1);
                }
                if (message.callTextTemplate != null && $Object.hasOwnProperty.call(message, "callTextTemplate"))
                    object.callTextTemplate = message.callTextTemplate;
                return object;
            };

            /**
             * Converts this Template to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Template
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Template.prototype.toJSON = function() {
                return Template.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Template
             * @function getTypeUrl
             * @memberof mediflow.v4.Template
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Template.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Template";
            };

            return Template;
        })();

        v4.Snapshot = (function() {

            /**
             * Properties of a Snapshot.
             * @typedef {Object} mediflow.v4.Snapshot.$Properties
             * @property {Uint8Array|null} [epoch] Snapshot epoch
             * @property {Uint8Array|null} [screenId] Snapshot screenId
             * @property {number|Long|null} [version] Snapshot version
             * @property {string|null} [templateVersion] Snapshot templateVersion
             * @property {mediflow.v4.Template.$Properties|null} [data] Snapshot data
             * @property {string|null} [screenName] Snapshot screenName
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Snapshot.
             * @memberof mediflow.v4
             * @interface ISnapshot
             * @augments mediflow.v4.Snapshot.$Properties
             * @deprecated Use mediflow.v4.Snapshot.$Properties instead.
             */

            /**
             * Shape of a Snapshot.
             * @typedef {mediflow.v4.Snapshot.$Properties} mediflow.v4.Snapshot.$Shape
             */

            /**
             * Constructs a new Snapshot.
             * @memberof mediflow.v4
             * @classdesc Represents a Snapshot.
             * @constructor
             * @param {mediflow.v4.Snapshot.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Snapshot = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Snapshot epoch.
             * @member {Uint8Array|null|undefined} epoch
             * @memberof mediflow.v4.Snapshot
             * @instance
             */
            Snapshot.prototype.epoch = null;

            /**
             * Snapshot screenId.
             * @member {Uint8Array|null|undefined} screenId
             * @memberof mediflow.v4.Snapshot
             * @instance
             */
            Snapshot.prototype.screenId = null;

            /**
             * Snapshot version.
             * @member {number|Long|null|undefined} version
             * @memberof mediflow.v4.Snapshot
             * @instance
             */
            Snapshot.prototype.version = null;

            /**
             * Snapshot templateVersion.
             * @member {string|null|undefined} templateVersion
             * @memberof mediflow.v4.Snapshot
             * @instance
             */
            Snapshot.prototype.templateVersion = null;

            /**
             * Snapshot data.
             * @member {mediflow.v4.Template.$Properties|null|undefined} data
             * @memberof mediflow.v4.Snapshot
             * @instance
             */
            Snapshot.prototype.data = null;

            /**
             * Snapshot screenName.
             * @member {string|null|undefined} screenName
             * @memberof mediflow.v4.Snapshot
             * @instance
             */
            Snapshot.prototype.screenName = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Snapshot.prototype, "_epoch", {
                get: $util.oneOfGetter($oneOfFields = ["epoch"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Snapshot.prototype, "_screenId", {
                get: $util.oneOfGetter($oneOfFields = ["screenId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Snapshot.prototype, "_version", {
                get: $util.oneOfGetter($oneOfFields = ["version"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Snapshot.prototype, "_templateVersion", {
                get: $util.oneOfGetter($oneOfFields = ["templateVersion"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Snapshot.prototype, "_screenName", {
                get: $util.oneOfGetter($oneOfFields = ["screenName"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Snapshot instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Snapshot
             * @static
             * @param {mediflow.v4.Snapshot.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Snapshot} Snapshot instance
             * @type {{
             *   (properties: mediflow.v4.Snapshot.$Shape): mediflow.v4.Snapshot & mediflow.v4.Snapshot.$Shape;
             *   (properties?: mediflow.v4.Snapshot.$Properties): mediflow.v4.Snapshot;
             * }}
             */
            Snapshot.create = function(properties) {
                return new Snapshot(properties);
            };

            /**
             * Encodes the specified Snapshot message. Does not implicitly {@link mediflow.v4.Snapshot.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Snapshot
             * @static
             * @param {mediflow.v4.Snapshot.$Properties} message Snapshot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Snapshot.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.epoch != null && $Object.hasOwnProperty.call(message, "epoch"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.epoch);
                if (message.screenId != null && $Object.hasOwnProperty.call(message, "screenId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.screenId);
                if (message.version != null && $Object.hasOwnProperty.call(message, "version"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.version);
                if (message.templateVersion != null && $Object.hasOwnProperty.call(message, "templateVersion"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.templateVersion);
                if (message.data != null && $Object.hasOwnProperty.call(message, "data"))
                    $root.mediflow.v4.Template.encode(message.data, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
                if (message.screenName != null && $Object.hasOwnProperty.call(message, "screenName"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.screenName);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Snapshot message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Snapshot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Snapshot & mediflow.v4.Snapshot.$Shape} Snapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Snapshot.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Snapshot();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.epoch = reader.bytes();
                            message._epoch = "epoch";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.screenId = reader.bytes();
                            message._screenId = "screenId";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.version = reader.uint64();
                            message._version = "version";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.templateVersion = reader.stringVerify();
                            message._templateVersion = "templateVersion";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.data = $root.mediflow.v4.Template.decode(reader, reader.size(), $undefined, _depth + 1, message.data);
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            message.screenName = reader.stringVerify();
                            message._screenName = "screenName";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Snapshot message.
             * @function verify
             * @memberof mediflow.v4.Snapshot
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Snapshot.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.epoch != null && $Object.hasOwnProperty.call(message, "epoch")) {
                    properties._epoch = 1;
                    if (!(message.epoch && typeof message.epoch.length === "number" || $util.isString(message.epoch)))
                        return "epoch: buffer expected";
                }
                if (message.screenId != null && $Object.hasOwnProperty.call(message, "screenId")) {
                    properties._screenId = 1;
                    if (!(message.screenId && typeof message.screenId.length === "number" || $util.isString(message.screenId)))
                        return "screenId: buffer expected";
                }
                if (message.version != null && $Object.hasOwnProperty.call(message, "version")) {
                    properties._version = 1;
                    if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                        return "version: integer|Long expected";
                }
                if (message.templateVersion != null && $Object.hasOwnProperty.call(message, "templateVersion")) {
                    properties._templateVersion = 1;
                    if (!$util.isString(message.templateVersion))
                        return "templateVersion: string expected";
                }
                if (message.data != null && $Object.hasOwnProperty.call(message, "data")) {
                    let error = $root.mediflow.v4.Template.verify(message.data, _depth + 1);
                    if (error)
                        return "data." + error;
                }
                if (message.screenName != null && $Object.hasOwnProperty.call(message, "screenName")) {
                    properties._screenName = 1;
                    if (!$util.isString(message.screenName))
                        return "screenName: string expected";
                }
                return null;
            };

            /**
             * Creates a Snapshot message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Snapshot
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Snapshot} Snapshot
             */
            Snapshot.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Snapshot)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Snapshot: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Snapshot();
                if (object.epoch != null)
                    if (typeof object.epoch === "string")
                        $util.base64.decode(object.epoch, message.epoch = $util.newBuffer($util.base64.length(object.epoch)), 0);
                    else if (object.epoch.length >= 0)
                        message.epoch = object.epoch;
                if (object.screenId != null)
                    if (typeof object.screenId === "string")
                        $util.base64.decode(object.screenId, message.screenId = $util.newBuffer($util.base64.length(object.screenId)), 0);
                    else if (object.screenId.length >= 0)
                        message.screenId = object.screenId;
                if (object.version != null)
                    if ($util.Long)
                        message.version = $util.Long.fromValue(object.version, true);
                    else if (typeof object.version === "string")
                        message.version = $parseInt(object.version, 10);
                    else if (typeof object.version === "number")
                        message.version = object.version;
                    else if (typeof object.version === "object")
                        message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
                if (object.templateVersion != null)
                    message.templateVersion = $String(object.templateVersion);
                if (object.data != null) {
                    if (!$util.isObject(object.data))
                        throw $TypeError(".mediflow.v4.Snapshot.data: object expected");
                    message.data = $root.mediflow.v4.Template.fromObject(object.data, _depth + 1);
                }
                if (object.screenName != null)
                    message.screenName = $String(object.screenName);
                return message;
            };

            /**
             * Creates a plain object from a Snapshot message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Snapshot
             * @static
             * @param {mediflow.v4.Snapshot} message Snapshot
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Snapshot.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    object.data = null;
                if (message.epoch != null && $Object.hasOwnProperty.call(message, "epoch"))
                    object.epoch = options.bytes === $String ? $util.base64.encode(message.epoch, 0, message.epoch.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.epoch) : message.epoch;
                if (message.screenId != null && $Object.hasOwnProperty.call(message, "screenId"))
                    object.screenId = options.bytes === $String ? $util.base64.encode(message.screenId, 0, message.screenId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.screenId) : message.screenId;
                if (message.version != null && $Object.hasOwnProperty.call(message, "version"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.version = typeof message.version === "number" ? $BigInt(message.version) : $util.Long.fromBits(message.version.low >>> 0, message.version.high >>> 0, true).toBigInt();
                    else if (typeof message.version === "number")
                        object.version = options.longs === $String ? $String(message.version) : message.version;
                    else
                        object.version = options.longs === $String ? $util.Long.prototype.toString.call(message.version) : options.longs === $Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
                if (message.templateVersion != null && $Object.hasOwnProperty.call(message, "templateVersion"))
                    object.templateVersion = message.templateVersion;
                if (message.data != null && $Object.hasOwnProperty.call(message, "data"))
                    object.data = $root.mediflow.v4.Template.toObject(message.data, options, _depth + 1);
                if (message.screenName != null && $Object.hasOwnProperty.call(message, "screenName"))
                    object.screenName = message.screenName;
                return object;
            };

            /**
             * Converts this Snapshot to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Snapshot
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Snapshot.prototype.toJSON = function() {
                return Snapshot.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Snapshot
             * @function getTypeUrl
             * @memberof mediflow.v4.Snapshot
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Snapshot.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Snapshot";
            };

            return Snapshot;
        })();

        v4.Screen = (function() {

            /**
             * Properties of a Screen.
             * @typedef {Object} mediflow.v4.Screen.$Properties
             * @property {Uint8Array|null} [id] Screen id
             * @property {string|null} [name] Screen name
             * @property {Uint8Array|null} [token] Screen token
             * @property {string|null} [createdAt] Screen createdAt
             * @property {boolean|null} [online] Screen online
             * @property {number|Long|null} [version] Screen version
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Screen.
             * @memberof mediflow.v4
             * @interface IScreen
             * @augments mediflow.v4.Screen.$Properties
             * @deprecated Use mediflow.v4.Screen.$Properties instead.
             */

            /**
             * Shape of a Screen.
             * @typedef {mediflow.v4.Screen.$Properties} mediflow.v4.Screen.$Shape
             */

            /**
             * Constructs a new Screen.
             * @memberof mediflow.v4
             * @classdesc Represents a Screen.
             * @constructor
             * @param {mediflow.v4.Screen.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Screen = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Screen id.
             * @member {Uint8Array|null|undefined} id
             * @memberof mediflow.v4.Screen
             * @instance
             */
            Screen.prototype.id = null;

            /**
             * Screen name.
             * @member {string|null|undefined} name
             * @memberof mediflow.v4.Screen
             * @instance
             */
            Screen.prototype.name = null;

            /**
             * Screen token.
             * @member {Uint8Array|null|undefined} token
             * @memberof mediflow.v4.Screen
             * @instance
             */
            Screen.prototype.token = null;

            /**
             * Screen createdAt.
             * @member {string|null|undefined} createdAt
             * @memberof mediflow.v4.Screen
             * @instance
             */
            Screen.prototype.createdAt = null;

            /**
             * Screen online.
             * @member {boolean|null|undefined} online
             * @memberof mediflow.v4.Screen
             * @instance
             */
            Screen.prototype.online = null;

            /**
             * Screen version.
             * @member {number|Long|null|undefined} version
             * @memberof mediflow.v4.Screen
             * @instance
             */
            Screen.prototype.version = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Screen.prototype, "_id", {
                get: $util.oneOfGetter($oneOfFields = ["id"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Screen.prototype, "_name", {
                get: $util.oneOfGetter($oneOfFields = ["name"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Screen.prototype, "_token", {
                get: $util.oneOfGetter($oneOfFields = ["token"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Screen.prototype, "_createdAt", {
                get: $util.oneOfGetter($oneOfFields = ["createdAt"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Screen.prototype, "_online", {
                get: $util.oneOfGetter($oneOfFields = ["online"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Screen.prototype, "_version", {
                get: $util.oneOfGetter($oneOfFields = ["version"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Screen instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Screen
             * @static
             * @param {mediflow.v4.Screen.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Screen} Screen instance
             * @type {{
             *   (properties: mediflow.v4.Screen.$Shape): mediflow.v4.Screen & mediflow.v4.Screen.$Shape;
             *   (properties?: mediflow.v4.Screen.$Properties): mediflow.v4.Screen;
             * }}
             */
            Screen.create = function(properties) {
                return new Screen(properties);
            };

            /**
             * Encodes the specified Screen message. Does not implicitly {@link mediflow.v4.Screen.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Screen
             * @static
             * @param {mediflow.v4.Screen.$Properties} message Screen message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Screen.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.token);
                if (message.createdAt != null && $Object.hasOwnProperty.call(message, "createdAt"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.createdAt);
                if (message.online != null && $Object.hasOwnProperty.call(message, "online"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.online);
                if (message.version != null && $Object.hasOwnProperty.call(message, "version"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.version);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Screen message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Screen
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Screen & mediflow.v4.Screen.$Shape} Screen
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Screen.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Screen();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.id = reader.bytes();
                            message._id = "id";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.name = reader.stringVerify();
                            message._name = "name";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.token = reader.bytes();
                            message._token = "token";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.createdAt = reader.stringVerify();
                            message._createdAt = "createdAt";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            message.online = reader.bool();
                            message._online = "online";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 0)
                                break;
                            message.version = reader.uint64();
                            message._version = "version";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Screen message.
             * @function verify
             * @memberof mediflow.v4.Screen
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Screen.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.id != null && $Object.hasOwnProperty.call(message, "id")) {
                    properties._id = 1;
                    if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                        return "id: buffer expected";
                }
                if (message.name != null && $Object.hasOwnProperty.call(message, "name")) {
                    properties._name = 1;
                    if (!$util.isString(message.name))
                        return "name: string expected";
                }
                if (message.token != null && $Object.hasOwnProperty.call(message, "token")) {
                    properties._token = 1;
                    if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                        return "token: buffer expected";
                }
                if (message.createdAt != null && $Object.hasOwnProperty.call(message, "createdAt")) {
                    properties._createdAt = 1;
                    if (!$util.isString(message.createdAt))
                        return "createdAt: string expected";
                }
                if (message.online != null && $Object.hasOwnProperty.call(message, "online")) {
                    properties._online = 1;
                    if (typeof message.online !== "boolean")
                        return "online: boolean expected";
                }
                if (message.version != null && $Object.hasOwnProperty.call(message, "version")) {
                    properties._version = 1;
                    if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                        return "version: integer|Long expected";
                }
                return null;
            };

            /**
             * Creates a Screen message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Screen
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Screen} Screen
             */
            Screen.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Screen)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Screen: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Screen();
                if (object.id != null)
                    if (typeof object.id === "string")
                        $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                    else if (object.id.length >= 0)
                        message.id = object.id;
                if (object.name != null)
                    message.name = $String(object.name);
                if (object.token != null)
                    if (typeof object.token === "string")
                        $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                    else if (object.token.length >= 0)
                        message.token = object.token;
                if (object.createdAt != null)
                    message.createdAt = $String(object.createdAt);
                if (object.online != null)
                    message.online = $Boolean(object.online);
                if (object.version != null)
                    if ($util.Long)
                        message.version = $util.Long.fromValue(object.version, true);
                    else if (typeof object.version === "string")
                        message.version = $parseInt(object.version, 10);
                    else if (typeof object.version === "number")
                        message.version = object.version;
                    else if (typeof object.version === "object")
                        message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a Screen message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Screen
             * @static
             * @param {mediflow.v4.Screen} message Screen
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Screen.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    object.id = options.bytes === $String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.id) : message.id;
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    object.name = message.name;
                if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                    object.token = options.bytes === $String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.token) : message.token;
                if (message.createdAt != null && $Object.hasOwnProperty.call(message, "createdAt"))
                    object.createdAt = message.createdAt;
                if (message.online != null && $Object.hasOwnProperty.call(message, "online"))
                    object.online = message.online;
                if (message.version != null && $Object.hasOwnProperty.call(message, "version"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.version = typeof message.version === "number" ? $BigInt(message.version) : $util.Long.fromBits(message.version.low >>> 0, message.version.high >>> 0, true).toBigInt();
                    else if (typeof message.version === "number")
                        object.version = options.longs === $String ? $String(message.version) : message.version;
                    else
                        object.version = options.longs === $String ? $util.Long.prototype.toString.call(message.version) : options.longs === $Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
                return object;
            };

            /**
             * Converts this Screen to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Screen
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Screen.prototype.toJSON = function() {
                return Screen.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Screen
             * @function getTypeUrl
             * @memberof mediflow.v4.Screen
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Screen.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Screen";
            };

            return Screen;
        })();

        v4.Call = (function() {

            /**
             * Properties of a Call.
             * @typedef {Object} mediflow.v4.Call.$Properties
             * @property {Uint8Array|null} [id] Call id
             * @property {Uint8Array|null} [queueId] Call queueId
             * @property {Uint8Array|null} [personId] Call personId
             * @property {string|null} [text] Call text
             * @property {number|null} [totalQuota] Call totalQuota
             * @property {string|null} [expiresAt] Call expiresAt
             * @property {boolean|null} [active] Call active
             * @property {Array.<Uint8Array>|null} [targets] Call targets
             * @property {string|null} [createdAt] Call createdAt
             * @property {number|null} [consumed] Call consumed
             * @property {number|null} [remaining] Call remaining
             * @property {Object.<string,string>|null} [targetNames] Call targetNames
             * @property {string|null} [personName] Call personName
             * @property {string|null} [displayNumber] Call displayNumber
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Call.
             * @memberof mediflow.v4
             * @interface ICall
             * @augments mediflow.v4.Call.$Properties
             * @deprecated Use mediflow.v4.Call.$Properties instead.
             */

            /**
             * Shape of a Call.
             * @typedef {mediflow.v4.Call.$Properties} mediflow.v4.Call.$Shape
             */

            /**
             * Constructs a new Call.
             * @memberof mediflow.v4
             * @classdesc Represents a Call.
             * @constructor
             * @param {mediflow.v4.Call.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Call = function (properties) {
                this.targets = [];
                this.targetNames = {};
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Call id.
             * @member {Uint8Array|null|undefined} id
             * @memberof mediflow.v4.Call
             * @instance
             */
            Call.prototype.id = null;

            /**
             * Call queueId.
             * @member {Uint8Array|null|undefined} queueId
             * @memberof mediflow.v4.Call
             * @instance
             */
            Call.prototype.queueId = null;

            /**
             * Call personId.
             * @member {Uint8Array|null|undefined} personId
             * @memberof mediflow.v4.Call
             * @instance
             */
            Call.prototype.personId = null;

            /**
             * Call text.
             * @member {string|null|undefined} text
             * @memberof mediflow.v4.Call
             * @instance
             */
            Call.prototype.text = null;

            /**
             * Call totalQuota.
             * @member {number|null|undefined} totalQuota
             * @memberof mediflow.v4.Call
             * @instance
             */
            Call.prototype.totalQuota = null;

            /**
             * Call expiresAt.
             * @member {string|null|undefined} expiresAt
             * @memberof mediflow.v4.Call
             * @instance
             */
            Call.prototype.expiresAt = null;

            /**
             * Call active.
             * @member {boolean|null|undefined} active
             * @memberof mediflow.v4.Call
             * @instance
             */
            Call.prototype.active = null;

            /**
             * Call targets.
             * @member {Array.<Uint8Array>} targets
             * @memberof mediflow.v4.Call
             * @instance
             */
            Call.prototype.targets = $util.emptyArray;

            /**
             * Call createdAt.
             * @member {string|null|undefined} createdAt
             * @memberof mediflow.v4.Call
             * @instance
             */
            Call.prototype.createdAt = null;

            /**
             * Call consumed.
             * @member {number|null|undefined} consumed
             * @memberof mediflow.v4.Call
             * @instance
             */
            Call.prototype.consumed = null;

            /**
             * Call remaining.
             * @member {number|null|undefined} remaining
             * @memberof mediflow.v4.Call
             * @instance
             */
            Call.prototype.remaining = null;

            /**
             * Call targetNames.
             * @member {Object.<string,string>} targetNames
             * @memberof mediflow.v4.Call
             * @instance
             */
            Call.prototype.targetNames = $util.emptyObject;

            /**
             * Call personName.
             * @member {string|null|undefined} personName
             * @memberof mediflow.v4.Call
             * @instance
             */
            Call.prototype.personName = null;

            /**
             * Call displayNumber.
             * @member {string|null|undefined} displayNumber
             * @memberof mediflow.v4.Call
             * @instance
             */
            Call.prototype.displayNumber = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Call.prototype, "_id", {
                get: $util.oneOfGetter($oneOfFields = ["id"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Call.prototype, "_queueId", {
                get: $util.oneOfGetter($oneOfFields = ["queueId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Call.prototype, "_personId", {
                get: $util.oneOfGetter($oneOfFields = ["personId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Call.prototype, "_text", {
                get: $util.oneOfGetter($oneOfFields = ["text"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Call.prototype, "_totalQuota", {
                get: $util.oneOfGetter($oneOfFields = ["totalQuota"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Call.prototype, "_expiresAt", {
                get: $util.oneOfGetter($oneOfFields = ["expiresAt"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Call.prototype, "_active", {
                get: $util.oneOfGetter($oneOfFields = ["active"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Call.prototype, "_createdAt", {
                get: $util.oneOfGetter($oneOfFields = ["createdAt"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Call.prototype, "_consumed", {
                get: $util.oneOfGetter($oneOfFields = ["consumed"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Call.prototype, "_remaining", {
                get: $util.oneOfGetter($oneOfFields = ["remaining"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Call.prototype, "_personName", {
                get: $util.oneOfGetter($oneOfFields = ["personName"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Call.prototype, "_displayNumber", {
                get: $util.oneOfGetter($oneOfFields = ["displayNumber"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Call instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Call
             * @static
             * @param {mediflow.v4.Call.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Call} Call instance
             * @type {{
             *   (properties: mediflow.v4.Call.$Shape): mediflow.v4.Call & mediflow.v4.Call.$Shape;
             *   (properties?: mediflow.v4.Call.$Properties): mediflow.v4.Call;
             * }}
             */
            Call.create = function(properties) {
                return new Call(properties);
            };

            /**
             * Encodes the specified Call message. Does not implicitly {@link mediflow.v4.Call.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Call
             * @static
             * @param {mediflow.v4.Call.$Properties} message Call message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Call.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
                if (message.queueId != null && $Object.hasOwnProperty.call(message, "queueId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.queueId);
                if (message.personId != null && $Object.hasOwnProperty.call(message, "personId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.personId);
                if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.text);
                if (message.totalQuota != null && $Object.hasOwnProperty.call(message, "totalQuota"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.totalQuota);
                if (message.expiresAt != null && $Object.hasOwnProperty.call(message, "expiresAt"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.expiresAt);
                if (message.active != null && $Object.hasOwnProperty.call(message, "active"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.active);
                if (message.targets != null && message.targets.length)
                    for (let i = 0; i < message.targets.length; ++i)
                        writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.targets[i]);
                if (message.createdAt != null && $Object.hasOwnProperty.call(message, "createdAt"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.createdAt);
                if (message.consumed != null && $Object.hasOwnProperty.call(message, "consumed"))
                    writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.consumed);
                if (message.remaining != null && $Object.hasOwnProperty.call(message, "remaining"))
                    writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.remaining);
                if (message.targetNames != null && $Object.hasOwnProperty.call(message, "targetNames"))
                    for (let keys = $Object.keys(message.targetNames), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 12, wireType 2 =*/98).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.targetNames[keys[i]]).ldelim();
                if (message.personName != null && $Object.hasOwnProperty.call(message, "personName"))
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.personName);
                if (message.displayNumber != null && $Object.hasOwnProperty.call(message, "displayNumber"))
                    writer.uint32(/* id 14, wireType 2 =*/114).string(message.displayNumber);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Call message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Call
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Call & mediflow.v4.Call.$Shape} Call
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Call.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, key, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Call();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.id = reader.bytes();
                            message._id = "id";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.queueId = reader.bytes();
                            message._queueId = "queueId";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.personId = reader.bytes();
                            message._personId = "personId";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.text = reader.stringVerify();
                            message._text = "text";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            message.totalQuota = reader.uint32();
                            message._totalQuota = "totalQuota";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            message.expiresAt = reader.stringVerify();
                            message._expiresAt = "expiresAt";
                            continue;
                        }
                    case 7: {
                            if (wireType !== 0)
                                break;
                            message.active = reader.bool();
                            message._active = "active";
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            if (!(message.targets && message.targets.length))
                                message.targets = [];
                            message.targets.push(reader.bytes());
                            continue;
                        }
                    case 9: {
                            if (wireType !== 2)
                                break;
                            message.createdAt = reader.stringVerify();
                            message._createdAt = "createdAt";
                            continue;
                        }
                    case 10: {
                            if (wireType !== 0)
                                break;
                            message.consumed = reader.uint32();
                            message._consumed = "consumed";
                            continue;
                        }
                    case 11: {
                            if (wireType !== 0)
                                break;
                            message.remaining = reader.uint32();
                            message._remaining = "remaining";
                            continue;
                        }
                    case 12: {
                            if (wireType !== 2)
                                break;
                            if (message.targetNames === $util.emptyObject)
                                message.targetNames = {};
                            let end2 = reader.size() + reader.pos;
                            if (end2 > reader.len)
                                throw $RangeError("index out of range");
                            reader.len = end2;
                            key = "";
                            value = "";
                            while (reader.pos < end2) {
                                let tag2 = reader.tag();
                                wireType = tag2 & 7;
                                switch (tag2 >>>= 3) {
                                case 1:
                                    if (wireType !== 2)
                                        break;
                                    key = reader.stringVerify();
                                    continue;
                                case 2:
                                    if (wireType !== 2)
                                        break;
                                    value = reader.stringVerify();
                                    continue;
                                }
                                reader.skipType(wireType, _depth, tag2);
                            }
                            if (reader.pos !== end2)
                                throw $RangeError("index out of range");
                            reader.len = end;
                            if (key === "__proto__")
                                $util.makeProp(message.targetNames, key);
                            message.targetNames[key] = value;
                            continue;
                        }
                    case 13: {
                            if (wireType !== 2)
                                break;
                            message.personName = reader.stringVerify();
                            message._personName = "personName";
                            continue;
                        }
                    case 14: {
                            if (wireType !== 2)
                                break;
                            message.displayNumber = reader.stringVerify();
                            message._displayNumber = "displayNumber";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Call message.
             * @function verify
             * @memberof mediflow.v4.Call
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Call.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.id != null && $Object.hasOwnProperty.call(message, "id")) {
                    properties._id = 1;
                    if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                        return "id: buffer expected";
                }
                if (message.queueId != null && $Object.hasOwnProperty.call(message, "queueId")) {
                    properties._queueId = 1;
                    if (!(message.queueId && typeof message.queueId.length === "number" || $util.isString(message.queueId)))
                        return "queueId: buffer expected";
                }
                if (message.personId != null && $Object.hasOwnProperty.call(message, "personId")) {
                    properties._personId = 1;
                    if (!(message.personId && typeof message.personId.length === "number" || $util.isString(message.personId)))
                        return "personId: buffer expected";
                }
                if (message.text != null && $Object.hasOwnProperty.call(message, "text")) {
                    properties._text = 1;
                    if (!$util.isString(message.text))
                        return "text: string expected";
                }
                if (message.totalQuota != null && $Object.hasOwnProperty.call(message, "totalQuota")) {
                    properties._totalQuota = 1;
                    if (!$util.isInteger(message.totalQuota))
                        return "totalQuota: integer expected";
                }
                if (message.expiresAt != null && $Object.hasOwnProperty.call(message, "expiresAt")) {
                    properties._expiresAt = 1;
                    if (!$util.isString(message.expiresAt))
                        return "expiresAt: string expected";
                }
                if (message.active != null && $Object.hasOwnProperty.call(message, "active")) {
                    properties._active = 1;
                    if (typeof message.active !== "boolean")
                        return "active: boolean expected";
                }
                if (message.targets != null && $Object.hasOwnProperty.call(message, "targets")) {
                    if (!$Array.isArray(message.targets))
                        return "targets: array expected";
                    for (let i = 0; i < message.targets.length; ++i)
                        if (!(message.targets[i] && typeof message.targets[i].length === "number" || $util.isString(message.targets[i])))
                            return "targets: buffer[] expected";
                }
                if (message.createdAt != null && $Object.hasOwnProperty.call(message, "createdAt")) {
                    properties._createdAt = 1;
                    if (!$util.isString(message.createdAt))
                        return "createdAt: string expected";
                }
                if (message.consumed != null && $Object.hasOwnProperty.call(message, "consumed")) {
                    properties._consumed = 1;
                    if (!$util.isInteger(message.consumed))
                        return "consumed: integer expected";
                }
                if (message.remaining != null && $Object.hasOwnProperty.call(message, "remaining")) {
                    properties._remaining = 1;
                    if (!$util.isInteger(message.remaining))
                        return "remaining: integer expected";
                }
                if (message.targetNames != null && $Object.hasOwnProperty.call(message, "targetNames")) {
                    if (!$util.isObject(message.targetNames))
                        return "targetNames: object expected";
                    let key = $Object.keys(message.targetNames);
                    for (let i = 0; i < key.length; ++i)
                        if (!$util.isString(message.targetNames[key[i]]))
                            return "targetNames: string{k:string} expected";
                }
                if (message.personName != null && $Object.hasOwnProperty.call(message, "personName")) {
                    properties._personName = 1;
                    if (!$util.isString(message.personName))
                        return "personName: string expected";
                }
                if (message.displayNumber != null && $Object.hasOwnProperty.call(message, "displayNumber")) {
                    properties._displayNumber = 1;
                    if (!$util.isString(message.displayNumber))
                        return "displayNumber: string expected";
                }
                return null;
            };

            /**
             * Creates a Call message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Call
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Call} Call
             */
            Call.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Call)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Call: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Call();
                if (object.id != null)
                    if (typeof object.id === "string")
                        $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                    else if (object.id.length >= 0)
                        message.id = object.id;
                if (object.queueId != null)
                    if (typeof object.queueId === "string")
                        $util.base64.decode(object.queueId, message.queueId = $util.newBuffer($util.base64.length(object.queueId)), 0);
                    else if (object.queueId.length >= 0)
                        message.queueId = object.queueId;
                if (object.personId != null)
                    if (typeof object.personId === "string")
                        $util.base64.decode(object.personId, message.personId = $util.newBuffer($util.base64.length(object.personId)), 0);
                    else if (object.personId.length >= 0)
                        message.personId = object.personId;
                if (object.text != null)
                    message.text = $String(object.text);
                if (object.totalQuota != null)
                    message.totalQuota = object.totalQuota >>> 0;
                if (object.expiresAt != null)
                    message.expiresAt = $String(object.expiresAt);
                if (object.active != null)
                    message.active = $Boolean(object.active);
                if (object.targets) {
                    if (!$Array.isArray(object.targets))
                        throw $TypeError(".mediflow.v4.Call.targets: array expected");
                    message.targets = $Array(object.targets.length);
                    for (let i = 0; i < object.targets.length; ++i)
                        if (typeof object.targets[i] === "string")
                            $util.base64.decode(object.targets[i], message.targets[i] = $util.newBuffer($util.base64.length(object.targets[i])), 0);
                        else if (object.targets[i].length >= 0)
                            message.targets[i] = object.targets[i];
                }
                if (object.createdAt != null)
                    message.createdAt = $String(object.createdAt);
                if (object.consumed != null)
                    message.consumed = object.consumed >>> 0;
                if (object.remaining != null)
                    message.remaining = object.remaining >>> 0;
                if (object.targetNames) {
                    if (!$util.isObject(object.targetNames))
                        throw $TypeError(".mediflow.v4.Call.targetNames: object expected");
                    message.targetNames = {};
                    for (let keys = $Object.keys(object.targetNames), i = 0; i < keys.length; ++i) {
                        if (keys[i] === "__proto__")
                            $util.makeProp(message.targetNames, keys[i]);
                        message.targetNames[keys[i]] = $String(object.targetNames[keys[i]]);
                    }
                }
                if (object.personName != null)
                    message.personName = $String(object.personName);
                if (object.displayNumber != null)
                    message.displayNumber = $String(object.displayNumber);
                return message;
            };

            /**
             * Creates a plain object from a Call message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Call
             * @static
             * @param {mediflow.v4.Call} message Call
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Call.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.targets = [];
                if (options.objects || options.defaults)
                    object.targetNames = {};
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    object.id = options.bytes === $String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.id) : message.id;
                if (message.queueId != null && $Object.hasOwnProperty.call(message, "queueId"))
                    object.queueId = options.bytes === $String ? $util.base64.encode(message.queueId, 0, message.queueId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.queueId) : message.queueId;
                if (message.personId != null && $Object.hasOwnProperty.call(message, "personId"))
                    object.personId = options.bytes === $String ? $util.base64.encode(message.personId, 0, message.personId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.personId) : message.personId;
                if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                    object.text = message.text;
                if (message.totalQuota != null && $Object.hasOwnProperty.call(message, "totalQuota"))
                    object.totalQuota = message.totalQuota;
                if (message.expiresAt != null && $Object.hasOwnProperty.call(message, "expiresAt"))
                    object.expiresAt = message.expiresAt;
                if (message.active != null && $Object.hasOwnProperty.call(message, "active"))
                    object.active = message.active;
                if (message.targets && message.targets.length) {
                    object.targets = $Array(message.targets.length);
                    for (let j = 0; j < message.targets.length; ++j)
                        object.targets[j] = options.bytes === $String ? $util.base64.encode(message.targets[j], 0, message.targets[j].length) : options.bytes === $Array ? $Array.prototype.slice.call(message.targets[j]) : message.targets[j];
                }
                if (message.createdAt != null && $Object.hasOwnProperty.call(message, "createdAt"))
                    object.createdAt = message.createdAt;
                if (message.consumed != null && $Object.hasOwnProperty.call(message, "consumed"))
                    object.consumed = message.consumed;
                if (message.remaining != null && $Object.hasOwnProperty.call(message, "remaining"))
                    object.remaining = message.remaining;
                let keys2;
                if (message.targetNames && (keys2 = $Object.keys(message.targetNames)).length) {
                    object.targetNames = {};
                    for (let j = 0; j < keys2.length; ++j) {
                        if (keys2[j] === "__proto__")
                            $util.makeProp(object.targetNames, keys2[j]);
                        object.targetNames[keys2[j]] = message.targetNames[keys2[j]];
                    }
                }
                if (message.personName != null && $Object.hasOwnProperty.call(message, "personName"))
                    object.personName = message.personName;
                if (message.displayNumber != null && $Object.hasOwnProperty.call(message, "displayNumber"))
                    object.displayNumber = message.displayNumber;
                return object;
            };

            /**
             * Converts this Call to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Call
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Call.prototype.toJSON = function() {
                return Call.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Call
             * @function getTypeUrl
             * @memberof mediflow.v4.Call
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Call.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Call";
            };

            return Call;
        })();

        v4.Consumption = (function() {

            /**
             * Properties of a Consumption.
             * @typedef {Object} mediflow.v4.Consumption.$Properties
             * @property {Uint8Array|null} [requestId] Consumption requestId
             * @property {Uint8Array|null} [callId] Consumption callId
             * @property {Uint8Array|null} [screenId] Consumption screenId
             * @property {boolean|null} [granted] Consumption granted
             * @property {number|null} [remaining] Consumption remaining
             * @property {string|null} [text] Consumption text
             * @property {string|null} [consumedAt] Consumption consumedAt
             * @property {string|null} [reason] Consumption reason
             * @property {string|null} [screenName] Consumption screenName
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Consumption.
             * @memberof mediflow.v4
             * @interface IConsumption
             * @augments mediflow.v4.Consumption.$Properties
             * @deprecated Use mediflow.v4.Consumption.$Properties instead.
             */

            /**
             * Shape of a Consumption.
             * @typedef {mediflow.v4.Consumption.$Properties} mediflow.v4.Consumption.$Shape
             */

            /**
             * Constructs a new Consumption.
             * @memberof mediflow.v4
             * @classdesc Represents a Consumption.
             * @constructor
             * @param {mediflow.v4.Consumption.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Consumption = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Consumption requestId.
             * @member {Uint8Array|null|undefined} requestId
             * @memberof mediflow.v4.Consumption
             * @instance
             */
            Consumption.prototype.requestId = null;

            /**
             * Consumption callId.
             * @member {Uint8Array|null|undefined} callId
             * @memberof mediflow.v4.Consumption
             * @instance
             */
            Consumption.prototype.callId = null;

            /**
             * Consumption screenId.
             * @member {Uint8Array|null|undefined} screenId
             * @memberof mediflow.v4.Consumption
             * @instance
             */
            Consumption.prototype.screenId = null;

            /**
             * Consumption granted.
             * @member {boolean|null|undefined} granted
             * @memberof mediflow.v4.Consumption
             * @instance
             */
            Consumption.prototype.granted = null;

            /**
             * Consumption remaining.
             * @member {number|null|undefined} remaining
             * @memberof mediflow.v4.Consumption
             * @instance
             */
            Consumption.prototype.remaining = null;

            /**
             * Consumption text.
             * @member {string|null|undefined} text
             * @memberof mediflow.v4.Consumption
             * @instance
             */
            Consumption.prototype.text = null;

            /**
             * Consumption consumedAt.
             * @member {string|null|undefined} consumedAt
             * @memberof mediflow.v4.Consumption
             * @instance
             */
            Consumption.prototype.consumedAt = null;

            /**
             * Consumption reason.
             * @member {string|null|undefined} reason
             * @memberof mediflow.v4.Consumption
             * @instance
             */
            Consumption.prototype.reason = null;

            /**
             * Consumption screenName.
             * @member {string|null|undefined} screenName
             * @memberof mediflow.v4.Consumption
             * @instance
             */
            Consumption.prototype.screenName = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Consumption.prototype, "_requestId", {
                get: $util.oneOfGetter($oneOfFields = ["requestId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Consumption.prototype, "_callId", {
                get: $util.oneOfGetter($oneOfFields = ["callId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Consumption.prototype, "_screenId", {
                get: $util.oneOfGetter($oneOfFields = ["screenId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Consumption.prototype, "_granted", {
                get: $util.oneOfGetter($oneOfFields = ["granted"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Consumption.prototype, "_remaining", {
                get: $util.oneOfGetter($oneOfFields = ["remaining"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Consumption.prototype, "_text", {
                get: $util.oneOfGetter($oneOfFields = ["text"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Consumption.prototype, "_consumedAt", {
                get: $util.oneOfGetter($oneOfFields = ["consumedAt"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Consumption.prototype, "_reason", {
                get: $util.oneOfGetter($oneOfFields = ["reason"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Consumption.prototype, "_screenName", {
                get: $util.oneOfGetter($oneOfFields = ["screenName"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Consumption instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Consumption
             * @static
             * @param {mediflow.v4.Consumption.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Consumption} Consumption instance
             * @type {{
             *   (properties: mediflow.v4.Consumption.$Shape): mediflow.v4.Consumption & mediflow.v4.Consumption.$Shape;
             *   (properties?: mediflow.v4.Consumption.$Properties): mediflow.v4.Consumption;
             * }}
             */
            Consumption.create = function(properties) {
                return new Consumption(properties);
            };

            /**
             * Encodes the specified Consumption message. Does not implicitly {@link mediflow.v4.Consumption.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Consumption
             * @static
             * @param {mediflow.v4.Consumption.$Properties} message Consumption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Consumption.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.requestId);
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.callId);
                if (message.screenId != null && $Object.hasOwnProperty.call(message, "screenId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.screenId);
                if (message.granted != null && $Object.hasOwnProperty.call(message, "granted"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.granted);
                if (message.remaining != null && $Object.hasOwnProperty.call(message, "remaining"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.remaining);
                if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.text);
                if (message.consumedAt != null && $Object.hasOwnProperty.call(message, "consumedAt"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.consumedAt);
                if (message.reason != null && $Object.hasOwnProperty.call(message, "reason"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.reason);
                if (message.screenName != null && $Object.hasOwnProperty.call(message, "screenName"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.screenName);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Consumption message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Consumption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Consumption & mediflow.v4.Consumption.$Shape} Consumption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Consumption.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Consumption();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.requestId = reader.bytes();
                            message._requestId = "requestId";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.callId = reader.bytes();
                            message._callId = "callId";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.screenId = reader.bytes();
                            message._screenId = "screenId";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.granted = reader.bool();
                            message._granted = "granted";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            message.remaining = reader.uint32();
                            message._remaining = "remaining";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            message.text = reader.stringVerify();
                            message._text = "text";
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            message.consumedAt = reader.stringVerify();
                            message._consumedAt = "consumedAt";
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            message.reason = reader.stringVerify();
                            message._reason = "reason";
                            continue;
                        }
                    case 9: {
                            if (wireType !== 2)
                                break;
                            message.screenName = reader.stringVerify();
                            message._screenName = "screenName";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Consumption message.
             * @function verify
             * @memberof mediflow.v4.Consumption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Consumption.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId")) {
                    properties._requestId = 1;
                    if (!(message.requestId && typeof message.requestId.length === "number" || $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                }
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId")) {
                    properties._callId = 1;
                    if (!(message.callId && typeof message.callId.length === "number" || $util.isString(message.callId)))
                        return "callId: buffer expected";
                }
                if (message.screenId != null && $Object.hasOwnProperty.call(message, "screenId")) {
                    properties._screenId = 1;
                    if (!(message.screenId && typeof message.screenId.length === "number" || $util.isString(message.screenId)))
                        return "screenId: buffer expected";
                }
                if (message.granted != null && $Object.hasOwnProperty.call(message, "granted")) {
                    properties._granted = 1;
                    if (typeof message.granted !== "boolean")
                        return "granted: boolean expected";
                }
                if (message.remaining != null && $Object.hasOwnProperty.call(message, "remaining")) {
                    properties._remaining = 1;
                    if (!$util.isInteger(message.remaining))
                        return "remaining: integer expected";
                }
                if (message.text != null && $Object.hasOwnProperty.call(message, "text")) {
                    properties._text = 1;
                    if (!$util.isString(message.text))
                        return "text: string expected";
                }
                if (message.consumedAt != null && $Object.hasOwnProperty.call(message, "consumedAt")) {
                    properties._consumedAt = 1;
                    if (!$util.isString(message.consumedAt))
                        return "consumedAt: string expected";
                }
                if (message.reason != null && $Object.hasOwnProperty.call(message, "reason")) {
                    properties._reason = 1;
                    if (!$util.isString(message.reason))
                        return "reason: string expected";
                }
                if (message.screenName != null && $Object.hasOwnProperty.call(message, "screenName")) {
                    properties._screenName = 1;
                    if (!$util.isString(message.screenName))
                        return "screenName: string expected";
                }
                return null;
            };

            /**
             * Creates a Consumption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Consumption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Consumption} Consumption
             */
            Consumption.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Consumption)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Consumption: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Consumption();
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, message.requestId = $util.newBuffer($util.base64.length(object.requestId)), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.callId != null)
                    if (typeof object.callId === "string")
                        $util.base64.decode(object.callId, message.callId = $util.newBuffer($util.base64.length(object.callId)), 0);
                    else if (object.callId.length >= 0)
                        message.callId = object.callId;
                if (object.screenId != null)
                    if (typeof object.screenId === "string")
                        $util.base64.decode(object.screenId, message.screenId = $util.newBuffer($util.base64.length(object.screenId)), 0);
                    else if (object.screenId.length >= 0)
                        message.screenId = object.screenId;
                if (object.granted != null)
                    message.granted = $Boolean(object.granted);
                if (object.remaining != null)
                    message.remaining = object.remaining >>> 0;
                if (object.text != null)
                    message.text = $String(object.text);
                if (object.consumedAt != null)
                    message.consumedAt = $String(object.consumedAt);
                if (object.reason != null)
                    message.reason = $String(object.reason);
                if (object.screenName != null)
                    message.screenName = $String(object.screenName);
                return message;
            };

            /**
             * Creates a plain object from a Consumption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Consumption
             * @static
             * @param {mediflow.v4.Consumption} message Consumption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Consumption.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                    object.requestId = options.bytes === $String ? $util.base64.encode(message.requestId, 0, message.requestId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.requestId) : message.requestId;
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId"))
                    object.callId = options.bytes === $String ? $util.base64.encode(message.callId, 0, message.callId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.callId) : message.callId;
                if (message.screenId != null && $Object.hasOwnProperty.call(message, "screenId"))
                    object.screenId = options.bytes === $String ? $util.base64.encode(message.screenId, 0, message.screenId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.screenId) : message.screenId;
                if (message.granted != null && $Object.hasOwnProperty.call(message, "granted"))
                    object.granted = message.granted;
                if (message.remaining != null && $Object.hasOwnProperty.call(message, "remaining"))
                    object.remaining = message.remaining;
                if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
                    object.text = message.text;
                if (message.consumedAt != null && $Object.hasOwnProperty.call(message, "consumedAt"))
                    object.consumedAt = message.consumedAt;
                if (message.reason != null && $Object.hasOwnProperty.call(message, "reason"))
                    object.reason = message.reason;
                if (message.screenName != null && $Object.hasOwnProperty.call(message, "screenName"))
                    object.screenName = message.screenName;
                return object;
            };

            /**
             * Converts this Consumption to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Consumption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Consumption.prototype.toJSON = function() {
                return Consumption.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Consumption
             * @function getTypeUrl
             * @memberof mediflow.v4.Consumption
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Consumption.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Consumption";
            };

            return Consumption;
        })();

        v4.Audit = (function() {

            /**
             * Properties of an Audit.
             * @typedef {Object} mediflow.v4.Audit.$Properties
             * @property {number|Long|null} [sequence] Audit sequence
             * @property {string|null} [actor] Audit actor
             * @property {string|null} [outcome] Audit outcome
             * @property {Uint8Array|null} [id] Audit id
             * @property {string|null} [time] Audit time
             * @property {string|null} [action] Audit action
             * @property {Uint8Array|null} [screenId] Audit screenId
             * @property {Uint8Array|null} [callId] Audit callId
             * @property {Uint8Array|null} [requestId] Audit requestId
             * @property {string|null} [detail] Audit detail
             * @property {string|null} [screenName] Audit screenName
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an Audit.
             * @memberof mediflow.v4
             * @interface IAudit
             * @augments mediflow.v4.Audit.$Properties
             * @deprecated Use mediflow.v4.Audit.$Properties instead.
             */

            /**
             * Shape of an Audit.
             * @typedef {mediflow.v4.Audit.$Properties} mediflow.v4.Audit.$Shape
             */

            /**
             * Constructs a new Audit.
             * @memberof mediflow.v4
             * @classdesc Represents an Audit.
             * @constructor
             * @param {mediflow.v4.Audit.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Audit = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Audit sequence.
             * @member {number|Long|null|undefined} sequence
             * @memberof mediflow.v4.Audit
             * @instance
             */
            Audit.prototype.sequence = null;

            /**
             * Audit actor.
             * @member {string|null|undefined} actor
             * @memberof mediflow.v4.Audit
             * @instance
             */
            Audit.prototype.actor = null;

            /**
             * Audit outcome.
             * @member {string|null|undefined} outcome
             * @memberof mediflow.v4.Audit
             * @instance
             */
            Audit.prototype.outcome = null;

            /**
             * Audit id.
             * @member {Uint8Array|null|undefined} id
             * @memberof mediflow.v4.Audit
             * @instance
             */
            Audit.prototype.id = null;

            /**
             * Audit time.
             * @member {string|null|undefined} time
             * @memberof mediflow.v4.Audit
             * @instance
             */
            Audit.prototype.time = null;

            /**
             * Audit action.
             * @member {string|null|undefined} action
             * @memberof mediflow.v4.Audit
             * @instance
             */
            Audit.prototype.action = null;

            /**
             * Audit screenId.
             * @member {Uint8Array|null|undefined} screenId
             * @memberof mediflow.v4.Audit
             * @instance
             */
            Audit.prototype.screenId = null;

            /**
             * Audit callId.
             * @member {Uint8Array|null|undefined} callId
             * @memberof mediflow.v4.Audit
             * @instance
             */
            Audit.prototype.callId = null;

            /**
             * Audit requestId.
             * @member {Uint8Array|null|undefined} requestId
             * @memberof mediflow.v4.Audit
             * @instance
             */
            Audit.prototype.requestId = null;

            /**
             * Audit detail.
             * @member {string|null|undefined} detail
             * @memberof mediflow.v4.Audit
             * @instance
             */
            Audit.prototype.detail = null;

            /**
             * Audit screenName.
             * @member {string|null|undefined} screenName
             * @memberof mediflow.v4.Audit
             * @instance
             */
            Audit.prototype.screenName = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Audit.prototype, "_sequence", {
                get: $util.oneOfGetter($oneOfFields = ["sequence"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Audit.prototype, "_actor", {
                get: $util.oneOfGetter($oneOfFields = ["actor"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Audit.prototype, "_outcome", {
                get: $util.oneOfGetter($oneOfFields = ["outcome"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Audit.prototype, "_id", {
                get: $util.oneOfGetter($oneOfFields = ["id"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Audit.prototype, "_time", {
                get: $util.oneOfGetter($oneOfFields = ["time"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Audit.prototype, "_action", {
                get: $util.oneOfGetter($oneOfFields = ["action"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Audit.prototype, "_screenId", {
                get: $util.oneOfGetter($oneOfFields = ["screenId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Audit.prototype, "_callId", {
                get: $util.oneOfGetter($oneOfFields = ["callId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Audit.prototype, "_requestId", {
                get: $util.oneOfGetter($oneOfFields = ["requestId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Audit.prototype, "_detail", {
                get: $util.oneOfGetter($oneOfFields = ["detail"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Audit.prototype, "_screenName", {
                get: $util.oneOfGetter($oneOfFields = ["screenName"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Audit instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Audit
             * @static
             * @param {mediflow.v4.Audit.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Audit} Audit instance
             * @type {{
             *   (properties: mediflow.v4.Audit.$Shape): mediflow.v4.Audit & mediflow.v4.Audit.$Shape;
             *   (properties?: mediflow.v4.Audit.$Properties): mediflow.v4.Audit;
             * }}
             */
            Audit.create = function(properties) {
                return new Audit(properties);
            };

            /**
             * Encodes the specified Audit message. Does not implicitly {@link mediflow.v4.Audit.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Audit
             * @static
             * @param {mediflow.v4.Audit.$Properties} message Audit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Audit.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.sequence != null && $Object.hasOwnProperty.call(message, "sequence"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.sequence);
                if (message.actor != null && $Object.hasOwnProperty.call(message, "actor"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.actor);
                if (message.outcome != null && $Object.hasOwnProperty.call(message, "outcome"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.outcome);
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.id);
                if (message.time != null && $Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.time);
                if (message.action != null && $Object.hasOwnProperty.call(message, "action"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.action);
                if (message.screenId != null && $Object.hasOwnProperty.call(message, "screenId"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.screenId);
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId"))
                    writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.callId);
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.requestId);
                if (message.detail != null && $Object.hasOwnProperty.call(message, "detail"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.detail);
                if (message.screenName != null && $Object.hasOwnProperty.call(message, "screenName"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.screenName);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes an Audit message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Audit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Audit & mediflow.v4.Audit.$Shape} Audit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Audit.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Audit();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            message.sequence = reader.uint64();
                            message._sequence = "sequence";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.actor = reader.stringVerify();
                            message._actor = "actor";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.outcome = reader.stringVerify();
                            message._outcome = "outcome";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.id = reader.bytes();
                            message._id = "id";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.time = reader.stringVerify();
                            message._time = "time";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            message.action = reader.stringVerify();
                            message._action = "action";
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            message.screenId = reader.bytes();
                            message._screenId = "screenId";
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            message.callId = reader.bytes();
                            message._callId = "callId";
                            continue;
                        }
                    case 9: {
                            if (wireType !== 2)
                                break;
                            message.requestId = reader.bytes();
                            message._requestId = "requestId";
                            continue;
                        }
                    case 10: {
                            if (wireType !== 2)
                                break;
                            message.detail = reader.stringVerify();
                            message._detail = "detail";
                            continue;
                        }
                    case 11: {
                            if (wireType !== 2)
                                break;
                            message.screenName = reader.stringVerify();
                            message._screenName = "screenName";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies an Audit message.
             * @function verify
             * @memberof mediflow.v4.Audit
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Audit.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.sequence != null && $Object.hasOwnProperty.call(message, "sequence")) {
                    properties._sequence = 1;
                    if (!$util.isInteger(message.sequence) && !(message.sequence && $util.isInteger(message.sequence.low) && $util.isInteger(message.sequence.high)))
                        return "sequence: integer|Long expected";
                }
                if (message.actor != null && $Object.hasOwnProperty.call(message, "actor")) {
                    properties._actor = 1;
                    if (!$util.isString(message.actor))
                        return "actor: string expected";
                }
                if (message.outcome != null && $Object.hasOwnProperty.call(message, "outcome")) {
                    properties._outcome = 1;
                    if (!$util.isString(message.outcome))
                        return "outcome: string expected";
                }
                if (message.id != null && $Object.hasOwnProperty.call(message, "id")) {
                    properties._id = 1;
                    if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                        return "id: buffer expected";
                }
                if (message.time != null && $Object.hasOwnProperty.call(message, "time")) {
                    properties._time = 1;
                    if (!$util.isString(message.time))
                        return "time: string expected";
                }
                if (message.action != null && $Object.hasOwnProperty.call(message, "action")) {
                    properties._action = 1;
                    if (!$util.isString(message.action))
                        return "action: string expected";
                }
                if (message.screenId != null && $Object.hasOwnProperty.call(message, "screenId")) {
                    properties._screenId = 1;
                    if (!(message.screenId && typeof message.screenId.length === "number" || $util.isString(message.screenId)))
                        return "screenId: buffer expected";
                }
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId")) {
                    properties._callId = 1;
                    if (!(message.callId && typeof message.callId.length === "number" || $util.isString(message.callId)))
                        return "callId: buffer expected";
                }
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId")) {
                    properties._requestId = 1;
                    if (!(message.requestId && typeof message.requestId.length === "number" || $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                }
                if (message.detail != null && $Object.hasOwnProperty.call(message, "detail")) {
                    properties._detail = 1;
                    if (!$util.isString(message.detail))
                        return "detail: string expected";
                }
                if (message.screenName != null && $Object.hasOwnProperty.call(message, "screenName")) {
                    properties._screenName = 1;
                    if (!$util.isString(message.screenName))
                        return "screenName: string expected";
                }
                return null;
            };

            /**
             * Creates an Audit message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Audit
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Audit} Audit
             */
            Audit.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Audit)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Audit: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Audit();
                if (object.sequence != null)
                    if ($util.Long)
                        message.sequence = $util.Long.fromValue(object.sequence, true);
                    else if (typeof object.sequence === "string")
                        message.sequence = $parseInt(object.sequence, 10);
                    else if (typeof object.sequence === "number")
                        message.sequence = object.sequence;
                    else if (typeof object.sequence === "object")
                        message.sequence = new $util.LongBits(object.sequence.low >>> 0, object.sequence.high >>> 0).toNumber(true);
                if (object.actor != null)
                    message.actor = $String(object.actor);
                if (object.outcome != null)
                    message.outcome = $String(object.outcome);
                if (object.id != null)
                    if (typeof object.id === "string")
                        $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                    else if (object.id.length >= 0)
                        message.id = object.id;
                if (object.time != null)
                    message.time = $String(object.time);
                if (object.action != null)
                    message.action = $String(object.action);
                if (object.screenId != null)
                    if (typeof object.screenId === "string")
                        $util.base64.decode(object.screenId, message.screenId = $util.newBuffer($util.base64.length(object.screenId)), 0);
                    else if (object.screenId.length >= 0)
                        message.screenId = object.screenId;
                if (object.callId != null)
                    if (typeof object.callId === "string")
                        $util.base64.decode(object.callId, message.callId = $util.newBuffer($util.base64.length(object.callId)), 0);
                    else if (object.callId.length >= 0)
                        message.callId = object.callId;
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, message.requestId = $util.newBuffer($util.base64.length(object.requestId)), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.detail != null)
                    message.detail = $String(object.detail);
                if (object.screenName != null)
                    message.screenName = $String(object.screenName);
                return message;
            };

            /**
             * Creates a plain object from an Audit message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Audit
             * @static
             * @param {mediflow.v4.Audit} message Audit
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Audit.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.sequence != null && $Object.hasOwnProperty.call(message, "sequence"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.sequence = typeof message.sequence === "number" ? $BigInt(message.sequence) : $util.Long.fromBits(message.sequence.low >>> 0, message.sequence.high >>> 0, true).toBigInt();
                    else if (typeof message.sequence === "number")
                        object.sequence = options.longs === $String ? $String(message.sequence) : message.sequence;
                    else
                        object.sequence = options.longs === $String ? $util.Long.prototype.toString.call(message.sequence) : options.longs === $Number ? new $util.LongBits(message.sequence.low >>> 0, message.sequence.high >>> 0).toNumber(true) : message.sequence;
                if (message.actor != null && $Object.hasOwnProperty.call(message, "actor"))
                    object.actor = message.actor;
                if (message.outcome != null && $Object.hasOwnProperty.call(message, "outcome"))
                    object.outcome = message.outcome;
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    object.id = options.bytes === $String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.id) : message.id;
                if (message.time != null && $Object.hasOwnProperty.call(message, "time"))
                    object.time = message.time;
                if (message.action != null && $Object.hasOwnProperty.call(message, "action"))
                    object.action = message.action;
                if (message.screenId != null && $Object.hasOwnProperty.call(message, "screenId"))
                    object.screenId = options.bytes === $String ? $util.base64.encode(message.screenId, 0, message.screenId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.screenId) : message.screenId;
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId"))
                    object.callId = options.bytes === $String ? $util.base64.encode(message.callId, 0, message.callId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.callId) : message.callId;
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                    object.requestId = options.bytes === $String ? $util.base64.encode(message.requestId, 0, message.requestId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.requestId) : message.requestId;
                if (message.detail != null && $Object.hasOwnProperty.call(message, "detail"))
                    object.detail = message.detail;
                if (message.screenName != null && $Object.hasOwnProperty.call(message, "screenName"))
                    object.screenName = message.screenName;
                return object;
            };

            /**
             * Converts this Audit to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Audit
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Audit.prototype.toJSON = function() {
                return Audit.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Audit
             * @function getTypeUrl
             * @memberof mediflow.v4.Audit
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Audit.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Audit";
            };

            return Audit;
        })();

        v4.Archive = (function() {

            /**
             * Properties of an Archive.
             * @typedef {Object} mediflow.v4.Archive.$Properties
             * @property {string|null} [sha256] Archive sha256
             * @property {Uint8Array|null} [id] Archive id
             * @property {string|null} [createdAt] Archive createdAt
             * @property {number|Long|null} [eventCount] Archive eventCount
             * @property {string|null} [from] Archive from
             * @property {string|null} [to] Archive to
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an Archive.
             * @memberof mediflow.v4
             * @interface IArchive
             * @augments mediflow.v4.Archive.$Properties
             * @deprecated Use mediflow.v4.Archive.$Properties instead.
             */

            /**
             * Shape of an Archive.
             * @typedef {mediflow.v4.Archive.$Properties} mediflow.v4.Archive.$Shape
             */

            /**
             * Constructs a new Archive.
             * @memberof mediflow.v4
             * @classdesc Represents an Archive.
             * @constructor
             * @param {mediflow.v4.Archive.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Archive = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Archive sha256.
             * @member {string|null|undefined} sha256
             * @memberof mediflow.v4.Archive
             * @instance
             */
            Archive.prototype.sha256 = null;

            /**
             * Archive id.
             * @member {Uint8Array|null|undefined} id
             * @memberof mediflow.v4.Archive
             * @instance
             */
            Archive.prototype.id = null;

            /**
             * Archive createdAt.
             * @member {string|null|undefined} createdAt
             * @memberof mediflow.v4.Archive
             * @instance
             */
            Archive.prototype.createdAt = null;

            /**
             * Archive eventCount.
             * @member {number|Long|null|undefined} eventCount
             * @memberof mediflow.v4.Archive
             * @instance
             */
            Archive.prototype.eventCount = null;

            /**
             * Archive from.
             * @member {string|null|undefined} from
             * @memberof mediflow.v4.Archive
             * @instance
             */
            Archive.prototype.from = null;

            /**
             * Archive to.
             * @member {string|null|undefined} to
             * @memberof mediflow.v4.Archive
             * @instance
             */
            Archive.prototype.to = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Archive.prototype, "_sha256", {
                get: $util.oneOfGetter($oneOfFields = ["sha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Archive.prototype, "_id", {
                get: $util.oneOfGetter($oneOfFields = ["id"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Archive.prototype, "_createdAt", {
                get: $util.oneOfGetter($oneOfFields = ["createdAt"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Archive.prototype, "_eventCount", {
                get: $util.oneOfGetter($oneOfFields = ["eventCount"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Archive.prototype, "_from", {
                get: $util.oneOfGetter($oneOfFields = ["from"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Archive.prototype, "_to", {
                get: $util.oneOfGetter($oneOfFields = ["to"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Archive instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Archive
             * @static
             * @param {mediflow.v4.Archive.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Archive} Archive instance
             * @type {{
             *   (properties: mediflow.v4.Archive.$Shape): mediflow.v4.Archive & mediflow.v4.Archive.$Shape;
             *   (properties?: mediflow.v4.Archive.$Properties): mediflow.v4.Archive;
             * }}
             */
            Archive.create = function(properties) {
                return new Archive(properties);
            };

            /**
             * Encodes the specified Archive message. Does not implicitly {@link mediflow.v4.Archive.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Archive
             * @static
             * @param {mediflow.v4.Archive.$Properties} message Archive message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Archive.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.sha256 != null && $Object.hasOwnProperty.call(message, "sha256"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.sha256);
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.id);
                if (message.createdAt != null && $Object.hasOwnProperty.call(message, "createdAt"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.createdAt);
                if (message.eventCount != null && $Object.hasOwnProperty.call(message, "eventCount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.eventCount);
                if (message.from != null && $Object.hasOwnProperty.call(message, "from"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.from);
                if (message.to != null && $Object.hasOwnProperty.call(message, "to"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.to);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes an Archive message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Archive
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Archive & mediflow.v4.Archive.$Shape} Archive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Archive.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Archive();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.sha256 = reader.stringVerify();
                            message._sha256 = "sha256";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.id = reader.bytes();
                            message._id = "id";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.createdAt = reader.stringVerify();
                            message._createdAt = "createdAt";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.eventCount = reader.uint64();
                            message._eventCount = "eventCount";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.from = reader.stringVerify();
                            message._from = "from";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            message.to = reader.stringVerify();
                            message._to = "to";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies an Archive message.
             * @function verify
             * @memberof mediflow.v4.Archive
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Archive.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.sha256 != null && $Object.hasOwnProperty.call(message, "sha256")) {
                    properties._sha256 = 1;
                    if (!$util.isString(message.sha256))
                        return "sha256: string expected";
                }
                if (message.id != null && $Object.hasOwnProperty.call(message, "id")) {
                    properties._id = 1;
                    if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                        return "id: buffer expected";
                }
                if (message.createdAt != null && $Object.hasOwnProperty.call(message, "createdAt")) {
                    properties._createdAt = 1;
                    if (!$util.isString(message.createdAt))
                        return "createdAt: string expected";
                }
                if (message.eventCount != null && $Object.hasOwnProperty.call(message, "eventCount")) {
                    properties._eventCount = 1;
                    if (!$util.isInteger(message.eventCount) && !(message.eventCount && $util.isInteger(message.eventCount.low) && $util.isInteger(message.eventCount.high)))
                        return "eventCount: integer|Long expected";
                }
                if (message.from != null && $Object.hasOwnProperty.call(message, "from")) {
                    properties._from = 1;
                    if (!$util.isString(message.from))
                        return "from: string expected";
                }
                if (message.to != null && $Object.hasOwnProperty.call(message, "to")) {
                    properties._to = 1;
                    if (!$util.isString(message.to))
                        return "to: string expected";
                }
                return null;
            };

            /**
             * Creates an Archive message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Archive
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Archive} Archive
             */
            Archive.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Archive)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Archive: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Archive();
                if (object.sha256 != null)
                    message.sha256 = $String(object.sha256);
                if (object.id != null)
                    if (typeof object.id === "string")
                        $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                    else if (object.id.length >= 0)
                        message.id = object.id;
                if (object.createdAt != null)
                    message.createdAt = $String(object.createdAt);
                if (object.eventCount != null)
                    if ($util.Long)
                        message.eventCount = $util.Long.fromValue(object.eventCount, true);
                    else if (typeof object.eventCount === "string")
                        message.eventCount = $parseInt(object.eventCount, 10);
                    else if (typeof object.eventCount === "number")
                        message.eventCount = object.eventCount;
                    else if (typeof object.eventCount === "object")
                        message.eventCount = new $util.LongBits(object.eventCount.low >>> 0, object.eventCount.high >>> 0).toNumber(true);
                if (object.from != null)
                    message.from = $String(object.from);
                if (object.to != null)
                    message.to = $String(object.to);
                return message;
            };

            /**
             * Creates a plain object from an Archive message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Archive
             * @static
             * @param {mediflow.v4.Archive} message Archive
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Archive.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.sha256 != null && $Object.hasOwnProperty.call(message, "sha256"))
                    object.sha256 = message.sha256;
                if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                    object.id = options.bytes === $String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.id) : message.id;
                if (message.createdAt != null && $Object.hasOwnProperty.call(message, "createdAt"))
                    object.createdAt = message.createdAt;
                if (message.eventCount != null && $Object.hasOwnProperty.call(message, "eventCount"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.eventCount = typeof message.eventCount === "number" ? $BigInt(message.eventCount) : $util.Long.fromBits(message.eventCount.low >>> 0, message.eventCount.high >>> 0, true).toBigInt();
                    else if (typeof message.eventCount === "number")
                        object.eventCount = options.longs === $String ? $String(message.eventCount) : message.eventCount;
                    else
                        object.eventCount = options.longs === $String ? $util.Long.prototype.toString.call(message.eventCount) : options.longs === $Number ? new $util.LongBits(message.eventCount.low >>> 0, message.eventCount.high >>> 0).toNumber(true) : message.eventCount;
                if (message.from != null && $Object.hasOwnProperty.call(message, "from"))
                    object.from = message.from;
                if (message.to != null && $Object.hasOwnProperty.call(message, "to"))
                    object.to = message.to;
                return object;
            };

            /**
             * Converts this Archive to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Archive
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Archive.prototype.toJSON = function() {
                return Archive.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Archive
             * @function getTypeUrl
             * @memberof mediflow.v4.Archive
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Archive.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Archive";
            };

            return Archive;
        })();

        v4.Target = (function() {

            /**
             * Properties of a Target.
             * @typedef {Object} mediflow.v4.Target.$Properties
             * @property {Uint8Array|null} [screenId] Target screenId
             * @property {Uint8Array|null} [callId] Target callId
             * @property {number|null} [consumed] Target consumed
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Target.
             * @memberof mediflow.v4
             * @interface ITarget
             * @augments mediflow.v4.Target.$Properties
             * @deprecated Use mediflow.v4.Target.$Properties instead.
             */

            /**
             * Shape of a Target.
             * @typedef {mediflow.v4.Target.$Properties} mediflow.v4.Target.$Shape
             */

            /**
             * Constructs a new Target.
             * @memberof mediflow.v4
             * @classdesc Represents a Target.
             * @constructor
             * @param {mediflow.v4.Target.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Target = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Target screenId.
             * @member {Uint8Array|null|undefined} screenId
             * @memberof mediflow.v4.Target
             * @instance
             */
            Target.prototype.screenId = null;

            /**
             * Target callId.
             * @member {Uint8Array|null|undefined} callId
             * @memberof mediflow.v4.Target
             * @instance
             */
            Target.prototype.callId = null;

            /**
             * Target consumed.
             * @member {number|null|undefined} consumed
             * @memberof mediflow.v4.Target
             * @instance
             */
            Target.prototype.consumed = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Target.prototype, "_screenId", {
                get: $util.oneOfGetter($oneOfFields = ["screenId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Target.prototype, "_callId", {
                get: $util.oneOfGetter($oneOfFields = ["callId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Target.prototype, "_consumed", {
                get: $util.oneOfGetter($oneOfFields = ["consumed"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Target instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Target
             * @static
             * @param {mediflow.v4.Target.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Target} Target instance
             * @type {{
             *   (properties: mediflow.v4.Target.$Shape): mediflow.v4.Target & mediflow.v4.Target.$Shape;
             *   (properties?: mediflow.v4.Target.$Properties): mediflow.v4.Target;
             * }}
             */
            Target.create = function(properties) {
                return new Target(properties);
            };

            /**
             * Encodes the specified Target message. Does not implicitly {@link mediflow.v4.Target.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Target
             * @static
             * @param {mediflow.v4.Target.$Properties} message Target message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Target.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.screenId != null && $Object.hasOwnProperty.call(message, "screenId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.screenId);
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.callId);
                if (message.consumed != null && $Object.hasOwnProperty.call(message, "consumed"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.consumed);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Target message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Target
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Target & mediflow.v4.Target.$Shape} Target
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Target.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Target();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.screenId = reader.bytes();
                            message._screenId = "screenId";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.callId = reader.bytes();
                            message._callId = "callId";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.consumed = reader.uint32();
                            message._consumed = "consumed";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Target message.
             * @function verify
             * @memberof mediflow.v4.Target
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Target.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.screenId != null && $Object.hasOwnProperty.call(message, "screenId")) {
                    properties._screenId = 1;
                    if (!(message.screenId && typeof message.screenId.length === "number" || $util.isString(message.screenId)))
                        return "screenId: buffer expected";
                }
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId")) {
                    properties._callId = 1;
                    if (!(message.callId && typeof message.callId.length === "number" || $util.isString(message.callId)))
                        return "callId: buffer expected";
                }
                if (message.consumed != null && $Object.hasOwnProperty.call(message, "consumed")) {
                    properties._consumed = 1;
                    if (!$util.isInteger(message.consumed))
                        return "consumed: integer expected";
                }
                return null;
            };

            /**
             * Creates a Target message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Target
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Target} Target
             */
            Target.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Target)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Target: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Target();
                if (object.screenId != null)
                    if (typeof object.screenId === "string")
                        $util.base64.decode(object.screenId, message.screenId = $util.newBuffer($util.base64.length(object.screenId)), 0);
                    else if (object.screenId.length >= 0)
                        message.screenId = object.screenId;
                if (object.callId != null)
                    if (typeof object.callId === "string")
                        $util.base64.decode(object.callId, message.callId = $util.newBuffer($util.base64.length(object.callId)), 0);
                    else if (object.callId.length >= 0)
                        message.callId = object.callId;
                if (object.consumed != null)
                    message.consumed = object.consumed >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a Target message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Target
             * @static
             * @param {mediflow.v4.Target} message Target
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Target.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.screenId != null && $Object.hasOwnProperty.call(message, "screenId"))
                    object.screenId = options.bytes === $String ? $util.base64.encode(message.screenId, 0, message.screenId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.screenId) : message.screenId;
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId"))
                    object.callId = options.bytes === $String ? $util.base64.encode(message.callId, 0, message.callId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.callId) : message.callId;
                if (message.consumed != null && $Object.hasOwnProperty.call(message, "consumed"))
                    object.consumed = message.consumed;
                return object;
            };

            /**
             * Converts this Target to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Target
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Target.prototype.toJSON = function() {
                return Target.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Target
             * @function getTypeUrl
             * @memberof mediflow.v4.Target
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Target.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Target";
            };

            return Target;
        })();

        v4.HistoryItem = (function() {

            /**
             * Properties of a HistoryItem.
             * @typedef {Object} mediflow.v4.HistoryItem.$Properties
             * @property {string|null} [kind] HistoryItem kind
             * @property {string|null} [key] HistoryItem key
             * @property {string|null} [time] HistoryItem time
             * @property {string|null} [sha256] HistoryItem sha256
             * @property {mediflow.v4.Snapshot.$Properties|null} [snapshot] HistoryItem snapshot
             * @property {mediflow.v4.Consumption.$Properties|null} [consumption] HistoryItem consumption
             * @property {mediflow.v4.Audit.$Properties|null} [audit] HistoryItem audit
             * @property {mediflow.v4.Call.$Properties|null} [call] HistoryItem call
             * @property {mediflow.v4.Target.$Properties|null} [target] HistoryItem target
             * @property {mediflow.v4.PlaybackEvent.$Properties|null} [playback] HistoryItem playback
             * @property {"snapshot"|"consumption"|"audit"|"call"|"target"|"playback"} [record] HistoryItem record
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a HistoryItem.
             * @memberof mediflow.v4
             * @interface IHistoryItem
             * @augments mediflow.v4.HistoryItem.$Properties
             * @deprecated Use mediflow.v4.HistoryItem.$Properties instead.
             */

            /**
             * Narrowed shape of a HistoryItem.
             * @typedef {{
             *   kind?: string|null;
             *   key?: string|null;
             *   time?: string|null;
             *   sha256?: string|null;
             *   snapshot?: mediflow.v4.Snapshot.$Shape|null;
             *   consumption?: mediflow.v4.Consumption.$Shape|null;
             *   audit?: mediflow.v4.Audit.$Shape|null;
             *   call?: mediflow.v4.Call.$Shape|null;
             *   target?: mediflow.v4.Target.$Shape|null;
             *   playback?: mediflow.v4.PlaybackEvent.$Shape|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ record?: undefined; snapshot?: null; consumption?: null; audit?: null; call?: null; target?: null; playback?: null }|{ record?: "snapshot"; snapshot: mediflow.v4.Snapshot.$Shape; consumption?: null; audit?: null; call?: null; target?: null; playback?: null }|{ record?: "consumption"; snapshot?: null; consumption: mediflow.v4.Consumption.$Shape; audit?: null; call?: null; target?: null; playback?: null }|{ record?: "audit"; snapshot?: null; consumption?: null; audit: mediflow.v4.Audit.$Shape; call?: null; target?: null; playback?: null }|{ record?: "call"; snapshot?: null; consumption?: null; audit?: null; call: mediflow.v4.Call.$Shape; target?: null; playback?: null }|{ record?: "target"; snapshot?: null; consumption?: null; audit?: null; call?: null; target: mediflow.v4.Target.$Shape; playback?: null }|{ record?: "playback"; snapshot?: null; consumption?: null; audit?: null; call?: null; target?: null; playback: mediflow.v4.PlaybackEvent.$Shape })
             * )} mediflow.v4.HistoryItem.$Shape
             */

            /**
             * Constructs a new HistoryItem.
             * @memberof mediflow.v4
             * @classdesc Represents a HistoryItem.
             * @constructor
             * @param {mediflow.v4.HistoryItem.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const HistoryItem = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * HistoryItem kind.
             * @member {string|null|undefined} kind
             * @memberof mediflow.v4.HistoryItem
             * @instance
             */
            HistoryItem.prototype.kind = null;

            /**
             * HistoryItem key.
             * @member {string|null|undefined} key
             * @memberof mediflow.v4.HistoryItem
             * @instance
             */
            HistoryItem.prototype.key = null;

            /**
             * HistoryItem time.
             * @member {string|null|undefined} time
             * @memberof mediflow.v4.HistoryItem
             * @instance
             */
            HistoryItem.prototype.time = null;

            /**
             * HistoryItem sha256.
             * @member {string|null|undefined} sha256
             * @memberof mediflow.v4.HistoryItem
             * @instance
             */
            HistoryItem.prototype.sha256 = null;

            /**
             * HistoryItem snapshot.
             * @member {mediflow.v4.Snapshot.$Properties|null|undefined} snapshot
             * @memberof mediflow.v4.HistoryItem
             * @instance
             */
            HistoryItem.prototype.snapshot = null;

            /**
             * HistoryItem consumption.
             * @member {mediflow.v4.Consumption.$Properties|null|undefined} consumption
             * @memberof mediflow.v4.HistoryItem
             * @instance
             */
            HistoryItem.prototype.consumption = null;

            /**
             * HistoryItem audit.
             * @member {mediflow.v4.Audit.$Properties|null|undefined} audit
             * @memberof mediflow.v4.HistoryItem
             * @instance
             */
            HistoryItem.prototype.audit = null;

            /**
             * HistoryItem call.
             * @member {mediflow.v4.Call.$Properties|null|undefined} call
             * @memberof mediflow.v4.HistoryItem
             * @instance
             */
            HistoryItem.prototype.call = null;

            /**
             * HistoryItem target.
             * @member {mediflow.v4.Target.$Properties|null|undefined} target
             * @memberof mediflow.v4.HistoryItem
             * @instance
             */
            HistoryItem.prototype.target = null;

            /**
             * HistoryItem playback.
             * @member {mediflow.v4.PlaybackEvent.$Properties|null|undefined} playback
             * @memberof mediflow.v4.HistoryItem
             * @instance
             */
            HistoryItem.prototype.playback = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistoryItem.prototype, "_kind", {
                get: $util.oneOfGetter($oneOfFields = ["kind"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistoryItem.prototype, "_key", {
                get: $util.oneOfGetter($oneOfFields = ["key"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistoryItem.prototype, "_time", {
                get: $util.oneOfGetter($oneOfFields = ["time"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistoryItem.prototype, "_sha256", {
                get: $util.oneOfGetter($oneOfFields = ["sha256"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * HistoryItem record.
             * @member {"snapshot"|"consumption"|"audit"|"call"|"target"|"playback"|undefined} record
             * @memberof mediflow.v4.HistoryItem
             * @instance
             */
            $Object.defineProperty(HistoryItem.prototype, "record", {
                get: $util.oneOfGetter($oneOfFields = ["snapshot", "consumption", "audit", "call", "target", "playback"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new HistoryItem instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.HistoryItem
             * @static
             * @param {mediflow.v4.HistoryItem.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.HistoryItem} HistoryItem instance
             * @type {{
             *   (properties: mediflow.v4.HistoryItem.$Shape): mediflow.v4.HistoryItem & mediflow.v4.HistoryItem.$Shape;
             *   (properties?: mediflow.v4.HistoryItem.$Properties): mediflow.v4.HistoryItem;
             * }}
             */
            HistoryItem.create = function(properties) {
                return new HistoryItem(properties);
            };

            /**
             * Encodes the specified HistoryItem message. Does not implicitly {@link mediflow.v4.HistoryItem.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.HistoryItem
             * @static
             * @param {mediflow.v4.HistoryItem.$Properties} message HistoryItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HistoryItem.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.kind != null && $Object.hasOwnProperty.call(message, "kind"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.kind);
                if (message.key != null && $Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
                if (message.time != null && $Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.time);
                if (message.sha256 != null && $Object.hasOwnProperty.call(message, "sha256"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.sha256);
                if (message.snapshot != null && $Object.hasOwnProperty.call(message, "snapshot"))
                    $root.mediflow.v4.Snapshot.encode(message.snapshot, writer.uint32(/* id 10, wireType 2 =*/82).fork(), _depth + 1).ldelim();
                if (message.consumption != null && $Object.hasOwnProperty.call(message, "consumption"))
                    $root.mediflow.v4.Consumption.encode(message.consumption, writer.uint32(/* id 11, wireType 2 =*/90).fork(), _depth + 1).ldelim();
                if (message.audit != null && $Object.hasOwnProperty.call(message, "audit"))
                    $root.mediflow.v4.Audit.encode(message.audit, writer.uint32(/* id 12, wireType 2 =*/98).fork(), _depth + 1).ldelim();
                if (message.call != null && $Object.hasOwnProperty.call(message, "call"))
                    $root.mediflow.v4.Call.encode(message.call, writer.uint32(/* id 13, wireType 2 =*/106).fork(), _depth + 1).ldelim();
                if (message.target != null && $Object.hasOwnProperty.call(message, "target"))
                    $root.mediflow.v4.Target.encode(message.target, writer.uint32(/* id 14, wireType 2 =*/114).fork(), _depth + 1).ldelim();
                if (message.playback != null && $Object.hasOwnProperty.call(message, "playback"))
                    $root.mediflow.v4.PlaybackEvent.encode(message.playback, writer.uint32(/* id 15, wireType 2 =*/122).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a HistoryItem message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.HistoryItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.HistoryItem & mediflow.v4.HistoryItem.$Shape} HistoryItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HistoryItem.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.HistoryItem();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.kind = reader.stringVerify();
                            message._kind = "kind";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.key = reader.stringVerify();
                            message._key = "key";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.time = reader.stringVerify();
                            message._time = "time";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.sha256 = reader.stringVerify();
                            message._sha256 = "sha256";
                            continue;
                        }
                    case 10: {
                            if (wireType !== 2)
                                break;
                            message.snapshot = $root.mediflow.v4.Snapshot.decode(reader, reader.size(), $undefined, _depth + 1, message.snapshot);
                            message.record = "snapshot";
                            continue;
                        }
                    case 11: {
                            if (wireType !== 2)
                                break;
                            message.consumption = $root.mediflow.v4.Consumption.decode(reader, reader.size(), $undefined, _depth + 1, message.consumption);
                            message.record = "consumption";
                            continue;
                        }
                    case 12: {
                            if (wireType !== 2)
                                break;
                            message.audit = $root.mediflow.v4.Audit.decode(reader, reader.size(), $undefined, _depth + 1, message.audit);
                            message.record = "audit";
                            continue;
                        }
                    case 13: {
                            if (wireType !== 2)
                                break;
                            message.call = $root.mediflow.v4.Call.decode(reader, reader.size(), $undefined, _depth + 1, message.call);
                            message.record = "call";
                            continue;
                        }
                    case 14: {
                            if (wireType !== 2)
                                break;
                            message.target = $root.mediflow.v4.Target.decode(reader, reader.size(), $undefined, _depth + 1, message.target);
                            message.record = "target";
                            continue;
                        }
                    case 15: {
                            if (wireType !== 2)
                                break;
                            message.playback = $root.mediflow.v4.PlaybackEvent.decode(reader, reader.size(), $undefined, _depth + 1, message.playback);
                            message.record = "playback";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a HistoryItem message.
             * @function verify
             * @memberof mediflow.v4.HistoryItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HistoryItem.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.kind != null && $Object.hasOwnProperty.call(message, "kind")) {
                    properties._kind = 1;
                    if (!$util.isString(message.kind))
                        return "kind: string expected";
                }
                if (message.key != null && $Object.hasOwnProperty.call(message, "key")) {
                    properties._key = 1;
                    if (!$util.isString(message.key))
                        return "key: string expected";
                }
                if (message.time != null && $Object.hasOwnProperty.call(message, "time")) {
                    properties._time = 1;
                    if (!$util.isString(message.time))
                        return "time: string expected";
                }
                if (message.sha256 != null && $Object.hasOwnProperty.call(message, "sha256")) {
                    properties._sha256 = 1;
                    if (!$util.isString(message.sha256))
                        return "sha256: string expected";
                }
                if (message.snapshot != null && $Object.hasOwnProperty.call(message, "snapshot")) {
                    properties.record = 1;
                    {
                        let error = $root.mediflow.v4.Snapshot.verify(message.snapshot, _depth + 1);
                        if (error)
                            return "snapshot." + error;
                    }
                }
                if (message.consumption != null && $Object.hasOwnProperty.call(message, "consumption")) {
                    if (properties.record === 1)
                        return "record: multiple values";
                    properties.record = 1;
                    {
                        let error = $root.mediflow.v4.Consumption.verify(message.consumption, _depth + 1);
                        if (error)
                            return "consumption." + error;
                    }
                }
                if (message.audit != null && $Object.hasOwnProperty.call(message, "audit")) {
                    if (properties.record === 1)
                        return "record: multiple values";
                    properties.record = 1;
                    {
                        let error = $root.mediflow.v4.Audit.verify(message.audit, _depth + 1);
                        if (error)
                            return "audit." + error;
                    }
                }
                if (message.call != null && $Object.hasOwnProperty.call(message, "call")) {
                    if (properties.record === 1)
                        return "record: multiple values";
                    properties.record = 1;
                    {
                        let error = $root.mediflow.v4.Call.verify(message.call, _depth + 1);
                        if (error)
                            return "call." + error;
                    }
                }
                if (message.target != null && $Object.hasOwnProperty.call(message, "target")) {
                    if (properties.record === 1)
                        return "record: multiple values";
                    properties.record = 1;
                    {
                        let error = $root.mediflow.v4.Target.verify(message.target, _depth + 1);
                        if (error)
                            return "target." + error;
                    }
                }
                if (message.playback != null && $Object.hasOwnProperty.call(message, "playback")) {
                    if (properties.record === 1)
                        return "record: multiple values";
                    properties.record = 1;
                    {
                        let error = $root.mediflow.v4.PlaybackEvent.verify(message.playback, _depth + 1);
                        if (error)
                            return "playback." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a HistoryItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.HistoryItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.HistoryItem} HistoryItem
             */
            HistoryItem.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.HistoryItem)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.HistoryItem: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.HistoryItem();
                if (object.kind != null)
                    message.kind = $String(object.kind);
                if (object.key != null)
                    message.key = $String(object.key);
                if (object.time != null)
                    message.time = $String(object.time);
                if (object.sha256 != null)
                    message.sha256 = $String(object.sha256);
                if (object.snapshot != null) {
                    if (!$util.isObject(object.snapshot))
                        throw $TypeError(".mediflow.v4.HistoryItem.snapshot: object expected");
                    message.snapshot = $root.mediflow.v4.Snapshot.fromObject(object.snapshot, _depth + 1);
                }
                if (object.consumption != null) {
                    if (!$util.isObject(object.consumption))
                        throw $TypeError(".mediflow.v4.HistoryItem.consumption: object expected");
                    message.consumption = $root.mediflow.v4.Consumption.fromObject(object.consumption, _depth + 1);
                }
                if (object.audit != null) {
                    if (!$util.isObject(object.audit))
                        throw $TypeError(".mediflow.v4.HistoryItem.audit: object expected");
                    message.audit = $root.mediflow.v4.Audit.fromObject(object.audit, _depth + 1);
                }
                if (object.call != null) {
                    if (!$util.isObject(object.call))
                        throw $TypeError(".mediflow.v4.HistoryItem.call: object expected");
                    message.call = $root.mediflow.v4.Call.fromObject(object.call, _depth + 1);
                }
                if (object.target != null) {
                    if (!$util.isObject(object.target))
                        throw $TypeError(".mediflow.v4.HistoryItem.target: object expected");
                    message.target = $root.mediflow.v4.Target.fromObject(object.target, _depth + 1);
                }
                if (object.playback != null) {
                    if (!$util.isObject(object.playback))
                        throw $TypeError(".mediflow.v4.HistoryItem.playback: object expected");
                    message.playback = $root.mediflow.v4.PlaybackEvent.fromObject(object.playback, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a HistoryItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.HistoryItem
             * @static
             * @param {mediflow.v4.HistoryItem} message HistoryItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HistoryItem.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.kind != null && $Object.hasOwnProperty.call(message, "kind"))
                    object.kind = message.kind;
                if (message.key != null && $Object.hasOwnProperty.call(message, "key"))
                    object.key = message.key;
                if (message.time != null && $Object.hasOwnProperty.call(message, "time"))
                    object.time = message.time;
                if (message.sha256 != null && $Object.hasOwnProperty.call(message, "sha256"))
                    object.sha256 = message.sha256;
                if (message.snapshot != null && $Object.hasOwnProperty.call(message, "snapshot")) {
                    object.snapshot = $root.mediflow.v4.Snapshot.toObject(message.snapshot, options, _depth + 1);
                    if (options.oneofs)
                        object.record = "snapshot";
                }
                if (message.consumption != null && $Object.hasOwnProperty.call(message, "consumption")) {
                    object.consumption = $root.mediflow.v4.Consumption.toObject(message.consumption, options, _depth + 1);
                    if (options.oneofs)
                        object.record = "consumption";
                }
                if (message.audit != null && $Object.hasOwnProperty.call(message, "audit")) {
                    object.audit = $root.mediflow.v4.Audit.toObject(message.audit, options, _depth + 1);
                    if (options.oneofs)
                        object.record = "audit";
                }
                if (message.call != null && $Object.hasOwnProperty.call(message, "call")) {
                    object.call = $root.mediflow.v4.Call.toObject(message.call, options, _depth + 1);
                    if (options.oneofs)
                        object.record = "call";
                }
                if (message.target != null && $Object.hasOwnProperty.call(message, "target")) {
                    object.target = $root.mediflow.v4.Target.toObject(message.target, options, _depth + 1);
                    if (options.oneofs)
                        object.record = "target";
                }
                if (message.playback != null && $Object.hasOwnProperty.call(message, "playback")) {
                    object.playback = $root.mediflow.v4.PlaybackEvent.toObject(message.playback, options, _depth + 1);
                    if (options.oneofs)
                        object.record = "playback";
                }
                return object;
            };

            /**
             * Converts this HistoryItem to JSON.
             * @function toJSON
             * @memberof mediflow.v4.HistoryItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HistoryItem.prototype.toJSON = function() {
                return HistoryItem.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for HistoryItem
             * @function getTypeUrl
             * @memberof mediflow.v4.HistoryItem
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            HistoryItem.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.HistoryItem";
            };

            return HistoryItem;
        })();

        v4.CallPage = (function() {

            /**
             * Properties of a CallPage.
             * @typedef {Object} mediflow.v4.CallPage.$Properties
             * @property {Array.<mediflow.v4.Call.$Properties>|null} [items] CallPage items
             * @property {number|Long|null} [total] CallPage total
             * @property {number|null} [page] CallPage page
             * @property {number|null} [pageSize] CallPage pageSize
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a CallPage.
             * @memberof mediflow.v4
             * @interface ICallPage
             * @augments mediflow.v4.CallPage.$Properties
             * @deprecated Use mediflow.v4.CallPage.$Properties instead.
             */

            /**
             * Shape of a CallPage.
             * @typedef {mediflow.v4.CallPage.$Properties} mediflow.v4.CallPage.$Shape
             */

            /**
             * Constructs a new CallPage.
             * @memberof mediflow.v4
             * @classdesc Represents a CallPage.
             * @constructor
             * @param {mediflow.v4.CallPage.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const CallPage = function (properties) {
                this.items = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * CallPage items.
             * @member {Array.<mediflow.v4.Call.$Properties>} items
             * @memberof mediflow.v4.CallPage
             * @instance
             */
            CallPage.prototype.items = $util.emptyArray;

            /**
             * CallPage total.
             * @member {number|Long|null|undefined} total
             * @memberof mediflow.v4.CallPage
             * @instance
             */
            CallPage.prototype.total = null;

            /**
             * CallPage page.
             * @member {number|null|undefined} page
             * @memberof mediflow.v4.CallPage
             * @instance
             */
            CallPage.prototype.page = null;

            /**
             * CallPage pageSize.
             * @member {number|null|undefined} pageSize
             * @memberof mediflow.v4.CallPage
             * @instance
             */
            CallPage.prototype.pageSize = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(CallPage.prototype, "_total", {
                get: $util.oneOfGetter($oneOfFields = ["total"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(CallPage.prototype, "_page", {
                get: $util.oneOfGetter($oneOfFields = ["page"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(CallPage.prototype, "_pageSize", {
                get: $util.oneOfGetter($oneOfFields = ["pageSize"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new CallPage instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.CallPage
             * @static
             * @param {mediflow.v4.CallPage.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.CallPage} CallPage instance
             * @type {{
             *   (properties: mediflow.v4.CallPage.$Shape): mediflow.v4.CallPage & mediflow.v4.CallPage.$Shape;
             *   (properties?: mediflow.v4.CallPage.$Properties): mediflow.v4.CallPage;
             * }}
             */
            CallPage.create = function(properties) {
                return new CallPage(properties);
            };

            /**
             * Encodes the specified CallPage message. Does not implicitly {@link mediflow.v4.CallPage.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.CallPage
             * @static
             * @param {mediflow.v4.CallPage.$Properties} message CallPage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CallPage.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.items != null && message.items.length)
                    for (let i = 0; i < message.items.length; ++i)
                        $root.mediflow.v4.Call.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.total != null && $Object.hasOwnProperty.call(message, "total"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.total);
                if (message.page != null && $Object.hasOwnProperty.call(message, "page"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.page);
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.pageSize);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a CallPage message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.CallPage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.CallPage & mediflow.v4.CallPage.$Shape} CallPage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CallPage.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.CallPage();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.items && message.items.length))
                                message.items = [];
                            message.items.push($root.mediflow.v4.Call.decode(reader, reader.size(), $undefined, _depth + 1));
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.total = reader.uint64();
                            message._total = "total";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.page = reader.uint32();
                            message._page = "page";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.pageSize = reader.uint32();
                            message._pageSize = "pageSize";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a CallPage message.
             * @function verify
             * @memberof mediflow.v4.CallPage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CallPage.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.items != null && $Object.hasOwnProperty.call(message, "items")) {
                    if (!$Array.isArray(message.items))
                        return "items: array expected";
                    for (let i = 0; i < message.items.length; ++i) {
                        let error = $root.mediflow.v4.Call.verify(message.items[i], _depth + 1);
                        if (error)
                            return "items." + error;
                    }
                }
                if (message.total != null && $Object.hasOwnProperty.call(message, "total")) {
                    properties._total = 1;
                    if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                        return "total: integer|Long expected";
                }
                if (message.page != null && $Object.hasOwnProperty.call(message, "page")) {
                    properties._page = 1;
                    if (!$util.isInteger(message.page))
                        return "page: integer expected";
                }
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize")) {
                    properties._pageSize = 1;
                    if (!$util.isInteger(message.pageSize))
                        return "pageSize: integer expected";
                }
                return null;
            };

            /**
             * Creates a CallPage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.CallPage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.CallPage} CallPage
             */
            CallPage.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.CallPage)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.CallPage: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.CallPage();
                if (object.items) {
                    if (!$Array.isArray(object.items))
                        throw $TypeError(".mediflow.v4.CallPage.items: array expected");
                    message.items = $Array(object.items.length);
                    for (let i = 0; i < object.items.length; ++i) {
                        if (!$util.isObject(object.items[i]))
                            throw $TypeError(".mediflow.v4.CallPage.items: object expected");
                        message.items[i] = $root.mediflow.v4.Call.fromObject(object.items[i], _depth + 1);
                    }
                }
                if (object.total != null)
                    if ($util.Long)
                        message.total = $util.Long.fromValue(object.total, true);
                    else if (typeof object.total === "string")
                        message.total = $parseInt(object.total, 10);
                    else if (typeof object.total === "number")
                        message.total = object.total;
                    else if (typeof object.total === "object")
                        message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber(true);
                if (object.page != null)
                    message.page = object.page >>> 0;
                if (object.pageSize != null)
                    message.pageSize = object.pageSize >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a CallPage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.CallPage
             * @static
             * @param {mediflow.v4.CallPage} message CallPage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CallPage.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.items = [];
                if (message.items && message.items.length) {
                    object.items = $Array(message.items.length);
                    for (let j = 0; j < message.items.length; ++j)
                        object.items[j] = $root.mediflow.v4.Call.toObject(message.items[j], options, _depth + 1);
                }
                if (message.total != null && $Object.hasOwnProperty.call(message, "total"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.total = typeof message.total === "number" ? $BigInt(message.total) : $util.Long.fromBits(message.total.low >>> 0, message.total.high >>> 0, true).toBigInt();
                    else if (typeof message.total === "number")
                        object.total = options.longs === $String ? $String(message.total) : message.total;
                    else
                        object.total = options.longs === $String ? $util.Long.prototype.toString.call(message.total) : options.longs === $Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber(true) : message.total;
                if (message.page != null && $Object.hasOwnProperty.call(message, "page"))
                    object.page = message.page;
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize"))
                    object.pageSize = message.pageSize;
                return object;
            };

            /**
             * Converts this CallPage to JSON.
             * @function toJSON
             * @memberof mediflow.v4.CallPage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CallPage.prototype.toJSON = function() {
                return CallPage.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for CallPage
             * @function getTypeUrl
             * @memberof mediflow.v4.CallPage
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            CallPage.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.CallPage";
            };

            return CallPage;
        })();

        v4.ScreenPage = (function() {

            /**
             * Properties of a ScreenPage.
             * @typedef {Object} mediflow.v4.ScreenPage.$Properties
             * @property {Array.<mediflow.v4.Screen.$Properties>|null} [items] ScreenPage items
             * @property {number|Long|null} [total] ScreenPage total
             * @property {number|null} [page] ScreenPage page
             * @property {number|null} [pageSize] ScreenPage pageSize
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a ScreenPage.
             * @memberof mediflow.v4
             * @interface IScreenPage
             * @augments mediflow.v4.ScreenPage.$Properties
             * @deprecated Use mediflow.v4.ScreenPage.$Properties instead.
             */

            /**
             * Shape of a ScreenPage.
             * @typedef {mediflow.v4.ScreenPage.$Properties} mediflow.v4.ScreenPage.$Shape
             */

            /**
             * Constructs a new ScreenPage.
             * @memberof mediflow.v4
             * @classdesc Represents a ScreenPage.
             * @constructor
             * @param {mediflow.v4.ScreenPage.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const ScreenPage = function (properties) {
                this.items = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * ScreenPage items.
             * @member {Array.<mediflow.v4.Screen.$Properties>} items
             * @memberof mediflow.v4.ScreenPage
             * @instance
             */
            ScreenPage.prototype.items = $util.emptyArray;

            /**
             * ScreenPage total.
             * @member {number|Long|null|undefined} total
             * @memberof mediflow.v4.ScreenPage
             * @instance
             */
            ScreenPage.prototype.total = null;

            /**
             * ScreenPage page.
             * @member {number|null|undefined} page
             * @memberof mediflow.v4.ScreenPage
             * @instance
             */
            ScreenPage.prototype.page = null;

            /**
             * ScreenPage pageSize.
             * @member {number|null|undefined} pageSize
             * @memberof mediflow.v4.ScreenPage
             * @instance
             */
            ScreenPage.prototype.pageSize = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ScreenPage.prototype, "_total", {
                get: $util.oneOfGetter($oneOfFields = ["total"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ScreenPage.prototype, "_page", {
                get: $util.oneOfGetter($oneOfFields = ["page"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ScreenPage.prototype, "_pageSize", {
                get: $util.oneOfGetter($oneOfFields = ["pageSize"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ScreenPage instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.ScreenPage
             * @static
             * @param {mediflow.v4.ScreenPage.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.ScreenPage} ScreenPage instance
             * @type {{
             *   (properties: mediflow.v4.ScreenPage.$Shape): mediflow.v4.ScreenPage & mediflow.v4.ScreenPage.$Shape;
             *   (properties?: mediflow.v4.ScreenPage.$Properties): mediflow.v4.ScreenPage;
             * }}
             */
            ScreenPage.create = function(properties) {
                return new ScreenPage(properties);
            };

            /**
             * Encodes the specified ScreenPage message. Does not implicitly {@link mediflow.v4.ScreenPage.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.ScreenPage
             * @static
             * @param {mediflow.v4.ScreenPage.$Properties} message ScreenPage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ScreenPage.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.items != null && message.items.length)
                    for (let i = 0; i < message.items.length; ++i)
                        $root.mediflow.v4.Screen.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.total != null && $Object.hasOwnProperty.call(message, "total"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.total);
                if (message.page != null && $Object.hasOwnProperty.call(message, "page"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.page);
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.pageSize);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a ScreenPage message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.ScreenPage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.ScreenPage & mediflow.v4.ScreenPage.$Shape} ScreenPage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ScreenPage.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.ScreenPage();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.items && message.items.length))
                                message.items = [];
                            message.items.push($root.mediflow.v4.Screen.decode(reader, reader.size(), $undefined, _depth + 1));
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.total = reader.uint64();
                            message._total = "total";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.page = reader.uint32();
                            message._page = "page";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.pageSize = reader.uint32();
                            message._pageSize = "pageSize";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a ScreenPage message.
             * @function verify
             * @memberof mediflow.v4.ScreenPage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ScreenPage.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.items != null && $Object.hasOwnProperty.call(message, "items")) {
                    if (!$Array.isArray(message.items))
                        return "items: array expected";
                    for (let i = 0; i < message.items.length; ++i) {
                        let error = $root.mediflow.v4.Screen.verify(message.items[i], _depth + 1);
                        if (error)
                            return "items." + error;
                    }
                }
                if (message.total != null && $Object.hasOwnProperty.call(message, "total")) {
                    properties._total = 1;
                    if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                        return "total: integer|Long expected";
                }
                if (message.page != null && $Object.hasOwnProperty.call(message, "page")) {
                    properties._page = 1;
                    if (!$util.isInteger(message.page))
                        return "page: integer expected";
                }
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize")) {
                    properties._pageSize = 1;
                    if (!$util.isInteger(message.pageSize))
                        return "pageSize: integer expected";
                }
                return null;
            };

            /**
             * Creates a ScreenPage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.ScreenPage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.ScreenPage} ScreenPage
             */
            ScreenPage.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.ScreenPage)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.ScreenPage: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.ScreenPage();
                if (object.items) {
                    if (!$Array.isArray(object.items))
                        throw $TypeError(".mediflow.v4.ScreenPage.items: array expected");
                    message.items = $Array(object.items.length);
                    for (let i = 0; i < object.items.length; ++i) {
                        if (!$util.isObject(object.items[i]))
                            throw $TypeError(".mediflow.v4.ScreenPage.items: object expected");
                        message.items[i] = $root.mediflow.v4.Screen.fromObject(object.items[i], _depth + 1);
                    }
                }
                if (object.total != null)
                    if ($util.Long)
                        message.total = $util.Long.fromValue(object.total, true);
                    else if (typeof object.total === "string")
                        message.total = $parseInt(object.total, 10);
                    else if (typeof object.total === "number")
                        message.total = object.total;
                    else if (typeof object.total === "object")
                        message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber(true);
                if (object.page != null)
                    message.page = object.page >>> 0;
                if (object.pageSize != null)
                    message.pageSize = object.pageSize >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a ScreenPage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.ScreenPage
             * @static
             * @param {mediflow.v4.ScreenPage} message ScreenPage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ScreenPage.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.items = [];
                if (message.items && message.items.length) {
                    object.items = $Array(message.items.length);
                    for (let j = 0; j < message.items.length; ++j)
                        object.items[j] = $root.mediflow.v4.Screen.toObject(message.items[j], options, _depth + 1);
                }
                if (message.total != null && $Object.hasOwnProperty.call(message, "total"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.total = typeof message.total === "number" ? $BigInt(message.total) : $util.Long.fromBits(message.total.low >>> 0, message.total.high >>> 0, true).toBigInt();
                    else if (typeof message.total === "number")
                        object.total = options.longs === $String ? $String(message.total) : message.total;
                    else
                        object.total = options.longs === $String ? $util.Long.prototype.toString.call(message.total) : options.longs === $Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber(true) : message.total;
                if (message.page != null && $Object.hasOwnProperty.call(message, "page"))
                    object.page = message.page;
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize"))
                    object.pageSize = message.pageSize;
                return object;
            };

            /**
             * Converts this ScreenPage to JSON.
             * @function toJSON
             * @memberof mediflow.v4.ScreenPage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ScreenPage.prototype.toJSON = function() {
                return ScreenPage.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ScreenPage
             * @function getTypeUrl
             * @memberof mediflow.v4.ScreenPage
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ScreenPage.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.ScreenPage";
            };

            return ScreenPage;
        })();

        v4.ConsumptionPage = (function() {

            /**
             * Properties of a ConsumptionPage.
             * @typedef {Object} mediflow.v4.ConsumptionPage.$Properties
             * @property {Array.<mediflow.v4.Consumption.$Properties>|null} [items] ConsumptionPage items
             * @property {number|Long|null} [total] ConsumptionPage total
             * @property {number|null} [page] ConsumptionPage page
             * @property {number|null} [pageSize] ConsumptionPage pageSize
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a ConsumptionPage.
             * @memberof mediflow.v4
             * @interface IConsumptionPage
             * @augments mediflow.v4.ConsumptionPage.$Properties
             * @deprecated Use mediflow.v4.ConsumptionPage.$Properties instead.
             */

            /**
             * Shape of a ConsumptionPage.
             * @typedef {mediflow.v4.ConsumptionPage.$Properties} mediflow.v4.ConsumptionPage.$Shape
             */

            /**
             * Constructs a new ConsumptionPage.
             * @memberof mediflow.v4
             * @classdesc Represents a ConsumptionPage.
             * @constructor
             * @param {mediflow.v4.ConsumptionPage.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const ConsumptionPage = function (properties) {
                this.items = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * ConsumptionPage items.
             * @member {Array.<mediflow.v4.Consumption.$Properties>} items
             * @memberof mediflow.v4.ConsumptionPage
             * @instance
             */
            ConsumptionPage.prototype.items = $util.emptyArray;

            /**
             * ConsumptionPage total.
             * @member {number|Long|null|undefined} total
             * @memberof mediflow.v4.ConsumptionPage
             * @instance
             */
            ConsumptionPage.prototype.total = null;

            /**
             * ConsumptionPage page.
             * @member {number|null|undefined} page
             * @memberof mediflow.v4.ConsumptionPage
             * @instance
             */
            ConsumptionPage.prototype.page = null;

            /**
             * ConsumptionPage pageSize.
             * @member {number|null|undefined} pageSize
             * @memberof mediflow.v4.ConsumptionPage
             * @instance
             */
            ConsumptionPage.prototype.pageSize = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ConsumptionPage.prototype, "_total", {
                get: $util.oneOfGetter($oneOfFields = ["total"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ConsumptionPage.prototype, "_page", {
                get: $util.oneOfGetter($oneOfFields = ["page"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ConsumptionPage.prototype, "_pageSize", {
                get: $util.oneOfGetter($oneOfFields = ["pageSize"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ConsumptionPage instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.ConsumptionPage
             * @static
             * @param {mediflow.v4.ConsumptionPage.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.ConsumptionPage} ConsumptionPage instance
             * @type {{
             *   (properties: mediflow.v4.ConsumptionPage.$Shape): mediflow.v4.ConsumptionPage & mediflow.v4.ConsumptionPage.$Shape;
             *   (properties?: mediflow.v4.ConsumptionPage.$Properties): mediflow.v4.ConsumptionPage;
             * }}
             */
            ConsumptionPage.create = function(properties) {
                return new ConsumptionPage(properties);
            };

            /**
             * Encodes the specified ConsumptionPage message. Does not implicitly {@link mediflow.v4.ConsumptionPage.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.ConsumptionPage
             * @static
             * @param {mediflow.v4.ConsumptionPage.$Properties} message ConsumptionPage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConsumptionPage.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.items != null && message.items.length)
                    for (let i = 0; i < message.items.length; ++i)
                        $root.mediflow.v4.Consumption.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.total != null && $Object.hasOwnProperty.call(message, "total"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.total);
                if (message.page != null && $Object.hasOwnProperty.call(message, "page"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.page);
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.pageSize);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a ConsumptionPage message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.ConsumptionPage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.ConsumptionPage & mediflow.v4.ConsumptionPage.$Shape} ConsumptionPage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConsumptionPage.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.ConsumptionPage();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.items && message.items.length))
                                message.items = [];
                            message.items.push($root.mediflow.v4.Consumption.decode(reader, reader.size(), $undefined, _depth + 1));
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.total = reader.uint64();
                            message._total = "total";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.page = reader.uint32();
                            message._page = "page";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.pageSize = reader.uint32();
                            message._pageSize = "pageSize";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a ConsumptionPage message.
             * @function verify
             * @memberof mediflow.v4.ConsumptionPage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConsumptionPage.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.items != null && $Object.hasOwnProperty.call(message, "items")) {
                    if (!$Array.isArray(message.items))
                        return "items: array expected";
                    for (let i = 0; i < message.items.length; ++i) {
                        let error = $root.mediflow.v4.Consumption.verify(message.items[i], _depth + 1);
                        if (error)
                            return "items." + error;
                    }
                }
                if (message.total != null && $Object.hasOwnProperty.call(message, "total")) {
                    properties._total = 1;
                    if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                        return "total: integer|Long expected";
                }
                if (message.page != null && $Object.hasOwnProperty.call(message, "page")) {
                    properties._page = 1;
                    if (!$util.isInteger(message.page))
                        return "page: integer expected";
                }
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize")) {
                    properties._pageSize = 1;
                    if (!$util.isInteger(message.pageSize))
                        return "pageSize: integer expected";
                }
                return null;
            };

            /**
             * Creates a ConsumptionPage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.ConsumptionPage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.ConsumptionPage} ConsumptionPage
             */
            ConsumptionPage.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.ConsumptionPage)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.ConsumptionPage: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.ConsumptionPage();
                if (object.items) {
                    if (!$Array.isArray(object.items))
                        throw $TypeError(".mediflow.v4.ConsumptionPage.items: array expected");
                    message.items = $Array(object.items.length);
                    for (let i = 0; i < object.items.length; ++i) {
                        if (!$util.isObject(object.items[i]))
                            throw $TypeError(".mediflow.v4.ConsumptionPage.items: object expected");
                        message.items[i] = $root.mediflow.v4.Consumption.fromObject(object.items[i], _depth + 1);
                    }
                }
                if (object.total != null)
                    if ($util.Long)
                        message.total = $util.Long.fromValue(object.total, true);
                    else if (typeof object.total === "string")
                        message.total = $parseInt(object.total, 10);
                    else if (typeof object.total === "number")
                        message.total = object.total;
                    else if (typeof object.total === "object")
                        message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber(true);
                if (object.page != null)
                    message.page = object.page >>> 0;
                if (object.pageSize != null)
                    message.pageSize = object.pageSize >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a ConsumptionPage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.ConsumptionPage
             * @static
             * @param {mediflow.v4.ConsumptionPage} message ConsumptionPage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConsumptionPage.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.items = [];
                if (message.items && message.items.length) {
                    object.items = $Array(message.items.length);
                    for (let j = 0; j < message.items.length; ++j)
                        object.items[j] = $root.mediflow.v4.Consumption.toObject(message.items[j], options, _depth + 1);
                }
                if (message.total != null && $Object.hasOwnProperty.call(message, "total"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.total = typeof message.total === "number" ? $BigInt(message.total) : $util.Long.fromBits(message.total.low >>> 0, message.total.high >>> 0, true).toBigInt();
                    else if (typeof message.total === "number")
                        object.total = options.longs === $String ? $String(message.total) : message.total;
                    else
                        object.total = options.longs === $String ? $util.Long.prototype.toString.call(message.total) : options.longs === $Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber(true) : message.total;
                if (message.page != null && $Object.hasOwnProperty.call(message, "page"))
                    object.page = message.page;
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize"))
                    object.pageSize = message.pageSize;
                return object;
            };

            /**
             * Converts this ConsumptionPage to JSON.
             * @function toJSON
             * @memberof mediflow.v4.ConsumptionPage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConsumptionPage.prototype.toJSON = function() {
                return ConsumptionPage.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ConsumptionPage
             * @function getTypeUrl
             * @memberof mediflow.v4.ConsumptionPage
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ConsumptionPage.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.ConsumptionPage";
            };

            return ConsumptionPage;
        })();

        v4.AuditPage = (function() {

            /**
             * Properties of an AuditPage.
             * @typedef {Object} mediflow.v4.AuditPage.$Properties
             * @property {Array.<mediflow.v4.Audit.$Properties>|null} [items] AuditPage items
             * @property {number|Long|null} [total] AuditPage total
             * @property {number|null} [page] AuditPage page
             * @property {number|null} [pageSize] AuditPage pageSize
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an AuditPage.
             * @memberof mediflow.v4
             * @interface IAuditPage
             * @augments mediflow.v4.AuditPage.$Properties
             * @deprecated Use mediflow.v4.AuditPage.$Properties instead.
             */

            /**
             * Shape of an AuditPage.
             * @typedef {mediflow.v4.AuditPage.$Properties} mediflow.v4.AuditPage.$Shape
             */

            /**
             * Constructs a new AuditPage.
             * @memberof mediflow.v4
             * @classdesc Represents an AuditPage.
             * @constructor
             * @param {mediflow.v4.AuditPage.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const AuditPage = function (properties) {
                this.items = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * AuditPage items.
             * @member {Array.<mediflow.v4.Audit.$Properties>} items
             * @memberof mediflow.v4.AuditPage
             * @instance
             */
            AuditPage.prototype.items = $util.emptyArray;

            /**
             * AuditPage total.
             * @member {number|Long|null|undefined} total
             * @memberof mediflow.v4.AuditPage
             * @instance
             */
            AuditPage.prototype.total = null;

            /**
             * AuditPage page.
             * @member {number|null|undefined} page
             * @memberof mediflow.v4.AuditPage
             * @instance
             */
            AuditPage.prototype.page = null;

            /**
             * AuditPage pageSize.
             * @member {number|null|undefined} pageSize
             * @memberof mediflow.v4.AuditPage
             * @instance
             */
            AuditPage.prototype.pageSize = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(AuditPage.prototype, "_total", {
                get: $util.oneOfGetter($oneOfFields = ["total"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(AuditPage.prototype, "_page", {
                get: $util.oneOfGetter($oneOfFields = ["page"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(AuditPage.prototype, "_pageSize", {
                get: $util.oneOfGetter($oneOfFields = ["pageSize"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new AuditPage instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.AuditPage
             * @static
             * @param {mediflow.v4.AuditPage.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.AuditPage} AuditPage instance
             * @type {{
             *   (properties: mediflow.v4.AuditPage.$Shape): mediflow.v4.AuditPage & mediflow.v4.AuditPage.$Shape;
             *   (properties?: mediflow.v4.AuditPage.$Properties): mediflow.v4.AuditPage;
             * }}
             */
            AuditPage.create = function(properties) {
                return new AuditPage(properties);
            };

            /**
             * Encodes the specified AuditPage message. Does not implicitly {@link mediflow.v4.AuditPage.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.AuditPage
             * @static
             * @param {mediflow.v4.AuditPage.$Properties} message AuditPage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuditPage.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.items != null && message.items.length)
                    for (let i = 0; i < message.items.length; ++i)
                        $root.mediflow.v4.Audit.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.total != null && $Object.hasOwnProperty.call(message, "total"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.total);
                if (message.page != null && $Object.hasOwnProperty.call(message, "page"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.page);
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.pageSize);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes an AuditPage message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.AuditPage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.AuditPage & mediflow.v4.AuditPage.$Shape} AuditPage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuditPage.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.AuditPage();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.items && message.items.length))
                                message.items = [];
                            message.items.push($root.mediflow.v4.Audit.decode(reader, reader.size(), $undefined, _depth + 1));
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.total = reader.uint64();
                            message._total = "total";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.page = reader.uint32();
                            message._page = "page";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.pageSize = reader.uint32();
                            message._pageSize = "pageSize";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies an AuditPage message.
             * @function verify
             * @memberof mediflow.v4.AuditPage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AuditPage.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.items != null && $Object.hasOwnProperty.call(message, "items")) {
                    if (!$Array.isArray(message.items))
                        return "items: array expected";
                    for (let i = 0; i < message.items.length; ++i) {
                        let error = $root.mediflow.v4.Audit.verify(message.items[i], _depth + 1);
                        if (error)
                            return "items." + error;
                    }
                }
                if (message.total != null && $Object.hasOwnProperty.call(message, "total")) {
                    properties._total = 1;
                    if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                        return "total: integer|Long expected";
                }
                if (message.page != null && $Object.hasOwnProperty.call(message, "page")) {
                    properties._page = 1;
                    if (!$util.isInteger(message.page))
                        return "page: integer expected";
                }
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize")) {
                    properties._pageSize = 1;
                    if (!$util.isInteger(message.pageSize))
                        return "pageSize: integer expected";
                }
                return null;
            };

            /**
             * Creates an AuditPage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.AuditPage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.AuditPage} AuditPage
             */
            AuditPage.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.AuditPage)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.AuditPage: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.AuditPage();
                if (object.items) {
                    if (!$Array.isArray(object.items))
                        throw $TypeError(".mediflow.v4.AuditPage.items: array expected");
                    message.items = $Array(object.items.length);
                    for (let i = 0; i < object.items.length; ++i) {
                        if (!$util.isObject(object.items[i]))
                            throw $TypeError(".mediflow.v4.AuditPage.items: object expected");
                        message.items[i] = $root.mediflow.v4.Audit.fromObject(object.items[i], _depth + 1);
                    }
                }
                if (object.total != null)
                    if ($util.Long)
                        message.total = $util.Long.fromValue(object.total, true);
                    else if (typeof object.total === "string")
                        message.total = $parseInt(object.total, 10);
                    else if (typeof object.total === "number")
                        message.total = object.total;
                    else if (typeof object.total === "object")
                        message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber(true);
                if (object.page != null)
                    message.page = object.page >>> 0;
                if (object.pageSize != null)
                    message.pageSize = object.pageSize >>> 0;
                return message;
            };

            /**
             * Creates a plain object from an AuditPage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.AuditPage
             * @static
             * @param {mediflow.v4.AuditPage} message AuditPage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AuditPage.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.items = [];
                if (message.items && message.items.length) {
                    object.items = $Array(message.items.length);
                    for (let j = 0; j < message.items.length; ++j)
                        object.items[j] = $root.mediflow.v4.Audit.toObject(message.items[j], options, _depth + 1);
                }
                if (message.total != null && $Object.hasOwnProperty.call(message, "total"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.total = typeof message.total === "number" ? $BigInt(message.total) : $util.Long.fromBits(message.total.low >>> 0, message.total.high >>> 0, true).toBigInt();
                    else if (typeof message.total === "number")
                        object.total = options.longs === $String ? $String(message.total) : message.total;
                    else
                        object.total = options.longs === $String ? $util.Long.prototype.toString.call(message.total) : options.longs === $Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber(true) : message.total;
                if (message.page != null && $Object.hasOwnProperty.call(message, "page"))
                    object.page = message.page;
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize"))
                    object.pageSize = message.pageSize;
                return object;
            };

            /**
             * Converts this AuditPage to JSON.
             * @function toJSON
             * @memberof mediflow.v4.AuditPage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AuditPage.prototype.toJSON = function() {
                return AuditPage.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for AuditPage
             * @function getTypeUrl
             * @memberof mediflow.v4.AuditPage
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            AuditPage.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.AuditPage";
            };

            return AuditPage;
        })();

        v4.ArchivePage = (function() {

            /**
             * Properties of an ArchivePage.
             * @typedef {Object} mediflow.v4.ArchivePage.$Properties
             * @property {Array.<mediflow.v4.Archive.$Properties>|null} [items] ArchivePage items
             * @property {number|Long|null} [total] ArchivePage total
             * @property {number|null} [page] ArchivePage page
             * @property {number|null} [pageSize] ArchivePage pageSize
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an ArchivePage.
             * @memberof mediflow.v4
             * @interface IArchivePage
             * @augments mediflow.v4.ArchivePage.$Properties
             * @deprecated Use mediflow.v4.ArchivePage.$Properties instead.
             */

            /**
             * Shape of an ArchivePage.
             * @typedef {mediflow.v4.ArchivePage.$Properties} mediflow.v4.ArchivePage.$Shape
             */

            /**
             * Constructs a new ArchivePage.
             * @memberof mediflow.v4
             * @classdesc Represents an ArchivePage.
             * @constructor
             * @param {mediflow.v4.ArchivePage.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const ArchivePage = function (properties) {
                this.items = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * ArchivePage items.
             * @member {Array.<mediflow.v4.Archive.$Properties>} items
             * @memberof mediflow.v4.ArchivePage
             * @instance
             */
            ArchivePage.prototype.items = $util.emptyArray;

            /**
             * ArchivePage total.
             * @member {number|Long|null|undefined} total
             * @memberof mediflow.v4.ArchivePage
             * @instance
             */
            ArchivePage.prototype.total = null;

            /**
             * ArchivePage page.
             * @member {number|null|undefined} page
             * @memberof mediflow.v4.ArchivePage
             * @instance
             */
            ArchivePage.prototype.page = null;

            /**
             * ArchivePage pageSize.
             * @member {number|null|undefined} pageSize
             * @memberof mediflow.v4.ArchivePage
             * @instance
             */
            ArchivePage.prototype.pageSize = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ArchivePage.prototype, "_total", {
                get: $util.oneOfGetter($oneOfFields = ["total"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ArchivePage.prototype, "_page", {
                get: $util.oneOfGetter($oneOfFields = ["page"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ArchivePage.prototype, "_pageSize", {
                get: $util.oneOfGetter($oneOfFields = ["pageSize"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ArchivePage instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.ArchivePage
             * @static
             * @param {mediflow.v4.ArchivePage.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.ArchivePage} ArchivePage instance
             * @type {{
             *   (properties: mediflow.v4.ArchivePage.$Shape): mediflow.v4.ArchivePage & mediflow.v4.ArchivePage.$Shape;
             *   (properties?: mediflow.v4.ArchivePage.$Properties): mediflow.v4.ArchivePage;
             * }}
             */
            ArchivePage.create = function(properties) {
                return new ArchivePage(properties);
            };

            /**
             * Encodes the specified ArchivePage message. Does not implicitly {@link mediflow.v4.ArchivePage.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.ArchivePage
             * @static
             * @param {mediflow.v4.ArchivePage.$Properties} message ArchivePage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ArchivePage.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.items != null && message.items.length)
                    for (let i = 0; i < message.items.length; ++i)
                        $root.mediflow.v4.Archive.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.total != null && $Object.hasOwnProperty.call(message, "total"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.total);
                if (message.page != null && $Object.hasOwnProperty.call(message, "page"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.page);
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.pageSize);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes an ArchivePage message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.ArchivePage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.ArchivePage & mediflow.v4.ArchivePage.$Shape} ArchivePage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ArchivePage.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.ArchivePage();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.items && message.items.length))
                                message.items = [];
                            message.items.push($root.mediflow.v4.Archive.decode(reader, reader.size(), $undefined, _depth + 1));
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.total = reader.uint64();
                            message._total = "total";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.page = reader.uint32();
                            message._page = "page";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.pageSize = reader.uint32();
                            message._pageSize = "pageSize";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies an ArchivePage message.
             * @function verify
             * @memberof mediflow.v4.ArchivePage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ArchivePage.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.items != null && $Object.hasOwnProperty.call(message, "items")) {
                    if (!$Array.isArray(message.items))
                        return "items: array expected";
                    for (let i = 0; i < message.items.length; ++i) {
                        let error = $root.mediflow.v4.Archive.verify(message.items[i], _depth + 1);
                        if (error)
                            return "items." + error;
                    }
                }
                if (message.total != null && $Object.hasOwnProperty.call(message, "total")) {
                    properties._total = 1;
                    if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                        return "total: integer|Long expected";
                }
                if (message.page != null && $Object.hasOwnProperty.call(message, "page")) {
                    properties._page = 1;
                    if (!$util.isInteger(message.page))
                        return "page: integer expected";
                }
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize")) {
                    properties._pageSize = 1;
                    if (!$util.isInteger(message.pageSize))
                        return "pageSize: integer expected";
                }
                return null;
            };

            /**
             * Creates an ArchivePage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.ArchivePage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.ArchivePage} ArchivePage
             */
            ArchivePage.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.ArchivePage)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.ArchivePage: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.ArchivePage();
                if (object.items) {
                    if (!$Array.isArray(object.items))
                        throw $TypeError(".mediflow.v4.ArchivePage.items: array expected");
                    message.items = $Array(object.items.length);
                    for (let i = 0; i < object.items.length; ++i) {
                        if (!$util.isObject(object.items[i]))
                            throw $TypeError(".mediflow.v4.ArchivePage.items: object expected");
                        message.items[i] = $root.mediflow.v4.Archive.fromObject(object.items[i], _depth + 1);
                    }
                }
                if (object.total != null)
                    if ($util.Long)
                        message.total = $util.Long.fromValue(object.total, true);
                    else if (typeof object.total === "string")
                        message.total = $parseInt(object.total, 10);
                    else if (typeof object.total === "number")
                        message.total = object.total;
                    else if (typeof object.total === "object")
                        message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber(true);
                if (object.page != null)
                    message.page = object.page >>> 0;
                if (object.pageSize != null)
                    message.pageSize = object.pageSize >>> 0;
                return message;
            };

            /**
             * Creates a plain object from an ArchivePage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.ArchivePage
             * @static
             * @param {mediflow.v4.ArchivePage} message ArchivePage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ArchivePage.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.items = [];
                if (message.items && message.items.length) {
                    object.items = $Array(message.items.length);
                    for (let j = 0; j < message.items.length; ++j)
                        object.items[j] = $root.mediflow.v4.Archive.toObject(message.items[j], options, _depth + 1);
                }
                if (message.total != null && $Object.hasOwnProperty.call(message, "total"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.total = typeof message.total === "number" ? $BigInt(message.total) : $util.Long.fromBits(message.total.low >>> 0, message.total.high >>> 0, true).toBigInt();
                    else if (typeof message.total === "number")
                        object.total = options.longs === $String ? $String(message.total) : message.total;
                    else
                        object.total = options.longs === $String ? $util.Long.prototype.toString.call(message.total) : options.longs === $Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber(true) : message.total;
                if (message.page != null && $Object.hasOwnProperty.call(message, "page"))
                    object.page = message.page;
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize"))
                    object.pageSize = message.pageSize;
                return object;
            };

            /**
             * Converts this ArchivePage to JSON.
             * @function toJSON
             * @memberof mediflow.v4.ArchivePage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ArchivePage.prototype.toJSON = function() {
                return ArchivePage.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ArchivePage
             * @function getTypeUrl
             * @memberof mediflow.v4.ArchivePage
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ArchivePage.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.ArchivePage";
            };

            return ArchivePage;
        })();

        v4.HistoryPage = (function() {

            /**
             * Properties of a HistoryPage.
             * @typedef {Object} mediflow.v4.HistoryPage.$Properties
             * @property {Array.<mediflow.v4.HistoryItem.$Properties>|null} [items] HistoryPage items
             * @property {number|Long|null} [total] HistoryPage total
             * @property {number|null} [page] HistoryPage page
             * @property {number|null} [pageSize] HistoryPage pageSize
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a HistoryPage.
             * @memberof mediflow.v4
             * @interface IHistoryPage
             * @augments mediflow.v4.HistoryPage.$Properties
             * @deprecated Use mediflow.v4.HistoryPage.$Properties instead.
             */

            /**
             * Shape of a HistoryPage.
             * @typedef {{
             *   items?: Array.<mediflow.v4.HistoryItem.$Shape>|null;
             *   total?: number|Long|null;
             *   page?: number|null;
             *   pageSize?: number|null;
             *   $unknowns?: Array.<Uint8Array>;
             * }} mediflow.v4.HistoryPage.$Shape
             */

            /**
             * Constructs a new HistoryPage.
             * @memberof mediflow.v4
             * @classdesc Represents a HistoryPage.
             * @constructor
             * @param {mediflow.v4.HistoryPage.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const HistoryPage = function (properties) {
                this.items = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * HistoryPage items.
             * @member {Array.<mediflow.v4.HistoryItem.$Properties>} items
             * @memberof mediflow.v4.HistoryPage
             * @instance
             */
            HistoryPage.prototype.items = $util.emptyArray;

            /**
             * HistoryPage total.
             * @member {number|Long|null|undefined} total
             * @memberof mediflow.v4.HistoryPage
             * @instance
             */
            HistoryPage.prototype.total = null;

            /**
             * HistoryPage page.
             * @member {number|null|undefined} page
             * @memberof mediflow.v4.HistoryPage
             * @instance
             */
            HistoryPage.prototype.page = null;

            /**
             * HistoryPage pageSize.
             * @member {number|null|undefined} pageSize
             * @memberof mediflow.v4.HistoryPage
             * @instance
             */
            HistoryPage.prototype.pageSize = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistoryPage.prototype, "_total", {
                get: $util.oneOfGetter($oneOfFields = ["total"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistoryPage.prototype, "_page", {
                get: $util.oneOfGetter($oneOfFields = ["page"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistoryPage.prototype, "_pageSize", {
                get: $util.oneOfGetter($oneOfFields = ["pageSize"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new HistoryPage instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.HistoryPage
             * @static
             * @param {mediflow.v4.HistoryPage.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.HistoryPage} HistoryPage instance
             * @type {{
             *   (properties: mediflow.v4.HistoryPage.$Shape): mediflow.v4.HistoryPage & mediflow.v4.HistoryPage.$Shape;
             *   (properties?: mediflow.v4.HistoryPage.$Properties): mediflow.v4.HistoryPage;
             * }}
             */
            HistoryPage.create = function(properties) {
                return new HistoryPage(properties);
            };

            /**
             * Encodes the specified HistoryPage message. Does not implicitly {@link mediflow.v4.HistoryPage.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.HistoryPage
             * @static
             * @param {mediflow.v4.HistoryPage.$Properties} message HistoryPage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HistoryPage.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.items != null && message.items.length)
                    for (let i = 0; i < message.items.length; ++i)
                        $root.mediflow.v4.HistoryItem.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.total != null && $Object.hasOwnProperty.call(message, "total"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.total);
                if (message.page != null && $Object.hasOwnProperty.call(message, "page"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.page);
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.pageSize);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a HistoryPage message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.HistoryPage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.HistoryPage & mediflow.v4.HistoryPage.$Shape} HistoryPage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HistoryPage.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.HistoryPage();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.items && message.items.length))
                                message.items = [];
                            message.items.push($root.mediflow.v4.HistoryItem.decode(reader, reader.size(), $undefined, _depth + 1));
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.total = reader.uint64();
                            message._total = "total";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.page = reader.uint32();
                            message._page = "page";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.pageSize = reader.uint32();
                            message._pageSize = "pageSize";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a HistoryPage message.
             * @function verify
             * @memberof mediflow.v4.HistoryPage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HistoryPage.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.items != null && $Object.hasOwnProperty.call(message, "items")) {
                    if (!$Array.isArray(message.items))
                        return "items: array expected";
                    for (let i = 0; i < message.items.length; ++i) {
                        let error = $root.mediflow.v4.HistoryItem.verify(message.items[i], _depth + 1);
                        if (error)
                            return "items." + error;
                    }
                }
                if (message.total != null && $Object.hasOwnProperty.call(message, "total")) {
                    properties._total = 1;
                    if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                        return "total: integer|Long expected";
                }
                if (message.page != null && $Object.hasOwnProperty.call(message, "page")) {
                    properties._page = 1;
                    if (!$util.isInteger(message.page))
                        return "page: integer expected";
                }
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize")) {
                    properties._pageSize = 1;
                    if (!$util.isInteger(message.pageSize))
                        return "pageSize: integer expected";
                }
                return null;
            };

            /**
             * Creates a HistoryPage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.HistoryPage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.HistoryPage} HistoryPage
             */
            HistoryPage.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.HistoryPage)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.HistoryPage: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.HistoryPage();
                if (object.items) {
                    if (!$Array.isArray(object.items))
                        throw $TypeError(".mediflow.v4.HistoryPage.items: array expected");
                    message.items = $Array(object.items.length);
                    for (let i = 0; i < object.items.length; ++i) {
                        if (!$util.isObject(object.items[i]))
                            throw $TypeError(".mediflow.v4.HistoryPage.items: object expected");
                        message.items[i] = $root.mediflow.v4.HistoryItem.fromObject(object.items[i], _depth + 1);
                    }
                }
                if (object.total != null)
                    if ($util.Long)
                        message.total = $util.Long.fromValue(object.total, true);
                    else if (typeof object.total === "string")
                        message.total = $parseInt(object.total, 10);
                    else if (typeof object.total === "number")
                        message.total = object.total;
                    else if (typeof object.total === "object")
                        message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber(true);
                if (object.page != null)
                    message.page = object.page >>> 0;
                if (object.pageSize != null)
                    message.pageSize = object.pageSize >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a HistoryPage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.HistoryPage
             * @static
             * @param {mediflow.v4.HistoryPage} message HistoryPage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HistoryPage.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.items = [];
                if (message.items && message.items.length) {
                    object.items = $Array(message.items.length);
                    for (let j = 0; j < message.items.length; ++j)
                        object.items[j] = $root.mediflow.v4.HistoryItem.toObject(message.items[j], options, _depth + 1);
                }
                if (message.total != null && $Object.hasOwnProperty.call(message, "total"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.total = typeof message.total === "number" ? $BigInt(message.total) : $util.Long.fromBits(message.total.low >>> 0, message.total.high >>> 0, true).toBigInt();
                    else if (typeof message.total === "number")
                        object.total = options.longs === $String ? $String(message.total) : message.total;
                    else
                        object.total = options.longs === $String ? $util.Long.prototype.toString.call(message.total) : options.longs === $Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber(true) : message.total;
                if (message.page != null && $Object.hasOwnProperty.call(message, "page"))
                    object.page = message.page;
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize"))
                    object.pageSize = message.pageSize;
                return object;
            };

            /**
             * Converts this HistoryPage to JSON.
             * @function toJSON
             * @memberof mediflow.v4.HistoryPage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HistoryPage.prototype.toJSON = function() {
                return HistoryPage.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for HistoryPage
             * @function getTypeUrl
             * @memberof mediflow.v4.HistoryPage
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            HistoryPage.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.HistoryPage";
            };

            return HistoryPage;
        })();

        v4.ScreenDetail = (function() {

            /**
             * Properties of a ScreenDetail.
             * @typedef {Object} mediflow.v4.ScreenDetail.$Properties
             * @property {mediflow.v4.Screen.$Properties|null} [screen] ScreenDetail screen
             * @property {mediflow.v4.Snapshot.$Properties|null} [state] ScreenDetail state
             * @property {mediflow.v4.CallPage.$Properties|null} [calls] ScreenDetail calls
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a ScreenDetail.
             * @memberof mediflow.v4
             * @interface IScreenDetail
             * @augments mediflow.v4.ScreenDetail.$Properties
             * @deprecated Use mediflow.v4.ScreenDetail.$Properties instead.
             */

            /**
             * Shape of a ScreenDetail.
             * @typedef {mediflow.v4.ScreenDetail.$Properties} mediflow.v4.ScreenDetail.$Shape
             */

            /**
             * Constructs a new ScreenDetail.
             * @memberof mediflow.v4
             * @classdesc Represents a ScreenDetail.
             * @constructor
             * @param {mediflow.v4.ScreenDetail.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const ScreenDetail = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * ScreenDetail screen.
             * @member {mediflow.v4.Screen.$Properties|null|undefined} screen
             * @memberof mediflow.v4.ScreenDetail
             * @instance
             */
            ScreenDetail.prototype.screen = null;

            /**
             * ScreenDetail state.
             * @member {mediflow.v4.Snapshot.$Properties|null|undefined} state
             * @memberof mediflow.v4.ScreenDetail
             * @instance
             */
            ScreenDetail.prototype.state = null;

            /**
             * ScreenDetail calls.
             * @member {mediflow.v4.CallPage.$Properties|null|undefined} calls
             * @memberof mediflow.v4.ScreenDetail
             * @instance
             */
            ScreenDetail.prototype.calls = null;

            /**
             * Creates a new ScreenDetail instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.ScreenDetail
             * @static
             * @param {mediflow.v4.ScreenDetail.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.ScreenDetail} ScreenDetail instance
             * @type {{
             *   (properties: mediflow.v4.ScreenDetail.$Shape): mediflow.v4.ScreenDetail & mediflow.v4.ScreenDetail.$Shape;
             *   (properties?: mediflow.v4.ScreenDetail.$Properties): mediflow.v4.ScreenDetail;
             * }}
             */
            ScreenDetail.create = function(properties) {
                return new ScreenDetail(properties);
            };

            /**
             * Encodes the specified ScreenDetail message. Does not implicitly {@link mediflow.v4.ScreenDetail.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.ScreenDetail
             * @static
             * @param {mediflow.v4.ScreenDetail.$Properties} message ScreenDetail message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ScreenDetail.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.screen != null && $Object.hasOwnProperty.call(message, "screen"))
                    $root.mediflow.v4.Screen.encode(message.screen, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.state != null && $Object.hasOwnProperty.call(message, "state"))
                    $root.mediflow.v4.Snapshot.encode(message.state, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.calls != null && $Object.hasOwnProperty.call(message, "calls"))
                    $root.mediflow.v4.CallPage.encode(message.calls, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a ScreenDetail message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.ScreenDetail
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.ScreenDetail & mediflow.v4.ScreenDetail.$Shape} ScreenDetail
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ScreenDetail.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.ScreenDetail();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.screen = $root.mediflow.v4.Screen.decode(reader, reader.size(), $undefined, _depth + 1, message.screen);
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.state = $root.mediflow.v4.Snapshot.decode(reader, reader.size(), $undefined, _depth + 1, message.state);
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.calls = $root.mediflow.v4.CallPage.decode(reader, reader.size(), $undefined, _depth + 1, message.calls);
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a ScreenDetail message.
             * @function verify
             * @memberof mediflow.v4.ScreenDetail
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ScreenDetail.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.screen != null && $Object.hasOwnProperty.call(message, "screen")) {
                    let error = $root.mediflow.v4.Screen.verify(message.screen, _depth + 1);
                    if (error)
                        return "screen." + error;
                }
                if (message.state != null && $Object.hasOwnProperty.call(message, "state")) {
                    let error = $root.mediflow.v4.Snapshot.verify(message.state, _depth + 1);
                    if (error)
                        return "state." + error;
                }
                if (message.calls != null && $Object.hasOwnProperty.call(message, "calls")) {
                    let error = $root.mediflow.v4.CallPage.verify(message.calls, _depth + 1);
                    if (error)
                        return "calls." + error;
                }
                return null;
            };

            /**
             * Creates a ScreenDetail message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.ScreenDetail
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.ScreenDetail} ScreenDetail
             */
            ScreenDetail.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.ScreenDetail)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.ScreenDetail: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.ScreenDetail();
                if (object.screen != null) {
                    if (!$util.isObject(object.screen))
                        throw $TypeError(".mediflow.v4.ScreenDetail.screen: object expected");
                    message.screen = $root.mediflow.v4.Screen.fromObject(object.screen, _depth + 1);
                }
                if (object.state != null) {
                    if (!$util.isObject(object.state))
                        throw $TypeError(".mediflow.v4.ScreenDetail.state: object expected");
                    message.state = $root.mediflow.v4.Snapshot.fromObject(object.state, _depth + 1);
                }
                if (object.calls != null) {
                    if (!$util.isObject(object.calls))
                        throw $TypeError(".mediflow.v4.ScreenDetail.calls: object expected");
                    message.calls = $root.mediflow.v4.CallPage.fromObject(object.calls, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a ScreenDetail message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.ScreenDetail
             * @static
             * @param {mediflow.v4.ScreenDetail} message ScreenDetail
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ScreenDetail.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.screen = null;
                    object.state = null;
                    object.calls = null;
                }
                if (message.screen != null && $Object.hasOwnProperty.call(message, "screen"))
                    object.screen = $root.mediflow.v4.Screen.toObject(message.screen, options, _depth + 1);
                if (message.state != null && $Object.hasOwnProperty.call(message, "state"))
                    object.state = $root.mediflow.v4.Snapshot.toObject(message.state, options, _depth + 1);
                if (message.calls != null && $Object.hasOwnProperty.call(message, "calls"))
                    object.calls = $root.mediflow.v4.CallPage.toObject(message.calls, options, _depth + 1);
                return object;
            };

            /**
             * Converts this ScreenDetail to JSON.
             * @function toJSON
             * @memberof mediflow.v4.ScreenDetail
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ScreenDetail.prototype.toJSON = function() {
                return ScreenDetail.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ScreenDetail
             * @function getTypeUrl
             * @memberof mediflow.v4.ScreenDetail
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ScreenDetail.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.ScreenDetail";
            };

            return ScreenDetail;
        })();

        v4.Overview = (function() {

            /**
             * Properties of an Overview.
             * @typedef {Object} mediflow.v4.Overview.$Properties
             * @property {number|Long|null} [screens] Overview screens
             * @property {number|Long|null} [calls] Overview calls
             * @property {number|Long|null} [consumptions] Overview consumptions
             * @property {number|Long|null} [auditEvents] Overview auditEvents
             * @property {number|Long|null} [onlineScreens] Overview onlineScreens
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an Overview.
             * @memberof mediflow.v4
             * @interface IOverview
             * @augments mediflow.v4.Overview.$Properties
             * @deprecated Use mediflow.v4.Overview.$Properties instead.
             */

            /**
             * Shape of an Overview.
             * @typedef {mediflow.v4.Overview.$Properties} mediflow.v4.Overview.$Shape
             */

            /**
             * Constructs a new Overview.
             * @memberof mediflow.v4
             * @classdesc Represents an Overview.
             * @constructor
             * @param {mediflow.v4.Overview.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Overview = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Overview screens.
             * @member {number|Long|null|undefined} screens
             * @memberof mediflow.v4.Overview
             * @instance
             */
            Overview.prototype.screens = null;

            /**
             * Overview calls.
             * @member {number|Long|null|undefined} calls
             * @memberof mediflow.v4.Overview
             * @instance
             */
            Overview.prototype.calls = null;

            /**
             * Overview consumptions.
             * @member {number|Long|null|undefined} consumptions
             * @memberof mediflow.v4.Overview
             * @instance
             */
            Overview.prototype.consumptions = null;

            /**
             * Overview auditEvents.
             * @member {number|Long|null|undefined} auditEvents
             * @memberof mediflow.v4.Overview
             * @instance
             */
            Overview.prototype.auditEvents = null;

            /**
             * Overview onlineScreens.
             * @member {number|Long|null|undefined} onlineScreens
             * @memberof mediflow.v4.Overview
             * @instance
             */
            Overview.prototype.onlineScreens = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Overview.prototype, "_screens", {
                get: $util.oneOfGetter($oneOfFields = ["screens"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Overview.prototype, "_calls", {
                get: $util.oneOfGetter($oneOfFields = ["calls"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Overview.prototype, "_consumptions", {
                get: $util.oneOfGetter($oneOfFields = ["consumptions"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Overview.prototype, "_auditEvents", {
                get: $util.oneOfGetter($oneOfFields = ["auditEvents"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Overview.prototype, "_onlineScreens", {
                get: $util.oneOfGetter($oneOfFields = ["onlineScreens"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Overview instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Overview
             * @static
             * @param {mediflow.v4.Overview.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Overview} Overview instance
             * @type {{
             *   (properties: mediflow.v4.Overview.$Shape): mediflow.v4.Overview & mediflow.v4.Overview.$Shape;
             *   (properties?: mediflow.v4.Overview.$Properties): mediflow.v4.Overview;
             * }}
             */
            Overview.create = function(properties) {
                return new Overview(properties);
            };

            /**
             * Encodes the specified Overview message. Does not implicitly {@link mediflow.v4.Overview.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Overview
             * @static
             * @param {mediflow.v4.Overview.$Properties} message Overview message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Overview.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.screens != null && $Object.hasOwnProperty.call(message, "screens"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.screens);
                if (message.calls != null && $Object.hasOwnProperty.call(message, "calls"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.calls);
                if (message.consumptions != null && $Object.hasOwnProperty.call(message, "consumptions"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.consumptions);
                if (message.auditEvents != null && $Object.hasOwnProperty.call(message, "auditEvents"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.auditEvents);
                if (message.onlineScreens != null && $Object.hasOwnProperty.call(message, "onlineScreens"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.onlineScreens);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes an Overview message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Overview
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Overview & mediflow.v4.Overview.$Shape} Overview
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Overview.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Overview();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            message.screens = reader.uint64();
                            message._screens = "screens";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.calls = reader.uint64();
                            message._calls = "calls";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.consumptions = reader.uint64();
                            message._consumptions = "consumptions";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.auditEvents = reader.uint64();
                            message._auditEvents = "auditEvents";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            message.onlineScreens = reader.uint64();
                            message._onlineScreens = "onlineScreens";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies an Overview message.
             * @function verify
             * @memberof mediflow.v4.Overview
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Overview.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.screens != null && $Object.hasOwnProperty.call(message, "screens")) {
                    properties._screens = 1;
                    if (!$util.isInteger(message.screens) && !(message.screens && $util.isInteger(message.screens.low) && $util.isInteger(message.screens.high)))
                        return "screens: integer|Long expected";
                }
                if (message.calls != null && $Object.hasOwnProperty.call(message, "calls")) {
                    properties._calls = 1;
                    if (!$util.isInteger(message.calls) && !(message.calls && $util.isInteger(message.calls.low) && $util.isInteger(message.calls.high)))
                        return "calls: integer|Long expected";
                }
                if (message.consumptions != null && $Object.hasOwnProperty.call(message, "consumptions")) {
                    properties._consumptions = 1;
                    if (!$util.isInteger(message.consumptions) && !(message.consumptions && $util.isInteger(message.consumptions.low) && $util.isInteger(message.consumptions.high)))
                        return "consumptions: integer|Long expected";
                }
                if (message.auditEvents != null && $Object.hasOwnProperty.call(message, "auditEvents")) {
                    properties._auditEvents = 1;
                    if (!$util.isInteger(message.auditEvents) && !(message.auditEvents && $util.isInteger(message.auditEvents.low) && $util.isInteger(message.auditEvents.high)))
                        return "auditEvents: integer|Long expected";
                }
                if (message.onlineScreens != null && $Object.hasOwnProperty.call(message, "onlineScreens")) {
                    properties._onlineScreens = 1;
                    if (!$util.isInteger(message.onlineScreens) && !(message.onlineScreens && $util.isInteger(message.onlineScreens.low) && $util.isInteger(message.onlineScreens.high)))
                        return "onlineScreens: integer|Long expected";
                }
                return null;
            };

            /**
             * Creates an Overview message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Overview
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Overview} Overview
             */
            Overview.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Overview)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Overview: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Overview();
                if (object.screens != null)
                    if ($util.Long)
                        message.screens = $util.Long.fromValue(object.screens, true);
                    else if (typeof object.screens === "string")
                        message.screens = $parseInt(object.screens, 10);
                    else if (typeof object.screens === "number")
                        message.screens = object.screens;
                    else if (typeof object.screens === "object")
                        message.screens = new $util.LongBits(object.screens.low >>> 0, object.screens.high >>> 0).toNumber(true);
                if (object.calls != null)
                    if ($util.Long)
                        message.calls = $util.Long.fromValue(object.calls, true);
                    else if (typeof object.calls === "string")
                        message.calls = $parseInt(object.calls, 10);
                    else if (typeof object.calls === "number")
                        message.calls = object.calls;
                    else if (typeof object.calls === "object")
                        message.calls = new $util.LongBits(object.calls.low >>> 0, object.calls.high >>> 0).toNumber(true);
                if (object.consumptions != null)
                    if ($util.Long)
                        message.consumptions = $util.Long.fromValue(object.consumptions, true);
                    else if (typeof object.consumptions === "string")
                        message.consumptions = $parseInt(object.consumptions, 10);
                    else if (typeof object.consumptions === "number")
                        message.consumptions = object.consumptions;
                    else if (typeof object.consumptions === "object")
                        message.consumptions = new $util.LongBits(object.consumptions.low >>> 0, object.consumptions.high >>> 0).toNumber(true);
                if (object.auditEvents != null)
                    if ($util.Long)
                        message.auditEvents = $util.Long.fromValue(object.auditEvents, true);
                    else if (typeof object.auditEvents === "string")
                        message.auditEvents = $parseInt(object.auditEvents, 10);
                    else if (typeof object.auditEvents === "number")
                        message.auditEvents = object.auditEvents;
                    else if (typeof object.auditEvents === "object")
                        message.auditEvents = new $util.LongBits(object.auditEvents.low >>> 0, object.auditEvents.high >>> 0).toNumber(true);
                if (object.onlineScreens != null)
                    if ($util.Long)
                        message.onlineScreens = $util.Long.fromValue(object.onlineScreens, true);
                    else if (typeof object.onlineScreens === "string")
                        message.onlineScreens = $parseInt(object.onlineScreens, 10);
                    else if (typeof object.onlineScreens === "number")
                        message.onlineScreens = object.onlineScreens;
                    else if (typeof object.onlineScreens === "object")
                        message.onlineScreens = new $util.LongBits(object.onlineScreens.low >>> 0, object.onlineScreens.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from an Overview message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Overview
             * @static
             * @param {mediflow.v4.Overview} message Overview
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Overview.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.screens != null && $Object.hasOwnProperty.call(message, "screens"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.screens = typeof message.screens === "number" ? $BigInt(message.screens) : $util.Long.fromBits(message.screens.low >>> 0, message.screens.high >>> 0, true).toBigInt();
                    else if (typeof message.screens === "number")
                        object.screens = options.longs === $String ? $String(message.screens) : message.screens;
                    else
                        object.screens = options.longs === $String ? $util.Long.prototype.toString.call(message.screens) : options.longs === $Number ? new $util.LongBits(message.screens.low >>> 0, message.screens.high >>> 0).toNumber(true) : message.screens;
                if (message.calls != null && $Object.hasOwnProperty.call(message, "calls"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.calls = typeof message.calls === "number" ? $BigInt(message.calls) : $util.Long.fromBits(message.calls.low >>> 0, message.calls.high >>> 0, true).toBigInt();
                    else if (typeof message.calls === "number")
                        object.calls = options.longs === $String ? $String(message.calls) : message.calls;
                    else
                        object.calls = options.longs === $String ? $util.Long.prototype.toString.call(message.calls) : options.longs === $Number ? new $util.LongBits(message.calls.low >>> 0, message.calls.high >>> 0).toNumber(true) : message.calls;
                if (message.consumptions != null && $Object.hasOwnProperty.call(message, "consumptions"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.consumptions = typeof message.consumptions === "number" ? $BigInt(message.consumptions) : $util.Long.fromBits(message.consumptions.low >>> 0, message.consumptions.high >>> 0, true).toBigInt();
                    else if (typeof message.consumptions === "number")
                        object.consumptions = options.longs === $String ? $String(message.consumptions) : message.consumptions;
                    else
                        object.consumptions = options.longs === $String ? $util.Long.prototype.toString.call(message.consumptions) : options.longs === $Number ? new $util.LongBits(message.consumptions.low >>> 0, message.consumptions.high >>> 0).toNumber(true) : message.consumptions;
                if (message.auditEvents != null && $Object.hasOwnProperty.call(message, "auditEvents"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.auditEvents = typeof message.auditEvents === "number" ? $BigInt(message.auditEvents) : $util.Long.fromBits(message.auditEvents.low >>> 0, message.auditEvents.high >>> 0, true).toBigInt();
                    else if (typeof message.auditEvents === "number")
                        object.auditEvents = options.longs === $String ? $String(message.auditEvents) : message.auditEvents;
                    else
                        object.auditEvents = options.longs === $String ? $util.Long.prototype.toString.call(message.auditEvents) : options.longs === $Number ? new $util.LongBits(message.auditEvents.low >>> 0, message.auditEvents.high >>> 0).toNumber(true) : message.auditEvents;
                if (message.onlineScreens != null && $Object.hasOwnProperty.call(message, "onlineScreens"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.onlineScreens = typeof message.onlineScreens === "number" ? $BigInt(message.onlineScreens) : $util.Long.fromBits(message.onlineScreens.low >>> 0, message.onlineScreens.high >>> 0, true).toBigInt();
                    else if (typeof message.onlineScreens === "number")
                        object.onlineScreens = options.longs === $String ? $String(message.onlineScreens) : message.onlineScreens;
                    else
                        object.onlineScreens = options.longs === $String ? $util.Long.prototype.toString.call(message.onlineScreens) : options.longs === $Number ? new $util.LongBits(message.onlineScreens.low >>> 0, message.onlineScreens.high >>> 0).toNumber(true) : message.onlineScreens;
                return object;
            };

            /**
             * Converts this Overview to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Overview
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Overview.prototype.toJSON = function() {
                return Overview.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Overview
             * @function getTypeUrl
             * @memberof mediflow.v4.Overview
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Overview.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Overview";
            };

            return Overview;
        })();

        v4.ArchiveBundle = (function() {

            /**
             * Properties of an ArchiveBundle.
             * @typedef {Object} mediflow.v4.ArchiveBundle.$Properties
             * @property {Array.<mediflow.v4.Screen.$Properties>|null} [screens] ArchiveBundle screens
             * @property {Object.<string,mediflow.v4.Snapshot.$Properties>|null} [states] ArchiveBundle states
             * @property {Object.<string,mediflow.v4.Snapshot.$Properties>|null} [snapshotHistory] ArchiveBundle snapshotHistory
             * @property {Object.<string,mediflow.v4.Call.$Properties>|null} [calls] ArchiveBundle calls
             * @property {Object.<string,mediflow.v4.Consumption.$Properties>|null} [consumptions] ArchiveBundle consumptions
             * @property {Array.<mediflow.v4.Audit.$Properties>|null} [audit] ArchiveBundle audit
             * @property {Array.<mediflow.v4.Archive.$Properties>|null} [checkpoints] ArchiveBundle checkpoints
             * @property {string|null} [from] ArchiveBundle from
             * @property {string|null} [to] ArchiveBundle to
             * @property {string|null} [formatVersion] ArchiveBundle formatVersion
             * @property {Uint8Array|null} [epoch] ArchiveBundle epoch
             * @property {string|null} [exportedAt] ArchiveBundle exportedAt
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an ArchiveBundle.
             * @memberof mediflow.v4
             * @interface IArchiveBundle
             * @augments mediflow.v4.ArchiveBundle.$Properties
             * @deprecated Use mediflow.v4.ArchiveBundle.$Properties instead.
             */

            /**
             * Shape of an ArchiveBundle.
             * @typedef {mediflow.v4.ArchiveBundle.$Properties} mediflow.v4.ArchiveBundle.$Shape
             */

            /**
             * Constructs a new ArchiveBundle.
             * @memberof mediflow.v4
             * @classdesc Represents an ArchiveBundle.
             * @constructor
             * @param {mediflow.v4.ArchiveBundle.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const ArchiveBundle = function (properties) {
                this.screens = [];
                this.states = {};
                this.snapshotHistory = {};
                this.calls = {};
                this.consumptions = {};
                this.audit = [];
                this.checkpoints = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * ArchiveBundle screens.
             * @member {Array.<mediflow.v4.Screen.$Properties>} screens
             * @memberof mediflow.v4.ArchiveBundle
             * @instance
             */
            ArchiveBundle.prototype.screens = $util.emptyArray;

            /**
             * ArchiveBundle states.
             * @member {Object.<string,mediflow.v4.Snapshot.$Properties>} states
             * @memberof mediflow.v4.ArchiveBundle
             * @instance
             */
            ArchiveBundle.prototype.states = $util.emptyObject;

            /**
             * ArchiveBundle snapshotHistory.
             * @member {Object.<string,mediflow.v4.Snapshot.$Properties>} snapshotHistory
             * @memberof mediflow.v4.ArchiveBundle
             * @instance
             */
            ArchiveBundle.prototype.snapshotHistory = $util.emptyObject;

            /**
             * ArchiveBundle calls.
             * @member {Object.<string,mediflow.v4.Call.$Properties>} calls
             * @memberof mediflow.v4.ArchiveBundle
             * @instance
             */
            ArchiveBundle.prototype.calls = $util.emptyObject;

            /**
             * ArchiveBundle consumptions.
             * @member {Object.<string,mediflow.v4.Consumption.$Properties>} consumptions
             * @memberof mediflow.v4.ArchiveBundle
             * @instance
             */
            ArchiveBundle.prototype.consumptions = $util.emptyObject;

            /**
             * ArchiveBundle audit.
             * @member {Array.<mediflow.v4.Audit.$Properties>} audit
             * @memberof mediflow.v4.ArchiveBundle
             * @instance
             */
            ArchiveBundle.prototype.audit = $util.emptyArray;

            /**
             * ArchiveBundle checkpoints.
             * @member {Array.<mediflow.v4.Archive.$Properties>} checkpoints
             * @memberof mediflow.v4.ArchiveBundle
             * @instance
             */
            ArchiveBundle.prototype.checkpoints = $util.emptyArray;

            /**
             * ArchiveBundle from.
             * @member {string|null|undefined} from
             * @memberof mediflow.v4.ArchiveBundle
             * @instance
             */
            ArchiveBundle.prototype.from = null;

            /**
             * ArchiveBundle to.
             * @member {string|null|undefined} to
             * @memberof mediflow.v4.ArchiveBundle
             * @instance
             */
            ArchiveBundle.prototype.to = null;

            /**
             * ArchiveBundle formatVersion.
             * @member {string|null|undefined} formatVersion
             * @memberof mediflow.v4.ArchiveBundle
             * @instance
             */
            ArchiveBundle.prototype.formatVersion = null;

            /**
             * ArchiveBundle epoch.
             * @member {Uint8Array|null|undefined} epoch
             * @memberof mediflow.v4.ArchiveBundle
             * @instance
             */
            ArchiveBundle.prototype.epoch = null;

            /**
             * ArchiveBundle exportedAt.
             * @member {string|null|undefined} exportedAt
             * @memberof mediflow.v4.ArchiveBundle
             * @instance
             */
            ArchiveBundle.prototype.exportedAt = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ArchiveBundle.prototype, "_from", {
                get: $util.oneOfGetter($oneOfFields = ["from"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ArchiveBundle.prototype, "_to", {
                get: $util.oneOfGetter($oneOfFields = ["to"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ArchiveBundle.prototype, "_formatVersion", {
                get: $util.oneOfGetter($oneOfFields = ["formatVersion"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ArchiveBundle.prototype, "_epoch", {
                get: $util.oneOfGetter($oneOfFields = ["epoch"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ArchiveBundle.prototype, "_exportedAt", {
                get: $util.oneOfGetter($oneOfFields = ["exportedAt"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ArchiveBundle instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.ArchiveBundle
             * @static
             * @param {mediflow.v4.ArchiveBundle.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.ArchiveBundle} ArchiveBundle instance
             * @type {{
             *   (properties: mediflow.v4.ArchiveBundle.$Shape): mediflow.v4.ArchiveBundle & mediflow.v4.ArchiveBundle.$Shape;
             *   (properties?: mediflow.v4.ArchiveBundle.$Properties): mediflow.v4.ArchiveBundle;
             * }}
             */
            ArchiveBundle.create = function(properties) {
                return new ArchiveBundle(properties);
            };

            /**
             * Encodes the specified ArchiveBundle message. Does not implicitly {@link mediflow.v4.ArchiveBundle.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.ArchiveBundle
             * @static
             * @param {mediflow.v4.ArchiveBundle.$Properties} message ArchiveBundle message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ArchiveBundle.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.screens != null && message.screens.length)
                    for (let i = 0; i < message.screens.length; ++i)
                        $root.mediflow.v4.Screen.encode(message.screens[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.states != null && $Object.hasOwnProperty.call(message, "states"))
                    for (let keys = $Object.keys(message.states), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.mediflow.v4.Snapshot.encode(message.states[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim().ldelim();
                    }
                if (message.snapshotHistory != null && $Object.hasOwnProperty.call(message, "snapshotHistory"))
                    for (let keys = $Object.keys(message.snapshotHistory), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.mediflow.v4.Snapshot.encode(message.snapshotHistory[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim().ldelim();
                    }
                if (message.calls != null && $Object.hasOwnProperty.call(message, "calls"))
                    for (let keys = $Object.keys(message.calls), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.mediflow.v4.Call.encode(message.calls[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim().ldelim();
                    }
                if (message.consumptions != null && $Object.hasOwnProperty.call(message, "consumptions"))
                    for (let keys = $Object.keys(message.consumptions), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.mediflow.v4.Consumption.encode(message.consumptions[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim().ldelim();
                    }
                if (message.audit != null && message.audit.length)
                    for (let i = 0; i < message.audit.length; ++i)
                        $root.mediflow.v4.Audit.encode(message.audit[i], writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
                if (message.checkpoints != null && message.checkpoints.length)
                    for (let i = 0; i < message.checkpoints.length; ++i)
                        $root.mediflow.v4.Archive.encode(message.checkpoints[i], writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
                if (message.from != null && $Object.hasOwnProperty.call(message, "from"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.from);
                if (message.to != null && $Object.hasOwnProperty.call(message, "to"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.to);
                if (message.formatVersion != null && $Object.hasOwnProperty.call(message, "formatVersion"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.formatVersion);
                if (message.epoch != null && $Object.hasOwnProperty.call(message, "epoch"))
                    writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.epoch);
                if (message.exportedAt != null && $Object.hasOwnProperty.call(message, "exportedAt"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.exportedAt);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes an ArchiveBundle message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.ArchiveBundle
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.ArchiveBundle & mediflow.v4.ArchiveBundle.$Shape} ArchiveBundle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ArchiveBundle.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, key, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.ArchiveBundle();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.screens && message.screens.length))
                                message.screens = [];
                            message.screens.push($root.mediflow.v4.Screen.decode(reader, reader.size(), $undefined, _depth + 1));
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if (message.states === $util.emptyObject)
                                message.states = {};
                            let end2 = reader.size() + reader.pos;
                            if (end2 > reader.len)
                                throw $RangeError("index out of range");
                            reader.len = end2;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                let tag2 = reader.tag();
                                wireType = tag2 & 7;
                                switch (tag2 >>>= 3) {
                                case 1:
                                    if (wireType !== 2)
                                        break;
                                    key = reader.stringVerify();
                                    continue;
                                case 2:
                                    if (wireType !== 2)
                                        break;
                                    value = $root.mediflow.v4.Snapshot.decode(reader, reader.size(), $undefined, _depth + 1, value);
                                    continue;
                                }
                                reader.skipType(wireType, _depth, tag2);
                            }
                            if (reader.pos !== end2)
                                throw $RangeError("index out of range");
                            reader.len = end;
                            if (key === "__proto__")
                                $util.makeProp(message.states, key);
                            message.states[key] = value || new $root.mediflow.v4.Snapshot();
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if (message.snapshotHistory === $util.emptyObject)
                                message.snapshotHistory = {};
                            let end2 = reader.size() + reader.pos;
                            if (end2 > reader.len)
                                throw $RangeError("index out of range");
                            reader.len = end2;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                let tag2 = reader.tag();
                                wireType = tag2 & 7;
                                switch (tag2 >>>= 3) {
                                case 1:
                                    if (wireType !== 2)
                                        break;
                                    key = reader.stringVerify();
                                    continue;
                                case 2:
                                    if (wireType !== 2)
                                        break;
                                    value = $root.mediflow.v4.Snapshot.decode(reader, reader.size(), $undefined, _depth + 1, value);
                                    continue;
                                }
                                reader.skipType(wireType, _depth, tag2);
                            }
                            if (reader.pos !== end2)
                                throw $RangeError("index out of range");
                            reader.len = end;
                            if (key === "__proto__")
                                $util.makeProp(message.snapshotHistory, key);
                            message.snapshotHistory[key] = value || new $root.mediflow.v4.Snapshot();
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            if (message.calls === $util.emptyObject)
                                message.calls = {};
                            let end2 = reader.size() + reader.pos;
                            if (end2 > reader.len)
                                throw $RangeError("index out of range");
                            reader.len = end2;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                let tag2 = reader.tag();
                                wireType = tag2 & 7;
                                switch (tag2 >>>= 3) {
                                case 1:
                                    if (wireType !== 2)
                                        break;
                                    key = reader.stringVerify();
                                    continue;
                                case 2:
                                    if (wireType !== 2)
                                        break;
                                    value = $root.mediflow.v4.Call.decode(reader, reader.size(), $undefined, _depth + 1, value);
                                    continue;
                                }
                                reader.skipType(wireType, _depth, tag2);
                            }
                            if (reader.pos !== end2)
                                throw $RangeError("index out of range");
                            reader.len = end;
                            if (key === "__proto__")
                                $util.makeProp(message.calls, key);
                            message.calls[key] = value || new $root.mediflow.v4.Call();
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            if (message.consumptions === $util.emptyObject)
                                message.consumptions = {};
                            let end2 = reader.size() + reader.pos;
                            if (end2 > reader.len)
                                throw $RangeError("index out of range");
                            reader.len = end2;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                let tag2 = reader.tag();
                                wireType = tag2 & 7;
                                switch (tag2 >>>= 3) {
                                case 1:
                                    if (wireType !== 2)
                                        break;
                                    key = reader.stringVerify();
                                    continue;
                                case 2:
                                    if (wireType !== 2)
                                        break;
                                    value = $root.mediflow.v4.Consumption.decode(reader, reader.size(), $undefined, _depth + 1, value);
                                    continue;
                                }
                                reader.skipType(wireType, _depth, tag2);
                            }
                            if (reader.pos !== end2)
                                throw $RangeError("index out of range");
                            reader.len = end;
                            if (key === "__proto__")
                                $util.makeProp(message.consumptions, key);
                            message.consumptions[key] = value || new $root.mediflow.v4.Consumption();
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            if (!(message.audit && message.audit.length))
                                message.audit = [];
                            message.audit.push($root.mediflow.v4.Audit.decode(reader, reader.size(), $undefined, _depth + 1));
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            if (!(message.checkpoints && message.checkpoints.length))
                                message.checkpoints = [];
                            message.checkpoints.push($root.mediflow.v4.Archive.decode(reader, reader.size(), $undefined, _depth + 1));
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            message.from = reader.stringVerify();
                            message._from = "from";
                            continue;
                        }
                    case 9: {
                            if (wireType !== 2)
                                break;
                            message.to = reader.stringVerify();
                            message._to = "to";
                            continue;
                        }
                    case 10: {
                            if (wireType !== 2)
                                break;
                            message.formatVersion = reader.stringVerify();
                            message._formatVersion = "formatVersion";
                            continue;
                        }
                    case 11: {
                            if (wireType !== 2)
                                break;
                            message.epoch = reader.bytes();
                            message._epoch = "epoch";
                            continue;
                        }
                    case 12: {
                            if (wireType !== 2)
                                break;
                            message.exportedAt = reader.stringVerify();
                            message._exportedAt = "exportedAt";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies an ArchiveBundle message.
             * @function verify
             * @memberof mediflow.v4.ArchiveBundle
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ArchiveBundle.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.screens != null && $Object.hasOwnProperty.call(message, "screens")) {
                    if (!$Array.isArray(message.screens))
                        return "screens: array expected";
                    for (let i = 0; i < message.screens.length; ++i) {
                        let error = $root.mediflow.v4.Screen.verify(message.screens[i], _depth + 1);
                        if (error)
                            return "screens." + error;
                    }
                }
                if (message.states != null && $Object.hasOwnProperty.call(message, "states")) {
                    if (!$util.isObject(message.states))
                        return "states: object expected";
                    let key = $Object.keys(message.states);
                    for (let i = 0; i < key.length; ++i) {
                        let error = $root.mediflow.v4.Snapshot.verify(message.states[key[i]], _depth + 1);
                        if (error)
                            return "states." + error;
                    }
                }
                if (message.snapshotHistory != null && $Object.hasOwnProperty.call(message, "snapshotHistory")) {
                    if (!$util.isObject(message.snapshotHistory))
                        return "snapshotHistory: object expected";
                    let key = $Object.keys(message.snapshotHistory);
                    for (let i = 0; i < key.length; ++i) {
                        let error = $root.mediflow.v4.Snapshot.verify(message.snapshotHistory[key[i]], _depth + 1);
                        if (error)
                            return "snapshotHistory." + error;
                    }
                }
                if (message.calls != null && $Object.hasOwnProperty.call(message, "calls")) {
                    if (!$util.isObject(message.calls))
                        return "calls: object expected";
                    let key = $Object.keys(message.calls);
                    for (let i = 0; i < key.length; ++i) {
                        let error = $root.mediflow.v4.Call.verify(message.calls[key[i]], _depth + 1);
                        if (error)
                            return "calls." + error;
                    }
                }
                if (message.consumptions != null && $Object.hasOwnProperty.call(message, "consumptions")) {
                    if (!$util.isObject(message.consumptions))
                        return "consumptions: object expected";
                    let key = $Object.keys(message.consumptions);
                    for (let i = 0; i < key.length; ++i) {
                        let error = $root.mediflow.v4.Consumption.verify(message.consumptions[key[i]], _depth + 1);
                        if (error)
                            return "consumptions." + error;
                    }
                }
                if (message.audit != null && $Object.hasOwnProperty.call(message, "audit")) {
                    if (!$Array.isArray(message.audit))
                        return "audit: array expected";
                    for (let i = 0; i < message.audit.length; ++i) {
                        let error = $root.mediflow.v4.Audit.verify(message.audit[i], _depth + 1);
                        if (error)
                            return "audit." + error;
                    }
                }
                if (message.checkpoints != null && $Object.hasOwnProperty.call(message, "checkpoints")) {
                    if (!$Array.isArray(message.checkpoints))
                        return "checkpoints: array expected";
                    for (let i = 0; i < message.checkpoints.length; ++i) {
                        let error = $root.mediflow.v4.Archive.verify(message.checkpoints[i], _depth + 1);
                        if (error)
                            return "checkpoints." + error;
                    }
                }
                if (message.from != null && $Object.hasOwnProperty.call(message, "from")) {
                    properties._from = 1;
                    if (!$util.isString(message.from))
                        return "from: string expected";
                }
                if (message.to != null && $Object.hasOwnProperty.call(message, "to")) {
                    properties._to = 1;
                    if (!$util.isString(message.to))
                        return "to: string expected";
                }
                if (message.formatVersion != null && $Object.hasOwnProperty.call(message, "formatVersion")) {
                    properties._formatVersion = 1;
                    if (!$util.isString(message.formatVersion))
                        return "formatVersion: string expected";
                }
                if (message.epoch != null && $Object.hasOwnProperty.call(message, "epoch")) {
                    properties._epoch = 1;
                    if (!(message.epoch && typeof message.epoch.length === "number" || $util.isString(message.epoch)))
                        return "epoch: buffer expected";
                }
                if (message.exportedAt != null && $Object.hasOwnProperty.call(message, "exportedAt")) {
                    properties._exportedAt = 1;
                    if (!$util.isString(message.exportedAt))
                        return "exportedAt: string expected";
                }
                return null;
            };

            /**
             * Creates an ArchiveBundle message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.ArchiveBundle
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.ArchiveBundle} ArchiveBundle
             */
            ArchiveBundle.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.ArchiveBundle)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.ArchiveBundle: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.ArchiveBundle();
                if (object.screens) {
                    if (!$Array.isArray(object.screens))
                        throw $TypeError(".mediflow.v4.ArchiveBundle.screens: array expected");
                    message.screens = $Array(object.screens.length);
                    for (let i = 0; i < object.screens.length; ++i) {
                        if (!$util.isObject(object.screens[i]))
                            throw $TypeError(".mediflow.v4.ArchiveBundle.screens: object expected");
                        message.screens[i] = $root.mediflow.v4.Screen.fromObject(object.screens[i], _depth + 1);
                    }
                }
                if (object.states) {
                    if (!$util.isObject(object.states))
                        throw $TypeError(".mediflow.v4.ArchiveBundle.states: object expected");
                    message.states = {};
                    for (let keys = $Object.keys(object.states), i = 0; i < keys.length; ++i) {
                        if (keys[i] === "__proto__")
                            $util.makeProp(message.states, keys[i]);
                        if (!$util.isObject(object.states[keys[i]]))
                            throw $TypeError(".mediflow.v4.ArchiveBundle.states: object expected");
                        message.states[keys[i]] = $root.mediflow.v4.Snapshot.fromObject(object.states[keys[i]], _depth + 1);
                    }
                }
                if (object.snapshotHistory) {
                    if (!$util.isObject(object.snapshotHistory))
                        throw $TypeError(".mediflow.v4.ArchiveBundle.snapshotHistory: object expected");
                    message.snapshotHistory = {};
                    for (let keys = $Object.keys(object.snapshotHistory), i = 0; i < keys.length; ++i) {
                        if (keys[i] === "__proto__")
                            $util.makeProp(message.snapshotHistory, keys[i]);
                        if (!$util.isObject(object.snapshotHistory[keys[i]]))
                            throw $TypeError(".mediflow.v4.ArchiveBundle.snapshotHistory: object expected");
                        message.snapshotHistory[keys[i]] = $root.mediflow.v4.Snapshot.fromObject(object.snapshotHistory[keys[i]], _depth + 1);
                    }
                }
                if (object.calls) {
                    if (!$util.isObject(object.calls))
                        throw $TypeError(".mediflow.v4.ArchiveBundle.calls: object expected");
                    message.calls = {};
                    for (let keys = $Object.keys(object.calls), i = 0; i < keys.length; ++i) {
                        if (keys[i] === "__proto__")
                            $util.makeProp(message.calls, keys[i]);
                        if (!$util.isObject(object.calls[keys[i]]))
                            throw $TypeError(".mediflow.v4.ArchiveBundle.calls: object expected");
                        message.calls[keys[i]] = $root.mediflow.v4.Call.fromObject(object.calls[keys[i]], _depth + 1);
                    }
                }
                if (object.consumptions) {
                    if (!$util.isObject(object.consumptions))
                        throw $TypeError(".mediflow.v4.ArchiveBundle.consumptions: object expected");
                    message.consumptions = {};
                    for (let keys = $Object.keys(object.consumptions), i = 0; i < keys.length; ++i) {
                        if (keys[i] === "__proto__")
                            $util.makeProp(message.consumptions, keys[i]);
                        if (!$util.isObject(object.consumptions[keys[i]]))
                            throw $TypeError(".mediflow.v4.ArchiveBundle.consumptions: object expected");
                        message.consumptions[keys[i]] = $root.mediflow.v4.Consumption.fromObject(object.consumptions[keys[i]], _depth + 1);
                    }
                }
                if (object.audit) {
                    if (!$Array.isArray(object.audit))
                        throw $TypeError(".mediflow.v4.ArchiveBundle.audit: array expected");
                    message.audit = $Array(object.audit.length);
                    for (let i = 0; i < object.audit.length; ++i) {
                        if (!$util.isObject(object.audit[i]))
                            throw $TypeError(".mediflow.v4.ArchiveBundle.audit: object expected");
                        message.audit[i] = $root.mediflow.v4.Audit.fromObject(object.audit[i], _depth + 1);
                    }
                }
                if (object.checkpoints) {
                    if (!$Array.isArray(object.checkpoints))
                        throw $TypeError(".mediflow.v4.ArchiveBundle.checkpoints: array expected");
                    message.checkpoints = $Array(object.checkpoints.length);
                    for (let i = 0; i < object.checkpoints.length; ++i) {
                        if (!$util.isObject(object.checkpoints[i]))
                            throw $TypeError(".mediflow.v4.ArchiveBundle.checkpoints: object expected");
                        message.checkpoints[i] = $root.mediflow.v4.Archive.fromObject(object.checkpoints[i], _depth + 1);
                    }
                }
                if (object.from != null)
                    message.from = $String(object.from);
                if (object.to != null)
                    message.to = $String(object.to);
                if (object.formatVersion != null)
                    message.formatVersion = $String(object.formatVersion);
                if (object.epoch != null)
                    if (typeof object.epoch === "string")
                        $util.base64.decode(object.epoch, message.epoch = $util.newBuffer($util.base64.length(object.epoch)), 0);
                    else if (object.epoch.length >= 0)
                        message.epoch = object.epoch;
                if (object.exportedAt != null)
                    message.exportedAt = $String(object.exportedAt);
                return message;
            };

            /**
             * Creates a plain object from an ArchiveBundle message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.ArchiveBundle
             * @static
             * @param {mediflow.v4.ArchiveBundle} message ArchiveBundle
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ArchiveBundle.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults) {
                    object.screens = [];
                    object.audit = [];
                    object.checkpoints = [];
                }
                if (options.objects || options.defaults) {
                    object.states = {};
                    object.snapshotHistory = {};
                    object.calls = {};
                    object.consumptions = {};
                }
                if (message.screens && message.screens.length) {
                    object.screens = $Array(message.screens.length);
                    for (let j = 0; j < message.screens.length; ++j)
                        object.screens[j] = $root.mediflow.v4.Screen.toObject(message.screens[j], options, _depth + 1);
                }
                let keys2;
                if (message.states && (keys2 = $Object.keys(message.states)).length) {
                    object.states = {};
                    for (let j = 0; j < keys2.length; ++j) {
                        if (keys2[j] === "__proto__")
                            $util.makeProp(object.states, keys2[j]);
                        object.states[keys2[j]] = $root.mediflow.v4.Snapshot.toObject(message.states[keys2[j]], options, _depth + 1);
                    }
                }
                if (message.snapshotHistory && (keys2 = $Object.keys(message.snapshotHistory)).length) {
                    object.snapshotHistory = {};
                    for (let j = 0; j < keys2.length; ++j) {
                        if (keys2[j] === "__proto__")
                            $util.makeProp(object.snapshotHistory, keys2[j]);
                        object.snapshotHistory[keys2[j]] = $root.mediflow.v4.Snapshot.toObject(message.snapshotHistory[keys2[j]], options, _depth + 1);
                    }
                }
                if (message.calls && (keys2 = $Object.keys(message.calls)).length) {
                    object.calls = {};
                    for (let j = 0; j < keys2.length; ++j) {
                        if (keys2[j] === "__proto__")
                            $util.makeProp(object.calls, keys2[j]);
                        object.calls[keys2[j]] = $root.mediflow.v4.Call.toObject(message.calls[keys2[j]], options, _depth + 1);
                    }
                }
                if (message.consumptions && (keys2 = $Object.keys(message.consumptions)).length) {
                    object.consumptions = {};
                    for (let j = 0; j < keys2.length; ++j) {
                        if (keys2[j] === "__proto__")
                            $util.makeProp(object.consumptions, keys2[j]);
                        object.consumptions[keys2[j]] = $root.mediflow.v4.Consumption.toObject(message.consumptions[keys2[j]], options, _depth + 1);
                    }
                }
                if (message.audit && message.audit.length) {
                    object.audit = $Array(message.audit.length);
                    for (let j = 0; j < message.audit.length; ++j)
                        object.audit[j] = $root.mediflow.v4.Audit.toObject(message.audit[j], options, _depth + 1);
                }
                if (message.checkpoints && message.checkpoints.length) {
                    object.checkpoints = $Array(message.checkpoints.length);
                    for (let j = 0; j < message.checkpoints.length; ++j)
                        object.checkpoints[j] = $root.mediflow.v4.Archive.toObject(message.checkpoints[j], options, _depth + 1);
                }
                if (message.from != null && $Object.hasOwnProperty.call(message, "from"))
                    object.from = message.from;
                if (message.to != null && $Object.hasOwnProperty.call(message, "to"))
                    object.to = message.to;
                if (message.formatVersion != null && $Object.hasOwnProperty.call(message, "formatVersion"))
                    object.formatVersion = message.formatVersion;
                if (message.epoch != null && $Object.hasOwnProperty.call(message, "epoch"))
                    object.epoch = options.bytes === $String ? $util.base64.encode(message.epoch, 0, message.epoch.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.epoch) : message.epoch;
                if (message.exportedAt != null && $Object.hasOwnProperty.call(message, "exportedAt"))
                    object.exportedAt = message.exportedAt;
                return object;
            };

            /**
             * Converts this ArchiveBundle to JSON.
             * @function toJSON
             * @memberof mediflow.v4.ArchiveBundle
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ArchiveBundle.prototype.toJSON = function() {
                return ArchiveBundle.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ArchiveBundle
             * @function getTypeUrl
             * @memberof mediflow.v4.ArchiveBundle
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ArchiveBundle.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.ArchiveBundle";
            };

            return ArchiveBundle;
        })();

        v4.Login = (function() {

            /**
             * Properties of a Login.
             * @typedef {Object} mediflow.v4.Login.$Properties
             * @property {string|null} [username] Login username
             * @property {string|null} [password] Login password
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Login.
             * @memberof mediflow.v4
             * @interface ILogin
             * @augments mediflow.v4.Login.$Properties
             * @deprecated Use mediflow.v4.Login.$Properties instead.
             */

            /**
             * Shape of a Login.
             * @typedef {mediflow.v4.Login.$Properties} mediflow.v4.Login.$Shape
             */

            /**
             * Constructs a new Login.
             * @memberof mediflow.v4
             * @classdesc Represents a Login.
             * @constructor
             * @param {mediflow.v4.Login.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Login = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Login username.
             * @member {string|null|undefined} username
             * @memberof mediflow.v4.Login
             * @instance
             */
            Login.prototype.username = null;

            /**
             * Login password.
             * @member {string|null|undefined} password
             * @memberof mediflow.v4.Login
             * @instance
             */
            Login.prototype.password = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Login.prototype, "_username", {
                get: $util.oneOfGetter($oneOfFields = ["username"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Login.prototype, "_password", {
                get: $util.oneOfGetter($oneOfFields = ["password"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Login instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Login
             * @static
             * @param {mediflow.v4.Login.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Login} Login instance
             * @type {{
             *   (properties: mediflow.v4.Login.$Shape): mediflow.v4.Login & mediflow.v4.Login.$Shape;
             *   (properties?: mediflow.v4.Login.$Properties): mediflow.v4.Login;
             * }}
             */
            Login.create = function(properties) {
                return new Login(properties);
            };

            /**
             * Encodes the specified Login message. Does not implicitly {@link mediflow.v4.Login.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Login
             * @static
             * @param {mediflow.v4.Login.$Properties} message Login message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Login.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                if (message.password != null && $Object.hasOwnProperty.call(message, "password"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Login message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Login
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Login & mediflow.v4.Login.$Shape} Login
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Login.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Login();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.username = reader.stringVerify();
                            message._username = "username";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.password = reader.stringVerify();
                            message._password = "password";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Login message.
             * @function verify
             * @memberof mediflow.v4.Login
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Login.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.username != null && $Object.hasOwnProperty.call(message, "username")) {
                    properties._username = 1;
                    if (!$util.isString(message.username))
                        return "username: string expected";
                }
                if (message.password != null && $Object.hasOwnProperty.call(message, "password")) {
                    properties._password = 1;
                    if (!$util.isString(message.password))
                        return "password: string expected";
                }
                return null;
            };

            /**
             * Creates a Login message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Login
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Login} Login
             */
            Login.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Login)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Login: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Login();
                if (object.username != null)
                    message.username = $String(object.username);
                if (object.password != null)
                    message.password = $String(object.password);
                return message;
            };

            /**
             * Creates a plain object from a Login message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Login
             * @static
             * @param {mediflow.v4.Login} message Login
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Login.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                    object.username = message.username;
                if (message.password != null && $Object.hasOwnProperty.call(message, "password"))
                    object.password = message.password;
                return object;
            };

            /**
             * Converts this Login to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Login
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Login.prototype.toJSON = function() {
                return Login.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Login
             * @function getTypeUrl
             * @memberof mediflow.v4.Login
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Login.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Login";
            };

            return Login;
        })();

        v4.User = (function() {

            /**
             * Properties of a User.
             * @typedef {Object} mediflow.v4.User.$Properties
             * @property {string|null} [username] User username
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a User.
             * @memberof mediflow.v4
             * @interface IUser
             * @augments mediflow.v4.User.$Properties
             * @deprecated Use mediflow.v4.User.$Properties instead.
             */

            /**
             * Shape of a User.
             * @typedef {mediflow.v4.User.$Properties} mediflow.v4.User.$Shape
             */

            /**
             * Constructs a new User.
             * @memberof mediflow.v4
             * @classdesc Represents a User.
             * @constructor
             * @param {mediflow.v4.User.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const User = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * User username.
             * @member {string|null|undefined} username
             * @memberof mediflow.v4.User
             * @instance
             */
            User.prototype.username = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(User.prototype, "_username", {
                get: $util.oneOfGetter($oneOfFields = ["username"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new User instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.User
             * @static
             * @param {mediflow.v4.User.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.User} User instance
             * @type {{
             *   (properties: mediflow.v4.User.$Shape): mediflow.v4.User & mediflow.v4.User.$Shape;
             *   (properties?: mediflow.v4.User.$Properties): mediflow.v4.User;
             * }}
             */
            User.create = function(properties) {
                return new User(properties);
            };

            /**
             * Encodes the specified User message. Does not implicitly {@link mediflow.v4.User.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.User
             * @static
             * @param {mediflow.v4.User.$Properties} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a User message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.User & mediflow.v4.User.$Shape} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.User();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.username = reader.stringVerify();
                            message._username = "username";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a User message.
             * @function verify
             * @memberof mediflow.v4.User
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            User.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.username != null && $Object.hasOwnProperty.call(message, "username")) {
                    properties._username = 1;
                    if (!$util.isString(message.username))
                        return "username: string expected";
                }
                return null;
            };

            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.User
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.User} User
             */
            User.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.User)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.User: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.User();
                if (object.username != null)
                    message.username = $String(object.username);
                return message;
            };

            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.User
             * @static
             * @param {mediflow.v4.User} message User
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            User.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                    object.username = message.username;
                return object;
            };

            /**
             * Converts this User to JSON.
             * @function toJSON
             * @memberof mediflow.v4.User
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            User.prototype.toJSON = function() {
                return User.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for User
             * @function getTypeUrl
             * @memberof mediflow.v4.User
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            User.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.User";
            };

            return User;
        })();

        v4.Publish = (function() {

            /**
             * Properties of a Publish.
             * @typedef {Object} mediflow.v4.Publish.$Properties
             * @property {Uint8Array|null} [requestId] Publish requestId
             * @property {mediflow.v4.Template.$Properties|null} [data] Publish data
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Publish.
             * @memberof mediflow.v4
             * @interface IPublish
             * @augments mediflow.v4.Publish.$Properties
             * @deprecated Use mediflow.v4.Publish.$Properties instead.
             */

            /**
             * Shape of a Publish.
             * @typedef {mediflow.v4.Publish.$Properties} mediflow.v4.Publish.$Shape
             */

            /**
             * Constructs a new Publish.
             * @memberof mediflow.v4
             * @classdesc Represents a Publish.
             * @constructor
             * @param {mediflow.v4.Publish.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Publish = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Publish requestId.
             * @member {Uint8Array|null|undefined} requestId
             * @memberof mediflow.v4.Publish
             * @instance
             */
            Publish.prototype.requestId = null;

            /**
             * Publish data.
             * @member {mediflow.v4.Template.$Properties|null|undefined} data
             * @memberof mediflow.v4.Publish
             * @instance
             */
            Publish.prototype.data = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Publish.prototype, "_requestId", {
                get: $util.oneOfGetter($oneOfFields = ["requestId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Publish instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Publish
             * @static
             * @param {mediflow.v4.Publish.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Publish} Publish instance
             * @type {{
             *   (properties: mediflow.v4.Publish.$Shape): mediflow.v4.Publish & mediflow.v4.Publish.$Shape;
             *   (properties?: mediflow.v4.Publish.$Properties): mediflow.v4.Publish;
             * }}
             */
            Publish.create = function(properties) {
                return new Publish(properties);
            };

            /**
             * Encodes the specified Publish message. Does not implicitly {@link mediflow.v4.Publish.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Publish
             * @static
             * @param {mediflow.v4.Publish.$Properties} message Publish message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Publish.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.requestId);
                if (message.data != null && $Object.hasOwnProperty.call(message, "data"))
                    $root.mediflow.v4.Template.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Publish message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Publish
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Publish & mediflow.v4.Publish.$Shape} Publish
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Publish.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Publish();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.requestId = reader.bytes();
                            message._requestId = "requestId";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.data = $root.mediflow.v4.Template.decode(reader, reader.size(), $undefined, _depth + 1, message.data);
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Publish message.
             * @function verify
             * @memberof mediflow.v4.Publish
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Publish.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId")) {
                    properties._requestId = 1;
                    if (!(message.requestId && typeof message.requestId.length === "number" || $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                }
                if (message.data != null && $Object.hasOwnProperty.call(message, "data")) {
                    let error = $root.mediflow.v4.Template.verify(message.data, _depth + 1);
                    if (error)
                        return "data." + error;
                }
                return null;
            };

            /**
             * Creates a Publish message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Publish
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Publish} Publish
             */
            Publish.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Publish)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Publish: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Publish();
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, message.requestId = $util.newBuffer($util.base64.length(object.requestId)), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.data != null) {
                    if (!$util.isObject(object.data))
                        throw $TypeError(".mediflow.v4.Publish.data: object expected");
                    message.data = $root.mediflow.v4.Template.fromObject(object.data, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a Publish message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Publish
             * @static
             * @param {mediflow.v4.Publish} message Publish
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Publish.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    object.data = null;
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                    object.requestId = options.bytes === $String ? $util.base64.encode(message.requestId, 0, message.requestId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.requestId) : message.requestId;
                if (message.data != null && $Object.hasOwnProperty.call(message, "data"))
                    object.data = $root.mediflow.v4.Template.toObject(message.data, options, _depth + 1);
                return object;
            };

            /**
             * Converts this Publish to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Publish
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Publish.prototype.toJSON = function() {
                return Publish.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Publish
             * @function getTypeUrl
             * @memberof mediflow.v4.Publish
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Publish.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Publish";
            };

            return Publish;
        })();

        v4.Consume = (function() {

            /**
             * Properties of a Consume.
             * @typedef {Object} mediflow.v4.Consume.$Properties
             * @property {Uint8Array|null} [requestId] Consume requestId
             * @property {Uint8Array|null} [callId] Consume callId
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Consume.
             * @memberof mediflow.v4
             * @interface IConsume
             * @augments mediflow.v4.Consume.$Properties
             * @deprecated Use mediflow.v4.Consume.$Properties instead.
             */

            /**
             * Shape of a Consume.
             * @typedef {mediflow.v4.Consume.$Properties} mediflow.v4.Consume.$Shape
             */

            /**
             * Constructs a new Consume.
             * @memberof mediflow.v4
             * @classdesc Represents a Consume.
             * @constructor
             * @param {mediflow.v4.Consume.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Consume = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Consume requestId.
             * @member {Uint8Array|null|undefined} requestId
             * @memberof mediflow.v4.Consume
             * @instance
             */
            Consume.prototype.requestId = null;

            /**
             * Consume callId.
             * @member {Uint8Array|null|undefined} callId
             * @memberof mediflow.v4.Consume
             * @instance
             */
            Consume.prototype.callId = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Consume.prototype, "_requestId", {
                get: $util.oneOfGetter($oneOfFields = ["requestId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Consume.prototype, "_callId", {
                get: $util.oneOfGetter($oneOfFields = ["callId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Consume instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Consume
             * @static
             * @param {mediflow.v4.Consume.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Consume} Consume instance
             * @type {{
             *   (properties: mediflow.v4.Consume.$Shape): mediflow.v4.Consume & mediflow.v4.Consume.$Shape;
             *   (properties?: mediflow.v4.Consume.$Properties): mediflow.v4.Consume;
             * }}
             */
            Consume.create = function(properties) {
                return new Consume(properties);
            };

            /**
             * Encodes the specified Consume message. Does not implicitly {@link mediflow.v4.Consume.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Consume
             * @static
             * @param {mediflow.v4.Consume.$Properties} message Consume message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Consume.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.requestId);
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.callId);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Consume message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Consume
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Consume & mediflow.v4.Consume.$Shape} Consume
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Consume.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Consume();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.requestId = reader.bytes();
                            message._requestId = "requestId";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.callId = reader.bytes();
                            message._callId = "callId";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Consume message.
             * @function verify
             * @memberof mediflow.v4.Consume
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Consume.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId")) {
                    properties._requestId = 1;
                    if (!(message.requestId && typeof message.requestId.length === "number" || $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                }
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId")) {
                    properties._callId = 1;
                    if (!(message.callId && typeof message.callId.length === "number" || $util.isString(message.callId)))
                        return "callId: buffer expected";
                }
                return null;
            };

            /**
             * Creates a Consume message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Consume
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Consume} Consume
             */
            Consume.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Consume)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Consume: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Consume();
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, message.requestId = $util.newBuffer($util.base64.length(object.requestId)), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.callId != null)
                    if (typeof object.callId === "string")
                        $util.base64.decode(object.callId, message.callId = $util.newBuffer($util.base64.length(object.callId)), 0);
                    else if (object.callId.length >= 0)
                        message.callId = object.callId;
                return message;
            };

            /**
             * Creates a plain object from a Consume message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Consume
             * @static
             * @param {mediflow.v4.Consume} message Consume
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Consume.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                    object.requestId = options.bytes === $String ? $util.base64.encode(message.requestId, 0, message.requestId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.requestId) : message.requestId;
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId"))
                    object.callId = options.bytes === $String ? $util.base64.encode(message.callId, 0, message.callId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.callId) : message.callId;
                return object;
            };

            /**
             * Converts this Consume to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Consume
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Consume.prototype.toJSON = function() {
                return Consume.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Consume
             * @function getTypeUrl
             * @memberof mediflow.v4.Consume
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Consume.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Consume";
            };

            return Consume;
        })();

        v4.Playback = (function() {

            /**
             * Properties of a Playback.
             * @typedef {Object} mediflow.v4.Playback.$Properties
             * @property {Uint8Array|null} [eventId] Playback eventId
             * @property {Uint8Array|null} [requestId] Playback requestId
             * @property {Uint8Array|null} [callId] Playback callId
             * @property {string|null} [status] Playback status
             * @property {string|null} [error] Playback error
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Playback.
             * @memberof mediflow.v4
             * @interface IPlayback
             * @augments mediflow.v4.Playback.$Properties
             * @deprecated Use mediflow.v4.Playback.$Properties instead.
             */

            /**
             * Shape of a Playback.
             * @typedef {mediflow.v4.Playback.$Properties} mediflow.v4.Playback.$Shape
             */

            /**
             * Constructs a new Playback.
             * @memberof mediflow.v4
             * @classdesc Represents a Playback.
             * @constructor
             * @param {mediflow.v4.Playback.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Playback = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Playback eventId.
             * @member {Uint8Array|null|undefined} eventId
             * @memberof mediflow.v4.Playback
             * @instance
             */
            Playback.prototype.eventId = null;

            /**
             * Playback requestId.
             * @member {Uint8Array|null|undefined} requestId
             * @memberof mediflow.v4.Playback
             * @instance
             */
            Playback.prototype.requestId = null;

            /**
             * Playback callId.
             * @member {Uint8Array|null|undefined} callId
             * @memberof mediflow.v4.Playback
             * @instance
             */
            Playback.prototype.callId = null;

            /**
             * Playback status.
             * @member {string|null|undefined} status
             * @memberof mediflow.v4.Playback
             * @instance
             */
            Playback.prototype.status = null;

            /**
             * Playback error.
             * @member {string|null|undefined} error
             * @memberof mediflow.v4.Playback
             * @instance
             */
            Playback.prototype.error = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Playback.prototype, "_eventId", {
                get: $util.oneOfGetter($oneOfFields = ["eventId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Playback.prototype, "_requestId", {
                get: $util.oneOfGetter($oneOfFields = ["requestId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Playback.prototype, "_callId", {
                get: $util.oneOfGetter($oneOfFields = ["callId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Playback.prototype, "_status", {
                get: $util.oneOfGetter($oneOfFields = ["status"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Playback.prototype, "_error", {
                get: $util.oneOfGetter($oneOfFields = ["error"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Playback instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Playback
             * @static
             * @param {mediflow.v4.Playback.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Playback} Playback instance
             * @type {{
             *   (properties: mediflow.v4.Playback.$Shape): mediflow.v4.Playback & mediflow.v4.Playback.$Shape;
             *   (properties?: mediflow.v4.Playback.$Properties): mediflow.v4.Playback;
             * }}
             */
            Playback.create = function(properties) {
                return new Playback(properties);
            };

            /**
             * Encodes the specified Playback message. Does not implicitly {@link mediflow.v4.Playback.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Playback
             * @static
             * @param {mediflow.v4.Playback.$Properties} message Playback message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Playback.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.eventId != null && $Object.hasOwnProperty.call(message, "eventId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.eventId);
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.requestId);
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.callId);
                if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.status);
                if (message.error != null && $Object.hasOwnProperty.call(message, "error"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.error);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Playback message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Playback
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Playback & mediflow.v4.Playback.$Shape} Playback
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Playback.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Playback();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.eventId = reader.bytes();
                            message._eventId = "eventId";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.requestId = reader.bytes();
                            message._requestId = "requestId";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.callId = reader.bytes();
                            message._callId = "callId";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.status = reader.stringVerify();
                            message._status = "status";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.error = reader.stringVerify();
                            message._error = "error";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Playback message.
             * @function verify
             * @memberof mediflow.v4.Playback
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Playback.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.eventId != null && $Object.hasOwnProperty.call(message, "eventId")) {
                    properties._eventId = 1;
                    if (!(message.eventId && typeof message.eventId.length === "number" || $util.isString(message.eventId)))
                        return "eventId: buffer expected";
                }
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId")) {
                    properties._requestId = 1;
                    if (!(message.requestId && typeof message.requestId.length === "number" || $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                }
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId")) {
                    properties._callId = 1;
                    if (!(message.callId && typeof message.callId.length === "number" || $util.isString(message.callId)))
                        return "callId: buffer expected";
                }
                if (message.status != null && $Object.hasOwnProperty.call(message, "status")) {
                    properties._status = 1;
                    if (!$util.isString(message.status))
                        return "status: string expected";
                }
                if (message.error != null && $Object.hasOwnProperty.call(message, "error")) {
                    properties._error = 1;
                    if (!$util.isString(message.error))
                        return "error: string expected";
                }
                return null;
            };

            /**
             * Creates a Playback message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Playback
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Playback} Playback
             */
            Playback.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Playback)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Playback: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Playback();
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, message.eventId = $util.newBuffer($util.base64.length(object.eventId)), 0);
                    else if (object.eventId.length >= 0)
                        message.eventId = object.eventId;
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, message.requestId = $util.newBuffer($util.base64.length(object.requestId)), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.callId != null)
                    if (typeof object.callId === "string")
                        $util.base64.decode(object.callId, message.callId = $util.newBuffer($util.base64.length(object.callId)), 0);
                    else if (object.callId.length >= 0)
                        message.callId = object.callId;
                if (object.status != null)
                    message.status = $String(object.status);
                if (object.error != null)
                    message.error = $String(object.error);
                return message;
            };

            /**
             * Creates a plain object from a Playback message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Playback
             * @static
             * @param {mediflow.v4.Playback} message Playback
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Playback.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.eventId != null && $Object.hasOwnProperty.call(message, "eventId"))
                    object.eventId = options.bytes === $String ? $util.base64.encode(message.eventId, 0, message.eventId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.eventId) : message.eventId;
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                    object.requestId = options.bytes === $String ? $util.base64.encode(message.requestId, 0, message.requestId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.requestId) : message.requestId;
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId"))
                    object.callId = options.bytes === $String ? $util.base64.encode(message.callId, 0, message.callId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.callId) : message.callId;
                if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                    object.status = message.status;
                if (message.error != null && $Object.hasOwnProperty.call(message, "error"))
                    object.error = message.error;
                return object;
            };

            /**
             * Converts this Playback to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Playback
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Playback.prototype.toJSON = function() {
                return Playback.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Playback
             * @function getTypeUrl
             * @memberof mediflow.v4.Playback
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Playback.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Playback";
            };

            return Playback;
        })();

        v4.PlaybackResult = (function() {

            /**
             * Properties of a PlaybackResult.
             * @typedef {Object} mediflow.v4.PlaybackResult.$Properties
             * @property {Uint8Array|null} [eventId] PlaybackResult eventId
             * @property {Uint8Array|null} [requestId] PlaybackResult requestId
             * @property {Uint8Array|null} [callId] PlaybackResult callId
             * @property {string|null} [status] PlaybackResult status
             * @property {boolean|null} [ok] PlaybackResult ok
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a PlaybackResult.
             * @memberof mediflow.v4
             * @interface IPlaybackResult
             * @augments mediflow.v4.PlaybackResult.$Properties
             * @deprecated Use mediflow.v4.PlaybackResult.$Properties instead.
             */

            /**
             * Shape of a PlaybackResult.
             * @typedef {mediflow.v4.PlaybackResult.$Properties} mediflow.v4.PlaybackResult.$Shape
             */

            /**
             * Constructs a new PlaybackResult.
             * @memberof mediflow.v4
             * @classdesc Represents a PlaybackResult.
             * @constructor
             * @param {mediflow.v4.PlaybackResult.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const PlaybackResult = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * PlaybackResult eventId.
             * @member {Uint8Array|null|undefined} eventId
             * @memberof mediflow.v4.PlaybackResult
             * @instance
             */
            PlaybackResult.prototype.eventId = null;

            /**
             * PlaybackResult requestId.
             * @member {Uint8Array|null|undefined} requestId
             * @memberof mediflow.v4.PlaybackResult
             * @instance
             */
            PlaybackResult.prototype.requestId = null;

            /**
             * PlaybackResult callId.
             * @member {Uint8Array|null|undefined} callId
             * @memberof mediflow.v4.PlaybackResult
             * @instance
             */
            PlaybackResult.prototype.callId = null;

            /**
             * PlaybackResult status.
             * @member {string|null|undefined} status
             * @memberof mediflow.v4.PlaybackResult
             * @instance
             */
            PlaybackResult.prototype.status = null;

            /**
             * PlaybackResult ok.
             * @member {boolean|null|undefined} ok
             * @memberof mediflow.v4.PlaybackResult
             * @instance
             */
            PlaybackResult.prototype.ok = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PlaybackResult.prototype, "_eventId", {
                get: $util.oneOfGetter($oneOfFields = ["eventId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PlaybackResult.prototype, "_requestId", {
                get: $util.oneOfGetter($oneOfFields = ["requestId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PlaybackResult.prototype, "_callId", {
                get: $util.oneOfGetter($oneOfFields = ["callId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PlaybackResult.prototype, "_status", {
                get: $util.oneOfGetter($oneOfFields = ["status"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PlaybackResult.prototype, "_ok", {
                get: $util.oneOfGetter($oneOfFields = ["ok"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new PlaybackResult instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.PlaybackResult
             * @static
             * @param {mediflow.v4.PlaybackResult.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.PlaybackResult} PlaybackResult instance
             * @type {{
             *   (properties: mediflow.v4.PlaybackResult.$Shape): mediflow.v4.PlaybackResult & mediflow.v4.PlaybackResult.$Shape;
             *   (properties?: mediflow.v4.PlaybackResult.$Properties): mediflow.v4.PlaybackResult;
             * }}
             */
            PlaybackResult.create = function(properties) {
                return new PlaybackResult(properties);
            };

            /**
             * Encodes the specified PlaybackResult message. Does not implicitly {@link mediflow.v4.PlaybackResult.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.PlaybackResult
             * @static
             * @param {mediflow.v4.PlaybackResult.$Properties} message PlaybackResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlaybackResult.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.eventId != null && $Object.hasOwnProperty.call(message, "eventId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.eventId);
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.requestId);
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.callId);
                if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.status);
                if (message.ok != null && $Object.hasOwnProperty.call(message, "ok"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.ok);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a PlaybackResult message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.PlaybackResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.PlaybackResult & mediflow.v4.PlaybackResult.$Shape} PlaybackResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlaybackResult.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.PlaybackResult();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.eventId = reader.bytes();
                            message._eventId = "eventId";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.requestId = reader.bytes();
                            message._requestId = "requestId";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.callId = reader.bytes();
                            message._callId = "callId";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.status = reader.stringVerify();
                            message._status = "status";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            message.ok = reader.bool();
                            message._ok = "ok";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a PlaybackResult message.
             * @function verify
             * @memberof mediflow.v4.PlaybackResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlaybackResult.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.eventId != null && $Object.hasOwnProperty.call(message, "eventId")) {
                    properties._eventId = 1;
                    if (!(message.eventId && typeof message.eventId.length === "number" || $util.isString(message.eventId)))
                        return "eventId: buffer expected";
                }
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId")) {
                    properties._requestId = 1;
                    if (!(message.requestId && typeof message.requestId.length === "number" || $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                }
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId")) {
                    properties._callId = 1;
                    if (!(message.callId && typeof message.callId.length === "number" || $util.isString(message.callId)))
                        return "callId: buffer expected";
                }
                if (message.status != null && $Object.hasOwnProperty.call(message, "status")) {
                    properties._status = 1;
                    if (!$util.isString(message.status))
                        return "status: string expected";
                }
                if (message.ok != null && $Object.hasOwnProperty.call(message, "ok")) {
                    properties._ok = 1;
                    if (typeof message.ok !== "boolean")
                        return "ok: boolean expected";
                }
                return null;
            };

            /**
             * Creates a PlaybackResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.PlaybackResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.PlaybackResult} PlaybackResult
             */
            PlaybackResult.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.PlaybackResult)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.PlaybackResult: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.PlaybackResult();
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, message.eventId = $util.newBuffer($util.base64.length(object.eventId)), 0);
                    else if (object.eventId.length >= 0)
                        message.eventId = object.eventId;
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, message.requestId = $util.newBuffer($util.base64.length(object.requestId)), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.callId != null)
                    if (typeof object.callId === "string")
                        $util.base64.decode(object.callId, message.callId = $util.newBuffer($util.base64.length(object.callId)), 0);
                    else if (object.callId.length >= 0)
                        message.callId = object.callId;
                if (object.status != null)
                    message.status = $String(object.status);
                if (object.ok != null)
                    message.ok = $Boolean(object.ok);
                return message;
            };

            /**
             * Creates a plain object from a PlaybackResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.PlaybackResult
             * @static
             * @param {mediflow.v4.PlaybackResult} message PlaybackResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlaybackResult.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.eventId != null && $Object.hasOwnProperty.call(message, "eventId"))
                    object.eventId = options.bytes === $String ? $util.base64.encode(message.eventId, 0, message.eventId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.eventId) : message.eventId;
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                    object.requestId = options.bytes === $String ? $util.base64.encode(message.requestId, 0, message.requestId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.requestId) : message.requestId;
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId"))
                    object.callId = options.bytes === $String ? $util.base64.encode(message.callId, 0, message.callId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.callId) : message.callId;
                if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                    object.status = message.status;
                if (message.ok != null && $Object.hasOwnProperty.call(message, "ok"))
                    object.ok = message.ok;
                return object;
            };

            /**
             * Converts this PlaybackResult to JSON.
             * @function toJSON
             * @memberof mediflow.v4.PlaybackResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlaybackResult.prototype.toJSON = function() {
                return PlaybackResult.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PlaybackResult
             * @function getTypeUrl
             * @memberof mediflow.v4.PlaybackResult
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PlaybackResult.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.PlaybackResult";
            };

            return PlaybackResult;
        })();

        v4.Result = (function() {

            /**
             * Properties of a Result.
             * @typedef {Object} mediflow.v4.Result.$Properties
             * @property {boolean|null} [ok] Result ok
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Result.
             * @memberof mediflow.v4
             * @interface IResult
             * @augments mediflow.v4.Result.$Properties
             * @deprecated Use mediflow.v4.Result.$Properties instead.
             */

            /**
             * Shape of a Result.
             * @typedef {mediflow.v4.Result.$Properties} mediflow.v4.Result.$Shape
             */

            /**
             * Constructs a new Result.
             * @memberof mediflow.v4
             * @classdesc Represents a Result.
             * @constructor
             * @param {mediflow.v4.Result.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Result = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Result ok.
             * @member {boolean|null|undefined} ok
             * @memberof mediflow.v4.Result
             * @instance
             */
            Result.prototype.ok = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Result.prototype, "_ok", {
                get: $util.oneOfGetter($oneOfFields = ["ok"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Result instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Result
             * @static
             * @param {mediflow.v4.Result.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Result} Result instance
             * @type {{
             *   (properties: mediflow.v4.Result.$Shape): mediflow.v4.Result & mediflow.v4.Result.$Shape;
             *   (properties?: mediflow.v4.Result.$Properties): mediflow.v4.Result;
             * }}
             */
            Result.create = function(properties) {
                return new Result(properties);
            };

            /**
             * Encodes the specified Result message. Does not implicitly {@link mediflow.v4.Result.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Result
             * @static
             * @param {mediflow.v4.Result.$Properties} message Result message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Result.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.ok != null && $Object.hasOwnProperty.call(message, "ok"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Result message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Result
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Result & mediflow.v4.Result.$Shape} Result
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Result.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Result();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            message.ok = reader.bool();
                            message._ok = "ok";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Result message.
             * @function verify
             * @memberof mediflow.v4.Result
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Result.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.ok != null && $Object.hasOwnProperty.call(message, "ok")) {
                    properties._ok = 1;
                    if (typeof message.ok !== "boolean")
                        return "ok: boolean expected";
                }
                return null;
            };

            /**
             * Creates a Result message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Result
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Result} Result
             */
            Result.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Result)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Result: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Result();
                if (object.ok != null)
                    message.ok = $Boolean(object.ok);
                return message;
            };

            /**
             * Creates a plain object from a Result message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Result
             * @static
             * @param {mediflow.v4.Result} message Result
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Result.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.ok != null && $Object.hasOwnProperty.call(message, "ok"))
                    object.ok = message.ok;
                return object;
            };

            /**
             * Converts this Result to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Result
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Result.prototype.toJSON = function() {
                return Result.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Result
             * @function getTypeUrl
             * @memberof mediflow.v4.Result
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Result.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Result";
            };

            return Result;
        })();

        v4.Problem = (function() {

            /**
             * Properties of a Problem.
             * @typedef {Object} mediflow.v4.Problem.$Properties
             * @property {string|null} [error] Problem error
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Problem.
             * @memberof mediflow.v4
             * @interface IProblem
             * @augments mediflow.v4.Problem.$Properties
             * @deprecated Use mediflow.v4.Problem.$Properties instead.
             */

            /**
             * Shape of a Problem.
             * @typedef {mediflow.v4.Problem.$Properties} mediflow.v4.Problem.$Shape
             */

            /**
             * Constructs a new Problem.
             * @memberof mediflow.v4
             * @classdesc Represents a Problem.
             * @constructor
             * @param {mediflow.v4.Problem.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Problem = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Problem error.
             * @member {string|null|undefined} error
             * @memberof mediflow.v4.Problem
             * @instance
             */
            Problem.prototype.error = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Problem.prototype, "_error", {
                get: $util.oneOfGetter($oneOfFields = ["error"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Problem instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Problem
             * @static
             * @param {mediflow.v4.Problem.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Problem} Problem instance
             * @type {{
             *   (properties: mediflow.v4.Problem.$Shape): mediflow.v4.Problem & mediflow.v4.Problem.$Shape;
             *   (properties?: mediflow.v4.Problem.$Properties): mediflow.v4.Problem;
             * }}
             */
            Problem.create = function(properties) {
                return new Problem(properties);
            };

            /**
             * Encodes the specified Problem message. Does not implicitly {@link mediflow.v4.Problem.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Problem
             * @static
             * @param {mediflow.v4.Problem.$Properties} message Problem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Problem.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.error != null && $Object.hasOwnProperty.call(message, "error"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.error);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Problem message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Problem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Problem & mediflow.v4.Problem.$Shape} Problem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Problem.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Problem();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.error = reader.stringVerify();
                            message._error = "error";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Problem message.
             * @function verify
             * @memberof mediflow.v4.Problem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Problem.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.error != null && $Object.hasOwnProperty.call(message, "error")) {
                    properties._error = 1;
                    if (!$util.isString(message.error))
                        return "error: string expected";
                }
                return null;
            };

            /**
             * Creates a Problem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Problem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Problem} Problem
             */
            Problem.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Problem)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Problem: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Problem();
                if (object.error != null)
                    message.error = $String(object.error);
                return message;
            };

            /**
             * Creates a plain object from a Problem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Problem
             * @static
             * @param {mediflow.v4.Problem} message Problem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Problem.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.error != null && $Object.hasOwnProperty.call(message, "error"))
                    object.error = message.error;
                return object;
            };

            /**
             * Converts this Problem to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Problem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Problem.prototype.toJSON = function() {
                return Problem.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Problem
             * @function getTypeUrl
             * @memberof mediflow.v4.Problem
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Problem.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Problem";
            };

            return Problem;
        })();

        v4.Health = (function() {

            /**
             * Properties of a Health.
             * @typedef {Object} mediflow.v4.Health.$Properties
             * @property {string|null} [status] Health status
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Health.
             * @memberof mediflow.v4
             * @interface IHealth
             * @augments mediflow.v4.Health.$Properties
             * @deprecated Use mediflow.v4.Health.$Properties instead.
             */

            /**
             * Shape of a Health.
             * @typedef {mediflow.v4.Health.$Properties} mediflow.v4.Health.$Shape
             */

            /**
             * Constructs a new Health.
             * @memberof mediflow.v4
             * @classdesc Represents a Health.
             * @constructor
             * @param {mediflow.v4.Health.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Health = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Health status.
             * @member {string|null|undefined} status
             * @memberof mediflow.v4.Health
             * @instance
             */
            Health.prototype.status = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Health.prototype, "_status", {
                get: $util.oneOfGetter($oneOfFields = ["status"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Health instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Health
             * @static
             * @param {mediflow.v4.Health.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Health} Health instance
             * @type {{
             *   (properties: mediflow.v4.Health.$Shape): mediflow.v4.Health & mediflow.v4.Health.$Shape;
             *   (properties?: mediflow.v4.Health.$Properties): mediflow.v4.Health;
             * }}
             */
            Health.create = function(properties) {
                return new Health(properties);
            };

            /**
             * Encodes the specified Health message. Does not implicitly {@link mediflow.v4.Health.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Health
             * @static
             * @param {mediflow.v4.Health.$Properties} message Health message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Health.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.status);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Health message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Health
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Health & mediflow.v4.Health.$Shape} Health
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Health.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Health();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.status = reader.stringVerify();
                            message._status = "status";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Health message.
             * @function verify
             * @memberof mediflow.v4.Health
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Health.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.status != null && $Object.hasOwnProperty.call(message, "status")) {
                    properties._status = 1;
                    if (!$util.isString(message.status))
                        return "status: string expected";
                }
                return null;
            };

            /**
             * Creates a Health message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Health
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Health} Health
             */
            Health.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Health)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Health: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Health();
                if (object.status != null)
                    message.status = $String(object.status);
                return message;
            };

            /**
             * Creates a plain object from a Health message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Health
             * @static
             * @param {mediflow.v4.Health} message Health
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Health.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                    object.status = message.status;
                return object;
            };

            /**
             * Converts this Health to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Health
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Health.prototype.toJSON = function() {
                return Health.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Health
             * @function getTypeUrl
             * @memberof mediflow.v4.Health
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Health.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Health";
            };

            return Health;
        })();

        v4.Retain = (function() {

            /**
             * Properties of a Retain.
             * @typedef {Object} mediflow.v4.Retain.$Properties
             * @property {boolean|null} [dryRun] Retain dryRun
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Retain.
             * @memberof mediflow.v4
             * @interface IRetain
             * @augments mediflow.v4.Retain.$Properties
             * @deprecated Use mediflow.v4.Retain.$Properties instead.
             */

            /**
             * Shape of a Retain.
             * @typedef {mediflow.v4.Retain.$Properties} mediflow.v4.Retain.$Shape
             */

            /**
             * Constructs a new Retain.
             * @memberof mediflow.v4
             * @classdesc Represents a Retain.
             * @constructor
             * @param {mediflow.v4.Retain.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Retain = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Retain dryRun.
             * @member {boolean|null|undefined} dryRun
             * @memberof mediflow.v4.Retain
             * @instance
             */
            Retain.prototype.dryRun = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Retain.prototype, "_dryRun", {
                get: $util.oneOfGetter($oneOfFields = ["dryRun"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Retain instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Retain
             * @static
             * @param {mediflow.v4.Retain.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Retain} Retain instance
             * @type {{
             *   (properties: mediflow.v4.Retain.$Shape): mediflow.v4.Retain & mediflow.v4.Retain.$Shape;
             *   (properties?: mediflow.v4.Retain.$Properties): mediflow.v4.Retain;
             * }}
             */
            Retain.create = function(properties) {
                return new Retain(properties);
            };

            /**
             * Encodes the specified Retain message. Does not implicitly {@link mediflow.v4.Retain.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Retain
             * @static
             * @param {mediflow.v4.Retain.$Properties} message Retain message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Retain.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.dryRun != null && $Object.hasOwnProperty.call(message, "dryRun"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.dryRun);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Retain message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Retain
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Retain & mediflow.v4.Retain.$Shape} Retain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Retain.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Retain();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            message.dryRun = reader.bool();
                            message._dryRun = "dryRun";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Retain message.
             * @function verify
             * @memberof mediflow.v4.Retain
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Retain.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.dryRun != null && $Object.hasOwnProperty.call(message, "dryRun")) {
                    properties._dryRun = 1;
                    if (typeof message.dryRun !== "boolean")
                        return "dryRun: boolean expected";
                }
                return null;
            };

            /**
             * Creates a Retain message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Retain
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Retain} Retain
             */
            Retain.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Retain)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Retain: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Retain();
                if (object.dryRun != null)
                    message.dryRun = $Boolean(object.dryRun);
                return message;
            };

            /**
             * Creates a plain object from a Retain message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Retain
             * @static
             * @param {mediflow.v4.Retain} message Retain
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Retain.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.dryRun != null && $Object.hasOwnProperty.call(message, "dryRun"))
                    object.dryRun = message.dryRun;
                return object;
            };

            /**
             * Converts this Retain to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Retain
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Retain.prototype.toJSON = function() {
                return Retain.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Retain
             * @function getTypeUrl
             * @memberof mediflow.v4.Retain
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Retain.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Retain";
            };

            return Retain;
        })();

        v4.Retained = (function() {

            /**
             * Properties of a Retained.
             * @typedef {Object} mediflow.v4.Retained.$Properties
             * @property {string|null} [cutoff] Retained cutoff
             * @property {boolean|null} [dryRun] Retained dryRun
             * @property {Object.<string,number|Long>|null} [moved] Retained moved
             * @property {boolean|null} [hasMore] Retained hasMore
             * @property {Object.<string,number|Long>|null} [skipped] Retained skipped
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Retained.
             * @memberof mediflow.v4
             * @interface IRetained
             * @augments mediflow.v4.Retained.$Properties
             * @deprecated Use mediflow.v4.Retained.$Properties instead.
             */

            /**
             * Shape of a Retained.
             * @typedef {mediflow.v4.Retained.$Properties} mediflow.v4.Retained.$Shape
             */

            /**
             * Constructs a new Retained.
             * @memberof mediflow.v4
             * @classdesc Represents a Retained.
             * @constructor
             * @param {mediflow.v4.Retained.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Retained = function (properties) {
                this.moved = {};
                this.skipped = {};
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Retained cutoff.
             * @member {string|null|undefined} cutoff
             * @memberof mediflow.v4.Retained
             * @instance
             */
            Retained.prototype.cutoff = null;

            /**
             * Retained dryRun.
             * @member {boolean|null|undefined} dryRun
             * @memberof mediflow.v4.Retained
             * @instance
             */
            Retained.prototype.dryRun = null;

            /**
             * Retained moved.
             * @member {Object.<string,number|Long>} moved
             * @memberof mediflow.v4.Retained
             * @instance
             */
            Retained.prototype.moved = $util.emptyObject;

            /**
             * Retained hasMore.
             * @member {boolean|null|undefined} hasMore
             * @memberof mediflow.v4.Retained
             * @instance
             */
            Retained.prototype.hasMore = null;

            /**
             * Retained skipped.
             * @member {Object.<string,number|Long>} skipped
             * @memberof mediflow.v4.Retained
             * @instance
             */
            Retained.prototype.skipped = $util.emptyObject;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Retained.prototype, "_cutoff", {
                get: $util.oneOfGetter($oneOfFields = ["cutoff"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Retained.prototype, "_dryRun", {
                get: $util.oneOfGetter($oneOfFields = ["dryRun"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Retained.prototype, "_hasMore", {
                get: $util.oneOfGetter($oneOfFields = ["hasMore"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Retained instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Retained
             * @static
             * @param {mediflow.v4.Retained.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Retained} Retained instance
             * @type {{
             *   (properties: mediflow.v4.Retained.$Shape): mediflow.v4.Retained & mediflow.v4.Retained.$Shape;
             *   (properties?: mediflow.v4.Retained.$Properties): mediflow.v4.Retained;
             * }}
             */
            Retained.create = function(properties) {
                return new Retained(properties);
            };

            /**
             * Encodes the specified Retained message. Does not implicitly {@link mediflow.v4.Retained.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Retained
             * @static
             * @param {mediflow.v4.Retained.$Properties} message Retained message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Retained.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.cutoff != null && $Object.hasOwnProperty.call(message, "cutoff"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.cutoff);
                if (message.dryRun != null && $Object.hasOwnProperty.call(message, "dryRun"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.dryRun);
                if (message.moved != null && $Object.hasOwnProperty.call(message, "moved"))
                    for (let keys = $Object.keys(message.moved), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint64(message.moved[keys[i]]).ldelim();
                if (message.hasMore != null && $Object.hasOwnProperty.call(message, "hasMore"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.hasMore);
                if (message.skipped != null && $Object.hasOwnProperty.call(message, "skipped"))
                    for (let keys = $Object.keys(message.skipped), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint64(message.skipped[keys[i]]).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Retained message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Retained
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Retained & mediflow.v4.Retained.$Shape} Retained
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Retained.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, key, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Retained();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.cutoff = reader.stringVerify();
                            message._cutoff = "cutoff";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.dryRun = reader.bool();
                            message._dryRun = "dryRun";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if (message.moved === $util.emptyObject)
                                message.moved = {};
                            let end2 = reader.size() + reader.pos;
                            if (end2 > reader.len)
                                throw $RangeError("index out of range");
                            reader.len = end2;
                            key = "";
                            value = $util.Long ? $util.Long.fromNumber(0, true) : 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.tag();
                                wireType = tag2 & 7;
                                switch (tag2 >>>= 3) {
                                case 1:
                                    if (wireType !== 2)
                                        break;
                                    key = reader.stringVerify();
                                    continue;
                                case 2:
                                    if (wireType !== 0)
                                        break;
                                    value = reader.uint64();
                                    continue;
                                }
                                reader.skipType(wireType, _depth, tag2);
                            }
                            if (reader.pos !== end2)
                                throw $RangeError("index out of range");
                            reader.len = end;
                            if (key === "__proto__")
                                $util.makeProp(message.moved, key);
                            message.moved[key] = value;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.hasMore = reader.bool();
                            message._hasMore = "hasMore";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            if (message.skipped === $util.emptyObject)
                                message.skipped = {};
                            let end2 = reader.size() + reader.pos;
                            if (end2 > reader.len)
                                throw $RangeError("index out of range");
                            reader.len = end2;
                            key = "";
                            value = $util.Long ? $util.Long.fromNumber(0, true) : 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.tag();
                                wireType = tag2 & 7;
                                switch (tag2 >>>= 3) {
                                case 1:
                                    if (wireType !== 2)
                                        break;
                                    key = reader.stringVerify();
                                    continue;
                                case 2:
                                    if (wireType !== 0)
                                        break;
                                    value = reader.uint64();
                                    continue;
                                }
                                reader.skipType(wireType, _depth, tag2);
                            }
                            if (reader.pos !== end2)
                                throw $RangeError("index out of range");
                            reader.len = end;
                            if (key === "__proto__")
                                $util.makeProp(message.skipped, key);
                            message.skipped[key] = value;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Retained message.
             * @function verify
             * @memberof mediflow.v4.Retained
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Retained.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.cutoff != null && $Object.hasOwnProperty.call(message, "cutoff")) {
                    properties._cutoff = 1;
                    if (!$util.isString(message.cutoff))
                        return "cutoff: string expected";
                }
                if (message.dryRun != null && $Object.hasOwnProperty.call(message, "dryRun")) {
                    properties._dryRun = 1;
                    if (typeof message.dryRun !== "boolean")
                        return "dryRun: boolean expected";
                }
                if (message.moved != null && $Object.hasOwnProperty.call(message, "moved")) {
                    if (!$util.isObject(message.moved))
                        return "moved: object expected";
                    let key = $Object.keys(message.moved);
                    for (let i = 0; i < key.length; ++i)
                        if (!$util.isInteger(message.moved[key[i]]) && !(message.moved[key[i]] && $util.isInteger(message.moved[key[i]].low) && $util.isInteger(message.moved[key[i]].high)))
                            return "moved: integer|Long{k:string} expected";
                }
                if (message.hasMore != null && $Object.hasOwnProperty.call(message, "hasMore")) {
                    properties._hasMore = 1;
                    if (typeof message.hasMore !== "boolean")
                        return "hasMore: boolean expected";
                }
                if (message.skipped != null && $Object.hasOwnProperty.call(message, "skipped")) {
                    if (!$util.isObject(message.skipped))
                        return "skipped: object expected";
                    let key = $Object.keys(message.skipped);
                    for (let i = 0; i < key.length; ++i)
                        if (!$util.isInteger(message.skipped[key[i]]) && !(message.skipped[key[i]] && $util.isInteger(message.skipped[key[i]].low) && $util.isInteger(message.skipped[key[i]].high)))
                            return "skipped: integer|Long{k:string} expected";
                }
                return null;
            };

            /**
             * Creates a Retained message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Retained
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Retained} Retained
             */
            Retained.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Retained)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Retained: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Retained();
                if (object.cutoff != null)
                    message.cutoff = $String(object.cutoff);
                if (object.dryRun != null)
                    message.dryRun = $Boolean(object.dryRun);
                if (object.moved) {
                    if (!$util.isObject(object.moved))
                        throw $TypeError(".mediflow.v4.Retained.moved: object expected");
                    message.moved = {};
                    for (let keys = $Object.keys(object.moved), i = 0; i < keys.length; ++i) {
                        if (keys[i] === "__proto__")
                            $util.makeProp(message.moved, keys[i]);
                        if ($util.Long)
                            message.moved[keys[i]] = $util.Long.fromValue(object.moved[keys[i]], true);
                        else if (typeof object.moved[keys[i]] === "string")
                            message.moved[keys[i]] = $parseInt(object.moved[keys[i]], 10);
                        else if (typeof object.moved[keys[i]] === "number")
                            message.moved[keys[i]] = object.moved[keys[i]];
                        else if (typeof object.moved[keys[i]] === "object")
                            message.moved[keys[i]] = new $util.LongBits(object.moved[keys[i]].low >>> 0, object.moved[keys[i]].high >>> 0).toNumber(true);
                    }
                }
                if (object.hasMore != null)
                    message.hasMore = $Boolean(object.hasMore);
                if (object.skipped) {
                    if (!$util.isObject(object.skipped))
                        throw $TypeError(".mediflow.v4.Retained.skipped: object expected");
                    message.skipped = {};
                    for (let keys = $Object.keys(object.skipped), i = 0; i < keys.length; ++i) {
                        if (keys[i] === "__proto__")
                            $util.makeProp(message.skipped, keys[i]);
                        if ($util.Long)
                            message.skipped[keys[i]] = $util.Long.fromValue(object.skipped[keys[i]], true);
                        else if (typeof object.skipped[keys[i]] === "string")
                            message.skipped[keys[i]] = $parseInt(object.skipped[keys[i]], 10);
                        else if (typeof object.skipped[keys[i]] === "number")
                            message.skipped[keys[i]] = object.skipped[keys[i]];
                        else if (typeof object.skipped[keys[i]] === "object")
                            message.skipped[keys[i]] = new $util.LongBits(object.skipped[keys[i]].low >>> 0, object.skipped[keys[i]].high >>> 0).toNumber(true);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Retained message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Retained
             * @static
             * @param {mediflow.v4.Retained} message Retained
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Retained.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.objects || options.defaults) {
                    object.moved = {};
                    object.skipped = {};
                }
                if (message.cutoff != null && $Object.hasOwnProperty.call(message, "cutoff"))
                    object.cutoff = message.cutoff;
                if (message.dryRun != null && $Object.hasOwnProperty.call(message, "dryRun"))
                    object.dryRun = message.dryRun;
                let keys2;
                if (message.moved && (keys2 = $Object.keys(message.moved)).length) {
                    object.moved = {};
                    for (let j = 0; j < keys2.length; ++j) {
                        if (keys2[j] === "__proto__")
                            $util.makeProp(object.moved, keys2[j]);
                        if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                            object.moved[keys2[j]] = typeof message.moved[keys2[j]] === "number" ? $BigInt(message.moved[keys2[j]]) : $util.Long.fromBits(message.moved[keys2[j]].low >>> 0, message.moved[keys2[j]].high >>> 0, true).toBigInt();
                        else if (typeof message.moved[keys2[j]] === "number")
                            object.moved[keys2[j]] = options.longs === $String ? $String(message.moved[keys2[j]]) : message.moved[keys2[j]];
                        else
                            object.moved[keys2[j]] = options.longs === $String ? $util.Long.prototype.toString.call(message.moved[keys2[j]]) : options.longs === $Number ? new $util.LongBits(message.moved[keys2[j]].low >>> 0, message.moved[keys2[j]].high >>> 0).toNumber(true) : message.moved[keys2[j]];
                    }
                }
                if (message.hasMore != null && $Object.hasOwnProperty.call(message, "hasMore"))
                    object.hasMore = message.hasMore;
                if (message.skipped && (keys2 = $Object.keys(message.skipped)).length) {
                    object.skipped = {};
                    for (let j = 0; j < keys2.length; ++j) {
                        if (keys2[j] === "__proto__")
                            $util.makeProp(object.skipped, keys2[j]);
                        if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                            object.skipped[keys2[j]] = typeof message.skipped[keys2[j]] === "number" ? $BigInt(message.skipped[keys2[j]]) : $util.Long.fromBits(message.skipped[keys2[j]].low >>> 0, message.skipped[keys2[j]].high >>> 0, true).toBigInt();
                        else if (typeof message.skipped[keys2[j]] === "number")
                            object.skipped[keys2[j]] = options.longs === $String ? $String(message.skipped[keys2[j]]) : message.skipped[keys2[j]];
                        else
                            object.skipped[keys2[j]] = options.longs === $String ? $util.Long.prototype.toString.call(message.skipped[keys2[j]]) : options.longs === $Number ? new $util.LongBits(message.skipped[keys2[j]].low >>> 0, message.skipped[keys2[j]].high >>> 0).toNumber(true) : message.skipped[keys2[j]];
                    }
                }
                return object;
            };

            /**
             * Converts this Retained to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Retained
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Retained.prototype.toJSON = function() {
                return Retained.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Retained
             * @function getTypeUrl
             * @memberof mediflow.v4.Retained
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Retained.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Retained";
            };

            return Retained;
        })();

        v4.Auth = (function() {

            /**
             * Properties of an Auth.
             * @typedef {Object} mediflow.v4.Auth.$Properties
             * @property {Uint8Array|null} [token] Auth token
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an Auth.
             * @memberof mediflow.v4
             * @interface IAuth
             * @augments mediflow.v4.Auth.$Properties
             * @deprecated Use mediflow.v4.Auth.$Properties instead.
             */

            /**
             * Shape of an Auth.
             * @typedef {mediflow.v4.Auth.$Properties} mediflow.v4.Auth.$Shape
             */

            /**
             * Constructs a new Auth.
             * @memberof mediflow.v4
             * @classdesc Represents an Auth.
             * @constructor
             * @param {mediflow.v4.Auth.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Auth = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Auth token.
             * @member {Uint8Array|null|undefined} token
             * @memberof mediflow.v4.Auth
             * @instance
             */
            Auth.prototype.token = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Auth.prototype, "_token", {
                get: $util.oneOfGetter($oneOfFields = ["token"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Auth instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Auth
             * @static
             * @param {mediflow.v4.Auth.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Auth} Auth instance
             * @type {{
             *   (properties: mediflow.v4.Auth.$Shape): mediflow.v4.Auth & mediflow.v4.Auth.$Shape;
             *   (properties?: mediflow.v4.Auth.$Properties): mediflow.v4.Auth;
             * }}
             */
            Auth.create = function(properties) {
                return new Auth(properties);
            };

            /**
             * Encodes the specified Auth message. Does not implicitly {@link mediflow.v4.Auth.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Auth
             * @static
             * @param {mediflow.v4.Auth.$Properties} message Auth message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Auth.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.token);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes an Auth message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Auth
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Auth & mediflow.v4.Auth.$Shape} Auth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Auth.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Auth();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.token = reader.bytes();
                            message._token = "token";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies an Auth message.
             * @function verify
             * @memberof mediflow.v4.Auth
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Auth.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.token != null && $Object.hasOwnProperty.call(message, "token")) {
                    properties._token = 1;
                    if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                        return "token: buffer expected";
                }
                return null;
            };

            /**
             * Creates an Auth message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Auth
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Auth} Auth
             */
            Auth.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Auth)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Auth: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Auth();
                if (object.token != null)
                    if (typeof object.token === "string")
                        $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                    else if (object.token.length >= 0)
                        message.token = object.token;
                return message;
            };

            /**
             * Creates a plain object from an Auth message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Auth
             * @static
             * @param {mediflow.v4.Auth} message Auth
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Auth.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                    object.token = options.bytes === $String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.token) : message.token;
                return object;
            };

            /**
             * Converts this Auth to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Auth
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Auth.prototype.toJSON = function() {
                return Auth.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Auth
             * @function getTypeUrl
             * @memberof mediflow.v4.Auth
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Auth.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Auth";
            };

            return Auth;
        })();

        v4.Sync = (function() {

            /**
             * Properties of a Sync.
             * @typedef {Object} mediflow.v4.Sync.$Properties
             * @property {number|null} [page] Sync page
             * @property {number|null} [pageSize] Sync pageSize
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Sync.
             * @memberof mediflow.v4
             * @interface ISync
             * @augments mediflow.v4.Sync.$Properties
             * @deprecated Use mediflow.v4.Sync.$Properties instead.
             */

            /**
             * Shape of a Sync.
             * @typedef {mediflow.v4.Sync.$Properties} mediflow.v4.Sync.$Shape
             */

            /**
             * Constructs a new Sync.
             * @memberof mediflow.v4
             * @classdesc Represents a Sync.
             * @constructor
             * @param {mediflow.v4.Sync.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Sync = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Sync page.
             * @member {number|null|undefined} page
             * @memberof mediflow.v4.Sync
             * @instance
             */
            Sync.prototype.page = null;

            /**
             * Sync pageSize.
             * @member {number|null|undefined} pageSize
             * @memberof mediflow.v4.Sync
             * @instance
             */
            Sync.prototype.pageSize = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Sync.prototype, "_page", {
                get: $util.oneOfGetter($oneOfFields = ["page"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Sync.prototype, "_pageSize", {
                get: $util.oneOfGetter($oneOfFields = ["pageSize"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Sync instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Sync
             * @static
             * @param {mediflow.v4.Sync.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Sync} Sync instance
             * @type {{
             *   (properties: mediflow.v4.Sync.$Shape): mediflow.v4.Sync & mediflow.v4.Sync.$Shape;
             *   (properties?: mediflow.v4.Sync.$Properties): mediflow.v4.Sync;
             * }}
             */
            Sync.create = function(properties) {
                return new Sync(properties);
            };

            /**
             * Encodes the specified Sync message. Does not implicitly {@link mediflow.v4.Sync.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Sync
             * @static
             * @param {mediflow.v4.Sync.$Properties} message Sync message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Sync.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.page != null && $Object.hasOwnProperty.call(message, "page"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.page);
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.pageSize);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Sync message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Sync
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Sync & mediflow.v4.Sync.$Shape} Sync
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Sync.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Sync();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            message.page = reader.uint32();
                            message._page = "page";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.pageSize = reader.uint32();
                            message._pageSize = "pageSize";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Sync message.
             * @function verify
             * @memberof mediflow.v4.Sync
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Sync.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.page != null && $Object.hasOwnProperty.call(message, "page")) {
                    properties._page = 1;
                    if (!$util.isInteger(message.page))
                        return "page: integer expected";
                }
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize")) {
                    properties._pageSize = 1;
                    if (!$util.isInteger(message.pageSize))
                        return "pageSize: integer expected";
                }
                return null;
            };

            /**
             * Creates a Sync message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Sync
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Sync} Sync
             */
            Sync.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Sync)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Sync: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Sync();
                if (object.page != null)
                    message.page = object.page >>> 0;
                if (object.pageSize != null)
                    message.pageSize = object.pageSize >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a Sync message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Sync
             * @static
             * @param {mediflow.v4.Sync} message Sync
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Sync.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.page != null && $Object.hasOwnProperty.call(message, "page"))
                    object.page = message.page;
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize"))
                    object.pageSize = message.pageSize;
                return object;
            };

            /**
             * Converts this Sync to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Sync
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Sync.prototype.toJSON = function() {
                return Sync.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Sync
             * @function getTypeUrl
             * @memberof mediflow.v4.Sync
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Sync.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Sync";
            };

            return Sync;
        })();

        v4.PendingSync = (function() {

            /**
             * Properties of a PendingSync.
             * @typedef {Object} mediflow.v4.PendingSync.$Properties
             * @property {string|null} [cursor] PendingSync cursor
             * @property {Uint8Array|null} [requestId] PendingSync requestId
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a PendingSync.
             * @memberof mediflow.v4
             * @interface IPendingSync
             * @augments mediflow.v4.PendingSync.$Properties
             * @deprecated Use mediflow.v4.PendingSync.$Properties instead.
             */

            /**
             * Shape of a PendingSync.
             * @typedef {mediflow.v4.PendingSync.$Properties} mediflow.v4.PendingSync.$Shape
             */

            /**
             * Constructs a new PendingSync.
             * @memberof mediflow.v4
             * @classdesc Represents a PendingSync.
             * @constructor
             * @param {mediflow.v4.PendingSync.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const PendingSync = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * PendingSync cursor.
             * @member {string|null|undefined} cursor
             * @memberof mediflow.v4.PendingSync
             * @instance
             */
            PendingSync.prototype.cursor = null;

            /**
             * PendingSync requestId.
             * @member {Uint8Array|null|undefined} requestId
             * @memberof mediflow.v4.PendingSync
             * @instance
             */
            PendingSync.prototype.requestId = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PendingSync.prototype, "_cursor", {
                get: $util.oneOfGetter($oneOfFields = ["cursor"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PendingSync.prototype, "_requestId", {
                get: $util.oneOfGetter($oneOfFields = ["requestId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new PendingSync instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.PendingSync
             * @static
             * @param {mediflow.v4.PendingSync.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.PendingSync} PendingSync instance
             * @type {{
             *   (properties: mediflow.v4.PendingSync.$Shape): mediflow.v4.PendingSync & mediflow.v4.PendingSync.$Shape;
             *   (properties?: mediflow.v4.PendingSync.$Properties): mediflow.v4.PendingSync;
             * }}
             */
            PendingSync.create = function(properties) {
                return new PendingSync(properties);
            };

            /**
             * Encodes the specified PendingSync message. Does not implicitly {@link mediflow.v4.PendingSync.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.PendingSync
             * @static
             * @param {mediflow.v4.PendingSync.$Properties} message PendingSync message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PendingSync.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.cursor != null && $Object.hasOwnProperty.call(message, "cursor"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.cursor);
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.requestId);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a PendingSync message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.PendingSync
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.PendingSync & mediflow.v4.PendingSync.$Shape} PendingSync
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PendingSync.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.PendingSync();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.cursor = reader.stringVerify();
                            message._cursor = "cursor";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.requestId = reader.bytes();
                            message._requestId = "requestId";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a PendingSync message.
             * @function verify
             * @memberof mediflow.v4.PendingSync
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PendingSync.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.cursor != null && $Object.hasOwnProperty.call(message, "cursor")) {
                    properties._cursor = 1;
                    if (!$util.isString(message.cursor))
                        return "cursor: string expected";
                }
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId")) {
                    properties._requestId = 1;
                    if (!(message.requestId && typeof message.requestId.length === "number" || $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                }
                return null;
            };

            /**
             * Creates a PendingSync message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.PendingSync
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.PendingSync} PendingSync
             */
            PendingSync.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.PendingSync)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.PendingSync: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.PendingSync();
                if (object.cursor != null)
                    message.cursor = $String(object.cursor);
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, message.requestId = $util.newBuffer($util.base64.length(object.requestId)), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                return message;
            };

            /**
             * Creates a plain object from a PendingSync message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.PendingSync
             * @static
             * @param {mediflow.v4.PendingSync} message PendingSync
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PendingSync.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.cursor != null && $Object.hasOwnProperty.call(message, "cursor"))
                    object.cursor = message.cursor;
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                    object.requestId = options.bytes === $String ? $util.base64.encode(message.requestId, 0, message.requestId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.requestId) : message.requestId;
                return object;
            };

            /**
             * Converts this PendingSync to JSON.
             * @function toJSON
             * @memberof mediflow.v4.PendingSync
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PendingSync.prototype.toJSON = function() {
                return PendingSync.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PendingSync
             * @function getTypeUrl
             * @memberof mediflow.v4.PendingSync
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PendingSync.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.PendingSync";
            };

            return PendingSync;
        })();

        v4.PendingCalls = (function() {

            /**
             * Properties of a PendingCalls.
             * @typedef {Object} mediflow.v4.PendingCalls.$Properties
             * @property {Array.<mediflow.v4.Call.$Properties>|null} [payload] PendingCalls payload
             * @property {string|null} [nextCursor] PendingCalls nextCursor
             * @property {Uint8Array|null} [requestId] PendingCalls requestId
             * @property {Uint8Array|null} [screenId] PendingCalls screenId
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a PendingCalls.
             * @memberof mediflow.v4
             * @interface IPendingCalls
             * @augments mediflow.v4.PendingCalls.$Properties
             * @deprecated Use mediflow.v4.PendingCalls.$Properties instead.
             */

            /**
             * Shape of a PendingCalls.
             * @typedef {mediflow.v4.PendingCalls.$Properties} mediflow.v4.PendingCalls.$Shape
             */

            /**
             * Constructs a new PendingCalls.
             * @memberof mediflow.v4
             * @classdesc Represents a PendingCalls.
             * @constructor
             * @param {mediflow.v4.PendingCalls.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const PendingCalls = function (properties) {
                this.payload = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * PendingCalls payload.
             * @member {Array.<mediflow.v4.Call.$Properties>} payload
             * @memberof mediflow.v4.PendingCalls
             * @instance
             */
            PendingCalls.prototype.payload = $util.emptyArray;

            /**
             * PendingCalls nextCursor.
             * @member {string|null|undefined} nextCursor
             * @memberof mediflow.v4.PendingCalls
             * @instance
             */
            PendingCalls.prototype.nextCursor = null;

            /**
             * PendingCalls requestId.
             * @member {Uint8Array|null|undefined} requestId
             * @memberof mediflow.v4.PendingCalls
             * @instance
             */
            PendingCalls.prototype.requestId = null;

            /**
             * PendingCalls screenId.
             * @member {Uint8Array|null|undefined} screenId
             * @memberof mediflow.v4.PendingCalls
             * @instance
             */
            PendingCalls.prototype.screenId = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PendingCalls.prototype, "_nextCursor", {
                get: $util.oneOfGetter($oneOfFields = ["nextCursor"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PendingCalls.prototype, "_requestId", {
                get: $util.oneOfGetter($oneOfFields = ["requestId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PendingCalls.prototype, "_screenId", {
                get: $util.oneOfGetter($oneOfFields = ["screenId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new PendingCalls instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.PendingCalls
             * @static
             * @param {mediflow.v4.PendingCalls.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.PendingCalls} PendingCalls instance
             * @type {{
             *   (properties: mediflow.v4.PendingCalls.$Shape): mediflow.v4.PendingCalls & mediflow.v4.PendingCalls.$Shape;
             *   (properties?: mediflow.v4.PendingCalls.$Properties): mediflow.v4.PendingCalls;
             * }}
             */
            PendingCalls.create = function(properties) {
                return new PendingCalls(properties);
            };

            /**
             * Encodes the specified PendingCalls message. Does not implicitly {@link mediflow.v4.PendingCalls.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.PendingCalls
             * @static
             * @param {mediflow.v4.PendingCalls.$Properties} message PendingCalls message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PendingCalls.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.payload != null && message.payload.length)
                    for (let i = 0; i < message.payload.length; ++i)
                        $root.mediflow.v4.Call.encode(message.payload[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.nextCursor != null && $Object.hasOwnProperty.call(message, "nextCursor"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.nextCursor);
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.requestId);
                if (message.screenId != null && $Object.hasOwnProperty.call(message, "screenId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.screenId);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a PendingCalls message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.PendingCalls
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.PendingCalls & mediflow.v4.PendingCalls.$Shape} PendingCalls
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PendingCalls.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.PendingCalls();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.payload && message.payload.length))
                                message.payload = [];
                            message.payload.push($root.mediflow.v4.Call.decode(reader, reader.size(), $undefined, _depth + 1));
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.nextCursor = reader.stringVerify();
                            message._nextCursor = "nextCursor";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.requestId = reader.bytes();
                            message._requestId = "requestId";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.screenId = reader.bytes();
                            message._screenId = "screenId";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a PendingCalls message.
             * @function verify
             * @memberof mediflow.v4.PendingCalls
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PendingCalls.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.payload != null && $Object.hasOwnProperty.call(message, "payload")) {
                    if (!$Array.isArray(message.payload))
                        return "payload: array expected";
                    for (let i = 0; i < message.payload.length; ++i) {
                        let error = $root.mediflow.v4.Call.verify(message.payload[i], _depth + 1);
                        if (error)
                            return "payload." + error;
                    }
                }
                if (message.nextCursor != null && $Object.hasOwnProperty.call(message, "nextCursor")) {
                    properties._nextCursor = 1;
                    if (!$util.isString(message.nextCursor))
                        return "nextCursor: string expected";
                }
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId")) {
                    properties._requestId = 1;
                    if (!(message.requestId && typeof message.requestId.length === "number" || $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                }
                if (message.screenId != null && $Object.hasOwnProperty.call(message, "screenId")) {
                    properties._screenId = 1;
                    if (!(message.screenId && typeof message.screenId.length === "number" || $util.isString(message.screenId)))
                        return "screenId: buffer expected";
                }
                return null;
            };

            /**
             * Creates a PendingCalls message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.PendingCalls
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.PendingCalls} PendingCalls
             */
            PendingCalls.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.PendingCalls)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.PendingCalls: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.PendingCalls();
                if (object.payload) {
                    if (!$Array.isArray(object.payload))
                        throw $TypeError(".mediflow.v4.PendingCalls.payload: array expected");
                    message.payload = $Array(object.payload.length);
                    for (let i = 0; i < object.payload.length; ++i) {
                        if (!$util.isObject(object.payload[i]))
                            throw $TypeError(".mediflow.v4.PendingCalls.payload: object expected");
                        message.payload[i] = $root.mediflow.v4.Call.fromObject(object.payload[i], _depth + 1);
                    }
                }
                if (object.nextCursor != null)
                    message.nextCursor = $String(object.nextCursor);
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, message.requestId = $util.newBuffer($util.base64.length(object.requestId)), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.screenId != null)
                    if (typeof object.screenId === "string")
                        $util.base64.decode(object.screenId, message.screenId = $util.newBuffer($util.base64.length(object.screenId)), 0);
                    else if (object.screenId.length >= 0)
                        message.screenId = object.screenId;
                return message;
            };

            /**
             * Creates a plain object from a PendingCalls message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.PendingCalls
             * @static
             * @param {mediflow.v4.PendingCalls} message PendingCalls
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PendingCalls.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.payload = [];
                if (message.payload && message.payload.length) {
                    object.payload = $Array(message.payload.length);
                    for (let j = 0; j < message.payload.length; ++j)
                        object.payload[j] = $root.mediflow.v4.Call.toObject(message.payload[j], options, _depth + 1);
                }
                if (message.nextCursor != null && $Object.hasOwnProperty.call(message, "nextCursor"))
                    object.nextCursor = message.nextCursor;
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                    object.requestId = options.bytes === $String ? $util.base64.encode(message.requestId, 0, message.requestId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.requestId) : message.requestId;
                if (message.screenId != null && $Object.hasOwnProperty.call(message, "screenId"))
                    object.screenId = options.bytes === $String ? $util.base64.encode(message.screenId, 0, message.screenId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.screenId) : message.screenId;
                return object;
            };

            /**
             * Converts this PendingCalls to JSON.
             * @function toJSON
             * @memberof mediflow.v4.PendingCalls
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PendingCalls.prototype.toJSON = function() {
                return PendingCalls.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PendingCalls
             * @function getTypeUrl
             * @memberof mediflow.v4.PendingCalls
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PendingCalls.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.PendingCalls";
            };

            return PendingCalls;
        })();

        v4.CallFrame = (function() {

            /**
             * Properties of a CallFrame.
             * @typedef {Object} mediflow.v4.CallFrame.$Properties
             * @property {Array.<mediflow.v4.Call.$Properties>|null} [payload] CallFrame payload
             * @property {number|null} [page] CallFrame page
             * @property {number|null} [pageSize] CallFrame pageSize
             * @property {number|Long|null} [total] CallFrame total
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a CallFrame.
             * @memberof mediflow.v4
             * @interface ICallFrame
             * @augments mediflow.v4.CallFrame.$Properties
             * @deprecated Use mediflow.v4.CallFrame.$Properties instead.
             */

            /**
             * Shape of a CallFrame.
             * @typedef {mediflow.v4.CallFrame.$Properties} mediflow.v4.CallFrame.$Shape
             */

            /**
             * Constructs a new CallFrame.
             * @memberof mediflow.v4
             * @classdesc Represents a CallFrame.
             * @constructor
             * @param {mediflow.v4.CallFrame.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const CallFrame = function (properties) {
                this.payload = [];
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * CallFrame payload.
             * @member {Array.<mediflow.v4.Call.$Properties>} payload
             * @memberof mediflow.v4.CallFrame
             * @instance
             */
            CallFrame.prototype.payload = $util.emptyArray;

            /**
             * CallFrame page.
             * @member {number|null|undefined} page
             * @memberof mediflow.v4.CallFrame
             * @instance
             */
            CallFrame.prototype.page = null;

            /**
             * CallFrame pageSize.
             * @member {number|null|undefined} pageSize
             * @memberof mediflow.v4.CallFrame
             * @instance
             */
            CallFrame.prototype.pageSize = null;

            /**
             * CallFrame total.
             * @member {number|Long|null|undefined} total
             * @memberof mediflow.v4.CallFrame
             * @instance
             */
            CallFrame.prototype.total = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(CallFrame.prototype, "_page", {
                get: $util.oneOfGetter($oneOfFields = ["page"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(CallFrame.prototype, "_pageSize", {
                get: $util.oneOfGetter($oneOfFields = ["pageSize"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(CallFrame.prototype, "_total", {
                get: $util.oneOfGetter($oneOfFields = ["total"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new CallFrame instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.CallFrame
             * @static
             * @param {mediflow.v4.CallFrame.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.CallFrame} CallFrame instance
             * @type {{
             *   (properties: mediflow.v4.CallFrame.$Shape): mediflow.v4.CallFrame & mediflow.v4.CallFrame.$Shape;
             *   (properties?: mediflow.v4.CallFrame.$Properties): mediflow.v4.CallFrame;
             * }}
             */
            CallFrame.create = function(properties) {
                return new CallFrame(properties);
            };

            /**
             * Encodes the specified CallFrame message. Does not implicitly {@link mediflow.v4.CallFrame.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.CallFrame
             * @static
             * @param {mediflow.v4.CallFrame.$Properties} message CallFrame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CallFrame.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.payload != null && message.payload.length)
                    for (let i = 0; i < message.payload.length; ++i)
                        $root.mediflow.v4.Call.encode(message.payload[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.page != null && $Object.hasOwnProperty.call(message, "page"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.page);
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.pageSize);
                if (message.total != null && $Object.hasOwnProperty.call(message, "total"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.total);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a CallFrame message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.CallFrame
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.CallFrame & mediflow.v4.CallFrame.$Shape} CallFrame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CallFrame.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.CallFrame();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.payload && message.payload.length))
                                message.payload = [];
                            message.payload.push($root.mediflow.v4.Call.decode(reader, reader.size(), $undefined, _depth + 1));
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.page = reader.uint32();
                            message._page = "page";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.pageSize = reader.uint32();
                            message._pageSize = "pageSize";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.total = reader.uint64();
                            message._total = "total";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a CallFrame message.
             * @function verify
             * @memberof mediflow.v4.CallFrame
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CallFrame.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.payload != null && $Object.hasOwnProperty.call(message, "payload")) {
                    if (!$Array.isArray(message.payload))
                        return "payload: array expected";
                    for (let i = 0; i < message.payload.length; ++i) {
                        let error = $root.mediflow.v4.Call.verify(message.payload[i], _depth + 1);
                        if (error)
                            return "payload." + error;
                    }
                }
                if (message.page != null && $Object.hasOwnProperty.call(message, "page")) {
                    properties._page = 1;
                    if (!$util.isInteger(message.page))
                        return "page: integer expected";
                }
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize")) {
                    properties._pageSize = 1;
                    if (!$util.isInteger(message.pageSize))
                        return "pageSize: integer expected";
                }
                if (message.total != null && $Object.hasOwnProperty.call(message, "total")) {
                    properties._total = 1;
                    if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                        return "total: integer|Long expected";
                }
                return null;
            };

            /**
             * Creates a CallFrame message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.CallFrame
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.CallFrame} CallFrame
             */
            CallFrame.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.CallFrame)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.CallFrame: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.CallFrame();
                if (object.payload) {
                    if (!$Array.isArray(object.payload))
                        throw $TypeError(".mediflow.v4.CallFrame.payload: array expected");
                    message.payload = $Array(object.payload.length);
                    for (let i = 0; i < object.payload.length; ++i) {
                        if (!$util.isObject(object.payload[i]))
                            throw $TypeError(".mediflow.v4.CallFrame.payload: object expected");
                        message.payload[i] = $root.mediflow.v4.Call.fromObject(object.payload[i], _depth + 1);
                    }
                }
                if (object.page != null)
                    message.page = object.page >>> 0;
                if (object.pageSize != null)
                    message.pageSize = object.pageSize >>> 0;
                if (object.total != null)
                    if ($util.Long)
                        message.total = $util.Long.fromValue(object.total, true);
                    else if (typeof object.total === "string")
                        message.total = $parseInt(object.total, 10);
                    else if (typeof object.total === "number")
                        message.total = object.total;
                    else if (typeof object.total === "object")
                        message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a CallFrame message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.CallFrame
             * @static
             * @param {mediflow.v4.CallFrame} message CallFrame
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CallFrame.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.payload = [];
                if (message.payload && message.payload.length) {
                    object.payload = $Array(message.payload.length);
                    for (let j = 0; j < message.payload.length; ++j)
                        object.payload[j] = $root.mediflow.v4.Call.toObject(message.payload[j], options, _depth + 1);
                }
                if (message.page != null && $Object.hasOwnProperty.call(message, "page"))
                    object.page = message.page;
                if (message.pageSize != null && $Object.hasOwnProperty.call(message, "pageSize"))
                    object.pageSize = message.pageSize;
                if (message.total != null && $Object.hasOwnProperty.call(message, "total"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.total = typeof message.total === "number" ? $BigInt(message.total) : $util.Long.fromBits(message.total.low >>> 0, message.total.high >>> 0, true).toBigInt();
                    else if (typeof message.total === "number")
                        object.total = options.longs === $String ? $String(message.total) : message.total;
                    else
                        object.total = options.longs === $String ? $util.Long.prototype.toString.call(message.total) : options.longs === $Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber(true) : message.total;
                return object;
            };

            /**
             * Converts this CallFrame to JSON.
             * @function toJSON
             * @memberof mediflow.v4.CallFrame
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CallFrame.prototype.toJSON = function() {
                return CallFrame.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for CallFrame
             * @function getTypeUrl
             * @memberof mediflow.v4.CallFrame
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            CallFrame.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.CallFrame";
            };

            return CallFrame;
        })();

        v4.Failure = (function() {

            /**
             * Properties of a Failure.
             * @typedef {Object} mediflow.v4.Failure.$Properties
             * @property {Uint8Array|null} [requestId] Failure requestId
             * @property {Uint8Array|null} [eventId] Failure eventId
             * @property {string|null} [message] Failure message
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Failure.
             * @memberof mediflow.v4
             * @interface IFailure
             * @augments mediflow.v4.Failure.$Properties
             * @deprecated Use mediflow.v4.Failure.$Properties instead.
             */

            /**
             * Shape of a Failure.
             * @typedef {mediflow.v4.Failure.$Properties} mediflow.v4.Failure.$Shape
             */

            /**
             * Constructs a new Failure.
             * @memberof mediflow.v4
             * @classdesc Represents a Failure.
             * @constructor
             * @param {mediflow.v4.Failure.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Failure = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Failure requestId.
             * @member {Uint8Array|null|undefined} requestId
             * @memberof mediflow.v4.Failure
             * @instance
             */
            Failure.prototype.requestId = null;

            /**
             * Failure eventId.
             * @member {Uint8Array|null|undefined} eventId
             * @memberof mediflow.v4.Failure
             * @instance
             */
            Failure.prototype.eventId = null;

            /**
             * Failure message.
             * @member {string|null|undefined} message
             * @memberof mediflow.v4.Failure
             * @instance
             */
            Failure.prototype.message = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Failure.prototype, "_requestId", {
                get: $util.oneOfGetter($oneOfFields = ["requestId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Failure.prototype, "_eventId", {
                get: $util.oneOfGetter($oneOfFields = ["eventId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Failure.prototype, "_message", {
                get: $util.oneOfGetter($oneOfFields = ["message"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Failure instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Failure
             * @static
             * @param {mediflow.v4.Failure.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Failure} Failure instance
             * @type {{
             *   (properties: mediflow.v4.Failure.$Shape): mediflow.v4.Failure & mediflow.v4.Failure.$Shape;
             *   (properties?: mediflow.v4.Failure.$Properties): mediflow.v4.Failure;
             * }}
             */
            Failure.create = function(properties) {
                return new Failure(properties);
            };

            /**
             * Encodes the specified Failure message. Does not implicitly {@link mediflow.v4.Failure.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Failure
             * @static
             * @param {mediflow.v4.Failure.$Properties} message Failure message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Failure.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.requestId);
                if (message.eventId != null && $Object.hasOwnProperty.call(message, "eventId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.eventId);
                if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Failure message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Failure
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Failure & mediflow.v4.Failure.$Shape} Failure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Failure.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Failure();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.requestId = reader.bytes();
                            message._requestId = "requestId";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.eventId = reader.bytes();
                            message._eventId = "eventId";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.message = reader.stringVerify();
                            message._message = "message";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Failure message.
             * @function verify
             * @memberof mediflow.v4.Failure
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Failure.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId")) {
                    properties._requestId = 1;
                    if (!(message.requestId && typeof message.requestId.length === "number" || $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                }
                if (message.eventId != null && $Object.hasOwnProperty.call(message, "eventId")) {
                    properties._eventId = 1;
                    if (!(message.eventId && typeof message.eventId.length === "number" || $util.isString(message.eventId)))
                        return "eventId: buffer expected";
                }
                if (message.message != null && $Object.hasOwnProperty.call(message, "message")) {
                    properties._message = 1;
                    if (!$util.isString(message.message))
                        return "message: string expected";
                }
                return null;
            };

            /**
             * Creates a Failure message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Failure
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Failure} Failure
             */
            Failure.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Failure)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Failure: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Failure();
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, message.requestId = $util.newBuffer($util.base64.length(object.requestId)), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, message.eventId = $util.newBuffer($util.base64.length(object.eventId)), 0);
                    else if (object.eventId.length >= 0)
                        message.eventId = object.eventId;
                if (object.message != null)
                    message.message = $String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a Failure message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Failure
             * @static
             * @param {mediflow.v4.Failure} message Failure
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Failure.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                    object.requestId = options.bytes === $String ? $util.base64.encode(message.requestId, 0, message.requestId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.requestId) : message.requestId;
                if (message.eventId != null && $Object.hasOwnProperty.call(message, "eventId"))
                    object.eventId = options.bytes === $String ? $util.base64.encode(message.eventId, 0, message.eventId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.eventId) : message.eventId;
                if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Failure to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Failure
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Failure.prototype.toJSON = function() {
                return Failure.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Failure
             * @function getTypeUrl
             * @memberof mediflow.v4.Failure
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Failure.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Failure";
            };

            return Failure;
        })();

        v4.Empty = (function() {

            /**
             * Properties of an Empty.
             * @typedef {Object} mediflow.v4.Empty.$Properties
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an Empty.
             * @memberof mediflow.v4
             * @interface IEmpty
             * @augments mediflow.v4.Empty.$Properties
             * @deprecated Use mediflow.v4.Empty.$Properties instead.
             */

            /**
             * Shape of an Empty.
             * @typedef {mediflow.v4.Empty.$Properties} mediflow.v4.Empty.$Shape
             */

            /**
             * Constructs a new Empty.
             * @memberof mediflow.v4
             * @classdesc Represents an Empty.
             * @constructor
             * @param {mediflow.v4.Empty.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Empty = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Empty
             * @static
             * @param {mediflow.v4.Empty.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Empty} Empty instance
             * @type {{
             *   (properties: mediflow.v4.Empty.$Shape): mediflow.v4.Empty & mediflow.v4.Empty.$Shape;
             *   (properties?: mediflow.v4.Empty.$Properties): mediflow.v4.Empty;
             * }}
             */
            Empty.create = function(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link mediflow.v4.Empty.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Empty
             * @static
             * @param {mediflow.v4.Empty.$Properties} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Empty & mediflow.v4.Empty.$Shape} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Empty();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    reader.skipType(tag & 7, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof mediflow.v4.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Empty} Empty
             */
            Empty.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Empty)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Empty: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                return new $root.mediflow.v4.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Empty
             * @static
             * @param {mediflow.v4.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function () {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function() {
                return Empty.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Empty
             * @function getTypeUrl
             * @memberof mediflow.v4.Empty
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Empty.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Empty";
            };

            return Empty;
        })();

        v4.Frame = (function() {

            /**
             * Properties of a Frame.
             * @typedef {Object} mediflow.v4.Frame.$Properties
             * @property {mediflow.v4.Auth.$Properties|null} [auth] Frame auth
             * @property {mediflow.v4.Sync.$Properties|null} [sync] Frame sync
             * @property {mediflow.v4.Consume.$Properties|null} [consume] Frame consume
             * @property {mediflow.v4.Playback.$Properties|null} [playback] Frame playback
             * @property {mediflow.v4.PendingSync.$Properties|null} [pendingSync] Frame pendingSync
             * @property {mediflow.v4.Empty.$Properties|null} [ping] Frame ping
             * @property {mediflow.v4.Snapshot.$Properties|null} [snapshot] Frame snapshot
             * @property {mediflow.v4.CallFrame.$Properties|null} [calls] Frame calls
             * @property {mediflow.v4.Consumption.$Properties|null} [consumeResult] Frame consumeResult
             * @property {mediflow.v4.PlaybackResult.$Properties|null} [playbackResult] Frame playbackResult
             * @property {mediflow.v4.PendingCalls.$Properties|null} [pendingCalls] Frame pendingCalls
             * @property {mediflow.v4.Failure.$Properties|null} [error] Frame error
             * @property {mediflow.v4.Empty.$Properties|null} [pong] Frame pong
             * @property {"auth"|"sync"|"consume"|"playback"|"pendingSync"|"ping"|"snapshot"|"calls"|"consumeResult"|"playbackResult"|"pendingCalls"|"error"|"pong"} [body] Frame body
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Frame.
             * @memberof mediflow.v4
             * @interface IFrame
             * @augments mediflow.v4.Frame.$Properties
             * @deprecated Use mediflow.v4.Frame.$Properties instead.
             */

            /**
             * Narrowed shape of a Frame.
             * @typedef {{
             *   auth?: mediflow.v4.Auth.$Shape|null;
             *   sync?: mediflow.v4.Sync.$Shape|null;
             *   consume?: mediflow.v4.Consume.$Shape|null;
             *   playback?: mediflow.v4.Playback.$Shape|null;
             *   pendingSync?: mediflow.v4.PendingSync.$Shape|null;
             *   ping?: mediflow.v4.Empty.$Shape|null;
             *   snapshot?: mediflow.v4.Snapshot.$Shape|null;
             *   calls?: mediflow.v4.CallFrame.$Shape|null;
             *   consumeResult?: mediflow.v4.Consumption.$Shape|null;
             *   playbackResult?: mediflow.v4.PlaybackResult.$Shape|null;
             *   pendingCalls?: mediflow.v4.PendingCalls.$Shape|null;
             *   error?: mediflow.v4.Failure.$Shape|null;
             *   pong?: mediflow.v4.Empty.$Shape|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ body?: undefined; auth?: null; sync?: null; consume?: null; playback?: null; pendingSync?: null; ping?: null; snapshot?: null; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error?: null; pong?: null }|{ body?: "auth"; auth: mediflow.v4.Auth.$Shape; sync?: null; consume?: null; playback?: null; pendingSync?: null; ping?: null; snapshot?: null; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error?: null; pong?: null }|{ body?: "sync"; auth?: null; sync: mediflow.v4.Sync.$Shape; consume?: null; playback?: null; pendingSync?: null; ping?: null; snapshot?: null; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error?: null; pong?: null }|{ body?: "consume"; auth?: null; sync?: null; consume: mediflow.v4.Consume.$Shape; playback?: null; pendingSync?: null; ping?: null; snapshot?: null; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error?: null; pong?: null }|{ body?: "playback"; auth?: null; sync?: null; consume?: null; playback: mediflow.v4.Playback.$Shape; pendingSync?: null; ping?: null; snapshot?: null; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error?: null; pong?: null }|{ body?: "pendingSync"; auth?: null; sync?: null; consume?: null; playback?: null; pendingSync: mediflow.v4.PendingSync.$Shape; ping?: null; snapshot?: null; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error?: null; pong?: null }|{ body?: "ping"; auth?: null; sync?: null; consume?: null; playback?: null; pendingSync?: null; ping: mediflow.v4.Empty.$Shape; snapshot?: null; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error?: null; pong?: null }|{ body?: "snapshot"; auth?: null; sync?: null; consume?: null; playback?: null; pendingSync?: null; ping?: null; snapshot: mediflow.v4.Snapshot.$Shape; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error?: null; pong?: null }|{ body?: "calls"; auth?: null; sync?: null; consume?: null; playback?: null; pendingSync?: null; ping?: null; snapshot?: null; calls: mediflow.v4.CallFrame.$Shape; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error?: null; pong?: null }|{ body?: "consumeResult"; auth?: null; sync?: null; consume?: null; playback?: null; pendingSync?: null; ping?: null; snapshot?: null; calls?: null; consumeResult: mediflow.v4.Consumption.$Shape; playbackResult?: null; pendingCalls?: null; error?: null; pong?: null }|{ body?: "playbackResult"; auth?: null; sync?: null; consume?: null; playback?: null; pendingSync?: null; ping?: null; snapshot?: null; calls?: null; consumeResult?: null; playbackResult: mediflow.v4.PlaybackResult.$Shape; pendingCalls?: null; error?: null; pong?: null }|{ body?: "pendingCalls"; auth?: null; sync?: null; consume?: null; playback?: null; pendingSync?: null; ping?: null; snapshot?: null; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls: mediflow.v4.PendingCalls.$Shape; error?: null; pong?: null }|{ body?: "error"; auth?: null; sync?: null; consume?: null; playback?: null; pendingSync?: null; ping?: null; snapshot?: null; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error: mediflow.v4.Failure.$Shape; pong?: null }|{ body?: "pong"; auth?: null; sync?: null; consume?: null; playback?: null; pendingSync?: null; ping?: null; snapshot?: null; calls?: null; consumeResult?: null; playbackResult?: null; pendingCalls?: null; error?: null; pong: mediflow.v4.Empty.$Shape })
             * )} mediflow.v4.Frame.$Shape
             */

            /**
             * Constructs a new Frame.
             * @memberof mediflow.v4
             * @classdesc Represents a Frame.
             * @constructor
             * @param {mediflow.v4.Frame.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Frame = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Frame auth.
             * @member {mediflow.v4.Auth.$Properties|null|undefined} auth
             * @memberof mediflow.v4.Frame
             * @instance
             */
            Frame.prototype.auth = null;

            /**
             * Frame sync.
             * @member {mediflow.v4.Sync.$Properties|null|undefined} sync
             * @memberof mediflow.v4.Frame
             * @instance
             */
            Frame.prototype.sync = null;

            /**
             * Frame consume.
             * @member {mediflow.v4.Consume.$Properties|null|undefined} consume
             * @memberof mediflow.v4.Frame
             * @instance
             */
            Frame.prototype.consume = null;

            /**
             * Frame playback.
             * @member {mediflow.v4.Playback.$Properties|null|undefined} playback
             * @memberof mediflow.v4.Frame
             * @instance
             */
            Frame.prototype.playback = null;

            /**
             * Frame pendingSync.
             * @member {mediflow.v4.PendingSync.$Properties|null|undefined} pendingSync
             * @memberof mediflow.v4.Frame
             * @instance
             */
            Frame.prototype.pendingSync = null;

            /**
             * Frame ping.
             * @member {mediflow.v4.Empty.$Properties|null|undefined} ping
             * @memberof mediflow.v4.Frame
             * @instance
             */
            Frame.prototype.ping = null;

            /**
             * Frame snapshot.
             * @member {mediflow.v4.Snapshot.$Properties|null|undefined} snapshot
             * @memberof mediflow.v4.Frame
             * @instance
             */
            Frame.prototype.snapshot = null;

            /**
             * Frame calls.
             * @member {mediflow.v4.CallFrame.$Properties|null|undefined} calls
             * @memberof mediflow.v4.Frame
             * @instance
             */
            Frame.prototype.calls = null;

            /**
             * Frame consumeResult.
             * @member {mediflow.v4.Consumption.$Properties|null|undefined} consumeResult
             * @memberof mediflow.v4.Frame
             * @instance
             */
            Frame.prototype.consumeResult = null;

            /**
             * Frame playbackResult.
             * @member {mediflow.v4.PlaybackResult.$Properties|null|undefined} playbackResult
             * @memberof mediflow.v4.Frame
             * @instance
             */
            Frame.prototype.playbackResult = null;

            /**
             * Frame pendingCalls.
             * @member {mediflow.v4.PendingCalls.$Properties|null|undefined} pendingCalls
             * @memberof mediflow.v4.Frame
             * @instance
             */
            Frame.prototype.pendingCalls = null;

            /**
             * Frame error.
             * @member {mediflow.v4.Failure.$Properties|null|undefined} error
             * @memberof mediflow.v4.Frame
             * @instance
             */
            Frame.prototype.error = null;

            /**
             * Frame pong.
             * @member {mediflow.v4.Empty.$Properties|null|undefined} pong
             * @memberof mediflow.v4.Frame
             * @instance
             */
            Frame.prototype.pong = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Frame body.
             * @member {"auth"|"sync"|"consume"|"playback"|"pendingSync"|"ping"|"snapshot"|"calls"|"consumeResult"|"playbackResult"|"pendingCalls"|"error"|"pong"|undefined} body
             * @memberof mediflow.v4.Frame
             * @instance
             */
            $Object.defineProperty(Frame.prototype, "body", {
                get: $util.oneOfGetter($oneOfFields = ["auth", "sync", "consume", "playback", "pendingSync", "ping", "snapshot", "calls", "consumeResult", "playbackResult", "pendingCalls", "error", "pong"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Frame instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Frame
             * @static
             * @param {mediflow.v4.Frame.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Frame} Frame instance
             * @type {{
             *   (properties: mediflow.v4.Frame.$Shape): mediflow.v4.Frame & mediflow.v4.Frame.$Shape;
             *   (properties?: mediflow.v4.Frame.$Properties): mediflow.v4.Frame;
             * }}
             */
            Frame.create = function(properties) {
                return new Frame(properties);
            };

            /**
             * Encodes the specified Frame message. Does not implicitly {@link mediflow.v4.Frame.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Frame
             * @static
             * @param {mediflow.v4.Frame.$Properties} message Frame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Frame.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.auth != null && $Object.hasOwnProperty.call(message, "auth"))
                    $root.mediflow.v4.Auth.encode(message.auth, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.sync != null && $Object.hasOwnProperty.call(message, "sync"))
                    $root.mediflow.v4.Sync.encode(message.sync, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.consume != null && $Object.hasOwnProperty.call(message, "consume"))
                    $root.mediflow.v4.Consume.encode(message.consume, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.playback != null && $Object.hasOwnProperty.call(message, "playback"))
                    $root.mediflow.v4.Playback.encode(message.playback, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                if (message.pendingSync != null && $Object.hasOwnProperty.call(message, "pendingSync"))
                    $root.mediflow.v4.PendingSync.encode(message.pendingSync, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
                if (message.ping != null && $Object.hasOwnProperty.call(message, "ping"))
                    $root.mediflow.v4.Empty.encode(message.ping, writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
                if (message.snapshot != null && $Object.hasOwnProperty.call(message, "snapshot"))
                    $root.mediflow.v4.Snapshot.encode(message.snapshot, writer.uint32(/* id 10, wireType 2 =*/82).fork(), _depth + 1).ldelim();
                if (message.calls != null && $Object.hasOwnProperty.call(message, "calls"))
                    $root.mediflow.v4.CallFrame.encode(message.calls, writer.uint32(/* id 11, wireType 2 =*/90).fork(), _depth + 1).ldelim();
                if (message.consumeResult != null && $Object.hasOwnProperty.call(message, "consumeResult"))
                    $root.mediflow.v4.Consumption.encode(message.consumeResult, writer.uint32(/* id 12, wireType 2 =*/98).fork(), _depth + 1).ldelim();
                if (message.playbackResult != null && $Object.hasOwnProperty.call(message, "playbackResult"))
                    $root.mediflow.v4.PlaybackResult.encode(message.playbackResult, writer.uint32(/* id 13, wireType 2 =*/106).fork(), _depth + 1).ldelim();
                if (message.pendingCalls != null && $Object.hasOwnProperty.call(message, "pendingCalls"))
                    $root.mediflow.v4.PendingCalls.encode(message.pendingCalls, writer.uint32(/* id 14, wireType 2 =*/114).fork(), _depth + 1).ldelim();
                if (message.error != null && $Object.hasOwnProperty.call(message, "error"))
                    $root.mediflow.v4.Failure.encode(message.error, writer.uint32(/* id 15, wireType 2 =*/122).fork(), _depth + 1).ldelim();
                if (message.pong != null && $Object.hasOwnProperty.call(message, "pong"))
                    $root.mediflow.v4.Empty.encode(message.pong, writer.uint32(/* id 16, wireType 2 =*/130).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Frame message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Frame
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Frame & mediflow.v4.Frame.$Shape} Frame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Frame.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Frame();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.auth = $root.mediflow.v4.Auth.decode(reader, reader.size(), $undefined, _depth + 1, message.auth);
                            message.body = "auth";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.sync = $root.mediflow.v4.Sync.decode(reader, reader.size(), $undefined, _depth + 1, message.sync);
                            message.body = "sync";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.consume = $root.mediflow.v4.Consume.decode(reader, reader.size(), $undefined, _depth + 1, message.consume);
                            message.body = "consume";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.playback = $root.mediflow.v4.Playback.decode(reader, reader.size(), $undefined, _depth + 1, message.playback);
                            message.body = "playback";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.pendingSync = $root.mediflow.v4.PendingSync.decode(reader, reader.size(), $undefined, _depth + 1, message.pendingSync);
                            message.body = "pendingSync";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            message.ping = $root.mediflow.v4.Empty.decode(reader, reader.size(), $undefined, _depth + 1, message.ping);
                            message.body = "ping";
                            continue;
                        }
                    case 10: {
                            if (wireType !== 2)
                                break;
                            message.snapshot = $root.mediflow.v4.Snapshot.decode(reader, reader.size(), $undefined, _depth + 1, message.snapshot);
                            message.body = "snapshot";
                            continue;
                        }
                    case 11: {
                            if (wireType !== 2)
                                break;
                            message.calls = $root.mediflow.v4.CallFrame.decode(reader, reader.size(), $undefined, _depth + 1, message.calls);
                            message.body = "calls";
                            continue;
                        }
                    case 12: {
                            if (wireType !== 2)
                                break;
                            message.consumeResult = $root.mediflow.v4.Consumption.decode(reader, reader.size(), $undefined, _depth + 1, message.consumeResult);
                            message.body = "consumeResult";
                            continue;
                        }
                    case 13: {
                            if (wireType !== 2)
                                break;
                            message.playbackResult = $root.mediflow.v4.PlaybackResult.decode(reader, reader.size(), $undefined, _depth + 1, message.playbackResult);
                            message.body = "playbackResult";
                            continue;
                        }
                    case 14: {
                            if (wireType !== 2)
                                break;
                            message.pendingCalls = $root.mediflow.v4.PendingCalls.decode(reader, reader.size(), $undefined, _depth + 1, message.pendingCalls);
                            message.body = "pendingCalls";
                            continue;
                        }
                    case 15: {
                            if (wireType !== 2)
                                break;
                            message.error = $root.mediflow.v4.Failure.decode(reader, reader.size(), $undefined, _depth + 1, message.error);
                            message.body = "error";
                            continue;
                        }
                    case 16: {
                            if (wireType !== 2)
                                break;
                            message.pong = $root.mediflow.v4.Empty.decode(reader, reader.size(), $undefined, _depth + 1, message.pong);
                            message.body = "pong";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Frame message.
             * @function verify
             * @memberof mediflow.v4.Frame
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Frame.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.auth != null && $Object.hasOwnProperty.call(message, "auth")) {
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Auth.verify(message.auth, _depth + 1);
                        if (error)
                            return "auth." + error;
                    }
                }
                if (message.sync != null && $Object.hasOwnProperty.call(message, "sync")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Sync.verify(message.sync, _depth + 1);
                        if (error)
                            return "sync." + error;
                    }
                }
                if (message.consume != null && $Object.hasOwnProperty.call(message, "consume")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Consume.verify(message.consume, _depth + 1);
                        if (error)
                            return "consume." + error;
                    }
                }
                if (message.playback != null && $Object.hasOwnProperty.call(message, "playback")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Playback.verify(message.playback, _depth + 1);
                        if (error)
                            return "playback." + error;
                    }
                }
                if (message.pendingSync != null && $Object.hasOwnProperty.call(message, "pendingSync")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.PendingSync.verify(message.pendingSync, _depth + 1);
                        if (error)
                            return "pendingSync." + error;
                    }
                }
                if (message.ping != null && $Object.hasOwnProperty.call(message, "ping")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Empty.verify(message.ping, _depth + 1);
                        if (error)
                            return "ping." + error;
                    }
                }
                if (message.snapshot != null && $Object.hasOwnProperty.call(message, "snapshot")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Snapshot.verify(message.snapshot, _depth + 1);
                        if (error)
                            return "snapshot." + error;
                    }
                }
                if (message.calls != null && $Object.hasOwnProperty.call(message, "calls")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.CallFrame.verify(message.calls, _depth + 1);
                        if (error)
                            return "calls." + error;
                    }
                }
                if (message.consumeResult != null && $Object.hasOwnProperty.call(message, "consumeResult")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Consumption.verify(message.consumeResult, _depth + 1);
                        if (error)
                            return "consumeResult." + error;
                    }
                }
                if (message.playbackResult != null && $Object.hasOwnProperty.call(message, "playbackResult")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.PlaybackResult.verify(message.playbackResult, _depth + 1);
                        if (error)
                            return "playbackResult." + error;
                    }
                }
                if (message.pendingCalls != null && $Object.hasOwnProperty.call(message, "pendingCalls")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.PendingCalls.verify(message.pendingCalls, _depth + 1);
                        if (error)
                            return "pendingCalls." + error;
                    }
                }
                if (message.error != null && $Object.hasOwnProperty.call(message, "error")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Failure.verify(message.error, _depth + 1);
                        if (error)
                            return "error." + error;
                    }
                }
                if (message.pong != null && $Object.hasOwnProperty.call(message, "pong")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Empty.verify(message.pong, _depth + 1);
                        if (error)
                            return "pong." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Frame message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Frame
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Frame} Frame
             */
            Frame.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Frame)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Frame: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Frame();
                if (object.auth != null) {
                    if (!$util.isObject(object.auth))
                        throw $TypeError(".mediflow.v4.Frame.auth: object expected");
                    message.auth = $root.mediflow.v4.Auth.fromObject(object.auth, _depth + 1);
                }
                if (object.sync != null) {
                    if (!$util.isObject(object.sync))
                        throw $TypeError(".mediflow.v4.Frame.sync: object expected");
                    message.sync = $root.mediflow.v4.Sync.fromObject(object.sync, _depth + 1);
                }
                if (object.consume != null) {
                    if (!$util.isObject(object.consume))
                        throw $TypeError(".mediflow.v4.Frame.consume: object expected");
                    message.consume = $root.mediflow.v4.Consume.fromObject(object.consume, _depth + 1);
                }
                if (object.playback != null) {
                    if (!$util.isObject(object.playback))
                        throw $TypeError(".mediflow.v4.Frame.playback: object expected");
                    message.playback = $root.mediflow.v4.Playback.fromObject(object.playback, _depth + 1);
                }
                if (object.pendingSync != null) {
                    if (!$util.isObject(object.pendingSync))
                        throw $TypeError(".mediflow.v4.Frame.pendingSync: object expected");
                    message.pendingSync = $root.mediflow.v4.PendingSync.fromObject(object.pendingSync, _depth + 1);
                }
                if (object.ping != null) {
                    if (!$util.isObject(object.ping))
                        throw $TypeError(".mediflow.v4.Frame.ping: object expected");
                    message.ping = $root.mediflow.v4.Empty.fromObject(object.ping, _depth + 1);
                }
                if (object.snapshot != null) {
                    if (!$util.isObject(object.snapshot))
                        throw $TypeError(".mediflow.v4.Frame.snapshot: object expected");
                    message.snapshot = $root.mediflow.v4.Snapshot.fromObject(object.snapshot, _depth + 1);
                }
                if (object.calls != null) {
                    if (!$util.isObject(object.calls))
                        throw $TypeError(".mediflow.v4.Frame.calls: object expected");
                    message.calls = $root.mediflow.v4.CallFrame.fromObject(object.calls, _depth + 1);
                }
                if (object.consumeResult != null) {
                    if (!$util.isObject(object.consumeResult))
                        throw $TypeError(".mediflow.v4.Frame.consumeResult: object expected");
                    message.consumeResult = $root.mediflow.v4.Consumption.fromObject(object.consumeResult, _depth + 1);
                }
                if (object.playbackResult != null) {
                    if (!$util.isObject(object.playbackResult))
                        throw $TypeError(".mediflow.v4.Frame.playbackResult: object expected");
                    message.playbackResult = $root.mediflow.v4.PlaybackResult.fromObject(object.playbackResult, _depth + 1);
                }
                if (object.pendingCalls != null) {
                    if (!$util.isObject(object.pendingCalls))
                        throw $TypeError(".mediflow.v4.Frame.pendingCalls: object expected");
                    message.pendingCalls = $root.mediflow.v4.PendingCalls.fromObject(object.pendingCalls, _depth + 1);
                }
                if (object.error != null) {
                    if (!$util.isObject(object.error))
                        throw $TypeError(".mediflow.v4.Frame.error: object expected");
                    message.error = $root.mediflow.v4.Failure.fromObject(object.error, _depth + 1);
                }
                if (object.pong != null) {
                    if (!$util.isObject(object.pong))
                        throw $TypeError(".mediflow.v4.Frame.pong: object expected");
                    message.pong = $root.mediflow.v4.Empty.fromObject(object.pong, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a Frame message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Frame
             * @static
             * @param {mediflow.v4.Frame} message Frame
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Frame.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.auth != null && $Object.hasOwnProperty.call(message, "auth")) {
                    object.auth = $root.mediflow.v4.Auth.toObject(message.auth, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "auth";
                }
                if (message.sync != null && $Object.hasOwnProperty.call(message, "sync")) {
                    object.sync = $root.mediflow.v4.Sync.toObject(message.sync, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "sync";
                }
                if (message.consume != null && $Object.hasOwnProperty.call(message, "consume")) {
                    object.consume = $root.mediflow.v4.Consume.toObject(message.consume, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "consume";
                }
                if (message.playback != null && $Object.hasOwnProperty.call(message, "playback")) {
                    object.playback = $root.mediflow.v4.Playback.toObject(message.playback, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "playback";
                }
                if (message.pendingSync != null && $Object.hasOwnProperty.call(message, "pendingSync")) {
                    object.pendingSync = $root.mediflow.v4.PendingSync.toObject(message.pendingSync, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "pendingSync";
                }
                if (message.ping != null && $Object.hasOwnProperty.call(message, "ping")) {
                    object.ping = $root.mediflow.v4.Empty.toObject(message.ping, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "ping";
                }
                if (message.snapshot != null && $Object.hasOwnProperty.call(message, "snapshot")) {
                    object.snapshot = $root.mediflow.v4.Snapshot.toObject(message.snapshot, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "snapshot";
                }
                if (message.calls != null && $Object.hasOwnProperty.call(message, "calls")) {
                    object.calls = $root.mediflow.v4.CallFrame.toObject(message.calls, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "calls";
                }
                if (message.consumeResult != null && $Object.hasOwnProperty.call(message, "consumeResult")) {
                    object.consumeResult = $root.mediflow.v4.Consumption.toObject(message.consumeResult, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "consumeResult";
                }
                if (message.playbackResult != null && $Object.hasOwnProperty.call(message, "playbackResult")) {
                    object.playbackResult = $root.mediflow.v4.PlaybackResult.toObject(message.playbackResult, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "playbackResult";
                }
                if (message.pendingCalls != null && $Object.hasOwnProperty.call(message, "pendingCalls")) {
                    object.pendingCalls = $root.mediflow.v4.PendingCalls.toObject(message.pendingCalls, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "pendingCalls";
                }
                if (message.error != null && $Object.hasOwnProperty.call(message, "error")) {
                    object.error = $root.mediflow.v4.Failure.toObject(message.error, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "error";
                }
                if (message.pong != null && $Object.hasOwnProperty.call(message, "pong")) {
                    object.pong = $root.mediflow.v4.Empty.toObject(message.pong, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "pong";
                }
                return object;
            };

            /**
             * Converts this Frame to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Frame
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Frame.prototype.toJSON = function() {
                return Frame.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Frame
             * @function getTypeUrl
             * @memberof mediflow.v4.Frame
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Frame.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Frame";
            };

            return Frame;
        })();

        v4.Packet = (function() {

            /**
             * Properties of a Packet.
             * @typedef {Object} mediflow.v4.Packet.$Properties
             * @property {number|null} [protocolVersion] Packet protocolVersion
             * @property {mediflow.v4.Frame.$Properties|null} [frame] Packet frame
             * @property {mediflow.v4.Snapshot.$Properties|null} [snapshot] Packet snapshot
             * @property {mediflow.v4.Screen.$Properties|null} [screen] Packet screen
             * @property {mediflow.v4.Call.$Properties|null} [call] Packet call
             * @property {mediflow.v4.Consumption.$Properties|null} [consumption] Packet consumption
             * @property {mediflow.v4.Audit.$Properties|null} [audit] Packet audit
             * @property {mediflow.v4.Archive.$Properties|null} [archive] Packet archive
             * @property {mediflow.v4.CallPage.$Properties|null} [callPage] Packet callPage
             * @property {mediflow.v4.ScreenPage.$Properties|null} [screenPage] Packet screenPage
             * @property {mediflow.v4.ConsumptionPage.$Properties|null} [consumptionPage] Packet consumptionPage
             * @property {mediflow.v4.AuditPage.$Properties|null} [auditPage] Packet auditPage
             * @property {mediflow.v4.ArchivePage.$Properties|null} [archivePage] Packet archivePage
             * @property {mediflow.v4.HistoryPage.$Properties|null} [historyPage] Packet historyPage
             * @property {mediflow.v4.ScreenDetail.$Properties|null} [screenDetail] Packet screenDetail
             * @property {mediflow.v4.Overview.$Properties|null} [overview] Packet overview
             * @property {mediflow.v4.ArchiveBundle.$Properties|null} [archiveBundle] Packet archiveBundle
             * @property {mediflow.v4.Login.$Properties|null} [login] Packet login
             * @property {mediflow.v4.User.$Properties|null} [user] Packet user
             * @property {mediflow.v4.Publish.$Properties|null} [publish] Packet publish
             * @property {mediflow.v4.Consume.$Properties|null} [consume] Packet consume
             * @property {mediflow.v4.Playback.$Properties|null} [playback] Packet playback
             * @property {mediflow.v4.PlaybackResult.$Properties|null} [playbackResult] Packet playbackResult
             * @property {mediflow.v4.Result.$Properties|null} [result] Packet result
             * @property {mediflow.v4.Problem.$Properties|null} [problem] Packet problem
             * @property {mediflow.v4.Health.$Properties|null} [health] Packet health
             * @property {mediflow.v4.Retain.$Properties|null} [retain] Packet retain
             * @property {mediflow.v4.Retained.$Properties|null} [retained] Packet retained
             * @property {mediflow.v4.Empty.$Properties|null} [empty] Packet empty
             * @property {mediflow.v4.PendingCalls.$Properties|null} [pendingCalls] Packet pendingCalls
             * @property {mediflow.v4.CallTextSettings.$Properties|null} [callTextSettings] Packet callTextSettings
             * @property {"frame"|"snapshot"|"screen"|"call"|"consumption"|"audit"|"archive"|"callPage"|"screenPage"|"consumptionPage"|"auditPage"|"archivePage"|"historyPage"|"screenDetail"|"overview"|"archiveBundle"|"login"|"user"|"publish"|"consume"|"playback"|"playbackResult"|"result"|"problem"|"health"|"retain"|"retained"|"empty"|"pendingCalls"|"callTextSettings"} [body] Packet body
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Packet.
             * @memberof mediflow.v4
             * @interface IPacket
             * @augments mediflow.v4.Packet.$Properties
             * @deprecated Use mediflow.v4.Packet.$Properties instead.
             */

            /**
             * Narrowed shape of a Packet.
             * @typedef {{
             *   protocolVersion?: number|null;
             *   frame?: mediflow.v4.Frame.$Shape|null;
             *   snapshot?: mediflow.v4.Snapshot.$Shape|null;
             *   screen?: mediflow.v4.Screen.$Shape|null;
             *   call?: mediflow.v4.Call.$Shape|null;
             *   consumption?: mediflow.v4.Consumption.$Shape|null;
             *   audit?: mediflow.v4.Audit.$Shape|null;
             *   archive?: mediflow.v4.Archive.$Shape|null;
             *   callPage?: mediflow.v4.CallPage.$Shape|null;
             *   screenPage?: mediflow.v4.ScreenPage.$Shape|null;
             *   consumptionPage?: mediflow.v4.ConsumptionPage.$Shape|null;
             *   auditPage?: mediflow.v4.AuditPage.$Shape|null;
             *   archivePage?: mediflow.v4.ArchivePage.$Shape|null;
             *   historyPage?: mediflow.v4.HistoryPage.$Shape|null;
             *   screenDetail?: mediflow.v4.ScreenDetail.$Shape|null;
             *   overview?: mediflow.v4.Overview.$Shape|null;
             *   archiveBundle?: mediflow.v4.ArchiveBundle.$Shape|null;
             *   login?: mediflow.v4.Login.$Shape|null;
             *   user?: mediflow.v4.User.$Shape|null;
             *   publish?: mediflow.v4.Publish.$Shape|null;
             *   consume?: mediflow.v4.Consume.$Shape|null;
             *   playback?: mediflow.v4.Playback.$Shape|null;
             *   playbackResult?: mediflow.v4.PlaybackResult.$Shape|null;
             *   result?: mediflow.v4.Result.$Shape|null;
             *   problem?: mediflow.v4.Problem.$Shape|null;
             *   health?: mediflow.v4.Health.$Shape|null;
             *   retain?: mediflow.v4.Retain.$Shape|null;
             *   retained?: mediflow.v4.Retained.$Shape|null;
             *   empty?: mediflow.v4.Empty.$Shape|null;
             *   pendingCalls?: mediflow.v4.PendingCalls.$Shape|null;
             *   callTextSettings?: mediflow.v4.CallTextSettings.$Shape|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ body?: undefined; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "frame"; frame: mediflow.v4.Frame.$Shape; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "snapshot"; frame?: null; snapshot: mediflow.v4.Snapshot.$Shape; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "screen"; frame?: null; snapshot?: null; screen: mediflow.v4.Screen.$Shape; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "call"; frame?: null; snapshot?: null; screen?: null; call: mediflow.v4.Call.$Shape; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "consumption"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption: mediflow.v4.Consumption.$Shape; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "audit"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit: mediflow.v4.Audit.$Shape; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "archive"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive: mediflow.v4.Archive.$Shape; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "callPage"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage: mediflow.v4.CallPage.$Shape; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "screenPage"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage: mediflow.v4.ScreenPage.$Shape; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "consumptionPage"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage: mediflow.v4.ConsumptionPage.$Shape; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "auditPage"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage: mediflow.v4.AuditPage.$Shape; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "archivePage"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage: mediflow.v4.ArchivePage.$Shape; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "historyPage"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage: mediflow.v4.HistoryPage.$Shape; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "screenDetail"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail: mediflow.v4.ScreenDetail.$Shape; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "overview"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview: mediflow.v4.Overview.$Shape; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "archiveBundle"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle: mediflow.v4.ArchiveBundle.$Shape; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "login"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login: mediflow.v4.Login.$Shape; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "user"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user: mediflow.v4.User.$Shape; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "publish"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish: mediflow.v4.Publish.$Shape; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "consume"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume: mediflow.v4.Consume.$Shape; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "playback"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback: mediflow.v4.Playback.$Shape; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "playbackResult"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult: mediflow.v4.PlaybackResult.$Shape; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "result"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result: mediflow.v4.Result.$Shape; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "problem"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem: mediflow.v4.Problem.$Shape; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "health"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health: mediflow.v4.Health.$Shape; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "retain"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain: mediflow.v4.Retain.$Shape; retained?: null; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "retained"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained: mediflow.v4.Retained.$Shape; empty?: null; pendingCalls?: null; callTextSettings?: null }|{ body?: "empty"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty: mediflow.v4.Empty.$Shape; pendingCalls?: null; callTextSettings?: null }|{ body?: "pendingCalls"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls: mediflow.v4.PendingCalls.$Shape; callTextSettings?: null }|{ body?: "callTextSettings"; frame?: null; snapshot?: null; screen?: null; call?: null; consumption?: null; audit?: null; archive?: null; callPage?: null; screenPage?: null; consumptionPage?: null; auditPage?: null; archivePage?: null; historyPage?: null; screenDetail?: null; overview?: null; archiveBundle?: null; login?: null; user?: null; publish?: null; consume?: null; playback?: null; playbackResult?: null; result?: null; problem?: null; health?: null; retain?: null; retained?: null; empty?: null; pendingCalls?: null; callTextSettings: mediflow.v4.CallTextSettings.$Shape })
             * )} mediflow.v4.Packet.$Shape
             */

            /**
             * Constructs a new Packet.
             * @memberof mediflow.v4
             * @classdesc Represents a Packet.
             * @constructor
             * @param {mediflow.v4.Packet.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Packet = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Packet protocolVersion.
             * @member {number|null|undefined} protocolVersion
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.protocolVersion = null;

            /**
             * Packet frame.
             * @member {mediflow.v4.Frame.$Properties|null|undefined} frame
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.frame = null;

            /**
             * Packet snapshot.
             * @member {mediflow.v4.Snapshot.$Properties|null|undefined} snapshot
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.snapshot = null;

            /**
             * Packet screen.
             * @member {mediflow.v4.Screen.$Properties|null|undefined} screen
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.screen = null;

            /**
             * Packet call.
             * @member {mediflow.v4.Call.$Properties|null|undefined} call
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.call = null;

            /**
             * Packet consumption.
             * @member {mediflow.v4.Consumption.$Properties|null|undefined} consumption
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.consumption = null;

            /**
             * Packet audit.
             * @member {mediflow.v4.Audit.$Properties|null|undefined} audit
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.audit = null;

            /**
             * Packet archive.
             * @member {mediflow.v4.Archive.$Properties|null|undefined} archive
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.archive = null;

            /**
             * Packet callPage.
             * @member {mediflow.v4.CallPage.$Properties|null|undefined} callPage
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.callPage = null;

            /**
             * Packet screenPage.
             * @member {mediflow.v4.ScreenPage.$Properties|null|undefined} screenPage
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.screenPage = null;

            /**
             * Packet consumptionPage.
             * @member {mediflow.v4.ConsumptionPage.$Properties|null|undefined} consumptionPage
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.consumptionPage = null;

            /**
             * Packet auditPage.
             * @member {mediflow.v4.AuditPage.$Properties|null|undefined} auditPage
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.auditPage = null;

            /**
             * Packet archivePage.
             * @member {mediflow.v4.ArchivePage.$Properties|null|undefined} archivePage
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.archivePage = null;

            /**
             * Packet historyPage.
             * @member {mediflow.v4.HistoryPage.$Properties|null|undefined} historyPage
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.historyPage = null;

            /**
             * Packet screenDetail.
             * @member {mediflow.v4.ScreenDetail.$Properties|null|undefined} screenDetail
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.screenDetail = null;

            /**
             * Packet overview.
             * @member {mediflow.v4.Overview.$Properties|null|undefined} overview
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.overview = null;

            /**
             * Packet archiveBundle.
             * @member {mediflow.v4.ArchiveBundle.$Properties|null|undefined} archiveBundle
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.archiveBundle = null;

            /**
             * Packet login.
             * @member {mediflow.v4.Login.$Properties|null|undefined} login
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.login = null;

            /**
             * Packet user.
             * @member {mediflow.v4.User.$Properties|null|undefined} user
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.user = null;

            /**
             * Packet publish.
             * @member {mediflow.v4.Publish.$Properties|null|undefined} publish
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.publish = null;

            /**
             * Packet consume.
             * @member {mediflow.v4.Consume.$Properties|null|undefined} consume
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.consume = null;

            /**
             * Packet playback.
             * @member {mediflow.v4.Playback.$Properties|null|undefined} playback
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.playback = null;

            /**
             * Packet playbackResult.
             * @member {mediflow.v4.PlaybackResult.$Properties|null|undefined} playbackResult
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.playbackResult = null;

            /**
             * Packet result.
             * @member {mediflow.v4.Result.$Properties|null|undefined} result
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.result = null;

            /**
             * Packet problem.
             * @member {mediflow.v4.Problem.$Properties|null|undefined} problem
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.problem = null;

            /**
             * Packet health.
             * @member {mediflow.v4.Health.$Properties|null|undefined} health
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.health = null;

            /**
             * Packet retain.
             * @member {mediflow.v4.Retain.$Properties|null|undefined} retain
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.retain = null;

            /**
             * Packet retained.
             * @member {mediflow.v4.Retained.$Properties|null|undefined} retained
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.retained = null;

            /**
             * Packet empty.
             * @member {mediflow.v4.Empty.$Properties|null|undefined} empty
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.empty = null;

            /**
             * Packet pendingCalls.
             * @member {mediflow.v4.PendingCalls.$Properties|null|undefined} pendingCalls
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.pendingCalls = null;

            /**
             * Packet callTextSettings.
             * @member {mediflow.v4.CallTextSettings.$Properties|null|undefined} callTextSettings
             * @memberof mediflow.v4.Packet
             * @instance
             */
            Packet.prototype.callTextSettings = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Packet.prototype, "_protocolVersion", {
                get: $util.oneOfGetter($oneOfFields = ["protocolVersion"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Packet body.
             * @member {"frame"|"snapshot"|"screen"|"call"|"consumption"|"audit"|"archive"|"callPage"|"screenPage"|"consumptionPage"|"auditPage"|"archivePage"|"historyPage"|"screenDetail"|"overview"|"archiveBundle"|"login"|"user"|"publish"|"consume"|"playback"|"playbackResult"|"result"|"problem"|"health"|"retain"|"retained"|"empty"|"pendingCalls"|"callTextSettings"|undefined} body
             * @memberof mediflow.v4.Packet
             * @instance
             */
            $Object.defineProperty(Packet.prototype, "body", {
                get: $util.oneOfGetter($oneOfFields = ["frame", "snapshot", "screen", "call", "consumption", "audit", "archive", "callPage", "screenPage", "consumptionPage", "auditPage", "archivePage", "historyPage", "screenDetail", "overview", "archiveBundle", "login", "user", "publish", "consume", "playback", "playbackResult", "result", "problem", "health", "retain", "retained", "empty", "pendingCalls", "callTextSettings"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Packet instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.Packet
             * @static
             * @param {mediflow.v4.Packet.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.Packet} Packet instance
             * @type {{
             *   (properties: mediflow.v4.Packet.$Shape): mediflow.v4.Packet & mediflow.v4.Packet.$Shape;
             *   (properties?: mediflow.v4.Packet.$Properties): mediflow.v4.Packet;
             * }}
             */
            Packet.create = function(properties) {
                return new Packet(properties);
            };

            /**
             * Encodes the specified Packet message. Does not implicitly {@link mediflow.v4.Packet.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.Packet
             * @static
             * @param {mediflow.v4.Packet.$Properties} message Packet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Packet.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.protocolVersion != null && $Object.hasOwnProperty.call(message, "protocolVersion"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.protocolVersion);
                if (message.frame != null && $Object.hasOwnProperty.call(message, "frame"))
                    $root.mediflow.v4.Frame.encode(message.frame, writer.uint32(/* id 10, wireType 2 =*/82).fork(), _depth + 1).ldelim();
                if (message.snapshot != null && $Object.hasOwnProperty.call(message, "snapshot"))
                    $root.mediflow.v4.Snapshot.encode(message.snapshot, writer.uint32(/* id 11, wireType 2 =*/90).fork(), _depth + 1).ldelim();
                if (message.screen != null && $Object.hasOwnProperty.call(message, "screen"))
                    $root.mediflow.v4.Screen.encode(message.screen, writer.uint32(/* id 12, wireType 2 =*/98).fork(), _depth + 1).ldelim();
                if (message.call != null && $Object.hasOwnProperty.call(message, "call"))
                    $root.mediflow.v4.Call.encode(message.call, writer.uint32(/* id 13, wireType 2 =*/106).fork(), _depth + 1).ldelim();
                if (message.consumption != null && $Object.hasOwnProperty.call(message, "consumption"))
                    $root.mediflow.v4.Consumption.encode(message.consumption, writer.uint32(/* id 14, wireType 2 =*/114).fork(), _depth + 1).ldelim();
                if (message.audit != null && $Object.hasOwnProperty.call(message, "audit"))
                    $root.mediflow.v4.Audit.encode(message.audit, writer.uint32(/* id 15, wireType 2 =*/122).fork(), _depth + 1).ldelim();
                if (message.archive != null && $Object.hasOwnProperty.call(message, "archive"))
                    $root.mediflow.v4.Archive.encode(message.archive, writer.uint32(/* id 16, wireType 2 =*/130).fork(), _depth + 1).ldelim();
                if (message.callPage != null && $Object.hasOwnProperty.call(message, "callPage"))
                    $root.mediflow.v4.CallPage.encode(message.callPage, writer.uint32(/* id 20, wireType 2 =*/162).fork(), _depth + 1).ldelim();
                if (message.screenPage != null && $Object.hasOwnProperty.call(message, "screenPage"))
                    $root.mediflow.v4.ScreenPage.encode(message.screenPage, writer.uint32(/* id 21, wireType 2 =*/170).fork(), _depth + 1).ldelim();
                if (message.consumptionPage != null && $Object.hasOwnProperty.call(message, "consumptionPage"))
                    $root.mediflow.v4.ConsumptionPage.encode(message.consumptionPage, writer.uint32(/* id 22, wireType 2 =*/178).fork(), _depth + 1).ldelim();
                if (message.auditPage != null && $Object.hasOwnProperty.call(message, "auditPage"))
                    $root.mediflow.v4.AuditPage.encode(message.auditPage, writer.uint32(/* id 23, wireType 2 =*/186).fork(), _depth + 1).ldelim();
                if (message.archivePage != null && $Object.hasOwnProperty.call(message, "archivePage"))
                    $root.mediflow.v4.ArchivePage.encode(message.archivePage, writer.uint32(/* id 24, wireType 2 =*/194).fork(), _depth + 1).ldelim();
                if (message.historyPage != null && $Object.hasOwnProperty.call(message, "historyPage"))
                    $root.mediflow.v4.HistoryPage.encode(message.historyPage, writer.uint32(/* id 25, wireType 2 =*/202).fork(), _depth + 1).ldelim();
                if (message.screenDetail != null && $Object.hasOwnProperty.call(message, "screenDetail"))
                    $root.mediflow.v4.ScreenDetail.encode(message.screenDetail, writer.uint32(/* id 26, wireType 2 =*/210).fork(), _depth + 1).ldelim();
                if (message.overview != null && $Object.hasOwnProperty.call(message, "overview"))
                    $root.mediflow.v4.Overview.encode(message.overview, writer.uint32(/* id 27, wireType 2 =*/218).fork(), _depth + 1).ldelim();
                if (message.archiveBundle != null && $Object.hasOwnProperty.call(message, "archiveBundle"))
                    $root.mediflow.v4.ArchiveBundle.encode(message.archiveBundle, writer.uint32(/* id 28, wireType 2 =*/226).fork(), _depth + 1).ldelim();
                if (message.login != null && $Object.hasOwnProperty.call(message, "login"))
                    $root.mediflow.v4.Login.encode(message.login, writer.uint32(/* id 30, wireType 2 =*/242).fork(), _depth + 1).ldelim();
                if (message.user != null && $Object.hasOwnProperty.call(message, "user"))
                    $root.mediflow.v4.User.encode(message.user, writer.uint32(/* id 31, wireType 2 =*/250).fork(), _depth + 1).ldelim();
                if (message.publish != null && $Object.hasOwnProperty.call(message, "publish"))
                    $root.mediflow.v4.Publish.encode(message.publish, writer.uint32(/* id 32, wireType 2 =*/258).fork(), _depth + 1).ldelim();
                if (message.consume != null && $Object.hasOwnProperty.call(message, "consume"))
                    $root.mediflow.v4.Consume.encode(message.consume, writer.uint32(/* id 33, wireType 2 =*/266).fork(), _depth + 1).ldelim();
                if (message.playback != null && $Object.hasOwnProperty.call(message, "playback"))
                    $root.mediflow.v4.Playback.encode(message.playback, writer.uint32(/* id 34, wireType 2 =*/274).fork(), _depth + 1).ldelim();
                if (message.playbackResult != null && $Object.hasOwnProperty.call(message, "playbackResult"))
                    $root.mediflow.v4.PlaybackResult.encode(message.playbackResult, writer.uint32(/* id 35, wireType 2 =*/282).fork(), _depth + 1).ldelim();
                if (message.result != null && $Object.hasOwnProperty.call(message, "result"))
                    $root.mediflow.v4.Result.encode(message.result, writer.uint32(/* id 36, wireType 2 =*/290).fork(), _depth + 1).ldelim();
                if (message.problem != null && $Object.hasOwnProperty.call(message, "problem"))
                    $root.mediflow.v4.Problem.encode(message.problem, writer.uint32(/* id 37, wireType 2 =*/298).fork(), _depth + 1).ldelim();
                if (message.health != null && $Object.hasOwnProperty.call(message, "health"))
                    $root.mediflow.v4.Health.encode(message.health, writer.uint32(/* id 38, wireType 2 =*/306).fork(), _depth + 1).ldelim();
                if (message.retain != null && $Object.hasOwnProperty.call(message, "retain"))
                    $root.mediflow.v4.Retain.encode(message.retain, writer.uint32(/* id 39, wireType 2 =*/314).fork(), _depth + 1).ldelim();
                if (message.retained != null && $Object.hasOwnProperty.call(message, "retained"))
                    $root.mediflow.v4.Retained.encode(message.retained, writer.uint32(/* id 40, wireType 2 =*/322).fork(), _depth + 1).ldelim();
                if (message.empty != null && $Object.hasOwnProperty.call(message, "empty"))
                    $root.mediflow.v4.Empty.encode(message.empty, writer.uint32(/* id 41, wireType 2 =*/330).fork(), _depth + 1).ldelim();
                if (message.pendingCalls != null && $Object.hasOwnProperty.call(message, "pendingCalls"))
                    $root.mediflow.v4.PendingCalls.encode(message.pendingCalls, writer.uint32(/* id 42, wireType 2 =*/338).fork(), _depth + 1).ldelim();
                if (message.callTextSettings != null && $Object.hasOwnProperty.call(message, "callTextSettings"))
                    $root.mediflow.v4.CallTextSettings.encode(message.callTextSettings, writer.uint32(/* id 43, wireType 2 =*/346).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a Packet message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.Packet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.Packet & mediflow.v4.Packet.$Shape} Packet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Packet.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.Packet();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            message.protocolVersion = reader.uint32();
                            message._protocolVersion = "protocolVersion";
                            continue;
                        }
                    case 10: {
                            if (wireType !== 2)
                                break;
                            message.frame = $root.mediflow.v4.Frame.decode(reader, reader.size(), $undefined, _depth + 1, message.frame);
                            message.body = "frame";
                            continue;
                        }
                    case 11: {
                            if (wireType !== 2)
                                break;
                            message.snapshot = $root.mediflow.v4.Snapshot.decode(reader, reader.size(), $undefined, _depth + 1, message.snapshot);
                            message.body = "snapshot";
                            continue;
                        }
                    case 12: {
                            if (wireType !== 2)
                                break;
                            message.screen = $root.mediflow.v4.Screen.decode(reader, reader.size(), $undefined, _depth + 1, message.screen);
                            message.body = "screen";
                            continue;
                        }
                    case 13: {
                            if (wireType !== 2)
                                break;
                            message.call = $root.mediflow.v4.Call.decode(reader, reader.size(), $undefined, _depth + 1, message.call);
                            message.body = "call";
                            continue;
                        }
                    case 14: {
                            if (wireType !== 2)
                                break;
                            message.consumption = $root.mediflow.v4.Consumption.decode(reader, reader.size(), $undefined, _depth + 1, message.consumption);
                            message.body = "consumption";
                            continue;
                        }
                    case 15: {
                            if (wireType !== 2)
                                break;
                            message.audit = $root.mediflow.v4.Audit.decode(reader, reader.size(), $undefined, _depth + 1, message.audit);
                            message.body = "audit";
                            continue;
                        }
                    case 16: {
                            if (wireType !== 2)
                                break;
                            message.archive = $root.mediflow.v4.Archive.decode(reader, reader.size(), $undefined, _depth + 1, message.archive);
                            message.body = "archive";
                            continue;
                        }
                    case 20: {
                            if (wireType !== 2)
                                break;
                            message.callPage = $root.mediflow.v4.CallPage.decode(reader, reader.size(), $undefined, _depth + 1, message.callPage);
                            message.body = "callPage";
                            continue;
                        }
                    case 21: {
                            if (wireType !== 2)
                                break;
                            message.screenPage = $root.mediflow.v4.ScreenPage.decode(reader, reader.size(), $undefined, _depth + 1, message.screenPage);
                            message.body = "screenPage";
                            continue;
                        }
                    case 22: {
                            if (wireType !== 2)
                                break;
                            message.consumptionPage = $root.mediflow.v4.ConsumptionPage.decode(reader, reader.size(), $undefined, _depth + 1, message.consumptionPage);
                            message.body = "consumptionPage";
                            continue;
                        }
                    case 23: {
                            if (wireType !== 2)
                                break;
                            message.auditPage = $root.mediflow.v4.AuditPage.decode(reader, reader.size(), $undefined, _depth + 1, message.auditPage);
                            message.body = "auditPage";
                            continue;
                        }
                    case 24: {
                            if (wireType !== 2)
                                break;
                            message.archivePage = $root.mediflow.v4.ArchivePage.decode(reader, reader.size(), $undefined, _depth + 1, message.archivePage);
                            message.body = "archivePage";
                            continue;
                        }
                    case 25: {
                            if (wireType !== 2)
                                break;
                            message.historyPage = $root.mediflow.v4.HistoryPage.decode(reader, reader.size(), $undefined, _depth + 1, message.historyPage);
                            message.body = "historyPage";
                            continue;
                        }
                    case 26: {
                            if (wireType !== 2)
                                break;
                            message.screenDetail = $root.mediflow.v4.ScreenDetail.decode(reader, reader.size(), $undefined, _depth + 1, message.screenDetail);
                            message.body = "screenDetail";
                            continue;
                        }
                    case 27: {
                            if (wireType !== 2)
                                break;
                            message.overview = $root.mediflow.v4.Overview.decode(reader, reader.size(), $undefined, _depth + 1, message.overview);
                            message.body = "overview";
                            continue;
                        }
                    case 28: {
                            if (wireType !== 2)
                                break;
                            message.archiveBundle = $root.mediflow.v4.ArchiveBundle.decode(reader, reader.size(), $undefined, _depth + 1, message.archiveBundle);
                            message.body = "archiveBundle";
                            continue;
                        }
                    case 30: {
                            if (wireType !== 2)
                                break;
                            message.login = $root.mediflow.v4.Login.decode(reader, reader.size(), $undefined, _depth + 1, message.login);
                            message.body = "login";
                            continue;
                        }
                    case 31: {
                            if (wireType !== 2)
                                break;
                            message.user = $root.mediflow.v4.User.decode(reader, reader.size(), $undefined, _depth + 1, message.user);
                            message.body = "user";
                            continue;
                        }
                    case 32: {
                            if (wireType !== 2)
                                break;
                            message.publish = $root.mediflow.v4.Publish.decode(reader, reader.size(), $undefined, _depth + 1, message.publish);
                            message.body = "publish";
                            continue;
                        }
                    case 33: {
                            if (wireType !== 2)
                                break;
                            message.consume = $root.mediflow.v4.Consume.decode(reader, reader.size(), $undefined, _depth + 1, message.consume);
                            message.body = "consume";
                            continue;
                        }
                    case 34: {
                            if (wireType !== 2)
                                break;
                            message.playback = $root.mediflow.v4.Playback.decode(reader, reader.size(), $undefined, _depth + 1, message.playback);
                            message.body = "playback";
                            continue;
                        }
                    case 35: {
                            if (wireType !== 2)
                                break;
                            message.playbackResult = $root.mediflow.v4.PlaybackResult.decode(reader, reader.size(), $undefined, _depth + 1, message.playbackResult);
                            message.body = "playbackResult";
                            continue;
                        }
                    case 36: {
                            if (wireType !== 2)
                                break;
                            message.result = $root.mediflow.v4.Result.decode(reader, reader.size(), $undefined, _depth + 1, message.result);
                            message.body = "result";
                            continue;
                        }
                    case 37: {
                            if (wireType !== 2)
                                break;
                            message.problem = $root.mediflow.v4.Problem.decode(reader, reader.size(), $undefined, _depth + 1, message.problem);
                            message.body = "problem";
                            continue;
                        }
                    case 38: {
                            if (wireType !== 2)
                                break;
                            message.health = $root.mediflow.v4.Health.decode(reader, reader.size(), $undefined, _depth + 1, message.health);
                            message.body = "health";
                            continue;
                        }
                    case 39: {
                            if (wireType !== 2)
                                break;
                            message.retain = $root.mediflow.v4.Retain.decode(reader, reader.size(), $undefined, _depth + 1, message.retain);
                            message.body = "retain";
                            continue;
                        }
                    case 40: {
                            if (wireType !== 2)
                                break;
                            message.retained = $root.mediflow.v4.Retained.decode(reader, reader.size(), $undefined, _depth + 1, message.retained);
                            message.body = "retained";
                            continue;
                        }
                    case 41: {
                            if (wireType !== 2)
                                break;
                            message.empty = $root.mediflow.v4.Empty.decode(reader, reader.size(), $undefined, _depth + 1, message.empty);
                            message.body = "empty";
                            continue;
                        }
                    case 42: {
                            if (wireType !== 2)
                                break;
                            message.pendingCalls = $root.mediflow.v4.PendingCalls.decode(reader, reader.size(), $undefined, _depth + 1, message.pendingCalls);
                            message.body = "pendingCalls";
                            continue;
                        }
                    case 43: {
                            if (wireType !== 2)
                                break;
                            message.callTextSettings = $root.mediflow.v4.CallTextSettings.decode(reader, reader.size(), $undefined, _depth + 1, message.callTextSettings);
                            message.body = "callTextSettings";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a Packet message.
             * @function verify
             * @memberof mediflow.v4.Packet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Packet.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.protocolVersion != null && $Object.hasOwnProperty.call(message, "protocolVersion")) {
                    properties._protocolVersion = 1;
                    if (!$util.isInteger(message.protocolVersion))
                        return "protocolVersion: integer expected";
                }
                if (message.frame != null && $Object.hasOwnProperty.call(message, "frame")) {
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Frame.verify(message.frame, _depth + 1);
                        if (error)
                            return "frame." + error;
                    }
                }
                if (message.snapshot != null && $Object.hasOwnProperty.call(message, "snapshot")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Snapshot.verify(message.snapshot, _depth + 1);
                        if (error)
                            return "snapshot." + error;
                    }
                }
                if (message.screen != null && $Object.hasOwnProperty.call(message, "screen")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Screen.verify(message.screen, _depth + 1);
                        if (error)
                            return "screen." + error;
                    }
                }
                if (message.call != null && $Object.hasOwnProperty.call(message, "call")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Call.verify(message.call, _depth + 1);
                        if (error)
                            return "call." + error;
                    }
                }
                if (message.consumption != null && $Object.hasOwnProperty.call(message, "consumption")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Consumption.verify(message.consumption, _depth + 1);
                        if (error)
                            return "consumption." + error;
                    }
                }
                if (message.audit != null && $Object.hasOwnProperty.call(message, "audit")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Audit.verify(message.audit, _depth + 1);
                        if (error)
                            return "audit." + error;
                    }
                }
                if (message.archive != null && $Object.hasOwnProperty.call(message, "archive")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Archive.verify(message.archive, _depth + 1);
                        if (error)
                            return "archive." + error;
                    }
                }
                if (message.callPage != null && $Object.hasOwnProperty.call(message, "callPage")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.CallPage.verify(message.callPage, _depth + 1);
                        if (error)
                            return "callPage." + error;
                    }
                }
                if (message.screenPage != null && $Object.hasOwnProperty.call(message, "screenPage")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.ScreenPage.verify(message.screenPage, _depth + 1);
                        if (error)
                            return "screenPage." + error;
                    }
                }
                if (message.consumptionPage != null && $Object.hasOwnProperty.call(message, "consumptionPage")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.ConsumptionPage.verify(message.consumptionPage, _depth + 1);
                        if (error)
                            return "consumptionPage." + error;
                    }
                }
                if (message.auditPage != null && $Object.hasOwnProperty.call(message, "auditPage")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.AuditPage.verify(message.auditPage, _depth + 1);
                        if (error)
                            return "auditPage." + error;
                    }
                }
                if (message.archivePage != null && $Object.hasOwnProperty.call(message, "archivePage")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.ArchivePage.verify(message.archivePage, _depth + 1);
                        if (error)
                            return "archivePage." + error;
                    }
                }
                if (message.historyPage != null && $Object.hasOwnProperty.call(message, "historyPage")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.HistoryPage.verify(message.historyPage, _depth + 1);
                        if (error)
                            return "historyPage." + error;
                    }
                }
                if (message.screenDetail != null && $Object.hasOwnProperty.call(message, "screenDetail")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.ScreenDetail.verify(message.screenDetail, _depth + 1);
                        if (error)
                            return "screenDetail." + error;
                    }
                }
                if (message.overview != null && $Object.hasOwnProperty.call(message, "overview")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Overview.verify(message.overview, _depth + 1);
                        if (error)
                            return "overview." + error;
                    }
                }
                if (message.archiveBundle != null && $Object.hasOwnProperty.call(message, "archiveBundle")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.ArchiveBundle.verify(message.archiveBundle, _depth + 1);
                        if (error)
                            return "archiveBundle." + error;
                    }
                }
                if (message.login != null && $Object.hasOwnProperty.call(message, "login")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Login.verify(message.login, _depth + 1);
                        if (error)
                            return "login." + error;
                    }
                }
                if (message.user != null && $Object.hasOwnProperty.call(message, "user")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.User.verify(message.user, _depth + 1);
                        if (error)
                            return "user." + error;
                    }
                }
                if (message.publish != null && $Object.hasOwnProperty.call(message, "publish")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Publish.verify(message.publish, _depth + 1);
                        if (error)
                            return "publish." + error;
                    }
                }
                if (message.consume != null && $Object.hasOwnProperty.call(message, "consume")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Consume.verify(message.consume, _depth + 1);
                        if (error)
                            return "consume." + error;
                    }
                }
                if (message.playback != null && $Object.hasOwnProperty.call(message, "playback")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Playback.verify(message.playback, _depth + 1);
                        if (error)
                            return "playback." + error;
                    }
                }
                if (message.playbackResult != null && $Object.hasOwnProperty.call(message, "playbackResult")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.PlaybackResult.verify(message.playbackResult, _depth + 1);
                        if (error)
                            return "playbackResult." + error;
                    }
                }
                if (message.result != null && $Object.hasOwnProperty.call(message, "result")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Result.verify(message.result, _depth + 1);
                        if (error)
                            return "result." + error;
                    }
                }
                if (message.problem != null && $Object.hasOwnProperty.call(message, "problem")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Problem.verify(message.problem, _depth + 1);
                        if (error)
                            return "problem." + error;
                    }
                }
                if (message.health != null && $Object.hasOwnProperty.call(message, "health")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Health.verify(message.health, _depth + 1);
                        if (error)
                            return "health." + error;
                    }
                }
                if (message.retain != null && $Object.hasOwnProperty.call(message, "retain")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Retain.verify(message.retain, _depth + 1);
                        if (error)
                            return "retain." + error;
                    }
                }
                if (message.retained != null && $Object.hasOwnProperty.call(message, "retained")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Retained.verify(message.retained, _depth + 1);
                        if (error)
                            return "retained." + error;
                    }
                }
                if (message.empty != null && $Object.hasOwnProperty.call(message, "empty")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.Empty.verify(message.empty, _depth + 1);
                        if (error)
                            return "empty." + error;
                    }
                }
                if (message.pendingCalls != null && $Object.hasOwnProperty.call(message, "pendingCalls")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.PendingCalls.verify(message.pendingCalls, _depth + 1);
                        if (error)
                            return "pendingCalls." + error;
                    }
                }
                if (message.callTextSettings != null && $Object.hasOwnProperty.call(message, "callTextSettings")) {
                    if (properties.body === 1)
                        return "body: multiple values";
                    properties.body = 1;
                    {
                        let error = $root.mediflow.v4.CallTextSettings.verify(message.callTextSettings, _depth + 1);
                        if (error)
                            return "callTextSettings." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Packet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.Packet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.Packet} Packet
             */
            Packet.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.Packet)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.Packet: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.Packet();
                if (object.protocolVersion != null)
                    message.protocolVersion = object.protocolVersion >>> 0;
                if (object.frame != null) {
                    if (!$util.isObject(object.frame))
                        throw $TypeError(".mediflow.v4.Packet.frame: object expected");
                    message.frame = $root.mediflow.v4.Frame.fromObject(object.frame, _depth + 1);
                }
                if (object.snapshot != null) {
                    if (!$util.isObject(object.snapshot))
                        throw $TypeError(".mediflow.v4.Packet.snapshot: object expected");
                    message.snapshot = $root.mediflow.v4.Snapshot.fromObject(object.snapshot, _depth + 1);
                }
                if (object.screen != null) {
                    if (!$util.isObject(object.screen))
                        throw $TypeError(".mediflow.v4.Packet.screen: object expected");
                    message.screen = $root.mediflow.v4.Screen.fromObject(object.screen, _depth + 1);
                }
                if (object.call != null) {
                    if (!$util.isObject(object.call))
                        throw $TypeError(".mediflow.v4.Packet.call: object expected");
                    message.call = $root.mediflow.v4.Call.fromObject(object.call, _depth + 1);
                }
                if (object.consumption != null) {
                    if (!$util.isObject(object.consumption))
                        throw $TypeError(".mediflow.v4.Packet.consumption: object expected");
                    message.consumption = $root.mediflow.v4.Consumption.fromObject(object.consumption, _depth + 1);
                }
                if (object.audit != null) {
                    if (!$util.isObject(object.audit))
                        throw $TypeError(".mediflow.v4.Packet.audit: object expected");
                    message.audit = $root.mediflow.v4.Audit.fromObject(object.audit, _depth + 1);
                }
                if (object.archive != null) {
                    if (!$util.isObject(object.archive))
                        throw $TypeError(".mediflow.v4.Packet.archive: object expected");
                    message.archive = $root.mediflow.v4.Archive.fromObject(object.archive, _depth + 1);
                }
                if (object.callPage != null) {
                    if (!$util.isObject(object.callPage))
                        throw $TypeError(".mediflow.v4.Packet.callPage: object expected");
                    message.callPage = $root.mediflow.v4.CallPage.fromObject(object.callPage, _depth + 1);
                }
                if (object.screenPage != null) {
                    if (!$util.isObject(object.screenPage))
                        throw $TypeError(".mediflow.v4.Packet.screenPage: object expected");
                    message.screenPage = $root.mediflow.v4.ScreenPage.fromObject(object.screenPage, _depth + 1);
                }
                if (object.consumptionPage != null) {
                    if (!$util.isObject(object.consumptionPage))
                        throw $TypeError(".mediflow.v4.Packet.consumptionPage: object expected");
                    message.consumptionPage = $root.mediflow.v4.ConsumptionPage.fromObject(object.consumptionPage, _depth + 1);
                }
                if (object.auditPage != null) {
                    if (!$util.isObject(object.auditPage))
                        throw $TypeError(".mediflow.v4.Packet.auditPage: object expected");
                    message.auditPage = $root.mediflow.v4.AuditPage.fromObject(object.auditPage, _depth + 1);
                }
                if (object.archivePage != null) {
                    if (!$util.isObject(object.archivePage))
                        throw $TypeError(".mediflow.v4.Packet.archivePage: object expected");
                    message.archivePage = $root.mediflow.v4.ArchivePage.fromObject(object.archivePage, _depth + 1);
                }
                if (object.historyPage != null) {
                    if (!$util.isObject(object.historyPage))
                        throw $TypeError(".mediflow.v4.Packet.historyPage: object expected");
                    message.historyPage = $root.mediflow.v4.HistoryPage.fromObject(object.historyPage, _depth + 1);
                }
                if (object.screenDetail != null) {
                    if (!$util.isObject(object.screenDetail))
                        throw $TypeError(".mediflow.v4.Packet.screenDetail: object expected");
                    message.screenDetail = $root.mediflow.v4.ScreenDetail.fromObject(object.screenDetail, _depth + 1);
                }
                if (object.overview != null) {
                    if (!$util.isObject(object.overview))
                        throw $TypeError(".mediflow.v4.Packet.overview: object expected");
                    message.overview = $root.mediflow.v4.Overview.fromObject(object.overview, _depth + 1);
                }
                if (object.archiveBundle != null) {
                    if (!$util.isObject(object.archiveBundle))
                        throw $TypeError(".mediflow.v4.Packet.archiveBundle: object expected");
                    message.archiveBundle = $root.mediflow.v4.ArchiveBundle.fromObject(object.archiveBundle, _depth + 1);
                }
                if (object.login != null) {
                    if (!$util.isObject(object.login))
                        throw $TypeError(".mediflow.v4.Packet.login: object expected");
                    message.login = $root.mediflow.v4.Login.fromObject(object.login, _depth + 1);
                }
                if (object.user != null) {
                    if (!$util.isObject(object.user))
                        throw $TypeError(".mediflow.v4.Packet.user: object expected");
                    message.user = $root.mediflow.v4.User.fromObject(object.user, _depth + 1);
                }
                if (object.publish != null) {
                    if (!$util.isObject(object.publish))
                        throw $TypeError(".mediflow.v4.Packet.publish: object expected");
                    message.publish = $root.mediflow.v4.Publish.fromObject(object.publish, _depth + 1);
                }
                if (object.consume != null) {
                    if (!$util.isObject(object.consume))
                        throw $TypeError(".mediflow.v4.Packet.consume: object expected");
                    message.consume = $root.mediflow.v4.Consume.fromObject(object.consume, _depth + 1);
                }
                if (object.playback != null) {
                    if (!$util.isObject(object.playback))
                        throw $TypeError(".mediflow.v4.Packet.playback: object expected");
                    message.playback = $root.mediflow.v4.Playback.fromObject(object.playback, _depth + 1);
                }
                if (object.playbackResult != null) {
                    if (!$util.isObject(object.playbackResult))
                        throw $TypeError(".mediflow.v4.Packet.playbackResult: object expected");
                    message.playbackResult = $root.mediflow.v4.PlaybackResult.fromObject(object.playbackResult, _depth + 1);
                }
                if (object.result != null) {
                    if (!$util.isObject(object.result))
                        throw $TypeError(".mediflow.v4.Packet.result: object expected");
                    message.result = $root.mediflow.v4.Result.fromObject(object.result, _depth + 1);
                }
                if (object.problem != null) {
                    if (!$util.isObject(object.problem))
                        throw $TypeError(".mediflow.v4.Packet.problem: object expected");
                    message.problem = $root.mediflow.v4.Problem.fromObject(object.problem, _depth + 1);
                }
                if (object.health != null) {
                    if (!$util.isObject(object.health))
                        throw $TypeError(".mediflow.v4.Packet.health: object expected");
                    message.health = $root.mediflow.v4.Health.fromObject(object.health, _depth + 1);
                }
                if (object.retain != null) {
                    if (!$util.isObject(object.retain))
                        throw $TypeError(".mediflow.v4.Packet.retain: object expected");
                    message.retain = $root.mediflow.v4.Retain.fromObject(object.retain, _depth + 1);
                }
                if (object.retained != null) {
                    if (!$util.isObject(object.retained))
                        throw $TypeError(".mediflow.v4.Packet.retained: object expected");
                    message.retained = $root.mediflow.v4.Retained.fromObject(object.retained, _depth + 1);
                }
                if (object.empty != null) {
                    if (!$util.isObject(object.empty))
                        throw $TypeError(".mediflow.v4.Packet.empty: object expected");
                    message.empty = $root.mediflow.v4.Empty.fromObject(object.empty, _depth + 1);
                }
                if (object.pendingCalls != null) {
                    if (!$util.isObject(object.pendingCalls))
                        throw $TypeError(".mediflow.v4.Packet.pendingCalls: object expected");
                    message.pendingCalls = $root.mediflow.v4.PendingCalls.fromObject(object.pendingCalls, _depth + 1);
                }
                if (object.callTextSettings != null) {
                    if (!$util.isObject(object.callTextSettings))
                        throw $TypeError(".mediflow.v4.Packet.callTextSettings: object expected");
                    message.callTextSettings = $root.mediflow.v4.CallTextSettings.fromObject(object.callTextSettings, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a Packet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.Packet
             * @static
             * @param {mediflow.v4.Packet} message Packet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Packet.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.protocolVersion != null && $Object.hasOwnProperty.call(message, "protocolVersion"))
                    object.protocolVersion = message.protocolVersion;
                if (message.frame != null && $Object.hasOwnProperty.call(message, "frame")) {
                    object.frame = $root.mediflow.v4.Frame.toObject(message.frame, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "frame";
                }
                if (message.snapshot != null && $Object.hasOwnProperty.call(message, "snapshot")) {
                    object.snapshot = $root.mediflow.v4.Snapshot.toObject(message.snapshot, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "snapshot";
                }
                if (message.screen != null && $Object.hasOwnProperty.call(message, "screen")) {
                    object.screen = $root.mediflow.v4.Screen.toObject(message.screen, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "screen";
                }
                if (message.call != null && $Object.hasOwnProperty.call(message, "call")) {
                    object.call = $root.mediflow.v4.Call.toObject(message.call, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "call";
                }
                if (message.consumption != null && $Object.hasOwnProperty.call(message, "consumption")) {
                    object.consumption = $root.mediflow.v4.Consumption.toObject(message.consumption, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "consumption";
                }
                if (message.audit != null && $Object.hasOwnProperty.call(message, "audit")) {
                    object.audit = $root.mediflow.v4.Audit.toObject(message.audit, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "audit";
                }
                if (message.archive != null && $Object.hasOwnProperty.call(message, "archive")) {
                    object.archive = $root.mediflow.v4.Archive.toObject(message.archive, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "archive";
                }
                if (message.callPage != null && $Object.hasOwnProperty.call(message, "callPage")) {
                    object.callPage = $root.mediflow.v4.CallPage.toObject(message.callPage, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "callPage";
                }
                if (message.screenPage != null && $Object.hasOwnProperty.call(message, "screenPage")) {
                    object.screenPage = $root.mediflow.v4.ScreenPage.toObject(message.screenPage, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "screenPage";
                }
                if (message.consumptionPage != null && $Object.hasOwnProperty.call(message, "consumptionPage")) {
                    object.consumptionPage = $root.mediflow.v4.ConsumptionPage.toObject(message.consumptionPage, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "consumptionPage";
                }
                if (message.auditPage != null && $Object.hasOwnProperty.call(message, "auditPage")) {
                    object.auditPage = $root.mediflow.v4.AuditPage.toObject(message.auditPage, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "auditPage";
                }
                if (message.archivePage != null && $Object.hasOwnProperty.call(message, "archivePage")) {
                    object.archivePage = $root.mediflow.v4.ArchivePage.toObject(message.archivePage, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "archivePage";
                }
                if (message.historyPage != null && $Object.hasOwnProperty.call(message, "historyPage")) {
                    object.historyPage = $root.mediflow.v4.HistoryPage.toObject(message.historyPage, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "historyPage";
                }
                if (message.screenDetail != null && $Object.hasOwnProperty.call(message, "screenDetail")) {
                    object.screenDetail = $root.mediflow.v4.ScreenDetail.toObject(message.screenDetail, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "screenDetail";
                }
                if (message.overview != null && $Object.hasOwnProperty.call(message, "overview")) {
                    object.overview = $root.mediflow.v4.Overview.toObject(message.overview, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "overview";
                }
                if (message.archiveBundle != null && $Object.hasOwnProperty.call(message, "archiveBundle")) {
                    object.archiveBundle = $root.mediflow.v4.ArchiveBundle.toObject(message.archiveBundle, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "archiveBundle";
                }
                if (message.login != null && $Object.hasOwnProperty.call(message, "login")) {
                    object.login = $root.mediflow.v4.Login.toObject(message.login, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "login";
                }
                if (message.user != null && $Object.hasOwnProperty.call(message, "user")) {
                    object.user = $root.mediflow.v4.User.toObject(message.user, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "user";
                }
                if (message.publish != null && $Object.hasOwnProperty.call(message, "publish")) {
                    object.publish = $root.mediflow.v4.Publish.toObject(message.publish, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "publish";
                }
                if (message.consume != null && $Object.hasOwnProperty.call(message, "consume")) {
                    object.consume = $root.mediflow.v4.Consume.toObject(message.consume, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "consume";
                }
                if (message.playback != null && $Object.hasOwnProperty.call(message, "playback")) {
                    object.playback = $root.mediflow.v4.Playback.toObject(message.playback, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "playback";
                }
                if (message.playbackResult != null && $Object.hasOwnProperty.call(message, "playbackResult")) {
                    object.playbackResult = $root.mediflow.v4.PlaybackResult.toObject(message.playbackResult, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "playbackResult";
                }
                if (message.result != null && $Object.hasOwnProperty.call(message, "result")) {
                    object.result = $root.mediflow.v4.Result.toObject(message.result, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "result";
                }
                if (message.problem != null && $Object.hasOwnProperty.call(message, "problem")) {
                    object.problem = $root.mediflow.v4.Problem.toObject(message.problem, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "problem";
                }
                if (message.health != null && $Object.hasOwnProperty.call(message, "health")) {
                    object.health = $root.mediflow.v4.Health.toObject(message.health, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "health";
                }
                if (message.retain != null && $Object.hasOwnProperty.call(message, "retain")) {
                    object.retain = $root.mediflow.v4.Retain.toObject(message.retain, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "retain";
                }
                if (message.retained != null && $Object.hasOwnProperty.call(message, "retained")) {
                    object.retained = $root.mediflow.v4.Retained.toObject(message.retained, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "retained";
                }
                if (message.empty != null && $Object.hasOwnProperty.call(message, "empty")) {
                    object.empty = $root.mediflow.v4.Empty.toObject(message.empty, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "empty";
                }
                if (message.pendingCalls != null && $Object.hasOwnProperty.call(message, "pendingCalls")) {
                    object.pendingCalls = $root.mediflow.v4.PendingCalls.toObject(message.pendingCalls, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "pendingCalls";
                }
                if (message.callTextSettings != null && $Object.hasOwnProperty.call(message, "callTextSettings")) {
                    object.callTextSettings = $root.mediflow.v4.CallTextSettings.toObject(message.callTextSettings, options, _depth + 1);
                    if (options.oneofs)
                        object.body = "callTextSettings";
                }
                return object;
            };

            /**
             * Converts this Packet to JSON.
             * @function toJSON
             * @memberof mediflow.v4.Packet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Packet.prototype.toJSON = function() {
                return Packet.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Packet
             * @function getTypeUrl
             * @memberof mediflow.v4.Packet
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Packet.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.Packet";
            };

            return Packet;
        })();

        v4.PlaybackEvent = (function() {

            /**
             * Properties of a PlaybackEvent.
             * @typedef {Object} mediflow.v4.PlaybackEvent.$Properties
             * @property {Uint8Array|null} [screenId] PlaybackEvent screenId
             * @property {Uint8Array|null} [eventId] PlaybackEvent eventId
             * @property {Uint8Array|null} [requestId] PlaybackEvent requestId
             * @property {Uint8Array|null} [callId] PlaybackEvent callId
             * @property {string|null} [status] PlaybackEvent status
             * @property {string|null} [detail] PlaybackEvent detail
             * @property {string|null} [createdAt] PlaybackEvent createdAt
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a PlaybackEvent.
             * @memberof mediflow.v4
             * @interface IPlaybackEvent
             * @augments mediflow.v4.PlaybackEvent.$Properties
             * @deprecated Use mediflow.v4.PlaybackEvent.$Properties instead.
             */

            /**
             * Shape of a PlaybackEvent.
             * @typedef {mediflow.v4.PlaybackEvent.$Properties} mediflow.v4.PlaybackEvent.$Shape
             */

            /**
             * Constructs a new PlaybackEvent.
             * @memberof mediflow.v4
             * @classdesc Represents a PlaybackEvent.
             * @constructor
             * @param {mediflow.v4.PlaybackEvent.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const PlaybackEvent = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * PlaybackEvent screenId.
             * @member {Uint8Array|null|undefined} screenId
             * @memberof mediflow.v4.PlaybackEvent
             * @instance
             */
            PlaybackEvent.prototype.screenId = null;

            /**
             * PlaybackEvent eventId.
             * @member {Uint8Array|null|undefined} eventId
             * @memberof mediflow.v4.PlaybackEvent
             * @instance
             */
            PlaybackEvent.prototype.eventId = null;

            /**
             * PlaybackEvent requestId.
             * @member {Uint8Array|null|undefined} requestId
             * @memberof mediflow.v4.PlaybackEvent
             * @instance
             */
            PlaybackEvent.prototype.requestId = null;

            /**
             * PlaybackEvent callId.
             * @member {Uint8Array|null|undefined} callId
             * @memberof mediflow.v4.PlaybackEvent
             * @instance
             */
            PlaybackEvent.prototype.callId = null;

            /**
             * PlaybackEvent status.
             * @member {string|null|undefined} status
             * @memberof mediflow.v4.PlaybackEvent
             * @instance
             */
            PlaybackEvent.prototype.status = null;

            /**
             * PlaybackEvent detail.
             * @member {string|null|undefined} detail
             * @memberof mediflow.v4.PlaybackEvent
             * @instance
             */
            PlaybackEvent.prototype.detail = null;

            /**
             * PlaybackEvent createdAt.
             * @member {string|null|undefined} createdAt
             * @memberof mediflow.v4.PlaybackEvent
             * @instance
             */
            PlaybackEvent.prototype.createdAt = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PlaybackEvent.prototype, "_screenId", {
                get: $util.oneOfGetter($oneOfFields = ["screenId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PlaybackEvent.prototype, "_eventId", {
                get: $util.oneOfGetter($oneOfFields = ["eventId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PlaybackEvent.prototype, "_requestId", {
                get: $util.oneOfGetter($oneOfFields = ["requestId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PlaybackEvent.prototype, "_callId", {
                get: $util.oneOfGetter($oneOfFields = ["callId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PlaybackEvent.prototype, "_status", {
                get: $util.oneOfGetter($oneOfFields = ["status"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PlaybackEvent.prototype, "_detail", {
                get: $util.oneOfGetter($oneOfFields = ["detail"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PlaybackEvent.prototype, "_createdAt", {
                get: $util.oneOfGetter($oneOfFields = ["createdAt"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new PlaybackEvent instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.PlaybackEvent
             * @static
             * @param {mediflow.v4.PlaybackEvent.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.PlaybackEvent} PlaybackEvent instance
             * @type {{
             *   (properties: mediflow.v4.PlaybackEvent.$Shape): mediflow.v4.PlaybackEvent & mediflow.v4.PlaybackEvent.$Shape;
             *   (properties?: mediflow.v4.PlaybackEvent.$Properties): mediflow.v4.PlaybackEvent;
             * }}
             */
            PlaybackEvent.create = function(properties) {
                return new PlaybackEvent(properties);
            };

            /**
             * Encodes the specified PlaybackEvent message. Does not implicitly {@link mediflow.v4.PlaybackEvent.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.PlaybackEvent
             * @static
             * @param {mediflow.v4.PlaybackEvent.$Properties} message PlaybackEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlaybackEvent.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.screenId != null && $Object.hasOwnProperty.call(message, "screenId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.screenId);
                if (message.eventId != null && $Object.hasOwnProperty.call(message, "eventId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.eventId);
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.requestId);
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.callId);
                if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.status);
                if (message.detail != null && $Object.hasOwnProperty.call(message, "detail"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.detail);
                if (message.createdAt != null && $Object.hasOwnProperty.call(message, "createdAt"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.createdAt);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a PlaybackEvent message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.PlaybackEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.PlaybackEvent & mediflow.v4.PlaybackEvent.$Shape} PlaybackEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlaybackEvent.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.PlaybackEvent();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.screenId = reader.bytes();
                            message._screenId = "screenId";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.eventId = reader.bytes();
                            message._eventId = "eventId";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.requestId = reader.bytes();
                            message._requestId = "requestId";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.callId = reader.bytes();
                            message._callId = "callId";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.status = reader.stringVerify();
                            message._status = "status";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            message.detail = reader.stringVerify();
                            message._detail = "detail";
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            message.createdAt = reader.stringVerify();
                            message._createdAt = "createdAt";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a PlaybackEvent message.
             * @function verify
             * @memberof mediflow.v4.PlaybackEvent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlaybackEvent.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.screenId != null && $Object.hasOwnProperty.call(message, "screenId")) {
                    properties._screenId = 1;
                    if (!(message.screenId && typeof message.screenId.length === "number" || $util.isString(message.screenId)))
                        return "screenId: buffer expected";
                }
                if (message.eventId != null && $Object.hasOwnProperty.call(message, "eventId")) {
                    properties._eventId = 1;
                    if (!(message.eventId && typeof message.eventId.length === "number" || $util.isString(message.eventId)))
                        return "eventId: buffer expected";
                }
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId")) {
                    properties._requestId = 1;
                    if (!(message.requestId && typeof message.requestId.length === "number" || $util.isString(message.requestId)))
                        return "requestId: buffer expected";
                }
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId")) {
                    properties._callId = 1;
                    if (!(message.callId && typeof message.callId.length === "number" || $util.isString(message.callId)))
                        return "callId: buffer expected";
                }
                if (message.status != null && $Object.hasOwnProperty.call(message, "status")) {
                    properties._status = 1;
                    if (!$util.isString(message.status))
                        return "status: string expected";
                }
                if (message.detail != null && $Object.hasOwnProperty.call(message, "detail")) {
                    properties._detail = 1;
                    if (!$util.isString(message.detail))
                        return "detail: string expected";
                }
                if (message.createdAt != null && $Object.hasOwnProperty.call(message, "createdAt")) {
                    properties._createdAt = 1;
                    if (!$util.isString(message.createdAt))
                        return "createdAt: string expected";
                }
                return null;
            };

            /**
             * Creates a PlaybackEvent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.PlaybackEvent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.PlaybackEvent} PlaybackEvent
             */
            PlaybackEvent.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.PlaybackEvent)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.PlaybackEvent: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.PlaybackEvent();
                if (object.screenId != null)
                    if (typeof object.screenId === "string")
                        $util.base64.decode(object.screenId, message.screenId = $util.newBuffer($util.base64.length(object.screenId)), 0);
                    else if (object.screenId.length >= 0)
                        message.screenId = object.screenId;
                if (object.eventId != null)
                    if (typeof object.eventId === "string")
                        $util.base64.decode(object.eventId, message.eventId = $util.newBuffer($util.base64.length(object.eventId)), 0);
                    else if (object.eventId.length >= 0)
                        message.eventId = object.eventId;
                if (object.requestId != null)
                    if (typeof object.requestId === "string")
                        $util.base64.decode(object.requestId, message.requestId = $util.newBuffer($util.base64.length(object.requestId)), 0);
                    else if (object.requestId.length >= 0)
                        message.requestId = object.requestId;
                if (object.callId != null)
                    if (typeof object.callId === "string")
                        $util.base64.decode(object.callId, message.callId = $util.newBuffer($util.base64.length(object.callId)), 0);
                    else if (object.callId.length >= 0)
                        message.callId = object.callId;
                if (object.status != null)
                    message.status = $String(object.status);
                if (object.detail != null)
                    message.detail = $String(object.detail);
                if (object.createdAt != null)
                    message.createdAt = $String(object.createdAt);
                return message;
            };

            /**
             * Creates a plain object from a PlaybackEvent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.PlaybackEvent
             * @static
             * @param {mediflow.v4.PlaybackEvent} message PlaybackEvent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlaybackEvent.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.screenId != null && $Object.hasOwnProperty.call(message, "screenId"))
                    object.screenId = options.bytes === $String ? $util.base64.encode(message.screenId, 0, message.screenId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.screenId) : message.screenId;
                if (message.eventId != null && $Object.hasOwnProperty.call(message, "eventId"))
                    object.eventId = options.bytes === $String ? $util.base64.encode(message.eventId, 0, message.eventId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.eventId) : message.eventId;
                if (message.requestId != null && $Object.hasOwnProperty.call(message, "requestId"))
                    object.requestId = options.bytes === $String ? $util.base64.encode(message.requestId, 0, message.requestId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.requestId) : message.requestId;
                if (message.callId != null && $Object.hasOwnProperty.call(message, "callId"))
                    object.callId = options.bytes === $String ? $util.base64.encode(message.callId, 0, message.callId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.callId) : message.callId;
                if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                    object.status = message.status;
                if (message.detail != null && $Object.hasOwnProperty.call(message, "detail"))
                    object.detail = message.detail;
                if (message.createdAt != null && $Object.hasOwnProperty.call(message, "createdAt"))
                    object.createdAt = message.createdAt;
                return object;
            };

            /**
             * Converts this PlaybackEvent to JSON.
             * @function toJSON
             * @memberof mediflow.v4.PlaybackEvent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlaybackEvent.prototype.toJSON = function() {
                return PlaybackEvent.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PlaybackEvent
             * @function getTypeUrl
             * @memberof mediflow.v4.PlaybackEvent
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PlaybackEvent.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.PlaybackEvent";
            };

            return PlaybackEvent;
        })();

        v4.CallTextSettings = (function() {

            /**
             * Properties of a CallTextSettings.
             * @typedef {Object} mediflow.v4.CallTextSettings.$Properties
             * @property {string|null} [callTextTemplate] CallTextSettings callTextTemplate
             * @property {string|null} [expectedCallTextTemplate] CallTextSettings expectedCallTextTemplate
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a CallTextSettings.
             * @memberof mediflow.v4
             * @interface ICallTextSettings
             * @augments mediflow.v4.CallTextSettings.$Properties
             * @deprecated Use mediflow.v4.CallTextSettings.$Properties instead.
             */

            /**
             * Shape of a CallTextSettings.
             * @typedef {mediflow.v4.CallTextSettings.$Properties} mediflow.v4.CallTextSettings.$Shape
             */

            /**
             * Constructs a new CallTextSettings.
             * @memberof mediflow.v4
             * @classdesc Represents a CallTextSettings.
             * @constructor
             * @param {mediflow.v4.CallTextSettings.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const CallTextSettings = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * CallTextSettings callTextTemplate.
             * @member {string|null|undefined} callTextTemplate
             * @memberof mediflow.v4.CallTextSettings
             * @instance
             */
            CallTextSettings.prototype.callTextTemplate = null;

            /**
             * CallTextSettings expectedCallTextTemplate.
             * @member {string|null|undefined} expectedCallTextTemplate
             * @memberof mediflow.v4.CallTextSettings
             * @instance
             */
            CallTextSettings.prototype.expectedCallTextTemplate = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(CallTextSettings.prototype, "_callTextTemplate", {
                get: $util.oneOfGetter($oneOfFields = ["callTextTemplate"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(CallTextSettings.prototype, "_expectedCallTextTemplate", {
                get: $util.oneOfGetter($oneOfFields = ["expectedCallTextTemplate"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new CallTextSettings instance using the specified properties.
             * @function create
             * @memberof mediflow.v4.CallTextSettings
             * @static
             * @param {mediflow.v4.CallTextSettings.$Properties=} [properties] Properties to set
             * @returns {mediflow.v4.CallTextSettings} CallTextSettings instance
             * @type {{
             *   (properties: mediflow.v4.CallTextSettings.$Shape): mediflow.v4.CallTextSettings & mediflow.v4.CallTextSettings.$Shape;
             *   (properties?: mediflow.v4.CallTextSettings.$Properties): mediflow.v4.CallTextSettings;
             * }}
             */
            CallTextSettings.create = function(properties) {
                return new CallTextSettings(properties);
            };

            /**
             * Encodes the specified CallTextSettings message. Does not implicitly {@link mediflow.v4.CallTextSettings.verify|verify} messages.
             * @function encode
             * @memberof mediflow.v4.CallTextSettings
             * @static
             * @param {mediflow.v4.CallTextSettings.$Properties} message CallTextSettings message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CallTextSettings.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.callTextTemplate != null && $Object.hasOwnProperty.call(message, "callTextTemplate"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.callTextTemplate);
                if (message.expectedCallTextTemplate != null && $Object.hasOwnProperty.call(message, "expectedCallTextTemplate"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.expectedCallTextTemplate);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Decodes a CallTextSettings message from the specified reader or buffer.
             * @function decode
             * @memberof mediflow.v4.CallTextSettings
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediflow.v4.CallTextSettings & mediflow.v4.CallTextSettings.$Shape} CallTextSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CallTextSettings.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.mediflow.v4.CallTextSettings();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.callTextTemplate = reader.stringVerify();
                            message._callTextTemplate = "callTextTemplate";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.expectedCallTextTemplate = reader.stringVerify();
                            message._expectedCallTextTemplate = "expectedCallTextTemplate";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Verifies a CallTextSettings message.
             * @function verify
             * @memberof mediflow.v4.CallTextSettings
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CallTextSettings.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.callTextTemplate != null && $Object.hasOwnProperty.call(message, "callTextTemplate")) {
                    properties._callTextTemplate = 1;
                    if (!$util.isString(message.callTextTemplate))
                        return "callTextTemplate: string expected";
                }
                if (message.expectedCallTextTemplate != null && $Object.hasOwnProperty.call(message, "expectedCallTextTemplate")) {
                    properties._expectedCallTextTemplate = 1;
                    if (!$util.isString(message.expectedCallTextTemplate))
                        return "expectedCallTextTemplate: string expected";
                }
                return null;
            };

            /**
             * Creates a CallTextSettings message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediflow.v4.CallTextSettings
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediflow.v4.CallTextSettings} CallTextSettings
             */
            CallTextSettings.fromObject = function (object, _depth) {
                if (object instanceof $root.mediflow.v4.CallTextSettings)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".mediflow.v4.CallTextSettings: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let message = new $root.mediflow.v4.CallTextSettings();
                if (object.callTextTemplate != null)
                    message.callTextTemplate = $String(object.callTextTemplate);
                if (object.expectedCallTextTemplate != null)
                    message.expectedCallTextTemplate = $String(object.expectedCallTextTemplate);
                return message;
            };

            /**
             * Creates a plain object from a CallTextSettings message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediflow.v4.CallTextSettings
             * @static
             * @param {mediflow.v4.CallTextSettings} message CallTextSettings
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CallTextSettings.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                let object = {};
                if (message.callTextTemplate != null && $Object.hasOwnProperty.call(message, "callTextTemplate"))
                    object.callTextTemplate = message.callTextTemplate;
                if (message.expectedCallTextTemplate != null && $Object.hasOwnProperty.call(message, "expectedCallTextTemplate"))
                    object.expectedCallTextTemplate = message.expectedCallTextTemplate;
                return object;
            };

            /**
             * Converts this CallTextSettings to JSON.
             * @function toJSON
             * @memberof mediflow.v4.CallTextSettings
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CallTextSettings.prototype.toJSON = function() {
                return CallTextSettings.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for CallTextSettings
             * @function getTypeUrl
             * @memberof mediflow.v4.CallTextSettings
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            CallTextSettings.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/mediflow.v4.CallTextSettings";
            };

            return CallTextSettings;
        })();

        return v4;
    })();

    return mediflow;
})();

export {
  $root as default
};
