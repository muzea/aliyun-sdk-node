export interface ListListenersByIpRequest {
    /**
     * 扩展请求参数，JSON格式。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 实例ID。
     * @example `mse_prepaid_public_cn-i7m2cecji09`
     */
    "InstanceId": string;
    /**
     * 监听IP地址。
     * @example `172.22.0.240`
     */
    "Ip": string;
    /**
     * 命名空间ID。
     * @example `ea02a522-9482-4255-bb65-dc0636d783f2`
     */
    "NamespaceId"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
