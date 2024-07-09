export interface DisableInstanceDasConfigRequest {
    /**
     * 数据库实例ID。
     * @example `r-bp1nti25tc7bq5****`
     */
    "InstanceId": string;
    /**
     * 数据库引擎，当前仅支持Redis。
     * @example `Redis`
     */
    "Engine": string;
    /**
     * 弹性伸缩类型，取值：
     * - **specScale**：规格自动弹性伸缩。
     * - **shardScale**：分片自动弹性伸缩。
     * - **bandwidthScale**：带宽自动弹性伸缩。
     * @example `bandwidthScale`
     */
    "ScaleType": string;
}
