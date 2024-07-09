export interface TranslateGeneralRequest {
    /**
     * 翻译文本的格式，html（ 网页格式。设置此参数将对待翻译文本以及翻译后文本按照html格式进行处理）、text（文本格式。设置此参数将对传入待翻译文本以及翻译后结果不做文本格式处理，统一按纯文本格式处理。
     * @example `text`
     */
    "FormatType": string;
    /**
     * 原文语言，<props="china">[参考语言code](https://help.aliyun.com/document_detail/215387.html)</ph></props><props="intl">[参考语言code](https://www.alibabacloud.com/help/zh/machine-translation/latest/machine-translation-language-code-list)</ph></props>
     * @example `zh`
     */
    "SourceLanguage": string;
    /**
     * 译文语言，<props="china">[参考语言code](https://help.aliyun.com/document_detail/215387.html)</ph></props><props="intl">[参考语言code](https://www.alibabacloud.com/help/zh/machine-translation/latest/machine-translation-language-code-list)</ph></props>
     * @example `en`
     */
    "TargetLanguage": string;
    /**
     * 需要翻译的内容
     * @example `你好`
     */
    "SourceText": string;
    /**
     * 通用版本默认是：general
     * @example `general`
     */
    "Scene"?: string;
    /**
     * 上下文信息，可选填
     * @example `早上我在家里吃了面包`
     */
    "Context"?: string;
}
