export interface RebalanceInstancesRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-bp18p2yfxow2dloq****`
     */
    "ScalingGroupId": string;
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
