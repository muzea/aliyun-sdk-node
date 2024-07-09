export interface DescribeClustersInServiceMeshResponse {
    /**
     * 请求ID。
     * @example `31d3a0f0-07ed-4f6e-9004-1804498c****`
     */
    RequestId: string;
    /**
     * 集群列表信息。
     */
    Clusters: {
        /**
         * 安全组ID。
         * @example `sg-bp197668l6iupljy****`
         */
        SgId: string;
        /**
         * 专有网络ID。
         * @example `vpc-2zew0rajjkmxy2369****`
         */
        VpcId: string;
        /**
         * 集群创建时间。
         * @example `2020-05-12T15:38:16+08:00`
         */
        CreationTime: string;
        /**
         * 集群最后修改时间。
         * @example `2020-05-12T15:38:16+08:00`
         */
        UpdateTime: string;
        /**
         * 异常信息。
         * @example `,`
         */
        ErrorMessage: string;
        /**
         * 集群状态。
         * @example `running`
         */
        State: string;
        /**
         * 访问日志配置列表。
         */
        AccessLogDashboards: {
            /**
             * 访问日志地址。
             * @example `https://sls.console.aliyun.com/next/project/****​/dashboard/mesh-access-log_details_cn`
             */
            Url: string;
            /**
             * 访问日志标题。
             * @example `mesh-access-log_details_cn`
             */
            Title: string;
        }[];
        /**
         * 集群所在地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 集群域名。
         * @example `example.com`
         */
        ClusterDomain: string;
        /**
         * 集群版本号。
         * @example `v1.16.6-aliyun.1`
         */
        Version: string;
        /**
         * 集群类型。
         * @example `Ask`
         */
        ClusterType: string;
        /**
         * 集群名称。
         * @example `ask1`
         */
        Name: string;
        /**
         * 集群ID。
         * @example `c80f45444b3da447da60a911390c2****`
         */
        ClusterId: string;
        /**
         * 集群中Logtail组件的安装状态，取值：
         * - `logtail_installed`：Logtail组件已安装。
         * -` logtail_uninstalled`：Logtail组件未安装。
         * - `logtail_state_get_error`：Logtail组件安装失败。
         * @example `logtail_installed`
         */
        LogtailInstalledState: string;
    }[];
}
