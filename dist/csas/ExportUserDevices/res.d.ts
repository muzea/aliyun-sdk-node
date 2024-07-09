export interface ExportUserDevicesResponse {
    /**
     * 本次请求的ID。
     * @example `748CFDC7-1EB6-5B8B-9405-DA76ED5BB60D`
     */
    RequestId: string;
    /**
     * 文件下载URL，有效时间1分钟。
     * @example `https://sase-export.oss-cn-hangzhou.aliyuncs.com/export%2Fapp-device%2F20240607154831.xlsx?Expires=1717746571&OSSAccessKeyId=********************`
     */
    SignedUrl: string;
}
