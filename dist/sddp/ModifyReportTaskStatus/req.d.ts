export interface ModifyReportTaskStatusRequest {
    /**
     * 设置报表任务的状态。取值：
     * - **0**：关闭
     * - **1**：开启
     * ><notice> 本参数为必填参数。
     * ></notice>
     * @example `0`
     */
    "ReportTaskStatus"?: number;
    /**
     * 该参数已废弃。
     * @example `2`
     */
    "FeatureType"?: number;
    /**
     * 请求和接收消息的语言类型，默认为**zh_cn**。取值：
     * - **zh_cn**：中文（简体）
     * - **en_us**：英文（美国）
     * @example `zh_cn`
     */
    "Lang"?: string;
}
