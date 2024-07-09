export interface UpdateOssExternalStoreRequest {
    /**
     * project 名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 外部存储的名称。
     * @example `test-oss-store`
     */
    "externalStoreName": string;
    /**
     * 请求结构体。
     * @example `test-oss-store`
     */
    "body": {
        /**
         * 外部存储的名称。
         * @example `test-oss-store`
         */
        externalStoreName: string;
        /**
         * 外部存储的类型。这里固定为oss。
         * @example `oss`
         */
        storeType: string;
        /**
         * 外部存储的参数。
         */
        parameter: {
            /**
             * 您的AccessKey ID。
             * @example `LTAI5tFsHGGeYry*****1Sz`
             */
            accessid: string;
            /**
             * 您的AccessKey Secret。
             * @example `GyviCLDVHkHrOztdkxuE6******Rp6`
             */
            accesskey: string;
            /**
             * OSS的Endpoint访问网址。
             * @example `oss-cn-hangzhou.aliyuncs.com`
             */
            endpoint: string;
            /**
             * OSS Bucket名称。
             * @example `my-bucket`
             */
            bucket: string;
            /**
             * 关联的OSS文件名称。
             */
            objects: string[];
            /**
             * 关联的字段列表。
             */
            columns: {
                /**
                 * 字段名称。
                 * @example `test`
                 */
                name: string;
                /**
                 * 字段类型。
                 * @example `varchar`
                 */
                type: string;
            }[];
        };
    };
}
