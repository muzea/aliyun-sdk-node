export interface TagResourceRequest {
    /**
     * 标签详情。
     * @example `	 acs:fc:cn-shanghai:188077086902****:services/demo`
     */
    "body"?: {
        /**
         * 阿里云资源的标识。
         * > 您可以通过此参数确认该资源所属的账号、服务、地域等。目前只能给Top Level资源的服务进行标签的相关操作。
         * @example `acs:fc:cn-shanghai:188077086902****:services/demo`
         */
        resourceArn: string;
        /**
         * 标签字典。
         * @example `{"k1":"v1"}`
         */
        tags: any;
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
     * @example `my-test-trace-id`
     */
    "X-Fc-Trace-Id"?: string;
}
