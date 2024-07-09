export interface DescribeVsTopDomainsByFlowResponse {
    /**
     * 账户下**正在运行**的域名总数。
     * @example `12`
     */
    DomainOnlineCount: number;
    /**
     * 按结束时间查询。
     * @example `2018-12-10T18:00:00Z`
     */
    EndTime: string;
    /**
     * 按开始时间查询。
     * @example `2021-12-10T10:00:00Z`
     */
    StartTime: string;
    /**
     * 本次操作请求ID
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 账号下的域名总数。
     * @example `20`
     */
    DomainCount: number;
    TopDomains: {
        /**
         * 域名列表。
         */
        TopDomain: {
            /**
             * 带宽峰值。
             * @example `100`
             */
            MaxBps: number;
            /**
             * 排名。
             * @example `1`
             */
            Rank: number;
            /**
             * 访问次数。
             * @example `100`
             */
            TotalAccess: number;
            /**
             * 流量占比。
             * @example `30.64191989360235`
             */
            TrafficPercent: string;
            /**
             * 域名。
             * @example `example.aliyundoc.com`
             */
            DomainName: string;
            /**
             * 总流量。
             * @example `100`
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
