export interface DescribeSagWanListResponse {
    /**
     * 请求ID。
     * @example `CE6642D4-21EB-4168-9BF9-F217953F9892`
     */
    RequestId: string;
    /**
     * WAN口配置信息列表。
     */
    Wans: {
        /**
         * WAN口权重。
         * @example `100`
         */
        Weight: number;
        /**
         * WAN口IP地址掩码。
         * @example `255.255.255.240`
         */
        Mask: string;
        /**
         * 网关IP地址。
         * @example `192.XX.XX.1`
         */
        Gateway: string;
        /**
         * WAN口所属的端口号。
         * @example `1`
         */
        PortName: string;
        /**
         * WAN口连接类型：
         * - **DHCP**：通过DHCP协议动态获取IP地址，进而访问互联网。
         * - **STATIC**：通过静态指定IP地址，进而访问互联网。
         * - **PPPOE**：通过拨号方式接入互联网。
         * @example `STATIC`
         */
        IPType: string;
        /**
         * WAN口优先级。
         * 数值范围：**-1**或**1~50**，数值越小优先级越高。
         * > 优先级为**-1**时，表示端口不启用流量转发。
         * @example `1`
         */
        Priority: number;
        /**
         * WAN口的限速带宽。单位：Mbps。
         * @example `50`
         */
        BandWidth: number;
        /**
         * WAN口流量状态。
         * - **active**：表示当前WAN端口为主端口，优先进行转发流量。
         * -  **standby**：表示当前WAN端口为备端口，在主端口故障后进行流量转发。
         * @example `active`
         */
        TrafficState: string;
        /**
         * WAN口IP地址。
         * @example `172.XX.XX.1`
         */
        IP: string;
        /**
         * WAN口连接的运营商链路。
         * - **CT**：电信
         * - **CM**：移动
         * - **CU**：联通
         * - **Other**：其他
         * @example `CT`
         */
        ISP: string;
        /**
         * PPPOE账号。
         * @example `Usernamexx`
         */
        Username: string;
    }[];
    /**
     * 查询任务信息及状态。
     */
    TaskStates: {
        /**
         * 错误信息。Successful标识查询任务成功。
         * @example `Successful`
         */
        ErrorMessage: string;
        /**
         * 查询任务状态：
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
         * @example `1586834861000`
         */
        CreateTime: string;
    }[];
}
