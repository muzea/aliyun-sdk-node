export interface DescribeLogBackupsRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 查询开始时间。格式： yyyy-MM-ddTHH:mmZ（UTC时间）。
     * @example `2022-12-12T02:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，需要大于查询开始时间。格式：yyyy-MM-ddTHH:mmZ（UTC时间）。
     * @example `2022-12-12T03:00Z`
     */
    "EndTime": string;
    /**
     * 每页记录数，取值：
     * - **30**
     * - **50**
     * - **100**
     * 默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
