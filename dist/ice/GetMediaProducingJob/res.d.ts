export interface GetMediaProducingJobResponse {
    /**
     * 请求ID
     * @example `****83B7-7F87-4792-BFE9-63CD2137****`
     */
    RequestId: string;
    /**
     * 云剪辑工程信息
     */
    MediaProducingJob: {
        /**
         * 剪辑合成作业Id
         * @example `****cdb3e74639973036bc84****`
         */
        JobId: string;
        /**
         * 云剪辑工程Id
         * @example `****fddd7748b58bf1d47e95****`
         */
        ProjectId: string;
        /**
         * 输出成品的资源Id
         * @example `****0cc6ba49eab379332c5b****`
         */
        MediaId: string;
        /**
         * 输出成品的资源文件URL
         * @example `http://example-bucket.oss-cn-shanghai.aliyuncs.com/example2.mp4`
         */
        MediaURL: string;
        /**
         * 剪辑合成作业对应的时间线
         * @example `{"VideoTracks":[{"VideoTrackClips":[{"MediaId":"****4d7cf14dc7b83b0e801c****"},{"MediaId":"****4d7cf14dc7b83b0e801c****"}]}]}`
         */
        Timeline: string;
        /**
         * 剪辑合成作业对应的模板Id
         * @example `****6e76134d739cc3e85d3e****`
         */
        TemplateId: string;
        /**
         * 剪辑合成作业对应的模板参数
         * @example `{"VideoArray":["****05512043f49f697f7425****","****05512043f49f697f7425****","****05512043f49f697f7425****"]}`
         */
        ClipsParam: string;
        /**
         * 输出成品的时长
         * 注：当合成任务成功且输出成品的类型为音视频时，该字段有值。
         * @example `30.500000`
         */
        Duration: number;
        /**
         * 剪辑合成作业创建时间，格式为utc时间。
         * 格式为："YYYY-MM-DD'T'hh:mm:ss'Z'"。
         * @example `2020-12-23T13:33:40Z`
         */
        CreateTime: string;
        /**
         * 剪辑合成作业完成时间，格式为utc时间。
         * 格式为："YYYY-MM-DD'T'hh:mm:ss'Z'"。
         * @example `2020-12-23T13:33:52Z`
         */
        CompleteTime: string;
        /**
         * 剪辑合成作业修改时间，格式为utc时间。
         * 格式为："YYYY-MM-DD'T'hh:mm:ss'Z'"。
         * @example `2020-12-23T13:33:49Z`
         */
        ModifiedTime: string;
        /**
         * 剪辑合成作业状态，取值可能为如下值：
         * \-Init （初始状态）
         * \-Queuing（排队中）
         * \-Processing（处理中）
         * \-Success（成功）
         * \-Failed（失败）
         * @example `Failed`
         */
        Status: string;
        /**
         * 剪辑合成作业错误码
         * 注：作业失败时关注该字段
         * @example `ExceededMaximumValue`
         */
        Code: string;
        /**
         * 剪辑合成作业错误信息
         * 注：作业失败时关注该字段
         * @example `The specified "Width_Height" has exceeded maximum value.`
         */
        Message: string;
        /**
         * 如果剪辑任务的成片输出到VOD，成片会注册成一个VOD的媒资，vodMediaId 即该媒资在VOD的媒资ID
         * @example `****332c5b0cc6ba49eab379****`
         */
        VodMediaId: string;
        /**
         * 用户自定义设置，JSON格式。
         * @example `{"NotifyAddress":"http://xx.xx.xxx","Key":"Valuexxx"}`
         */
        UserData: string;
        /**
         * 当该剪辑任务是批量智能一键成片的子任务，返回子任务用到的口播文案、标题等素材信息。
         * @example `{"Title": "标题", "SpeechText": "批量智能一键成片口播文案"}`
         */
        SubJobMaterials: string;
    };
}
