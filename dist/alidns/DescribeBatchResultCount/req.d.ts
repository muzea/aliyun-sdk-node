export interface DescribeBatchResultCountRequest {
    /**
     * 用户语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 任务ID。
     * 如果TaskId不为空，返回TaskId对应任务的执行结果；如果TaskId为空，返回最后一次任务的执行结果。
     * @example `123456`
     */
    "TaskId"?: number;
    /**
     * 批量操作类型，取值：
     * - **DOMAIN_ADD**：批量添加域名
     * - **DOMAIN_DEL**：批量删除域名
     * - **RR_ADD**：批量添加解析
     * - **RR_DEL**：批量删除解析
     * @example `DOMAIN_ADD`
     */
    "BatchType"?: string;
}
