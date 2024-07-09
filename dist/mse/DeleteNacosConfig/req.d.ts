export interface DeleteNacosConfigRequest {
    /**
     * 实例ID。
     * @example `mse_prepaid_public_cn-tl32epfyu18`
     */
    "InstanceId": string;
    /**
     * 配置ID。
     * @example `user-ds.yml`
     */
    "DataId": string;
    /**
     * 分组类型。
     * @example `HALVIE_MICRO_GROUP`
     */
    "Group": string;
    /**
     * 命名空间ID。
     * @example `0e9d849b-****-8435da6c21ad`
     */
    "NamespaceId"?: string;
    /**
     * 是否Beta发布。
     * - `true`：是
     * - `false`：否
     * @example `true`
     */
    "Beta"?: boolean;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
