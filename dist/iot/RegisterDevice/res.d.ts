export interface RegisterDeviceResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
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
     * 调用成功时，返回注册的设备信息。
     */
    Data: {
        /**
         * 设备所属产品的ProductKey。
         * @example `a1BwAGV****`
         */
        ProductKey: string;
        /**
         * LoRaWAN设备的DevEUI。仅LoRaWAN设备才会返回该参数。
         * @example `e8SDdgeIlk3nED****`
         */
        DevEui: string;
        /**
         * 设备名称。
         * ><notice> 请妥善保管，勿泄露。
         * ></notice>
         * @example `light`
         */
        DeviceName: string;
        /**
         * LoRaWAN设备的入网凭证 JoinEUI。仅LoRaWAN设备才会返回该参数。
         * @example `Ede4tde8erth****`
         */
        JoinEui: string;
        /**
         * 设备密钥。
         * ><notice> 请妥善保管，勿泄露。
         * ></notice>
         * @example `mz2Canp4GB7qRVf1OYPNtRqB2anu****`
         */
        DeviceSecret: string;
        /**
         * 设备的备注名称。
         * 若您没有为该设备设置备注名称，则该参数返回为空。
         * @example `园区灯`
         */
        Nickname: string;
        /**
         * 物联网平台为该设备颁发的设备ID，作为该设备的唯一标识符。
         * ><notice> 请妥善保管，勿泄露。
         * ></notice>
         * @example `1O4YPNtRqB2anumz2Canp4GB7q****`
         */
        IotId: string;
    };
}
