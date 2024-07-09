export interface QueryTaskDetailListRequest {
    /**
     * 任务状态。取值：
     * - **0**：等待执行。
     * - **1**：执行中。
     * - **2**：成功。
     * - **3**：失败。
     *
     * @example `2`
     */
    "TaskStatus"?: number;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 任务编号。
     * @example `75addb07-28a3-450e-b5ec-test`
     */
    "TaskNo": string;
    /**
     * 域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 域名实例编号。
     * @example `S20179H1BBI9test`
     */
    "InstanceId"?: string;
    /**
     * 用户IP，可设置为**127.0.0.1**。
     * @example `127.0.0.0`
     */
    "UserClientIp"?: string;
    /**
     * 分页页码。
     * @example `1`
     */
    "PageNum": number;
    /**
     * 分页大小，最大值为**1000**。
     * @example `1`
     */
    "PageSize": number;
}
