export interface QueryAliasesRequest {
    /**
     * AppKey信息。
     * @example `23267207`
     */
    "AppKey": number;
    /**
     * 设备在推送的唯一标识，32位，数字和小写字母组合。
     * @example `e2ba19de97604f55b165576****`
     */
    "DeviceId": string;
}
