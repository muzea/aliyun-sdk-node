export interface DescribeGuestClusterAccessLogDashboardsResponse {
    /**
     * 请求ID
     * @example `BD65C0AD-D3C6-48D3-8D93-38D2015C****`
     */
    RequestId: string;
    /**
     * 数据面集群的访问日志报表信息
     */
    Dashboards: {
        /**
         * 报表地址
         * @example `test.com`
         */
        Url: string;
        /**
         * 报表标题
         * @example `test`
         */
        Title: string;
    }[];
    /**
     * 数据面集群ID
     * @example `ce3c25e247da24f3aab9b7edfae83****`
     */
    K8sClusterId: string;
}
