export interface DescribeAvailableResourceResponse {
    /**
     * 请求ID。
     * @example `EA76F208-E334-592A-A0C6-41E15EC87ED0`
     */
    RequestId: string;
    AvailableZones: {
        /**
         * 可用区列表。
         */
        AvailableZone: {
            /**
             * 可用区。
             * @example `cn-shenzhen-e`
             */
            ZoneId: string;
            /**
             * 地域ID。
             * @example `cn-shenzhen`
             */
            RegionId: string;
            SupportedEngines: {
                /**
                 * 支持的服务类型。
                 */
                SupportedEngine: {
                    /**
                     * 服务类型。
                     * @example `hbase`
                     */
                    Engine: string;
                    SupportedEngineVersions: {
                        /**
                         * 支持服务类型版本。
                         */
                        SupportedEngineVersion: {
                            /**
                             * 版本。
                             * @example `2.0`
                             */
                            Version: string;
                            SupportedCategories: {
                                /**
                                 * 支持类别。
                                 */
                                SupportedCategories: {
                                    /**
                                     * 实例类别，返回值：
                                     * - **cluster**：集群版
                                     * - **single**：单机版
                                     * @example `cluster`
                                     */
                                    Category: string;
                                    SupportedStorageTypes: {
                                        /**
                                         * 存储类型。
                                         */
                                        SupportedStorageType: {
                                            /**
                                             * 存储类型。
                                             * @example `cloud_ssd`
                                             */
                                            StorageType: string;
                                            CoreResources: {
                                                /**
                                                 * 工作节点资源。
                                                 */
                                                CoreResource: {
                                                    /**
                                                     * 规格。
                                                     * @example `hbase.sn1.large`
                                                     */
                                                    InstanceType: string;
                                                    /**
                                                     * 库存最大节点个数。
                                                     * @example `16`
                                                     */
                                                    MaxCoreCount: number;
                                                    /**
                                                     * 存储范围。
                                                     */
                                                    DBInstanceStorageRange: {
                                                        /**
                                                         * 最大存储大小，单位：GB。
                                                         * @example `8000`
                                                         */
                                                        MaxSize: number;
                                                        /**
                                                         * 步长，单位：GB。
                                                         * @example `40`
                                                         */
                                                        StepSize: number;
                                                        /**
                                                         * 最小存储大小，单位：GB。
                                                         * @example `400`
                                                         */
                                                        MinSize: number;
                                                    };
                                                    /**
                                                     * 规格详情。
                                                     */
                                                    InstanceTypeDetail: {
                                                        /**
                                                         * 内存大小，单位：GB。
                                                         * @example `8`
                                                         */
                                                        Mem: number;
                                                        /**
                                                         * cpu 核数。
                                                         * @example `4`
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
            MasterResources: {
                /**
                 * Master节点列表。
                 */
                MasterResource: {
                    /**
                     * Master节点规格。
                     * @example `hbase.sn1.medium`
                     */
                    InstanceType: string;
                    /**
                     * 规格描述。
                     */
                    InstanceTypeDetail: {
                        /**
                         * 内存大小，单位：GB。
                         * @example `8`
                         */
                        Mem: number;
                        /**
                         * CPU核数。
                         * @example `4`
                         */
                        Cpu: number;
                    };
                }[];
            };
        }[];
    };
}
