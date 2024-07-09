export interface ListServiceGroupMonitorSourceTemplatesRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 幂等号
         * @example `xxxx`
         */
        clientToken: string;
        /**
         * 请求ID
         * @example `xxxxx`
         */
        requestId: string;
        /**
         * 服务组ID
         * @example `1000`
         */
        serviceGroupId: number;
    };
}
