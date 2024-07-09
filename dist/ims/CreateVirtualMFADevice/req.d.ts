export interface CreateVirtualMFADeviceRequest {
    /**
     * 多因素认证设备名称。
     * 长度为1~64个字符，可包含英文字母、数字和短划线（-）。
     * @example `device001`
     */
    "VirtualMFADeviceName": string;
}
