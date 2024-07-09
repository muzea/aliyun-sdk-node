export interface GetJobLogRequest {
    /**
     * 待查询的集群ID。
     * @example `ehpc-hz-jeJki6****`
     */
    "ClusterId": string;
    /**
     * 待查询的作业ID。
     * @example `1.scheduler****`
     */
    "JobId": string;
    /**
     * 作业所在的节点名称。
     * - 对于已经完成的作业，无需指定该参数。
     * - 对于正在运行的作业，必须指定该参数。
     * @example `compute000`
     */
    "ExecHost"?: string;
    /**
     * 单次请求读取的日志大小。
     * 单位：byte
     * 默认值：1024
     * 最大值：400 * 1024
     * @example `1024`
     */
    "Size"?: number;
    /**
     * 日志读取的起始位置。
     * 单位：byte
     * 默认值：0
     * @example `0`
     */
    "Offset"?: number;
}
