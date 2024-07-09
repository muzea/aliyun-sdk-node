export interface GenerateProblemPictureLinkResponse {
    /**
     * requestId
     * @example `c26f36de-1ec8-496a-a828-88067879ef81`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 图片链接列表
         */
        links: {
            /**
             * oss key
             * @example `problem/xxxxxxxxxx-484d-4242-b9cf-xxxxxxxxxx`
             */
            key: string;
            /**
             * 图片链接
             * @example `http://xxxx-xxxx-bucket.oss-cn-xxxx.aliyuncs.com/pxxxx/38xxxxd-4789-4242-b9cfxxxxxxxxc6?Expires=1xxxxxxxxxx7&OSSAccessKeyId=xxxxxxxxxxxxxx7&Signature=xxxxxxxxxxxxxxxxxxxxxx`
             */
            link: string;
        }[];
    };
}
