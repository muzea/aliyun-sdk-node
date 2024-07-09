export interface BatchGetDeviceStateResponse {
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
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    DeviceStatusList: {
        /**
         * 调用成功时，返回设备状态信息列表，请参见**DeviceStatus**下的参数。
         */
        DeviceStatus: {
            /**
             * 设备状态。取值：
             * - **ONLINE**：设备在线。
             * - **OFFLINE**：设备离线。
             * - **UNACTIVE**：设备未激活。
             * - **DISABLE**：设备已禁用。
             * @example `OFFLINE`
             */
            Status: string;
            /**
             * 设备最后一次上线的时间。
             * @example `2020-01-17 16:19:11`
             */
            LastOnlineTime: string;
            /**
             * 设备名称。
             * @example `light`
             */
            DeviceName: string;
            /**
             * 设备ID（旧版参数）。
             * > 该参数是旧版本遗留参数，已无实际作用，不能用来标识设备。目前，有效的设备标识符为**IotId**和**ProductKey**与**DeviceName**组合。
             * @example `dwnS41bhNxjslDAI****`
             */
            DeviceId: string;
            /**
             * 设备状态变更时间。单位为毫秒。
             * @example `1557062301656`
             */
            Timestamp: number;
            /**
             * 设备IP地址。
             * @example `192.0.2.1`
             */
            AsAddress: string;
            /**
             * 设备ID，物联网平台为设备颁发的唯一标识。
             * @example `dwnS41bhNxjslDAI****000100`
             */
            IotId: string;
        }[];
    };
}
