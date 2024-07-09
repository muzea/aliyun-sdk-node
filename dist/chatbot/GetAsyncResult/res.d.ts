export interface GetAsyncResultResponse {
    /**
     * 客户服务执行结果数据
     * @example `{"message":"执行完成"}`
     */
    Data: string;
    /**
     * 执行状态：
     * |  字段值   | 含义  |
     * |----|----|
     * |  Success  | 任务执行成功  |
     * | Runninig  | 任务在执行中 |
     * | Fail  | 任务执行失败 |
     * @example `Success`
     */
    Status: string;
    /**
     * 请求id
     * @example `F79E7305-5314-5069-A701-9591AD051902`
     */
    RequestId: string;
}
