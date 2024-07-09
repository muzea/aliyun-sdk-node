export interface GetNacosConfigRequest {
    /**
     * 实例ID。
     * @example `mse-cn-i7m2h0****`
     */
    "InstanceId": string;
    /**
     * 数据ID。
     * @example `halvie-mp-item****`
     */
    "DataId": string;
    /**
     * 配置组信息。
     * @example `common`
     */
    "Group": string;
    /**
     * 命名空间ID。
     * @example `ddaf8f12-****-b1c1-86e7c72e266b`
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
