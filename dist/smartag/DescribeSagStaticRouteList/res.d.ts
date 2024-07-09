export interface DescribeSagStaticRouteListResponse {
    /**
     * 请求ID。
     * @example `CE6642D4-21EB-4168-9BF9-F217953F9892`
     */
    RequestId: string;
    /**
     * 静态路由信息列表。
     */
    StaticRoutes: {
        /**
         * 下一跳。
         * @example `192.XX.XX.1`
         */
        NextHop: string;
        /**
         * 目标网段。
         * @example `192.XX.XX.0/24`
         */
        DestinationCidr: string;
        /**
         * 端口名称。
         * @example `0`
         */
        PortName: string;
        /**
         * VLAN编号。
         * @example `1`
         */
        Vlan: string;
    }[];
    /**
     * 查询任务信息状态。
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
         * @example `1586857309000`
         */
        CreateTime: string;
    }[];
}
