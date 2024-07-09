export interface ChangeResourceGroupRequest {
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型，目前仅支持伸缩组。取值：scalinggroup。
     * @example `scalinggroup`
     */
    "ResourceType"?: string;
    /**
     * 待修改资源组的伸缩组ID。
     * @example `asg-bp17xb4x1vr29lgt****`
     */
    "ResourceId": string;
    /**
     * 将伸缩组更改到新的资源组后，新资源组的ID。
     * @example `rg-aek2ckjqe3*****`
     */
    "NewResourceGroupId": string;
}
