export interface UpdateUserDevicesSharingStatusRequest {
    /**
     * 终端设备ID集合。
     */
    "DeviceTags": string[];
    /**
     * 设备是否开启共享。取值：
     * - **true**：开启共享。
     * - **false**：关闭共享。
     * @example `true`
     */
    "SharingStatus": boolean;
}
