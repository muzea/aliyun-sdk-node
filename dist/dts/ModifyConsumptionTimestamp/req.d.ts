export interface ModifyConsumptionTimestampRequest {
    /**
     * 地域ID，传入本参数来指定实例所在地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据订阅实例ID，可以通过调用**DescribeSubscriptionInstances**接口查询。
     * @example `dtsg2m10r1x15a****`
     */
    "SubscriptionInstanceId": string;
    /**
     * 消费时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-10-15T17:20:03Z`
     */
    "ConsumptionTimestamp": string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
    "ResourceGroupId"?: string;
}
