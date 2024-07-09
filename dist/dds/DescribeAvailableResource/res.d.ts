export interface DescribeAvailableResourceResponse {
    /**
     * 请求ID。
     * @example `344EE51D-8850-4935-B68B-58A8F4DCE3BD`
     */
    RequestId: string;
    SupportedDBTypes: {
        /**
         * 支持的数据库类型。
         */
        SupportedDBType: {
            AvailableZones: {
                /**
                 * 可用区。
                 */
                AvailableZone: {
                    SupportedEngineVersions: {
                        /**
                         * 支持的存储引擎版本。
                         */
                        SupportedEngineVersion: {
                            SupportedEngines: {
                                /**
                                 * 支持的存储引擎。
                                 */
                                SupportedEngine: {
                                    SupportedNodeTypes: {
                                        /**
                                         * 支持的实例类型。
                                         */
                                        SupportedNodeType: {
                                            /**
                                             * 实例的节点数。
                                             * @example `3`
                                             */
                                            NodeType: string;
                                            /**
                                             * 实例的网络类型。
                                             * @example `VPC`
                                             */
                                            NetworkTypes: string;
                                            AvailableResources: {
                                                /**
                                                 * 可用的资源详情。
                                                 */
                                                AvailableResource: {
                                                    /**
                                                     * 实例规格。
                                                     * @example `4核8GB（独享型）（当前选择规格：mdb.shard.2x.xlarge.d（4核8G（独享型云盘版），最大连接数：3000，最大IOPS：min{1800+50*存储空间, 21000}））`
                                                     */
                                                    InstanceClassRemark: string;
                                                    /**
                                                     * 实例规格族。
                                                     * @example `mdb.shard.2x.xlarge.d`
                                                     */
                                                    InstanceClass: string;
                                                    /**
                                                     * 实例的存储空间范围。
                                                     */
                                                    DBInstanceStorageRange: {
                                                        /**
                                                         * 存储空间的最小值，单位：GB。
                                                         * @example `20`
                                                         */
                                                        Min: number;
                                                        /**
                                                         * 存储空间的最大值，单位：GB。
                                                         * @example `16000`
                                                         */
                                                        Max: number;
                                                        /**
                                                         * 调整存储空间的最小粒度，单位：GB。
                                                         * @example `10`
                                                         */
                                                        Step: number;
                                                    };
                                                }[];
                                            };
                                        }[];
                                    };
                                    /**
                                     * 实例的存储引擎。
                                     * @example `WiredTiger`
                                     */
                                    Engine: string;
                                }[];
                            };
                            /**
                             * 实例的数据库版本。
                             * @example `4.0`
                             */
                            Version: string;
                        }[];
                    };
                    /**
                     * 可用区ID。
                     * @example `cn-hangzhou-h`
                     */
                    ZoneId: string;
                    /**
                     * 地域ID。
                     * @example `cn-hangzhou`
                     */
                    RegionId: string;
                }[];
            };
            /**
             * 实例的数据库类型，取值说明：
             * - **normal**：副本集实例。
             * - **sharding**：分片集群实例。
             * @example `sharding`
             */
            DbType: string;
        }[];
    };
}
