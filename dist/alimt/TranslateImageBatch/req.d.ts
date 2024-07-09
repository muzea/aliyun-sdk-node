export interface TranslateImageBatchRequest {
    /**
     * 原图 URL，多张图片使用半角逗号进行分割；单次请求 URL 总数不能超过 20，且相同的 URL 只会被处理一次
     * @example `https://example.com/1.jpg,https://example.com/2.jpg,https://example.com/3.jpg`
     */
    "ImageUrls": string;
    /**
     * 源语种，支持的语种及对应的代码请参考[语言code](https://help.aliyun.com/document_detail/163584.html)
     * @example `zh`
     */
    "SourceLanguage": string;
    /**
     * 目标语种，支持的语种及对应的代码请参考[语言code](https://help.aliyun.com/document_detail/163584.html)
     * @example `en`
     */
    "TargetLanguage": string;
    /**
     * 扩展信息, JSON String 格式，里面可以包含的字段如下。
     * - `needEditorData`：取值为字符串 `true`/`false`，默认为`false`，是否需要在结果中返回图片翻译译后编辑器数据，仅用于[自行接入图片翻译译后编辑器](https://help.aliyun.com/document_detail/2507676.html)时，获取数据使用
     * - `ignoreEntityRecognize`：取值为字符串 `true`/`false`，默认为 `false`，电商领域图片翻译会自动判断文字是否在图片中的商品主体上，如果在，则略过翻译；使用本字段来控制是否进行上述判断，本字段对通用图片翻译无效
     * @example `{"needEditorData": "false", "ignoreEntityRecognize": "true"}`
     */
    "Ext"?: string;
    /**
     * 自定义任务 ID，用于防止短时间误操作重复请求；3 分钟内，相同自定义任务 ID 的请求只会被处理一次
     * @example `my_awesome_task_1`
     */
    "CustomTaskId"?: string;
    /**
     * 翻译领域， 可选值如下。
     * - `general`：通用图片翻译
     * - `e-commerce`：电商领域图片翻译
     * 默认及未识别领域均按通用图片翻译处理。
     * @example `general`
     */
    "Field"?: string;
}
