export interface ResetInstancesRequest {
    /**
     * 地域
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云手机实例ID列表，N取值范围1-100
     * @example `cp-xxxxxx`
     */
    "InstanceId": string[];
    /**
     * 云手机镜像ID，若不指定，则按当前实例的镜像进行重置。
     * @example `cpm-xxxxxx`
     */
    "ImageId"?: string;
}
