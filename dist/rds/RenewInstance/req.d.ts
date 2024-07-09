export interface RenewInstanceRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 预付费续费时长，单位：月。取值：
     * - **1~9**
     * - **12**
     * - **24**
     * - **36**
     * - **48**
     * - **60**
     * @example `12`
     */
    "Period": number;
    /**
     * 续费时是否自动付费。取值：
     * * **True**：自动付费。请确保账号有足够的余额。
     * * **False**（默认）：控制台手动付费。
     * > 控制台手动续费，请参见：
     * > * [RDS MySQL手动续费](~~96050~~)
     * > * [RDS PostgreSQL手动续费](~~96741~~)
     * > * [RDS SQL Server手动续费](~~95637~~)
     * > * [RDS MariaDB手动续费](~~97122~~)
     * @example `True`
     */
    "AutoPay"?: string;
    /**
     * 实例是否自动续费，取值：
     * * **true**：是
     * * **false**（默认）：否
     * @example `true`
     */
    "AutoRenew"?: string;
}
