export interface GetFunctionAsyncInvokeConfigResponse {
    /**
     * 创建时间。
     * @example `2020-09-10T02:45:02Z`
     */
    createdTime: string;
    /**
     * 异步调用目标的配置结构体。
     * @example ` {"onSuccess": null,"onFailure": {"destination": "acs:mns:cn-shanghai:123:/queues/xxx/messages"}}`
     */
    destinationConfig: any;
    /**
     * 函数名称。
     * @example `helloworld`
     */
    function: string;
    /**
     * 最后更改时间。
     * @example `2020-09-10T02:45:02Z`
     */
    lastModifiedTime: string;
    /**
     * 消息最大存活时长。
     * @example `300`
     */
    maxAsyncEventAgeInSeconds: number;
    /**
     * 异步调用失败后的最大重试次数。
     * @example `3`
     */
    maxAsyncRetryAttempts: number;
    /**
     * 服务的版本或别名。
     * @example `test`
     */
    qualifier: string;
    /**
     * 服务名称。
     * @example `demo-service`
     */
    service: string;
    /**
     * 是否开启异步任务。
     * - **true**：表示已开启异步任务。
     * - **false**：表示未开启异步任务。
     * @example `true`
     */
    statefulInvocation: boolean;
}
