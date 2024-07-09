export interface DescribePortMaxConnsResponse {
    /**
     * 本次请求的ID。
     * @example `08F79110-2AF5-4FA7-998E-7C5E75EACF9C`
     */
    RequestId: string;
    /**
     * DDoS高防实例的端口连接峰值信息。
     */
    PortMaxConns: {
        /**
         * DDoS高防实例的IP。
         * @example `203.***.***.117`
         */
        Ip: string;
        /**
         * DDoS高防实例的端口。
         * @example `80`
         */
        Port: string;
        /**
         * 最大每秒连接数。
         * @example `100`
         */
        Cps: number;
    }[];
}
