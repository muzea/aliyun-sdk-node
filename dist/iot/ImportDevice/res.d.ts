export interface ImportDeviceResponse {
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
     * @example `E4C0FF92-2A86-41DB-92D3-73B60310D25E`
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
     * 调用成功时，返回导入的设备信息。
     */
    Data: {
        /**
         * 设备所属产品的**ProductKey**。
         * @example `a1BwAGV****`
         */
        ProductKey: string;
        /**
         * 设备序列号。
         * > 若您没有为设备传入序列号，则该参数返回为空。
         * @example `QC4******001`
         */
        Sn: string;
        /**
         * 设备名称。
         * ><notice>
         * 请妥善保管，勿泄露。
         * ></notice>
         * @example `light`
         */
        DeviceName: string;
        /**
         * 设备密钥。
         * ><notice>
         * 请妥善保管，勿泄露。
         * ></notice>
         * @example `b4d43f7******10ba5e5`
         */
        DeviceSecret: string;
        /**
         * 设备的备注名称。
         * > 若您没有为该设备传入备注名称，则该参数返回为空。
         * @example `园区灯`
         */
        Nickname: string;
        /**
         * 物联网平台为该设备颁发的设备ID，作为该设备的唯一标识符。
         * ><notice>
         * 请妥善保管，勿泄露。
         * ></notice>
         * @example `1O4YPNtRqB2anumz2Canp4GB7*****`
         */
        IotId: string;
    };
}
