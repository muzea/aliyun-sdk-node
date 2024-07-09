export interface ListServerGroupsRequest {
    /**
     * 服务器组ID。一次最多支持查询20个服务器组ID。
     */
    "ServerGroupIds"?: string[];
    /**
     * 服务器组名称，一次最多支持查询20个服务器组名称。
     */
    "ServerGroupNames"?: string[];
    /**
     * 服务器组所属的资源组ID。
     * @example `rg-atstuj3rtop****`
     */
    "ResourceGroupId"?: string;
    /**
     * 服务器组类型。取值：
     * - **Instance**：服务器类型，该类型服务器组支持添加**Ecs**、**Ens**、**Eci**类型实例。
     * - **Ip**：IP地址类型，该类型服务器组支持直接添加IP地址。
     * @example `Instance`
     */
    "ServerGroupType"?: string;
    /**
     * 服务器组所在VPC的ID。
     * @example `vpc-bp15zckdt37pq72zv****`
     */
    "VpcId"?: string;
    /**
     * 标签。
     */
    "Tag"?: {
        /**
         * 标签键。最多支持10个标签键。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或`者https://`。
         * @example `Test`
         */
        Key: string;
        /**
         * 标签值。最多支持10个标签值。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `Test`
         */
        Value: string;
    }[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 网络型负载均衡实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~443657~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
