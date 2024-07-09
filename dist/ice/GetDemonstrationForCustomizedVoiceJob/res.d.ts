export interface GetDemonstrationForCustomizedVoiceJobResponse {
    /**
     * 请求 Id
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 操作是否成功，取值：
     * - true：成功
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应数据
     */
    Data: {
        /**
         * 示范列表，返回 20 条需要朗读的文本及对应语音示例
         */
        DemonstrationList: {
            /**
             * 示例音频 URL
             * - OSS 地址
             * ><notice>音频文件过期时间为 12 小时></notice>
             * @example `http://bucket.oss-cn-shanghai.aliyuncs.com/1.wav`
             */
            DemoAudio: string;
            /**
             * 需要朗读的文本内容
             * @example `不行，他想了一下，我不能这样对国王说，这是在撒谎。`
             */
            Text: string;
            /**
             * 该文本的序号，对应音频检测时需要传入的 AduioRecordId 字段
             * @example `2`
             */
            AudioId: number;
        }[];
    };
}
