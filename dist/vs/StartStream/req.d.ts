export interface StartStreamRequest {
    /**
     * 流ID。
     * @example `323*****997-cn-qingdao`
     */
    "Id": string;
    /**
     * NVR历史流，开始时间点（uinx时间戳，单位：秒）。
     * @example `1589336385`
     */
    "StartTime"?: number;
    /**
     * NVR历史流，结束时间点（uinx时间戳，单位：秒）。
     * @example `1599336385`
     */
    "EndTime"?: number;
}
