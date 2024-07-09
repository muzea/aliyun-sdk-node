export interface DownloadLabelFileResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `47109F76-8BF9-078A-83DB-1622E811646D`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * OSS URL根目录。
         * @example `https://dha-regen-prod.oss-cn-shanghai.aliyuncs.com/daily/label/120/1634104295573_1631762324685_1631174016651_small.csv?Expires=1634203288&OSSAccessKeyId=LTAI5tEQPn4obqpuvGEg****&Signature=9KWRL9YzY2eu%2FN5OFXYbZaN865o%3D`
         */
        OssHttpUrl: string;
    };
}
