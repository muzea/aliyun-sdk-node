export interface CreateSearchIndexRequest {
    /**
     * 搜索库名称。
     * - 未填写搜索库名称时，默认情况下搜索索引会被创建在IMS的默认搜索库下。默认值ims-default-search-lib。
     * - 您还可以通过[QuerySearchLib](~~2584455~~)接口查询已有的搜索库信息。
     * @example `test1`
     */
    "SearchLibName"?: string;
    /**
     * 索引类别。取值：
     * - mm：大模型视觉状态。用于描述视频中的复杂视觉特征和动作，可以帮助识别和搜索视频中特定的动作、运动以及事件。如足球运动员射球进门、篮球运动员受伤等情况。
     * - face：人脸自动识别。用于描述视频中的人脸特征，通过人脸识别技术，可以对视频中的人脸进行自动标记和搜索。
     * - aiLabel：智能标签。智能标签索引类别用于描述视频中的字幕、语音等内容。通过文本和语音识别技术，可以自动提取视频中的字幕、对话等语言信息进行标记和搜索。帮助用户快速搜索和定位视频中涉及特定话题或关键字的内容。
     * @example `mm`
     */
    "IndexType": string;
    /**
     * 索引状态。默认值Active。取值：
     * - Active：激活。
     * - Deactive：失效。
     * @example `Active`
     */
    "IndexStatus"?: string;
    /**
     * 索引配置
     * @example `{}`
     */
    "IndexConfig"?: string;
}
