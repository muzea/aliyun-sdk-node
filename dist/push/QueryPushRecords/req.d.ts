export interface QueryPushRecordsRequest {
    /**
     * AppKey信息。
     * @example `333526247`
     */
    "AppKey": number;
    /**
     * 查询的起始时间，UTC时间，ISO-8601格式，格式为YYYY-MM-DDThh:mm:ssZ。
     * @example `2021-09-15T02:05:24Z`
     */
    "StartTime": string;
    /**
     * 查询的结束时间，UTC时间，ISO-8601格式，格式为YYYY-MM-DDThh:mm:ssZ。
     * @example `2021-09-29T06:24:58Z`
     */
    "EndTime": string;
    /**
     * 推送类型。取值：
     * - **MESSAGE**：表示消息。
     * - **NOTICE**：表示通知。
     * @example `NOTICE`
     */
    "PushType"?: string;
    /**
     * 推送目标：
     * - **DEVICE**：根据设备推送。
     * - **ACCOUNT**：根据账号推送。
     * - **ALIAS**：根据别名推送。
     * - **TAG**：根据标签推送。
     * - **ALL**：推送给全部设备。
     * - **TBD**：初始化持续推送，推送目标由后续的ContinuouslyPush接口指定。
     * @example `DEVICE`
     */
    "Target"?: string;
    /**
     * 推送来源。可取值：
     * - **API**：OpenAPI发起的推送，含OpenAPI平台控制台发起的推送。
     * - **CONSOLE**：通过移动推送控制台推送。
     * @example `API`
     */
    "Source"?: string;
    /**
     * 查询关键字，根据MessageId、Title、Body字段进行查询。系统对推送的title和body进行了中文分词，使用分词进行查询，非子字符串匹配查询。
     * @example `统计数据测试通知805`
     */
    "Keyword"?: string;
    /**
     * 废弃参数，不再使用。
     * @example `FFPpkmhCPm*****************xjk=`
     */
    "NextToken"?: string;
    /**
     * 每页的条目数量，默认值为20, 最大为100。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 推送记录的当前页数, 默认为1，最大10000。
     * @example `8`
     */
    "Page"?: number;
}
