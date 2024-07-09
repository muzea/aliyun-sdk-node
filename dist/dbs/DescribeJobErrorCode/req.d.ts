export interface DescribeJobErrorCodeRequest {
    /**
     * 全量备份或恢复任务ID。
     * @example `r1iv62ud****`
     */
    "TaskId": string;
    /**
     * 错误信息语言，取值如下：
     * - **en**：英文（默认值）
     * - **cn**：中文
     * @example `en`
     */
    "Language"?: string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
}
