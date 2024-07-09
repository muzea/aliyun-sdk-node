export interface ResetDtsJobRequest {
    /**
     * 同步或订阅任务ID。
     * @example `l3m1213ye7l****`
     */
    "DtsJobId"?: string;
    /**
     * 同步或订阅实例ID。
     * @example `dtsl3m1213ye7l****`
     */
    "DtsInstanceId"?: string;
    /**
     * 同步方向，取值：
     * - **Forward**：正向。
     * - **Reverse**：反向。
     * > - 默认取值为**Forward**。
     * - 当数据同步实例的拓扑为双向时，才可以传入**Reverse**以重置反向同步链路。
     * @example `Forward`
     */
    "SynchronizationDirection"?: string;
    /**
     * dts实例所在地域，详情请参见[支持的地域列表](~~141033~~)。
     */
    "RegionId"?: string;
    "ResourceGroupId"?: string;
}
