export interface GeneratePictureUploadSignResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `e2d4306a-bf4d-4345-9ae6-158223c85dbd`
     */
    requestId: string;
    /**
     * 数据内容
     */
    data: {
        /**
         * OSS Bucket名称
         * @example `gam-objects-bucket`
         */
        bucketName: string;
        /**
         * 策略名称
         * @example `eyJleHBpcmF0aW9uIjoiMjAyMS0wNy0xM1QwNDowOTo0NS4yODJaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwXSxbInN0YXJ0cy13aXRoIiwiJGtleSIsInByb2JsZW0iXV19`
         */
        policy: string;
        /**
         * 签名
         * @example `SHqvIkwUNQd8Hervklir*****`
         */
        signature: string;
        /**
         * Access Key ID
         * @example `LTAI1tEoRVPw8GMy1iLRC*****`
         */
        accessKeyId: string;
        /**
         * Bucket地址
         * @example `https://*****-bucket.oss-cn-shanghai.aliyuncs.com`
         */
        url: string;
        /**
         * 图片列表
         */
        files: {
            /**
             * 图片名称
             * @example `文件A`
             */
            fileName: string;
            /**
             * 图片类型
             * @example `JPG`
             */
            fileType: string;
            /**
             * 图片大小
             * @example `100`
             */
            fileSize: number;
            /**
             * 图片唯一标识
             * @example `problem/25a2316c-b08d-41a5-9f41-*****`
             */
            key: string;
        }[];
    };
}
