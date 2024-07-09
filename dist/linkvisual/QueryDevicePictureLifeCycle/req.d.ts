export interface QueryDevicePictureLifeCycleRequest {
    /**
     * IPC设备的设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。
     * 可调用物联网平台[QueryDeviceDetail](~~69594~~)查询。
     * @example `C47T6xwp6ms4bNlkHRWCg4****`
     */
    "IotId": string;
}
