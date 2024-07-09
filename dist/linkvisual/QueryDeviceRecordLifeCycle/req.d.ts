export interface QueryDeviceRecordLifeCycleRequest {
    /**
     * IPC设备的IotId列表。IotId是物联网平台为该设备颁发的ID，设备的唯一标识符。
     * 可调用物联网平台[QueryDeviceDetail](~~69594~~)查询。
     * @example `["C47T6xwp6ms4bNlkHRWCg4****", "d7XmBoJhAr88C6PelXDF00****"]`
     */
    "DeviceList": string[];
}
