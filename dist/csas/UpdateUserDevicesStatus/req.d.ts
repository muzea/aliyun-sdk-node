export interface UpdateUserDevicesStatusRequest {
    /**
     * 终端设备ID集合。
     */
    "DeviceTags": string[];
    /**
     * 终端设备状态操作。取值：
     * - **Locked**：锁定。
     * - **Lost**：挂失。
     * - **Unbound**：解绑。只有终端设备为离线或长期离线状态时允许解绑。
     * - **Unlocked**：解锁。只有终端设备为锁定状态时允许解锁。
     * - **Found**：找回。只有终端设备为挂失状态时允许解锁。
     * @example `Unbound`
     */
    "DeviceAction": string;
}
