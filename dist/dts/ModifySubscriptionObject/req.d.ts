export interface ModifySubscriptionObjectRequest {
    /**
     * 地域ID，传入本参数来指定实例所在地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据订阅实例ID，可以通过调用[DescribeSubscriptionInstances](~~49442~~)接口查询。
     * @example `dtsl8zl9ek6292****`
     */
    "SubscriptionInstanceId": string;
    /**
     * 订阅对象，格式为JSON串且支持一定的正则表达式，详细说明请参见[订阅对象配置说明](~~141902~~)。
     * @example `[{"DBName":"dtstestdata"}]`
     */
    "SubscriptionObject": string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
    "ResourceGroupId"?: string;
}
