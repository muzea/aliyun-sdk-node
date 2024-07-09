export interface ListClusterFromGrafanaResponse {
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `6849D41E-EED4-5C00-89F9-6047BBD9DCB4`
     */
    RequestId: string;
    /**
     * 用户集群信息列表。
     */
    PromClusterList: {
        /**
         * 更新时间。
         * @example `2021-11-16T08:49:34Z`
         */
        UpdateTime: number;
        /**
         * 创建时间。
         * @example `2021-12-09T02:05:04Z`
         */
        CreateTime: number;
        /**
         * 集群所属用户的主账号ID。
         * @example `1247285**`
         */
        UserId: string;
        /**
         * 自定义参数。
         * @example `{'Option': ['betaTestApproved']}`
         */
        Options: string;
        /**
         * Prometheus监控的安装状态：
         *   - true：已安装
         *   - false：未安装
         * @example `true`
         */
        IsControllerInstalled: boolean;
        /**
         * 集群的Agent状态。包括：
         * - INSTALL_FAILED：安装失败
         * - INSTALL_SUCCEED：安装成功
         * - NOT_REGISTER：未注册
         * @example `INSTALL_FAILED`
         */
        AgentStatus: string;
        /**
         * 扩展字段，JSON字符串。
         * @example `{\"app_id\":\"bbd\",\"task_id\":\"4305ba5bf14942daa6e553ed91f46988\"}`
         */
        Extra: string;
        /**
         * 安装时间的时间戳。
         * @example `1653532518000`
         */
        InstallTime: number;
        /**
         * 地域ID。
         * @example `cn-beijing`
         */
        RegionId: string;
        /**
         * 管控角色ID。
         * @example `1092`
         */
        ControllerId: string;
        /**
         * nodejsonar类型的日志列表。
         * @example `{}`
         */
        PluginsJsonArray: string;
        /**
         * 集群类型。
         * @example `cloud-product-prometheus`
         */
        ClusterType: string;
        /**
         * 集群名称。
         * @example `ay-ads-hangzhou`
         */
        ClusterName: string;
        /**
         * 集群的应用部署情况。
         * @example `{}`
         */
        StateJson: string;
        /**
         * 上次心跳汇报时间。
         * @example `1653532518000`
         */
        LastHeartBeatTime: number;
        /**
         * 节点数量。
         * @example `3`
         */
        NodeNum: number;
        /**
         * 集群数据库记录ID。
         * @example `16136`
         */
        Id: number;
        /**
         * 集群ID。
         * @example `c0df7ad9db0ed43128925ca04774c469e`
         */
        ClusterId: string;
    }[];
}
