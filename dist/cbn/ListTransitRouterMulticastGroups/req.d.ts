export interface ListTransitRouterMulticastGroupsRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 组播域ID。
     * TransitRouterMulticastDomainId或TransitRouterAttachmentId参数必须输入其中一个。
     * @example `tr-mcast-domain-5mjb5gjb6dgu98****`
     */
    "TransitRouterMulticastDomainId"?: string;
    /**
     * 组播组的IP地址。
     * 每个组播组通过一个组播IP地址进行标识。
     * @example `239.XX.XX.2`
     */
    "GroupIpAddress"?: string;
    /**
     * 网络实例连接ID。
     * TransitRouterMulticastDomainId或TransitRouterAttachmentId参数必须输入其中一个。
     * @example `tr-attach-g3kz2k3u76amsk****`
     */
    "TransitRouterAttachmentId"?: string;
    /**
     * 交换机ID列表。
     */
    "VSwitchIds"?: string[];
    /**
     * 跨地域组播域ID列表。
     */
    "PeerTransitRouterMulticastDomains"?: string[];
    /**
     * 组播资源的类型。
     * - **VPC**：表示查询专有网络VPC（Virtual Private Cloud）下的组播资源信息。
     * - **TR**：表示查询跨地域的组播资源的信息。
     * @example `VPC`
     */
    "ResourceType"?: string;
    /**
     * 组播资源关联的资源ID。
     * @example `vpc-p0w9alkte4w2htrqe****`
     */
    "ResourceId"?: string;
    /**
     * 分批次查询时每次显示的条目数。默认值：**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 是否查询组播源。
     * - **false**：否。
     * - **true**：是。
     * >和IsGroupMember配合使用。
     * > - 若两者均不配置，则默认查询组播源和成员。
     * > - 若只配置其一或两者均配置，则以配置参数为准。
     * @example `true`
     */
    "IsGroupSource"?: boolean;
    /**
     * 是否查询组播成员。
     * - **false**：否。
     * - **true**：是。
     * >和IsGroupMember配合使用。
     * > - 若两者均不配置，则默认查询组播源和成员。
     * > - 若只配置其一或两者均配置，则以配置参数为准。
     * @example `false`
     */
    "IsGroupMember"?: boolean;
    /**
     * 弹性网卡ID列表。
     */
    "NetworkInterfaceIds"?: string[];
}
