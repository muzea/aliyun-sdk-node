export interface ListSubscriptionServiceGroupsResponse {
    /**
     * Id of the request
     * @example `89f51d2e-5527-4f6c-a6c6-4411b5496e9f`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 主键
         * @example `123113`
         */
        serviceId: number;
        /**
         * 服务组名称
         * @example `服务A`
         */
        serviceName: string;
        /**
         * 服务组描述
         * @example `服务描述`
         */
        serviceGroupDescription: string;
    }[];
}
