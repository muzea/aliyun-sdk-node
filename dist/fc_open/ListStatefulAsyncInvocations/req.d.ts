export interface ListStatefulAsyncInvocationsRequest {
    /**
     * 异步任务所属服务的名称。
     * @example `demo-service`
     */
    "serviceName": string;
    /**
     * 异步任务所属的函数名称。
     * @example `demo-function`
     */
    "functionName": string;
    /**
     * 异步任务所属服务的别名或版本。
     * @example `LATEST`
     */
    "qualifier"?: string;
    /**
     * 异步任务的执行状态。
     * - **Enqueued**：异步消息已入队，等待处理。
     * - **Succeeded**：调用执行成功。
     * - **Failed**：调用执行失败。
     * - **Running**：调用执行中。
     * - **Stopped**：调用执行终止。
     * - **Stopping**：执行停止中。
     * - **Invalid**：您的执行因函数被删除等原因处于无效状态（任务未被执行）。
     * - **Expired**：您为任务配置了最长排队等待的期限。该任务因为超期被丢弃（任务未被执行）。
     * - **Retrying**：异步调用因执行错误重试中。
     * @example `Running`
     */
    "status"?: string;
    /**
     * 用来返回更多结果。第一次查询不需要提供这个参数，后续查询的Token从返回结果中获取。
     * @example `caeba0****be03f84eb48b699f0a4883`
     */
    "nextToken"?: string;
    /**
     * 异步调用的返回个数。默认返回50个，取值范围\[1,100]。
     * @example `20`
     */
    "limit"?: number;
    /**
     * 异步任务启动时间段的开始时间。
     * @example `1640966400000`
     */
    "startedTimeBegin"?: number;
    /**
     * 异步任务的结束时间。
     * @example `1640966400000`
     */
    "startedTimeEnd"?: number;
    /**
     * 异步调用的排序方式：
     * - **asc**：正序。
     * - **desc**：逆序。
     * @example `desc`
     */
    "sortOrderByTime"?: string;
    /**
     * 异步调用前缀。限定返回的资源名称，假设`invocationidPrefix`为`job`，则返回的资源名必须以`job`开头。
     * @example `abcxxx`
     */
    "invocationIdPrefix"?: string;
    /**
     * - **true**：当该参数设置为`true`时，异步任务的列表将返回`invocationPayload`字段。
     * - **false**：当该参数设置为`false`时，则不返回`invocationPayload`字段。
     * > `invocationPayload`字段表示异步任务函数运行时的输入参数。
     * @example `true`
     */
    "includePayload"?: boolean;
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 函数代码包的CRC-64值，用于校验完整性。应当由工具自动计算。
     * @example `1506052139770049xxxx`
     */
    "X-Fc-Code-Checksum"?: string;
    /**
     * 请求返回日志。
     * - **Tail**：返回当前请求产生的最后4 KB日志。
     * - **None**：默认值，不返回请求日志。
     * @example `Tail`
     */
    "X-Fc-Log-Type"?: string;
    /**
     * 调用方式。
     * - **Sync**：同步调用。
     * - **Async**：异步调用。
     * @example `Async`
     */
    "X-Fc-Invocation-Type"?: string;
    /**
     * 函数的调用开始日期，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Sat, 14 Jul 2017 07:02:38 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 函数计算调用请求的调用链ID。
     * @example `abcxxx`
     */
    "X-Fc-Trace-Id"?: string;
}
