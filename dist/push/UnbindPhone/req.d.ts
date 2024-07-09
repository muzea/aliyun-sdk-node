export interface UnbindPhoneRequest {
    /**
     * AppKey信息。
     * @example `23267207`
     */
    "AppKey": number;
    /**
     * 设备的唯一标识，32位，数字和小写字母组合。
     * @example `eb5f741d83d04d34807d229999eefa52`
     */
    "DeviceId": string;
}
