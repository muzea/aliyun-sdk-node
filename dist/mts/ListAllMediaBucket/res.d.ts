export interface ListAllMediaBucketResponse {
    /**
     * 请求ID。
     * @example `79760D91-D3CF-4165-****-B7E2836EF62A`
     */
    RequestId: string;
    /**
     * 查询下一页标识。
     * @example `P2Zqo1PLGhZdygo-ajSsjUX5zrBHCgXy6j4hEvv****`
     */
    NextPageToken: string;
    MediaBucketList: {
        /**
         * 媒体Bucket列表。
         */
        MediaBucket: {
            /**
             * 媒体Bucket类型。可取值：
             * - Input：输入文件OSS Bucket。
             * - Output：输出文件OSS Bucket。
             * @example `Input`
             */
            Type: string;
            /**
             * 媒体Bucket名称。
             * @example `example-bucket-****`
             */
            Bucket: string;
            /**
             * OSS防盗链设置。更多信息，请参见[防盗链](~~31869~~)。
             * @example `http://www.example.com`
             */
            Referer: string;
        }[];
    };
}
