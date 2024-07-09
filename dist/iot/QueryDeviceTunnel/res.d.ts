export interface QueryDeviceTunnelResponse {
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
     * 调用成功时，返回安全隧道的信息。
     */
    Data: {
        /**
         * 设备所属产品的名称。
         * @example `test`
         */
        ProductName: string;
        /**
         * 设备名称。
         * @example `light`
         */
        DeviceName: string;
        /**
         * 安全隧道关闭的UTC时间。
         * @example `2021-09-22T12:44:12.000Z`
         */
        UtcClosed: string;
        /**
         * 设备端连接状态。
         * - **CONNECTED**：已连接。
         * - **DISCONNECTED**：未连接。
         * @example `CONNECTED`
         */
        DeviceConnState: string;
        /**
         * 安全隧道创建的UTC时间。
         * @example `2021-09-22T12:44:12.000Z`
         */
        UtcCreated: string;
        /**
         * 访问端连接状态。
         * - **CONNECTED**：已连接。
         * - **DISCONNECTED**：未连接。
         * @example `DISCONNECTED`
         */
        SourceConnState: string;
        /**
         * 设备所属产品的**ProductKey**。
         * @example `a1rYuVF***`
         */
        ProductKey: string;
        /**
         * 安全隧道的描述信息。
         * @example `用于远程登录到摄像头。`
         */
        Description: string;
        /**
         * 安全隧道的ID。
         * @example ` d4098041-a560-***`
         */
        TunnelId: string;
        /**
         * 安全隧道的状态。
         * - **OPEN**：已打开，支持通过安全隧道访问对应设备。
         * - **CLOSED**：已关闭，不支持通过安全隧道访问对应设备了。
         * @example `OPEN`
         */
        TunnelState: string;
        /**
         * 物联网平台为该设备颁发的ID，作为该设备的唯一标识符。
         * @example `Q7uOhVRdZRRlDnTLv***00100`
         */
        IotId: string;
        /**
         * 推送给设备的自定义信息。
         * @example `reboot`
         */
        Udi: string;
    };
}
