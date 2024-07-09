export interface InvokeFunctionRequest {
    /**
     * 函数名称
     * @example `my-func`
     */
    "functionName": string;
    /**
     * 函数版本或别名
     * @example `LATEST`
     */
    "qualifier"?: string;
    /**
     * 函数调用类型。Sync或者Async。
     * @example `Sync`
     */
    "x-fc-invocation-type"?: string;
    /**
     * 函数调用返回日志类型。None或者Tail。
     * @example `Tail`
     */
    "x-fc-log-type"?: string;
    /**
     * 函数调用参数
     * @example `event`
     */
    "body"?: string;
    /**
     * 异步任务 ID。您需要事先开启异步任务。
     * > 建议您在使用 SDK 调用时设置与业务相关的 ID，方便对相关执行进行后续操作。例如，一个视频处理函数可以使用视频文件名作为调用 ID，通过该 ID 可以查看视频是否处理完成或终止视频的处理。该 ID 的命名规则只能以英文大小写字母或下划线（_）开头，由英文大小写字母、数字（0-9）、下划线（_）及短划线（-）组成，不超过 128 个字符。如果您未设置异步调用的 ID，系统则会自动生成一个 ID。
     * @example `test-id`
     */
    "x-fc-async-task-id"?: string;
}
