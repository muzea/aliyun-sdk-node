export interface SearchEditingProjectResponse {
    /**
     * 请求ID。
     * @example `****9262E3DA-07FA-4862-FCBB6BC61D08*****`
     */
    RequestId: string;
    /**
     * 云剪辑工程列表。
     */
    ProjectList: {
        /**
         * 云剪辑工程ID。
         * @example `****fddd7748b58bf1d47e95****`
         */
        ProjectId: string;
        /**
         * 云剪辑工程标题。
         * @example `title`
         */
        Title: string;
        /**
         * 云剪辑工程时间线。
         * @example `{"VideoTracks":[{"VideoTrackClips":[{"MediaId":"****4d7cf14dc7b83b0e801c****"},{"MediaId":"****4d7cf14dc7b83b0e801c****"}]}]}`
         */
        Timeline: string;
        /**
         * 云剪辑工程描述。
         * @example `sample description`
         */
        Description: string;
        /**
         * 云剪辑工程封面。
         * @example `http://example-bucket.oss-cn-shanghai.aliyuncs.com/example-cover.jpg`
         */
        CoverURL: string;
        /**
         * 云剪辑工程创建时间。
         * @example `2017-01-11T12:00:00Z`
         */
        CreateTime: string;
        /**
         * 云剪辑工程最新修改时间。
         * @example `2017-01-11T12:00:00Z`
         */
        ModifiedTime: string;
        /**
         * 云剪辑工程总时长，单位：秒。
         * @example `30.100000`
         */
        Duration: number;
        /**
         * 所有云剪辑工程状态列表：
         * \-Draft
         * \-Editing
         * \-Producing
         * \-Produced
         * \-ProduceFailed
         * @example `PRODUCE_FAILED`
         */
        Status: string;
        /**
         * 云剪辑工程合成失败的错误码。
         * @example `InvalidParameter`
         */
        ErrorCode: string;
        /**
         * 云剪辑工程合成失败的消息。
         * @example `"EventTime":"2021-08-12T10:04:15Z","ErrorCode":"InvalidParameter","ErrorMessage":"The specified parameter \"LiveStreamConfig\" is not valid. specified parameter example is not valid.`
         */
        ErrorMessage: string;
        /**
         * 云剪辑工程编辑方式：
         * \-OpenAPI
         * \-AliyunConsole
         * \-WebSDK
         * @example `OpenAPI`
         */
        CreateSource: string;
        /**
         * 最后一次修改来源。
         * @example `2017-01-11T12:00:00Z`
         */
        ModifiedSource: string;
        /**
         * 模板类型。
         * @example `Timeline`
         */
        TemplateType: string;
        /**
         * 剪辑工程类型。
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
         * @example `Reserving`
         */
        BusinessStatus: string;
    }[];
    /**
     * 本次请求所返回的最大记录条数，最后一页前每页记录条数为MaxResults取值。
     * 例如：
     * 正例：10,10,5，反例：10,5,10
     * @example `10`
     */
    MaxResults: number;
    /**
     * 本次请求条件下的数据总量，此参数为可选参数，默认可不返回。
     * @example `110`
     */
    TotalCount: number;
    /**
     * 用来表示当前调用返回读取到的位置，空代表数据已经读取完毕。
     * @example `null`
     */
    NextToken: string;
}
