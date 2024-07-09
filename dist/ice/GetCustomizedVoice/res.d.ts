export interface GetCustomizedVoiceResponse {
    /**
     * 请求 Id
     * @example `****63E8B7C7-4812-46AD-0FA56029AC86****`
     */
    RequestId: string;
    /**
     * 响应数据
     */
    Data: {
        /**
         * 个性化人声
         */
        CustomizedVoice: {
            /**
             * 声音 Id
             * @example `xiaozhuan`
             */
            VoiceId: string;
            /**
             * 声音名字
             * @example `小专`
             */
            VoiceName: string;
            /**
             * 声音描述
             * @example `这是一个个性化人声`
             */
            VoiceDesc: string;
            /**
             * 性别，取值范围如下：
             * - female：女性
             * - male：男性
             * @example `female`
             */
            Gender: string;
            /**
             * 示范场景。
             * 可以取以下的一个值：
             * - **story**：故事
             * - **interaction**：交互
             * - **navigation**：导航
             * @example `interaction`
             */
            Scenario: string;
            /**
             * 示例音频媒资 Id
             * @example `****42d3c312402982be65975f5b****`
             */
            DemoAudioMediaId: string;
        };
    };
    /**
     * 是否请求成功。取值：
     * - true： 成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
