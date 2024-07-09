export interface GenerateProblemPictureUploadSignResponse {
    /**
     * requestId
     * @example `e2d4306a-bf4d-4345-9ae6-158223c85dbd`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * oss bucket name
         * @example `xxxx-xxxx-xxxx`
         */
        bucketName: string;
        /**
         * oss key
         * @example `problem/xxxxxxxxxxxxxxxx1-b3185d529277`
         */
        key: string;
        /**
         * policy
         * @example `eyJleHBpcmF0a0p0IjoiMjAyMS0wNy0xM1QwNDowOTo0NS4yODJaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwXSxbInN0YXJ0cy13aXRoIiwiJGtleSIsInByb2JsZW0iXV19`
         */
        policy: string;
        /**
         * signature
         * @example `SHqvIkwUNQd0o0rvklir2K8U+ts=`
         */
        signature: string;
        /**
         * url
         * @example `https://xxx-xxx-bucket.oss-cn-shanghai.aliyuncs.com`
         */
        url: string;
        /**
         * ossaccessKeyId
         * @example `XXXXXXXH8GMy1iLRCno7`
         */
        accessKeyId: string;
    };
}
