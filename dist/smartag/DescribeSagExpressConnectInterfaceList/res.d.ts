export interface DescribeSagExpressConnectInterfaceListResponse {
    /**
     * 接口信息列表。
     */
    Interfaces: {
        /**
         * 掩码地址。
         * @example `255.255.255.0`
         */
        Mask: string;
        /**
         * VLAN编码。
         * @example `2`
         */
        Vlan: string;
        /**
         * IP地址。
         * @example `192.XX.XX.1`
         */
        IP: string;
    }[];
    /**
     * 请求ID。
     * @example `2718F7A6-EA67-41EF-BA39-E9F4A0F5D306`
     */
    RequestId: string;
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
         * @example `1586835287000`
         */
        CreateTime: string;
    }[];
}
