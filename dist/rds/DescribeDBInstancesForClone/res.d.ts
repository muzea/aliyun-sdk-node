export interface DescribeDBInstancesForCloneResponse {
    /**
     * 请求ID。
     * @example `1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `12`
     */
    PageNumber: number;
    /**
     * 当前页实例个数。
     * @example `10`
     */
    PageRecordCount: number;
    /**
     * 总记录数。
     * @example `120`
     */
    TotalRecordCount: number;
    Items: {
        /**
         * 由实例信息组成的数组。
         */
        DBInstance: {
            /**
             * 专有网络ID。
             * @example `vpc-bp1opxu1zkhxxxxxxxxxx`
             */
            VpcId: string;
            /**
             * 无。
             * @example `无`
             */
            ReplicateId: string;
            /**
             * 临时实例ID。
             * @example `sub138xxxxx_rm-xxxxx`
             */
            TempDBInstanceId: string;
            /**
             * 实例储存类型，返回值：
             * - **local_ssd/ephemeral_ssd**：本地SSD盘
             * - **cloud_ssd**：SSD云盘
             * - **cloud_essd**：ESSD云盘
             * @example `local_ssd`
             */
            DBInstanceStorageType: string;
            /**
             * 实例创建时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-11-05T11:26:02Z`
             */
            CreateTime: string;
            /**
             * 实例的付费类型。返回值：
             * - **Postpaid**：后付费（按量付费）
             * - **Prepaid**：预付费（包年包月）
             * @example `Postpaid`
             */
            PayType: string;
            /**
             * 是否是多可用区，返回值：
             * - **true**：是
             * - **false**：否
             * @example `false`
             */
            MutriORsignle: boolean;
            /**
             * 实例的访问模式，返回值：
             * - **Standard**：标准访问模式
             * - **Safe**：数据库代理模式
             * @example `Standard`
             */
            ConnectionMode: string;
            /**
             * 实例锁定状态，返回值：
             * - **Unlock**：正常，没有锁定。
             * - **ManualLock**：手动触发锁定。
             * - **LockByExpiration**：实例过期自动锁定。
             * - **LockByRestoration**：实例回滚前的自动锁定。
             * - **LockByDiskQuota**：实例空间满自动锁定，不可访问实例。
             * @example `Unlock`
             */
            LockMode: string;
            /**
             * 数据库版本。
             * @example `5.7`
             */
            EngineVersion: string;
            /**
             * VPC中的实例ID。
             * @example `rm-uf6wjk5xxxxxxxxxx`
             */
            VpcCloudInstanceId: string;
            /**
             * 实例角色ID。
             * @example `1`
             */
            InsId: number;
            /**
             * 实例的网络类型，返回值：
             * - **Classic**：经典网络
             * - **VPC**：专有网络
             * @example `Classic`
             */
            InstanceNetworkType: string;
            /**
             * 主实例的ID，如果没有返回此参数（即为null）则表示该实例是主实例。
             * @example `rm-uf6wjk5xxxxxxxxxx`
             */
            MasterInstanceId: string;
            /**
             * 实例名称，长度为2~256个字符。以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
             * > 不能以 http:// 和 https:// 开头。
             * @example `Test`
             */
            DBInstanceDescription: string;
            /**
             * 实例过期时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-11-28T11:26:02Z`
             */
            ExpireTime: string;
            /**
             * 实例的网络连接类型。返回值：
             * - **Internet**：公网连接
             * - **Intranet**：内网连接
             * @example `Intranet`
             */
            DBInstanceNetType: string;
            /**
             * 实例类型，返回值：
             * - **Primary**：主实例
             * - **Readonly**：只读实例
             * - **Guard**：灾备实例
             * - **Temp**：临时实例
             * @example `Primary`
             */
            DBInstanceType: string;
            /**
             * 实例销毁时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-12-05T11:26:02Z`
             */
            DestroyTime: string;
            /**
             * 实例被锁定的原因。
             * @example `instance_expired`
             */
            LockReason: string;
            /**
             * 实例状态。详情请参见[实例状态表](~~26315~~)。
             * @example `Running`
             */
            DBInstanceStatus: string;
            /**
             * 主实例如果有灾备实例，该参数即为灾备实例的ID。
             * @example `rm-uf64zsuxxxxxxxxxx`
             */
            GuardDBInstanceId: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 交换机ID。
             * @example `vsw-uf6adz52c2pxxxxxxxxxx	`
             */
            VSwitchId: string;
            /**
             * 资源组ID。
             * @example `rg-acfmyxxxxx`
             */
            ResourceGroupId: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-h`
             */
            ZoneId: string;
            /**
             * 实例ID。
             * @example `rm-uf6wjk5xxxxxxxxxx`
             */
            DBInstanceId: string;
            /**
             * 实例系列：
             * - **Basic**：基础版
             * - **HighAvailability**：高可用版
             * - **Finance**：三节点企业版
             * @example `HighAvailability`
             */
            Category: string;
            /**
             * 数据库类型。返回值：
             * - MySQL
             * - SQLServer
             * - PostgreSQL
             * - PPAS
             * - MariaDB
             * @example `MySQL`
             */
            Engine: string;
            /**
             * 实例规格。详情请参见[实例规格表](~~26312~~)。
             * @example `mysql.n1.micro.1`
             */
            DBInstanceClass: string;
            ReadOnlyDBInstanceIds: {
                /**
                 * 主实例下挂载的只读实例ID列表。
                 */
                ReadOnlyDBInstanceId: {
                    /**
                     * 只读实例ID。
                     * @example `rm-bpxxxxxxxxx`
                     */
                    DBInstanceId: string;
                }[];
            };
        }[];
    };
}
