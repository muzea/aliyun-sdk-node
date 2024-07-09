export interface MoveDatabasesToNetworkDomainResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E5B1BC32-72B2-5BFD-BF75-5D38261264D1`
     */
    RequestId: string;
    /**
     * 接口调用的结果。
     */
    Results: {
        /**
         * 接口调用的结果。
         * > LICENSE_OUT_OF_LIMIT 表示当前版本许可没有开启网络域功能。
         * @example `OK`
         */
        Code: string;
        /**
         * 数据库实例ID。
         * @example `45`
         */
        DatabaseId: string;
        /**
         * 错误信息。
         * @example `无`
         */
        Message: string;
    }[];
}
