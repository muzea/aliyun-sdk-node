export interface DescribeConsumerGroupRequest {
    /**
     * 数据订阅实例所在地域的ID，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 每页记录数，取值： **30**、**50**、**100**，默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于**0**且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 数据订阅实例ID，可以通过调用DescribeSubscriptionInstances接口查询。
     * @example `dtso5xx5t9u19e****`
     */
    "SubscriptionInstanceId": string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
    "ResourceGroupId"?: string;
}
