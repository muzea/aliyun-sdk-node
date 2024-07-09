export interface StartDtsJobRequest {
    /**
     * 迁移、同步或订阅任务ID。
     * @example `l3m1213ye7l****`
     */
    "DtsJobId"?: string;
    /**
     * 迁移、同步或订阅实例ID。
     * > 可以通过调用[查询迁移实例列表及各实例详情](~~208139~~)、[查询数据订阅实例列表及各实例详情](~~49442~~) 、[查询数据同步实例列表及各实例详情](~~49454~~)进行查询。
     * @example `dtsl3m1213ye7l****`
     */
    "DtsInstanceId"?: string;
    /**
     * 同步方向，取值：
     * - **Forward**：正向，默认值。
     * - **Reverse**：反向。
     * > 当数据同步实例的拓扑类型为双向时，才可以传入**Reverse**以启动反向同步链路。
     * @example `Forward`
     */
    "SynchronizationDirection"?: string;
    /**
     * DTS实例所属地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    "ZeroEtlJob"?: boolean;
    "ResourceGroupId"?: string;
}
