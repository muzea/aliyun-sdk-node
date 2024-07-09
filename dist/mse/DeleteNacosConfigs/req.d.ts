export interface DeleteNacosConfigsRequest {
    /**
     * 实例ID。
     * @example `mse_prepaid_public_cn-i7m2e32pd0n`
     */
    "InstanceId": string;
    /**
     * 配置列表ID。
     * @example `20024,20025,20026,20027,20034,20104,20394`
     */
    "Ids": string;
    /**
     * 命名空间ID。
     * @example `1ef93a21-3487-4367-a859-857d8****`
     */
    "NamespaceId": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
