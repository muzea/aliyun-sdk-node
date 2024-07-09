export interface BindPurchasedDeviceRequest {
    /**
     * 空间所属区域。
     * @example `cn-qingdao`
     */
    "Region": string;
    /**
     * 空间ID。
     * @example `3484*****8732174-cn-qingdao`
     */
    "GroupId": string;
    /**
     * 设备ID。
     * @example `3939*****6580539-cn-qingdao`
     */
    "DeviceId": string;
}
