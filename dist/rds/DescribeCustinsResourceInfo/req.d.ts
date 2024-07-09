export interface DescribeCustinsResourceInfoRequest {
    /**
     * 实例ID，可调用[describedbinstances](~~26232~~)获取。
     * @example ` rm-wz9s06u4drm******`
     */
    "DBInstanceIds": string;
    /**
     * 资源组ID。
     * @example `rg-acfmy*****`
     */
    "ResourceGroupId"?: string;
}
