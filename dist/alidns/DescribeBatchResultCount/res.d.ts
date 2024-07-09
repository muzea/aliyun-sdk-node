export interface DescribeBatchResultCountResponse {
    /**
     * 任务状态，取值：
     * - **-1**：无已提交的导入域名或解析任务
     * - **0**：处理中
     * - **1**：已完成
     * - **2**：已失败
     * @example `0`
     */
    Status: number;
    /**
     * 批量处理的记录总数。
     * @example `4`
     */
    TotalCount: number;
    /**
     * 最后一次任务ID。
     * @example `123456`
     */
    TaskId: number;
    /**
     * 请求ID。
     * @example `75446CC1-FC9A-4595-8D96-089D73D7A63D`
     */
    RequestId: string;
    /**
     * 处理失败的域名或解析记录总数。
     * @example `2`
     */
    FailedCount: number;
    /**
     * 处理成功的域名或解析记录总数。
     * @example `2`
     */
    SuccessCount: number;
    /**
     * 批量操作类型。
     * @example `DOMAIN_ADD`
     */
    BatchType: string;
    /**
     * 处理失败的原因。
     * @example `failed_reason`
     */
    Reason: string;
}
