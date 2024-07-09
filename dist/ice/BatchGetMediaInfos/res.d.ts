export interface BatchGetMediaInfosResponse {
    /**
     * 请求ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 符合要求的媒资集合
     */
    MediaInfos: {
        /**
         * 媒资ID
         * @example `******c48fb37407365d4f2cd8******`
         */
        MediaId: string;
        /**
         * 媒资基础信息
         */
        MediaBasicInfo: {
            /**
             * MediaId
             * @example `******c48fb37407365d4f2cd8******`
             */
            MediaId: string;
            /**
             * 待注册的媒资在相应系统中的地址
             * @example `https://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4`
             */
            InputURL: string;
            /**
             * 媒资媒体类型
             * \-Image
             * \-Video
             * \-Audio
             * \-Text
             * @example `video`
             */
            MediaType: string;
            /**
             * 媒资业务类型
             * @example `general`
             */
            BusinessType: string;
            /**
             * 来源
             * \-OSS
             * \-vod
             * @example `oss`
             */
            Source: string;
            /**
             * 标题
             * @example `标题`
             */
            Title: string;
            /**
             * 内容描述
             * @example `描述`
             */
            Description: string;
            /**
             * 分类
             * @example `分类`
             */
            Category: string;
            /**
             * 标签
             * @example `标签,tag1`
             */
            MediaTags: string;
            /**
             * 封面地址
             * @example `http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.png?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>`
             */
            CoverURL: string;
            /**
             * 用户数据
             * @example `userDataTest`
             */
            UserData: string;
            /**
             * 截图
             * @example `[{"bucket":"example-bucket","count":"3","iceJobId":"******f48f0e4154976b2b8c45******","location":"oss-cn-beijing","snapshotRegular":"example.jpg","templateId":"******e6a6440b29eb60bd7c******"}]`
             */
            Snapshots: string;
            /**
             * 资源状态
             * @example `Normal`
             */
            Status: string;
            /**
             * 转码状态
             * @example `Init`
             */
            TranscodeStatus: string;
            /**
             * 媒资创建时间
             * @example `2020-12-26T04:11:10Z`
             */
            CreateTime: string;
            /**
             * 媒资修改时间
             * @example `2020-12-26T04:11:12Z`
             */
            ModifiedTime: string;
            /**
             * 媒资删除时间
             * @example `2020-12-26T04:11:10Z`
             */
            DeletedTime: string;
            /**
             * 雪碧图
             * @example `[{"bucket":"example-bucket","count":"32","iceJobId":"******83ec44d58b2069def2e******","location":"oss-cn-shanghai","snapshotRegular":"example/example-{Count}.jpg","spriteRegular":"example/example-{TileCount}.jpg","templateId":"******e438b14ff39293eaec25******","tileCount":"1"}]`
             */
            SpriteImages: string;
        };
        /**
         * FileInfos
         */
        FileInfoList: {
            /**
             * 文件基础信息，包含时长，大小等
             */
            FileBasicInfo: {
                /**
                 * 文件名
                 * @example `example`
                 */
                FileName: string;
                /**
                 * 文件状态
                 * @example `Normal`
                 */
                FileStatus: string;
                /**
                 * 文件类型
                 * @example `source_file`
                 */
                FileType: string;
                /**
                 * 文件大小（字节）
                 * @example `30611502`
                 */
                FileSize: string;
                /**
                 * 文件OSS地址
                 * @example `http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>`
                 */
                FileUrl: string;
                /**
                 * 文件存储区域
                 * @example `cn-shanghai`
                 */
                Region: string;
                /**
                 * 封装格式
                 * @example `mov,mp4,m4a,3gp,3g2,mj2`
                 */
                FormatName: string;
                /**
                 * 时长
                 * @example `200`
                 */
                Duration: string;
                /**
                 * 码率
                 * @example `1132.68`
                 */
                Bitrate: string;
                /**
                 * 宽
                 * @example `1920`
                 */
                Width: string;
                /**
                 * 高
                 * @example `1080`
                 */
                Height: string;
            };
        }[];
    }[];
}
