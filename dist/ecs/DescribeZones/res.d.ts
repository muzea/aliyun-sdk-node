export interface DescribeZonesResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    Zones: {
        /**
         * 可用区及可用区下支持的资源信息集合。
         */
        Zone: {
            /**
             * 可用区ID。
             * @example `cn-hangzhou-g`
             */
            ZoneId: string;
            /**
             * 可用区类型。可能值：
             * <props="china">
             * - AvailabilityZone：公共云可用区。
             * - CloudBoxZone：云盒可用区。
             * </props>
             * <props="intl">
             * - AvailabilityZone：公共云可用区。
             * </props>
             * @example `AvailabilityZone`
             */
            ZoneType: string;
            /**
             * 可用区本地语言名。
             * @example `华东 1 可用区 G`
             */
            LocalName: string;
            AvailableResources: {
                /**
                 * 可供创建的具体资源组成的数组。
                 */
                ResourcesInfo: {
                    /**
                     * 是否为I/O优化实例。
                     * @example `true`
                     */
                    IoOptimized: boolean;
                    SystemDiskCategories: {
                        /**
                         * 系统盘类型列表。
                         */
                        supportedSystemDiskCategory: string[];
                    };
                    InstanceGenerations: {
                        /**
                         * 支持的实例规格族代数列表。
                         */
                        supportedInstanceGeneration: string[];
                    };
                    DataDiskCategories: {
                        /**
                         * 允许创建的数据盘类型。
                         */
                        supportedDataDiskCategory: string[];
                    };
                    InstanceTypes: {
                        /**
                         * 实例规格列表。
                         */
                        supportedInstanceType: string[];
                    };
                    InstanceTypeFamilies: {
                        /**
                         * 允许创建的实例规格族列表。
                         */
                        supportedInstanceTypeFamily: string[];
                    };
                    NetworkTypes: {
                        /**
                         * 支持的网络类型列表。
                         */
                        supportedNetworkCategory: string[];
                    };
                }[];
            };
            AvailableResourceCreation: {
                /**
                 * 允许创建的资源类型。可能值：
                 * - VSwitch：交换机
                 * - IoOptimized：I/O优化实例
                 * - Instance：实例
                 * - DedicatedHost：专有宿主机
                 * - Disk：云盘
                 */
                ResourceTypes: string[];
            };
            DedicatedHostGenerations: {
                /**
                 * 支持的专有宿主机代数列表。
                 */
                DedicatedHostGeneration: string[];
            };
            AvailableInstanceTypes: {
                /**
                 * 当前可用区下可创建的所有规格列表。
                 */
                InstanceTypes: string[];
            };
            AvailableDiskCategories: {
                /**
                 * 允许创建的云盘种类集合。可能值：
                 * - cloud：普通云盘
                 * - cloud_ssd：SSD云盘
                 * - cloud_efficiency：高效云盘
                 * - cloud_essd：ESSD云盘
                 */
                DiskCategories: string[];
            };
            AvailableDedicatedHostTypes: {
                /**
                 * 支持的专有宿主机规格列表。
                 */
                DedicatedHostType: string[];
            };
            AvailableVolumeCategories: {
                /**
                 * 支持的共享存储类型。
                 */
                VolumeCategories: string[];
            };
        }[];
    };
}
