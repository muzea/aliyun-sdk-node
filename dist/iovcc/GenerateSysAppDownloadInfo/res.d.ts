export interface GenerateSysAppDownloadInfoResponse {
    /**
     * 请求ID。
     * @example `F3BAE77D-1954-48C5-95F6-D4937B29E2F4`
     */
    RequestId: string;
    /**
     * 系统应用下载信息。
     */
    SysAppDownloadInfo: {
        /**
         * 下载地址。
         * @example `http://iovcc-pm-tenant.oss-cn-shanghai.aliyuncs.com/1768723179523459/11/2018-05-07/1525699039841-com.aliyun.aicc-20180507.apk?OSSAccessKeyId=nz2pc56s936**9l&Expires=1141889120&Signature=vjbyPxybdZaNmGa%2ByT272YEAiv4%3D`
         */
        Url: string;
    };
}
