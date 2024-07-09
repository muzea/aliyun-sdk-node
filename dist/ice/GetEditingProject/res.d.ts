export interface GetEditingProjectResponse {
    /**
     * 请求ID。
     * @example `****63E8B7C7-4812-46AD-0FA56029AC86****`
     */
    RequestId: string;
    /**
     * 云剪辑工程。
     */
    Project: {
        /**
         * 云剪辑工程ID。
         * @example `****fb2101bf24b2754cb318787dc****`
         */
        ProjectId: string;
        /**
         * 云剪辑工程标题。
         * @example `样本title`
         */
        Title: string;
        /**
         * 云剪辑工程时间线。
         * @example `{"VideoTracks":[{"VideoTrackClips":[{"MediaId":"****9b4d7cf14dc7b83b0e801cbe****"},{"MediaId":"****9b4d7cf14dc7b83b0e801cbe****"},{"MediaId":"****1656bca4474999c961a6d2a2****"}]}]}`
         */
        Timeline: string;
        /**
         * 模板ID
         * @example `****96e8864746a0b6f3****`
         */
        TemplateId: string;
        /**
         * 模板对应的素材参数，Json格式，当TemplateId不为空时，ClipsParam不能为空。具体格式见 [普通模板创建及使用](https://help.aliyun.com/document_detail/328557.html)、[高级模板创建及使用](https://help.aliyun.com/document_detail/291418.html)。
         * @example `见模板使用文档`
         */
        ClipsParam: string;
        /**
         * 云剪辑工程描述。
         * @example `示例描述`
         */
        Description: string;
        /**
         * 云剪辑工程封面。
         * @example `oss://example-bucket/example.jpg`
         */
        CoverURL: string;
        /**
         * 云剪辑工程创建时间。
         * @example `2020-12-20T12:00:00Z`
         */
        CreateTime: string;
        /**
         * 云剪辑工程最新修改时间。
         * @example `2020-12-20T13:00:00Z`
         */
        ModifiedTime: string;
        /**
         * 云剪辑工程总时长。
         * @example `24.120000`
         */
        Duration: number;
        /**
         * 云剪辑工程状态。
         * 所有云剪辑工程状态列表：
         * \-Draft
         * \-Editing
         * \-Producing
         * \-Produced
         * \-ProduceFailed
         * \-Deleted
         * @example `Editing`
         */
        Status: string;
        /**
         * 云剪辑工程创建方式
         * \-OpenAPI
         * \-AliyunConsole
         * \-WebSDK
         * \-LiveEditingOpenAPI
         * \-LiveEditingConsole
         * @example `OpenAPI`
         */
        CreateSource: string;
        /**
         * 云剪辑工程模版类型
         * \-Timeline
         * \-VETemplate
         * @example `Timeline`
         */
        TemplateType: string;
        /**
         * 云剪辑工程编辑方式
         * \-OpenAPI
         * \-AliyunConsole
         * \-WebSDK
         * \-LiveEditingOpenAPI
         * \-LiveEditingConsole
         * @example `OpenAPI`
         */
        ModifiedSource: string;
        /**
         * 剪辑工程类型，默认EditingProject
         * \- EditingProject: 普通剪辑工程
         * \- LiveEditingProject: 直播剪辑工程
         * @example `EditingProject`
         */
        ProjectType: string;
        /**
         * 工程业务配置，一般剪辑工程可忽略。
         * @example `{ "OutputMediaConfig" : { "StorageLocation": "test-bucket.oss-cn-shanghai.aliyuncs.com", "Path": "test-path" }, "OutputMediaTarget": "oss-object", "ReservationTime": "2021-06-21T08:05:00Z" }`
         */
        BusinessConfig: string;
        /**
         * 工程业务状态，一般剪辑工程可忽略
         * 预约中：Reserving
         * 预约取消：ReservationCanceled
         * 直播中：BroadCasting
         * 加载失败：LoadingFailed
         * 直播结束：LiveFinished
         * @example `Reserving`
         */
        BusinessStatus: string;
        /**
         * 工程转换状态，api风格timeline转换为前端风格timeline是一个异步过程，只有在设置RequestSource:WebSDK时生效。
         * -Unconverted：未进行Timeline转换
         * -Converting：工程正在转换中
         * -Converted：工程转换完成
         * -ConvertFailed：工程转换失败
         * @example `Converted`
         */
        TimelineConvertStatus: string;
        /**
         * 工程转换失败信息，只有TimelineConvertStatus为ConvertFailed时返回，工程转换的详细失败信息。
         * @example `The StorageLocation must be in the same division(apiRegion) as ICE service access point.`
         */
        TimelineConvertErrorMessage: string;
    };
}
