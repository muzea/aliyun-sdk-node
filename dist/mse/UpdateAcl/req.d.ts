export interface UpdateAclRequest {
    /**
     * 白名单列表。
     * @example `192.168.0.0/XX,192.168.0.0/XX`
     */
    "AclEntryList"?: string;
    /**
     * 实例ID。
     * @example `mse-cn-78v1l83****`
     */
    "InstanceId"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
