export interface DescribeInstanceTopologyResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 集群的拓扑信息。
     */
    InstanceTopology: {
        /**
         * 租户列表信息。
         */
        Tenants: {
            /**
             * 租户 ID。
             * @example `t33h8y08k****`
             */
            TenantId: string;
            /**
             * 租户名称。
             * @example `pay_online`
             */
            TenantName: string;
            /**
             * 租户 CPU，单位：核。
             * @example `2`
             */
            TenantCpu: number;
            /**
             * 租户内存大小，单位：GB。
             * @example `10`
             */
            TenantMemory: number;
            /**
             * 租户模式。
             * - Oracle：Oracle模式。
             * - MySQL：MySQL模式。
             * @example `Oracle`
             */
            TenantMode: string;
            /**
             * 租户的可用区列表信息。
             */
            TenantZones: {
                /**
                 * 可用区的访问角色。
                 *  - ReadWrite：可读可写；
                 *  - ReadOnly：只读。
                 * @example `ReadWrite`
                 */
                TenantZoneRole: string;
                /**
                 * 是否为主可用区。
                 * @example `true`
                 */
                IsPrimaryTenantZone: boolean;
                /**
                 * 可用区 ID。
                 * @example `cn-hangzhou-h`
                 */
                TenantZoneId: string;
                /**
                 * 资源节点信息列表
                 */
                Units: {
                    /**
                     * 资源节点 ID。
                     * @example `1002`
                     */
                    UnitId: string;
                    /**
                     * 资源节点的状态。
                     * - ONLINE: 运行中；
                     * - IMMIGRATING：迁入中；
                     * - EMIGRATING: 迁出中；
                     * - CANCEL_EMIGRATING: 取消迁入中；
                     * - CANCEL_EMIGRATING：取消迁出中；
                     * - DELETING：删除中。
                     * @example `ONLINE`
                     */
                    UnitStatus: string;
                    /**
                     * 资源节点所在的 OBServer 节点 ID。
                     * @example `i-bp16niirq4zdmgvm****`
                     */
                    NodeId: string;
                    /**
                     * 资源节点CPU，单位：核。
                     * @example `2`
                     */
                    UnitCpu: number;
                    /**
                     * 资源节点内存大小，单位：GB。
                     * @example `10`
                     */
                    UnitMemory: number;
                    /**
                     * 是否可做迁移。
                     * @example `true`
                     */
                    EnableMigrateUnit: boolean;
                    /**
                     * 是否为手动迁移。
                     * @example `true`
                     */
                    ManualMigrate: boolean;
                    /**
                     * 是否可以取消迁移。
                     * 该字段只对正在手动迁入中或手动迁出中的 unit 有效。
                     * @example `true`
                     */
                    EnableCancelMigrateUnit: boolean;
                    /**
                     * Unit使用的数据量大小。
                     * @example `10`
                     */
                    UnitDataSize: number;
                    ReplicaType: string;
                }[];
                /**
                 * 副本ID
                 */
                LogicalZone: string;
                /**
                 * 租户的副本类型
                 */
                ReplicaType: string;
            }[];
            /**
             * 租户状态。
             * - PENDING_CREATE: 创建中。
             * - RESTORE: 恢复中。
             * - ONLINE: 运行中。
             * - SPEC_MODIFYING: 规格修改中。
             * - ALLOCATING_INTERNET_ADDRESS: 公网地址分配中。
             * - PENDING_OFFLINE_INTERNET_ADDRESS: 公网地址关闭中。
             * - PRIMARY_ZONE_MODIFYING: 切主可用区中。
             * - PARAMETER_MODIFYING: 参数修改中。
             * - WHITE_LIST_MODIFING: 白名单修改中。
             * @example `ONLINE`
             */
            TenantStatus: string;
            /**
             * 租户的部署类型。
             * - multiple：多机房。
             * - single：单机房。
             * - dual：双机房。
             * @example `multiple`
             */
            TenantDeployType: string;
            /**
             * 租户的 unit 个数。
             * @example `1`
             */
            TenantUnitNum: number;
            /**
             * 主可用区部署模式。
             * @example `RANDOM`
             */
            PrimaryZoneDeployType: string;
            /**
             * 租户数据量
             */
            TenantDiskSize: number;
            /**
             * 租户单节点CPU
             */
            TenantUnitCpu: number;
            /**
             * 租户单节点内存
             */
            TenantUnitMemory: number;
        }[];
        /**
         * 集群的可用区信息。
         */
        Zones: {
            /**
             * 可用区 ID。
             * @example `cn-hangzhou-i`
             */
            ZoneId: string;
            /**
             * 地域 ID。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 可用区的存储容量。
             * @example `200 GB`
             */
            ZoneDisk: string;
            /**
             * 节点列表信息。
             */
            Nodes: {
                /**
                 * 节点 ID。
                 * @example `i-bp16niirq4zdmgvm****`
                 */
                NodeId: string;
                /**
                 * 节点归属的副本 ID。
                 * @example `1`
                 */
                NodeCopyId: number;
                /**
                 * 节点运行状态。
                 * @example `ONLINE`
                 */
                NodeStatus: string;
                /**
                 * 节点资源列表信息。
                 */
                NodeResource: {
                    /**
                     * 节点CPU资源信息。
                     */
                    Cpu: {
                        /**
                         * 节点已使用的CPU，单位：核。
                         * @example `4`
                         */
                        UsedCpu: number;
                        /**
                         * 节点总的CPU，单位：核。
                         * @example `14`
                         */
                        TotalCpu: number;
                    };
                    /**
                     * 节点内存资源信息。
                     */
                    Memory: {
                        /**
                         * 节点已使用的内存，单位：GB。
                         * @example `10`
                         */
                        UsedMemory: number;
                        /**
                         * 节点的总内存，单位：GB。
                         * @example `70`
                         */
                        TotalMemory: number;
                    };
                    /**
                     * 节点存储资源信息。
                     */
                    DiskSize: {
                        /**
                         * 节点总存储空间，单位：GB。
                         */
                        TotalDiskSize: number;
                        /**
                         * 节点已使用的存储空间，单位：GB。
                         */
                        UsedDiskSize: number;
                    };
                };
                ReplicaType: string;
                FullCopyId: number;
                ReadOnlyCopyId: number;
                /**
                 * 副本ID
                 */
                LogicalZone: string;
            }[];
            /**
             * 可用区信息。
             */
            ZoneResource: {
                /**
                 * 节点存储资源信息。
                 */
                DiskSize: {
                    /**
                     * 磁盘使用率最大值（百分比）。
                     * @example `0.14`
                     */
                    MaxDiskUsedPercent: number;
                    /**
                     * 磁盘服务器使用率最大值。
                     */
                    MaxDiskUsedObServer: string[];
                };
            };
        }[];
        Replicas: {
            /**
             * 副本ID
             */
            LogicalZone: string;
            /**
             * 副本节点数
             */
            NodeNum: number;
            /**
             * 副本地域
             */
            ZoneLogicalName: string;
            /**
             * 副本可用区
             */
            ZoneRegionName: string;
            ReplicaResource: {
                Memory: {
                    /**
                     * 副本已使用内存
                     */
                    UsedMemory: number;
                    /**
                     * 副本总内存
                     */
                    TotalMemory: number;
                };
                DiskSize: {
                    /**
                     * 副本已使用数据量
                     */
                    UsedDiskSize: number;
                    /**
                     * 副本总数据量
                     */
                    TotalDiskSize: number;
                };
                Cpu: {
                    /**
                     * 副本总CPU
                     */
                    TotalCpu: number;
                    /**
                     * 副本已使用CPU
                     */
                    UsedCpu: number;
                };
            };
            /**
             * 副本编号
             */
            ZoneLogicalId: number;
            /**
             * 副本类型
             */
            ReplicaType: string;
            /**
             * 副本状态，返回枚举类型（ACTIVE/INACTIVE/UNKNOWN）
             */
            Status: string;
        }[];
    };
}
