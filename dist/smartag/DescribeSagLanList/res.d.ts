export interface DescribeSagLanListResponse {
    /**
     * 请求ID。
     * @example `1120228A-E5E1-4E9C-B56D-96887E1A2B2F`
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
         * @example `1586852928000`
         */
        CreateTime: string;
    }[];
    /**
     * LAN端口信息列表。
     */
    Lans: {
        /**
         * DHCP租期。单位分钟。
         * @example `7`
         */
        Lease: string;
        /**
         * 掩码地址。
         * @example `255.255.255.0`
         */
        Mask: string;
        /**
         * DHCP地址池结束地址。
         * @example `192.XX.XX.254`
         */
        EndIp: string;
        /**
         * 端口名称。
         * @example `0`
         */
        PortName: string;
        /**
         * DHCP地址池起始地址。
         * @example `192.XX.XX.2`
         */
        StartIp: string;
        /**
         * LAN口连接类型。
         * **DHCP**：动态IP。利用DHCP协议，向连接设备动态下发IP地址。
         * **STATIC**：静态IP。静态指定LAN口IP地址。
         * @example `DHCP`
         */
        IPType: string;
        /**
         * LAN口IP地址。
         * @example `192.XX.XX.1`
         */
        IP: string;
    }[];
}
