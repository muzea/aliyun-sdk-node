export interface SubmitDiagnoseTaskForSingleCardRequest {
    /**
     * 5G高速上云实例id。
     * @example `cc5g-xxxx`
     */
    "WirelessCloudConnectorId": string;
    /**
     * 网络诊断的源物联网卡ID。
     * @example `89860477102170127555`
     */
    "Source": string;
    /**
     * 网络诊断的目的IP或者域名。
     * @example `106.14.175.4`
     */
    "Destination"?: string;
    /**
     * 网络诊断的开始时间戳。单位：毫秒。
     * @example `1662307201200`
     */
    "BeginTime": number;
    /**
     * 网络诊断的结束时间戳。单位：毫秒。
     * @example `1662307201200`
     */
    "EndTime": number;
    /**
     * 5G高速上云实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionNo": string;
    /**
     * 云连接器实例使用者的阿里云账号ID。
     * @example `253460731706911258`
     */
    "ResourceUid"?: number;
}
