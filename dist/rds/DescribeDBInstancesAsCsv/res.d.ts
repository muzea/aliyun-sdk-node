export interface DescribeDBInstancesAsCsvResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A444291****	`
     */
    RequestId: string;
    Items: {
        /**
         * 由**DBInstanceAttribute**组成的数据集。
         */
        DBInstanceAttribute: {
            /**
             * VPC ID。
             * @example `vpc-uf6f7l4fg90****	 `
             */
            VpcId: string;
            /**
             * 创建时间。
             * @example `2011-05-30T12:11:04Z`
             */
            CreationTime: string;
            /**
             * 该实例如果挂载着临时实例，即为临时实例ID。
             * @example `rm-uf64zs****`
             */
            TempDBInstanceId: string;
            /**
             * 无。
             * @example `No`
             */
            SupportUpgradeAccountType: string;
            /**
             * 增量数据来源的实例ID，如灾备实例的增量数据来源是主实例。只读实例的增量数据来源是主实例，如果没有返回此参数则表示该实例是主实例。
             * @example `rm-uf6wjk5****`
             */
            IncrementSourceDBInstanceId: string;
            /**
             * 实例内存，单位：M。
             * @example `4096`
             */
            DBInstanceMemory: number;
            /**
             * 实例可维护时间段，是UTC时间，+8小时才是控制台上显示的可维护时间段。
             * @example `00:00Z-02:00Z`
             */
            MaintainTime: string;
            /**
             * 实例付费方式。
             * @example `Postpaid`
             */
            PayType: string;
            /**
             * 标签。
             * @example `0`
             */
            Tags: string;
            /**
             * 查询实例当前可用性状态，单位：百分比（%）。
             * @example `100`
             */
            AvailabilityValue: string;
            /**
             * 只读实例对主实例的延迟时间，对只读实例有效。
             * @example `0`
             */
            ReadDelayTime: string;
            /**
             * 实例访问模式，返回值如下：
             * - **Performance**：标准访问模式。
             * - **Safty**：高安全访问模式。
             * @example `Performance`
             */
            ConnectionMode: string;
            /**
             * 内网连接端口。
             * @example `3306`
             */
            Port: string;
            /**
             * 账号类型。
             * @example `super`
             */
            AccountType: string;
            /**
             * 实例锁定模式。
             * @example `Unlock`
             */
            LockMode: string;
            /**
             * 引擎版本。
             * @example `8.0`
             */
            EngineVersion: string;
            /**
             * 最大每秒IO请求次数。
             * @example `150`
             */
            MaxIOPS: number;
            /**
             * 内网连接地址。
             * @example `rm-uf6wjk5****.mysql.rds.aliyuncs.com`
             */
            ConnectionString: string;
            /**
             * 网络类型。
             * @example `VPC`
             */
            InstanceNetworkType: string;
            /**
             * IP白名单。
             * @example `42.XX.XX.XX`
             */
            SecurityIPList: string;
            /**
             * 主实例的ID。
             * @example `rm-uf6wjk5****`
             */
            MasterInstanceId: string;
            /**
             * 实例规格族。
             * @example `s`
             */
            DBInstanceClassType: string;
            /**
             * 实例描述。
             * @example `0`
             */
            DBInstanceDescription: string;
            /**
             * 实例CPU数量。
             * @example `2`
             */
            DBInstanceCPU: string;
            /**
             * 到期时间。
             * @example `2019-03-27T16:00:00Z`
             */
            ExpireTime: string;
            /**
             * 实例的网络类型，返回值如下：
             * - **Internet**：外网。
             * - **Intranet**：内网。
             * @example `Internet`
             */
            DBInstanceNetType: string;
            /**
             * 实例类型，返回值如下：
             * - **Primary**：主实例。
             * - **ReadOnly**：只读实例。
             * - **Guard**：灾备实例。
             * - **Temp**：临时实例。
             * @example `Primary`
             */
            DBInstanceType: string;
            /**
             * 账号数上限。
             * @example `500`
             */
            AccountMaxQuantity: number;
            /**
             * 锁定原因。
             * @example `instance_expired`
             */
            LockReason: string;
            /**
             * 实例状态。
             * @example `Running`
             */
            DBInstanceStatus: string;
            /**
             * 实例下可创建最大数据库数量。
             * @example `200`
             */
            DBMaxQuantity: number;
            /**
             * 该实例如果挂载着灾备实例，即为灾备实例的ID。
             * @example `rm-uf64zsu****`
             */
            GuardDBInstanceId: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 实例存储空间，单位：GB。
             * @example `10`
             */
            DBInstanceStorage: number;
            /**
             * 交换机ID。
             * @example `vsw-uf6adz52c2p****`
             */
            VSwitchId: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-j`
             */
            ZoneId: string;
            /**
             * 类别。
             * @example `0`
             */
            Category: string;
            /**
             * 最大并发连接数。
             * @example `60`
             */
            MaxConnections: number;
            /**
             * 实例ID。
             * @example `rm-uf6wjk5****`
             */
            DBInstanceId: string;
            /**
             * 实例规格.
             * @example `rds.mys2.small`
             */
            DBInstanceClass: string;
            /**
             * 数据库类型。
             * @example `MySQL`
             */
            Engine: string;
            /**
             * 废弃参数，无需配置。
             * @example `API`
             */
            ExportKey: string;
            SlaveZones: {
                /**
                 * 废弃参数，无需配置。
                 */
                slaveRegion: string[];
            };
        }[];
    };
}
