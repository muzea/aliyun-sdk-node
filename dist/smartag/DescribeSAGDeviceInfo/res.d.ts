export interface DescribeSAGDeviceInfoResponse {
    /**
     * 智能接入网关设备的业务IP地址。
     * @example `42.XX.XX.151`
     */
    ServiceIP: string;
    /**
     * 智能接入网关设备的管控状态：
     * - **Normal**：正常。
     * - **Abnormal**：异常。
     * @example `Normal`
     */
    ControllerState: string;
    /**
     * 请求ID。
     * @example `B6A991F4-F533-1627-8144-B64E01C5EE85`
     */
    RequestId: string;
    /**
     * 智能接入网关设备本地和云上的同步状态：
     * - **Synchronized**：同步完成。
     * - **Unsynchronized**：未同步。
     * - **Synchronizing**：正在同步。
     * @example `Unsynchronized`
     */
    SynStatus: string;
    /**
     * 智能接入网关设备类型：
     * - **sag-100wm**。
     * - **sag-1000**。
     * @example `sag-100wm`
     */
    SmartAGType: string;
    /**
     * 智能接入网关设备运行的软件版本号。
     * @example `2.3.1.1`
     */
    Version: string;
    /**
     * 智能接入网关设备的VPN连接状态：
     * - **Normal**：正常。
     * - **Abnormal**：异常。
     * @example `Abnormal`
     */
    VpnState: string;
    /**
     * 智能接入网关设备的启动时间。
     * @example `2021-06-15 17:33:43`
     */
    StartupTime: string;
    /**
     * 智能接入网关设备最近一次连接管控的时间。
     * @example `2021-07-14 00:27:48`
     */
    LastConnectedControllerTime: string;
    /**
     * 智能接入网关设备的重置键是否启用。
     * - **Enabled**：已启用。
     * - **Disabled**：未启用。
     * @example `Enabled`
     */
    ResettableStatus: string;
}
