export interface CreateEditingProjectResponse {
    /**
     * Id of the request
     * @example `******3B-0E1A-586A-AC29-742247******`
     */
    RequestId: string;
    /**
     * 云剪辑工程
     */
    Project: {
        /**
         * 云剪辑工程ID
         * @example `****01bf24bf41c78b2754cb3187****`
         */
        ProjectId: string;
        /**
         * 云剪辑工程标题
         * @example `example_title`
         */
        Title: string;
        /**
         * 工程描述
         * @example `example_description`
         */
        Description: string;
        /**
         * 云剪辑工程时间线，Json格式。具体结构定义参见配置[TimeLine](https://help.aliyun.com/document_detail/198823.htm?spm=a2c4g.11186623.2.9.90dc653dF67srN#topic-2024662)说明。当该字段为空时，则创建一个空的时间线，且云剪辑工程的总时长为0。
         * @example `{"VideoTracks":[{"VideoTrackClips":[{"MediaId":"****4d7cf14dc7b83b0e801c****"},{"MediaId":"****4d7cf14dc7b83b0e801c****"}]}]}`
         */
        Timeline: string;
        /**
         * 模板Id
         * @example `****96e8864746a0b6f3****`
         */
        TemplateId: string;
        /**
         * 模板素材参数
         * @example `见模板使用文档`
         */
        ClipsParam: string;
        /**
         * 云剪辑工程封面
         * @example `http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.png?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>`
         */
        CoverURL: string;
        /**
         * 云剪辑工程状态。
         * 所有云剪辑工程状态列表：
         * \-1:Draft
         * \-2:Editing
         * \-3:Producing
         * \-4:Produced
         * \-5:ProduceFailed
         * \-7:Deleted
         * @example `2`
         */
        Status: number;
        /**
         * 云剪辑状态名称，对应状态列表中状态名称。
         * @example `Editing`
         */
        StatusName: string;
        /**
         * 云剪辑工程创建时间
         * @example `2021-01-08T16:52:07Z`
         */
        CreateTime: string;
        /**
         * 云剪辑工程编辑时间
         * @example `2021-01-08T16:52:07Z`
         */
        ModifiedTime: string;
        /**
         * 云剪辑工程时长
         * @example `3.4200000`
         */
        Duration: number;
        /**
         * 云剪辑工程创建方式
         * \-OpenAPI
         * \-AliyunConsole
         * \-WebSDK
         * \-LiveEditingOpenAPI
         * \-LiveEditingConsole
         * @example `WebSDK`
         */
        CreateSource: string;
        /**
         * 云剪辑工程编辑方式
         * \-OpenAPI
         * \-AliyunConsole
         * \-WebSDK
         * \-LiveEditingOpenAPI
         * \-LiveEditingConsole
         * @example `WebSDK`
         */
        ModifiedSource: string;
        /**
         * 云剪辑工程模版类型
         * \-Timeline
         * \-VETemplate
         * @example `Timeline`
         */
        TemplateType: string;
        /**
         * 工程业务配置，一般剪辑工程可忽略
         * @example `{ "OutputMediaConfig" :    { "StorageLocation": "test-bucket.oss-cn-shanghai.aliyuncs.com", "Path": "test-path"   }, "OutputMediaTarget": "oss-object", "ReservationTime": "2021-06-21T08:05:00Z" }`
         */
        BusinessConfig: string;
        /**
         * 剪辑工程类型，默认EditingProject
         * \- EditingProject: 普通剪辑工程
         * \- LiveEditingProject: 直播剪辑工程
         * @example `LiveEditingProject`
         */
        ProjectType: string;
        /**
         * 工程业务状态，一般剪辑工程可忽略
         * - 预约中：Reserving
         * - 预约取消：ReservationCanceled
         * - 直播中：BroadCasting
         * - 加载失败：LoadingFailed
         * - 直播结束：LiveFinished
         * @example `Reserving`
         */
        BusinessStatus: string;
    };
}
