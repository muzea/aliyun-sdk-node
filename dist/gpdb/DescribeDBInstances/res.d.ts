export interface DescribeDBInstancesResponse {
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 当前页记录数。
     * @example `1`
     */
    PageRecordCount: number;
    /**
     * 请求ID。
     * @example `53EA07B7-FC2A-521B-AB7C-27**********`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    Items: {
        /**
         * 实例详情列表。
         */
        DBInstance: {
            /**
             * VPC ID。
             * @example `vpc-bp19ame5m1r3oejns****`
             */
            VpcId: string;
            /**
             * 实例到期时间（UTC时间）。
             * > 按量付费实例的到日时间为`2999-09-08T16:00:00Z`。
             * @example `2999-09-08T16:00:00Z`
             */
            ExpireTime: string;
            /**
             * 实例网卡类型，取值说明：
             * - **0**：外网。
             * - **1**：内网。
             * - **2**：VPC网络。
             * @example `2`
             */
            DBInstanceNetType: string;
            /**
             * 实例资源类型，取值说明：
             * - **cluster**：存储弹性模式或Serverless版本。
             * - **replicaSet**：存储预留模式。
             * @example `cluster`
             */
            InstanceDeployType: string;
            /**
             * 实例存储类型，取值说明：
             * - **cloud_essd**：ESSD云盘。
             * - **cloud_efficiency**：高效云盘。
             * @example `cloud_essd`
             */
            StorageType: string;
            /**
             * 实例创建时间（UTC时间）。
             * @example `2021-10-09T04:54:08Z`
             */
            CreateTime: string;
            /**
             * 计费类型，取值说明：
             * - **Postpaid**：按量付费。
             * - **Prepaid**：包年包月。
             * @example `Postpaid`
             */
            PayType: string;
            Tags: {
                /**
                 * 实例标签。
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
             * 被锁定的原因，取值说明：
             * - **0**：正常。
             * - **1**：手动触发锁定。
             * - **2**：实例过期自动锁定。
             * - **3**：实例回滚前的自动锁定。
             * - **4**：实例空间满自动锁定。
             * > 存储预留模式实例正常情况下返回值为空。
             * @example `0`
             */
            LockReason: string;
            /**
             * 实例状态，详见[实例状态表](~~86944~~)。
             * @example `Running`
             */
            DBInstanceStatus: string;
            /**
             * 该参数已废弃，故不会返回参数值。
             * 如需查询访问模式可以通过[DescribeDBInstanceAttribute](~~86910~~)接口查询。
             * @example `null`
             */
            ConnectionMode: string;
            /**
             * 实例锁定模式，取值说明：
             * - **Unlock**：正常。
             * - **ManualLock**：手动触发锁定。
             * - **LockByExpiration**：实例过期自动锁定。
             * - **LockByRestoration**：实例回滚前的自动锁定。
             * - **LockByDiskQuota**：实例空间满自动锁定。
             * - **LockReadInstanceByDiskQuota**：只读实例空间满自动锁定。
             * @example `Unlock`
             */
            LockMode: string;
            /**
             * 数据库版本。
             * @example `6.0`
             */
            EngineVersion: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * vSwitch ID。
             * @example `vsw-bp1cpq8mr64paltkb****`
             */
            VSwitchId: string;
            /**
             * 实例网络类型，取值说明：
             * - **Classic**：经典网络。
             * - **VPC**：VPC网络。
             * @example `VPC`
             */
            InstanceNetworkType: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-h`
             */
            ZoneId: string;
            /**
             * 实例ID。
             * @example `gp-bp12ga6v69h86****`
             */
            DBInstanceId: string;
            /**
             * 数据库类型。
             * @example `gpdb`
             */
            Engine: string;
            /**
             * 实例描述。
             * @example `gp-bp12ga6v69h86****`
             */
            DBInstanceDescription: string;
            /**
             * Segment节点数量。
             * @example `4`
             */
            SegNodeNum: string;
            /**
             * 存储空间大小，单位GB。
             * @example `50`
             */
            StorageSize: string;
            /**
             * Master节点数量。
             * @example `1`
             */
            MasterNodeNum: number;
            /**
             * 实例系列，取值说明：
             * - **Basic**：基础版。
             * - **HighAvailability**：高可用版。
             * - **Finance**：企业版。
             * @example `HighAvailability`
             */
            DBInstanceCategory: string;
            /**
             * 资源类型，取值说明：
             * - **Serverless**：Serverless版本。
             * - **StorageElastic**：存储弹性模式。
             * - **Classic**：存储预留模式。
             * @example `StorageElastic`
             */
            DBInstanceMode: string;
            /**
             * 实例所在的企业资源组ID。
             * @example `rg-bp67acfmxazb4p****`
             */
            ResourceGroupId: string;
            /**
             * Serverless实例的模式，取值如下：
             * - **Manual**：手动调度。
             * - **Auto**：自动调度。
             * > 仅Serverless模式实例返回该参数。
             * @example `Manual`
             */
            ServerlessMode: string;
            /**
             * 产品类型，取值说明：
             * - **standard**：标准版。
             * - **cost-effective**：经济版。
             * @example `standard`
             */
            ProdType: string;
        }[];
    };
}
