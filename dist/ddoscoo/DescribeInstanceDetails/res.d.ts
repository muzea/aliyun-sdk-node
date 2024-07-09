export interface DescribeInstanceDetailsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3C814429-21A5-4673-827E-FDD19DC75681`
     */
    RequestId: string;
    /**
     * DDoS高防实例的IP和线路信息。
     */
    InstanceDetails: {
        /**
         * DDoS高防实例的防护线路。
         * @example `coop-line-001`
         */
        Line: string;
        /**
         * DDoS高防实例ID。
         * @example `ddoscoo-cn-zvp2eibz****`
         */
        InstanceId: string;
        /**
         * DDoS高防实例的IP信息。
         */
        EipInfos: {
            /**
             * DDoS高防IP的状态。取值：
             * - **normal**：表示正常。
             * - **expired**：表示已过期。
             * - **defense**：表示清洗中。
             * - **blackhole**：表示黑洞中。
             * - **punished**：表示处罚中。
             * @example `normal`
             */
            Status: string;
            /**
             * IP转发模式。取值：
             * - **fnat**：表示源站和客户端的IP版本一致，即IPv4地址客户端请求转发到IPv4地址源站、IPv6地址客户端请求转发到IPv6地址源站。
             * - **v6tov4**：表示IPv6地址客户端请求转发到IPv4地址源站。
             * @example `fnat`
             */
            IpMode: string;
            /**
             * DDoS高防IP地址。
             * @example `203.117.XX.XX`
             */
            Eip: string;
            /**
             * IP协议版本。取值：
             * - **Ipv4**：表示IPv4协议。
             * - **Ipv6**：表示IPv6协议。
             * @example `Ipv4`
             */
            IpVersion: string;
            /**
             * 是否配置了自定义证书。
             * @example `true`
             */
            CertConfigured: boolean;
            /**
             * 自定义配置的TLS版本。
             * @example `tls1.2`
             */
            TlsVersion: string;
            /**
             * 是否支持TLS1.3版本。
             * @example `false`
             */
            Ssl13Enabled: boolean;
            /**
             * 实例类型。
             * @example `default`
             */
            FunctionVersion: string;
        }[];
    }[];
}
