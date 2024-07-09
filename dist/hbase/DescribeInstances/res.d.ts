export interface DescribeInstancesResponse {
    /**
     * 每页最多可显示的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `EBECBF12-2E34-41BE-8DE9-FC3700D4****`
     */
    RequestId: string;
    /**
     * 实例列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 实例总个数。
     * @example `18`
     */
    TotalCount: number;
    Instances: {
        /**
         * HBase实例列表信息。
         */
        Instance: {
            /**
             * 专有网络ID，当**NetworkType**为**2**时会返回此参数。
             * @example `vpc-bp120k6ixs4eoghz*****`
             */
            VpcId: string;
            /**
             * 实例状态，返回值：
             * - **CREATING**：创建中。
             * - **ACTIVATION**：运行中。
             * - **DELETING**：删除中。
             * - **RESTARTING**：重启中。
             * - **MINOR_VERSION_TRANSING**：小版本升级中。
             * @example `ACTIVATION`
             */
            Status: string;
            /**
             * 模块ID。
             * @example `0`
             */
            ModuleId: number;
            /**
             * 虚拟交换机ID，当**NetworkType**为**2**时会返回此参数。
             * @example `vsw-bp191ipotq****dbqf`
             */
            VswitchId: string;
            /**
             * 表示是否支持备份功能，返回值：
             * - **open**：支持备份功能。
             * - **close**：不支持备份功能。
             * @example `open`
             */
            BackupStatus: string;
            /**
             * 实例的计费类型，返回值：
             * - **Prepaid**：包年包月。
             * - **Postpaid**：按量付费。
             * @example `Prepaid`
             */
            PayType: string;
            /**
             * Core节点磁盘类型，返回值：
             * - **cloud_efficiency**：高效云盘。
             * - **cloud_ssd**：SSD云盘。
             * - **local_hdd**：本地HDD盘。
             * - **local__ssd**：本地SSD盘。
             * @example `cloud_efficiency`
             */
            CoreDiskType: string;
            /**
             * 表示Master节点类型，返回值：
             * - **0**表示Master节点为单节点。
             * - **2**表示Master节点为集群版。
             * @example `2`
             */
            MasterNodeCount: number;
            /**
             * 网络类型，返回值：
             * - **VPC**：专有网络类型，如果为专有网络，就会返回VswitchId和VpcId参数。
             * - **CLASSIC**：经典网络类型。
             * @example `VPC`
             */
            NetworkType: string;
            /**
             * 实例创建时间，UTC格式。
             * @example `2019-09-12T14:40:46Z`
             */
            CreatedTimeUTC: string;
            /**
             * 父实例ID。
             * @example `2980****2123`
             */
            ParentId: string;
            /**
             * 实例到期时间，UTC格式。
             * @example `2019-10-12T14:40:46Z`
             */
            ExpireTimeUTC: string;
            /**
             * 实例名称。
             * @example `test`
             */
            InstanceName: string;
            /**
             * Master节点规格。
             * @example `hbase.sn1.large`
             */
            MasterInstanceType: string;
            /**
             * Core节点规格。
             * @example `hbase.sn1.large`
             */
            CoreInstanceType: string;
            /**
             * 实例创建时间。
             * @example `2019-09-12T14:40:46`
             */
            CreatedTime: string;
            /**
             * Core节点磁盘容量，默认单位G。
             * @example `100`
             */
            CoreDiskSize: number;
            /**
             * 实例ID。
             * @example `hb-bp1u0639js2h7****`
             */
            ClusterId: string;
            /**
             * 实例到期时间。
             * @example `2019-10-12T14:40:46`
             */
            ExpireTime: string;
            /**
             * 实例是否配置为高可用，返回值：
             * - **true**：配置为高可用。
             * - **false**：未配置为高可用。
             * > 集群版默认配置为高可用，使用2个Master节点。单节点配置为实际可用容量。
             * @example `true`
             */
            IsHa: boolean;
            /**
             * 实例ID。
             * @example `hb-bp1u0639js2h7****`
             */
            InstanceId: string;
            /**
             * 是否支持冷存储功能，返回值：
             * - **open**：支持冷存储功能。
             * - **close**：不支持冷存储功能。
             * @example `open`
             */
            ColdStorageStatus: string;
            /**
             * 是否开启删除保护，返回值：
             * - **true**：已开启。
             * - **false**：未开启。
             * @example `true`
             */
            IsDeletionProtection: boolean;
            /**
             * 实例所属地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * Master节点的磁盘容量，默认单位G。
             * @example `100`
             */
            MasterDiskSize: number;
            /**
             * Master节点的磁盘类型，返回值：
             * - **cloud_efficiency**：高效云盘。
             * - **cloud_ssd**：SSD云盘。
             * > 单节点实例会返回此参数。
             * @example `cloud_efficiency`
             */
            MasterDiskType: string;
            /**
             * 实例是否自动续费，返回值：
             * - **true**：自动续费。
             * - **false**：手动续费。
             * > 仅当实例的付费类型为包年包月才会返回本参数。
             * @example `false`
             */
            AutoRenewal: boolean;
            /**
             * 实例类型，返回值：
             * - **cluster**：集群版。
             * - **single**：单节点。
             * @example `cluster`
             */
            ClusterType: string;
            /**
             * 资源组ID。
             * @example `rg-4f51d54g5****`
             */
            ResourceGroupId: string;
            /**
             * 实例名称。
             * @example `test`
             */
            ClusterName: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-f`
             */
            ZoneId: string;
            /**
             * 自动续费周期，返回值：
             * - **按月购买**：则自动续费周期为1个月。
             * - **按年购买**：则自动续费周期为1年（12个月）。
             * >仅当实例的付费类型为包年包月才会返回本参数。
             * @example `12`
             */
            Duration: number;
            /**
             * 模块类型版本。
             * @example `1.0`
             */
            ModuleStackVersion: string;
            /**
             * 数据引擎类型，返回值：
             * - **hbase**：HBase标准版或HBase单机版。
             * - **hbaseue**：HBase增强版。
             * - **serverlesshbase**：HBaseServerless版。
             * - **bds**：表示BDS实例。
             * @example `hbase`
             */
            Engine: string;
            /**
             * 主版本号。
             * @example `2.0`
             */
            MajorVersion: string;
            /**
             * Core磁盘数量。
             * @example `2`
             */
            CoreDiskCount: string;
            /**
             * Core节点个数。
             * @example `2`
             */
            CoreNodeCount: number;
            Tags: {
                /**
                 * 资源标签。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `test-key`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `test-value`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
