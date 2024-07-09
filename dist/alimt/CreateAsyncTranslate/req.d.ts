export interface CreateAsyncTranslateRequest {
    /**
     * 原文语言，[语言code参考](https://help.aliyun.com/document_detail/158269.html?spm=a2c4g.11186623.6.542.7da22b9fayuNoj)
     * @example `en`
     */
    "SourceLanguage": string;
    /**
     * 目标语言，语言code参考
     * @example `zh`
     */
    "TargetLanguage": string;
    /**
     * 需要翻译的内容
     * @example `Opinion: We have finally gotten some relief at the pump. But it may not last long`
     */
    "SourceText": string;
    /**
     * 场景，支持：通用（general）、商品标题（title）、商品详情（description）、买卖家沟通（message）、医疗（medical）、社交（social）、科技（tech）。
     * @example `general`
     */
    "Scene": string;
    /**
     * 翻译文本的格式，**html**（ 网页格式。设置此参数将对待翻译文本以及翻译后文本按照html格式进行处理）、**text**（文本格式。设置此参数将对传入待翻译文本以及翻译后结果不做文本格式处理，统一按纯文本格式处理。
     * @example `text`
     */
    "FormatType": string;
    /**
     * - 版本类型，必须选择一个版本
     * - 通用版本：translate_standard
     * - 专业版本：translate_ecommerce
     * @example `translate_standard`
     */
    "ApiType": string;
}
