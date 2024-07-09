export interface RemoveMfaDeviceRequest {
    /**
     * 虚拟MFA设备序列号，唯一标识。
     * @example `dc856334-446b-4035-bfbc-18af261e****`
     */
    "SerialNumber": string;
    /**
     * AD工作区地址。
     * @example `alpha.lftltd.net`
     */
    "AdDomain"?: string;
}
