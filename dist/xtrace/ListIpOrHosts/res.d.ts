export interface ListIpOrHostsResponse {
    /**
     * 请求ID。
     * @example `1E2B6A4C-6B83-4062-8B6F-AEEC1******`
     */
    RequestId: string;
    IpNames: {
        /**
         * IP地址列表。
         */
        IpName: string[];
    };
}
