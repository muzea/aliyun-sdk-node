export interface DescribeStagingIpResponse {
    /**
     * 请求ID。
     * @example `1B9E0E83-24AC-49F4-9EE0-BF5EB03E8381`
     */
    RequestId: string;
    IPV4s: {
        /**
         * IPv4格式的IP地址列表。
         */
        IPV4: string[];
    };
}
