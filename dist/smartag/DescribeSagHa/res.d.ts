export interface DescribeSagHaResponse {
    /**
     * 请求ID。
     * @example `273D62FD-E346-4959-AA18-D79B9276FEFB`
     */
    RequestId: string;
    /**
     * HA模式：
     * - **NONE**：HA功能未开启。
     * - **STATIC**：静态模式。
     * - **DYNAMIC**：动态模式。
     * @example `NONE`
     */
    Mode: string;
    /**
     * 端口信息列表。
     */
    Ports: {
        /**
         * 端口名称。
         * @example `5`
         */
        PortName: string;
        /**
         * 智能接入网关的虚拟IP地址。
         * @example `192.XX.XX.1`
         */
        VirtualIp: string;
    }[];
    /**
     * 查询任务信息列表。
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
         * @example `1586836343000`
         */
        CreateTime: string;
    }[];
}
