export interface DescribeRecordingResponse {
    /**
     * 文件下载地址
     * @example `url`
     */
    FilePath: string;
    /**
     * 请求id
     * @example `14C39896-AE6D-4643-9C9A-E0566B2C2DDD`
     */
    RequestId: string;
    /**
     * 文件名字
     * @example `2019080913202222.wav`
     */
    FileName: string;
    VoiceSliceRecordingListJson: string;
}
