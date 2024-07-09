export interface DescribeCenRegionDomainRouteEntriesResponse {
    /**
     * 分页查询时每页显示的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `004E99FB-E996-5777-888E-BA1D8F215407`
     */
    RequestId: string;
    /**
     * 查询页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总条目数。
     * @example `4`
     */
    TotalCount: number;
    CenRouteEntries: {
        /**
         * 路由条目信息列表。
         */
        CenRouteEntry: {
            /**
             * 路由条目去往其他地域的状态。
             * - **Active**：可用。
             * - **Prohibited**：禁用。
             * @example `Active`
             */
            ToOtherRegionStatus: string;
            /**
             * 路由条目的类型。
             * - **CEN**：表示通过云企业网传递的路由。
             * - **Custom**：表示自定义路由。
             * - **System**：表示系统路由。
             * @example `CEN`
             */
            Type: string;
            /**
             * 路由条目的状态。
             * - **Active**：可用。
             * - **Candidate**：备份。
             * - **Rejected**：拒绝。
             * - **Prohibited**：禁用。
             * @example `Active`
             */
            Status: string;
            /**
             * 路由条目下一跳类型。
             * - **VPC**：专有网络。
             * - **VBR**：边界路由器。
             * - **CCN**：云连接网。
             * - **local_service**：表示当前路由条目为云服务系统路由，没有下一跳。
             * @example `VPC`
             */
            NextHopType: string;
            /**
             * 路由条目下一跳关联的网络实例ID。
             * @example `vpc-bp1j8728mm6pweeod****`
             */
            NextHopInstanceId: string;
            /**
             * 路由条目下一跳关联的网络实例所属的地域ID。
             * @example `cn-hangzhou`
             */
            NextHopRegionId: string;
            /**
             * 路由条目的目标网段。
             * @example `192.168.1.0/24`
             */
            DestinationCidrBlock: string;
            /**
             * 路由条目的优先级。
             * 优先级数字越小，表示优先级越高。
             * @example `50`
             */
            Preference: number;
            CenRouteMapRecords: {
                /**
                 * 路由条目匹配到的入地域网关方向的路由策略。
                 */
                CenRouteMapRecord: {
                    /**
                     * 路由策略ID。
                     * @example `cenrmap-cz5axczdxb7yfu****`
                     */
                    RouteMapId: string;
                    /**
                     * 路由策略应用的地域ID。
                     * @example `cn-hangzhou`
                     */
                    RegionId: string;
                }[];
            };
            CenOutRouteMapRecords: {
                /**
                 * 路由条目匹配到的出地域网关方向的路由策略。
                 */
                CenOutRouteMapRecord: {
                    /**
                     * 路由策略ID。
                     * @example `cenrmap-dbarzidzp7ek4k****`
                     */
                    RouteMapId: string;
                    /**
                     * 路由策略应用的地域ID。
                     * @example `ccn-cn-shanghai`
                     */
                    RegionId: string;
                }[];
            };
            Communities: {
                /**
                 * 路由条目的Community属性值列表。
                 */
                Community: string[];
            };
            AsPaths: {
                /**
                 * 路由条目的AS Path属性值列表。
                 */
                AsPath: string[];
            };
        }[];
    };
}
