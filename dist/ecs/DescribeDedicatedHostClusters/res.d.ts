export interface DescribeDedicatedHostClustersResponse {
    /**
     * 输入时设置的每页行数。
     * @example `5`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `214A2187-B06F-4E49-A081-4D053466A8C7`
     */
    RequestId: string;
    /**
     * 专有宿主机集群状态列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 专有宿主机总个数。
     * @example `2`
     */
    TotalCount: number;
    DedicatedHostClusters: {
        /**
         * 由一个或多个专有宿主机集群状态组成的数组。
         */
        DedicatedHostCluster: {
            /**
             * 专有宿主机集群描述。
             * @example `This-is-my-DDHCluster`
             */
            Description: string;
            /**
             * 专有宿主机集群ID。
             * @example `dc-bp12wlf6am0vz9v2****`
             */
            DedicatedHostClusterId: string;
            /**
             * 专有宿主机集群的资源组ID。
             * @example `rg-bp67acfmxazb4p****`
             */
            ResourceGroupId: string;
            /**
             * 专有宿主机集群所在的可用区ID。
             * @example `cn-hangzhou-f`
             */
            ZoneId: string;
            /**
             * 专有宿主机集群所在的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 专有宿主机集群名称。
             * @example `myDDHCluster`
             */
            DedicatedHostClusterName: string;
            Tags: {
                /**
                 * 专有宿主机集群的标签。
                 */
                Tag: {
                    /**
                     * 专有宿主机集群的标签值。
                     * @example `TestValue`
                     */
                    TagValue: string;
                    /**
                     * 专有宿主机集群的标签键。
                     * @example `TestKey`
                     */
                    TagKey: string;
                }[];
            };
            DedicatedHostIds: {
                /**
                 * 专有宿主机集群下的专有宿主机ID列表。
                 */
                DedicatedHostId: string[];
            };
            /**
             * 专有宿主机集群容量。
             */
            DedicatedHostClusterCapacity: {
                /**
                 * 当前可用vCPU数。
                 * @example `2`
                 */
                AvailableVcpus: number;
                /**
                 * 当前可用内存大小。单位：GiB。
                 * @example `4`
                 */
                AvailableMemory: number;
                /**
                 * 总内存大小。单位：GiB。
                 * @example `8`
                 */
                TotalMemory: number;
                /**
                 * 总vCPU数。
                 * @example `4`
                 */
                TotalVcpus: number;
                LocalStorageCapacities: {
                    /**
                     * 本地存储容量。
                     */
                    LocalStorageCapacity: {
                        /**
                         * 数据盘类型。可能值：
                         * - cloud：普通云盘。
                         * - cloud_efficiency：高效云盘。
                         * - cloud_ssd：SSD云盘。
                         * - ephemeral_ssd：本地SSD盘。
                         * - cloud_essd：ESSD云盘。
                         * @example `cloud`
                         */
                        DataDiskCategory: string;
                        /**
                         * 当前可用本地盘大小。单位：GiB。
                         * @example `20`
                         */
                        AvailableDisk: number;
                        /**
                         * 本地盘总大小。单位：GiB。
                         * @example `40`
                         */
                        TotalDisk: number;
                    }[];
                };
                AvailableInstanceTypes: {
                    /**
                     * 专有宿主机集群内ECS实例规格的可用容量。
                     */
                    AvailableInstanceType: {
                        /**
                         * 实例规格。
                         * @example `ecs.c6.26xlarge`
                         */
                        InstanceType: string;
                        /**
                         * 可用的实例规格容量。
                         * @example `0`
                         */
                        AvailableInstanceCapacity: number;
                    }[];
                };
            };
        }[];
    };
}
