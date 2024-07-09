export interface UnTagResourcesRequest {
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
     * 要删除标签的资源ID。
     * @example `acl-123`
     */
    "ResourceId": string[];
    /**
     * 要删除的标签。
     * @example `test`
     */
    "Tag"?: {
        /**
         * 要删除标签的标签键。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `env`
         */
        Key: string;
        /**
         * 要删除标签的标签值。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `product`
         */
        Value: string;
    }[];
    /**
     * 要删除标签的标签键。
     */
    "TagKey"?: string[];
    /**
     * 是否解绑资源的所有标签。取值：
     * - **true**：解绑资源的所有标签。
     * - **false**（默认值）：不解绑资源的所有标签。
     * @example `false`
     */
    "All"?: boolean;
}
