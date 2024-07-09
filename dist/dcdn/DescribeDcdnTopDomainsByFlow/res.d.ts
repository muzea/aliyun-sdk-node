export interface DescribeDcdnTopDomainsByFlowResponse {
    /**
     * 账户下**正在运行**域名总数。
     * @example `68`
     */
    DomainOnlineCount: number;
    /**
     * 结束时间。
     * @example `2016-03-14T07:34:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2016-03-14T06:34:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `4E09C5D7-E1CF-4CAA-A45E-8727F4C8FD70`
     */
    RequestId: string;
    /**
     * 账户下域名总数。
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
             * @example `3`
             */
            TotalAccess: number;
            /**
             * 流量占比。
             * @example `21.686305274906182`
             */
            TrafficPercent: string;
            /**
             * 域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 总流量。
             * @example `123`
             */
            TotalTraffic: string;
            /**
             * 带宽峰值时刻，使用 ISO8601 表示法，并使用UTC时间。
             * @example `2018-11-01T08:10:00Z`
             */
            MaxBpsTime: string;
        }[];
    };
}
