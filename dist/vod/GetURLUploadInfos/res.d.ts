export interface GetURLUploadInfosResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-D7393642CA58****`
     */
    RequestId: string;
    /**
     * 不存在的ID或URL列表。
     */
    NonExists: string[];
    /**
     * URL上传信息列表。具体上传名称及描述，请参见[URLUploadInfo：URL上传信息](~~52839~~)。
     */
    URLUploadInfoList: {
        /**
         * 创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2019-01-01T01:01:01Z`
         */
        CreationTime: string;
        /**
         * URL拉取任务状态。具体的拉取状态取值及说明，请参见[Status：URL上传任务状态](~~52839~~)。
         * @example `SUCCESS`
         */
        Status: string;
        /**
         * 错误信息。
         * @example `error_message`
         */
        ErrorMessage: string;
        /**
         * 错误码。
         * @example `200`
         */
        ErrorCode: string;
        /**
         * 完成时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2019-01-01T01:11:01Z`
         */
        CompleteTime: string;
        /**
         * 上传任务ID。
         * @example `86c1925fba0****`
         */
        JobId: string;
        /**
         * 自定义设置。为JSON字符串。更多信息，请参见[UserData](~~86952~~)。
         * @example `{"MessageCallback":"{"CallbackURL":"http://example.aliyundoc.com"}", "Extend":"{"localId":"***", "test":"www"}"}`
         */
        UserData: string;
        /**
         * 上传视频源文件URL。
         * > 最多可以返回100条记录。
         * @example `http://****.mp4`
         */
        UploadURL: string;
        /**
         * 上传视频ID。
         * @example `93ab850b4f6f54b6e91d24d81d4****`
         */
        MediaId: string;
        /**
         * 文件大小。单位：字节。
         * @example `24`
         */
        FileSize: string;
    }[];
}
