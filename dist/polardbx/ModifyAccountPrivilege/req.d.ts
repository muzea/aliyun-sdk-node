export interface ModifyAccountPrivilegeRequest {
    /**
     * 实例所属地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `pxc-htri0ori2r4k9p`
     */
    "DBInstanceName": string;
    /**
     * 账号名称。
     * @example `account_sec`
     */
    "AccountName": string;
    /**
     * 数据库名称。
     * @example `sbtest`
     */
    "DbName"?: string;
    /**
     * 账号权限，取值如下：
     * - **ReadWrite**
     * - **ReadOnly**
     * - **DMLOnly**
     * - **DDLOnly**
     * @example `ReadWrite`
     */
    "AccountPrivilege"?: string;
    /**
     * 安全管理员账号名称。
     * @example `account_audit`
     */
    "SecurityAccountName"?: string;
    /**
     * 安全管理员账号密码。
     * @example `*****`
     */
    "SecurityAccountPassword"?: string;
}
