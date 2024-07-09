export interface UntagResourceRequest {
    /**
     * 取消标签资源详情。
     * @example `acs:fc:cn-shanghai:188077086902****:services/demo`
     */
    "body"?: {
        /**
         * 阿里云资源的标识。
         * > 您可以通过此参数确认该资源所属的账号、服务、地域等。目前只能给Top Level资源的服务进行标签的相关操作。
         * @example `acs:fc:cn-shanghai:188077086902****:services/demo`
         */
        resourceArn: string;
        /**
         * 要删除的标签的键值列表。
         */
        tagKeys: string[];
        /**
         * 是否删除所有标签，当且仅当未传入标签键时生效。取值说明如下：
         *   - **true**：删除所有标签。
         *   - **false**：不删除所有标签。
         * @example `false`
         */
        all: boolean;
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
