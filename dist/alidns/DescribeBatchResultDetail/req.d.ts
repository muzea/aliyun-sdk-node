export interface DescribeBatchResultDetailRequest {
    /**
     * 用户语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 当前页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页设置的大小。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 任务ID。
     * @example `83618818`
     */
    "TaskId"?: number;
    /**
     * 批量操作类型。取值：
     * - **DOMAIN_ADD**：批量添加域名
     * - **DOMAIN_DEL**：批量删除域名
     * - **RR_ADD**：批量添加解析
     * - **RR_DEL**：批量删除解析
     * @example `DOMAIN_ADD`
     */
    "BatchType"?: string;
    /**
     * 获取指定状态结果详情，不传入则获取所有。
     * @example `SUCCESS`
     */
    "Status"?: string;
}
