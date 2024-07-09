export interface ListTagResourcesRequest {
    /**
     * 传统型负载均衡实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型定义，取值：
     * - **instance**：负载均衡实例。
     * - **certificate**：证书。
     * - **acl**：访问控制。
     * - **listener**：监听。
     * - **vservergroup**：虚拟服务器组。
     * - **masterslaveservergroup**：主备服务器组。
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 资源ID。最多支持添加20个资源。
     * > **listener**的**ResourceId**取值为**LoadBalancerId\_监听协议\_Port**，其中LoadBalancerId为实例ID，port为监听端口。示例：lb\-bp1qnnvj18yy6h****\_http\_80。
     * @example `lb-bp1qnnvj18yy6h******`
     */
    "ResourceId"?: string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。最多支持添加20个标签键。
         * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持添加20个标签值。一旦传入该值，不可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
