export interface GetGatewayBySubDeviceResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的网关设备的详细信息。
     */
    Data: {
        /**
         * 网关设备状态。取值：
         * - **online**：设备在线。
         * - **offline**：设备离线。
         * - **unactive**：设备未激活。
         * - **disable**：设备已禁用
         * @example `online`
         */
        Status: string;
        /**
         * 网关设备的激活时间，UTC格式，世界标准时间。用户所在地实际时间，可根据当地时差计算。
         * @example `2019-12-18T15:25:30.176Z`
         */
        UtcActive: string;
        /**
         * 网关设备隶属的产品名称。
         * @example `LinkIoT`
         */
        ProductName: string;
        /**
         * 网关设备名称。
         * @example `gateway`
         */
        DeviceName: string;
        /**
         * 网关设备的固件版本号。
         * @example `V1.0.1`
         */
        FirmwareVersion: string;
        /**
         * 网关设备的创建时间，UTC格式，世界标准时间。用户所在地实际时间，可根据当地时差计算。
         * @example `2019-12-18T08:58:33.000Z`
         */
        UtcCreate: string;
        /**
         * 网关设备所在地域（与控制台上的地域对应）。
         * @example `cn-shanghai`
         */
        region: string;
        /**
         * 网关设备最近一次上线的时间，GMT格式，是用户所在地的当地时间。
         * @example `2020-01-20 17:41:04`
         */
        GmtOnline: string;
        /**
         * 物联网平台为该网关设备颁发的ID，作为该设备的唯一标识符。
         * @example `WuyjPSDQE1L22z1d****000100`
         */
        iotId: string;
        /**
         * 网关设备最近一次上线的时间，UTC格式，世界标准时间。用户所在地实际时间，可根据当地时差计算。
         * @example `2020-01-20T09:41:04.879Z`
         */
        UtcOnline: string;
        /**
         * 网关设备隶属的产品**ProductKey**。
         * @example `a1BwAGV****`
         */
        ProductKey: string;
        /**
         * 网关设备的IP地址。
         * @example `106.**.1**.**`
         */
        IpAddress: string;
        /**
         * 节点类型，取值为1，表示该设备为网关设备。
         * @example `1`
         */
        NodeType: string;
        /**
         * 网关设备密钥。
         * @example `dCYdTU3gw5Z77bsHjPk6lPHPVnBT****`
         */
        DeviceSecret: string;
        /**
         * 网关设备的创建时间，GMT格式，是用户所在地的当地时间。
         * @example `2019-12-18 16:58:33`
         */
        GmtCreate: string;
        /**
         * 网关设备的激活时间，GMT格式，是用户所在地的当地时间。
         * @example `2019-12-18 23:25:30`
         */
        GmtActive: string;
    };
}
