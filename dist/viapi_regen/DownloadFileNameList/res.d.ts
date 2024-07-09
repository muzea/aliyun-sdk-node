export interface DownloadFileNameListResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `3E9ADFE6-3424-1425-9C76-18EA9402A46F`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 下载文件的OSS URL。
         * @example `https://viapi-regen-hangzhou-prod.oss-cn-hangzhou.aliyuncs.com/prod/data/808/dataFileNames/%E8%BF%AD%E4%BB%A3%E5%85%AB%E6%9C%9F%E6%B5%8B%E8%AF%95_dataFileNames.txt?Expires=1660630152&OSSAccessKeyId=LTAI5t69vTgbfYeAKcsT****&Signature=YZr2sRpi5gWtsitFFmlVS1%2FFf0U%3D`
         */
        OssHttpUrl: string;
    };
}
