export interface ListVpcEndpointsRequest {
    /**
     * 要查询的终端节点所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~120468~~)接口获取地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId": string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 分页大小。取值范围：**1**~**50**。默认值：**50**。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 要查询的终端节点ID。
     * @example `ep-hp33b2e43fays7s8****`
     */
    "EndpointId"?: string;
    /**
     * 要查询的终端节点关联的终端节点服务名称。
     * @example `com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****`
     */
    "ServiceName"?: string;
    /**
     * 终端节点所属的专有网络。
     * @example `vpc-fdjkf789dfdfdfde****`
     */
    "VpcId"?: string;
    /**
     * 终端节点名称。
     * @example `test`
     */
    "EndpointName"?: string;
    /**
     * 终端节点类型。
     * 仅取值： **Interface**，表示接口终端节点，您可以添加应用型负载均衡ALB（Application Load Balancer）、传统型负载均衡CLB（Classic Load Balancer）和网络型负载均衡NLB（Network Load Balancer ）的服务资源类型。
     * @example `Interface`
     */
    "EndpointType"?: string;
    /**
     * 终端节点状态，取值：
     * - **Creating**：创建中。
     * - **Active**：可用。
     * - **Pending**：修改中。
     * - **Deleting**：删除中。
     * @example `Active`
     */
    "EndpointStatus"?: string;
    /**
     * 终端节点连接状态，取值：
     * - **Pending**：修改中。
     * - **Connecting**：连接中。
     * - **Connected**：已连接。
     * - **Disconnecting**：断开连接中。
     * - **Disconnected**：未连接。
     * - **Deleting**：删除中。
     * - **ServiceDeleted**：终端节点对应的服务已删除。
     * @example `Disconnected`
     */
    "ConnectionStatus"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 实例的标签键。最多支持20个标签键。一旦传入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 实例的标签值。最多支持20个标签值。一旦传入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。
     * @example `1`
     */
    "ResourceGroupId"?: string;
}
