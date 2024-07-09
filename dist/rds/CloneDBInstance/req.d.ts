export interface CloneDBInstanceRequest {
    /**
     * 地域ID。可以通过接口DescribeRegions查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 主可用区ID。可以通过接口DescribeRegions查看可用区ID。
     * >默认为源实例的可用区。
     * @example `cn-hangzhou-b`
     */
    "ZoneId"?: string;
    /**
     * 实例规格，详见[实例规格表](~~26312~~)。
     * >默认规格和主实例一致。
     * @example `mysql.n1.micro.1`
     */
    "DBInstanceClass"?: string;
    /**
     * 实例存储空间，单位：GB。每5GB进行递增，详见[实例规格表](~~26312~~)。
     * >默认存储空间和主实例一致。
     * @example `1000`
     */
    "DBInstanceStorage"?: number;
    /**
     * 数据库名称，格式如下：`原库名1,原库名2`。
     * @example `test1,test2`
     */
    "DbNames"?: string;
    /**
     * 付费类型，取值：
     * * **Postpaid**：后付费（按量付费）
     * * **Prepaid**：预付费（包年包月）
     * * **Serverless**：Serverless付费类型，不支持MariaDB实例。更多信息，请参见[MySQL Serverless实例简介](~~411291~~)、[SQL Server Serverless实例简介](~~604344~~)、[PostgreSQL Serverless实例简介](~~607742~~)。
     * @example `Postpaid`
     */
    "PayType": string;
    /**
     * 实例的网络类型，取值：
     * * **VPC**：专有网络
     * * **Classic**：经典网络
     * >默认网络类型和主实例一致。
     * @example `VPC`
     */
    "InstanceNetworkType"?: string;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 备份集ID。
     * 您可以通过DescribeBackups接口获取备份列表。
     * >**BackupId**和**RestoreTime**两者至少传入一个。
     * @example `902****`
     */
    "BackupId"?: string;
    /**
     * 备份保留周期内的任意时间点。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * >**BackupId**和**RestoreTime**两者至少传入一个。
     * @example `2011-06-11T16:00:00Z`
     */
    "RestoreTime"?: string;
    /**
     * 专有网络VPC ID。
     * >请确保VPC属于对应的地域。
     * @example `vpc-uf6f7l4fg90****`
     */
    "VPCId"?: string;
    /**
     * 虚拟交换机ID。虚拟交换机所在的可用区必须和**ZoneId**中传入的可用区ID相对应。
     * - 网络类型**InstanceNetworkType**需为**VPC**。
     * - 若您填写了**ZoneSlaveId1**（备可用区ID），此处需填写两个交换机ID，并使用半角逗号（,）隔开。
     * @example `vsw-uf6adz52c2p****`
     */
    "VSwitchId"?: string;
    /**
     * 新实例的内网IP，需要在指定交换机的IP地址范围内。系统默认通过**VPCId**和**VSwitchId**自动分配。
     * @example `172.XX.XX.69`
     */
    "PrivateIpAddress"?: string;
    /**
     * 购买时长，取值：
     * * 当参数**Period**为**Year**时，UsedTime取值为**1~3**。
     * * 当参数**Period**为**Month**时，UsedTime取值为**1~9**。
     * > 若付费类型为**Prepaid**则该参数必须传入。
     * @example `1`
     */
    "UsedTime"?: number;
    /**
     * 预付费实例为包年或者包月类型，取值：
     * * **Year**：包年
     * * **Month**：包月
     * > 若付费类型为**Prepaid**则该参数必须传入。
     * @example `Year`
     */
    "Period"?: string;
    /**
     * 实例系列，取值：
     * - **Basic**：基础系列
     * - **HighAvailability**：高可用系列
     * - **AlwaysOn**：集群系列（SQL Server）
     * - **cluster**：集群系列（MySQL）
     * - **Finance**：金融版（仅中国站支持）
     * **Serverless实例**
     * - **serverless_basic**：Serverless基础系列（仅适用MySQL和PostgreSQL）
     * - **serverless_standard**：MySQL Serverless高可用系列
     * - **serverless_ha**：SQL Server Serverless高可用系列
     * > 该参数不需要传递，克隆时会保持和源实例相同。
     * @example `HighAvailability`
     */
    "Category"?: string;
    /**
     * 备节点可用区ID。如果和**ZoneId**相同，则为单可用区部署；如果和**ZoneId**不同，则为多可用区部署。
     * @example `cn-hangzhou-c`
     */
    "ZoneIdSlave1"?: string;
    /**
     * <props="intl">日志节点可用区ID。如果和**ZoneId**相同，则为单可用区部署；如果和**ZoneId**不同，则为多可用区部署。</props>
     * <props="china">备节点或日志节点可用区ID。如果和**ZoneId**相同，则为单可用区部署；如果和**ZoneId**不同，则为多可用区部署。</props>
     * @example `cn-hangzhou-d`
     */
    "ZoneIdSlave2"?: string;
    /**
     * 实例存储类型，取值：
     * * **local_ssd**：本地SSD盘
     * * **cloud_ssd**：SSD云盘
     * * **cloud_essd**：ESSD PL1云盘
     * * **cloud_essd2**：ESSD PL2云盘
     * * **cloud_essd3**：ESSD PL3云盘
     * > Serverless实例仅支持ESSD PL1云盘，必须传入**cloud_essd**。
     * @example `cloud_essd`
     */
    "DBInstanceStorageType"?: string;
    /**
     * 是否进行库表恢复，取值为**1**时表示进行库表恢复，否则不填。
     * @example `1`
     */
    "RestoreTable"?: string;
    /**
     * 进行库表恢复时，指定恢复的库表信息。格式：
     * ```[{"type":"db","name":"数据库1名称","newname":"新数据库1名称","tables":[{"type":"table","name":"数据库1内的表1名称","newname":"新的表1名称"},{"type":"table","name":"数据库1内的表2名称","newname":"新的表2名称"}]},{"type":"db","name":"数据库2名称","newname":"新数据库2名称","tables":[{"type":"table","name":"数据库2内的表1名称","newname":"新的表1名称"},{"type":"table","name":"数据库2内的表2名称","newname":"新的表2名称"}]}]```
     * @example `[{"type":"db","name":"testdb1","newname":"testdb1_new","tables":[{"type":"table","name":"testdb1table1","newname":"testdb1table1_new"}]}]`
     */
    "TableMeta"?: string;
    /**
     * 专属集群ID。
     * @example `dhg-7a9****`
     */
    "DedicatedHostGroupId"?: string;
    /**
     * 备份类型，取值：
     * * **FullBackup**：全量备份
     * * **IncrementalBackup**：增量备份
     * @example `FullBackup`
     */
    "BackupType"?: string;
    /**
     * 是否开启释放保护功能。取值：
     * * **true**：开启
     * * **false**（默认）：关闭
     * @example `true`
     */
    "DeletionProtection"?: boolean;
    /**
     * Serverless选项。仅在需要将数据克隆至Serverless实例时传入。
     * > 该参数仅支持中国站。
     */
    "ServerlessConfig"?: {
        /**
         * 是否开启MySQL Serverless实例的自动启停功能。10分钟无任何连接进入暂停状态，连接进入时会自动唤醒。取值：
         * - **true**：启用
         * - **false**（默认）：不启用
         * >- 仅MySQL Serverless实例支持该参数。
         * >- 该参数仅支持中国站。
         * @example `true`
         */
        AutoPause: boolean;
        /**
         * 实例RCU（RDS Capacity Unit）的自动扩缩范围最大值。取值：
         * - MySQL：**1~8**
         * - SQL Server：**2~8**
         * - PostgreSQL：**1~12**
         * >- 该参数的值必须大于等于**MinCapacity**，且仅支持传入**整数**。
         * >- 该参数仅支持中国站。
         * @example `8`
         */
        MaxCapacity: number;
        /**
         * 实例RCU（RDS Capacity Unit）的自动扩缩范围最小值。取值：
         * - MySQL：**0.5~8**
         * - SQL Server：**2~8**（仅支持整数）
         * - PostgreSQL：**0.5~12**
         * >- 该参数的值必须小于等于**MaxCapacity**。
         * >- 该参数仅支持中国站。
         * @example `0.5`
         */
        MinCapacity: number;
        /**
         * 是否开启MySQL Serverless实例的强制弹性扩缩容。实例RCU的弹性扩缩容通常会立刻生效，但在某些特殊情况下无法即时完成扩缩容，此时可开启本参数进行强制扩缩容。取值：
         * - **true**：启用
         * - **false**（默认）：不启用
         * >- 仅MySQL Serverless实例支持该参数。
         * >- 该参数仅支持中国站。
         * @example `false`
         */
        SwitchForce: boolean;
    };
    /**
     * 弃用参数，无需配置。
     * @example `0`
     */
    "BpeEnabled"?: string;
    /**
     * <props="china">是否开启通用云盘IO加速功能，参数取值含义如下：</props>
     * <props="china"> - 1：开启</props>
     * <props="china"> - 0：不开启</props>
     * <props="china">> 通用云盘的IO加速功能的更多信息，请参见[通用云盘IO加速功能技术介绍](~~2527067~~)。</props>
     * <props="intl">预留参数。</props>
     * @example `0`
     */
    "IoAccelerationEnabled"?: string;
    /**
     * <props="intl">无效参数，无需配置。</props>
     * <props="china">通用云盘IO突发功能开关。</props>
     * <props="china">* true：开启IO突发功能。</props>
     * <props="china">* false：关闭IO突发功能。</props>
     * <props="china">> 了解通用云盘的IO突发功能的更多信息，请参见[什么是通用云盘](~~2340501~~)。</props>
     * @example `false`
     */
    "BurstingEnabled"?: boolean;
    /**
     * 是否自动支付。
     * 取值范围：
     * 1. **true**：自动支付。您需要确保账户余额充足。
     * 1. **false**：只生成订单不扣费。
     * > 默认值为true。如果您的支付方式余额不足，可以将参数AutoPay设置为false，此时会生成未支付订单，您可以登录RDS管理控制台自行支付。
     * >
     * @example `true`
     */
    "AutoPay"?: boolean;
}
