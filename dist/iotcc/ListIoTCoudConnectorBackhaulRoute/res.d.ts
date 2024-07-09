export interface ListIoTCoudConnectorBackhaulRouteResponse {
    /**
     * 列表条目数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 路由列表。
     */
    Routes: {
        /**
         * 路由条目的目标网段。
         * @example `192.168.2.0/24`
         */
        DestinationCidrBlock: string;
        /**
         * 下一跳的实例ID。
         * @example `eni-bp1d66qjxb3qoin3****`
         */
        NextHopId: string;
        /**
         * 下一跳类型。取值： **NetworkInterface**，表示下一跳类型为弹性网卡。
         * @example `NetworkInterface`
         */
        NextHopType: string;
        /**
         * 路由条目在云连接器中的发布状态。取值：
         * - **Published**：已发布。
         * - **Publishing**：发布中。
         * - **Unpublished**：已解除发布。
         * - **Unpublishing**：解除发布中。
         * - **Init**：未发布。
         * - **Deleting**：删除中。
         * @example `Published`
         */
        Status: string;
        /**
         * 路由条目的描述信息。
         * @example `test`
         */
        Description: string;
    }[];
}
