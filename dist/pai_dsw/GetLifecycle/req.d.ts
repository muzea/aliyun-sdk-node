export interface GetLifecycleRequest {
    /**
     * 实例ID。如何获取实例ID，请参见[ListInstances](~~470439~~)。
     * @example `dsw-9698d842b6***`
     */
    "InstanceId": string;
    /**
     * 一个Session为实例从启动到失败或停止的过程，sessionNumber表示实例Session的序号偏移值。
     * @example `1`
     */
    "SessionNumber"?: number;
    /**
     * 查询的起始时间。
     * @example `2020-11-08T15:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询的结束时间。
     * @example `2020-11-08T15:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 查询获取的Session数量限制。
     * @example `1`
     */
    "Limit"?: number;
    /**
     * 结果的排序方式，取值如下：
     * - ASC：按时间升序。
     * - DESC：按时间降序。
     * @example `DESC`
     */
    "Order"?: string;
}
