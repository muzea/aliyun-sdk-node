export interface UnTagResourcesRequest {
    /**
     * 资源ID。最多支持解绑20个资源ID。
     */
    "ResourceId": string[];
    /**
     * 要解绑的标签键。最多支持输入20个标签键。如需传入该值，可以输入空字符串。
     * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
     */
    "TagKey"?: string[];
    /**
     * 是否解绑资源的所有标签。取值：
     * - **true**：解除资源的所有标签。
     * - **false**（默认值）：不解除资源的所有标签。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源类型。取值：**PeerConnection**，VPC对等连接。
     * @example `PeerConnection`
     */
    "ResourceType": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 标签所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
