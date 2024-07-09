export interface ModifyAccountDescriptionRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 数据库账号。
     * @example `testAccout`
     */
    "AccountName": string;
    /**
     * 指定修改后的账号描述，要求如下：
     * - 以中文、英文字母开头。
     * - 不能以`http://`或`https://`开头。
     * - 可以包含中文、英文字符、“_”、“ -”、数字。
     * - 长度为2~256个字符。
     * @example `testAccoutdescribe`
     */
    "AccountDescription": string;
}
