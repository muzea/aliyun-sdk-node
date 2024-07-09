export interface DescribeQosCarsRequest {
    /**
     * QoS策略实例所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * QoS策略实例ID。
     * @example `qos-awfxl1adxeqyk****`
     */
    "QosId": string;
    /**
     * QoS策略实例的限速规则ID。
     * @example `qoscar-n5k8g97lihlph****`
     */
    "QosCarId"?: string;
    /**
     * 限速规则的排序方式。取值：
     * - **asc**（默认值）：升序。
     * - **desc**：降序。
     * 默认按照限速规则的优先级升序排列。
     * @example `asc`
     */
    "Order"?: string;
    /**
     * 限速规则的描述信息。
     * @example `testdesc`
     */
    "Description"?: string;
    /**
     * 分页查询时每页显示的最大条目数。取值范围：**1**~**50**。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
