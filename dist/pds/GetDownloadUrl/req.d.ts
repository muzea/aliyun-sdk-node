export interface GetDownloadUrlRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 分享id。
         * 如果通过分享操作文件，请携带`x-share-token` header鉴权并传递此字段，此时`drive_id`无效。否则请使用`aksk`或者`access_token`方式鉴权，并传递`drive_id`字段。
         * `share_id`和`drive_id`两者必须有一个字段赋值。
         * @example `7JQX1FswpQ8`
         */
        share_id: string;
        /**
         * 空间 id
         * @example `1`
         */
        drive_id: string;
        /**
         * 文件 id
         * @example `9520943DC264`
         */
        file_id: string;
        /**
         * 文件名，最长 1024 字符
         * @example `1.txt`
         */
        file_name: string;
        /**
         * 下载地址过期时间，单位为秒，最长 115200 秒，默认为 900 秒
         * @example `100`
         */
        expire_sec: number;
    };
}
