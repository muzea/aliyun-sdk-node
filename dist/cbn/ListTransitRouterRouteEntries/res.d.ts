export interface ListTransitRouterRouteEntriesResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `fce19****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `C3835E5E-1504-4344-B1BB-98A4110F1079`
     */
    RequestId: string;
    /**
     * 总条目数。
     * @example `6`
     */
    TotalCount: number;
    /**
     * 分批次查询时，每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 路由条目信息列表。
     */
    TransitRouterRouteEntries: {
        /**
         * 路由条目ID。
         * >只有静态配置的路由才会返回该参数值。
         * @example `rte-oklkgwmj97z6dn****`
         */
        TransitRouterRouteEntryId: string;
        /**
         * 路由条目的目标网段。
         * @example `192.168.0.0/24`
         */
        TransitRouterRouteEntryDestinationCidrBlock: string;
        /**
         * 路由条目的类型。
         * - **Static**：表示该路由条目为静态配置的路由。
         * - **Propagated**：表示该路由条目为自动学习到的路由。
         * @example `Static`
         */
        TransitRouterRouteEntryType: string;
        /**
         * 路由条目的创建时间。
         * 时间按照ISO8601标准表示，并使用UTC时间。格式为：YYYY-MM-DDThh:mmZ。
         * >只有静态配置的路由才会返回该参数值。
         * @example `2021-06-15T07:01Z`
         */
        CreateTime: string;
        /**
         * 路由条目的名称。
         * >只有静态配置的路由才会返回该参数值。
         * @example `testname`
         */
        TransitRouterRouteEntryName: string;
        /**
         * 路由条目的生效状态。
         * - **Active**：生效。
         * - **Rejected**：路由冲突拒绝。
         * - **Prohibited**：路由策略禁止。
         * - **Standby**：备份。
         * - **Candidate**：候选。
         * - **Creating**：添加中。
         * - **Deleting**：删除中。
         * @example `Active`
         */
        TransitRouterRouteEntryStatus: string;
        /**
         * 路由条目的下一跳类型。
         * - **BlackHole**：表示该路由条目为黑洞路由，所有去往目标网段的路由均会被丢弃。
         * - **Attachment**：表示该路由条目的下一跳为网络实例连接，所有去往目标网段的路由均会被转发至指定的网络实例连接。
         * @example `BlackHole`
         */
        TransitRouterRouteEntryNextHopType: string;
        /**
         * 路由条目的下一跳ID。黑洞路由不会返回该参数值。
         * @example `tr-attach-vx6iwhjr1x1j78****`
         */
        TransitRouterRouteEntryNextHopId: string;
        /**
         * 路由条目的描述信息。
         * >只有静态配置的路由才会返回该参数值。
         * @example `CidrRoute`
         */
        TransitRouterRouteEntryDescription: string;
        /**
         * 当前路由条目是否可操作。
         * - **true**：可操作，表示您可以对当前路由条目执行删除操作。
         * - **false**：不可操作，表示当前路由条目为系统自动生成，不支持编辑。
         * @example `false`
         */
        OperationalMode: boolean;
        /**
         * 路由条目的标签。
         * 仅取值：**PermitVbr**，表示当前路由条目仅会被传播至转发路由器实例下VBR实例的路由表中。
         * > 仅系统自动生成的转发路由器地址段的路由会返回当前参数。
         * @example `PermitVbr`
         */
        Tag: string;
        /**
         * 路由条目的下一跳实例ID。
         * @example `vpc-m5ent6du8deaq5*****`
         */
        TransitRouterRouteEntryNextHopResourceId: string;
        /**
         * 路由条目的下一跳实例类型。
         * - **VPC**：专有网络VPC（Virtual Private Cloud）实例。
         * - **VBR**：边界路由器VBR（Virtual Border Router）实例。
         * - **TR**：转发路由器实例。
         * - **VPN**：IPsec连接实例。
         * @example `VPC`
         */
        TransitRouterRouteEntryNextHopResourceType: string;
        /**
         * 路由条目的起源实例类型。
         * - **VPC**：专有网络VPC（Virtual Private Cloud）实例。
         * - **VBR**：边界路由器VBR（Virtual Border Router）实例。
         * - **TR**：转发路由器实例。
         * - **VPN**：IPsec连接实例。
         * @example `VPC`
         */
        TransitRouterRouteEntryOriginResourceType: string;
        /**
         * 路由条目的起源实例ID。
         * @example `vpc-m5ent6du8deaq5*****`
         */
        TransitRouterRouteEntryOriginResourceId: string;
        /**
         * 前缀列表ID。
         * @example `pl-k1ainl66z3527773d****`
         */
        PrefixListId: string;
        /**
         * 路由路径属性。
         */
        PathAttributes: {
            /**
             * 路由条目的Community属性列表。
             */
            Communities: string[];
            /**
             * 路由条目的AS Path属性列表。
             */
            AsPaths: string[];
            /**
             * 路由产生的原始实例ID。
             * @example `vbr-m5ent6du8deaq5*****
            `
             */
            OriginInstanceId: string;
            /**
             * 路由产生的原始实例类型。
             * - **VPC**：专有网络VPC（Virtual Private Cloud）实例。
             * - **VBR**：边界路由器VBR（Virtual Border Router）实例。
             * - **TR**：转发路由器实例。
             * - **VPN**：IPsec连接实例。
             * - **CCN**：云连接网（Cloud Connect Network）实例。
             * @example `VBR`
             */
            OriginInstanceType: string;
            /**
             * 路由产生时候的路由类型。
             * - **System**：系统路由。
             * - **Custom**：自定义路由。
             * - **Static**：静态路由。
             * - **BGP**：BGP路由。
             * - **BlackHole**：黑洞路由。
             * @example `BGP`
             */
            OriginRouteType: string;
            /**
             * 路由条目的优先级。
             * 优先级数字越小，表示优先级越高。
             * @example `50`
             */
            Preference: number;
        };
    }[];
}
