export interface ListNamingTrackRequest {
    /**
     * 扩展请求参数，JSON格式。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 实例ID。
     * @example `mse_prepaid_public_cn-tl32d*****`
     */
    "InstanceId": string;
    /**
     * 服务名称。
     * @example `fpx-xms-baseinfo`
     */
    "ServiceName"?: string;
    /**
     * 分组。
     * @example `group`
     */
    "Group"?: string;
    /**
     * 命名空间ID。
     * @example `cd4d3703-e2a6-46b5-85c6-4447e4f****`
     */
    "NamespaceId"?: string;
    /**
     * 客户端IP。
     * @example `172.16.183.232`
     */
    "Ip"?: string;
    /**
     * 开始时间戳，单位秒。
     * @example `1660238450`
     */
    "StartTs": number;
    /**
     * 结束时间戳，单位秒。
     * @example `1665299698`
     */
    "EndTs": number;
    /**
     * 当前页的大小。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 当前页。
     * @example `1`
     */
    "PageNum": number;
    /**
     * 按照时间正序或者倒序排列。默认值为`false`。
     * - `true`：表示倒序
     * - `false`：表示正序
     * @example `false`
     */
    "Reverse"?: boolean;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
