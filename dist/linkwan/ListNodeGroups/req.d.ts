export interface ListNodeGroupsRequest {
    /**
     * 实例ID。
     * 您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 模糊匹配节点分组名称。
     * @example `test`
     */
    "FuzzyName"?: string;
    /**
     * 模糊匹配节点分组所使用的JoinEUI。
     * @example `d896e0`
     */
    "FuzzyJoinEui"?: string;
    /**
     * 模糊匹配分组中的节点DevEUI。
     * @example `d896e0`
     */
    "FuzzyDevEui"?: string;
    /**
     * 本次查询的起始位置，从0开始。
     * @example `0`
     */
    "Offset": number;
    /**
     * 本次查询的分组数量，取值范围0~200。
     * @example `2`
     */
    "Limit": number;
    /**
     * 指定排序字段，取值为**CREATED_MILLIS**，表示根据创建时间排序。
     * @example `CREATED_MILLIS`
     */
    "SortingField"?: string;
    /**
     * 配合**SortingField**参数一起使用，指定字段排序方式。取值：
     * - **true**：升序。
     * - **false**：降序。
     * @example `true`
     */
    "Ascending"?: boolean;
}
