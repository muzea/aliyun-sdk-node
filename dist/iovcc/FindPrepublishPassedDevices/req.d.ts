export interface FindPrepublishPassedDevicesRequest {
    /**
     * 预发布ID
     * @example `1`
     */
    "PrepublishId": string;
    /**
     * 所属项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 本页开始序号
     * @example `1`
     */
    "PageIndex": number;
    /**
     * 分页大小
     * @example `20`
     */
    "PageSize": number;
    /**
     * 云设备ID
     * @example `b8fe2e24ff2b48e0a3aa4e49809fc1b3`
     */
    "DeviceId"?: string;
}
