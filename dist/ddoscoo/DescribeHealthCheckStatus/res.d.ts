export interface DescribeHealthCheckStatusResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `DE9FF9E1-569C-4B6C-AB6A-0F6D927BB27C`
     */
    RequestId: string;
    /**
     * 源站健康检查状态信息。
     */
    HealthCheckStatus: {
        /**
         * 源站健康检查状态。取值：
         * - **normal**：健康
         * - **abnormal**：不健康
         * @example `normal`
         */
        Status: string;
        /**
         * 转发端口。
         * @example `8080`
         */
        FrontendPort: number;
        /**
         * DDoS高防实例ID。
         * @example `ddoscoo-cn-mp91j1ao****`
         */
        InstanceId: string;
        /**
         * 转发协议。取值：
         * - **tcp**
         * - **udp**
         * @example `tcp`
         */
        Protocol: string;
        /**
         * 源站IP地址健康检查状态列表。
         */
        RealServerStatusList: {
            /**
             * 当前IP地址健康检查状态。取值：
             * - **normal**：健康
             * - **abnormal**：不健康
             * @example `abnormal`
             */
            Status: string;
            /**
             * 源站IP地址。
             * @example `192.0.XX.XX`
             */
            Address: string;
        }[];
    }[];
}
