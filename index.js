module.exports = {

    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint/eslint-plugin'],

    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            modules: true
        }
    },

    rules: {
        'array-bracket-newline':            ['off'],
        'array-bracket-spacing':            ['error', 'never'],
        'array-element-newline':            ['off'],
        'block-spacing':                    ['error', 'always'],
        'brace-style':                      ['error', '1tbs'],
        'camelcase':                        ['error'],
        'capitalized-comments':             ['error', 'never'],
        'comma-dangle':                     ['error', 'never'],
        'comma-spacing':                    ['error'],
        'comma-style':                      ['error'],
        'computed-property-spacing':        ['error'],
        'consistent-this':                  ['error', '_this'],
        'eol-last':                         ['error', 'always'],
        'func-call-spacing':                ['error'],
        'func-name-matching':               ['off'],
        'func-names':                       ['off'],
        'func-style':                       ['off'],
        'function-call-argument-newline':   ['off'],
        'function-paren-newline':           ['off'],
        'id-blacklist':                     ['off'],
        'id-length':                        ['off'],
        'id-match':                         ['off'],
        'implicit-arrow-linebreak':         ['error'],
        'indent':                           ['error', 4],
        'jsx-quotes':                       ['error'],
        'key-spacing':                      ['error'],
        'keyword-spacing':                  ['error'],
        'line-comment-position':            ['error'],
        'linebreak-style':                  ['error'],
        'lines-around-comment':             ['error'],
        'lines-between-class-members':      ['error'],
        'max-depth':                        ['off'],
        'max-len':                          ['error', 500],
        'max-lines':                        ['off'],
        'max-lines-per-function':           ['off'],
        'max-nested-callbacks':             ['off'],
        'max-params':                       ['off'],
        'max-statements':                   ['off'],
        'max-statements-per-line':          ['off'],
        'multiline-comment-style':          ['error'],
        'multiline-ternary':                ['off'],
        'new-cap':                          ['error'],
        'new-parens':                       ['error'],
        'newline-per-chained-call':         ['error'],
        'no-array-constructor':             ['error'],
        'no-bitwise':                       ['error'],
        'no-continue':                      ['error'],
        'no-inline-comments':               ['off'],
        'no-lonely-if':                     ['off'],
        'no-mixed-operators':               ['error'],
        'no-mixed-spaces-and-tabs':         ['error'],
        'no-multi-assign':                  ['error'],
        'no-multiple-empty-lines':          ['error', { 'max': 1 }],
        'no-negated-condition':             ['error'],
        'no-nested-ternary':                ['error'],
        'no-new-object':                    ['error'],
        'no-plusplus':                      ['off'],
        'no-restricted-syntax':             ['off'],
        'no-tabs':                          ['error'],
        'no-ternary':                       ['off'],
        'no-trailing-spaces':               ['error'],
        'no-underscore-dangle':             ['off'],
        'no-unneeded-ternary':              ['error'],
        'no-whitespace-before-property':    ['error'],
        'nonblock-statement-body-position': ['error'],
        'nonblock-statement-body-position': ['error'],
        'object-curly-newline':             ['error', { 'multiline': true }],
        'object-curly-spacing':             ['error', 'always'],
        'object-property-newline':          ['error'],
        'one-var':                          ['error'],
        'one-var-declaration-per-line':     ['error'],
        'operator-assignment':              ['error'],
        'operator-linebreak':               ['error', 'after'],
        'padded-blocks':                    ['off'],
        'padding-line-between-statements':  ['off'],
        'prefer-exponentiation-operator':   ['off'],
        'prefer-object-spread':             ['error'],
        'quote-props':                      ['error', 'as-needed'],
        'quotes':                           ['error', 'single'],
        'semi':                             ['error'],
        'semi-spacing':                     ['error'],
        'semi-style':                       ['error'],
        'sort-keys':                        ['off'],
        'sort-vars':                        ['off'],
        'space-before-blocks':              ['error'],
        'space-before-function-paren':      ['error', 'never'],
        'space-in-parens':                  ['error'],
        'space-infix-ops':                  ['error'],
        'space-unary-ops':                  ['error'],
        'spaced-comment':                   ['error'],
        'switch-colon-spacing':             ['error'],
        'template-tag-spacing':             ['error'],
        'unicode-bom':                      ['error'],
        'wrap-regex':                       ['off'],

        'curly': ['error'],
    }

};
