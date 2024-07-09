export interface ClientAuthRequest {
    /**
     * 租户id。客户端SDK通过证书可获得
     * @example `9185`
     */
    "TenantId": number;
    /**
     * App ID。客户端SDK通过证书可获得
     * @example `dsdsf1`
     */
    "AppId": string;
    /**
     * 客户端证书
     * @example `FqTyXFrIqbIGnb_oqIvszv1wffODnpCDNDvOc6xNXbAhak1AwsfrCo2cSrPFAhHEitOb9VEG`
     */
    "License": string;
    /**
     * 设备Id
     * @example `xxxxxx`
     */
    "DeviceId": string;
    /**
     * 设备类型
     * @example `largeScreen`
     */
    "DeviceType": string;
    /**
     * 设备详细信息
     * @example `{"xxxx":"xxxxxxxxxxx"}`
     */
    "DeviceInfo"?: string;
}
