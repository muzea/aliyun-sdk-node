export interface SubmitDiagnoseTaskForSingleCardRequest {
    /**
     * 发起单张物联网卡网络诊断的实例ID。
     * @example `iotcc-smy9a5ockzp08n****`
     */
    "IoTCloudConnectorId": string;
    /**
     * 网络诊断的源类型。取值：
     * - **卡IP**：表示通过物联网卡的卡IP进行网络诊断。
     * - **卡ID**：表示通过物联网卡的卡ID进行网络诊断。
     * @example `卡IP`
     */
    "SourceType": string;
    /**
     * 网络诊断的源端卡IP或者卡ID。
     * @example `169.254.XX.XX`
     */
    "Source": string;
    /**
     * 网路诊断的目的类型。取值：
     * - **IP**：表示诊断的目的类型是IP类型。
     * - **域名**：表示诊断的目的类型是域名类型。
     * @example `IP`
     */
    "DestinationType"?: string;
    /**
     * 网络诊断的目的IP或者域名。
     * @example `114.114.XX.XX`
     */
    "Destination"?: string;
    /**
     * 网络诊断的开始时间戳。单位：秒。
     * @example `1643077466`
     */
    "BeginTime": number;
    /**
     * 网络诊断的结束时间戳。单位：秒。
     * @example `1643077666`
     */
    "EndTime": number;
    /**
     * 网络诊断所在的地域ID。
     * 您可以通过调用[ListRegions](~~313836~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云连接器实例使用者的阿里云账号ID。
     * @example `253460731706911258`
     */
    "ResourceUid"?: number;
}
