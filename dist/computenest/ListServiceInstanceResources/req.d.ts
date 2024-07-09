export interface ListServiceInstanceResourcesRequest {
    /**
     * 分页查询时每页行数。每页最大行数100行，默认行数20行。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAc3HCuYhJi/wvpk4xOr0VLbAx7BkQzyYC+ONO+WudHGKEdB0uWSY7AGnM3qCgm/Ynge7zU6NWdbj0Tegyajyqyc=`
     */
    "NextToken"?: string;
    /**
     * 服务实例ID。
     * @example `si-d8a0cc2a1ee04dce****`
     */
    "ServiceInstanceId": string;
    /**
     * 资源ARN（Aliyun Resource Name）。
     */
    "ResourceARN"?: string[];
    /**
     * 资源标签。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * @example `key1`
         */
        Key: string;
        /**
         * 资源的标签值。
         * @example `value1`
         */
        Value: string;
    }[];
    /**
     * 资源使用的开始时间。
     * ><notice>只支持私有化部署服务实例查询。></notice>
     * @example `2022-01-01T12:00:00`
     */
    "ExpireTimeStart"?: string;
    /**
     * 资源使用的结束时间。
     * ><notice>只支持私有化部署服务实例查询。></notice>
     * @example `2022-03-01T12:00:00`
     */
    "ExpireTimeEnd"?: string;
    /**
     * 付费类型。取值范围：
     * - Subscription：预付费。
     * - PayAsYouGo：后付费。
     * ><notice>只支持私有化部署服务实例查询。></notice>
     * @example `Subscription`
     */
    "PayType"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 服务实例资源类型。可能的值：
     * - AliyunResource：阿里云资源。
     * - ContainerResource：容器组（Pod）资源。
     * @example `AliyunResource`
     */
    "ServiceInstanceResourceType"?: string;
}
