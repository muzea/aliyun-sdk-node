export interface UpgradeClusterNodepoolRequest {
    /**
     * 集群ID。
     * @example `c106f377e16f34eb1808d6b9362c9****`
     */
    "ClusterId": string;
    /**
     * 节点池ID。
     * @example `np31da1b38983f4511b490fc62108a****`
     */
    "NodepoolId": string;
    /**
     * 请求参数。
     */
    "body"?: {
        /**
         * 节点系统镜像ID。
         * @example `aliyun_2_1903_x64_20G_alibase_20200529.vhd`
         */
        image_id: string;
        /**
         * 节点运行时版本。您可以调用[DescribeKubernetesVersionMetadata](~~2667899~~)在runtime中获取运行时版本信息。
         * @example `1.5.10`
         */
        runtime_version: string;
        /**
         * 节点Kubernetes版本。您可以调用[DescribeKubernetesVersionMetadata](~~2667899~~)在current_version中获取当前集群版本信息。
         * @example `1.22.15-aliyun.1`
         */
        kubernetes_version: string;
        /**
         * 运行时类型。您可以调用[DescribeKubernetesVersionMetadata](~~2667899~~)在runtime中获取运行时信息。
         * @example `containerd`
         */
        runtime_type: string;
        /**
         * 是否使用替盘升级。取值：
         * - true：使用。
         * - false：不使用。
         * 默认值：false
         * @example `false`
         */
        use_replace: boolean;
        /**
         * 轮转配置。
         */
        rolling_policy: {
            /**
             * 暂停策略。取值：
             * - FirstBatch：第一批完成后暂停。
             * - EveryBatch：每批完成后暂停。
             * - NotPause： 不暂停。
             * @example `NotPause`
             */
            pause_policy: string;
            /**
             * 批次之间的升级间隔时间，仅在暂停策略为NotPause时生效，单位为分钟，取值范围5-120分钟。
             * @example `5分钟`
             */
            batch_interval: number;
            /**
             * 最大不可用节点数。
             * @example `3`
             */
            max_parallelism: number;
        };
        /**
         * 指定升级的节点列表。未指定时默认升级节点池内所有节点。
         */
        node_names: string[];
    };
}
