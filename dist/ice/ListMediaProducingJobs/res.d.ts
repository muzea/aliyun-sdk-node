export interface ListMediaProducingJobsResponse {
    /**
     * Id of the request
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 剪辑任务列表
     */
    MediaProducingJobList: {
        /**
         * 云剪辑任务id
         * @example `******8750b54e3c976a47da6f******`
         */
        JobId: string;
        /**
         * 云剪辑工程id
         * @example `******faa3b542f5a6135217e3******`
         */
        ProjectId: string;
        /**
         * 输出成品的资源id
         * @example `0ce4ea70f52471edab61f7e7d6786302`
         */
        MediaId: string;
        /**
         * 输出成品的资源文件URL
         * @example `http://your-bucket.oss-cn-shanghai.aliyuncs.com/your-video.mp4`
         */
        MediaURL: string;
        /**
         * 云剪辑模板ID
         * @example `cb786a39c5d44cecb23d8c864facffc1`
         */
        TemplateId: string;
        /**
         * 模板素材参数
         * @example `{"Text1":"text","Text0":"text","Media1":"mediaId","Media0":"mediaId"}`
         */
        ClipsParam: string;
        /**
         * 输出成品的时长，单位：秒。
         * @example `15.5`
         */
        Duration: number;
        /**
         * 任务创建时间。格式为：yyyy-MM-ddTHH:mm:ssZ 。
         * @example `2022-03-21T16:40:00Z`
         */
        CreateTime: string;
        /**
         * 剪辑合成作业完成时间，格式为utc时间。
         * @example `2022-03-21T16:40:30Z`
         */
        CompleteTime: string;
        /**
         * 最后更新时间。
         * @example `2022-03-21T16:41:00Z`
         */
        ModifiedTime: string;
        /**
         * 剪辑合成作业状态
         * @example `Sucess`
         */
        Status: string;
        /**
         * 剪辑合成作业失败错误码
         * @example `Success`
         */
        Code: string;
        /**
         * 剪辑合成作业错误信息注：作业失败时关注该字段
         * @example `The resource operated InputFile is bad`
         */
        Message: string;
        /**
         * 用户自定义设置
         * @example `{"key":"value"}`
         */
        UserData: string;
    }[];
    /**
     * 本次请求所返回的最大记录条数。
     * 最大值：100，默认值：10
     * @example `100`
     */
    MaxResults: string;
    /**
     * 当前开始读取的位置
     * @example `8EqYpQbZ6Eh7+Zz8DxVYoQ==`
     */
    NextToken: string;
}
