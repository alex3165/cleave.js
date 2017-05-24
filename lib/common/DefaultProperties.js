'use strict';

/**
 * Props Assignment
 *
 * Separate this, so react module can share the usage
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var DefaultProperties = {
    // Maybe change to object-assign
    // for now just keep it as simple
    assign: function assign(target, opts) {
        target = target || {};
        opts = opts || {};

        // credit card
        target.creditCard = !!opts.creditCard;
        target.creditCardStrictMode = !!opts.creditCardStrictMode;
        target.creditCardType = '';
        target.onCreditCardTypeChanged = opts.onCreditCardTypeChanged || function () {};

        // phone
        target.phone = !!opts.phone;
        target.phoneRegionCode = opts.phoneRegionCode || 'AU';
        target.phoneFormatter = {};

        // date
        target.date = !!opts.date;
        target.datePattern = opts.datePattern || ['d', 'm', 'Y'];
        target.dateFormatter = {};

        // numeral
        target.numeral = !!opts.numeral;
        target.numeralDecimalScale = opts.numeralDecimalScale >= 0 ? opts.numeralDecimalScale : 2;
        target.numeralDecimalMark = opts.numeralDecimalMark || '.';
        target.numeralThousandsGroupStyle = opts.numeralThousandsGroupStyle || 'thousand';
        target.numeralPositiveOnly = !!opts.numeralPositiveOnly;

        // others
        target.numericOnly = target.creditCard || target.date || !!opts.numericOnly;

        target.uppercase = !!opts.uppercase;
        target.lowercase = !!opts.lowercase;

        target.prefix = target.creditCard || target.phone || target.date ? '' : opts.prefix || '';
        target.prefixLength = target.prefix.length;
        target.rawValueTrimPrefix = !!opts.rawValueTrimPrefix;
        target.copyDelimiter = !!opts.copyDelimiter;

        target.initValue = opts.initValue === undefined ? '' : opts.initValue.toString();

        target.delimiter = opts.delimiter || opts.delimiter === '' ? opts.delimiter : opts.date ? '/' : opts.numeral ? ',' : opts.phone ? ' ' : ' ';
        target.delimiters = opts.delimiters || [];

        target.blocks = opts.blocks || [];
        target.blocksLength = target.blocks.length;

        target.root = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' && global ? global : window;

        target.maxLength = 0;

        target.backspace = false;
        target.result = '';

        return target;
    }
};

module.exports = DefaultProperties;