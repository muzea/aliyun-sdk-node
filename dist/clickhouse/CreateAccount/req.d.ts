export interface CreateAccountRequest {
    /**
     * 数据库账号的明文密码，取值说明：
     * - 由大写字母、小写字母、数字、特殊字符中的任意三种组成。
     * - !@#$%^&*()_+-=为特殊字符。
     * - 长度为8~32个字符。
     * >您需要通过Password或PasswordSha256Hex配置数据库账号的密码，两个参数不能同时为空。如果同时配置了Password和PasswordSha256Hex，以Password为准。
     * @example `123456Aa`
     */
    "Password"?: string;
    /**
     * 数据库账号的加密密码，对明文密码进行SHA256加密，并通过HEX编码。
     * >您需要通过Password或PasswordSha256Hex配置数据库账号的密码，两个参数不能同时为空。如果同时配置了Password和PasswordSha256Hex，以Password为准。
     * @example `b17e1e0450dac425ea318253f6f852972d69731d6c7499c001468b695b6da219`
     */
    "PasswordSha256Hex"?: string;
    /**
     * 数据库账号的权限类型。取值说明：
     * - **Normal**：普通账户。
     * - **Readonly**：只读账户。
     * - **Dml**：DML账户（无DDL权限）。
     * - **Super**：超级账户。
     * @example `Normal`
     */
    "PrivilegeType": string;
    /**
     * 数据库账号的描述，取值说明：
     * - 不能以http://或https://开头。
     * - 长度为0~256个字符。
     * @example `test`
     */
    "Comment"?: string;
    /**
     * 数据库账号，取值说明：
     * - 名称唯一。
     * - 包含小写字母、数字或下划线。
     * - 以小写字母开头，以小写字母或数字结尾。
     * - 长度为2~64个字符。
     * @example `test`
     */
    "Account": string;
    /**
     * 集群ID。
     * @example `cc-8vbsom12x476u****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。您可以通过调用[DescribeRegions](~~416820~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
