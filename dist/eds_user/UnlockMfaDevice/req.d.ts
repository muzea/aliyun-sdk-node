export interface UnlockMfaDeviceRequest {
    /**
     * 虚拟MFA设备序列号，唯一标识。
     * @example `dc856334-446b-4035-bfbc-18af261e****`
     */
    "SerialNumber": string;
    /**
     * AD工作区地址。
     * @example `welab.co.id`
     */
    "AdDomain"?: string;
}
