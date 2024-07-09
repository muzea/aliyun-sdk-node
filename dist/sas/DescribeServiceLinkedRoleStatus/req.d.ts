export interface DescribeServiceLinkedRoleStatusRequest {
    /**
     * 关联角色。默认**AliyunServiceRoleForSas**。取值：
     * - **AliyunServiceRoleForSas**：用于云安全中心(sas)的服务关联角色，云安全中心(sas)使用此角色来访问您在其他云产品中的资源。
     * - **AliyunServiceRoleForSasCspm**：用于云安全中心-CSPM(sas-cspm)的服务关联角色，sas-cspm使用此角色来访问您在其他云产品中的资源。
     * @example `AliyunServiceRoleForSas`
     */
    "ServiceLinkedRole"?: string;
}
