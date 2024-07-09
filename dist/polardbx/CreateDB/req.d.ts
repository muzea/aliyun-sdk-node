export interface CreateDBRequest {
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
     * 创建的数据库授权的指定账号名称。
     * @example `testaccount`
     */
    "AccountName": string;
    /**
     * 字符集，支持如下字符集：
     * - **utf8**
     * - **gbk**
     * - **latin1**
     * - **utf8mb4**
     * @example `utf8mb4`
     */
    "Charset": string;
    /**
     * 创建的数据库名称。
     * @example `testdb`
     */
    "DbName": string;
    /**
     * 给新创建的账号授权某数据库的权限，包括：
     * - **ReadWrite**
     * - **ReadOnly**
     * - **DMLOnly**
     * - **DDLOnly**
     * @example `ReadWrite`
     */
    "AccountPrivilege"?: string;
    /**
     * 数据库描述信息。
     * @example `db for test`
     */
    "DbDescription"?: string;
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
    /**
     * 创建数据库时选择的模式，取值如下：
     * - **auto**：该模式的数据库支持自动分区，即创建表时无需指定分区键；
     * - **drds**：该模式的数据库不支持自动分区，创建表时需使用专用的分库分表语法，指定分库分表键。
     * @example `auto`
     */
    "Mode"?: string;
    "StoragePoolName"?: string;
}
