export interface GenerateSdkDownloadInfoResponse {
    /**
     * 请求ID。
     * @example `F3BAE77D-1954-48C5-95F6-D4937B29E2F4`
     */
    RequestId: string;
    /**
     * SDK下载的信息。
     */
    SdkDownloadInfo: {
        /**
         * 下载地址。
         * @example `http://iovcc-pm-tenant.oss-cn-shanghai.aliyuncs.com/1768723179523459/11/2018-05-07/aicc-sdk-1525699039841.zip?OSSAccessKeyId=nz2pc56s936**9l&Expires=1141889120&Signature=vjbyPxybdZaNmGa%2ByT272YEAiv4%3D`
         */
        Url: string;
    };
}
