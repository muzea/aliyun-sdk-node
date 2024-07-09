export interface DescribeRouterInterfacesResponse {
    /**
     * 请求ID。
     * @example `C7F6FCBD-F9CC-4501-8EF3-CDC9577CAE45`
     */
    RequestId: string;
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时每页的行数，最大值为**50**。默认值为**10**。
     * @example `10`
     */
    PageSize: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    RouterInterfaceSet: {
        /**
         * 路由器接口的详细信息。
         */
        RouterInterfaceType: {
            /**
             * 续费生效时间。
             * 时间按照ISO8601标准表示，并使用UTC时间。格式为：`YYYY-MM-DDThh:mmZ`。
             * @example `2021-03-11T16:00:00Z`
             */
            ReservationActiveTime: string;
            /**
             * 健康检查目标IP。
             * @example `116.62.XX.XX`
             */
            HealthCheckTargetIp: string;
            /**
             * 路由器接口的状态。
             * @example `active`
             */
            Status: string;
            /**
             * 路由表的创建时间。
             * 时间按照ISO8601标准表示，并使用UTC时间。格式为：`YYYY-MM-DDThh:mmZ`。
             * @example `2021-06-08T12:20:55`
             */
            CreationTime: string;
            /**
             * 续费订单类型。
             * @example `RENEWCHANGE`
             */
            ReservationOrderType: string;
            /**
             * 对端路由器接口ID。
             * @example `ri-bp1itx13bwe6f2wfh****`
             */
            OppositeInterfaceId: string;
            /**
             * 路由器接口的规格。
             * @example `Large`
             */
            Spec: string;
            /**
             * 付费方式。
             * @example `PayByTraffic`
             */
            ChargeType: string;
            /**
             * 路由器接口ID。
             * @example `ri-2zenfgfpyu3v93koa****`
             */
            RouterInterfaceId: string;
            /**
             * 健康检查阈值。
             * @example `2`
             */
            HcThreshold: number;
            /**
             * 连接对端的路由器接口所属的路由器类型。
             * @example `VRouter`
             */
            OppositeRouterType: string;
            /**
             * 对等连接中本端VPC的ID。
             * @example `vpc-2ze3tq4uxhysg717x****`
             */
            VpcInstanceId: string;
            /**
             * 对端路由器接口所属的账号ID。
             * @example `271598332402530847`
             */
            OppositeInterfaceOwnerId: string;
            /**
             * 对端VPC的ID。
             * @example `vpc-bp1qpo0kug3a20qqe****`
             */
            OppositeVpcInstanceId: string;
            /**
             * 续费付费类型。
             * @example `PayByBandwidth`
             */
            ReservationInternetChargeType: string;
            /**
             * 是否是跨境连接。
             * @example `false`
             */
            CrossBorder: boolean;
            /**
             * 路由器接口的带宽。单位：Mbps。
             * @example `10`
             */
            Bandwidth: number;
            /**
             * 路由表接口描述。
             * @example `路由表接口描述`
             */
            Description: string;
            /**
             * 健康检查速率。
             * @example `1`
             */
            HcRate: number;
            /**
             * 续费带宽。单位：Mbps。
             * @example `10`
             */
            ReservationBandwidth: string;
            /**
             * 自定义名称。
             * @example `test`
             */
            Name: string;
            /**
             * 连接对端的路由器接口所属的路由器ID。
             * @example `vrt-bp1d3bxtdv68tfd7g****`
             */
            OppositeRouterId: string;
            /**
             * 连接对端路由器接口的规格。
             * @example `Large`
             */
            OppositeInterfaceSpec: string;
            /**
             * 路由条目所在路由器的ID。
             * @example `vrt-bp1d3bxtdv68tfd7g****`
             */
            RouterId: string;
            /**
             * 连接对端的路由器接口的业务状态。
             * @example `Normal`
             */
            OppositeInterfaceBusinessStatus: string;
            /**
             * 连接建立的时间。
             * 时间按照ISO8601标准表示，并使用UTC时间。格式为：`YYYY-MM-DDThh:mmZ`。
             * @example `2021-06-08T12:20:55`
             */
            ConnectedTime: string;
            /**
             * 健康检查源IP。
             * @example `116.62.XX.XX`
             */
            HealthCheckSourceIp: string;
            /**
             * 连接对端的路由器接口的状态。
             * @example `Normal`
             */
            OppositeInterfaceStatus: string;
            /**
             * 获取数据的结束时间点。
             * 时间按照ISO8601标准表示，并使用UTC时间。格式为：`YYYY-MM-DDThh:mmZ`。
             * @example `2021-06-08T12:20:55`
             */
            EndTime: string;
            /**
             * 连接对端所在的地域ID。
             * @example `cn-shanghai`
             */
            OppositeRegionId: string;
            /**
             * 对端接入点ID。
             * @example `ap-cn-shanghaiSZ-****`
             */
            OppositeAccessPointId: string;
            /**
             * 路由器接口的业务状态。取值：
             * - **Normal**：正常。
             * - **FinancialLocked**：欠费锁定。
             * - **SecurityLocked**：安全风控锁定。
             * @example `Normal`
             */
            BusinessStatus: string;
            /**
             * 对端带宽。单位：Mbps。
             * @example `12`
             */
            OppositeBandwidth: number;
            /**
             * 路由表所在路由器的类型。取值：
             * - **VRouter**：VPC路由器。
             * - **VBR**：边界路由器。
             *
             * @example `VRouter`
             */
            RouterType: string;
            /**
             * 对等连接中的角色。
             * @example `InitiatingSide`
             */
            Role: string;
            /**
             * 是否有续费数据。
             * @example `false`
             */
            HasReservationData: string;
            /**
             * 接入点ID。
             * @example `ap-cn-shanghaiSZ-****`
             */
            AccessPointId: string;
            /**
             * 是否开启IPv6安全防护。取值：
             *
             * - **on**：开启。
             * - **off**：关闭。
             * - **unsupport**：不支持。
             * @example `on`
             */
            Ipv6Status: string;
            /**
             * 是否为使用快速连接模式创建的VBR上联路由器接口，快速连接模式可实现VBR和VPC两端路由器接口创建完毕后自动完成连接。取值：
             * - **true**：是。
             * - **false**（默认值）：否。
             * @example `false`
             */
            FastLinkMode: boolean;
            /**
             * 资源组ID。
             * 关于资源组的更多信息，请参见[什么是资源组](~~94475~~)。
             * @example `rg-acfmxazb4ph6aiy****`
             */
            ResourceGroupId: string;
            Tags: {
                /**
                 * 资源的标签。
                 */
                Tags: {
                    /**
                     * 资源的标签键。
                     * @example `FinanceDept`
                     */
                    Key: string;
                    /**
                     * 资源的标签值。
                     * @example `FinanceJoshua`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
