export interface CreateLogStoreRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 请求参数。
     */
    "body": {
        /**
         * Logstore名称。其命名规则如下：
         * - 同一个Project下，Logstore名称不可重复。
         * - 只能包括小写字母、数字、短划线（-）和下划线（_）。
         * - 必须以小写字母或者数字开头和结尾。
         * - 长度为3-63字符。
         * @example `my-logstore`
         */
        logstoreName: string;
        /**
         * Shard分区个数。
         * > 该接口不支持更新Shard个数。只能通过SplitShard或MergeShards接口修改Shard个数。
         * @example `2`
         */
        shardCount: number;
        /**
         * 数据的保存时间，单位为天。取值范围为1~3000。如果配置为3650，表示永久保存。
         * @example `1`
         */
        ttl: number;
        /**
         * 加密配置数据结构，包含参数`enable`、 `encrypt_type`、 `user_cmk_info`。更多信息，请参见[EncryptConf ](~~409461~~)。
         */
        encrypt_conf: any;
        /**
         * 是否自动分裂Shard。
         * - true：自动分裂Shard。
         * - false：不自动分裂Shard。
         * @example `true`
         */
        autoSplit: boolean;
        /**
         * 是否开启WebTracking功能。默认值为false。
         * - true：开启WebTracking。
         * - false：不开启WebTracking。
         * @example `false`
         */
        enable_tracking: boolean;
        /**
         * 自动分裂时最大的Shard个数，最小值是1，最大值是256。
         * > 当autoSplit参数为true时必须设置。
         * @example `64`
         */
        maxSplitShard: number;
        /**
         * 是否记录外网IP地址功能。默认值为false。
         * - true：记录外网IP地址。
         * - false：不记录外网IP地址。
         * @example `false`
         */
        appendMeta: boolean;
        /**
         * 可观测数据类型。取值包括：
         * - **None**：日志数据。默认为日志数据。
         * - **Metrics**：时序数据。
         * @example `None`
         */
        telemetryType: string;
        /**
         * 数据在Logstore热存储层中的存储时间，最少为7天。单位：天，取值范围：7~3000。
         * 当数据的存储时间超过您所配置的热存储层数据保存时间后，数据将转为低频存储。更多信息，请参见[智能冷热分层存储](~~308645~~)。
         * @example `60`
         */
        hot_ttl: number;
        /**
         * 日志服务提供标准型（Standard）和查询型（Query）两种类型的Logstore。
         * - **standard**：支持日志服务一站式数据分析功能，适用于实时监控、交互式分析以及构建完整的可观测性系统等场景。
         * - **query**：支持高性能查询，索引流量费用约为Standard的一半，但不支持SQL分析，适用于数据量大、存储周期长（周、月级别以上）、无日志分析的场景。
         * @example `standard`
         */
        mode: string;
        /**
         * 低频存储。没有最少存储时间要求，至少保存30天转归档存储。
         * @example `30`
         */
        infrequentAccessTTL: number;
    };
}
