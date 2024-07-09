export interface ExportBillDetailDataResponse {
    /**
     * 文件下载路径。
     * @example `http://test-oss.com/image_01.jpeg`
     */
    FilePath: string;
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `BEA05990-B90D-594F-8C8E-650AEEB94C5D`
     */
    RequestId: string;
}
