export interface CreateOmsMysqlDataSourceRequest {
    /**
     * 数据源名称。
     * 长度为 2~128 个英文或中文字符，可包含数字、下划线（_）、半角句号（.）或者短划线（-）。
     * > <br>不可包含 “/” 等非法字符
     * @example `oms-mysql`
     */
    "Name": string;
    /**
     * MySQL 类型。
     * 包括 INTERNET、VPC、RDS、PolarDB 和 DG。
     * @example `INTERNET`
     */
    "Type": string;
    /**
     * 数据源所属 VPC ID。
     * > <br>如 Type 为 VPC，则该字段必填。
     * @example `vpc-12345abcde*******`
     */
    "VpcId"?: string;
    /**
     * 数据源云实例 ID。
     * > <br>如 Type 为 RDS、PolarDB、DG，则该字段必填。
     * @example `pc-12ab34cd56******`
     */
    "InstanceId"?: string;
    /**
     * database gateway，数据库网关实例 ID。
     * > <br>如 Type 为 DG，则该字段必填。
     * @example `dg-yhss6sdlaff****`
     */
    "DgDatabaseId"?: string;
    /**
     * 数据源 IP 地址。
     * > <br>如 Type 为 INTERNET、VPC，则该字段必填。
     * @example `10.0.****`
     */
    "Ip"?: string;
    /**
     * 数据源端口。
     * > <br>如 Type 为 INTERNET、VPC，则该字段必填。
     * @example `3306`
     */
    "Port"?: string;
    /**
     * 数据库名。
     * > <br>如填写，后续迁移或同步操作，只会针对该数据库操作。
     * @example `test`
     */
    "Schema"?: string;
    /**
     * 数据库连接用户名。
     * @example `omsTestUser`
     */
    "Username": string;
    /**
     * 数据库连接密码（需经过 Base64 编码后传入）。
     * 例如，密码 abcd123@! 经过 Base64 转换后的值为 YWJjZDEyM0Ah。
     * @example `YWJjZDEyM0Ah`
     */
    "Password": string;
    /**
     * The description of the data source.
     * It must be 2 to 256 characters in length. The default value is null.
     * @example `OMS  测试 MySQL 数据源`
     */
    "Description"?: string;
}
