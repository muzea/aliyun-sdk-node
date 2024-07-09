export interface GetUploadUrlRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 空间 id
         * @example `1`
         */
        drive_id: string;
        /**
         * 分享id
         * @example `7JQX1FswpQ8`
         */
        share_id: string;
        /**
         * 文件id
         * @example `5d5b846942cf94fa72324c14a4bda34e81da635d`
         */
        file_id: string;
        /**
         * 上传 id
         * @example `10166D06127B413BA1EC8ABB1144D111`
         */
        upload_id: string;
        /**
         * 分片信息列表
         */
        part_info_list: {
            /**
             * 段编号
             * @example `1`
             */
            part_number: number;
            /**
             * 该分片前所有数据的SHA1上下文，该字段只在多分片并发上传的模式下有效
             */
            parallel_sha1_ctx: {
                /**
                 * 该分片前所有数据的SHA1上下文的第1-5个32位变量，该字段只在多分片并发上传的模式下有效
                 */
                h: number[];
                /**
                 * 到上一个数据块为止的总长度，字节，需要为64的倍数，该字段只在多分片并发上传的模式下有效
                 * @example `10240`
                 */
                part_offset: number;
            };
            content_md5: string;
            content_type: string;
            parallel_sha256_ctx: {
                h: number[];
                part_offset: number;
            };
        }[];
    };
}
