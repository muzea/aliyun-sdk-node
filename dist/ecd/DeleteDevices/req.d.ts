export interface DeleteDevicesRequest {
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
     * @example `1`
     */
    "ClientType": number;
    /**
     * 当设备已有绑定的终端用户时，是否强制删除该设备。
     * @example `0`
     */
    "Force": number;
}
