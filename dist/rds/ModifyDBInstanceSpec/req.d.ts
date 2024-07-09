export interface ModifyDBInstanceSpecRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 目标实例规格，详情请参见[实例规格表](~~26312~~)。您也可以调用DescribeAvailableClasses接口查询实例可变更规格。
     * > * 本参数和**DBInstanceStorage**参数两者至少传入一项。
     * > * 调用DescribeDBInstanceAttribute可以查看实例当前使用的规格。
     * @example `mysql.n8.large.2c`
     */
    "DBInstanceClass"?: string;
    /**
     * 目标存储空间大小，单位：GB。每5GB进行递增，详情请参见[实例规格表](~~26312~~)。您也可以调用DescribeAvailableClasses接口查询目标实例规格中可用的存储空间范围。
     * > * 本参数和**DBInstanceClass**参数两者至少传入一项。
     * > * 调用DescribeDBInstanceAttribute可以查看实例当前的存储空间大小。
     * @example `100`
     */
    "DBInstanceStorage"?: number;
    /**
     * 实例当前的付费类型，取值：
     * - **Postpaid**：后付费（按量付费）。
     * - **Prepaid**：预付费（包年包月）。
     * - **Serverless**：Serverless付费类型，不支持MariaDB实例。变更Serverless实例的计算资源扩缩容范围、自动启停、弹性策略是必须配置。更多信息，请参见[MySQL Serverless实例简介](~~411291~~)、[SQL Server Serverless实例简介](~~604344~~)、[PostgreSQL Serverless实例简介](~~607742~~)。
     * @example `Postpaid`
     */
    "PayType"?: string;
    /**
     * 生效时间，取值：
     * * **Immediate**（默认值）：立即生效。
     * * **MaintainTime**：在可运维时间段内生效，请参见ModifyDBInstanceMaintainTime。
     * * **ScheduleTime**：指定时间切换。必须是EffectiveTime=ScheduleTime+SwitchTime当前时间12小时之后的一个时刻
     * @example `MaintainTime`
     */
    "EffectiveTime"?: string;
    /**
     * 数据库版本号，取值：
     * * 常规实例
     *     * MySQL：**5.5**、**5.6**、**5.7**、**8.0**
     *     * SQL Server：**2008r2**、**08r2\_ent\_ha**、**2012**、**2012\_ent\_ha**、**2012\_std\_ha**、**2012\_web**、**2014\_std\_ha**、**2016\_ent\_ha**、**2016\_std\_ha**、**2016\_web**、**2017\_std\_ha**、**2017\_ent**、**2019\_std\_ha**、**2019\_ent**
     *     * PostgreSQL：**10.0**、**11.0**、**12.0**、**13.0**、**14.0**、**15.0**
     *     * MariaDB：**10.3**
     * * Serverless实例
     *     * MySQL：**5.7**、**8.0**
     *     * SQL Server：**2016\_std\_sl**、**2017\_std\_sl**、**2019\_std\_sl**
     *     * PostgreSQL：**14.0**、**15.0**、**16.0**
     *     > MariaDB不支持Serverless实例。
     * @example `5.6`
     */
    "EngineVersion"?: string;
    /**
     * 实例储存类型，取值：
     * * **local_ssd**：本地SSD盘
     * * **cloud_ssd**：SSD云盘（不推荐，部分地域已经停止售卖）
     * * **cloud_essd**：ESSD PL1云盘
     * * **cloud_essd2**：ESSD PL2云盘
     * * **cloud_essd3**：ESSD PL3云盘
     * <props="china">* **general_essd**：通用云盘</props>
     * 如需变更存储类型，请注意：
     * <props="china">* 如果将实例存储类型由ESSD变更为通用云盘，则其他参数（实例规格、存储空间大小等）需与实例原参数值保持一致，不允许修改。</props>
     * <props="china">* 如果实例类型为MySQL或MariaDB，并且实例的存储类型为SSD云盘，您可以传入`cloud_essd`将实例的存储类型升级为ESSD云盘。如需升级，则**DBInstanceClass**和**DBInstanceStorage**都需要传入，且需要与实例现有的值相同。更多信息，请参见[升级SSD云盘至ESSD云盘](~~314678~~)。</props>
     * <props="china">* 如果实例类型为PostgreSQL，您可以将SSD云盘升级为ESSD云盘（ESSD PL1、ESSD PL2、ESSD PL3），但不支持将ESSD云盘降级为SSD云盘。ESSD PL1、ESSD PL2和ESSD PL3间支持存储类型的升级或降级。更多信息，请参见[变更项说明](~~96750~~)。</props>
     * <props="intl">如果实例类型为PostgreSQL，您可以将SSD云盘升级为ESSD云盘（ESSD PL1、ESSD PL2、ESSD PL3），但不支持将ESSD云盘降级为SSD云盘。ESSD PL1、ESSD PL2和ESSD PL3间支持存储类型的升级或降级。更多信息，请参见[变更项说明](~~96750~~)。</props>
     * @example `local_ssd`
     */
    "DBInstanceStorageType"?: string;
    /**
     * 实例变配类型，取值：
     * - **Up**（默认值）：包年包月实例的升级和按量付费实例的升级/降级。
     * - **Down**：包年包月实例的降级。
     * - **TempUpgrade**：包年包月SQL Server实例的弹性变配，弹性变配必填。
     * - **Serverless**：Serverless实例调整弹性设置时配置。
     * > 如果仅变更**DBInstanceStorageType**参数，例如将SSD云盘变更为ESSD云盘，则此参数留空。
     * @example `Up`
     */
    "Direction"?: string;
    /**
     * 弃用参数，无需配置。
     * @example `test`
     */
    "SourceBiz"?: string;
    /**
     * 专属集群ID。
     * @example `dhg-7a9****`
     */
    "DedicatedHostGroupId"?: string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-b`
     */
    "ZoneId"?: string;
    /**
     * 指定执行变配的时间。建议在业务低峰期执行变配。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > - 该时间必须大于当前时间（执行调用的时间），否则变配任务失败。失败后，您需要等待订单自动作废才可以重新调用。
     * > - 仅增加存储空间或ESSD存储类型变更时，对业务无影响，变配后立即执行，无需配置此参数。
     * @example `2019-07-10T13:15:12Z`
     */
    "SwitchTime"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
    /**
     * SQL Server实例的弹性升级时间。单位：天。
     * @example `3`
     */
    "UsedTime"?: number;
    /**
     * 变配Serverless实例。
     */
    "ServerlessConfiguration"?: {
        /**
         * 实例RCU（Rds Capacity Unit）的自动扩缩范围最大值。取值：
         * - MySQL：**1~32**
         * - SQL Server：**2~8**
         * - PostgreSQL：**1~14**
         * > - 该参数的值必须大于等于**MinCapacity**，且仅支持传入**整数**。
         * @example `8`
         */
        MaxCapacity: number;
        /**
         * 实例RCU（Rds Capacity Unit）的自动扩缩范围最小值。取值：
         * - MySQL：**0.5~32**
         * - SQL Server：**2~8**（仅支持整数）
         * - PostgreSQL：**0.5~14**
         * > - 该参数的值必须小于等于 MaxCapacity。
         * @example `0.5`
         */
        MinCapacity: number;
        /**
         * 否开启Serverless实例的智能暂停和启动。取值：
         * * **true**：启用
         * * **false**（默认）：不启用
         * > - 仅MySQL和PostgreSQL的Serverless实例需设置该参数。如果10分钟无任何连接将进入暂停状态，当连接进入时会自动唤醒。
         * @example `true`
         */
        AutoPause: boolean;
        /**
         * 是否开启Serverless实例的强制弹性扩缩容，取值：
         * - **true**：启用
         * - **false**：不启用（默认值）
         * > - 仅MySQL和PostgreSQL的Serverless实例需设置该参数。开启该参数后，实例进行强制扩缩容时会出现30~120秒的服务不可用，请根据实际情况谨慎使用。
         * > - 实例RCU的弹性扩缩容通常会立刻生效，但在某些特殊情况下（例如大事务执行中）无法即刻完成扩缩容，此时可开启本参数进行强制扩缩容。
         * @example `false`
         */
        SwitchForce: boolean;
    };
    /**
     * 实例系列，取值：
     * * 常规实例
     *     * **Basic**：基础系列
     *     * **HighAvailability**：高可用系列
     *     * **AlwaysOn**：SQL Server集群系列
     *     * **Cluster**：MySQL集群系列。
     *     <props="china">* **Finance**：金融版</props>
     * * Serverless实例
     *     * **serverless_basic**：Serverless基础系列（仅适用MySQL和PostgreSQL）
     *     * **serverless_standard**：Serverless高可用系列（仅适用MySQL和PostgreSQL）
     *     * **serverless_ha**：SQL Server Serverless高可用系列
     *     > **EngineVersion**为SQL Server版本号时，此项必填。
     * @example `HighAvailability`
     */
    "Category"?: string;
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
     * 是否使用代金券抵扣费用，取值：
     * - **true**：使用
     * - **false**：不使用（默认值）
     * @example `false`
     */
    "AutoUseCoupon"?: boolean;
    /**
     * 内核小版本号。
     * 仅PostgreSQL实例需设置该参数。当变更实例规格并且报错内核小版本不支持时，需要传入内核小版本号，用于在变更实例规格时升级内核小版本。
     * 格式：`rds_postgres_<大版本号>00_<小版本号>`。例如12版本的20200830：`rds_postgres_1200_20200830`。
     * > 内核小版本号请参见[PostgreSQL小版本Release Notes](~~126002~~)。
     * @example `rds_postgres_1200_20200830`
     */
    "TargetMinorVersion"?: string;
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
     * <props="china">通用云盘数据归档功能开关。</props>
     * <props="china">true：开启。</props>
     * <props="china">false：关闭。</props>
     * <props="intl">预留参数。</props>
     * <props="china">通用云盘的数据归档功能信息，请参见[数据归档](~~2701832~~)。</props>
     * @example `true`
     */
    "ColdDataEnabled"?: boolean;
}
