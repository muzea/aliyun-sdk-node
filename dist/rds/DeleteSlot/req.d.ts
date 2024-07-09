export interface DeleteSlotRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * @example `ETnLKlblzczshOTUbOC****`
     */
    "ClientToken"?: string;
    /**
     * 目标实例ID。可调用DescribeDBInstances接口查询。
     * @example `pgm-bp102g323jd4****
    `
     */
    "DBInstanceId": string;
    /**
     * Replication Slot名称。可调用DescribeSlots接口查询。
     * @example `slot_test01`
     */
    "SlotName": string;
    /**
     * Replication Slot状态。可调用DescribeSlots接口查询。
     * - ACTIVE(活跃)
     * - INACTIVE(不活跃)
     * @example `INACTIVE`
     */
    "SlotStatus": string;
    /**
     * 资源组ID，可以为空。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
