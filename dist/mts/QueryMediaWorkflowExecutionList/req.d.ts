export interface QueryMediaWorkflowExecutionListRequest {
    /**
     * 媒体工作流执行实例ID列表，可以通过**MPS控制台** > **工作流管理** > **执行实例**获取。使用半角逗号（,）分隔，一次最多查询10个。
     * @example `48e33690ac19445488c706924321****`
     */
    "RunIds": string;
}
