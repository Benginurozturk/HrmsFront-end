/* eslint-disable no-template-curly-in-string */

import * as yup from "yup";

yup.setLocale({
    mixed: {
        default: '${path} geçersiz',
        required: '${path} zorunlu bir alandır',
        oneOf: '${path} şu değerlerden biri olmalıdır: ${values}',
        notOneOf: '${path} şu değerlerden biri olmamalıdır: ${values}',
        defined: '${path} tanımlı olmalıdır',
    },
    string: {
        length: '${path} must be exactly ${length} characters',
        min: '${path} must be at least ${min} characters',
        max: '${path} must be at most ${max} characters',
        matches: '${path} şununla eşleşmelidir: "${regex}"',
        email: '${path} geçerli bir e-posta adresi olmalıdır',
        url: '${path} geçerli bir URL olmalıdır',
        uuid: '${path} geçerli bir UUID olmalıdır',
        trim: '${path}, kırpılmış bir dize olmalıdır',
        lowercase: '${path} küçük harfli bir dize olmalıdır',
        uppercase: '${path} büyük harfli bir dize olmalıdır',
    },
    number: {
        min: '${path}, ${min} değerinden büyük veya eşit olmalıdır',
        max: '${path}, ${max} değerinden küçük veya eşit olmalıdır',
        lessThan: '${path}, ${less} değerinden küçük olmalıdır',
        moreThan: '${path}, ${more} değerinden büyük olmalıdır',
        positive: '${path} pozitif bir sayı olmalıdır',
        negative: '${path} negatif bir sayı olmalıdır',
        integer: '${path} bir tam sayı olmalıdır',
    },
    date: {
        min: '${path} alanı ${min} değerinden sonra olmalıdır',
        max: '${path} alanı ${max} değerinden önce olmalıdır',
    },
    boolean: {
        isValue: '${path} alanı ${value} olmalıdır',
    },
    object: {
        noUnknown: '${path} field has unspecified keys: ${unknown}',
    },
    array: {
        min: '${path} alanında en az ${min} öğe olmalıdır',
        max: '${path} alanı, ${max} öğeye eşit veya daha az öğeye sahip olmalıdır',
        length: '${path} ${length} öğeye sahip olmalıdır',
    }
});

export default yup;