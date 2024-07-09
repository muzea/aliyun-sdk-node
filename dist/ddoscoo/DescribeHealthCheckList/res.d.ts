export interface DescribeHealthCheckListResponse {
    /**
     * 本次请求的ID。
     * @example `83B4AF42-E8EE-4DC9-BD73-87B7733A36F9`
     */
    RequestId: string;
    /**
     * 健康检查配置列表。
     */
    HealthCheckList: {
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
         * 健康检查配置信息。
         */
        HealthCheck: {
            /**
             * 响应超时时间。取值范围：**1**~**30**，单位：秒。
             * @example `5`
             */
            Timeout: number;
            /**
             * 协议类型。取值：
             * - **tcp**：四层
             * - **http**：七层
             * @example `tcp`
             */
            Type: string;
            /**
             * 域名。
             * > 仅适用于七层健康检查。
             * @example `www.aliyun.com`
             */
            Domain: string;
            /**
             * 检查间隔。取值范围：**1**~**30**，单位：秒。
             * @example `15`
             */
            Interval: number;
            /**
             * 健康阈值。取值范围：**1**~**10**。
             * @example `3`
             */
            Up: number;
            /**
             * 不健康阈值。取值范围：**1**~**10**。
             * @example `3`
             */
            Down: number;
            /**
             * 检查端口。
             * @example `8080`
             */
            Port: number;
            /**
             * 检查路径。
             * > 仅适用于七层健康检查。
             * @example `/abc`
             */
            Uri: string;
        };
    }[];
}
