export interface CreateStreamSnapshotRequest {
    /**
     * 流ID。
     * @example `323*****997-cn-qingdao`
     */
    "Id": string;
    /**
     * 截图方式。取值范围：
     * - center（云端截图）（默认）
     * - device（设备截图）
     * @example `device`
     */
    "Location"?: string;
}
