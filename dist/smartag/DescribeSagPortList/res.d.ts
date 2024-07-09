export interface DescribeSagPortListResponse {
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
         * - **Up**：端口开启。
         * - **Down**：端口关闭。
         * - **Unavailable**：设备不在线。
         * @example `Down`
         */
        Status: string;
        /**
         * 端口名称。
         * @example `5`
         */
        PortName: string;
        /**
         * 端口角色：
         * - **NONE**：表示未分配端口角色。
         * - **WAN**：端口角色为WAN口，WAN口用于接入Internet，支持DHCP client、PPPoE、静态IP接入方式。
         * - **LAN**：端口角色为LAN口，LAN口用于接入本地客户端或交换机，支持DHCP server、静态IP接入方式。
         * - **ECC**：端口角色为专线，用于对接专线。
         * - **MGT**：端口角色为管理口。
         * - **CELLULAR**：表示4G口。
         * @example `NONE`
         */
        Role: string;
        /**
         * 端口Mac地址。
         * @example `c4:00:ad:a2:f5:****`
         */
        Mac: string;
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
         * @example `1586762479000`
         */
        CreateTime: string;
    }[];
}
