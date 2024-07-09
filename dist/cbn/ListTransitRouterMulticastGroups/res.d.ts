export interface ListTransitRouterMulticastGroupsResponse {
    /**
     * 请求ID。
     * @example `FB3C4A16-0933-5850-9D43-0C3EA37BCBFB`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 组播组信息列表。
     */
    TransitRouterMulticastGroups: {
        /**
         * 组播资源所属的组播组的IP地址。
         * @example `239.XX.XX.2`
         */
        GroupIpAddress: string;
        /**
         * 网络实例连接ID。
         * @example `tr-attach-g3kz2k3u76amsk****`
         */
        TransitRouterAttachmentId: string;
        /**
         * 组播资源所属交换机的ID。
         * @example `vsw-p0w9s2ig1jnwgrbzl****`
         */
        VSwitchId: string;
        /**
         * 弹性网卡ID（即组播资源ID）。
         * @example `eni-p0weuda3lszwzjly****`
         */
        NetworkInterfaceId: string;
        /**
         * 跨地域的组播资源关联的组播域的ID。
         * @example `tr-mcast-domain-91wpg6wbhchjeq****`
         */
        PeerTransitRouterMulticastDomainId: string;
        /**
         * 组播资源的状态。
         * - **Registering**：创建中。
         * - **Registered**：可用。
         * - **Deregistering**：删除中。
         * @example `Registered`
         */
        Status: string;
        /**
         * 当前组播资源是否是组播源。
         * - **true**：是组播源。
         * - **false**：不是组播源。
         * @example `false`
         */
        GroupSource: boolean;
        /**
         * 当前组播资源是否是组播成员。
         * - **true**：是组播成员。
         * - **false**：不是组播成员。
         * @example `true`
         */
        GroupMember: boolean;
        /**
         * 组播源的类型。
         * 仅返回：**Static**，表示当前组播源是通过手动方式指定的。
         * @example `Static`
         */
        MemberType: string;
        /**
         * 组播成员的类型。
         * 仅返回：**Static**，表示当前组播成员是通过手动方式指定的。
         * @example `Static`
         */
        SourceType: string;
        /**
         * 组播资源的类型。
         * - **VPC**：表示当前组播资源为VPC下的资源。
         * - **TR**：表示当前组播资源为跨地域的资源。
         * @example `VPC`
         */
        ResourceType: string;
        /**
         * 组播资源所属的阿里云账号（主账号）ID。
         * @example `253460731706911258`
         */
        ResourceOwnerId: number;
        /**
         * 组播资源关联的资源ID。
         * @example `vpc-p0w9alkte4w2htrqe****`
         */
        ResourceId: string;
        /**
         * 组播域ID。
         * @example `tr-mcast-domain-kx0vk0v7fz8kx4****`
         */
        TransitRouterMulticastDomainId: string;
    }[];
}
