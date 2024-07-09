export interface ListFunctionAsyncInvokeConfigsResponse {
    /**
     * 异步配置列表。
     */
    configs: {
        /**
         * 创建时间。
         * @example `2020-09-10T02:45:02Z`
         */
        createdTime: string;
        /**
         * 异步调用目标的配置结构体。如果您未进行配置，则该项为空值（Null）。
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
         * 消息最大存活时长。如果您未进行配置，则该项为空值（Null）。
         * @example `300`
         */
        maxAsyncEventAgeInSeconds: number;
        /**
         * 异步调用失败后的最大重试次数。如果您未进行配置，则该项为空值（Null）。
         * @example `3`
         */
        maxAsyncRetryAttempts: number;
        /**
         * 服务所属版本或别名。
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
         * 如果您未进行配置，则该项为空值（Null）。
         * @example `true`
         */
        statefulInvocation: boolean;
    }[];
    /**
     * 下次查询Token。
     * @example `caeba0be03****f84eb48b699f0a4883`
     */
    nextToken: string;
}
