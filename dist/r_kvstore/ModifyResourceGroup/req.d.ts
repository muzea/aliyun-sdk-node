export interface ModifyResourceGroupRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 目标资源组ID。
     * > * 您可以通过调用[ListResourceGroups](~~158855~~)接口或通过控制台获取资源组ID列表。相关操作，请参见[查看资源组基本信息](~~151181~~)。
     * > * 修改实例所属的资源组之前，您可以调用[ListResources](~~158866~~)接口查看实例现在所属的资源组。
     * @example `rg-acfmyiu4ekp****`
     */
    "ResourceGroupId": string;
    /**
     * 实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
