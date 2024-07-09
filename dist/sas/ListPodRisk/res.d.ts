export interface ListPodRiskResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `94254AD7-5026-5847-833B-403C2326BD6E`
     */
    RequestId: string;
    /**
     * 容器组安全风险。
     */
    PodRiskList: {
        /**
         * 容器组名称。
         * @example `expoit-xxx-b****`
         */
        Pod: string;
        /**
         * 节点名称。
         * @example `test`
         */
        NodeName: string;
        /**
         * 容器集群的ID。
         * @example `c1d903a628af043659a043af59d89****`
         */
        ClusterId: string;
        /**
         * 容器组IP。
         * @example `172.0.XXX.XXX`
         */
        PodIp: string;
        /**
         * 创建时间的时间戳。单位：毫秒。
         * @example `1644283112720`
         */
        CreateTime: number;
        /**
         * 集群名称。
         * @example `test66`
         */
        ClusterName: string;
        /**
         * K8s命名空间。
         * @example `kube-system`
         */
        Namespace: string;
        /**
         * 容器组的漏洞数。
         * @example `1`
         */
        VulCount: number;
        /**
         * 容器组的告警数。
         * @example `10`
         */
        AlarmCount: number;
        /**
         * 容器组的基线问题数。
         * @example `1`
         */
        HcCount: number;
        /**
         * 节点的实例ID。
         * @example `i-7yvdq597****`
         */
        InstanceId: string;
    }[];
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 数据的总条数。
         * @example `29`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `20`
         */
        Count: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `2-`
         */
        PageSize: number;
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
    };
}
