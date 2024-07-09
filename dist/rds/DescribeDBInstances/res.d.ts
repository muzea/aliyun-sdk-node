export interface DescribeDBInstancesResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 页码。
     * >若您传入了**MaxResults**或**NextToken**参数，则本返回值仅会返回**1**，您可直接忽略。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 当前页实例个数。
     * @example `10`
     */
    PageRecordCount: number;
    /**
     * 总记录数。
     * >若您传入了**MaxResults**或**NextToken**参数，则本返回值仅会显示当前页的记录数，您可直接忽略。
     * @example `100`
     */
    TotalRecordCount: number;
    Items: {
        /**
         * 实例信息列表。
         */
        DBInstance: {
            /**
             * VPC ID。
             * @example `vpc-uf6f7l4fg90****`
             */
            VpcId: string;
            /**
             * Log节点所在主机的ID。
             * @example `dh-bp****`
             */
            DedicatedHostIdForLog: string;
            /**
             * 创建时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-11-05T11:26:02Z`
             */
            CreateTime: string;
            /**
             * 实例的付费类型，取值：
             * * **Postpaid**：按量付费
             * * **Prepaid**：包年包月
             * @example `Postpaid`
             */
            PayType: string;
            /**
             * Log节点所在主机的名称。
             * @example `testlog`
             */
            DedicatedHostNameForLog: string;
            /**
             * 是否是组合可用区。取值：
             * - **true**
             * - **false**
             * >组合可用区即带有MAZ字样的可用区。例如：`cn-hangzhou-MAZ10(h,i)`。
             * @example `true`
             */
            MutriORsignle: boolean;
            /**
             * 专属集群名称。
             * @example `testhostgroup`
             */
            DedicatedHostGroupName: string;
            /**
             * 数据库版本。
             * @example `5.7`
             */
            EngineVersion: string;
            /**
             * 专属集群ID。
             * @example `dhg-7a9****`
             */
            DedicatedHostGroupId: string;
            /**
             * VPC名称。
             * @example `test-huadong`
             */
            VpcName: string;
            /**
             * Master节点所在主机的可用区ID。
             * @example `cn-hangzhou-c`
             */
            DedicatedHostZoneIdForMaster: string;
            /**
             * 实例的连接地址。
             * @example `rm-uf6wjk5****.mysql.rds.aliyuncs.com`
             */
            ConnectionString: string;
            /**
             * 实例的网络类型，取值：
             * * **Classic**：经典网络
             * * **VPC**：VPC网络
             * @example `Classic`
             */
            InstanceNetworkType: string;
            /**
             * 主实例的ID，如果没有返回此参数（即为null）则表示该实例是主实例。
             * @example `rm-uf6wjk5****`
             */
            MasterInstanceId: string;
            /**
             * 到期时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * >按量付费实例无到期时间。
             * @example `2019-02-27T16:00:00Z`
             */
            ExpireTime: string;
            /**
             * 销毁时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-11-05T11:26:02Z`
             */
            DestroyTime: string;
            /**
             * 主实例如果有灾备实例，该参数即为灾备实例的ID。
             * @example `rm-uf64zsu****`
             */
            GuardDBInstanceId: string;
            /**
             * Master节点所在主机的名称。
             * @example `testmaster`
             */
            DedicatedHostNameForMaster: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-a`
             */
            ZoneId: string;
            /**
             * 专属集群MySQL通用版实例的异常提示等级。返回值：
             * * **1**：正常。
             * * **2**：只读实例和主实例规格不对齐，可能影响可用性，请按需调整实例规格。
             * @example `1`
             */
            TipsLevel: number;
            /**
             * 实例ID。
             * @example `rm-uf6wjk5****`
             */
            DBInstanceId: string;
            /**
             * Master节点所在主机的ID。
             * @example `dh-bp****`
             */
            DedicatedHostIdForMaster: string;
            /**
             * 主实例如果有临时实例，该参数即为临时实例的ID。
             * @example `rm-uf64zsu****`
             */
            TempDBInstanceId: string;
            /**
             * 实例储存类型。
             * @example `ModuleList.4.ModuleCode`
             */
            DBInstanceStorageType: string;
            /**
             * 实例的访问模式，取值：
             * * **Standard**：标准访问模式
             * * **Safe**：数据库代理模式
             * @example `Standard`
             */
            ConnectionMode: string;
            /**
             * 实例的锁定状态。取值：
             * * **Unlock**：正常。
             * * **ManualLock**：手动触发锁定。
             * * **LockByExpiration**：实例过期自动锁定。
             * * **LockByRestoration**：实例回滚前自动锁定。
             * * **LockByDiskQuota**：实例空间满自动锁定。
             * * **Released**：实例已释放。此时实例无法进行解锁，只能使用备份数据重新创建新实例，重建时间较长，请耐心等待。
             * @example `Unlock`
             */
            LockMode: string;
            /**
             * 专属集群MySQL通用版实例所属的组名。
             * @example `TestGroup`
             */
            GeneralGroupName: string;
            /**
             * 专有网络实例ID。
             * @example `rm-uf6wjk5****`
             */
            VpcCloudInstanceId: string;
            /**
             * Slave节点所在主机的可用区ID。
             * @example `cn-hangzhou-d`
             */
            DedicatedHostZoneIdForSlave: string;
            /**
             * 专属集群MySQL通用版实例的异常提示信息。
             * @example `normal`
             */
            Tips: string;
            /**
             * Log节点所在主机的可用区ID。
             * @example `cn-hangzhou-b`
             */
            DedicatedHostZoneIdForLog: string;
            /**
             * Slave节点所在主机的名称。
             * @example `testslave`
             */
            DedicatedHostNameForSlave: string;
            /**
             * 实例描述。
             * @example `testdb`
             */
            DBInstanceDescription: string;
            /**
             * 实例CPU数量。
             * > 仅在InstanceLevel参数为1时返回。
             * @example `2`
             */
            DBInstanceCPU: string;
            /**
             * 节点的内存大小。单位：MB。
             * > 仅在InstanceLevel参数为1时返回。
             * @example `4096`
             */
            DBInstanceMemory: number;
            /**
             * 实例的网络连接类型，取值：
             * * **Internet**：外网连接
             * * **Intranet**：内网连接
             * @example `Internet`
             */
            DBInstanceNetType: string;
            /**
             * 实例类型，取值：
             * * **Primary**：主实例
             * * **Readonly**：只读实例
             * * **Guard**：灾备实例
             * * **Temp**：临时实例
             * @example `Primary`
             */
            DBInstanceType: string;
            /**
             * 实例被锁定的原因。
             * @example `instance_expired`
             */
            LockReason: string;
            /**
             * 实例状态，详情请参见[实例状态表](~~26315~~)。
             * @example `Running`
             */
            DBInstanceStatus: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 交换机ID。
             * @example `vsw-uf6adz52c2p****`
             */
            VSwitchId: string;
            /**
             * Slave节点所在主机的ID。
             * @example `dh-bp****`
             */
            DedicatedHostIdForSlave: string;
            /**
             * 资源组ID。
             * @example `rg-acfmy****`
             */
            ResourceGroupId: string;
            /**
             * 实例系列：
             * * **Basic**：基础系列
             * * **HighAvailability**：高可用系列
             * * **Finance**：三节点企业系列
             * >仅在**InstanceLevel**参数为**1**时返回。
             * @example `Basic`
             */
            Category: string;
            /**
             * 数据库类型。
             * @example `MySQL`
             */
            Engine: string;
            /**
             * 实例规格，详见[实例规格表](~~26312~~)。
             * @example `rds.mys2.small`
             */
            DBInstanceClass: string;
            /**
             * 当前专属集群MySQL通用版实例是否支持高可用权重切换。返回值：
             * * **100**：支持切换。
             * * **0**：不支持切换。
             * @example `100`
             */
            SwitchWeight: number;
            ReadOnlyDBInstanceIds: {
                /**
                 * 主实例下如果有只读实例，该参数为只读实例的ID列表。
                 */
                ReadOnlyDBInstanceId: {
                    /**
                     * 只读实例ID。
                     * @example `rr-uf6wjk5****`
                     */
                    DBInstanceId: string;
                }[];
            };
            /**
             * 是否已开启释放保护功能。取值：
             * * **true**：已开启
             * * **false**：未开启
             * @example `false`
             */
            DeletionProtection: boolean;
            /**
             * 是否已开启IO突发。取值：
             * - **true**：已开启
             * - **false**：未开启
             * @example `false`
             */
            BurstingEnabled: boolean;
            /**
             * 弃用参数。
             * @example `0`
             */
            BpeEnabled: string;
            /**
             * 是否开启IO加速。取值含义如下：
             * - 1：已开启
             * - 0：未开启
             * @example `0`
             */
            IoAccelerationEnabled: string;
            /**
             * 预留参数。
             * @example `false`
             */
            ColdDataEnabled: boolean;
        }[];
    };
    /**
     * 翻页凭证。如果调用结果分多页展示，再次调用接口时在**NextToken**处传入该值便可以展示下一页的内容。
     * @example `o7PORW5o2TJg****`
     */
    NextToken: string;
}
