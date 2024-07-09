export interface CreateAccountRequest {
    /**
     * 集群ID。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 账号名称，需符合如下要求：
     * * 以小写字母开头，以字母或数字结尾。
     * * 由小写字母、数字或下划线组成。
     * * 长度为2~16个字符。
     * * 不能使用某些预留的用户名，如root、admin等。
     * @example `testacc`
     */
    "AccountName": string;
    /**
     * 账号密码，需符合如下要求：
     * * 至少包含大写字母、小写字母、数字或特殊字符中的任意三种。
     * * 长度为8~32个字符。
     * * 特殊字符为`!@#$%^&*()_+-=`。
     * @example `Test1111`
     */
    "AccountPassword": string;
    /**
     * 账号类型，取值范围如下：
     * - **Normal**：普通账号。
     * - **Super**：高权限账号。
     *
     * > * 若该参数留空，则默认创建**Super**账号。
     * > * 当集群为PolarDB PostgreSQL版（兼容Oracle）或PolarDB PostgreSQL版时，每个集群允许创建多个高权限账号，高权限账号相比普通账号拥有更多权限，创建数据库账号详情参见[创建数据库账号](~~68508~~)。
     * > * 当集群为PolarDB MySQL版时，每个集群最多只允许创建1个高权限账号，高权限账号相比普通账号拥有更多权限，创建数据库账号详情参见[创建数据库账号](~~68508~~)。
     * @example `Normal`
     */
    "AccountType"?: string;
    /**
     * 账号备注说明，需满足如下要求：
     * - 不能以`http://`或`https://`开头。
     * - 长度为2~256个字符。
     * @example `testdes`
     */
    "AccountDescription"?: string;
    /**
     * 允许目标账号访问的数据库名称，支持传入多个数据库名称，多个数据库名称间用英文逗号（,）分隔。
     * > 仅PolarDB MySQL版集群的普通账号支持该参数。
     * @example `testdb`
     */
    "DBName"?: string;
    /**
     * 账号权限，取值范围如下：
     * * **ReadWrite**：读写
     * * **ReadOnly**：只读
     * * **DMLOnly**：只允许DML
     * * **DDLOnly**：只允许DDL
     * *  **ReadIndex**：只读+索引
     * >* 必须要传入`DBName`参数，`AccountPrivilege`才能生效。
     * >* 若为`DBName`参数传入了多个数据库名称，您需要为目标数据库分别授予相应的权限，多个账号权限之间使用英文逗号（,）分隔，且需保证`AccountPrivilege`的字符串长度不超过900。例如，需要授权数据库DB1读写权限，授权数据库DB2只读权限，您需要设置`DBName`为`DB1,DB2`，并设置`AccountPrivilege`为`ReadWrite,ReadOnly`。
     * > * 仅PolarDB MySQL版集群的普通账号支持设置该参数。
     * @example `ReadWrite`
     */
    "AccountPrivilege"?: string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，保证在不同请求间唯一，大小写敏感、不超过64个ASCII字符。
     * @example `6000170000591aed949d0f54a343f1a4233c1e7d1c5c******`
     */
    "ClientToken"?: string;
    /**
     * 是否授权当前集群所有库及后续新增所有库的权限。取值范围如下：
     * - **0或不填**：不授权。
     * - **1**：授权。
     * @example `0`
     */
    "PrivForAllDB"?: string;
}
