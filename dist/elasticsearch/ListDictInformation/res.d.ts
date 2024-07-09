export interface ListDictInformationResponse {
    /**
     * 请求ID。
     * @example `7C4334EA-D22B-48BD-AE28-08EE68******`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 词库类型，支持以下两种类型：
         * - MAIN：主分词词库
         * - STOP：停用词库
         * @example `STOP`
         */
        type: string;
        /**
         * 词典文件大小，单位：Byte。
         * @example `2202301`
         */
        fileSize: number;
        /**
         * OSS开放存储文件详情。
         */
        ossObject: {
            /**
             * 词典文件在OSS Bucket中的存储路径。
             * @example `oss/dict_0*.dic`
             */
            key: string;
            /**
             * OSS存储文件所在的空间（Bucket）名称。
             * @example `es-osstest*`
             */
            bucketName: string;
            /**
             * OSS存储文件的MD5校验码ETag（大写）。
             * @example `2ABAB5E70BBF631145647F6BE533****`
             */
            etag: string;
        };
    };
}
