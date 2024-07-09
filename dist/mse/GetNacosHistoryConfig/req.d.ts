export interface GetNacosHistoryConfigRequest {
    /**
     * 实例ID。
     * @example `mse_prepaid_public_cn-st220g9ka02`
     */
    "InstanceId": string;
    /**
     * 数据ID。
     * @example `msg-center.main.yaml`
     */
    "DataId": string;
    /**
     * 分组。
     * @example `DEFAULT_GROUP`
     */
    "Group": string;
    /**
     * 命名空间ID。
     * @example `6cf708a5-****-89f2-3ba62c5ee9ba`
     */
    "NamespaceId"?: string;
    /**
     * 配置单ID。
     * @example `40****`
     */
    "Nid": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
