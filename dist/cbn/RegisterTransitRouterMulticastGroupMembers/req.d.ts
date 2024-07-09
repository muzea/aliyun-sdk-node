export interface RegisterTransitRouterMulticastGroupMembersRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * >若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 组播成员所属的组播域ID。
     * @example `tr-mcast-domain-91wpg6wbhchjeq****`
     */
    "TransitRouterMulticastDomainId": string;
    /**
     * 组播成员所属的组播组的IP地址。取值范围：**224.0.0.1**~**239.255.255.254**。
     * 如果当前组播域下不存在您指定的组播组，系统将自动在当前组播域下为您创建新的组播组。
     * @example `239.XX.XX.2`
     */
    "GroupIpAddress": string;
    /**
     * 弹性网卡ID列表。
     */
    "NetworkInterfaceIds"?: string[];
    /**
     * 跨地域的组播域ID列表。
     */
    "PeerTransitRouterMulticastDomains"?: string[];
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建组播成员。检查项包括是否填写了必需参数、请求格式、业务限制等。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接创建组播成员。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 弹性网卡所属的VPC实例ID。
     * - 如果弹性网卡所属阿里云账号和您当前登录的阿里云账号为相同账号，本参数可不填。
     * - 如果弹性网卡所属阿里云账号和您当前登录的阿里云账号为不同账号，本参数必填。
     * @example `vpc-wz9fusm6zq8uy7cfa****`
     */
    "VpcId"?: string;
}
