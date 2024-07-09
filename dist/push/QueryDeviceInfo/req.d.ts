export interface QueryDeviceInfoRequest {
    /**
     * AppKey信息。
     * @example `23419851`
     */
    "AppKey": number;
    /**
     * 设备在推送系统中的唯一标识，一次只能查询一个。
     * @example `a64ae296f3b04a58a05b30c9****`
     */
    "DeviceId": string;
}
