interface CreateVirtualMFADeviceRequest {
    "RegionId"?: string;
    /**
    * 指定设备名称, 最大长度64个字符。
    * 限制：`[a-zA-Z0-9-]*`。
    * @example `device001`
    */ "VirtualMFADeviceName"?: string;
}
export { CreateVirtualMFADeviceRequest };