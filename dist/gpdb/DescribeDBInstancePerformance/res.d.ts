export interface DescribeDBInstancePerformanceResponse {
    /**
     * 查询结束时间。
     * @example `2022-07-09T03:47Z`
     */
    EndTime: string;
    /**
     * 查询开始时间。
     * @example `2022-07-08T03:47Z`
     */
    StartTime: string;
    /**
     * 实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    DBInstanceId: string;
    /**
     * 数据库类型。
     * @example `gpdb`
     */
    Engine: string;
    /**
     * 请求ID。
     * @example `5E85244A-AB47-46A3-A3AD-5F307DCB407E`
     */
    RequestId: string;
    /**
     * 实例性能参数值列表。
     */
    PerformanceKeys: string[];
}
