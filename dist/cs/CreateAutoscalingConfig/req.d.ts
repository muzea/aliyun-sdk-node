export interface CreateAutoscalingConfigRequest {
    /**
     * 集群ID。
     * @example `cdde1f21ae22e483ebcb068a6eb7f****`
     */
    "ClusterId": string;
    /**
     * 请求体数据。
     */
    "body"?: {
        /**
         * 缩容触发时延，节点缩容时需要连续满足触发时延所设定的时间，才能进行缩容。单位：分钟。
         * @example `10m`
         */
        cool_down_duration: string;
        /**
         * 静默时间。扩容出的节点，在静默时间过后，才能进入缩容判断。单位：分钟。
         * @example `10m`
         */
        unneeded_duration: string;
        /**
         * 缩容阈值，节点上Request的资源与总资源量的比值。
         * @example `0.5`
         */
        utilization_threshold: string;
        /**
         * GPU缩容阈值，节点上Request的资源与总资源量的比值。
         * @example `0.5`
         */
        gpu_utilization_threshold: string;
        /**
         * 弹性灵敏度，判断伸缩的间隔时间。单位：s。
         * @example `30s`
         */
        scan_interval: string;
        /**
         * 是否允许进行节点缩容。取值：
         * - `true`：允许缩容。
         * - `false`：禁止缩容。
         * @example `true`
         */
        scale_down_enabled: boolean;
        /**
         * 节点池扩容顺序策略。取值：
         * - `least-waste` ：默认策略。如果可扩容节点池有多个，从中选择一个资源浪费最少的节点池进行扩容。
         * - `random`：随机策略。如果可扩容节点池有多个，从中任意选择一个节点池进行扩容。
         * - `priority `：优先级策略。如果可扩容节点池有多个，会按照您自定义的伸缩组顺序，选择优先级高的节点池进行扩容。
         * 优先级的配置存储在kube-system命名空间下ConfigMap的`cluster-autoscaler-priority-expander`中。当自动伸缩进行扩容时，实时读取此配置，将可扩容的伸缩组ID与配置中伸缩组ID进行匹配，在匹配上的伸缩组中选取优先级最大值的伸缩组作为扩容对象。
         * @example `least-waste`
         */
        expander: string;
        /**
         * cluster autoscaler是否缩容有kube-system命名空间下的Pods（除了DaemonSet或mirror Pods）的节点。
         * - `true`：不会缩容。
         * - `false`：缩容。
         * @example `true`
         */
        skip_nodes_with_system_pods: boolean;
        /**
         * cluster autoscaler是否缩容有local storage（如EmptyDir 或 HostPath）的pods的节点
         * - `true`：不会缩容。
         * - `false`：缩容。
         * @example `false`
         */
        skip_nodes_with_local_storage: boolean;
        /**
         * 缩容时是否驱逐节点上的DaemonSet pods
         * - `true`：驱逐。
         * - `false`：不会驱逐。
         * @example `false`
         */
        daemonset_eviction_for_nodes: boolean;
        /**
         * cluster autoscaler缩容节点时等待节点上pod终止的最长时间。单位：s。
         * @example `14400s`
         */
        max_graceful_termination_sec: number;
        /**
         * 考虑缩容时Pod应该有的最小副本数。
         * @example `0`
         */
        min_replica_count: number;
        /**
         * 极速模式节点缩容成功后，是否删除其对应的K8s Node对象。
         * @example `false`
         */
        recycle_node_deletion_enabled: boolean;
        /**
         * 集群Ready节点数为0时，CA是否扩容。
         * @example `true`
         */
        scale_up_from_zero: boolean;
    };
}
