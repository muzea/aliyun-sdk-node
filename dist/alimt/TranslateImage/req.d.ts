export interface TranslateImageRequest {
    /**
     * 原图 URL，跟 Base64 不能同时为空，优先取 Base64。
     * @example `https://example.com/example.jpg`
     */
    "ImageUrl"?: string;
    /**
     * 原图 Base64，跟 URL 不能同时为空，优先取 Base64。
     * @example `/9j/4...H/9k=`
     */
    "ImageBase64"?: string;
    /**
     * 源语种，支持的[语种参考](https://help.aliyun.com/document_detail/163584.html)，必填（请忽略表格中“是否必填”中的“否”）
     * @example `zh`
     */
    "SourceLanguage"?: string;
    /**
     * 目标语种，支持的[语种参考](https://help.aliyun.com/document_detail/163584.html)，必填（请忽略表格中“是否必填”中的“否”）
     * @example `en`
     */
    "TargetLanguage"?: string;
    /**
     * 翻译领域， 可选值如下。
     * - `general`: 通用图片翻译
     * - `e-commerce`: 电商领域图片翻译
     * 默认及未识别领域均按通用图片翻译处理。
     * @example `general`
     */
    "Field"?: string;
    /**
     * 扩展信息, JSON String 格式，里面可以包含的字段如下。
     * - `needEditorData`: 取值为字符串 `true`/`false`，默认为`false`，是否需要在结果中返回图片翻译译后编辑器数据，仅用于[自行接入图片翻译译后编辑器](https://help.aliyun.com/document_detail/2507676.html)时，获取数据使用
     * - `ignoreEntityRecognize`：取值为字符串 `true`/`false`，默认为 `false`，电商领域图片翻译会自动判断文字是否在图片中的商品主体上，如果在，则略过翻译；使用本字段来控制是否进行上述判断，本字段对通用图片翻译无效
     * @example `{"needEditorData": "false", "ignoreEntityRecognize": "true"}`
     */
    "Ext"?: string;
}
