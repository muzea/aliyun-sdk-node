export interface BatchBindPurchasedDevicesRequest {
    /**
     * 地域。
     * @example `cn-qingdao`
     */
    "Region": string;
    /**
     * 设备分组id
     * @example `348*****174-cn-qingdao`
     */
    "GroupId": string;
    /**
     * 设备ID。
     * @example `348*****380-cn-qingdao`
     */
    "DeviceId": string;
}
