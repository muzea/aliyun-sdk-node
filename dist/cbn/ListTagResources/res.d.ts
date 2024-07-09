export interface ListTagResourcesResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `165B5C86-2033-5954-A89D-4CD83BA06C85`
     */
    RequestId: string;
    TagResources: {
        /**
         * 资源及标签信息列表。
         */
        TagResource: {
            /**
             * 资源类型。取值：
             * **Cen**，表示云企业网实例。
             * **BandwidthPackage**，表示带宽包实例。
             * **TransitRouter**，表示转发路由器实例。
             * **TransitRouterVpcAttachment**，表示Vpc连接实例。
             * **TransitRouterVbrAttachment**，表示Vbr连接实例。
             * **TransitRouterPeerAttachment**，表示跨地域连接实例。
             * **TransitRouterVpnAttachment**，表示Vpn连接实例。
             * **TransitRouterRouteTable**，表示路由表实例。
             * **Flowlog**，表示Flowlog实例。
             * **TransitRouterMulticastDomain**，表示组播域实例。
             * @example `CEN`
             */
            ResourceType: string;
            /**
             * 标签值。
             * @example `Bp`
             */
            TagValue: string;
            /**
             * 云企业网实例ID。
             * @example `cen-8z69wtwqel33lq****`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `test`
             */
            TagKey: string;
        }[];
    };
}
