export interface QueryAvailableInstancesRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页条数，默认值为20，最大不超过300个。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 产品代码。可通过接口**QueryProductList**查询产品代码。
     * > 当设置了region时，不为空。
     * @example `rds`
     */
    "ProductCode"?: string;
    /**
     * 产品类型。
     * @example `rds`
     */
    "ProductType"?: string;
    /**
     * 订阅类型。
     * - Subscription：预付费。
     * - PayAsYouGo：后付费。
     * @example `Subscription`
     */
    "SubscriptionType"?: string;
    /**
     * 实例ID。多个ID用英文逗号分隔，最大不超过100个。
     * @example `rm-xxxxxxxxxxxx`
     */
    "InstanceIDs"?: string;
    /**
     * 结束时间段起，符合ISO8601标准的utc时间格式，例如2016-05-23T12:00:00Z。
     * @example `2016-05-23T12:00:00Z`
     */
    "EndTimeStart"?: string;
    /**
     * 结束时间段止，符合ISO8601标准的utc时间格式，例如2016-05-23T12:00:00Z。
     * @example `2016-05-23T12:00:00Z`
     */
    "EndTimeEnd"?: string;
    /**
     * 创建时间段起，符合ISO8601标准的utc时间格式。
     * @example `2016-05-23T12:00:00Z`
     */
    "CreateTimeStart"?: string;
    /**
     * 创建时间段止，符合ISO8601标准的utc时间格式。
     * @example `2016-05-23T12:00:00Z`
     */
    "CreateTimeEnd"?: string;
    /**
     * 续费状态，取值：
     * - AutoRenewal：自动续费。
     * - ManualRenewal：手动续费。
     * - NotRenewal：不续费。
     * @example `AutoRenewal`
     */
    "RenewStatus"?: string;
}
