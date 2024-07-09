export interface QueryRecordFileDownloadUrlResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码详见[错误码列表](~~109196~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `1AB3CEF7-DCBE-488C-9C33-D180982CE031`
     */
    RequestId: string;
    /**
     * 录音文件的下载链接URL。URL链接的有效期为2小时。
     * @example `http://secret-axb-reco****cn-shanghai.aliyuncs.com/1000000820******_66647243838006067251************.mp3?Expires=1551******&OSSAccessKeyId=LTAIP00vvvv****v&Signature=tK6Yq9KusU4n********7lg4/WmEA%3D`
     */
    DownloadUrl: string;
}
