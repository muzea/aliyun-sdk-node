export interface UpdateEndpointGroupAttributeRequest {
    /**
     * 全球加速实例所在的地域ID，仅支持取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 终端节点组的ID。
     * @example `epg-bp1ple63864a5hyj5****`
     */
    "EndpointGroupId": string;
    /**
     * 要修改的终端节点组的名称。
     * 名称长度为1~128个字符，以大小写字母或中文开头，可包含数字、半角句号（.）下划线（_）和短划线（-）。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 要修改的终端节点组的描述。
     * 描述长度最大200字符，不能以`http://`和`https://`开头。
     * @example `testEndpointGroup`
     */
    "Description"?: string;
}
