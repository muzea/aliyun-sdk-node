export interface GetLindormInstanceListResponse {
    /**
     * 请求ID。
     * @example `1CA1FAFD-E8DC-51C2-AA7E-CA6E2D049BA0`
     */
    RequestId: string;
    /**
     * 实例所在页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 实例所在页的行数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 查询到的实例总数。
     * @example `1`
     */
    Total: number;
    /**
     * 实例列表。
     */
    InstanceList: {
        /**
         * 实例所属的专有网络ID。
         * @example `vpc-bp1n3i15v90el48nx****`
         */
        VpcId: string;
        /**
         * 实例支持引擎的类型，返回值是由下列引擎类型的值做加法运算后得到的。
         * - **1**：支持搜索引擎。
         * - **2**：支持时序引擎。
         * - **4**：支持宽表引擎。
         * - **8**：支持文件引擎。
         * > 例如：EngineType值为15，15=8+4+2+1，表示该实例支持搜索引擎、时序引擎、宽表引擎和文件引擎。EngineType值为6，6=4+2，表示该实例支持时序引擎和宽表引擎。
         * @example `15`
         */
        EngineType: string;
        /**
         * 实例的到期时间。
         * > 实例的付费类型为包年包月，才会返回本参数。
         * @example `2022-04-26 00:00:00`
         */
        ExpireTime: string;
        /**
         * 实例的创建时间。
         * @example `2021-09-16 14:13:13`
         */
        CreateTime: string;
        /**
         * 实例的付费类型，返回值：
         * - **PREPAY**：包年包月。
         * - **POSTPAY**：按量付费。
         * @example `PREPAY`
         */
        PayType: string;
        /**
         * 阿里云账号（主账号）的16位AliUid。
         * @example `164901546557****`
         */
        AliUid: number;
        /**
         * 实例的存储容量。
         * @example `960`
         */
        InstanceStorage: string;
        /**
         * 实例ID。
         * @example `ld-bp17pwu1541ia****`
         */
        InstanceId: string;
        /**
         * 实例的网络类型。
         * @example `vpc`
         */
        NetworkType: string;
        /**
         * 实例类型，返回值：
         * - **lindorm**：表示Lindorm实例。
         * - **serverless_lindorm**：表示LindormServerless实例。
         * - **lindorm_standalone**：表示Lindorm单节点实例。
         * - **lts**：表示Lindorm数据通道服务类型。
         * @example `lindorm`
         */
        ServiceType: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 表示实例创建时间与1970-01-01 00:00:00之间的毫秒值。
         * @example `1631772842000`
         */
        CreateMilliseconds: number;
        /**
         * 实例名称。
         * @example `test`
         */
        InstanceAlias: string;
        /**
         * 可用区ID。
         * @example `cn-hangzhou-h`
         */
        ZoneId: string;
        /**
         * 实例状态，返回值：
         * - **CREATING**：创建中。
         * - **ACTIVATION**：运行中。
         * - **COLD_EXPANDING**：容量型云存储扩容中。
         * - **MINOR_VERSION_TRANSING**：小版本升级中。
         * - **RESIZING**：节点扩容中。
         * - **SHRINKING**：节点缩容中。
         * - **CLASS_CHANGING**：升级规格中或者降配规格中。
         * - **SSL_SWITCHING：SSL**变更中。
         * - **CDC_OPENING**：数据订阅功能开通中。
         * - **TRANSFER**：数据迁移中。
         * - **DATABASE_TRANSFER**：数据迁移至数据库中。
         * - **GUARD_CREATING**：生产灾备实例中。
         * - **BACKUP_RECOVERING**：备份恢复中。
         * - **DATABASE_IMPORTING**：数据导入中。
         * - **NET_MODIFYING**：网络变更中。
         * - **NET_SWITCHING**：内网和外网切换中。
         * - **NET_CREATING**：创建网络链接中。
         * - **NET_DELETING**：删除网络链接中。
         * - **DELETING**：删除中。
         * - **RESTARTING**：重启中。
         * - **LOCKED**：实例已过期，锁定中。
         * @example `ACTIVATION`
         */
        InstanceStatus: string;
        /**
         * 实例到期时间与1970-01-01 00:00:00之间的毫秒值。
         * @example `1650902400000`
         */
        ExpiredMilliseconds: number;
        /**
         * 实例是否开通流引擎，返回值：
         * - **true**：开通流引擎。
         * - **false**：未开通流引擎。
         * @example `true`
         */
        EnableStream: boolean;
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 标签的键。
             * @example `test`
             */
            Key: string;
            /**
             * 标签的值。
             * @example `2.2.18`
             */
            Value: string;
        }[];
        /**
         * 是否开通实例的计算引擎，返回：
         * - **true**：已开通。
         * - **false**：未开通。
         * @example `true`
         */
        EnableCompute: boolean;
        /**
         * 资源组ID。
         * @example `rg-aekzledqeat****`
         */
        ResourceGroupId: string;
        EnableMessage: boolean;
        EnableVector: boolean;
        EnableLts: boolean;
        EnableColumn: boolean;
    }[];
}
