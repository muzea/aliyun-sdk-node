export interface ListScriptsResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示消息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 话术列表
     */
    Scripts: {
        /**
         * 页号
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小
         * @example `10`
         */
        PageSize: number;
        /**
         * 总计个数
         * @example `15`
         */
        TotalCount: number;
        /**
         * 话术数组
         */
        List: {
            /**
             * 话术状态
             * @example `DRAFTED`
             */
            Status: string;
            /**
             * 更新时间
             * @example `1578965079000`
             */
            UpdateTime: number;
            /**
             * 话术id
             * @example `8d6a6e41-8093-49af-a9d1-0281878758ac`
             */
            ScriptId: string;
            /**
             * 调试版本是否为草稿态
             * @example `true`
             */
            IsDebugDrafted: boolean;
            /**
             * 行业
             * @example `金融`
             */
            Industry: string;
            /**
             * 话术描述
             * @example `电话销售话术`
             */
            ScriptDescription: string;
            /**
             * 是否是草稿
             * @example `true`
             */
            IsDrafted: boolean;
            /**
             * 调试状态
             * @example `DRAFTED`
             */
            DebugStatus: string;
            /**
             * 承接语配置开关
             * @example `false`
             */
            MiniPlaybackEnable: boolean;
            /**
             * 审核失败理由
             * @example `话术用语不合规`
             */
            RejectReason: string;
            /**
             * 场景
             * @example `电销`
             */
            Scene: string;
            /**
             * 话术名字
             * @example `电话销售话术`
             */
            ScriptName: string;
            /**
             * 优雅打断配置开关
             * @example `false`
             */
            NewBargeInEnable: boolean;
            /**
             * 长时停顿配置开关
             * @example `false`
             */
            LongWaitEnable: boolean;
            /**
             * 情绪识别配置开关
             * @example `false`
             */
            EmotionEnable: boolean;
            /**
             * 是否是预置场景
             * @example `false`
             */
            IsPreset: boolean;
            AgentKey: string;
            AgentLlm: boolean;
            agentId: number;
        }[];
    };
}
