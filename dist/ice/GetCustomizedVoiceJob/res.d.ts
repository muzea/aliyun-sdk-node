export interface GetCustomizedVoiceJobResponse {
    /**
     * 请求 Id
     * @example `****63E8B7C7-4812-46AD-0FA56029AC86****`
     */
    RequestId: string;
    /**
     * 调用成功时返回的数据
     */
    Data: {
        /**
         * 人声克隆任务
         */
        CustomizedVoiceJob: {
            /**
             * 人声克隆任务 Id
             * @example `****571c704445f9a0ee011406c2****`
             */
            JobId: string;
            /**
             * 声音 Id
             * @example `xiaozhuan`
             */
            VoiceId: string;
            /**
             * 任务状态，取值范围：
             * - Initialization 初始化
             * - AudioDetecting 音频检测中
             * - PreTraining 提交训练，待训练
             * - Training 训练中
             * - Success 训练成功
             * - Fail 训练失败
             * @example `Fail`
             */
            Status: string;
            /**
             * 状态附加描述信息
             * @example `训练失败`
             */
            Message: string;
            /**
             * 人声克隆任务类型，取值范围：
             * - Basic 基础版
             * - Standard 大众版
             * @example `Standard`
             */
            Type: string;
            /**
             * 声音名称
             * @example `小专`
             */
            VoiceName: string;
            /**
             * 声音描述
             * @example `这是一个专属人声`
             */
            VoiceDesc: string;
            /**
             * 场景，取值范围：
             * - story：故事
             * - interaction：交互
             * - navigation：导航
             * @example `story`
             */
            Scenario: string;
            /**
             * 性别，取值范围如下：
             * - female：女性
             * - male：男性
             * @example `female`
             */
            Gender: string;
            /**
             * 创建时间，UTC 时间格式
             * @example `2023-06-07T02:27:08Z`
             */
            CreateTime: string;
        };
    };
    /**
     * 表示是否调用成功：
     * - true：调用成功
     * - false：调用失败
     * @example `true`
     */
    Success: boolean;
}
