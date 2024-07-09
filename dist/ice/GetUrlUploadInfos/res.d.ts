export interface GetUrlUploadInfosResponse {
    /**
     * 请求ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 不存在的ID或URL列表。
     */
    NonExists: string[];
    /**
     * URL上传信息详情。
     */
    URLUploadInfoList: {
        /**
         * 创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2021-11-07T10:03:37Z`
         */
        CreationTime: string;
        /**
         * URL拉取任务状态。具体的拉取状态取值及说明，请参见[Status：URL上传任务状态](~~52839~~)。
         * @example `Normal`
         */
        Status: string;
        /**
         * 错误信息。
         * @example `Success`
         */
        ErrorMessage: string;
        /**
         * 错误码。
         * @example `200`
         */
        ErrorCode: string;
        /**
         * 完成时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2021-11-26 21:47:37`
         */
        CompleteTime: string;
        /**
         * 上传任务ID。
         * @example `3829500c0fef429fa4ec1680b122d***`
         */
        JobId: string;
        /**
         * 自定义设置。为JSON字符串。
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
         * @example `5014ca70f08171ecbf940764a0fd6***`
         */
        MediaId: string;
        /**
         * 文件大小。单位：字节。
         * @example `64610`
         */
        FileSize: string;
    }[];
}
