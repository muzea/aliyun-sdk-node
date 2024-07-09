export interface ViewSmartAccessGatewayBgpRouteResponse {
    /**
     * 请求ID。
     * @example `F1FEABC0-F7B7-53EA-83EE-AA470ABACE60`
     */
    RequestId: string;
    /**
     * 保持时间。单位：秒。
     * @example `9`
     */
    HoldTime: number;
    /**
     * 存活时间间隔。单位：秒。
     * @example `3`
     */
    KeepAlive: number;
    /**
     * 智能接入网关所属自治系统编号。
     * @example `12****`
     */
    LocalAs: number;
    /**
     * BGP路由器ID。
     * @example `192.XX.XX.1`
     */
    RouterId: string;
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
         * 异步任务状态。取值：
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
         * 查询任务创建时间戳。单位：毫秒。
         * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建查询任务时的总时长。
         * @example `1586855592000`
         */
        CreateTime: string;
    }[];
}
