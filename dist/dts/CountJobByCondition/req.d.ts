export interface CountJobByConditionRequest {
    /**
     * 传入此参数，指定查询类型：
     * - **name** ：根据job名称查询
     * - **rds**：根据目标端实例id查询
     * - **instance**：根据dts实例id查询
     * - **srcRds**：根据源端实例id查询
     * > 与查询的值**JobType**对应
     * @example `name/instance`
     */
    "Type"?: string;
    /**
     * 筛选条件之一，地域id，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * DTS实例所在地域的id，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 任务类型，取值为：
     * - **MIGRATION**：迁移。
     * - **SYNC**：同步。
     * - **SUBSCRIBE**：订阅。
     * @example `SYNC`
     */
    "JobType"?: string;
    /**
     * 查询的值，与JobType对应
     * @example `dtspk3f13r731m****`
     */
    "Params"?: string;
    /**
     * DTS实例状态，取值：
     * 迁移任务状态：
     * - **NotStarted**：未启动。
     * - **Prechecking**：预检查中。
     * - **PrecheckFailed**：预检查失败。
     * - **PreCheckPass**：预检查通过。
     * - **NotConfigured**：未配置。
     * - **Migrating**：迁移中。
     * - **Suspending**：暂停中。
     * - **MigrationFailed**：迁移失败。
     * - **Finished**：完成。
     * - **Retrying**：重试中。
     * - **Upgrade**：升级中。
     * - **Locked**：锁定中。
     * - **Downgrade**：降级中。
     * 同步任务状态：
     * - **NotStarted**：未启动。
     * - **Prechecking**：预检查中。
     * - **PrecheckFailed**：预检查失败。
     * - **PreCheckPass**：预检查通过。
     * - **NotConfigured**：未配置。
     * - **Initializing**：同步初始化中。
     * - **InitializeFailed**：同步初始化失败。
     * - **Synchronizing**：同步中。
     * - **Failed**：同步失败。
     * - **Suspending**：暂停中。
     * - **Modifying**：修改子对象中。
     * - **Finished**：完成。
     * - **Retrying**：重试中。
     * - **Upgrade**：升级中。
     * - **Locked**：锁定中。
     * - **Downgrade**：降级中。
     * 订阅任务的状态：
     * - **NotConfigured**：未配置。
     * - **NotStarted**：未启动。
     * - **Prechecking**：预检查中。
     * - **PrecheckFailed**：预检查失败。
     * - **PreCheckPass**：预检查通过。
     * - **Starting**：启动中。
     * - **Normal**：正常。
     * - **Retrying**：重试中。
     * - **Abnormal**：异常。
     * - **Upgrade**：升级中。
     * - **Locked**：锁定中。
     * - **Downgrade**：降级中。
     * @example `Finished`
     */
    "Status"?: string;
    /**
     * 分布式同步任务的父任务id
     * @example `pk13r731m****`
     */
    "GroupId"?: string;
    /**
     * 源端数据库类型
     * @example `MongoDB`
     */
    "SrcDbType"?: string;
    /**
     * 目标端数据库类型
     * @example `MongoDB`
     */
    "DestDbType"?: string;
}
