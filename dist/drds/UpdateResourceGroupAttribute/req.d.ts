export interface UpdateResourceGroupAttributeRequest {
    /**
     * 目标实例的地域ID。
     * > 您可以调用[DescribeDrdsInstances](~~139284~~)接口查看账号下的实例详情，包括地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 目标实例ID。
     * > 您可以调用[DescribeDrdsInstances](~~139284~~)接口查看账号下的实例详情，包括实例ID。
     * @example `drds***********`
     */
    "DrdsInstanceId": string;
    /**
     * 目标资源组ID。
     * > 您可以调用[ListResourceGroups](~~158855~~)接口查看资源组详情，包括资源组ID。
     * @example `rg-***************`
     */
    "NewResourceGroupId": string;
}
