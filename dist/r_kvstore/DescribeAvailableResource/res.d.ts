export interface DescribeAvailableResourceResponse {
    /**
     * 请求ID。
     * @example `493B7308-D9C2-55F6-B042-0313BD63****`
     */
    RequestId: string;
    AvailableZones: {
        /**
         * 可用区详情。
         */
        AvailableZone: {
            /**
             * 可用区ID。
             * @example `cn-hangzhou-h`
             */
            ZoneId: string;
            /**
             * 可用区名称。
             * @example `杭州 可用区H`
             */
            ZoneName: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            SupportedEngines: {
                /**
                 * 引擎类型。
                 */
                SupportedEngine: {
                    /**
                     * 实例的引擎类型。
                     * @example `Redis`
                     */
                    Engine: string;
                    SupportedEditionTypes: {
                        /**
                         * 实例类型。
                         */
                        SupportedEditionType: {
                            /**
                             * 实例类型，返回值：
                             * * **Community**：社区版。
                             * * **Enterprise**：企业版。
                             * @example `Enterprise`
                             */
                            EditionType: string;
                            SupportedSeriesTypes: {
                                /**
                                 * 实例的系列。
                                 */
                                SupportedSeriesType: {
                                    /**
                                     * 系列，返回值：
                                     * * **enhanced_performance_type**：内存型。
                                     * * **hybrid_storage**：混合存储型。
                                     * @example `enhanced_performance_type`
                                     */
                                    SeriesType: string;
                                    SupportedEngineVersions: {
                                        /**
                                         * 引擎版本（版本号）列表。
                                         */
                                        SupportedEngineVersion: {
                                            /**
                                             * 引擎版本。
                                             * @example `5.0`
                                             */
                                            Version: string;
                                            SupportedArchitectureTypes: {
                                                /**
                                                 * 架构类型。
                                                 */
                                                SupportedArchitectureType: {
                                                    /**
                                                     * 架构，返回值：
                                                     * * **standard**：标准架构。
                                                     * * **cluster**：集群架构。
                                                     * * **rwsplit**：读写分离架构。
                                                     * @example `cluster`
                                                     */
                                                    Architecture: string;
                                                    SupportedShardNumbers: {
                                                        /**
                                                         * 可用分片数列表。
                                                         */
                                                        SupportedShardNumber: {
                                                            /**
                                                             * 分片数。
                                                             * @example `8`
                                                             */
                                                            ShardNumber: string;
                                                            SupportedNodeTypes: {
                                                                /**
                                                                 * 节点类型列表。
                                                                 */
                                                                SupportedNodeType: {
                                                                    /**
                                                                     * 节点类型，返回值：
                                                                     * * **single**：单副本。
                                                                     * * **double**：双副本。
                                                                     * @example `double`
                                                                     */
                                                                    SupportedNodeType: string;
                                                                    AvailableResources: {
                                                                        /**
                                                                         * 可用规格列表。
                                                                         */
                                                                        AvailableResource: {
                                                                            /**
                                                                             * 实例规格描述。
                                                                             * @example `16G集群版（8节点）（QPS:1920000 Connections:240000）`
                                                                             */
                                                                            InstanceClassRemark: string;
                                                                            /**
                                                                             * 实例的内存容量，单位为MB。
                                                                             * @example `16384`
                                                                             */
                                                                            Capacity: number;
                                                                            /**
                                                                             * 规格编码。可在帮助中心的搜索框中搜索规格编码，查看其对应的规格信息。
                                                                             * @example `redis.amber.logic.sharding.2g.8db.0rodb.24proxy.multithread`
                                                                             */
                                                                            InstanceClass: string;
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
                        }[];
                    };
                }[];
            };
        }[];
    };
}
