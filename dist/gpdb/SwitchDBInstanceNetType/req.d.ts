export interface SwitchDBInstanceNetTypeRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 自定义连接地址的前辍：
     * - 由小写字母，数字，中划线组成，字母开头；
     * - 长度不超过30个字符。
     * @example `gp-bp12ga6v69h86****`
     */
    "ConnectionStringPrefix": string;
    /**
     * 端口号。
     * @example `5432`
     */
    "Port": string;
}
