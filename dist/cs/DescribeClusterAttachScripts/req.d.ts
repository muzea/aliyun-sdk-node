export interface DescribeClusterAttachScriptsRequest {
    /**
     * 集群ID。
     * @example `ca375a93a30474552ad2a0ebe183e****`
     */
    "ClusterId": string;
    /**
     * 请求体参数。
     * @example `amd64`
     */
    "body"?: {
        /**
         * 节点池ID，添加节点时可以将该节点添加到指定的节点池中。
         * > 如果不指定节点池ID，默认将节点添加至默认节点池。
         * @example `np1c9229d9be2d432c93f77a88fca0****`
         */
        nodepool_id: string;
        /**
         * 手动添加已有实例到集群时，是否对该实例进行数据盘挂载，将容器和镜像存储在数据盘上。取值：
         * - `true`：对实例进行数据盘挂载，数据盘内原有数据将丢失，请注意备份数据。
         * - `false`：不对实例进行数据盘挂载。
         * 默认值：`false`。
         * 数据挂载规则：
         * - 如果 ECS 已挂载数据盘，且最后一块数据盘的文件系统未初始化，系统会自动将该数据盘格式化为 ext4，用来存放内容/var/lib/docker、/var/lib/kubelet 。
         * - 如果 ECS 未挂载数据盘，则不会挂载新的数据盘。
         * @example `false`
         */
        format_disk: boolean;
        /**
         * 添加已有实到集群时，是否保留实例名称。如果不保留，则实例名称格式为`worker-k8s-for-cs-<clusterid>`。取值：
         * - `true`：保留实例名称。
         * - `false`：不保留实例名称，会用系统规则进行替换。
         * 默认值：`true`。
         * @example `true`
         */
        keep_instance_name: boolean;
        /**
         * 如果指定了RDS实例列表，集群节点ECS会自动加入RDS访问白名单。
         */
        rds_instances: string[];
        /**
         * 节点CPU架构。支持的CPU架构包括`amd64`、`arm`、`arm64`。
         * 默认值：`amd64`。
         * > 当集群类型为边缘托管版时必填。
         * @example `amd64`
         */
        arch: string;
        /**
         * 节点的接入配置参数。
         * > 当集群类型为边缘托管版时必填。
         * @example `{\"enableIptables\": true,\"manageRuntime\": true,\"quiet\": true,\"allowedClusterAddons\": [\"kube-proxy\",\"flannel\",\"coredns\"]}`
         */
        options: string;
    };
}
