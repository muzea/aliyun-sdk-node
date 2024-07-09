export interface ListDictsResponse {
    /**
     * 请求ID。
     * @example `2937F832-F39E-41EF-89BA-B528342A2A3A`
     */
    RequestId: string;
    /**
     * 返回头信息。
     */
    Headers: {
        /**
         * 总记录数。
         * @example `1`
         */
        X-Total-Count: number;
    };
    /**
     * 返回的请求结果。
     */
    Result: {
        /**
         * 词典文件的字节数大小，单位：Byte。
         * @example `2782602`
         */
        fileSize: number;
        /**
         * 公网可下载链接。有效时长为90秒。
         * @example `http://test_bucket.oss-cn-hangzhou.aliyuncs.com/AliyunEs/test.dic?Expires=162573****&OSSAccessKeyId=LTAI*****V9&Signature=PNPO********BBGsJDO4V3VfU4sE%3D`
         */
        downloadUrl: string;
        /**
         * 固定值。
         * @example `ORIGIN`
         */
        sourceType: string;
        /**
         * IK词典的类型，取值含义如下：
         * - MAIN：主分词词库。
         * - STOP：停用词词库。
         * @example `MAIN`
         */
        type: string;
        /**
         * 词典文件的文件名。
         * @example `SYSTEM_MAIN.dic`
         */
        name: string;
    }[];
}
