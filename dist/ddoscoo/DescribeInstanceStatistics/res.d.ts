export interface DescribeInstanceStatisticsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `642319A9-D1F2-4459-A447-E57CFC599FDE`
     */
    RequestId: string;
    /**
     * DDoS高防实例的统计信息。
     */
    InstanceStatistics: {
        /**
         * 已防护的域名数量。
         * @example `1`
         */
        DomainUsage: number;
        /**
         * 本月已用高级防护次数。
         * > 只有DDoS高防（非中国内地）实例拥有该属性。
         * @example `1`
         */
        DefenseCountUsage: number;
        /**
         * DDoS高防实例ID。
         * @example `ddoscoo-cn-mp91j1ao****`
         */
        InstanceId: string;
        /**
         * 已防护的站点数量。
         * @example `1`
         */
        SiteUsage: number;
        /**
         * 已防护的端口数量。
         * @example `2`
         */
        PortUsage: number;
    }[];
}
