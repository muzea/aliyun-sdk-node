export interface ListTagResourcesRequest {
    /**
     * 资源类型。支持的类型为 EXPRESSCONNECTROUTER，即专线网关实例。
     * @example `EXPRESSCONNECTROUTER`
     */
    "ResourceType": string;
    /**
     * 专线网关实例ID列表。
     */
    "ResourceId": string[];
    /**
     * 标签。
     * 最多可以绑定20个标签。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 一次最多支持输入20个标签的标签键。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。一旦输入该值，可以为空字符串。
         * 一次调用最多支持添加20个标签值。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果 NextToken 为空表示没有下一次查询。
     * - 如果 NextToken 有返回值，该取值表示下一次查询开始的令牌。
     * @example `AAAAAYws9fJ0Ur4MGm/5OkDoW/Zn0J0/sCjivzwX9oBcwFnWaaas/kSG+J/WzLOxJHS4****`
     */
    "NextToken"?: string;
    /**
     * 单次请求返回结果的最大条数。默认值：20。
     * @example `20`
     */
    "MaxResults"?: number;
}
