export interface DescribeL7UsKeepaliveResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `39499F01-19D9-4EA4-A0E9-C6014BA5CDHE`
     */
    RequestId: string;
    /**
     * 配置的回源长连接参数。
     */
    RsKeepalive: {
        /**
         * 是否开启回源长连接。取值：
         * - **true**：表示开启。
         * - **false**：表示不开启。
         * @example `true`
         */
        Enabled: boolean;
        /**
         * 长连接复用的请求数量。
         * @example `1000`
         */
        KeepaliveRequests: number;
        /**
         * 长连接的空闲超时时间。
         * @example `30`
         */
        KeepaliveTimeout: number;
    };
}
