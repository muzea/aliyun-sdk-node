export interface CreateAccountRequest {
    /**
     * 实例所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例名称。
     * @example `pxc-**************`
     */
    "DBInstanceName": string;
    /**
     * 待创建的账号名。
     * @example `testAccount`
     */
    "AccountName": string;
    /**
     * 待创建账号的账号密码。
     * @example `Test@1111`
     */
    "AccountPassword": string;
    /**
     * 授权数据库名。
     * @example `testdb`
     */
    "DBName"?: string;
    /**
     * 给新创建的账号授权某数据库的权限，包括：
     * - ReadWrite
     * - ReadOnly
     * - DMLOnly
     * - DDLOnly
     * @example `ReadWrite`
     */
    "AccountPrivilege"?: string;
    /**
     * 账号描述信息。
     * @example `test`
     */
    "AccountDescription"?: string;
    /**
     * 安全管理员账号名称。
     * > 若已开启三权分立模式，该参数必填，未开启三权分立可以不填。
     * @example `securityAccount`
     */
    "SecurityAccountName"?: string;
    /**
     * 安全管理员账号密码。
     * > 若已开启三权分立模式，该参数必填，未开启三权分立可以不填。
     * @example `securityPassword`
     */
    "SecurityAccountPassword"?: string;
}
