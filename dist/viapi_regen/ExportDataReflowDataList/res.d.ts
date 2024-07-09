export interface ExportDataReflowDataListResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `4B27B05F-6F29-50AB-8382-43E6DDDC4666`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 下载文件的OSS URL。
         * @example `https://viapi-regen-hangzhou-prod.oss-cn-hangzhou.aliyuncs.com/prod/service/432/dataReflow/dataReflow.txt?Expires=1663741242&OSSAccessKeyId=LTAI5t69vTgbfYeAKcsT****&Signature=nCl3dGW8WhHYBqDYJwzREZSSXFo%3D`
         */
        OssHttpUrl: string;
    };
}
