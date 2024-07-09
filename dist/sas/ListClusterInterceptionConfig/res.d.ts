export interface ListClusterInterceptionConfigResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `49FDE92F-A0B8-56CC-B7A8-23B17646****`
     */
    RequestId: string;
    /**
     * 集群相关配置信息列表。
     */
    ClusterConfigList: {
        /**
         * 集群名称。
         * @example `container-opa-kill-02`
         */
        ClusterName: string;
        /**
         * 规则拦截开关状态。取值：
         * - **0**：关闭
         * - **1**：打开
         * @example `1`
         */
        InterceptionSwitch: number;
        /**
         * 集群ID。
         * @example `c9051d30d8a044b4d99e1cb5d25ac****`
         */
        ClusterId: string;
        /**
         * 集群容器防火墙状态。
         * - **-1**：未知
         * - **0**：异常
         * - **1**：正常
         * - **2**：正常待确认
         * @example `0`
         */
        ClusterCNNFStatus: number;
        /**
         * 生效规则数目。
         * @example `12`
         */
        OpenRuleCount: number;
        /**
         * 总规则数目。
         * @example `123`
         */
        TotalRuleCount: number;
        /**
         * 是否支持容器防火墙。
         * @example `false`
         */
        SupportCNNF: boolean;
        /**
         * 集群类型。取值：
         * - **ManagedKubernetes**：kubernetes托管版
         * - **NotManagedKubernetes**：kubernetes非托管版
         * - **PrivateKubernetes**：私有集群
         * - **kubernetes**：kubernetes专有版
         * - **ask**：ask专有版
         * @example `ManagedKubernetes`
         */
        ClusterType: string;
    }[];
    /**
     * 分页查询时的页面信息。
     */
    PageInfo: {
        /**
         * 查询到的集群拦截规则信息的总数量。
         * @example `11`
         */
        TotalCount: number;
        /**
         * 当前页面显示的集群拦截规则信息的数量。
         * @example `11`
         */
        Count: number;
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrrentPage: number;
        /**
         * 分页查询时，每页显示的集群拦截规则信息的数量。
         * @example `20`
         */
        PageSize: number;
    };
}
