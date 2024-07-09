export interface DescribeServiceMeshClustersResponse {
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
         * @example `vpc-8vbrwmt95b4zf6wf7****`
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
         * 集群的异常信息。
         * @example `fail`
         */
        ErrorMessage: string;
        /**
         * 集群状态，取值：
         * - `running`：运行中。
         * - `starting `：启动中。
         * - `stopping `：终止中。
         * - `stopped`：已停止。
         * - `failed`：失败。
         * @example `running`
         */
        State: string;
        /**
         * 服务网格ID。
         * @example `cb8963379255149cb98c8686f274x****`
         */
        ServiceMeshId: string;
        /**
         * 集群所在地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 集群域名。
         * @example `c.com`
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
         * 数据面集群不能加入ASM的原因，取值：
         * - `0`：表示正常，可加入。
         * - `1`：表示您没有集群的adminlevel权限。
         * - `2`：集群和网格位于不同的VPC中，并且它们之间没有CEN。
         * - `3`：集群的CIDR与网格冲突。
         * - `4`：集群已具有名为istio-system的命名空间。
         * @example `0`
         */
        ForbiddenFlag: number;
        /**
         * 数据面集群不能加入ASM的详细原因，格式为JSON字符串，格式为：
         * ```
         * [
         *   {
         *     "cluster": "cdd55bd6e054b4c6ca18ec02614******",
         *     "object": "Pod",
         *     "cidr": "172.16.0.0/24"
         *   },
         *   {
         *     "cluster": "cfa37fdf7cb1641e1976f8293ac******",
         *     "object": "Pod",
         *     "cidr": "172.16.0.0/24"
         *   }
         * ]
         * ```
         * 以上例子中表示集群`cdd55bd6e054b4c6ca18ec02614******`的Pod CIDR `172.16.0.0/24`与集群`cfa37fdf7cb1641e1976f8293ac******`的Pod CIDR `172.16.0.0/24`发生了冲突。
         * `object`取值：
         * - `Pod`
         * - `Service`
         * - `VSwitch`
         * - `VPC`
         * - `VPC CIDR`
         * @example `[{"cluster":"cdd55bd6e054b4c6ca18ec02614******", "object":"Pod", "cidr":"172.16.0.0/24"},{"cluster":"cfa37fdf7cb1641e1976f8293ac******", "object":"Pod", "cidr":"172.16.0.0/24"}]`
         */
        ForbiddenInfo: string;
    }[];
    /**
     * 当前Region下的容器服务集群总数。
     * @example `5`
     */
    NumberOfClusters: number;
}
