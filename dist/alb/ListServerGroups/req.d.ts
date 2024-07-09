export interface ListServerGroupsRequest {
    /**
     * 服务器组ID列表。
     */
    "ServerGroupIds"?: string[];
    /**
     * 服务器组名称列表，最多10个。
     */
    "ServerGroupNames"?: string[];
    /**
     * 资源组ID。
     * @example `rg-atstuj3rtop****`
     */
    "ResourceGroupId"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXG****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * VPC实例ID。
     * @example `vpc-bp15zckdt37pq72zv****`
     */
    "VpcId"?: string;
    /**
     * 服务器组类型。取值：
     * - **Instance**：服务器类型，包括Ecs、Eni、Eci实例。
     * - **Ip**：IP地址类型。
     * - **Fc**：函数计算类型。
     * - 不填则查询所有类型。
     * @example `Instance`
     */
    "ServerGroupType"?: string;
    /**
     * 服务器组绑定的标签列表。一次请求中，绑定的标签列表中最多支持10个标签。
     * @example `Instance`
     */
    "Tag"?: {
        /**
         * 标签键。最多支持10个标签键。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
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
}
