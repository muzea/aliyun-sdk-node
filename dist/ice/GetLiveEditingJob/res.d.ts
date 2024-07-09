export interface GetLiveEditingJobResponse {
    /**
     * 请求ID
     * @example `****36-3C1E-4417-BDB2-1E034F****`
     */
    RequestId: string;
    /**
     * 直播剪辑任务
     */
    LiveEditingJob: {
        /**
         * 直播剪辑任务ID
         * @example `****cdb3e74639973036bc84****`
         */
        JobId: string;
        /**
         * 直播剪辑工程ID
         * @example `****fddd7748b58bf1d47e95****`
         */
        ProjectId: string;
        /**
         * 直播剪辑作业状态，取值可能为如下值：  -Init （初始状态）  -Queuing（排队中）  -Processing（处理中）  -Success（成功）  -Failed（失败）
         * @example `Success`
         */
        Status: string;
        /**
         * 剪辑片段列表
         * @example `[{\"StartTime\": \" 2021-06-21T08:01:00Z\",  \"EndTime\": \" 2021-06-21T08:03:00Z\" }]`
         */
        Clips: string;
        /**
         * 用户数据
         * @example `{"key": "value'}`
         */
        UserData: string;
        /**
         * 直播剪辑作业创建时间，格式为utc时间。
         * @example `2020-12-23T13:33:40Z`
         */
        CreationTime: string;
        /**
         * 直播剪辑作业修改时间，格式为utc时间。
         * @example `2020-12-23T13:33:49Z`
         */
        ModifiedTime: string;
        /**
         * 直播剪辑作业完成时间，格式为utc时间。
         * @example `2020-12-23T13:33:52Z`
         */
        CompleteTime: string;
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
         * 剪辑合成作业错误码
         * 注：作业失败时关注该字段
         * @example `InvalidParameter`
         */
        Code: string;
        /**
         * 剪辑合成作业错误信息
         * 注：作业失败时关注该字段
         * @example `The specific parameter LiveStreamConfig is not valid.`
         */
        Message: string;
        /**
         * 直播剪辑配置
         */
        LiveStreamConfig: {
            /**
             * 播流所属应用名称
             * @example `app`
             */
            AppName: string;
            /**
             * 播流所属域名
             * @example `domain.com`
             */
            DomainName: string;
            /**
             * 播流所属流名
             * @example `streamName`
             */
            StreamName: string;
        };
        /**
         * 直播剪辑合成配置
         */
        MediaProduceConfig: {
            /**
             * 剪辑模式，默认Accurate
             * @example `Accurate`
             */
            Mode: string;
        };
        /**
         * 输出成片的存储配置
         */
        OutputMediaConfig: {
            /**
             * 输出成片的文件地址
             * @example `https://testice-testbucket.oss-cn-shanghai.aliyuncs.com/test.mp4`
             */
            MediaURL: string;
            /**
             * 当 OutputMediaTarget 的目标为 vod-media 时， 指定 storage location 来存储媒资到 VOD; storage location 是 VOD 中的文件存储位置， 不包含 http:// 的前缀， 如：outin-xxxxxx.oss-cn-shanghai.aliyuncs.com
             * @example `outin-xxxxxx.oss-cn-shanghai.aliyuncs.com`
             */
            StorageLocation: string;
            /**
             * 当 OutputMediaTarget 的目标为 vod-media 时，指定 fileName（包含文件后缀，不含路径）作为输出文件名
             * @example `test.mp4`
             */
            FileName: string;
            /**
             * 输出成品的宽。可以不填，默认值是多个素材的最大宽
             * @example `640`
             */
            Width: number;
            /**
             * 输出成品的高。可以不填，默认值是多个素材的最大高
             * @example `480`
             */
            Height: number;
            /**
             * 输出成品的码率，单位为Kbps。可以不填，默认值是多个素材的最高码率
             * @example `1000`
             */
            Bitrate: number;
            /**
             * 合成成片输出到vod，指定vod转码模板组。如不需要VOD转码，请填写 "VOD_NO_TRANSCODE".
             * @example `VOD_NO_TRANSCODE`
             */
            VodTemplateGroupId: string;
        };
    };
}
