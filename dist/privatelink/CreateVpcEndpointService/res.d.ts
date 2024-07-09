export interface CreateVpcEndpointServiceResponse {
    /**
     * 终端节点服务的业务状态。取值：
     * - **Normal**：正常。
     * - **FinancialLocked**：欠费锁定。
     * @example `Normal`
     */
    ServiceBusinessStatus: string;
    /**
     * 请求ID。
     * @example `8D8992C1-6712-423C-BAC5-E5E817484C6B`
     */
    RequestId: string;
    /**
     * 终端节点服务的名称。
     * @example `com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****`
     */
    ServiceName: string;
    /**
     * 终端节点服务的状态。取值：
     * - **Creating**：创建中。
     * - **Pending**：修改中。
     * - **Active**：可用。
     * - **Deleting**：删除中。
     * @example `Active`
     */
    ServiceStatus: string;
    /**
     * 终端节点服务的描述信息。
     * @example `This is my EndpointService.`
     */
    ServiceDescription: string;
    /**
     * 终端节点服务的创建时间。
     * @example `2022-01-02T19:11:12Z`
     */
    CreateTime: string;
    /**
     * 终端节点服务的服务域名。
     * @example `epsrv-hp3vpx8yqxblby3i****.cn-huhehaote.privatelink.aliyuncs.com`
     */
    ServiceDomain: string;
    /**
     * 是否支持连接服务的终端节点域名就近解析。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    ZoneAffinityEnabled: boolean;
    /**
     * 是否自动接受终端节点连接。取值：
     * - **true**：自动接受终端节点连接。
     * - **false**：不自动接受终端节点连接。
     * @example `false`
     */
    AutoAcceptEnabled: boolean;
    /**
     * 终端节点服务的ID。
     * @example `epsrv-hp3vpx8yqxblby3i****`
     */
    ServiceId: string;
    /**
     * 终端节点服务是否支持IPv6功能。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    ServiceSupportIPv6: boolean;
    /**
     * 资源组ID。
     * @example `rg-acfmy*****`
     */
    ResourceGroupId: string;
}
