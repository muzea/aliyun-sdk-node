export interface EnableRightsSeparationRequest {
    /**
     * 实例所属地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例名称。
     * @example `pxc-htri0ori2r4k9p`
     */
    "DBInstanceName": string;
    /**
     * 安全管理员账号。
     * @example `account_sec`
     */
    "SecurityAccountName": string;
    /**
     * 安全管理员密码。
     * @example `*****`
     */
    "SecurityAccountPassword": string;
    /**
     * 安全管理员账号描述。
     * @example `test123`
     */
    "SecurityAccountDescription"?: string;
    /**
     * 审计员账号名称。
     * @example `account_audit`
     */
    "AuditAccountName": string;
    /**
     * 审计员账号密码。
     * @example `******`
     */
    "AuditAccountPassword": string;
    /**
     * 审计员账号描述。
     * @example `test123`
     */
    "AuditAccountDescription"?: string;
}
