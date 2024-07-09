export interface SuspendDtsJobRequest {
    /**
     * 迁移、同步或订阅任务ID。
     * > 可调用[DescribeDtsJobs](~~209702~~)接口获取任务ID。
     * @example `l3m1213ye7l****`
     */
    "DtsJobId"?: string;
    /**
     * 迁移、同步或订阅实例ID。
     * @example `dtsl3m1213ye7l****`
     */
    "DtsInstanceId"?: string;
    /**
     * 同步方向，取值：
     * - **Forward**：正向。
     * - **Reverse**：反向。
     * > - 默认取值为**Forward**。
     * - 当数据同步实例的拓扑为双向时，才可以传入**Reverse**以暂停反向同步链路。
     * @example `Forward`
     */
    "SynchronizationDirection"?: string;
    /**
     * DTS实例所在地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    "ZeroEtlJob"?: boolean;
    "ResourceGroupId"?: string;
}
