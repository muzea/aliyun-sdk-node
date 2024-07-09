export interface DescribeDBInstanceDataBloatRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 每页记录数，取值说明：
     * - **30**
     * - **50**
     * - **100**
     * 默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，大于0且不超过Integer的最大值，默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
