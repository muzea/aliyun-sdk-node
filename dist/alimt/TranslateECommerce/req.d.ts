export interface TranslateECommerceRequest {
    /**
     * 翻译文本的格式，**html**（ 网页格式。设置此参数将对待翻译文本以及翻译后文本按照html格式进行处理）、**text**（文本格式。设置此参数将对传入待翻译文本以及翻译后结果不做文本格式处理，统一按纯文本格式处理。
     * @example `text`
     */
    "FormatType": string;
    /**
     * 目标语种，支持的[语种参考](https://help.aliyun.com/document_detail/163584.html)。
     * @example `zh`
     */
    "TargetLanguage": string;
    /**
     * 原文语言<props="china">[参考语言code](https://help.aliyun.com/document_detail/158269.html?spm=a2c4g.11186623.2.8.53746614hvrF2G)</props><props="intl">[参考语言code](https://www.alibabacloud.com/help/zh/doc-detail/158269.html)</props>
     * @example `en`
     */
    "SourceLanguage": string;
    /**
     * 待翻译内容
     * @example `Hello`
     */
    "SourceText": string;
    /**
     * 场景可选取值：商品标题（title），商品描述（description），商品沟通（communication），医疗（medical），社交（social)，金融（finance）
     * @example `social`
     */
    "Scene": string;
    /**
     * context信息
     * @example `context信息`
     */
    "Context"?: string;
}
