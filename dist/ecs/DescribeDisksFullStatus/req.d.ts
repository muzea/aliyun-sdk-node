export interface DescribeDisksFullStatusRequest {
    /**
     * 块存储所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 指定块存储的生命周期状态，详情请参见[云盘状态表](~~25689~~)。取值范围：
     * - In_use：使用中 。
     * - Available：待挂载 。
     * - Attaching：挂载中 。
     * - Detaching：卸载中 。
     * - Creating：创建中 。
     * - ReIniting：初始化中 。
     *
     * @example `Available`
     */
    "Status"?: string;
    /**
     * 指定块存储的健康状态。取值范围：
     * - Impaired：暂时性不可读写 。
     * - Warning：服务降级 。
     * - Initializing：初始化中 。
     * - InsufficientData：数据不足 。
     * - NotApplicable：不适用 。
     *
     * @example `Warning`
     */
    "HealthStatus"?: string;
    /**
     * 指定块存储的事件类型。取值范围：
     * - Degraded：块存储性能降级。
     * - SeverelyDegraded：块存储性能严重降级。
     * - Stalled：块存储性能受到严重影响。
     * - ErrorDetected：本地盘出现损坏。
     * @example `Stalled`
     */
    "EventType"?: string;
    /**
     * 查询事件发生时间的开始时间。
     * 按照[ISO8601](~~25696~~)标准表示，并使用UTC+0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。
     * @example `2018-05-06T02:43:10Z`
     */
    "EventTime.Start"?: string;
    /**
     * 查询事件发生时间的结束时间。
     * 按照[ISO8601](~~25696~~)标准表示，并使用UTC+0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。
     * @example `2018-05-08T02:48:52Z`
     */
    "EventTime.End"?: string;
    /**
     * 查询结果的页码。取值范围：正整数。
     * 默认值：1 。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 查询结果的分页大小。取值范围：1~100。
     * 默认值：10 。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 块存储ID。N的取值范围：1~100。
     * @example `d-bp67acfmxazb4p****`
     */
    "DiskId"?: string[];
    /**
     * 事件ID。N的取值范围：1~100。
     * @example `e-bp67acfmxazb4p****`
     */
    "EventId"?: string[];
    /**
     * 块存储资源所属的资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。
     * @example `rg-aek2kkmhmhs****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 块存储资源绑定的标签键。N表示可以设置一个或多个标签键，且N的数值和`Tag.N.Value`参数中的N对应，构成键值对。N的取值范围：1~20。
         * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 块存储资源绑定的标签值。N表示可以设置一个或多个标签值，且N的数值和`Tag.N.Key`参数中的N对应，构成键值对。N的取值范围：1~20。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
