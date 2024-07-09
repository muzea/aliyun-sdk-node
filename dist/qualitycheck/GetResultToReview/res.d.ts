export interface GetResultToReviewResponse {
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
     * @example `82C91484-B2D5-4D2A-A21F-A6D73F4***`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：**true**表示成功；**false/null**表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 详细返回数据。
     */
    Data: {
        /**
         * 任务当前状态；0：未完成；1：已完成；调用方可根据此字段判断任务是否完成；非0、1表示出错。
         * @example `1`
         */
        Status: number;
        /**
         * 音频URL的协议，可能值：http、https。
         * @example `https`
         */
        AudioScheme: string;
        /**
         * 音频URL，不含http://、https://，与AudioSchedme组成完整的URL。
         * @example `sca-ccc-test.oss-cn-beijing.aliyuncs.com/xxxxx`
         */
        AudioURL: string;
        /**
         * 质检得分。
         * @example `99`
         */
        TotalScore: number;
        /**
         * 文件ID。
         * @example `e790e6c919d84b82b64ee*****`
         */
        FileId: string;
        /**
         * 文件名称。
         * @example `xxx.wav`
         */
        FileMergeName: string;
        /**
         * 复核意见。
         * @example `xxx`
         */
        Comments: string;
        /**
         * 文件ID。
         * @example `6fa76916-3ce6-45d8-ac64-01b7f31***`
         */
        Vid: string;
        Dialogues: {
            /**
             * 对话数据。
             */
            Dialogue: {
                /**
                 * 对话内容
                 * @example `你好有什么可以帮您`
                 */
                Words: string;
                /**
                 * 角色标识，离线语音场景下角色只有客服/客户，离线文本质检场景下，显示的是上传数据时传入的identity。
                 * @example `客服`
                 */
                Identity: string;
                /**
                 * 这句话的开始时间相对对话整体开始时间的偏移量，毫秒级，例如录音总时长为2分10秒，客户的谋一句话是在1分12秒时开始讲的，1分20秒时讲完，则begin的值为72000，end的值为80000。
                 * @example `72000`
                 */
                Begin: number;
                /**
                 * 这句话开始讲话时的绝对时间。
                 * @example `2019-10-01 11:12:01`
                 */
                BeginTime: string;
                /**
                 * 情绪能量值，取值为音量分贝值/10。取值范围：[1,10]。值越高情绪越强烈。
                 * @example `7`
                 */
                EmotionValue: number;
                /**
                 * 这句话的开始时间相对对话整体开始时间的偏移量，毫秒级，例如录音总时长为2分10秒，客户的谋一句话是在1分12秒时开始讲的，1分20秒时讲完，则begin的值为72000，end的值为80000。
                 * @example `80000`
                 */
                End: number;
                /**
                 * 本句的平均语速，单位：字数/分钟。
                 * @example `200`
                 */
                SpeechRate: number;
                /**
                 * 该句话的角色，可能值：客服；客户。
                 * @example `客服`
                 */
                Role: string;
                /**
                 * 相同角色的两个相邻句子之间的静音时长，单位为秒。
                 * @example `1`
                 */
                SilenceDuration: number;
                /**
                 * 这句话的时分秒格式的开始时间，格式：hh:mm:ss
                 * @example `00:08`
                 */
                HourMinSec: string;
            }[];
        };
        HitRuleReviewInfoList: {
            /**
             * 命中检测项信息。
             */
            HitRuleReviewInfo: {
                /**
                 * 历史遗留字段，请忽略。
                 * @example `xxx`
                 */
                ScoreSubName: string;
                /**
                 * 评分的分值。
                 * @example `-10`
                 */
                ScoreNum: number;
                /**
                 * 是否自动审核，可能值：1：不自动审核，3：自动审核。
                 * @example `1`
                 */
                AutoReview: number;
                /**
                 * 历史遗留字段，请忽略。
                 * @example `xxx`
                 */
                ScoreSubId: number;
                /**
                 * 当前评分项坐席是否可以提交申诉（终审后不可再次申诉）。
                 * @example `true`
                 */
                Complainable: boolean;
                /**
                 * 历史遗留字段，请忽略。
                 * @example `xxx`
                 */
                ScoreId: number;
                /**
                 * 检测项名称。
                 * @example `你好`
                 */
                RuleName: string;
                /**
                 * 检测项ID
                 * @example `451`
                 */
                Rid: number;
                ConditionHitInfoList: {
                    /**
                     * 命中的条件信息。
                     */
                    ConditionHitInfo: {
                        KeyWords: {
                            /**
                             * 命中的关键信息，在复核页面上高亮展示的信息，例如关键词检查算子命中的关键词、客服模型检查算子命中的具体类别信息等。
                             */
                            KeyWord: {
                                /**
                                 * 需要高亮展示的关键字从第几个字符开始，取值范围从0开始，最大值为当句话字符总数减1。高亮的字包含from。
                                 * @example `1`
                                 */
                                From: number;
                                /**
                                 * 算子命中的关键信息，详见下方返回参数说明中的**关键信息Val详解**。
                                 * @example `你好`
                                 */
                                Val: string;
                                /**
                                 * 当前句子在所有句子中的下标值，即当前句子是请求参数中dialogue数组中的第几个，从0开始。
                                 * @example `2`
                                 */
                                Pid: number;
                                /**
                                 * 语音ID。
                                 * @example `6fa76916-3ce6-45d8-ac64-01b7f31c7295`
                                 */
                                Tid: string;
                                /**
                                 * 条件ID。
                                 * @example `2000`
                                 */
                                Cid: string;
                                /**
                                 * 需要高亮展示的关键字到第几个字符结束，最大值为当句话字符总数减1。高亮的字不包含to，例如一句话为“不可能给你退货的”，from=0，to=3，那么需要高亮的关键字就是“不可能”三个字。
                                 * @example `3`
                                 */
                                To: number;
                                /**
                                 * 内部字段，请忽略。
                                 * @example `xxx`
                                 */
                                CustomizeCode: string;
                            }[];
                        };
                        Cid: {
                            /**
                             * 命中的条件ID列表。
                             */
                            Cid: string[];
                        };
                        /**
                         * 当前命中检测项的句子详情
                         */
                        Phrase: {
                            /**
                             * 对话内容。
                             * @example `你好，请问有什么可以帮您`
                             */
                            Words: string;
                            /**
                             * 这句话的开始时间相对对话整体开始时间的偏移量，毫秒级，例如录音总时长为2分10秒，客户的谋一句话是在1分12秒时开始讲的，1分20秒时讲完，则begin的值为72000，end的值为80000。
                             * @example `72000`
                             */
                            Begin: number;
                            /**
                             * 角色标识，离线语音场景下角色只有客服/客户，离线文本质检场景下，显示的是上传数据时传入的identity。
                             * @example `客服`
                             */
                            Identity: string;
                            /**
                             * 当前句子在所有句子中的下标值，即当前句子是请求参数中dialogue数组中的第几个，从0开始。
                             * @example `3`
                             */
                            Pid: number;
                            /**
                             * 情绪能量值，取值为音量分贝值/10。取值范围：[1,10]。值越高情绪越强烈。
                             * @example `7`
                             */
                            EmotionValue: number;
                            /**
                             * 这句话的开始时间相对对话整体开始时间的偏移量，毫秒级，例如录音总时长为2分10秒，客户的谋一句话是在1分12秒时开始讲的，1分20秒时讲完，则begin的值为72000，end的值为80000。
                             * @example `80000`
                             */
                            End: number;
                            /**
                             * 本句的角色，取值：客服、客户。
                             * @example `客服`
                             */
                            Role: string;
                        };
                    }[];
                };
                ComplainHistories: {
                    /**
                     * 申诉历史信息。
                     */
                    ComplainHistories: {
                        /**
                         * 申诉理由/申诉处理理由。
                         * @example `请听一下录音，重新判定。`
                         */
                        Comments: string;
                        /**
                         * 申诉发起人/处理人的账号ID。
                         * @example `123456`
                         */
                        Operator: number;
                        /**
                         * 处理时间。
                         * @example `2020-10-16T11:13Z`
                         */
                        OperationTime: string;
                        /**
                         * 状态：3（申诉中）；4（申诉驳回）；5（申诉通过）。
                         * @example `5`
                         */
                        OperationType: number;
                        /**
                         * 申诉发起人/处理人的用户名。
                         * @example `张三`
                         */
                        OperatorName: string;
                    }[];
                };
                /**
                 * 复核信息。
                 */
                ReviewInfo: {
                    /**
                     * 复核结果，0：错误；1：正确。
                     * @example `1`
                     */
                    ReviewResult: number;
                    /**
                     * 复核时间，yyyy-mm-ddhh:mm:ss。
                     * @example `2019-10-12 17:06:00`
                     */
                    ReviewTime: string;
                    /**
                     * 命中ID。
                     * @example `013c68142fec4f0899fa6ee0exxx`
                     */
                    HitId: string;
                    /**
                     * 复核员ID。
                     * @example `123`
                     */
                    Reviewer: string;
                    /**
                     * 检测项ID。
                     * @example `451`
                     */
                    Rid: number;
                };
            }[];
        };
        ManualScoreInfoList: {
            /**
             * 人工添加的检测项。
             */
            ManualScoreInfo: {
                /**
                 * 历史遗留字段，请忽略。
                 * @example `投诉`
                 */
                ScoreSubName: string;
                /**
                 * 当前评分项坐席是否可以提交申诉（终审后不可再次申诉）。
                 * @example `true`
                 */
                Complainable: boolean;
                /**
                 * 分数
                 * @example `-10`
                 */
                ScoreNum: number;
                /**
                 * 历史遗留字段，请忽略。
                 * @example `xxx`
                 */
                ScoreSubId: number;
                /**
                 * 历史遗留字段，请忽略。
                 * @example `xxx`
                 */
                ScoreId: number;
                ComplainHistories: {
                    /**
                     * 申诉历史信息。
                     */
                    ComplainHistories: {
                        /**
                         * 申诉理由/申诉处理理由。
                         * @example `请听一下录音，重新判定。`
                         */
                        Comments: string;
                        /**
                         * 申诉发起人/处理人的账号ID。
                         * @example `123456`
                         */
                        Operator: number;
                        /**
                         * 处理时间。
                         * @example `2020-10-16T11:13Z`
                         */
                        OperationTime: string;
                        /**
                         * 状态：3（申诉中）；4（申诉驳回）；5（申诉通过）。
                         * @example `5`
                         */
                        OperationType: number;
                        /**
                         * 申诉发起人/处理人的用户名。
                         * @example `张三`
                         */
                        OperatorName: string;
                    }[];
                };
            }[];
        };
        ReviewHistoryList: {
            /**
             * 复核历史。
             */
            ReviewHistory: {
                /**
                 * 复核类型，0：自动复核；1：手工复核。
                 * @example `1`
                 */
                Type: number;
                /**
                 * 复核员用户名。
                 * @example `张三`
                 */
                OperatorName: string;
                /**
                 * 复核时间，yyyy-mm-ddhh:mm:ss。
                 * @example `2019-10-28 15:21:00`
                 */
                TimeStr: string;
                /**
                 * 复核后的得分。
                 * @example `95`
                 */
                Score: number;
                /**
                 * 复核结果，1：全部检测项都正确；0：有至少一个检测项错误。
                 * @example `1`
                 */
                ReviewResult: number;
                /**
                 * 申诉处理结果，1：全部申诉都通过；0：至少有一个不通过。
                 * @example `1`
                 */
                ComplainResult: number;
                /**
                 * 复核前的得分。
                 * @example `90`
                 */
                OldScore: number;
            }[];
        };
    };
}
