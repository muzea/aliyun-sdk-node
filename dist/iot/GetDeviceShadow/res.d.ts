export interface GetDeviceShadowResponse {
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
     * @example `A56E345A-0978-4993-ACBA-3EF444ED187F`
     */
    RequestId: string;
    /**
     * 调用成功时，返回的设备影子信息。
     * > 根据影子设备的不同状态，查询到的影子信息结构有所差别，详情请参见[设备影子开发](~~53930~~)。
     * @example `{"method":"update","state":{"desired":{"color":"green"}},"version":1}`
     */
    ShadowMessage: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
