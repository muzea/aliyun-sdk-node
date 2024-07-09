export interface MoveResourceGroupRequest {
    /**
     * 要操作的WAF资源的ID。
     * 您将网站域名接入WAF防护后，则该域名表示一个WAF资源。WAF资源在资源管理服务中使用资源ID（ResourceId）作为其唯一标识，WAF资源ID的命名方式为：`<InstanceId>~<Domain>`。具体说明如下：
     * - `<InstanceId>`表示当前WAF实例的ID。您可以调用WAF API中的[DescribeInstanceInfo](~~140857~~)接口，查询当前WAF实例的ID。
     * - `<Domain>`表示已接入WAF实例防护的网站域名。您可以调用WAF API中的[DescribeDomainList](~~255880~~)接口，查询所有已接入WAF实例防护的域名。
     * - `<InstanceId>`和`<Domain>`之间使用`~`连接，即表示WAF域名资源的资源ID。
     * @example `waf-cn-09k1rd5****~www.example.com`
     */
    "ResourceId": string;
    /**
     * WAF资源要转入的资源组的ID。
     * 您通过资源管理服务创建资源组后，资源管理服务会为资源组生成一个唯一标识，即资源组ID（ResourceGroupId）。
     * 您可以在[资源管理控制台](https://resourcemanager.console.aliyun.com/resource-groups)的**资源组**页面，查询所有资源组ID；或者调用资源管理服务提供的[ListResourceGroups](~~158855~~)接口，查询所有资源组ID。
     * @example `rg-atstuj3rtop****`
     */
    "ResourceGroupId": string;
    /**
     * WAF资源的类型。唯一取值：**domain**，表示WAF的资源类型仅为域名。
     * @example `domain`
     */
    "ResourceType": string;
    /**
     * WAF实例所属地域。取值：
     * - **cn-hangzhou**：表示中国内地。
     * - **ap-southeast-1**：表示海外地区。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
