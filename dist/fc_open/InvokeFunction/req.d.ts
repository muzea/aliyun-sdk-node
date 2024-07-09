export interface InvokeFunctionRequest {
    /**
     * 调用方式。取值说明如下：
     * - **Sync**：同步调用。
     * - **Async**：异步调用。
     * 默认值：同步调用。
     * @example `Sync`
     */
    "X-Fc-Invocation-Type"?: string;
    /**
     * 请求返回日志。
     * - **Tail**：返回当前请求产生的最后4 KB日志。
     * - **None**：默认值，不返回请求日志。
     * @example `None`
     */
    "X-Fc-Log-Type"?: string;
    /**
     * 服务名称。
     * @example `demoService`
     */
    "serviceName": string;
    /**
     * 服务的版本ID或者别名。
     * @example `demoQualifier`
     */
    "qualifier"?: string;
    /**
     * 函数名称。
     * @example `demoFunction`
     */
    "functionName": string;
    /**
     * 事件（event），类型为binary。函数计算服务将事件传递给用户的函数来处理。
     * @example `{"key":"value"}`
     */
    "body"?: string;
    /**
     * 异步任务ID。您需要事先开启异步任务。
     * > 建议您在使用SDK调用时设置与业务相关的ID，方便对相关执行进行后续操作。例如，一个视频处理函数可以使用视频文件名作为调用ID，通过该ID可以查看视频是否处理完成或终止视频的处理。该ID的命名规则只能以英文大小写字母或下划线（\_）开头，由英文大小写字母、数字（0-9）、下划线（\_）及短划线（-）组成，不超过128个字符。如果您未设置异步调用的ID，系统则会自动生成一个ID。
     * @example `test-invoke-id`
     */
    "X-Fc-Stateful-Async-Invocation-Id"?: string;
    /**
     * 请求级别异步任务开关。取值说明如下：
     * - **true**：开启本次异步调用为异步任务。
     * - **false**：默认值。
     * > 本参数仅面向异步调用，对异步调用生效，同步调用不生效。
     * @example `true`
     */
    "X-Fc-Stateful-Async-Invocation-Enable"?: string;
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 函数的调用开始日期，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Wed, 11 May 2022 09:00:00 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 调用函数的ID，与返回参数**requestId**对应。
     * @example `test-trace-id`
     */
    "X-Fc-Trace-Id"?: string;
}
