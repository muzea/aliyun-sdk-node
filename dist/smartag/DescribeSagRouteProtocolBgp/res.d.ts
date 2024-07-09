export interface DescribeSagRouteProtocolBgpResponse {
    /**
     * 保持时间。单位：秒。
     * @example `9`
     */
    HoldTime: number;
    /**
     * 请求ID。
     * @example `2F39E4FE-B45C-47FF-9921-95780486F52D`
     */
    RequestId: string;
    /**
     * 存活时间间隔。单位：秒。
     * @example `3`
     */
    KeepAlive: number;
    /**
     * 智能接入网关所属自治系统编号。
     * @example `65536`
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
         * 查询任务创建时间戳。
         * @example `1586765938000`
         */
        CreateTime: string;
    }[];
}
