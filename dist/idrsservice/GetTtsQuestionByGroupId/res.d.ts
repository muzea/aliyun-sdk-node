export interface GetTtsQuestionByGroupIdResponse {
    /**
     * 为公共参数，每个请求的id都是唯一的
     * @example `D2DFCDC3-1ECF-599D-8EDA-8F598E5A9***`
     */
    RequestId: string;
    /**
     * 状态码
     * @example `OK`
     */
    Code: number;
    /**
     * 错误信息。
     * @example `-`
     */
    Message: string;
    /**
     * 数据
     */
    Data: {
        /**
         * TTS问题组ID
         * @example `47584ba4-9781-496b-8e6f-c8525a213***`
         */
        GroupId: string;
        /**
         * 问题列表
         */
        Questions: {
            /**
             * 问题id
             * @example `1`
             */
            Id: number;
            /**
             * 租户id
             * @example `2`
             */
            TenantId: number;
            /**
             * 问题组id
             * @example `47584ba4-9781-496b-8e6f-c8525a213***`
             */
            QuestionGroupId: number;
            /**
             * 问题key
             * @example `47584ba4-9781-496b-8e6f-c8525a213***`
             */
            QuestionKey: string;
            /**
             * 问题。
             * @example `北京的天气如何`
             */
            Question: string;
            /**
             * 回复
             * @example `晴朗`
             */
            Answer: string;
            /**
             * 合成的音频时长，单位毫秒
             * @example `674`
             */
            Duration: number;
            /**
             * 下载地址
             * @example `https://pts-data-f***.pcm`
             */
            OssUrl: string;
        }[];
    };
    /**
     * 给 pop 使用的
     * @example `True`
     */
    Success: boolean;
    /**
     * http状态码
     * @example `200`
     */
    HttpCode: number;
}
