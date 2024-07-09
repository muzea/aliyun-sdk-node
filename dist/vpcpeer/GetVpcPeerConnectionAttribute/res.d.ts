export interface GetVpcPeerConnectionAttributeResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3AC0DE3C83E`
     */
    RequestId: string;
    /**
     * VPC对等连接的实例ID。
     * @example `pcc-lnk0m24khwvtkm****`
     */
    InstanceId: string;
    /**
     * VPC对等连接的创建时间。使用UTC时间，格式为`YYYY-MM-DDThh:mm:ssZ`。
     * @example `2022-04-24T09:02:36Z`
     */
    GmtCreate: string;
    /**
     * VPC对等连接的修改时间。使用UTC时间，格式为`YYYY-MM-DDThh:mm:ssZ`。
     * @example `2022-04-24T19:20:45Z`
     */
    GmtModified: string;
    /**
     * VPC对等连接的名称。
     * @example `vpcpeer`
     */
    Name: string;
    /**
     * VPC对等连接的描述信息。
     * @example `test`
     */
    Description: string;
    /**
     * VPC对等连接发起端的阿里云账号ID。
     * @example `25346073170691****`
     */
    OwnerId: number;
    /**
     * VPC对等连接接收端的阿里云账号ID。
     * @example `28311773240248****`
     */
    AcceptingOwnerUid: number;
    /**
     * VPC对等连接发起端的地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * VPC对等连接接收端的地域ID。
     * @example `cn-hangzhou`
     */
    AcceptingRegionId: string;
    /**
     * VPC对等连接的带宽，单位：Mbps，取值范围为大于0的整数。
     * > 例外取值-1，表示无带宽限制。
     * 默认值如下：
     * - 跨地域VPC对等连接的带宽默认值为1024 Mbps。
     * - 同地域VPC对等连接的带宽默认值为-1 Mbps，即不限制带宽。
     * @example `1024`
     */
    Bandwidth: number;
    /**
     * VPC对等连接的状态。取值：
     * - **Creating**：创建中。
     * - **Accepting**：接收中。
     * - **Updating**：更新中。
     * - **Rejected**：已拒绝。
     * - **Expired**：已过期。
     * - **Activated**：已激活。
     * - **Deleting**：删除中。
     * - **Deleted**：已删除。
     * 关于VPC对等连接状态的更多信息，请参见[VPC对等连接概述](~~418507~~)。
     * @example `Activated`
     */
    Status: string;
    /**
     * VPC对等连接的商业状态。取值：
     * - **Normal**：正常。
     * - **FinancialLocked**：欠费锁定。
     * @example `Normal`
     */
    BizStatus: string;
    /**
     * VPC对等连接的过期时间。
     * 只有当VPC对等连接的**Status**（状态）为**Accepting**（接收中）或**Expired**（已过期）时，才会返回具体的过期时间；VPC对等连接处于其余状态时，返回值为**null**。
     * @example `2022-05-01T09:02:36Z`
     */
    GmtExpired: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    ResourceGroupId: string;
    /**
     * 发起端VPC实例详细信息。
     */
    Vpc: {
        /**
         * 发起端VPC实例ID。
         * @example `vpc-bp1gsk7h12ew7oegk****`
         */
        VpcId: string;
        /**
         * 发起端网段信息。
         */
        Ipv4Cidrs: string[];
        /**
         * 发起端IPv6网段信息。
         */
        Ipv6Cidrs: string[];
    };
    /**
     * 接收端VPC实例详细信息。
     */
    AcceptingVpc: {
        /**
         * 接收端VPC实例ID。
         * @example `vpc-bp1vzjkp2q1xgnind****`
         */
        VpcId: string;
        /**
         * 接收端网段信息。
         */
        Ipv4Cidrs: string[];
        /**
         * 接收端IPv6网段信息。
         */
        Ipv6Cidrs: string[];
    };
    /**
     * 标签列表。
     */
    Tags: {
        /**
         * 标签键。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 标签值。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
