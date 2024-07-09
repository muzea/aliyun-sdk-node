export interface ListTagResourcesRequest {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**。默认值：**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 资源类型，取值：
     * - **acl**：访问控制。
     * - **loadbalancer**：应用型负载均衡实例。
     * - **securitypolicy**：安全策略。
     * - **servergroup**：服务器组。
     * @example `loadbalancer`
     */
    "ResourceType": string;
    /**
     * 资源ID。
     * @example `acl-123`
     */
    "ResourceId"?: string[];
    /**
     * 标签。
     * > **ResourceId**和**Tag**参数至少填写其中一个。
     * @example `test`
     */
    "Tag"?: {
        /**
         * 标签键。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `product`
         */
        Value: string;
    }[];
}
