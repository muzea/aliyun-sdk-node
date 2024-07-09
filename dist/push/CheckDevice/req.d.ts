export interface CheckDeviceRequest {
    /**
     * AppKey信息。
     * @example `23419851`
     */
    "AppKey": number;
    /**
     * 设备在推送的唯一标识，32位，数字和小写字母组合。
     * @example `ae296f3b04a58a05b30c95f****`
     */
    "DeviceId": string;
}
