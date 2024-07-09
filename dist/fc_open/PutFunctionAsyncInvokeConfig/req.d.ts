export interface PutFunctionAsyncInvokeConfigRequest {
    /**
     * 服务名称。
     * @example `demo-service`
     */
    "serviceName": string;
    /**
     * 函数名称。
     * @example `helloworld`
     */
    "functionName": string;
    /**
     * 服务的版本或别名。
     * @example `test`
     */
    "qualifier"?: string;
    /**
     * 异步调用配置。
     */
    "body"?: {
        /**
         * 异步调用目标的配置结构体。
         */
        destinationConfig: any;
        /**
         * 消息最大存活时长，取值范围\[1,604800]，默认为 86400，单位为秒。
         * @example `300`
         */
        maxAsyncEventAgeInSeconds: number;
        /**
         * 异步调用失败后的最大重试次数，非必填。取值范围\[0,8]。当您未进行配置时，系统内部默认重试次数为3。
         * @example `3`
         */
        maxAsyncRetryAttempts: number;
        /**
         * 是否开启异步任务。
         * - **true**：表示已开启异步任务。
         * - **false**：表示未开启异步任务。
         * @example `true`
         */
        statefulInvocation: boolean;
    };
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
     * 函数计算调用请求的调用链ID。
     * @example `ksdfjkdmkki***`
     */
    "X-Fc-Trace-Id"?: string;
}
