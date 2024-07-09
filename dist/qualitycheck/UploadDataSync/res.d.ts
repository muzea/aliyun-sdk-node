export interface UploadDataSyncResponse {
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为**successful**。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `4987D326-83D9-4A42-B9A5-0B27F9B***`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败。
     * @example `true`
     */
    Success: boolean;
    Data: {
        /**
         * 实时质检结果。
         */
        ResultInfo: {
            /**
             * 质检得分，默认为100分，会根据规则所关联的评分项进行加减分。
             * @example `100`
             */
            Score: number;
            Rules: {
                /**
                 * 命中详情。
                 */
                RuleHitInfo: {
                    /**
                     * 文本ID，对应的是请求参数tickets中的tid。
                     * @example `88888888`
                     */
                    Tid: string;
                    /**
                     * 命中的规则ID。
                     * @example `801`
                     */
                    Rid: string;
                    Hit: {
                        /**
                         * 具体命中位置信息，以句子维度，返回命中句子中具体命中了什么规则中哪个条件，是哪几个字命中的。
                         */
                        ConditionHitInfo: {
                            HitKeyWords: {
                                /**
                                 * 返回当前句中是哪几个字命中了规则，也就是需要高亮展示的关键字。
                                 */
                                HitKeyWord: {
                                    /**
                                     * 需要高亮展示的关键字到第几个字符结束，最大值为当句话字符总数减1。高亮的字不包含to，例如一句话为“不可能给你退货的”，from=0，to=3，那么需要高亮的关键字就是“不可能”三个字。
                                     * @example `1`
                                     */
                                    To: number;
                                    /**
                                     * 需要高亮展示的关键字从第几个字符开始，取值范围从0开始，最大值为当句话字符总数减1。高亮的字包含from。
                                     * @example `1`
                                     */
                                    From: number;
                                    /**
                                     * 具体的关键字内容。
                                     * @example `嗯`
                                     */
                                    Val: string;
                                    /**
                                     * 文本ID，对应的是请求参数tickets中的tid。
                                     * @example `1`
                                     */
                                    Tid: string;
                                    /**
                                     * 当前句子在所有句子中的下标值，即当前句子是请求参数中dialogue数组中的第几个，从0开始。
                                     * @example `1`
                                     */
                                    Pid: number;
                                }[];
                            };
                            HitCids: {
                                /**
                                 * 当前句子命中的条件ID的列表。
                                 */
                                CidItem: string[];
                            };
                            /**
                             * 当前命中规则的句子详情。
                             */
                            Phrase: {
                                /**
                                 * 这个角色说的一句话。
                                 * @example `你好`
                                 */
                                Words: string;
                                /**
                                 * 对话角色的具体身份标识。
                                 * @example `1`
                                 */
                                Identity: string;
                                /**
                                 * 本句话的开始时间，是相对起始点的开始时间偏移，单位ms。
                                 * @example `0`
                                 */
                                Begin: number;
                                /**
                                 * 这句话的开始时间，示例值：2019-11-25 15:37:16。
                                 * @example `1564574`
                                 */
                                BeginTime: string;
                                /**
                                 * 本句话的结束时间，是相对起始点的结束时间偏移，单位ms。
                                 * @example `2090`
                                 */
                                End: number;
                                /**
                                 * 对话内容角色，可能值：客服、客户、系统。
                                 * @example `客服`
                                 */
                                Role: string;
                            };
                        }[];
                    };
                    ConditionInfo: {
                        /**
                         * 废弃字段，请忽略。
                         */
                        ConditionBasicInfo: {
                            /**
                             * 废弃字段，请忽略。
                             * @example `xxx`
                             */
                            ConditionInfoCid: string;
                        }[];
                    };
                }[];
            };
            HandScoreIdList: {
                /**
                 * 废弃字段，请忽略。
                 */
                HandScoreIdList: string[];
            };
        }[];
    };
}
