export interface ListConfigTrackRequest {
    /**
     * 扩展请求参数，JSON格式。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 实例ID。
     * @example `mse_prepaid_public_cn-i7m2ne****`
     */
    "InstanceId": string;
    /**
     * 配置ID。
     * @example `ballot`
     */
    "DataId"?: string;
    /**
     * 配置组。
     * @example `DEFAULT_GROUP`
     */
    "Group"?: string;
    /**
     * 命名空间ID。
     * @example `f3a510e2-df52-4fad-9815-42d8bc40****`
     */
    "NamespaceId"?: string;
    /**
     * 开始时间戳，单位秒。
     * @example `1671010148`
     */
    "StartTs": number;
    /**
     * 结束时间戳，单位秒。
     * @example `1657178373`
     */
    "EndTs": number;
    /**
     * 分页大小。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 页码。
     * @example `1`
     */
    "PageNum": number;
    /**
     * 是否倒序。
     * - true
     * - false
     * @example `true`
     */
    "Reverse"?: boolean;
    /**
     * 监听IP地址。
     * @example `192.168.22.2`
     */
    "Ip"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
