export interface JoinResourceGroupRequest {
    /**
     * 区域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型。取值范围：
     * - cluster：集群。
     * @example `cluster`
     */
    "ResourceType": string;
    /**
     * 资源组。
     * @example `rg-acfmzabjyop****`
     */
    "ResourceGroupId": string;
    /**
     * 资源ID。
     * @example `c-c95f0a39d8ff****`
     */
    "ResourceId": string;
}
