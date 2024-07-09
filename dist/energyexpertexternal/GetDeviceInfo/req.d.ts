export interface GetDeviceInfoRequest {
    /**
     * 场站id
     * @example `pn_95`
     */
    "factoryId": string;
    /**
     * 设备id
     * @example `pn_69873`
     */
    "deviceId": string;
    /**
     * 时间字符串，时间格式为YYYY-mm-dd
     * @example `2022-07-26`
     */
    "ds": string;
}
