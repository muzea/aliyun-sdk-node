export interface ListCustomizedVoicesResponse {
    /**
     * 请求 Id
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 返回结果
     */
    Data: {
        /**
         * 个性化人声列表
         */
        CustomizedVoiceList: {
            /**
             * 声音 Id
             * @example `xiaozhuan`
             */
            VoiceId: string;
            /**
             * 声音名字（一般为中文名）
             * @example `小专`
             */
            VoiceName: string;
            /**
             * 声音描述
             * @example `这是一个个性化人声小专`
             */
            VoiceDesc: string;
            /**
             * 性别，取值范围：
             * - female：女性
             * - male：男性
             * @example `male`
             */
            Gender: string;
            /**
             * 场景，取值范围：
             * - story：故事
             * - interaction：交互
             * - navigation：导航
             * @example `story`
             */
            Scenario: string;
            /**
             * 示例音频媒资 Id
             * @example `****4d5e829d498aaf966b119348****`
             */
            DemoAudioMediaId: string;
            /**
             * - 声音类型，取值范围：
             *   - Basic 基础版
             *   - Standard 大众版
             * @example `Standard`
             */
            Type: string;
        }[];
        /**
         * 总记录数
         * @example `41`
         */
        TotalCount: number;
    };
    /**
     * 请求是否成功，取值：
     * - true：成功
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
