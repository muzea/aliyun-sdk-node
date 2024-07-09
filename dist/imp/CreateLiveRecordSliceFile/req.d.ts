export interface CreateLiveRecordSliceFileRequest {
    /**
     * 应用唯一标识，由6位小写字母、数字组成。
     * @example `lq****cu`
     */
    "AppId": string;
    /**
     * 直播ID。
     * @example `AE35****T95F`
     */
    "LiveId": string;
    /**
     * 片段开始时间，时间戳，单位为毫秒。
     * @example `1577836800000`
     */
    "StartTime": number;
    /**
     * 片段结束时间，时间戳，单位为毫秒。
     * @example `1577836800000`
     */
    "EndTime": number;
    /**
     * 自定义文件名称。
     * @example `sliceFile`
     */
    "FileName": string;
}
