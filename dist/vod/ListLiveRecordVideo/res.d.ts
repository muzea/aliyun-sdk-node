export interface ListLiveRecordVideoResponse {
    /**
     * 视频总条数。
     * @example `123`
     */
    Total: number;
    /**
     * 请求ID。
     * @example `25818875-5F78-4A13-****-D7393642CA58`
     */
    RequestId: string;
    LiveRecordVideoList: {
        /**
         * 视频列表。
         */
        LiveRecordVideo: {
            /**
             * App名称。
             * @example `testApp`
             */
            AppName: string;
            /**
             * 播单ID。
             * @example `****`
             */
            PlaylistId: string;
            /**
             * 直播流名称。
             * @example `live-test`
             */
            StreamName: string;
            /**
             * 录制结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2017-12-08T08:44:56Z`
             */
            RecordEndTime: string;
            /**
             * 录制开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2017-12-08T07:40:56Z`
             */
            RecordStartTime: string;
            /**
             * 域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 视频信息。
             */
            Video: {
                /**
                 * 视频创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
                 * @example `2017-12-08T07:40:56Z`
                 */
                CreationTime: string;
                /**
                 * 视频状态。取值：
                 * - **Uploading**：上传中。
                 * - **UploadFail**：上传失败。
                 * - **UploadSuccess**：上传完成。
                 * - **Transcoding**：转码中。
                 * - **TranscodeFail**：转码失败。
                 * - **Blocked**：屏蔽。
                 * - **Normal**：正常。
                 * @example `Normal`
                 */
                Status: string;
                /**
                 * 视频分类ID。
                 * @example `78`
                 */
                CateId: number;
                /**
                 * 视频ID。
                 * @example `93ab850b4f6f*****54b6e91d24d81d4`
                 */
                VideoId: string;
                /**
                 * 视频标签。多个标签使用英文逗号（,）分隔。
                 * @example `标签1, 标签2`
                 */
                Tags: string;
                /**
                 * 视频分类名称。
                 * @example `分类名`
                 */
                CateName: string;
                /**
                 * 视频描述。
                 * @example `阿里云VOD视频描述`
                 */
                Description: string;
                /**
                 * 视频源文件大小。单位：字节。
                 * @example `10897890`
                 */
                Size: number;
                /**
                 * 视频封面URL。
                 * @example `https://image.example.com/coversample.jpg`
                 */
                CoverURL: string;
                /**
                 * 视频转码时使用的转码模板组ID。
                 * @example `1`
                 */
                TemplateGroupId: string;
                /**
                 * 视频时长。单位：秒。
                 * @example `135.6`
                 */
                Duration: number;
                /**
                 * 视频标题。
                 * @example `阿里云VOD视频标题`
                 */
                Title: string;
                /**
                 * 视频更新时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
                 * @example `2017-12-08T09:40:56Z`
                 */
                ModifyTime: string;
                Snapshots: {
                    /**
                     * 视频截图URL数组。
                     */
                    Snapshot: string[];
                };
            };
        }[];
    };
}
