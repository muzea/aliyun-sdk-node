export interface DeletePolicyBindingRequest {
    /**
     * 策略ID。
     * @example `po-000************hgp`
     */
    "PolicyId": string;
    /**
     * 需要解除与策略绑定的数据源ID列表。
     */
    "DataSourceIds"?: string[];
    /**
     * 数据源类型。取值范围：
     * * **UDM_ECS**：表示ECS整机备份。
     * @example `UDM_ECS`
     */
    "SourceType"?: string;
}
