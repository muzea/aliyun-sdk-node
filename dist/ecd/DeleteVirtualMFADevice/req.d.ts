export interface DeleteVirtualMFADeviceRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 虚拟MFA设备序列号，唯一标识。
     * 您可以调用[DescribeVirtualMFADevices](~~206210~~)查询AD用户绑定的虚拟MFA设备序列号。
     * @example `a25f297f-f2e1-4a44-bbf1-5f48a6e5****`
     */
    "SerialNumber": string;
}
