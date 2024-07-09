export interface DownloadDatasetResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `2F41B093-558B-04DB-B58D-1E40419593E2`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 下载文件的OSS URL。
         * @example `https://viapi-regen-hangzhou-prod.oss-cn-hangzhou.aliyuncs.com/daily/data/455/dataSignatureUrl/test6_dataSignatureUrl.txt?Expires=1661332164&OSSAccessKeyId=LTAI5tMANw98BWLM7sTN****&Signature=M4R2e5RIaVhDVoBDhXa%2FjS0gf90%3D`
         */
        OssHttpUrl: string;
    };
}
