export interface UntagResourcesRequest {
    /**
     * 是否解绑指定资源组或资源目录成员的全部标签。取值：
     * - false（默认值）：否
     * - true：是
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源组ID或资源目录成员ID。
     * 最多可以指定50个。
     */
    "ResourceId": string[];
    /**
     * 标签键。
     * 最多可以解绑20个标签键。
     * > 当解绑全部标签的参数`All`取值为`true`时，不需要设置标签键。
     */
    "TagKey"?: string[];
    /**
     * 资源类型。取值：
     * - ResourceGroup（默认值）：解绑资源组的标签。
     * - Account：解绑资源目录成员的标签。
     * > 当解绑资源目录成员的标签时，该参数为必选。
     * @example `ResourceGroup`
     */
    "ResourceType"?: string;
}
