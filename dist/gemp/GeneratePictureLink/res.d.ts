export interface GeneratePictureLinkResponse {
    /**
     * Id of the request
     * @example `xxxxxx`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * array
         */
        links: {
            /**
             * oss key
             * @example `problem/38b2a36d-484d-4242-b9cf-d243e53a82c6`
             */
            key: string;
            /**
             * url
             * @example `http://gam-objects-bucket.oss-cn-shanghai.aliyuncs.com/problem/38b2a36d-484d-4242-b9cf-d243e53a82c6?Expires=1625662477&OSSAccessKeyId=LTAI5tEoRVPw8GMy1iLRCno7&Signature=1NFnt%2BnudD%2F%2BHVc31b6v5%2FFxoqg%3D`
             */
            link: string;
        }[];
    };
}
