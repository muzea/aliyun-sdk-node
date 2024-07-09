export interface TestRuleV4Response {
    /**
     * 完整返回内容。
     */
    Data: {
        /**
         * 命中检测项信息。
         */
        HitRuleReviewInfoList: {
            /**
             * 检测项ID
             * @example `451`
             */
            Rid: number;
            /**
             * Lambda表达式：例如：a&&b
             * @example `a&&b`
             */
            Lambda: string;
            /**
             * 命中的条件信息。
             */
            ConditionHitInfoList: {
                /**
                 * 条件ID。
                 */
                Cid: string[];
                /**
                 * 当前命中检测项的句子详情。
                 */
                Phrase: {
                    /**
                     * 本句的角色，取值：客服、客户。
                     * @example `客服`
                     */
                    Role: string;
                    /**
                     * 角色标识，离线语音场景下角色只有客服/客户，离线文本质检场景下，显示的是上传数据时传入的identity。
                     * @example `客服`
                     */
                    Identity: string;
                    /**
                     * 对话内容。
                     * @example `你好，请问有什么可以帮您`
                     */
                    Words: string;
                    /**
                     * 这句话的开始时间相对对话整体开始时间的偏移量，毫秒级，例如录音总时长为2分10秒，客户的某一句话是在1分12秒时开始讲的，1分20秒时讲完，则begin的值为72000，end的值为80000。
                     * @example `72000`
                     */
                    Begin: number;
                    /**
                     * 这句话的开始时间相对对话整体开始时间的偏移量，毫秒级，例如录音总时长为2分10秒，客户的某一句话是在1分12秒时开始讲的，1分20秒时讲完，则begin的值为72000，end的值为80000。
                     * @example `80000`
                     */
                    End: number;
                    /**
                     * 这句话的开始时间，示例值：2019-11-25 15:37:16。
                     * @example `2019-11-25 15:37:16`
                     */
                    BeginTime: string;
                    /**
                     * 这句话的时分秒格式的开始时间，格式：hh:mm:ss
                     * @example `10:00:00`
                     */
                    HourMinSec: string;
                    /**
                     * 情绪能量值，取值为音量分贝值/10。取值范围：[1，10]。值越高情绪越强烈。
                     * @example `7`
                     */
                    EmotionValue: number;
                    /**
                     * 内部使用，忽略。
                     * @example `忽略`
                     */
                    EmotionFineGrainedValue: number;
                    /**
                     * 静音时长，单位毫秒
                     * @example `1000`
                     */
                    SilenceDuration: number;
                    /**
                     * 本句的平均语速，单位：字数/分钟。
                     * @example `100`
                     */
                    SpeechRate: number;
                    /**
                     * 频道ID。
                     * @example `0`
                     */
                    ChannelId: number;
                    /**
                     * 当前句子在所有句子中的下标值，即当前句子是请求参数中dialogue数组中的第几个，从0开始。
                     * @example `3`
                     */
                    Pid: number;
                    /**
                     * 内部用，忽略。
                     * @example `无`
                     */
                    RenterId: number;
                    /**
                     * 内部用，忽略。
                     * @example `无`
                     */
                    Uuid: string;
                    /**
                     * 命中状态。取值：
                     * - **0**：没有命中
                     * - **1**：命中
                     * @example `1`
                     */
                    HitStatus: number;
                    /**
                     * 内部用，忽略。
                     * @example `无`
                     */
                    Sid: number;
                };
                /**
                 * 命中的关键信息，在复核页面上高亮展示的信息，例如关键词检查算子命中的关键词、客服模型检查算子命中的具体类别信息等。
                 */
                KeyWords: {
                    /**
                     * 算子命中的关键信息。
                     * @example `无`
                     */
                    OperatorKey: string;
                    /**
                     * 算子命中的关键信息，详见下方返回参数说明中的**关键信息Val详解**。
                     * @example `你好`
                     */
                    Val: string;
                    /**
                     * 当前句子在所有句子中的下标值，即当前句子是请求参数中dialogue数组中的第几个，从0开始。
                     * @example `13`
                     */
                    Pid: number;
                    /**
                     * 需要高亮展示的关键字从第几个字符开始，取值范围从0开始，最大值为当句话字符总数减1。高亮的字包含from。
                     * @example `1`
                     */
                    From: number;
                    /**
                     * 需要高亮展示的关键字到第几个字符结束，最大值为当句话字符总数减1。高亮的字不包含to，例如一句话为“不可能给你退货的”，from=0，to=3，那么需要高亮的关键字就是“不可能”三个字。
                     * @example `3`
                     */
                    To: number;
                    /**
                     * 内部用，忽略。
                     * @example `无`
                     */
                    Tid: string;
                    /**
                     * 算子的ID
                     * @example `123`
                     */
                    Oid: string;
                    /**
                     * 内部用，忽略。
                     * @example `无`
                     */
                    Uuid: string;
                    /**
                     * 相似句
                     * @example `您好`
                     */
                    SimilarPhrase: string;
                    /**
                     * 条件id。
                     * @example `4`
                     */
                    Cid: string;
                    /**
                     * 内部字段，请忽略。
                     * @example `无`
                     */
                    CustomizeCode: string;
                }[];
            }[];
            /**
             * 条件列表
             */
            ConditionInfoList: any[];
            /**
             * 命中分支ID。
             * @example `1`
             */
            BranchHitId: number;
            /**
             * 分支信息列表
             */
            BranchInfoList: {
                /**
                 * 索引号
                 * @example `1`
                 */
                Index: number;
                /**
                 * 节点名称
                 * @example `节点A`
                 */
                Name: string;
                /**
                 * 下一个流程节点ID
                 * @example `2`
                 */
                NextNodeId: number;
                /**
                 * 流程节点条件
                 */
                Situation: any;
                /**
                 * Lambda表达式
                 * @example `a&&b`
                 */
                Lambda: string;
                /**
                 * 检测项类型
                 * @example `0`
                 */
                CheckType: number;
                /**
                 * 触发ID列表
                 */
                Triggers: string[];
            }[];
            /**
             * 是否计分：1不计分；3计分。
             * @example `1`
             */
            RuleScoreType: number;
            /**
             * 流程ID
             * @example `1`
             */
            TaskFlowId: number;
            /**
             * 计分类型，可能值：0（命中后加减分）；1（命中后一次性得分）
             * @example `1`
             */
            ScoreNumType: number;
            /**
             * 是否命中
             * @example `true`
             */
            Matched: boolean;
            /**
             * 节点类型。
             * @example `0`
             */
            NodeType: string;
            /**
             * 判断节点名称
             * @example `判断节点A`
             */
            JudgeNodeName: string;
            /**
             * 规则名称。
             * @example `规则A`
             */
            RuleName: string;
        }[];
        /**
         * 命中高级流程节点列表
         */
        HitTaskFlowList: {
            /**
             * 图流程画布
             */
            GraphFlow: any;
            /**
             * 流程图类型-已废弃-默认-1
             * @example `无`
             */
            TaskFlowType: number;
            /**
             * 规则ID
             * @example `1`
             */
            Rid: number;
        }[];
        /**
         * 未命中规则信息
         */
        UnhitRuleReviewInfoList: {
            /**
             * 命中的规则ID。
             * @example `2`
             */
            Rid: number;
            /**
             * 条件列表
             */
            ConditionInfoList: any[];
            /**
             * 是否命中
             * @example `true`
             */
            Matched: boolean;
            /**
             * 流程图类型-已废弃-默认-1
             * @example `忽略`
             */
            TaskFlowType: number;
        }[];
    };
    /**
     * 请求ID。
     * @example `96138D8D-XXXX-4E41-XXXX-77AED1088BBD`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，200表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为successful。
     * @example `successful`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
