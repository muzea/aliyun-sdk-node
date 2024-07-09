export interface DescribeCenRouteMapsResponse {
    /**
     * 分页查询时每页显示的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `24CE1987-D1D1-5324-9BAD-2750B60E6ABB`
     */
    RequestId: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    RouteMaps: {
        /**
         * 路由策略信息列表。
         */
        RouteMap: {
            /**
             * 路由策略ID。
             * @example `cenrmap-y40mxdvf7joc12****`
             */
            RouteMapId: string;
            /**
             * 路由策略的状态。
             * - **Creating**：创建中。
             * - **Active**：可用。
             * - **Deleting**：删除中。
             * @example `Active`
             */
            Status: string;
            /**
             * 路由策略的应用方向。
             * @example `RegionOut`
             */
            TransmitDirection: string;
            /**
             * 是否使用了源实例ID列表的排除匹配模式。
             * - **false**：否，即路由传递的源实例ID在**SourceInstanceIds.N**中时，匹配通过。
             * - **true**：是，即路由传递的源实例ID不在**SourceInstanceIds.N**中时，匹配通过。
             * @example `false`
             */
            SourceInstanceIdsReverseMatch: boolean;
            /**
             * 路由策略应用的地域ID。
             * @example `cn-hangzhou`
             */
            CenRegionId: string;
            /**
             * 云企业网实例ID。
             * @example `cen-wx12mmlt17ld82****`
             */
            CenId: string;
            /**
             * 路由策略的优先级。优先级数字越小，代表优先级越高。
             * @example `5000`
             */
            Priority: number;
            /**
             * 路由策略关联的转发路由器路由表ID。
             * @example `vtb-gw8nx3515m1mbd1z1****`
             */
            TransitRouterRouteTableId: string;
            /**
             * Community的执行模式。
             * - **Additive**：添加，表示为路由添加Community。
             * - **Replace**：替换，表示替换路由原有的Community。
             * 本参数表示路由通过匹配条件后，要执行的操作。
             * @example `Additive`
             */
            CommunityOperateMode: string;
            /**
             * 所有匹配条件都通过后的策略行为。
             * - **Permit**：允许被匹配的路由通过。
             * - **Deny**：拒绝被匹配的路由通过。
             * @example `Deny`
             */
            MapResult: string;
            /**
             * Community的匹配模式。
             * - **Include**：模糊匹配，匹配条件中的Community与被匹配路由的Community有重叠即判定为匹配成功。
             * - **Complete**：精确匹配，匹配条件中的Community必须与被匹配路由的Community一致，才判定为匹配成功。
             * @example `Include`
             */
            CommunityMatchMode: string;
            /**
             * 路由策略的描述信息。
             * @example `desctest`
             */
            Description: string;
            /**
             * AS Path列表的匹配模式。
             * - **Include**：模糊匹配，匹配条件中的AS Path与被匹配路由的AS Path有重叠即判定为匹配成功。
             * - **Complete**：精确匹配，匹配条件中的AS Path必须与被匹配路由的AS Path一致，才判定为匹配成功。
             * @example `Include`
             */
            AsPathMatchMode: string;
            /**
             * 要修改的路由的优先级。
             * 优先级数字越小表示优先级越高。
             * 本参数表示路由通过匹配条件后，要执行的操作。
             * @example `20`
             */
            Preference: number;
            /**
             * 是否使用了目的实例ID列表的排除匹配模式。
             * - **false**：否，即路由传递的目的实例ID在**DestinationInstanceIds.N**中时，匹配通过。
             * - **true**：是，即路由传递的目的实例ID不在**DestinationInstanceIds.N**中时，匹配通过。
             * @example `false`
             */
            DestinationInstanceIdsReverseMatch: boolean;
            /**
             * 前缀列表的匹配模式。取值：
             * - **Include**：模糊匹配。匹配条件中的路由前缀包含被匹配路由的路由前缀即判定为匹配成功。
             *  例如：定义10.10.0.0/16的策略可以模糊匹配到10.10.1.0/24的路由。
             * - **Complete**：精确匹配。匹配条件中的路由前缀必须与被匹配路由的路由前缀一致，才判定为匹配成功。
             *  例如：定义10.10.0.0/16的策略仅可以精确匹配到10.10.0.0/16的路由。
             * @example `Include`
             */
            CidrMatchMode: string;
            /**
             * 关联的下一条路由策略的优先级。
             * @example `33`
             */
            NextPriority: number;
            /**
             * 路由需匹配的IP地址类型。
             * - **IPv4**：表示只匹配IPv4路由。
             * - **IPv6**：表示只匹配IPv6路由。
             * - 如果系统未返回该值，则表示同时匹配IPv4和IPv6的路由。
             * @example `IPv4`
             */
            MatchAddressType: string;
            SourceRegionIds: {
                /**
                 * 路由需匹配的源地域ID列表。
                 */
                SourceRegionId: string[];
            };
            SourceChildInstanceTypes: {
                /**
                 * 路由需匹配的源实例类型列表。
                 * - **VPC**：专有网络实例。
                 * - **VBR**：边界路由器实例。
                 * - **CCN**：云连接网实例。
                 * - **VPN**：IPsec连接。
                 */
                SourceChildInstanceType: string[];
            };
            DestinationRouteTableIds: {
                /**
                 * 路由需匹配的目的路由表ID列表。最多支持输入32个路由表ID。
                 * >仅路由策略的应用方向为出地域网关方向，且目的路由表ID为本地域下网络实例的路由表ID时，目的路由表ID列表才会生效。
                 */
                DestinationRouteTableId: string[];
            };
            SourceInstanceIds: {
                /**
                 * 路由需匹配的源实例ID列表。
                 */
                SourceInstanceId: string[];
            };
            DestinationCidrBlocks: {
                /**
                 * 路由需匹配的前缀列表。
                 */
                DestinationCidrBlock: string[];
            };
            SourceRouteTableIds: {
                /**
                 * 路由需匹配的源路由表ID列表。
                 */
                SourceRouteTableId: string[];
            };
            MatchCommunitySet: {
                /**
                 * 路由需匹配的Community集合。
                 */
                MatchCommunity: string[];
            };
            PrependAsPath: {
                /**
                 * 地域网关接收或发布路由时附加的AS Path。
                 * 本参数表示路由通过匹配条件后，要执行的操作。
                 */
                AsPath: string[];
            };
            RouteTypes: {
                /**
                 * 路由需匹配的路由类型列表。
                 * - **System**：系统路由，由系统自动生成的路由。
                 * - **Custom**：自定义路由，由用户手动添加的路由。
                 * - **BGP**：BGP路由，通过BGP路由协议传播的路由。
                 */
                RouteType: string[];
            };
            DestinationChildInstanceTypes: {
                /**
                 * 路由需匹配的目的实例类型列表。
                 * - **VPC**：专有网络实例。
                 * - **VBR**：边界路由器实例。
                 * - **CCN**：云连接网实例。
                 * - **VPN**：IPsec连接。
                 * >仅路由策略的应用方向为出地域网关方向，且目的实例类型为本地域下的实例类型时，目的实例类型列表才会生效。
                 */
                DestinationChildInstanceType: string[];
            };
            DestinationInstanceIds: {
                /**
                 * 路由需匹配的目的实例ID列表。
                 * >仅路由策略的应用方向为出地域网关方向，且目的实例ID为本地域下的实例ID时，目的实例ID列表才会生效。
                 */
                DestinationInstanceId: string[];
            };
            MatchAsns: {
                /**
                 * 路由需匹配的AS Path列表。
                 */
                MatchAsn: string[];
            };
            OperateCommunitySet: {
                /**
                 * 要执行的Community集合。
                 */
                OperateCommunity: string[];
            };
        }[];
    };
}
