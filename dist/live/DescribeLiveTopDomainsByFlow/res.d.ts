export interface DescribeLiveTopDomainsByFlowResponse {
    /**
     * 账户下正在运行域名总数。
     * @example `1`
     */
    DomainOnlineCount: number;
    /**
     * 结束时间。
     * @example `2018-03-20T16:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2018-03-17T16:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `33834C3E-388E-5FFE-A8AE-63575035C064`
     */
    RequestId: string;
    /**
     * 账户下域名总数。
     * @example `1`
     */
    DomainCount: number;
    TopDomains: {
        /**
         * 域名排名列表。
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
             * 域名。
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
