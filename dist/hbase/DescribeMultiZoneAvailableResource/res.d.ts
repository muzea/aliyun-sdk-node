export interface DescribeMultiZoneAvailableResourceResponse {
    /**
     * 请求Id。
     * @example `B2EEBBA9-C627-4415-81A0-B77BC54F1D52`
     */
    RequestId: string;
    AvailableZones: {
        /**
         * 可用的可用区里的资源信息集合。
         */
        AvailableZone: {
            /**
             * 可用区组合。
             * @example `cn-hangzhou-bef-aliyun`
             */
            ZoneCombination: string;
            /**
             * 所属地域Id。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            MasterResources: {
                /**
                 * master节点资源信息。
                 */
                MasterResource: {
                    /**
                     * 实例规格。
                     * @example `hbase.sn2.large`
                     */
                    InstanceType: string;
                    /**
                     * 实例规格详情。
                     */
                    InstanceTypeDetail: {
                        /**
                         * 内存大小，单位 GB。
                         * @example `16`
                         */
                        Mem: number;
                        /**
                         * cpu个数。
                         * @example `4`
                         */
                        Cpu: number;
                    };
                }[];
            };
            SupportedEngines: {
                /**
                 * 支持的服务类型列表，目前仅支持hbaseue。
                 */
                SupportedEngine: {
                    /**
                     * 支持的服务类型，目前仅支持hbaseue。
                     * @example `hbaseue`
                     */
                    Engine: string;
                    SupportedEngineVersions: {
                        /**
                         * 支持的服务版本号列表。
                         */
                        SupportedEngineVersion: {
                            /**
                             * 服务版本号，目前仅支持hbaseue 2.0版本。
                             * @example `2.0`
                             */
                            Version: string;
                            SupportedCategories: {
                                /**
                                 * 支持的分类列表。
                                 */
                                SupportedCategories: {
                                    /**
                                     * 目前仅支持cluster集群版。
                                     * @example `cluster`
                                     */
                                    Category: string;
                                    SupportedStorageTypes: {
                                        /**
                                         * 支持的存储类型列表。
                                         */
                                        SupportedStorageType: {
                                            /**
                                             * 磁盘类型。
                                             * @example `cloud_efficiency`
                                             */
                                            StorageType: string;
                                            CoreResources: {
                                                /**
                                                 * core节点资源集合。
                                                 */
                                                CoreResource: {
                                                    /**
                                                     * 规格类型。
                                                     * @example `hbase.sn2.2xlarge`
                                                     */
                                                    InstanceType: string;
                                                    /**
                                                     * 最大core节点数。
                                                     * @example `30`
                                                     */
                                                    MaxCoreCount: number;
                                                    /**
                                                     * 存储大小的范围。
                                                     */
                                                    DBInstanceStorageRange: {
                                                        /**
                                                         * 最大规格，单位GB。
                                                         * @example `64000`
                                                         */
                                                        MaxSize: number;
                                                        /**
                                                         * 单次增加的最小步长，单位GB，每次增加的可选值为最小步长的整数倍。
                                                         * @example `40`
                                                         */
                                                        StepSize: number;
                                                        /**
                                                         * 最小规格，单位GB。
                                                         * @example `400`
                                                         */
                                                        MinSize: number;
                                                    };
                                                    /**
                                                     * 规格类型详情。
                                                     */
                                                    InstanceTypeDetail: {
                                                        /**
                                                         * 内存大小，单位GB。
                                                         * @example `8`
                                                         */
                                                        Mem: number;
                                                        /**
                                                         * cpu个数。
                                                         * @example `32`
                                                         */
                                                        Cpu: number;
                                                    };
                                                }[];
                                            };
                                        }[];
                                    };
                                }[];
                            };
                        }[];
                    };
                }[];
            };
        }[];
    };
}
