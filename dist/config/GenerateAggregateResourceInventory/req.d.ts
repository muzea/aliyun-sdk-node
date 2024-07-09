export interface GenerateAggregateResourceInventoryRequest {
    /**
     * 资源所属地域，多个地域之间用半角逗号（,）分隔。
     * @example `cn-shanghai`
     */
    "Regions"?: string;
    /**
     * 资源类型，多个资源类型之间用半角逗号（,）分隔。
     * @example `ACS::ECS::Instance`
     */
    "ResourceTypes"?: string;
    /**
     * 账号组内成员账号ID，多个成员账号ID之间用半角逗号（,）分隔。
     * @example `126672004088****`
     */
    "AccountIds"?: string;
    /**
     * 账号组ID。
     * @example `ca-a91d626622af0035****`
     */
    "AggregatorId": string;
    /**
     * 资源状态。取值：
     * - 1（默认值）：保有中。
     * - 0：已删除。
     * @example `1`
     */
    "ResourceDeleted"?: number;
}
