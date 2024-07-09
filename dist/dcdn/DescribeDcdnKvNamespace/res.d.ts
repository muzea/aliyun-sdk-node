export interface DescribeDcdnKvNamespaceResponse {
    /**
     * Namespace状态，取值：
     * - **online**：正常。
     * - **delete**：待删除。
     * - **deleting**：删除中。
     * - **deleted**：已删除。
     * @example `online`
     */
    Status: string;
    /**
     * Namespace名称。
     * @example `ns1`
     */
    Namespace: string;
    /**
     * Namespace ID。
     * @example `12423131231****`
     */
    NamespaceId: string;
    /**
     * 请求ID。
     * @example `D61E4801-EAFF-4A63-AAE1-FBF6CE1CFD1C`
     */
    RequestId: string;
    /**
     * Namespace描述信息。
     * @example `the first namespace`
     */
    Description: string;
    /**
     * Namespace可用容量。
     * @example `1 GB`
     */
    CapacityString: string;
    /**
     * Namespace已用容量。
     * @example `100 MB`
     */
    CapacityUsedString: string;
    /**
     * 模式（Mode）
     * - 普通模式（Normal）：默认模式，在边缘未获取到KV时，尝试从中心查询KV信息，从而保证全局数据一致性。
     * - 快速模式（Rapid）：在边缘未获取到KV时，不再向中心查询，而是直接返回“key不存在”。开启该模式将提升KV查询性能。但可能造成KV查询命中率下降，若有需求请通过工单申请开通。
     * @example `Normal`
     */
    Mode: string;
}
