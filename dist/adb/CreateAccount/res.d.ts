export interface CreateAccountResponse {
    /**
     * 任务ID。
     * @example `1564657730`
     */
    TaskId: number;
    /**
     * 请求ID。
     * @example `2FED790E-FB61-4721-8C1C-07C627FA5A19`
     */
    RequestId: string;
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * @example `am-bp1r053byu48p****`
     */
    DBClusterId: string;
}
