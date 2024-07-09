export interface MoveHostsToNetworkDomainResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `F9B9E190-9C8E-5FEE-B963-7E9F1FD7FB4E`
     */
    RequestId: string;
    /**
     * 接口的调用结果信息。
     */
    Results: {
        /**
         * 接口调用的结果。
         * > LICENSE_OUT_OF_LIMIT 表示当前版本许可没有开启网络域功能。
         * @example `OK`
         */
        Code: string;
        /**
         * 主机ID。
         * @example `1`
         */
        HostId: string;
        /**
         * 错误信息。
         * @example `无`
         */
        Message: string;
    }[];
}
