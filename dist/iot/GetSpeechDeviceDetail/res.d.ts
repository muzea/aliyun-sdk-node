export interface GetSpeechDeviceDetailResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.speechsolution.NotSigned`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `speech solution has not been signed`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `66FF51D3-***-49F1-B1A2-***`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 设备的状态。
         * - **ONLINE**：在线。
         * - **OFFLINE**：离线。
         * - **UNACTIVE**：未激活。
         * - **DISABLE**：禁用。
         * @example `ONLINE`
         */
        Status: string;
        /**
         * 设备的总空间，单位KB。
         * @example `2000`
         */
        TotalSpace: number;
        /**
         * 产品的唯一标识。
         * @example `a1BwAGV****`
         */
        ProductKey: string;
        /**
         * 设备名称。
         * @example `test`
         */
        DeviceName: string;
        /**
         * 设备中语料列表的更新时间。
         * @example `1620624606000`
         */
        SpeechListUpdateTime: number;
        /**
         * 设备的可用空间，单位KB。
         * @example `200`
         */
        AvailableSpace: number;
        /**
         * 物联网平台为设备颁发的ID，是设备的唯一标识符。
         * @example `4de2c367****8c585e5992**`
         */
        IotId: string;
    };
}
