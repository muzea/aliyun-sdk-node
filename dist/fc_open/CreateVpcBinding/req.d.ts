export interface CreateVpcBindingRequest {
    /**
     * 服务名称。
     * @example `demo-service`
     */
    "serviceName": string;
    /**
     * 请求结构。
     */
    "body"?: {
        /**
         * 要绑定的vpcID。
         * @example `v-xxxx`
         */
        vpcId: string;
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
     * 自定义请求ID。
     * @example `asdf****`
     */
    "X-Fc-Trace-Id"?: string;
}
