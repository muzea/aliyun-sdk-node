export interface UpdateBasicEndpointGroupRequest {
    /**
     * 基础型全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 基础型全球加速实例的终端节点组ID。
     * @example `epg-bp1dmlohjjz4kqaun****`
     */
    "EndpointGroupId": string;
    /**
     * 基础型全球加速实例的终端节点组的名称。
     * 名称长度为 1~128 个字符，以大小写字母或中文开头，可包含数字、半角句号（.）下划线（_）和短划线（-）。
     * @example `group1`
     */
    "Name"?: string;
    /**
     * 基础型全球加速实例的终端节点组描述信息。
     * 描述长度最大200字符，不能以`http://`和`https://`开头。
     * @example `BasicEndpointGroup`
     */
    "Description"?: string;
    /**
     * 终端节点类型。取值：
     * - **ENI**：阿里云弹性网卡。
     * - **SLB**：阿里云CLB实例。
     * - **ECS**：阿里云ECS实例。
     * @example `ENI`
     */
    "EndpointType"?: string;
    /**
     * 终端节点的地址。
     * @example `eni-bp1a05txelswuj8g****`
     */
    "EndpointAddress"?: string;
    /**
     * 终端节点辅助地址。
     * 当加速IP绑定到ECS辅助私网IP地址或ENI辅助私网IP时，需配置该参数。
     * - 当终端节点类型为**ECS**时，**EndpointSubAddress**可以为主网卡的辅助私网IP，为空表示主网卡的主私网IP。
     * - 当终端节点类型为**ENI**时，**EndpointSubAddress**可以为辅助网卡的辅助私网IP，为空表示辅助网卡的主私网IP。
     * @example `172.16.XX.XX`
     */
    "EndpointSubAddress"?: string;
}
