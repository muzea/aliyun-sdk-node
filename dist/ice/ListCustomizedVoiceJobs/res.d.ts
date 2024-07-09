export interface ListCustomizedVoiceJobsResponse {
    /**
     * 请求 Id
     * @example `******3B-0E1A-586A-AC29-742247******`
     */
    RequestId: string;
    /**
     * 响应数据
     */
    Data: {
        /**
         * 人声克隆任务列表
         */
        CustomizedVoiceJobList: {
            /**
             * 人声克隆任务 Id
             * @example `2245ab99a7fd4116a4fd3f499b7a56c5`
             */
            JobId: string;
            /**
             * 声音 Id
             * @example `xiaozhuan`
             */
            VoiceId: string;
            /**
             * 任务状态，取值：
             * - Initialization 初始化
             * - AudioDetecting 音频检测中
             * - PreTraining 提交训练，待训练
             * - Training 训练中
             * - Success 训练成功
             * - Fail 训练失败
             * @example `Success`
             */
            Status: string;
            /**
             * 状态附加描述信息
             * @example `训练成功`
             */
            Message: string;
            /**
             * 声音名字（一般为中文名）
             * - 不超过 32 个字符
             * @example `小专`
             */
            VoiceName: string;
            /**
             * 声音描述
             * - 不超过 256 个字符
             * @example `这是这个声音的描述`
             */
            VoiceDesc: string;
            /**
             * - 声音类型，取值范围：
             *   - Basic 基础版
             *   - Standard 大众版
             * @example `Standard`
             */
            Type: string;
            /**
             * 性别，取值范围：
             * - female：女性
             * - male：男性
             * @example `female`
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
             * - 任务创建时间
             * - 格式为 UTC 时间
             * @example `2023-04-01T06:23:59Z`
             */
            CreateTime: string;
            /**
             * 创建时间
             * @example `2022-06-27T02:42:28Z`
             */
            GmtCreate: string;
        }[];
        /**
         * 总记录数
         * @example `271`
         */
        TotalCount: number;
    };
    /**
     * 操作是否成功。取值：true：成功。false：失败。
     * @example `true`
     */
    Success: boolean;
}
