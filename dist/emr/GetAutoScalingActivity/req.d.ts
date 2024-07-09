export interface GetAutoScalingActivityRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `c-b933c5aac8fe****`
     */
    "ClusterId": string;
    /**
     * 伸缩活动ID。
     * @example `asa-36373b084d6b4b13aa50f4129a9e****`
     */
    "ScalingActivityId": string;
}
