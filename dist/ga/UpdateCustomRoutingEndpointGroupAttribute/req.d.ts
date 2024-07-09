export interface UpdateCustomRoutingEndpointGroupAttributeRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 终端节点组ID。
     * @example `epg-bp1dmlohjjz4kqaun****`
     */
    "EndpointGroupId": string;
    /**
     * 终端节点组的名称。
     * 名称长度为2~128个字符，以大小写字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * @example `group1`
     */
    "Name"?: string;
    /**
     * 终端节点组描述信息。
     * 描述长度最大256字符，不能包含`http://`和`https://`字符。
     * @example `EndpointGroup`
     */
    "Description"?: string;
}
