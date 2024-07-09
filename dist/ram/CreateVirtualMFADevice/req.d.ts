export interface CreateVirtualMFADeviceRequest {
    /**
     * 多因素认证设备名称。
     * 长度为1~64个字符，可包含英文字母、数字、半角句号（.）和短划线（-）。
     * @example `device001`
     */
    "VirtualMFADeviceName"?: string;
}
