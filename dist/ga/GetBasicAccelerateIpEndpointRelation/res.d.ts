export interface GetBasicAccelerateIpEndpointRelationResponse {
    /**
     * 基础型全球加速实例的终端节点ID。
     * @example `ep-bp14sz7ftcwwjgrdm****`
     */
    EndpointId: string;
    /**
     * 基础型全球加速实例终端节点的名称。
     * @example `ep01`
     */
    EndpointName: string;
    /**
     * 终端节点类型。
     * - **ENI**：阿里云弹性网卡。
     * - **SLB**：阿里云CLB实例。
     * - **ECS**：阿里云ECS实例。
     * - **NLB**：阿里云NLB实例。
     * @example `ENI`
     */
    EndpointType: string;
    /**
     * 终端节点的地址。
     * @example `eni-bp1a05txelswuj8g****`
     */
    EndpointAddress: string;
    /**
     * 终端节点辅助地址。
     * 当加速IP所绑定终端节点类型为**ECS**、**ENI**或**NLB**时，返回该参数。
     * - 当终端节点类型为**ECS**时，**EndpointSubAddress**为主网卡的辅助私网IP或主网卡的主私网IP。
     * - 当终端节点类型为**ENI**时，**EndpointSubAddress**为辅助网卡的辅助私网IP或辅助网卡的主私网IP。
     * - 当终端节点类型为**NLB**时，**EndpointSubAddress**为NLB后端服务器的主私网IP。
     * @example `172.16.XX.XX`
     */
    EndpointSubAddress: string;
    /**
     * 终端节点辅助地址的类型。
     * - **primary**：终端节点辅助地址的类型为主私网IP。
     * - **secondary**：终端节点辅助地址的类型为辅助私网IP。
     * 当加速IP所绑定终端节点类型为**ECS**、**ENI**或**NLB**时，返回该参数。其中，终端节点类型为**NLB**时，仅返回**primary**类型。
     * @example `primary`
     */
    EndpointSubAddressType: string;
    /**
     * 终端节点所在可用区ID。
     * 目前，仅当加速IP所绑定终端节点类型为**NLB**时，返回该参数。
     * @example `cn-hangzhou-g`
     */
    EndpointZoneId: string;
    /**
     * 基础型全球加速实例的加速IP实例ID。
     * @example `gaip-bp1****`
     */
    AccelerateIpId: string;
    /**
     * 基础型全球加速实例的加速IP。
     * @example `116.132.XX.XX`
     */
    IpAddress: string;
    /**
     * 基础型全球加速实例的加速IP和终端节点绑定状态。
     * 返回**active**，表示已绑定。
     * @example `active`
     */
    State: string;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 基础型全球加速实例ID。
     * @example ` ga-bp11v53zfftax68b0daws`
     */
    AcceleratorId: string;
}
