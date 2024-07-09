export interface DescribeDtsJobDetailRequest {
    /**
     * 迁移、同步或订阅任务ID。
     * @example `ta7w132u12h****`
     */
    "DtsJobId"?: string;
    /**
     * 迁移、同步或订阅实例ID。
     * @example `dtsta7w132u12h****`
     */
    "DtsInstanceID"?: string;
    /**
     * 同步方向，取值：
     * - **Forward**：正向。
     * - **Reverse**：反向。
     * > - 默认取值为**Forward**。
     * - 只有当数据同步实例的同步拓扑为双向同步时，本参数传入**Reverse**才会生效。
     * @example `Forward`
     */
    "SynchronizationDirection"?: string;
    /**
     * 任务所属地域ID，请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 是否返回全部同步子任务的信息，默认为**false**，只返回正在进行中或者最近一次执行的同步子任务。
     * @example `false`
     */
    "SyncSubJobHistory"?: boolean;
    /**
     * 是否无感集成（Zero-ETL）任务，取值：
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    "ZeroEtlJob"?: boolean;
    /**
     * 资源组ID。
     * @example `rg-acfmzawhxxc****`
     */
    "ResourceGroupId"?: string;
}
