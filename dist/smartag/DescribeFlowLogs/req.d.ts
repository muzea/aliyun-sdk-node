export interface DescribeFlowLogsRequest {
    /**
     * 流日志实例所属地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 流日志实例ID。
     * @example `fl-7a56mar1kfw9vj****`
     */
    "FlowLogId"?: string;
    /**
     * 流日志实例名称。
     * @example `DDE`
     */
    "FlowLogName"?: string;
    /**
     * 流日志实例描述。
     * @example `desc`
     */
    "Description"?: string;
    /**
     * 流日志实例状态，取值：
     * - **Active**：已启动。
     * - **Inactive**：未启动。
     * @example `Active`
     */
    "Status"?: string;
    /**
     * 流日志输出类型，取值：
     * - **sls**：流日志存储在阿里云日志服务中。
     * - **netflow**：流日志存储在您配置的NetFlow服务器上。
     * - **all**：流日志同时存储在阿里云日志服务和您配置的NetFlow服务器上。
     * @example `all`
     */
    "OutputType"?: string;
    /**
     * 分页查询时每页的条目数，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
