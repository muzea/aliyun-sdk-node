export interface ListAclsRequest {
    /**
     * 根据ACL ID来过滤查找ACL列表。
     */
    "AclIds"?: string[];
    /**
     * ACL名称列表。一次最多支持查询10个ACL名称。
     */
    "AclNames"?: string[];
    /**
     * 资源组ID，根据设置的资源组ID来过滤。
     * @example `rg-atstuj3rtopty****`
     */
    "ResourceGroupId"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大数据记录数量，此参数为可选参数。取值范围：**1**~**100**。默认值：**20**。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 标签。
     */
    "Tag"?: {
        /**
         * 标签键。最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。
         * @example `product`
         */
        Value: string;
    }[];
}
