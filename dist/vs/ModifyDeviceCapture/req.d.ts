export interface ModifyDeviceCaptureRequest {
    /**
     * 设备ID。
     * @example `348*****380-cn-qingdao`
     */
    "Id": string;
    /**
     * 抓图控制。取值：
     * - 0（关闭）
     * - 1（开启）
     * @example `0`
     */
    "Image"?: number;
    /**
     * 视频录制控制。取值：
     * - 0（关闭）
     * - 1（开启短录制）
     * - 2（开启长录制）
     * @example `1`
     */
    "Video"?: number;
}
