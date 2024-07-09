export interface ListTransitRouterMulticastDomainAssociationsResponse {
    /**
     * 请求ID。
     * @example `1CD0969B-A605-5D2D-BFF0-699FD182FB7F`
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
     * 关联信息列表。
     */
    TransitRouterMulticastAssociations: {
        /**
         * 组播域ID。
         * @example `tr-mcast-domain-91wpg6wbhchjeq****`
         */
        TransitRouterMulticastDomainId: string;
        /**
         * 网络实例连接ID。
         * @example `tr-attach-p90y3ymbbwuvy5****`
         */
        TransitRouterAttachmentId: string;
        /**
         * 交换机ID。
         * @example `vsw-p0wxk12u6okfkr8xy****`
         */
        VSwitchId: string;
        /**
         * 关联状态。
         * - **Associated**：已关联。
         * - **Associating**：关联中。
         * - **Dissociating**：解除关联中。
         * @example `Dissociating`
         */
        Status: string;
        /**
         * 组播域关联的资源类型。
         * 仅取值：**VPC**。
         * @example `VPC`
         */
        ResourceType: string;
        /**
         * 组播域关联的资源所属的阿里云账号（主账号）ID。
         * @example `1210123456123456`
         */
        ResourceOwnerId: number;
        /**
         * 组播域关联的资源的ID。
         * @example `vpc-p0w9b7g9l90yofr0n****`
         */
        ResourceId: string;
    }[];
}
