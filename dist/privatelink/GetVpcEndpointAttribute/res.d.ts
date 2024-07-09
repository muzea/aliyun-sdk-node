export interface GetVpcEndpointAttributeResponse {
    /**
     * 付费方。取值：
     * - **Endpoint**：服务使用方。
     * - **EndpointService**：服务提供方。
     * @example `Endpoint`
     */
    Payer: string;
    /**
     * 终端节点域名。
     * @example `ep-hp33b2e43fays7s8****.epsrv-hp3xdsq46ael67lo****.cn-huhehaote.privatelink.aliyuncs.com`
     */
    EndpointDomain: string;
    /**
     * 请求ID。
     * @example `8D8992C1-6712-423C-BAC5-E5E817484C6B`
     */
    RequestId: string;
    /**
     * 终端节点的创建时间。
     * @example `2021-09-24T18:00:07Z`
     */
    CreateTime: string;
    /**
     * 终端节点和终端节点服务是否同一账号。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    ResourceOwner: boolean;
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
     * 终端节点所属的专有网络ID。
     * @example `vpc-fdfhkjafhjvcvdjf****`
     */
    VpcId: string;
    /**
     * 终端节点名称。
     * @example `test`
     */
    EndpointName: string;
    /**
     * 每个可用区ENI的私网IP的数量。仅取值：**1**。
     * @example `1`
     */
    ZonePrivateIpAddressCount: number;
    /**
     * 终端节点类型。
     * 取值：**Interface**，表示接口终端节点，其中终端节点服务的服务资源类型为应用型负载均衡ALB（Application Load Balancer）、传统型负载均衡CLB（Classic Load Balancer）或网络型负载均衡NLB（Network Load Balancer ）。
     * @example `Interface`
     */
    EndpointType: string;
    /**
     * 终端节点关联的终端节点服务的名称。
     * @example `com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3xdsq46ael67lo****`
     */
    ServiceName: string;
    /**
     * 终端节点的连接带宽。单位：Mbps。
     * @example `1024`
     */
    Bandwidth: number;
    /**
     * 终端节点ID。
     * @example `ep-hp33b2e43fays7s8****`
     */
    EndpointId: string;
    /**
     * 终端节点所属的地域ID。
     * @example `cn-huhehaote`
     */
    RegionId: string;
    /**
     * 终端节点连接状态。取值：
     * - **Pending**：修改中。
     * - **Connecting**：连接中。
     * - **Connected**：已连接。
     * - **Disconnecting**：断开连接中。
     * - **Disconnected**：未连接。
     * - **Deleting**：删除中。
     * - **ServiceDeleted**：对应的终端节点服务已删除。
     * @example `Connected`
     */
    ConnectionStatus: string;
    /**
     * 是否支持连接服务的终端节点域名就近解析。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    ZoneAffinityEnabled: boolean;
    /**
     * 资源组ID。
     * @example `rg-acfmz7nocpei***`
     */
    ResourceGroupId: string;
    /**
     * RAM权限策略。关于策略定义的更多信息，请参见[权限策略基本元素](~~93738~~)。
     * @example `{
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "oss:List*",
            "oss:PutObject",
            "oss:GetObject"
          ],
          "Resource": [
            "acs:oss:oss-*:*:pvl-policy-test/policy-test.txt"
          ],
          "Principal": {
            "RAM": [
              "acs:ram::14199xxxxxx:*"
            ]
          }
        }
      ]
    }`
     */
    PolicyDocument: string;
}
