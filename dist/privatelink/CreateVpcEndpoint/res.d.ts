export interface CreateVpcEndpointResponse {
    /**
     * 终端节点域名。
     * @example `ep-hp33b2e43fays7s8****.epsrv-hp3xdsq46ael67lo****.cn-huhehaote.privatelink.aliyuncs.com`
     */
    EndpointDomain: string;
    /**
     * 请求ID。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC0`
     */
    RequestId: string;
    /**
     * 终端节点的创建时间。
     * @example `2022-01-02T19:11:12Z`
     */
    CreateTime: string;
    /**
     * 终端节点的业务状态。取值：
     * - **Normal**：正常。
     * - **FinancialLocked**：欠费锁定。
     * @example `Normal`
     */
    EndpointBusinessStatus: string;
    /**
     * 终端节点描述。
     * @example `This is my Endpoint.`
     */
    EndpointDescription: string;
    /**
     * 终端节点关联的终端节点服务的ID。
     * @example `epsrv-hp3vpx8yqxblby3i****`
     */
    ServiceId: string;
    /**
     * 终端节点状态。取值：
     * - **Creating**：创建中。
     * - **Active**：可用。
     * - **Pending**：修改中。
     * - **Deleting**：删除中。
     * @example `Active`
     */
    EndpointStatus: string;
    /**
     * 终端节点所属的专有网络。
     * @example `vpc-hp356stwkxg3fn2xe****`
     */
    VpcId: string;
    /**
     * 终端节点名称。
     * @example `test`
     */
    EndpointName: string;
    /**
     * 终端节点关联的终端节点服务的名称。
     * @example `com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3xdsq46ael67lo****`
     */
    ServiceName: string;
    /**
     * 终端节点的连接带宽，单位：Mbps。
     * @example `200`
     */
    Bandwidth: number;
    /**
     * 终端节点ID。
     * @example `ep-hp33b2e43fays7s8****`
     */
    EndpointId: string;
    /**
     * 终端节点连接状态。取值：
     * - **Pending**：修改中。
     * - **Connecting**：连接中。
     * - **Connected**：已连接。
     * - **Disconnecting**：断开连接中。
     * - **Disconnected**：未连接。
     * - **Deleting**：删除中。
     * @example `Disconnected`
     */
    ConnectionStatus: string;
}
