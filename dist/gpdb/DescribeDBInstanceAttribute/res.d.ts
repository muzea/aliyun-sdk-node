export interface DescribeDBInstanceAttributeResponse {
    /**
     * 请求ID。
     * @example `5E6EDEB8-D73E-5F2D-B948-86C8AEB05A68`
     */
    RequestId: string;
    Items: {
        /**
         * 实例详情列表。
         */
        DBInstanceAttribute: {
            /**
             * VPC ID。
             * @example `vpc-bp19ame5m1r3oejns****`
             */
            VpcId: string;
            /**
             * 实例创建时间。
             * @example `2022-08-11T09:16:26Z`
             */
            CreationTime: string;
            /**
             * CPU核数。
             * @example `2`
             */
            DBInstanceCpuCores: number;
            /**
             * 计算组个数。
             * > 该参数仅适用存储预留模式的实例。
             * @example `0`
             */
            SegmentCounts: number;
            /**
             * 单副本的存储大小，单位请参见**StorageUnit**参数。
             * > 该参数仅适用存储预留模式的实例。
             * @example `0`
             */
            StoragePerNode: number;
            /**
             * 计算节点的内存。
             * > 存储预留模式的单位为MB；Serverless和存储弹性模式单位为GB。
             * @example `16`
             */
            DBInstanceMemory: number;
            /**
             * 计算组机器类型，取值说明：
             * - **0**：SSD
             * - **1**：HDD
             * > 该参数仅适用存储预留模式的实例。
             * @example `0`
             */
            HostType: string;
            /**
             * 计费类型，取值说明：
             * - **Postpaid**：按量付费。
             * - **Prepaid**：包年包月。
             * @example `Postpaid`
             */
            PayType: string;
            Tags: {
                /**
                 * 标记键值对。
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
            /**
             * 存储类型，取值说明：
             * - **cloud_essd**：ESSD云盘。
             * - **cloud_efficiency**：高效云盘。
             * > 该参数仅适用存储弹性模式的实例。
             * @example `cloud_essd`
             */
            StorageType: string;
            /**
             * 查询当前实例可用性状态，单位：百分比（%）。
             * > 该参数仅适用存储预留模式的实例。
             * @example `100.0%`
             */
            AvailabilityValue: string;
            /**
             * 该参数已废弃，故不会返回参数值。
             * @example `null`
             */
            ReadDelayTime: string;
            /**
             * 单节点的CPU核数。
             * > 该参数仅适用存储预留模式的实例。
             * @example `0`
             */
            CpuCoresPerNode: number;
            /**
             * 实例的端口号。
             * @example `5432`
             */
            Port: string;
            /**
             * 访问模式，取值说明：
             * - **Performance**：标准访问模式。
             * - **Safty**：高安全访问模式。
             * - **LVS**：LVS链路模式。
             * @example `LVS`
             */
            ConnectionMode: string;
            /**
             * 锁定方式，取值说明：
             * - **Unlock**：正常 。
             * - **ManualLock**：手动触发锁定。
             * - **LockByExpiration**：实例过期自动锁定。
             * - **LockByRestoration**：实例回滚前的自动锁定。
             * - **LockByDiskQuota**：实例空间满自动锁定。
             * @example `Unlock`
             */
            LockMode: string;
            /**
             * 数据库版本。
             * @example `6.0`
             */
            EngineVersion: string;
            /**
             * 存储单位，取值说明：
             * - **GB SSD**
             * - **TB SSD**
             * - **GB HDD**
             * > 该参数仅适用存储预留模式的实例。
             * @example `GB SSD`
             */
            StorageUnit: string;
            /**
             * 单副本的内存大小，单位请参见**MemoryUnit**参数。
             * > 该参数仅适用存储预留模式的实例。
             * @example `0`
             */
            MemoryPerNode: number;
            /**
             * 实例连接地址。
             * @example `gp-bp13ue79qk8y1****-master.gpdb.rds.aliyuncs.com`
             */
            ConnectionString: string;
            /**
             * 实例网络类型，取值说明：
             * - **Classic**：经典网络。
             * - **VPC**：VPC网络。
             * @example `VPC`
             */
            InstanceNetworkType: string;
            /**
             * 该参数已废弃，不会返回参数值。
             * @example `null`
             */
            SecurityIPList: string;
            /**
             * 内存单位。
             * > 该参数仅适用存储预留模式的实例。
             * @example `GB`
             */
            MemoryUnit: string;
            /**
             * 实例规格族，取值说明：
             * - **s**：共享型。
             * - **x**：通用型。
             * - **d**：独享套餐。
             * - **h**：独占物理机。
             * @example `x`
             */
            DBInstanceClassType: string;
            /**
             * 实例描述。
             * @example `gp-bp13ue79qk8y1****`
             */
            DBInstanceDescription: string;
            /**
             * 计算组数量。
             * > 该参数仅适用存储预留模式的实例。
             * @example `0`
             */
            DBInstanceGroupCount: string;
            /**
             * 实例到期时间（UTC时间）。
             * > 按量付费实例的到期时间为`2999-09-08T16:00:00Z`。
             * @example `2999-09-08T16:00:00Z`
             */
            ExpireTime: string;
            /**
             * 该参数已废弃，不会返回参数值。
             * @example `null`
             */
            DBInstanceNetType: string;
            /**
             * 可维护开始时间。
             * @example `18:00Z`
             */
            MaintainStartTime: string;
            /**
             * 可维护结束时间。
             * @example `22:00Z`
             */
            MaintainEndTime: string;
            /**
             * 该参数已废弃，故不会返回参数值。
             * @example `null`
             */
            LockReason: string;
            /**
             * 实例状态，详细说明请参见DBInstanceStatus参数补充说明。
             * @example `Running`
             */
            DBInstanceStatus: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 计算组最大的BPS（磁盘吞吐量），单位：Mbps。
             * > 该参数仅适用存储预留模式的实例。
             * @example `0`
             */
            DBInstanceDiskMBPS: number;
            /**
             * 单个副本的最大存储空间，单位：GB。
             * @example `50`
             */
            DBInstanceStorage: number;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-j`
             */
            ZoneId: string;
            /**
             * 实例的最大并发连接数。
             * > 该参数仅适用存储预留模式的实例。
             * @example `500`
             */
            MaxConnections: number;
            /**
             * 实例ID。
             * @example `gp-bp13ue79qk8y1****`
             */
            DBInstanceId: string;
            /**
             * 实例规格。
             * > 该参数仅适用存储预留模式的实例。
             * @example `gpdb.group.segsdx1`
             */
            DBInstanceClass: string;
            /**
             * 数据库引擎。
             * @example `gpdb`
             */
            Engine: string;
            /**
             * 实例系列，取值说明：
             * - **Basic**：基础版。
             * - **HighAvailability**：高可用版。
             * @example `HighAvailability`
             */
            DBInstanceCategory: string;
            /**
             * 计算节点CPU核数，单位Core。
             * @example `2`
             */
            CpuCores: number;
            /**
             * 计算节点内存大小。
             * > 存储预留模式的单位为MB；Serverless和存储弹性模式单位为GB。
             * @example `16`
             */
            MemorySize: number;
            /**
             * 存储空间大小，单位GB。
             * @example `50`
             */
            StorageSize: number;
            /**
             * Segment节点数量。
             * > 该参数仅适用存储弹性模式和Serverless手动调度模式的实例。
             * @example `4`
             */
            SegNodeNum: number;
            /**
             * Master节点数量。
             * @example `1`
             */
            MasterNodeNum: number;
            /**
             * 实例资源类型，取值说明：
             * - **Serverless**：Serverless模式。
             * - **StorageElastic**：存储弹性模式。
             * - **Classic**：存储预留模式。
             * @example `StorageElastic`
             */
            DBInstanceMode: string;
            /**
             * 内核小版本。
             * @example `6.3.10.1-202207141918`
             */
            MinorVersion: string;
            /**
             * 是否支持备份恢复，取值说明：
             * - **true**：支持备份恢复。
             * - **false**：不支持备份恢复。
             * @example `true`
             */
            SupportRestore: boolean;
            /**
             * vSwitch ID。
             * @example `vsw-bp1cpq8mr64paltkb****`
             */
            VSwitchId: string;
            /**
             * 加密密钥。
             * > 仅开启云盘加密的实例会返回该参数。
             * @example `0d2470df-da7b-4786-b981-************`
             */
            EncryptionKey: string;
            /**
             * 加密类型，取值说明：
             * - **CloudDisk**：云盘加密。
             * > 仅云盘加密的实例会返回该参数。
             * @example `CloudDisk`
             */
            EncryptionType: string;
            /**
             * 内核小版本号。
             * @example `mm.v6.3.10.1-202207141918`
             */
            CoreVersion: string;
            /**
             * 实例运行时长。
             * @example `4 days 22:58:55`
             */
            RunningTime: string;
            /**
             * 实例开始运行的时间。
             * @example `2022-08-11T09:26:43Z`
             */
            StartTime: string;
            /**
             * 实例所在的资源组ID。
             * @example `rg-bp67acfmxazb4p****`
             */
            ResourceGroupId: string;
            /**
             * 计算资源阈值。单位为ACU。
             * > 仅Serverless自动调度模式实例返回该参数。
             * @example `32`
             */
            ServerlessResource: number;
            /**
             * 空闲释放等待时长。单位为秒。
             * > 仅Serverless自动调度模式实例返回该参数。
             * @example `600`
             */
            IdleTime: number;
            /**
             * Serverless实例的模式，取值如下：
             * - **Manual**：手动调度。
             * - **Auto**：自动调度。
             * > 仅Serverless模式实例返回该参数。
             * @example `Auto`
             */
            ServerlessMode: string;
            /**
             * 性能级别PL（Performance Level），目前仅支持**PL1**。
             * @example `PL1`
             */
            SegDiskPerformanceLevel: string;
            /**
             * 是否开启向量引擎优化，取值说明：
             * - **enabled**：表示开启向量引擎优化。
             * - **disabled**：表示已关闭向量引擎优化。
             * @example `enabled`
             */
            VectorConfigurationStatus: string;
            /**
             * Master资源。
             * @example `4`
             */
            MasterCU: number;
            ProdType: string;
        }[];
    };
}
