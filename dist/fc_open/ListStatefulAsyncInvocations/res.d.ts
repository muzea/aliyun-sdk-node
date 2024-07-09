export interface ListStatefulAsyncInvocationsResponse {
    /**
     * 用来返回更多的查询结果。如果这个值没有返回，则说明没有更多结果。
     * @example `8bj81uI8n****`
     */
    nextToken: string;
    /**
     * 异步任务的列表。
     */
    invocations: any[];
}
