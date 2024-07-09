export interface VoiceModerationResultResponse {
    /**
     * Id of the request
     * @example `2881AD4F-638B-52A3-BA20-F74C5B1CEAE3`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求消息的响应消息。
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 任务URL
         * @example `暂无`
         */
        Url: string;
        /**
         * 直播的唯一标识ID。
         * @example `liveId`
         */
        LiveId: string;
        /**
         * 任务ID
         * @example `kw24ihd0WGkdi5nniVZM@qOj-1x5Ibb`
         */
        TaskId: string;
        /**
         * 分段结果
         */
        SliceDetails: {
            /**
             * 分段开始时间(秒)
             * @example `0`
             */
            StartTime: number;
            /**
             * 分段结束时间(秒)
             * @example `10`
             */
            EndTime: number;
            StartTimestamp: number;
            EndTimestamp: number;
            /**
             * 分段语音文件临时地址
             * @example `暂无`
             */
            Url: string;
            /**
             * 分段语音转写文本
             * @example `今天天气真不错`
             */
            Text: string;
            /**
             * 命中违规标签
             * @example `sexual_sounds`
             */
            Labels: string;
            /**
             * 风险分数，默认范围 0-99
             * @example `87.01`
             */
            Score: number;
            /**
             * 扩展字段
             * @example `{\"riskWords\":\"色情服务\","adNums":"\","riskTips":"涉政_人物，涉政_红歌"}`
             */
            Extend: string;
            /**
             * 命中风险详情
             * @example `涉政_人物`
             */
            RiskTips: string;
            /**
             * 命中风险关键词
             * @example `色情服务`
             */
            RiskWords: string;
            /**
             * 保留字段
             */
            OriginAlgoResult: any;
        }[];
        DataId: string;
    };
}
