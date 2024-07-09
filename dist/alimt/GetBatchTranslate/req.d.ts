export interface GetBatchTranslateRequest {
    /**
     * 翻译文本的格式，html（ 网页格式。设置此参数将对待翻译文本以及翻译后文本按照html格式进行处理）、text（文本格式。设置此参数将对传入待翻译文本以及翻译后结果不做文本格式处理，统一按纯文本格式处理。
     * @example `text	`
     */
    "FormatType": string;
    /**
     * 译文语言<props="china">[参考语言code](https://help.aliyun.com/document_detail/158269.html?spm=a2c4g.11186623.2.8.53746614hvrF2G)</props><props="intl">[参考语言code](https://www.alibabacloud.com/help/zh/doc-detail/158269.html)</props>
     * @example `zh`
     */
    "TargetLanguage": string;
    /**
     * 原文语言<props="china">[参考语言code](https://help.aliyun.com/document_detail/158269.html?spm=a2c4g.11186623.2.8.53746614hvrF2G)</props><props="intl">[参考语言code](https://www.alibabacloud.com/help/zh/doc-detail/158269.html)</props>
     * @example `en`
     */
    "SourceLanguage": string;
    /**
     * - 专业版本支持的场景：商品标题（title），商品描述（description），商品沟通（communication），医疗（medical），社交（social）
     * - 通用版本支持的场景：general
     * @example `general`
     */
    "Scene": string;
    /**
     * - 版本类型，必须选择一个版本
     * - 通用版本：translate_standard
     * - 专业版本：translate_ecommerce
     * @example `translate_standard`
     */
    "ApiType": string;
    /**
     * json 数据格式
     * key：唯一的标记id，用于翻译结果拿到对应的id，对应上原文
     * value：待翻译的内容
     * 具体格式如下：
     * `
     * {
     *   "11": "hello boy",
     *   "12": "go home",
     *   "13": "we can"
     * }
     * `
     * > 待翻译的条数不能超过50
     * > 单条翻译字符数不能超过1000字符
     * > 总字符数不能超过8000字符
     * >key不会计入翻译的字符
     * >待翻译的内容中，标点、空格、html标签均会计入字符
     * @example `{"11":"hello boy","12":"go home","13":"we can"}`
     */
    "SourceText": string;
}
