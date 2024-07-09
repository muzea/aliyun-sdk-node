export interface DescribeDtsJobsRequest {
    /**
     * 传入本参数，指定查询条件，取值：
     * - **instance**：根据DTS实例ID查询。
     * - **name**：根据DTS实例名称查询，支持模糊查询。
     * - **srcRds**：根据RDS源实例ID查询。
     * - **rds**：根据RDS目标实例ID查询。
     * > 您需要传入**Params**，指定查询条件的具体内容。
     * @example `instance`
     */
    "Type"?: string;
    /**
     * 查询条件的具体内容。
     * > 您需要提前传入**Type**，指定查询条件。
     * @example `dtspk3f13r731m****`
     */
    "Params"?: string;
    /**
     * DTS实例所在地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
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
     * - **Modifying**：修改同步对象中。
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
     * @example `Migrating`
     */
    "Status"?: string;
    /**
     * 传入本参数指定实例排序顺序，取值：
     * - **ASC**：正序，为默认值。
     * - **DESC**：倒序。
     * @example `ASC`
     */
    "OrderDirection"?: string;
    /**
     * 当返回结果包含多个DTS实例时，传入本参数指定实例的排序依据，取值：
     * - **CreateTime**：按照实例的任务创建顺序排序。
     * - **FinishTime**：按照实例的任务完成顺序排序。
     * - **duLimit**（专属集群任务）：按照DTS任务使用DU的上限顺序排序，仅专属集群支持。
     * > 您还可以传入**OrderDirection**，指定实例排序顺序为正序或倒序。
     * @example `CreateTime`
     */
    "OrderColumn"?: string;
    /**
     * 标签搜索条件，格式为JSON。
     * > 标签的键和值，可通过调用**ListTagResources**接口查询。
     * @example `[     {         \"key\": \"testK\",         \"value\": \"testV\"     }  ]`
     */
    "Tags"?: string;
    /**
     * 每页记录数，取值：**30**、**50**、**100**，默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于**0**且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * DTS实例的任务类型，取值：
     * - **MIGRATION**：迁移（默认值）。
     * - **SYNC**：同步。
     * - **SUBSCRIBE**：订阅。
     * @example `MIGRATION`
     */
    "JobType"?: string;
    /**
     * 废弃参数。
     * @example `无`
     */
    "RegionId"?: string;
    /**
     * DTS任务ID。
     * > 一般情况下无需设置该参数。
     * @example `pk13r731m****`
     */
    "GroupId"?: string;
    /**
     * DTS专属集群ID。
     * @example `dtscluster_atyl3b5214uk***`
     */
    "DedicatedClusterId"?: string;
    /**
     * 迁移、同步或订阅任务ID。
     * @example `qa110wq5r93hb49`
     */
    "DtsJobId"?: string;
    /**
     * 迁移、同步或订阅实例ID。
     * @example `dtsi03e3zty16i****`
     */
    "DtsInstanceId"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmzawhxxc****`
     */
    "ResourceGroupId"?: string;
    /**
     * 返回参数是否屏蔽任务对象（不返回**DbObject**参数），取值：
     * - **true**：是，返回参数中不包含**DbObject**。
     * - **false**：否，返回参数中包含**DbObject**，可以提升接口响应速度。
     * @example `true`
     */
    "WithoutDbList"?: boolean;
    /**
     * DTS实例的环境标签，取值为：
     * - **normal**：**普通**
     * - **online**：**线上**
     * @example `normal`
     */
    "DtsBisLabel"?: string;
    /**
     * 是否无感集成（Zero-ETL）任务，取值：
     * - **false**：否。
     * - **true**：是。
     * @example `false`
     */
    "ZeroEtlJob"?: boolean;
    /**
     * 源或目标数据库实例的类型。
     * @example `RDS`
     */
    "InstanceType"?: string;
    /**
     * 请求参数**InstanceType**对应的源或目标数据库实例的ID。
     * @example `rm-bp1966yuut4w3****`
     */
    "InstanceId"?: string;
    "DestProductType"?: string;
    "SrcProductType"?: string;
}
