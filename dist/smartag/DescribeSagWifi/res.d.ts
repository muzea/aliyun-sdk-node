export interface DescribeSagWifiResponse {
    /**
     * 无线功能是否开启：
     * - **True**：是。
     * - **False**：否。
     * @example `True`
     */
    IsEnable: string;
    /**
     * 请求ID。
     * @example `E93884AC-6C21-4FEA-8E3A-7377D33B194F`
     */
    RequestId: string;
    /**
     * 无线安全是否打开：
     * - **True**：无线安全功能打开。
     * - **False**：无线安全功能未打开。
     * @example `True`
     */
    IsAuth: string;
    /**
     * 频谱带宽：
     * - **自动**。
     * - **20MHz**。
     * - **40MHz**。
     * @example `自动`
     */
    Bandwidth: string;
    /**
     * 信道。
     * @example `0`
     */
    Channel: string;
    /**
     * Wifi名称。
     * @example `aliyun_sag_123456***`
     */
    Ssid: string;
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
         * @example `1586843621000`
         */
        CreateTime: string;
    }[];
    /**
     * 认证类型：
     * - **NONE**：未开启认证。
     * - **WPA-PSK**：开启WPA-PSK认证。
     * - **WPA2-PSK**：开启WPA2-PSK认证。
     * @example `WPA2-PSK`
     */
    AuthenticationType: string;
    /**
     * 加密算法：
     * - **AUTO**：自动加密。
     * - **TKIP**：临时密钥完整性协议。
     * - **AES**：WiFi授权的高效加密标准。
     * @example `AES`
     */
    EncryptAlgorithm: string;
    /**
     * Wifi广播功能是否打开：
     * - **True**：Wifi广播功能打开。
     * - **False**：Wifi广播功能未打开。
     * @example `True`
     */
    IsBroadcast: string;
}
