export interface CreateAccountRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp***************`
     */
    "DBInstanceId": string;
    /**
     * 数据库名称，限制如下：
     * - 只能包含字母，数字和下划线。
     * - 必须以字母开头。
     * - 长度不能超过63个字符.
     * @example `test01`
     */
    "DatabaseName"?: string;
    /**
     * 初始账号名称，限制如下：
     * - 由小写字母，数字，下划线组成。
     * - 以小写字母开头，小写字母或数字结尾。
     * - 不能以gp开头。
     * - 长度为2~16个字符。
     * @example `testacc02`
     */
    "AccountName": string;
    /**
     * 初始账户的密码。
     * - 由大写字母、小写字母、数字、特殊字符其中三种及以上组成。
     * - 支持的特殊字符：`!@#$%^&*()_+-=`
     * - 长度为8~32个字符。
     * @example `Pw123456`
     */
    "AccountPassword": string;
    /**
     * 初始账户的描述。要求如下：
     * - 以中文、英文字母开头。
     * - 不能以`http://`或`https://`开头。
     * - 可以包含中文、英文字符、“_”、“ -”、数字。
     * - 长度为2~256个字符。
     * @example `testacc02`
     */
    "AccountDescription"?: string;
    /**
     * 该参数已废弃，无需传入该参数。
     * @example `null`
     */
    "ResourceGroupId"?: string;
}
