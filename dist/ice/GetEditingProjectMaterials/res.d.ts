export interface GetEditingProjectMaterialsResponse {
    /**
     * 请求ID。
     * @example `******89-C21D-4B78-AE24-3788B8******`
     */
    RequestId: string;
    /**
     * 项目ID号。
     * @example `*****67ae06542b9b93e0d1c387*****`
     */
    ProjectId: string;
    /**
     * 符合要求的媒资集合。
     */
    MediaInfos: {
        /**
         * 媒资ID。
         * @example `*****64623a94eca8516569c8fe*****`
         */
        MediaId: string;
        /**
         * 媒资基础信息。
         */
        MediaBasicInfo: {
            /**
             * 媒资ID。
             * @example `*****64623a94eca8516569c8f*****`
             */
            MediaId: string;
            /**
             * 待注册的媒资在相应系统中的地址。
             * @example `http://bucket.oss-cn-shanghai.aliyuncs.com/file.mp4`
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
             * @example `file.mp4`
             */
            Title: string;
            /**
             * 内容描述。
             * @example `sample_description`
             */
            Description: string;
            /**
             * 分类。
             * @example `video`
             */
            Category: string;
            /**
             * 标签。
             * @example `标签,tag1`
             */
            MediaTags: string;
            /**
             * 封面地址。
             * @example `http://sample-bucket.oss-cn-shanghai.aliyuncs.com/sample-corver.jpg?Expires=1628670610&OSSAccessKeyId=AK&Signature=signature`
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
             * @example `2020-12-26T04:11:08Z`
             */
            CreateTime: string;
            /**
             * 媒资修改时间。
             * @example `2020-12-26T04:11:08Z`
             */
            ModifiedTime: string;
            /**
             * 媒资删除时间。
             * @example `2020-12-26T04:11:08Z`
             */
            DeletedTime: string;
            /**
             * 雪碧图。
             * @example `null`
             */
            SpriteImages: string;
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
                 * @example `30611502`
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
                 * @example `216.206667`
                 */
                Duration: string;
                /**
                 * 码率。
                 * @example `1132.68`
                 */
                Bitrate: string;
                /**
                 * 宽。
                 * @example `960`
                 */
                Width: string;
                /**
                 * 高。
                 * @example `540`
                 */
                Height: string;
            };
        }[];
    }[];
    /**
     * 直播流关联素材。
     */
    LiveMaterials: {
        /**
         * 直播播流应用名。
         * @example `testrecord`
         */
        AppName: string;
        /**
         * 直播播流流名。
         * @example `testrecord`
         */
        StreamName: string;
        /**
         * 直播播流域名。
         * @example `test.alivecdn.com`
         */
        DomainName: string;
        /**
         * 直播播流地址。
         * @example `rtmp://test.alivecdn.com/testrecord/teststream`
         */
        LiveUrl: string;
    }[];
    /**
     * 剪辑工程关联素材。直播工程在直播结束后会关联到一个普通剪辑工程。
     * @example `*****9b145c5cafc2e057304fcd*****`
     */
    ProjectMaterials: string[];
}
