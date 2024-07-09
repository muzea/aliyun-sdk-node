export interface ClientUnbindDeviceResponse {
    /**
     * 请求ID
     * @example `13E0445E-CA7F-5DD3-9B0F-D4B39E0180F7`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `10010001`
     */
    Code: string;
    /**
     * 错误消息
     * @example `无权限操作`
     */
    Message: string;
}
