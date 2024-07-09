export interface DescribeTopDomainsByFlowResponse {
    /**
     * 账号下状态为**正在运行**的域名总数。
     * @example `68`
     */
    DomainOnlineCount: number;
    /**
     * 结束时间。
     * @example `2019-12-23T08:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2019-12-22T08:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `4E09C5D7-E1CF-4CAA-A45E-8727F4C8FD70`
     */
    RequestId: string;
    /**
     * 账号下的域名总数。
     * @example `68`
     */
    DomainCount: number;
    TopDomains: {
        /**
         * 排名域名列表。
         */
        TopDomain: {
            /**
             * 带宽峰值。
             * @example `22139626`
             */
            MaxBps: number;
            /**
             * 排名。
             * @example `1`
             */
            Rank: number;
            /**
             * 访问次数。
             * @example `107784230`
             */
            TotalAccess: number;
            /**
             * 流量占比。
             * @example `30.64191989360235`
             */
            TrafficPercent: string;
            /**
             * 加速域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 总流量。
             * @example `2043859876683.9001`
             */
            TotalTraffic: string;
            /**
             * 带宽峰值时刻。
             * @example `1457111400`
             */
            MaxBpsTime: string;
        }[];
    };
}
