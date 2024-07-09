export interface AddExistedNodesRequest {
    /**
     * 该节点待加入的集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 为待加入集群的计算节点指定的镜像，该镜像需满足以下条件：
     * - 指定的镜像的操作系统应与集群中节点的操作系统保持一致。如：集群中节点的操作系统为CentOS时，只能指定CentOS镜像。
     * > 如果集群为混合云集群，并且开启支持多系统功能，当集群中节点的操作系统为Windows时，指定的镜像可以为Windows、CentOS。
     * - 指定的镜像应与集群节点的镜像大版本号保持一致，如待加入集群为CentOS 7.x，指定的镜像也应该为CentOS 7.x。
     * 您可以通过调用[ListImages](~~87213~~)和[ListCustomImages](~~87215~~)接口获取镜像ID。
     * @example `centos_7_06_64_20G_alibase_20190711.vhd`
     */
    "ImageId": string;
    /**
     * 该节点要加入的集群中的队列。
     * @example `workq`
     */
    "JobQueue"?: string;
    /**
     * 镜像类型。取值范围：
     * - system：公共镜像
     * - self：自定义镜像
     * - others：共享镜像
     * - marketplace：镜像市场镜像
     * 默认值：system
     * @example `system`
     */
    "ImageOwnerAlias": string;
    /**
     * 要添加的节点信息。
     */
    "Instance": {
        /**
         * 第N个（N从1开始编号，可以有多条）要添加的节点ID。取值范围：1~100。
         * @example `i-bp16mxn6mt3t7ftk****`
         */
        Id: string;
    }[];
}
