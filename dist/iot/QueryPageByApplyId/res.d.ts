export interface QueryPageByApplyIdResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 每页显示的设备数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 该批次的设备总数。
     * @example `2`
     */
    Total: number;
    /**
     * 总页数。
     * @example `1`
     */
    PageCount: number;
    /**
     * 当前页面号。
     * @example `1`
     */
    Page: number;
    ApplyDeviceList: {
        /**
         * 调用成功时，生成的已注册的设备列表（**ApplyDeviceInfo**）。
         */
        ApplyDeviceInfo: {
            /**
             * 设备名称。
             * @example `light`
             */
            DeviceName: string;
            /**
             * 设备ID（旧版参数）。
             * > 该参数是旧版本遗留参数，已无实际作用，不能用来标识设备。目前有效的设备标识符为**IotId**和**ProductKey**与**DeviceName**组合。
             * @example `gQG2GJ2y10m6hIk8****`
             */
            DeviceId: string;
            /**
             * 设备ID，物联网平台为该设备颁发的唯一标识符。
             * @example `vWxNur6BUApsqjv9****000100`
             */
            IotId: string;
            /**
             * 设备密钥。
             * @example `SkfeXXKrTgp1DbDxYr74mfJ5cnui****`
             */
            DeviceSecret: string;
        }[];
    };
}
