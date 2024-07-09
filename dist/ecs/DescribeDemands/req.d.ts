export interface DescribeDemandsRequest {
    /**
     * 目标地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 报备单列表的页码。起始值：1
     * 默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。最大值：100
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否只预检此次请求。取值范围：
     * - true：发送检查请求，不会查询报备单状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
     * - false（默认值）：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询报备单状况。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * > 该参数暂未开放使用。
         * @example `TestKey`
         */
        Key: string;
        /**
         * > 该参数暂未开放使用。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 可用区ID。更多详情，请参见[DescribeZones](~~25610~~)获取可用区列表。
     * @example `cn-hangzhou-g`
     */
    "ZoneId"?: string;
    /**
     * 报备ID。指定该参数后，将忽略其他非必选请求参数。
     * @example `ed-bp11n21kq00sl71p****`
     */
    "DemandId"?: string;
    /**
     * 报备实例的规格族。
     * @example `ecs.g6`
     */
    "InstanceTypeFamily"?: string;
    /**
     * 报备实例的规格。
     * @example `ecs.g6.xlarge`
     */
    "InstanceType"?: string;
    /**
     * 实例的计费方式。取值范围：
     * - PostPaid：按量付费
     * - PrePaid：包年包月
     * @example `PostPaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 报备实例来源。取值范围：
     * * Custom：自助报备。
     * * System（默认）：阿里云协助报备。
     * @example `Custom`
     */
    "DemandType"?: string;
    /**
     * 报备单或资源使用状态。取值范围：
     * - Creating：报备单创建中。
     * - Active：资源供应中。
     * - Expired：报备单已过期。
     * - Finished：消费完毕。
     * - Refused：报备拒绝，具体原因请查看返回参数`Comment`。
     * - Cancelled：报备取消。
     * @example `Active`
     */
    "DemandStatus"?: string[];
}
