export interface DescribeActiveOperationTaskCountResponse {
    /**
     * 请求ID。
     * @example `770D7F11-21A2-402B-9DF6-D1A620570EF9`
     */
    RequestId: string;
    /**
     * 是否有需要弹窗通知用户操作的运维任务。返回值：
     * - **0**：无弹窗
     * - **1**：有弹窗
     * @example `0`
     */
    NeedPop: number;
    /**
     * 待处理的运维任务数。
     * @example `0`
     */
    TaskCount: number;
}
