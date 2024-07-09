export interface ListPublicMediaBasicInfosResponse {
    /**
     * 请求ID。
     * @example `******B7-7F87-4792-BFE9-63CD21******`
     */
    RequestId: string;
    /**
     * 符合要求的媒资总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 符合要求的媒资集合。
     */
    MediaInfos: {
        /**
         * 媒资ID。
         * @example `****019b82e24b37a1c2958dec38****`
         */
        MediaId: string;
        /**
         * 媒资基础信息。
         */
        MediaBasicInfo: {
            /**
             * 媒资ID。
             * @example `****019b82e24b37a1c2958dec38****`
             */
            MediaId: string;
            /**
             * 待注册的媒资在相应系统中的地址。
             * @example `https://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4`
             */
            InputURL: string;
            /**
             * 媒资媒体类型。
             * @example `video`
             */
            MediaType: string;
            /**
             * 媒资业务类型。
             * @example `general`
             */
            BusinessType: string;
            /**
             * 来源。
             * @example `oss`
             */
            Source: string;
            /**
             * 标题。
             * @example `title标题`
             */
            Title: string;
            /**
             * 内容描述。
             * @example `description`
             */
            Description: string;
            /**
             * 分类。
             * @example `video`
             */
            Category: string;
            /**
             * 标签。
             * @example `sticker-daily`
             */
            MediaTags: string;
            /**
             * 封面地址。
             * @example `http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.png?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>`
             */
            CoverURL: string;
            /**
             * 用户数据。
             * @example `userData`
             */
            UserData: string;
            /**
             * 截图。
             * @example `null`
             */
            Snapshots: string;
            /**
             * 资源状态。
             * @example `Normal`
             */
            Status: string;
            /**
             * 转码状态。
             * @example `Init`
             */
            TranscodeStatus: string;
            /**
             * 媒资创建时间。
             * @example `2021-01-08T16:52:04Z`
             */
            CreateTime: string;
            /**
             * 媒资修改时间。
             * @example `2021-01-08T16:52:04Z`
             */
            ModifiedTime: string;
            /**
             * 媒资删除时间。
             * @example `2021-01-08T16:52:04Z`
             */
            DeletedTime: string;
        };
        /**
         * 文件信息。
         */
        FileInfoList: {
            /**
             * 文件基础信息，包含时长，大小等。
             */
            FileBasicInfo: {
                /**
                 * 文件名。
                 * @example `example.mp4`
                 */
                FileName: string;
                /**
                 * 文件状态。
                 * @example `Normal`
                 */
                FileStatus: string;
                /**
                 * 文件类型。
                 * @example `source_file`
                 */
                FileType: string;
                /**
                 * 文件大小（字节）。
                 * @example `338990717`
                 */
                FileSize: string;
                /**
                 * 文件OSS地址。
                 * @example `http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>`
                 */
                FileUrl: string;
                /**
                 * 文件存储区域。
                 * @example `cn-shanghai`
                 */
                Region: string;
                /**
                 * 封装格式。
                 * @example `mov,mp4,m4a,3gp,3g2,mj2`
                 */
                FormatName: string;
                /**
                 * 时长。
                 * @example `10.040000`
                 */
                Duration: string;
                /**
                 * 码率。
                 * @example `270112.12`
                 */
                Bitrate: string;
                /**
                 * 宽。
                 * @example `1920`
                 */
                Width: string;
                /**
                 * 高。
                 * @example `1080`
                 */
                Height: string;
            };
        }[];
    }[];
    /**
     * 用来表示当前调用返回读取到的位置，空代表数据已经读取完毕。
     * @example `8EqYpQbZ6Eh7+Zz8DxVYoQ==`
     */
    NextToken: string;
    /**
     * 本次请求所返回的最大记录条数。
     * @example `2`
     */
    MaxResults: number;
}
