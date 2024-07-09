export interface SetupDomainAutoRenewRequest {
    /**
     * 操作类型
     * @example `SET`
     */
    "Operation": string;
    /**
     * 域名实例ID
     * @example `S2019270W570xxxx`
     */
    "InstanceId": string;
}
