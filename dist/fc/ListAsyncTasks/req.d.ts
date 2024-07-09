export interface ListAsyncTasksRequest {
    /**
     * 函数名称。
     * @example `my-func`
     */
    "functionName": string;
    /**
     * 异步任务ID前缀，指定后会返回符合前缀的异步任务列表。
     * @example `job-`
     */
    "prefix"?: string;
    /**
     * 分页标记，用来返回更多结果。第一次查询不需要提供这个参数，后续查询的 Token 从返回结果中获取。
     * @example `MTIzNCNhYmM=`
     */
    "nextToken"?: string;
    /**
     * 返回异步任务的数量。默认返回 50 个，取值范围[1,100]。
     * @example `10`
     */
    "limit"?: number;
    /**
     * 函数版本或别名。
     * @example `LATEST`
     */
    "qualifier"?: string;
    /**
     * 异步任务执行状态。
     * - Enqueued：异步消息已入队，等待处理。
     * - Succeeded：调用执行成功。
     * - Failed：调用执行失败。
     * - Running：调用执行中。
     * - Stopped：调用执行终止。
     * - Stopping：执行停止中。
     * - Invalid：您的执行因函数被删除等原因处于无效状态（任务未被执行）。
     * - Expired：您为任务配置了最长排队等待的期限。该任务因为超期被丢弃（任务未被执行）。
     * - Retrying：异步调用因执行错误重试中。
     * @example `Running`
     */
    "status"?: string;
    /**
     * 异步任务启动时间段的开始时间。
     * @example `1640966400000`
     */
    "startedTimeBegin"?: number;
    /**
     * 异步任务启动时间段的结束时间。
     * @example `1640966400000`
     */
    "startedTimeEnd"?: number;
    /**
     * 返回异步任务列表的排序方式。
     * - asc 表示升序
     * - desc 表示降序
     * @example `asc`
     */
    "sortOrderByTime"?: string;
    /**
     * 是否返回异步任务的入参。
     * - true：当该参数设置为true时，异步任务的列表将返回`invocationPayload`字段。
     * - false：当该参数设置为false时，则不返回`invocationPayload`字段。
     * > `invocationPayload`字段表示异步任务函数运行时的输入参数。
     * @example `true`
     */
    "includePayload"?: boolean;
}
