export interface SyncQualityCheckResponse {
    /**
     * 结果状态码，200表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为successful。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求唯一标识。
     * @example `66E1ACB8-17B2-4BE8-8581-954A8*****`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果，包含命中信息。
     */
    Data: {
        /**
         * 最终得分，满分100。
         * @example `100`
         */
        Score: number;
        /**
         * 任务ID。
         * @example `66E1ACB866E1ACB8`
         */
        TaskId: string;
        /**
         * 当前对话唯一标识。
         * @example `20200876-66E1ACB8`
         */
        Tid: string;
        /**
         * 录音&对话发生的时间，格林威治时间1970年01月01日00时00分00秒到现在的毫秒数（即毫秒时间戳，例如：1584535485856）。
         * @example `1584535485856`
         */
        BeginTime: number;
        /**
         * 命中的规则列表，每一条为一个规则，只返回命中的规则信息和命中规则位置信息。
         */
        Rules: {
            /**
             * 命中的规则的名称。
             * @example `禁用语`
             */
            RuleName: string;
            /**
             * 命中的规则ID。
             * @example `232232`
             */
            Rid: string;
            /**
             * 命中的句子列表，针对此接口，如果命中，为一条数据。
             */
            Hit: {
                /**
                 * 条件命中的关键词。
                 */
                HitKeyWords: {
                    /**
                     * 关键字的结束位置。
                     * @example `4`
                     */
                    To: number;
                    /**
                     * 关键字的起始位置。
                     * @example `1`
                     */
                    From: number;
                    /**
                     * 关键字。
                     * @example `你好`
                     */
                    Val: string;
                    /**
                     * 规则的条件ID。
                     * @example `2312`
                     */
                    Cid: number;
                    /**
                     * 命中句子在全部对话中的下标值。
                     * @example `4`
                     */
                    Pid: number;
                }[];
                /**
                 * 条件命中的对话内容。
                 */
                Phrase: {
                    /**
                     * 对话内容。
                     * @example `你好请问有什么可以帮您的`
                     */
                    Words: string;
                    /**
                     * 废弃字段，请忽略。
                     * @example `xxx`
                     */
                    Identity: string;
                    /**
                     * 本句相对于整个对话的开始时间，单位：毫秒。
                     * @example `1230`
                     */
                    Begin: number;
                    /**
                     * 本句的情绪值，0-10，值越大情绪越高。
                     * @example `6`
                     */
                    EmotionValue: number;
                    /**
                     * 本句相对于整个对话的结束时间，单位：毫秒。
                     * @example `3440`
                     */
                    End: number;
                    /**
                     * 本句语速，单位：字/分钟。
                     * @example `233`
                     */
                    SpeechRate: number;
                    /**
                     * 本句的角色，取值：客服、客户。
                     * @example `客服`
                     */
                    Role: string;
                    /**
                     * 废弃字段，请忽略。
                     * @example `123`
                     */
                    SilenceDuration: number;
                };
            }[];
        }[];
    };
}
