export interface DescribeWebLockFileEventsRequest {
    /**
     * 资产名称。
     * > 调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口查询资产名称。
     * @example `test-ecs`
     */
    "Remark"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，每页显示的防篡改事件的数量。默认值为**10**，表示每页显示10条检查结果。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 进程名称。
     * @example `sys_create`
     */
    "ProcessName"?: string;
    /**
     * 查询的开始时间戳。
     * @example `1660649981419`
     */
    "TsBegin"?: number;
    /**
     * 查询结束时间戳。
     * @example `1660649981419`
     */
    "TsEnd"?: number;
    /**
     * 要查询的防篡改事件是否已处理。取值：
     * - **n**：未处理
     * - **y**：已处理
     * @example `n`
     */
    "Dealed"?: string;
}
