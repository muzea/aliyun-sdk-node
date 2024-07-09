export interface UntagResourcesRequest {
    /**
     * 资源所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源ID列表。
     */
    "ResourceId": string[];
    /**
     * 要解绑的标签键列表。最多可输入20个标签键。
     */
    "TagKey"?: string[];
    /**
     * 资源类型。取值范围：
     * - ContainerGroup：ECI实例
     * - ImageCache：镜像缓存
     * - DataCache：数据缓存
     * - VirtualNode：虚拟节点
     * @example `ContainerGroup`
     */
    "ResourceType": string;
    /**
     * 是否解绑资源上全部的标签。当请求中未设置 `TagKey`时，该参数才有效。取值范围：
     * - true
     * - false
     * 默认值：false
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-xxx-xxx-xxxx-42665544xxxx`
     */
    "ClientToken"?: string;
}
