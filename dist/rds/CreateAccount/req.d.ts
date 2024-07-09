export interface CreateAccountRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 数据库账号名称。
     * > * 名称唯一。
     * > * 由小写字母、数字或下划线组成。对于MySQL，支持大写字母。
     * > * 以字母开头，以字母或数字结尾。
     * > * 对于MySQL，普通账号名与高权限账号名不能互相类似，例如：高权限账号名`Test1`，普通账号名不能为`test1`等。
     * > * 长度：
     * >     * MySQL 8.0、5.7：2~32个字符。
     * >     * MySQL 5.6：2~16个字符。
     * >     * SQL Server：2~64个字符。
     * >     * PostgreSQL云盘版：2~63个字符。
     * >     * PostgreSQL本地盘版：2~16个字符。
     * >     * MariaDB：2~16个字符。
     * > * 其他非法字符，见[禁用关键字表](~~26317~~)。
     * @example `test1`
     */
    "AccountName": string;
    /**
     * 数据库账号的密码。
     * > * 长度为8~32个字符。
     * > * 由大写字母、小写字母、数字、特殊字符中的任意三种组成。
     * > * 特殊字符为`!@#$%^&*()_+-=`。
     * @example `Test123456`
     */
    "AccountPassword": string;
    /**
     * 账号描述，长度为2~256个字符。以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
     * >不能以 http:// 和 https:// 开头。
     * @example `testuser`
     */
    "AccountDescription"?: string;
    /**
     * 账号类型，取值：
     * - **Normal**：普通账号（默认值）
     * - **Super**：高权限账号
     * - **Sysadmin**：SA权限的数据库账号（仅支持RDS SQL Server实例）
     * SA权限的数据库账号创建前，请先检查实例是否满足前提条件。具体详情，请参见[创建SA权限的数据库账号](~~170736~~)。
     * @example `Normal`
     */
    "AccountType"?: string;
}
