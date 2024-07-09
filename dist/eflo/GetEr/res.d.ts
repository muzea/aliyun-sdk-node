export interface GetErResponse {
    /**
     * 业务码，成功返回0
     * @example `0`
     */
    Code: number;
    /**
     * 调用失败时返回的信息
     * @example `success`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `308DE9D2-03A6-5B44-A369-67B75D1EE091`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 创建时间
         * @example `1644283112720`
         */
        CreateTime: string;
        /**
         * 修改时间
         * @example `1627545952000`
         */
        GmtModified: string;
        /**
         * 提示信息
         * @example `成功`
         */
        Message: string;
        /**
         * 灵骏HUB实例ID
         * @example `er-aueyxxsy`
         */
        ErId: string;
        /**
         * 地域ID
         * @example `cn-wulanchabu`
         */
        RegionId: string;
        /**
         * 租户ID
         * @example `1620939556166277`
         */
        TenantId: string;
        /**
         * 状态
         * @example `Available`
         */
        Status: string;
        /**
         * 灵骏HUB实例名称
         * @example `er-heyuan-main`
         */
        ErName: string;
        /**
         * 主可用区
         * @example `cn-wulanchabu-b`
         */
        MasterZoneId: string;
        /**
         * 描述
         * @example `描述`
         */
        Description: string;
        /**
         * 网络实例信息列表
         */
        ErAttachments: {
            /**
             * 创建时间
             * @example `1644283112720`
             */
            CreateTime: string;
            /**
             * 修改时间
             * @example `1649303733000`
             */
            GmtModified: string;
            /**
             * 提示信息
             * @example `可用`
             */
            Message: string;
            /**
             * 状态
             * @example `Available`
             */
            Status: string;
            /**
             * 地域信息
             * @example `cn-wulanchabu`
             */
            RegionId: string;
            /**
             * 租户ID
             * @example `1620939556166277`
             */
            TenantId: string;
            /**
             * 网络实例名称
             * @example `er网络实例-vpd-kkopgtne`
             */
            ErAttachmentName: string;
            /**
             * 灵骏HUB网络实例连接ID
             * @example `er-attachment-f32hxfsu`
             */
            ErAttachmentId: string;
            /**
             * 灵骏HUB实例ID
             * @example `er-kkopgtne`
             */
            ErId: string;
            /**
             * 实例类型：VPD、VCC
             * @example `VPD`
             */
            InstanceType: string;
            /**
             * 实例ID
             * @example `vpd-kkopgtne`
             */
            InstanceId: string;
            /**
             * 实例名称
             * @example `灵骏网段实例`
             */
            InstanceName: string;
            /**
             * 自动接收所有路由
             * @example `true`
             */
            AutoReceiveAllRoute: boolean;
            /**
             * 是否跨账号
             * @example `false`
             */
            Across: boolean;
            /**
             * 资源所属租户ID
             * @example `xxxxxxxx`
             */
            ResourceTenantId: string;
            /**
             * 资源组实例ID
             */
            ResourceGroupId: string;
        }[];
        /**
         * 路由策略信息列表
         */
        ErRouteMaps: {
            /**
             * 地域ID
             * @example `cn-wulanchabu`
             */
            RegionId: string;
            /**
             * 租户ID
             * @example `XXQGPROD-zh_CN`
             */
            TenantId: string;
            /**
             * 创建时间
             * @example `1645766599809`
             */
            CreateTime: string;
            /**
             * 修改时间
             * @example `1623899444000`
             */
            GmtModified: string;
            /**
             * 提示信息
             * @example `成功`
             */
            Message: string;
            /**
             * 状态
             * @example `Available`
             */
            Status: string;
            /**
             * 路由策略ID
             * @example `er-rmap-xkslnmsr`
             */
            ErRouteMapId: string;
            /**
             * 灵骏HUB ID
             * @example `er-kkopgtne`
             */
            ErId: string;
            /**
             * 策略序号(1001-2000)
             * @example `1001`
             */
            RouteMapNum: number;
            /**
             * 策略描述
             * @example `test`
             */
            Description: string;
            /**
             * 目的网段
             * @example `10.0.0.0/8`
             */
            DestinationCidrBlock: string;
            /**
             * 源实例名称
             * @example `发送实例`
             */
            TransmissionInstanceName: string;
            /**
             * 源实例ID
             * @example `vpd-xmglsymg`
             */
            TransmissionInstanceId: string;
            /**
             * 源实例类型
             * @example `VPD`
             */
            TransmissionInstanceType: string;
            /**
             * 目的实例名称
             * @example `接收实例`
             */
            ReceptionInstanceName: string;
            /**
             * 目的实例ID
             * @example `vpd-sdkd2gkx`
             */
            ReceptionInstanceId: string;
            /**
             * 目的实例类型
             * @example `VPD`
             */
            ReceptionInstanceType: string;
            /**
             * 策略行为
             * @example ` permit`
             */
            Action: string;
            /**
             * 源实例所属租户
             * @example `1620939556166277`
             */
            TransmissionInstanceOwner: string;
            /**
             * 目的实例所属租户
             * @example `1620939556166277`
             */
            ReceptionInstanceOwner: string;
            /**
             * 资源组实例ID
             */
            ResourceGroupId: string;
            /**
             * 路由策略名称
             * @example `路由条目信息`
             */
            ErRouteMapName: string;
        }[];
        /**
         * 路由条目信息列表
         */
        ErRouteEntrys: {
            /**
             * 灵骏HUB实例ID
             * @example `er-kkopgtne`
             */
            ErId: string;
            /**
             * 租户ID
             * @example `1620939556166277`
             */
            TenantId: string;
            /**
             * 资源所属租户ID
             * @example `1620939556166277`
             */
            ResourceTenantId: string;
            /**
             * 地域
             * @example `cn-wulanchabu`
             */
            RegionId: string;
            /**
             * 路由条目ID
             * @example `er-rte-xnmsd2kl`
             */
            ErRouteEntryId: string;
            /**
             * 目的网段
             * @example `10.0.0.0/9`
             */
            DestinationCidrBlock: string;
            /**
             * 下一跳实例类型
             * @example `VCC`
             */
            NextHopType: string;
            /**
             * 下一跳实例
             * @example `vcc-xxkmggkw`
             */
            NextHopId: string;
            /**
             * 路由类型
             * @example `System`
             */
            RouteType: string;
            /**
             * 状态
             * @example `Available`
             */
            Status: string;
            /**
             * 更新时间
             * @example `1623317089000`
             */
            GmtModified: string;
            /**
             * 资源组实例ID
             */
            ResourceGroupId: string;
        }[];
        /**
         * 资源组实例ID
         */
        ResourceGroupId: string;
    };
}
