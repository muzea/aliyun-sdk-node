export interface CapacityPlanResponse {
    /**
     * 当前请求的ID。
     * @example `E91B7129-A669-4D9D-A743-F90A0FF1F5EF`
     */
    RequestId: string;
    /**
     * 请求返回结果。
     */
    Result: {
        /**
         * 拓展配置信息。
         */
        ExtendConfigs: {
            /**
             * 配置类型，唯一取值：sharedDisk。
             * > 当规划实例类型为增强版（advanced）时，可能出现的extendConfigs属性。
             * @example `sharedDisk`
             */
            ConfigType: string;
            /**
             * 磁盘大小，单位：GiB。
             * @example `2048`
             */
            Disk: number;
            /**
             * 磁盘类型，唯一取值：CPFS_PREMIUM。
             * > 当规划实例类型为增强版（advanced）时，可能出现的extendConfigs属性。
             * @example `CPFS_PREMIUM`
             */
            DiskType: string;
        }[];
        /**
         * 版本类型，取值含义如下：
         * - advanced：增强版
         * - x-pack：商业版
         * - community：社区版本
         * @example `advanced`
         */
        InstanceCategory: string;
        /**
         * 节点信息。
         */
        NodeConfigurations: {
            /**
             * 节点个数。
             * @example `10`
             */
            Amount: number;
            /**
             * CPU数量。
             * @example `1`
             */
            Cpu: number;
            /**
             * 磁盘大小，单位：GiB。
             * @example `20`
             */
            Disk: number;
            /**
             * 硬盘类型，取值含义如下：
             * - cloud_essd：ESSD云盘
             * - cloud_ssd：SSD云盘
             * - cloud_efficiency：高效云盘
             * - local_ssd：本地SSD盘
             * - local_efficiency：本地高效磁盘
             * @example `cloud_ssd`
             */
            DiskType: string;
            /**
             * 当前节点角色的规格内存大小。
             * @example `2`
             */
            Memory: number;
            /**
             * 节点类型，支持的类型如下：
             * - WORKER：数据节点
             * - WORKER_WARM：冷数据节点
             * - MASTER：专有主节点
             * - KIBANA：Kibana节点
             * - COORDINATING：协调节点
             * - ELASTIC_WORKER：弹性节点
             * @example `WORKER`
             */
            NodeType: string;
        }[];
        /**
         * 根据容量规划计算出来的结果，无默认值。取值含义如下：
         * - true：代表超大集群，指容量规划计算出的数据节点数量超过阈值50。
         * - false：容量规划计算出的数据节点数量在50以内。
         * @example `true`
         */
        OversizedCluster: boolean;
    };
}
