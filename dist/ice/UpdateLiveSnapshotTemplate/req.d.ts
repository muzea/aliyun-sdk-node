export interface UpdateLiveSnapshotTemplateRequest {
    /**
     * 模板ID。
     * @example `****a046-263c-3560-978a-fb287782****`
     */
    "TemplateId": string;
    /**
     * 模板名称。
     * - 最大长度为128。
     * @example `模板1`
     */
    "TemplateName": string;
    /**
     * 覆盖截图文件格式。
     * - 不能以“/”开头，目前只支持.jpg后缀。
     * - 最大长度为255。
     * - 支持占位符： {JobId}：截图任务ID
     * - 不允许填写{UnixTimestamp}、{Sequence}、{Date}等占位符。
     * - 覆盖截图和序列截图的文件格式至少要设置一个。
     * @example `snapshot/{JobId}.jpg`
     */
    "OverwriteFormat"?: string;
    /**
     * 序列截图文件格式。
     * - 不能以“/”开头，目前只支持.jpg后缀。
     * - 最大长度为255。
     * - 支持占位符：{JobId}：截图任务ID、{Date}：截图日期、{UnixTimestamp}：时间戳、{Sequence}：序列号，其中{UnixTimestamp}、{Sequence}至少要填写一个。
     * - 覆盖截图和序列截图的文件格式至少要设置一个。
     * @example `snapshot/{JobId}/{UnixTimestamp}.jpg`
     */
    "SequenceFormat"?: string;
    /**
     * 截图时间间隔，单位：秒。
     * - 取值范围是[5, 3600]。
     * @example `5`
     */
    "TimeInterval": number;
}
