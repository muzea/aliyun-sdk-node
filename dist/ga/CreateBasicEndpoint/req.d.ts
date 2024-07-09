export interface CreateBasicEndpointRequest {
    /**
     * 全球加速所在的地域ID，仅取值**cn-hangzhou**。
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
     * 基础型全球加速实例ID。
     * @example `ga-bp17frjjh0udz4qz****`
     */
    "AcceleratorId": string;
    /**
     * 基础型全球加速实例的终端节点组ID。
     * @example `epg-bp1dmlohjjz4kqaun****`
     */
    "EndpointGroupId": string;
    /**
     * 基础型全球加速实例终端节点的名称。
     * 名称长度为1~128个字符，以大小写字母或中文开头，可包含数字、半角句号（.）下划线（_）和短划线（-）。
     * @example `ep01`
     */
    "Name"?: string;
    /**
     * 终端节点类型。取值：
     * - **ENI**：阿里云弹性网卡。
     * - **SLB**：阿里云CLB实例。
     * - **ECS**：阿里云ECS实例。
     * - **NLB**：阿里云NLB实例。
     * @example `ENI`
     */
    "EndpointType": string;
    /**
     * 终端节点的地址。
     * @example `eni-bp1a05txelswuj8g****`
     */
    "EndpointAddress": string;
    /**
     * 终端节点辅助地址。
     * 当终端节点类型为**ECS**、**ENI**或**NLB**时，需配置该参数。
     * - 当终端节点类型为**ECS**时，**EndpointSubAddress**可以为主网卡的辅助私网IP，为空表示主网卡的主私网IP。
     * - 当终端节点类型为**ENI**时，**EndpointSubAddress**可以为辅助网卡的辅助私网IP，为空表示辅助网卡的主私网IP。
     * - 当终端节点类型为**NLB**时，该参数必填，**EndpointSubAddress**为NLB后端服务器的主私网IP。
     * @example `172.16.XX.XX`
     */
    "EndpointSubAddress"?: string;
    /**
     * 终端节点辅助地址的类型。取值：
     * - **primary**：终端节点辅助地址的类型为主私网IP。
     * - **secondary**：终端节点辅助地址的类型为辅助私网IP。
     * 当终端节点类型为**ECS**、**ENI**或**NLB**时，需配置该参数。其中，终端节点类型为**NLB**时，仅支持**primary**类型。
     * @example `primary`
     */
    "EndpointSubAddressType"?: string;
    /**
     * 终端节点所在可用区ID。
     * 目前，仅当终端节点类型为**NLB**时，需要输入该参数。
     * @example `cn-hangzhou-g`
     */
    "EndpointZoneId"?: string;
}
