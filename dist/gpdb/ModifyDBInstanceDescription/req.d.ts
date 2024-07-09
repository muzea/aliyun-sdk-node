export interface ModifyDBInstanceDescriptionRequest {
    /**
     * 该参数已废弃，无需传入该参数。
     * @example `null`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 实例备注信息。
     * 长度为2~256个字符，不能以http:// 或者https:// 开头。
     * @example `test`
     */
    "DBInstanceDescription": string;
}
