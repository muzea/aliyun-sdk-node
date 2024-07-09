export interface CreateTenantUserRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 租户 ID。
     * @example `t4pnum****`
     */
    "TenantId": string;
    /**
     * 数据库账号名称。
     * 不能使用某些预留关键字，如 SYS、root 等。
     * @example `pay_test`
     */
    "UserName": string;
    /**
     * 用户类型。
     * - Normal：普通账户。
     * - Admin：超级账户。
     * - ReadonlyAccount：只读账户，仅 MySQL 租户包含只读账户。
     * @example `Normal`
     */
    "UserType": string;
    /**
     * 数据库账号访问密码。
     * > <br>必须包含大写英文字符、小写英文字符、数字、特殊字符占三种，长度为 10-32 位； 特殊字符为：!@#$%^\*()_+-=
     * @example `!Aliyun4Oceanbase`
     */
    "UserPassword": string;
    /**
     * 用户的角色信息。
     * 普通用户填写账户的信息，其为 JSON 格式的字符串，默认为一个数组，数组内包含 Database（MySQL 模式）信息和角色信息（Role）。角色包含以下几类：
     *   - 读写权限（ReadWrite）：ALL PRIVILEGES。
     *   - 只读权限（ReadOnly）：SELECT。
     *   - DDL 权限（DDL）：CREATE,DROP,ALTER,SHOW VIEW,CREATE VIEW。
     * - DML 权限：SELECT, INSERT, UPDATE, DELETE, SHOW VIEW。
     * - DML 权限（DML）：SELECT,INSERT,UPDATE,DELETE,SHOW VIEW。
     * > <br><ul><li> Oracle 模式：无需填写。</li><li> MySQL 模式：超级账户默认为 ALL PRIVILEGES，无需填写。  </li></ul>
     * @example `[{"Database":"oceanbase1","Role":"readwrite"},{"Database":"oceanbase2","Role":"readonly"}]`
     */
    "Roles"?: string;
    /**
     * 数据库描述信息。
     * @example `this is a test database`
     */
    "Description"?: string;
    /**
     * 加密方式。
     * @example `RAS`
     */
    "EncryptionType"?: string;
}
