export interface DescribeSagPortRouteProtocolListResponse {
    /**
     * 请求ID。
     * @example `CE6642D4-21EB-4168-9BF9-F217953F9892`
     */
    RequestId: string;
    /**
     * 端口信息列表。
     */
    Ports: {
        /**
         * 端口状态：
         * - **UP**：端口开启。
         * - **DOWN**：端口关闭。
         * @example `UP`
         */
        Status: string;
        /**
         * 对端IP地址。
         * @example `192.XX.XX.1`
         */
        RemoteIp: string;
        /**
         * 端口名称。
         * @example `3`
         */
        PortName: string;
        /**
         * 邻居IP地址。
         * @example `192.XX.XX.1`
         */
        NeighborIp: string;
        /**
         * 端口路由协议：
         * - **STATIC**：静态路由协议。
         * - **OSPF**：OSPF动态路由协议。
         * - **BGP**：BGP动态路由协议。
         * @example `BGP`
         */
        RouteProtocol: string;
        /**
         * 对端BGP自治系统编号。
         * @example `12345`
         */
        RemoteAs: string;
        /**
         * VLAN编号。
         * @example `2`
         */
        Vlan: string;
    }[];
    /**
     * 查询任务状态。
     */
    TaskStates: {
        /**
         * 错误信息。Successful标识查询任务成功。
         * @example `Successful`
         */
        ErrorMessage: string;
        /**
         * 异步任务状态：
         * - **Initialized**：查询任务初始化。
         * - **Offline**：智能接入网关设备离线未下发查询任务，智能接入网关设备上线后会继续下发。
         * - **Succeed**：查询任务下发成功。
         * - **Processing**：查询任务下发中。
         * - **VersionNotSupport**：智能接入网关设备当前版本不支持。
         * - **BuildRequestError**：管控不支持。
         * - **HardwareError**：由于设备原因查询任务下发失败。
         * - **TaskNotExist**：查询任务不存在。
         * - **OfflineNotConfiged**：智能接入网关设备离线未下发查询任务，智能接入网关设备上线后也不会下发。
         * @example `Succeed`
         */
        State: string;
        /**
         * 错误码。200标识查询任务成功。
         * @example `200`
         */
        ErrorCode: string;
        /**
         * 查询任务创建时间。
         * @example `1586843621000`
         */
        CreateTime: string;
    }[];
}
