export interface AddDevicesRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 设备ID列表。可配置1\~200个。
     */
    "DeviceIds": string[];
    /**
     * 设备类型。
     * @example `2`
     */
    "ClientType": number;
}
