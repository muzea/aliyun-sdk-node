export interface GetAIImageJobsResponse {
    /**
     * 请求ID。
     * @example `7721B494-1F78-4E*****E8-A7CEE7315BFA`
     */
    RequestId: string;
    /**
     * AI图片处理任务列表。
     */
    AIImageJobList: {
        /**
         * 任务状态：
         * - **success**：成功。
         * - **fail**：失败。
         * @example `success`
         */
        Status: string;
        /**
         * AI图片处理任务的创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2020-10-15T03:30:03Z`
         */
        CreationTime: string;
        /**
         * AI图片的OSS地址。
         * >为任务结果，因此该地址不提供完整的鉴权信息，需要鉴权信息需用户生成或者调用[ListAIImage](~~186924~~)接口获取媒资结果。
         * @example `[{"Score":5.035636554444242,"Url":"http://outin-*****.oss-cn-shanghai.aliyuncs.com/357a8748c577*****789d2726e6436aa/image/ai/b0a7612554d*****5cbe3-00001.gif"}]`
         */
        AIImageResult: string;
        /**
         * 视频ID。
         * @example `357a8748c577*****789d2726e6436aa`
         */
        VideoId: string;
        /**
         * AI图片处理任务ID。
         * @example `cf08a2c6e11e*****de1711b738b9067`
         */
        JobId: string;
        /**
         * 自定义设置。
         * - 必须是JSON字符串。
         * - 需要包含MessageCallback或者Extend参数。
         * - 最大长度为512个字节。
         * 参数构造详情，请参见[UserData](~~86952~~)。
         * @example `{"Extend":{"localId":"****","test":"www"}}`
         */
        UserData: string;
        /**
         * 错误码。
         * @example `Success`
         */
        Code: string;
        /**
         * 错误信息。
         * @example `success`
         */
        Message: string;
        /**
         * 提交任务时，对指定模板的配置信息的快照。
         * @example `{"Format":"gif","SetDefaultCover":"true"}`
         */
        TemplateConfig: string;
        /**
         * AI模板ID。
         * @example `5a86a00f15194*****d7fe7de1b4a173`
         */
        TemplateId: string;
    }[];
}
