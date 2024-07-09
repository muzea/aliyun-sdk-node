export interface MoveDomainResourceGroupRequest {
    /**
     * 部分返回参数语言。默认值：en。取值范围：en、zh、ja。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名，当Tag数组传空值时，ResourceId为必传。
     * @example `dns-example.top`
     */
    "ResourceId": string;
    /**
     * 新资源组ID。
     * 您可以通过[资源管理控制台](https://resourcemanager.console.aliyun.com/resource-groups?)查看资源组ID，或者调用ListResourceGroups接口获取。
     * @example `rg-aekzzk7hx3glaoq`
     */
    "NewResourceGroupId": string;
}
