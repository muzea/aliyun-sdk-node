export interface GetResultResponse {
    /**
     * 请求ID，请求唯一标识。
     * @example `3CEA0495-341B-4482-9AD9-8191EF4***`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 预留字段，暂时没有用途，请忽略。
     * @example `XXX`
     */
    ResultCountId: string;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为successful。
     * @example `successful`
     */
    Message: string;
    /**
     * 当前页。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总数。
     * @example `1`
     */
    Count: number;
    Data: {
        /**
         * 查询结果。
         */
        ResultInfo: {
            /**
             * 任务当前状态；0：未完成；1：已完成；调用方可根据此字段判断任务是否完成；非0、1表示出错，错误详情可查看errorMessage字段。
             * @example `0`
             */
            Status: number;
            /**
             * 分配时间（分配质检员的分配时间）。
             * @example `2021-03-02T14:37Z`
             */
            AssignmentTime: string;
            /**
             * 本条数据标志信息，当通过GetResult查询超过10000条以上的数据时，每次请求入参中需要携带上一次查询结果最后一条数据的lastDataId的值。
             * @example `4498420@a_z@93EAADF1-01D3-44BD-8AC9-F57F447EFCE8_1614*****`
             */
            LastDataId: string;
            /**
             * 当status是非0、1时表示错误详情。
             * @example `xxx`
             */
            ErrorMessage: string;
            /**
             * 分配的质检员。
             * @example `xxx`
             */
            Reviewer: string;
            /**
             * 任务创建时间。
             * @example `2019-07-24T19:31Z`
             */
            CreateTime: string;
            /**
             * 复核状态；0：未复核；1：已复核。
             * @example `1`
             */
            ReviewStatus: number;
            /**
             * 最后一次复核提交的时间（时间戳格式）。
             * @example `1602743090`
             */
            ReviewTimeLong: string;
            /**
             * 任务名称。
             * @example `test`
             */
            TaskName: string;
            /**
             * 复核准确性，可能值：0（错误）；1（正确）；2（部分正确）；3（待复核）。
             * @example `0`
             */
            ReviewResult: number;
            /**
             * 文件最终得分，满分100。
             * @example `100`
             */
            Score: number;
            /**
             * 任务创建时间（时间戳格式）。
             * @example `1602743090`
             */
            CreateTimeLong: string;
            /**
             * 最后一次复核提交的时间。
             * @example `2019-07-24T19:31Z`
             */
            ReviewTime: string;
            /**
             * 复核意见。
             * @example `xx`
             */
            Comments: string;
            /**
             * 任务ID。
             * @example `A6BEC8D-9A5B-4BE5-8432-4F635E***`
             */
            TaskId: string;
            /**
             * 复核状态，可能值：1（自动复核）；2（人工复核）。
             * @example `1`
             */
            ReviewType: number;
            /**
             * 实际复核的质检员。
             * @example `XXX`
             */
            Resolver: string;
            AsrResult: {
                /**
                 * 文件转写结果。
                 */
                AsrResult: {
                    /**
                     * 对话内容。
                     * @example `xx`
                     */
                    Words: string;
                    /**
                     * 本句相对于整个对话的开始时间，单位：毫秒。
                     * @example `10000`
                     */
                    Begin: number;
                    /**
                     * 本句的情绪值，0-10，值最大情绪越高。
                     * @example `1`
                     */
                    EmotionValue: number;
                    /**
                     * 本句相对于整个对话的结束时间，单位：毫秒。
                     * @example `0`
                     */
                    End: number;
                    /**
                     * 本句语速，单位：字/分钟。
                     * @example `50`
                     */
                    SpeechRate: number;
                    /**
                     * 本句的角色，取值：客服、客户。
                     * @example `客户`
                     */
                    Role: string;
                }[];
            };
            HitResult: {
                /**
                 * 规则命中结果。
                 */
                HitResult: {
                    /**
                     * 命中规则分类。
                     * @example `0417回归类型`
                     */
                    Type: string;
                    /**
                     * 复核准确性；0：错误；1：正确。
                     * @example `0`
                     */
                    ReviewResult: number;
                    /**
                     * 命中的规则名称。
                     * @example `20190417回归3`
                     */
                    Name: string;
                    /**
                     * 命中的规则ID。
                     * @example `1276`
                     */
                    Rid: string;
                    Hits: {
                        /**
                         * 命中规则。
                         */
                        Hit: {
                            KeyWords: {
                                /**
                                 * 命中的关键字（针对关键字、正则类型的算子）。
                                 */
                                KeyWord: {
                                    /**
                                     * 关键字的起始位置。
                                     * @example `1`
                                     */
                                    From: number;
                                    /**
                                     * 关键字的结束位置
                                     * @example `2`
                                     */
                                    To: number;
                                    /**
                                     * 算子命中的关键信息，详见下方返回参数说明中的**关键信息Val详解**。
                                     * @example `test`
                                     */
                                    Val: string;
                                    /**
                                     * 命中的条件ID。
                                     * @example `xxxx`
                                     */
                                    Cid: string;
                                }[];
                            };
                            Cid: {
                                /**
                                 * 命中的条件ID列表。
                                 */
                                Cid: string[];
                            };
                            /**
                             * 命中的句子信息。
                             */
                            Phrase: {
                                /**
                                 * 本句的情绪值，0-10，值越大情绪越高。
                                 * @example `0`
                                 */
                                EmotionValue: number;
                                /**
                                 * 本句相对于整个对话的结束时间，单位：毫秒。
                                 * @example `300`
                                 */
                                End: number;
                                /**
                                 * 对话内容。
                                 * @example `xxx`
                                 */
                                Words: string;
                                /**
                                 * 本句的角色，取值：客服、客户。
                                 * @example `客服`
                                 */
                                Role: string;
                                /**
                                 * 本句相对于整个对话的开始时间，单位：毫秒。
                                 * @example `300`
                                 */
                                Begin: number;
                            };
                        }[];
                    };
                    /**
                     * 质检方案ID。
                     * @example `123xx`
                     */
                    SchemeId: number;
                    /**
                     * 质检方案版本
                     * @example `11xx`
                     */
                    SchemeVersion: number;
                    Conditions: {
                        Conditions: {
                            /**
                             * 条件id，可能是db中的主键，也可能是转换成的a, b, c
                             */
                            Cid: string;
                            /**
                             * 在db中的主键
                             */
                            Id: number;
                            /**
                             * 条件所属的规则id
                             */
                            Rid: string;
                            /**
                             * 检测范围
                             */
                            Check_range: {
                                /**
                                 * 对应 RoleType.id
                                 */
                                RoleId: number;
                                /**
                                 * 对应 RoleType.type
                                 */
                                Role: string;
                                /**
                                 * 前置后置条件
                                 */
                                Anchor: {
                                    /**
                                     * 条件ID
                                     */
                                    Cid: string;
                                    /**
                                     * 位置
                                     */
                                    Location: string;
                                    /**
                                     * 命中次数
                                     */
                                    Hit_time: number;
                                };
                                /**
                                 * 相对范围
                                 */
                                Range: {
                                    /**
                                     * 对话开始索引
                                     */
                                    From: number;
                                    /**
                                     * 对话结束索引
                                     */
                                    To: number;
                                };
                                TimeRange: {
                                    From: number;
                                    To: number;
                                };
                                /**
                                 * false: 相对位置; 会结合anchor以及角色来决定句子位置
                                 */
                                Absolute: boolean;
                                /**
                                 * true: 每句话都必须满足条件；
                                 */
                                AllSentencesSatisfy: boolean;
                            };
                            Operators: {
                                /**
                                 * 算子列表
                                 */
                                Operator: {
                                    /**
                                     * 可能是主键id，也可能是前端生成的id
                                     */
                                    Oid: string;
                                    /**
                                     * 主键id
                                     */
                                    Id: number;
                                    /**
                                     * 算子类别
                                     */
                                    Type: string;
                                    /**
                                     * 算子参数
                                     */
                                    Param: {
                                        Keywords: {
                                            /**
                                             * 关键词
                                             */
                                            Keyword: string[];
                                        };
                                        /**
                                         * 正则表达式
                                         */
                                        Regex: string;
                                        /**
                                         * 排除的正则表达式
                                         */
                                        NotRegex: string;
                                        /**
                                         * 语句
                                         */
                                        Phrase: string;
                                        /**
                                         * interval代表区间范围开始
                                         */
                                        Interval: number;
                                        /**
                                         * intervalEnd 代表区间范围结束
                                         */
                                        IntervalEnd: number;
                                        /**
                                         * 阈值
                                         */
                                        Threshold: number;
                                        /**
                                         * 生效句子， true单个句子，false多个句子
                                         */
                                        In_sentence: boolean;
                                        /**
                                         * target
                                         */
                                        Target: number;
                                        /**
                                         * from_end
                                         */
                                        From_end: boolean;
                                        /**
                                         * 关键字扩展
                                         */
                                        KeywordExtension: number;
                                        /**
                                         * 区分大小写
                                         */
                                        Case_sensitive: boolean;
                                        /**
                                         * true表示取不同角色相邻的两句话，false表示取不同角色的第一句话比较响应时间（默认）
                                         */
                                        Near_dialogue: boolean;
                                        /**
                                         * 句子中最少字数，小于此字数的句子不检查
                                         */
                                        MinWordSize: number;
                                        /**
                                         * 上下文重复算子：重复几次
                                         */
                                        Hit_time: number;
                                        Excludes: {
                                            /**
                                             * 上下文重复算子：排除掉某些对话
                                             */
                                            Exclude: string[];
                                        };
                                        /**
                                         * 上下文重复算子：检测当前句的前from句是否有重复；0表示前面的所有句
                                         */
                                        From: number;
                                        /**
                                         * 静音检测：要不要检测第一句话
                                         */
                                        CheckFirstSentence: boolean;
                                        /**
                                         * 语速检测，是否计算整个对话平均语速，默认false
                                         */
                                        Average: boolean;
                                        /**
                                         * 时长算子，时长计算开始类型，录音开始，还是某句对话开始
                                         */
                                        BeginType: string;
                                        /**
                                         * 时长算子，时长计算结束类型，录音结束，还是某句对话结束
                                         */
                                        EndType: string;
                                        /**
                                         * 大于，还是小于，gt/lt
                                         */
                                        CompareOperator: string;
                                        /**
                                         * 是否单句话匹配；
                                         */
                                        ContextChatMatch: boolean;
                                        /**
                                         * 匹配到的关键字数量
                                         */
                                        KeywordMatchSize: number;
                                        /**
                                         * 能量值变化，默认3, 1~9
                                         */
                                        MaxEmotionChangeValue: number;
                                        /**
                                         * 检测方式：1（相邻句能量波动）、2（最大能量跨度），默认为1。
                                         */
                                        CheckType: number;
                                        /**
                                         * 抢话算子，延时时长。
                                         */
                                        DelayTime: number;
                                        /**
                                         * 流程节点前置条件参数
                                         */
                                        FlowNodePrerequisiteParam: {
                                            /**
                                             * 节点id
                                             */
                                            NodeId: number;
                                            /**
                                             * 冗余的节点名称
                                             */
                                            NodeName: string;
                                            /**
                                             * 节点匹配状态。
                                             */
                                            NodeMatchStatus: number;
                                        };
                                        /**
                                         * 意图模型检查参数
                                         */
                                        IntentModelCheckParm: {
                                            /**
                                             * 模型应用的场景：AGENT（客户场景）、CUSTOMER（客服场景 ）。
                                             */
                                            ModelScene: string;
                                            Intents: {
                                                /**
                                                 * 引用的意图模型
                                                 */
                                                Intent: {
                                                    /**
                                                     * 意图模型ID
                                                     */
                                                    Id: number;
                                                    /**
                                                     * 意图模型名称
                                                     */
                                                    Name: string;
                                                }[];
                                            };
                                        };
                                    };
                                    /**
                                     * 算子名
                                     */
                                    Name: string;
                                }[];
                            };
                            /**
                             * Lambda表达式，例如`a&&b`。
                             */
                            Lambda: string;
                            /**
                             * 排除
                             */
                            Exclusion: number;
                        }[];
                    };
                }[];
            };
            HitScore: {
                /**
                 * 当前文件命中的评分项信息，包含命中规则所关联的评分项以及人工添加的评分项。
                 */
                HitScore: {
                    /**
                     * 评分项的名称。
                     * @example `投诉`
                     */
                    ScoreName: string;
                    /**
                     * 评分项的分数，正数表示加分，负分表示减分。
                     * @example `-20`
                     */
                    ScoreNumber: string;
                    /**
                     * 评分项id。
                     * @example `123456`
                     */
                    ScoreId: string;
                    /**
                     * 命中规则的规则id，若存在，则表示是规则关联的评分项；不存在则表示是人工添加的评分项。
                     * @example `123`
                     */
                    RuleId: string;
                }[];
            };
            /**
             * 录音文件信息。
             */
            Recording: {
                /**
                 * 自定义数据13。
                 * @example `XXX`
                 */
                Remark13: string;
                /**
                 * 被叫号码。
                 * @example `1888888****`
                 */
                Callee: string;
                /**
                 * 对话轮数。
                 * @example `32`
                 */
                DialogueSize: number;
                /**
                 * 录音文件ID。
                 * @example `3437500`
                 */
                PrimaryId: string;
                /**
                 * 自定义数据12。
                 * @example `XXX`
                 */
                Remark12: string;
                /**
                 * 自定义数据1
                 * @example `XXX`
                 */
                Remark1: string;
                /**
                 * 自定义数据7。
                 * @example `XXX`
                 */
                Remark7: string;
                /**
                 * 自定义数据8。
                 * @example `XXX`
                 */
                Remark8: string;
                /**
                 * 自定义数据2
                 * @example `XXX`
                 */
                Remark2: string;
                /**
                 * 通话ID。
                 * @example `XXXX`
                 */
                CallId: string;
                /**
                 * 自定义数据9。
                 * @example `XXX`
                 */
                Remark9: string;
                /**
                 * 录音文件名称。
                 * @example `123456.mkv`
                 */
                Name: string;
                /**
                 * 自定义数据6
                 * @example `XXX`
                 */
                Remark6: string;
                /**
                 * 自定义数据10。
                 * @example `XXX`
                 */
                Remark10: string;
                /**
                 * 业务线名称，用于分类统计
                 * @example `客服业务线`
                 */
                Business: string;
                /**
                 * 自定义数据3
                 * @example `XXX`
                 */
                Remark3: string;
                /**
                 * 文件地址。
                 * @example `http://aliyun.com/audio.wav`
                 */
                Url: string;
                /**
                 * 自定义数据11。
                 * @example `XXX`
                 */
                Remark11: string;
                /**
                 * 自定义数据4
                 * @example `XXX`
                 */
                Remark4: string;
                /**
                 * 呼叫类型：1：呼出；3：呼入。
                 * @example `1`
                 */
                CallType: number;
                /**
                 * 主叫号码。
                 * @example `0108888****`
                 */
                Caller: string;
                /**
                 * 文件所属数据集，当文件是数据集上传时有值。
                 * @example `XXXX`
                 */
                DataSetName: string;
                /**
                 * 通话时长，单位：秒。
                 * @example `60`
                 */
                Duration: number;
                /**
                 * 自定义数据5
                 * @example `1232`
                 */
                Remark5: number;
                /**
                 * 文件ID，即请求参数中的callId，若未指定则会随机生成一个。
                 * @example `XXXXX`
                 */
                Id: string;
                /**
                 * 录音生成时间戳，精确到毫秒。
                 * @example `1563967699000`
                 */
                CallTime: string;
                /**
                 * 任务id。
                 * @example `123`
                 */
                TaskConfigId: number;
                /**
                 * 任务名称。
                 * @example `任务A`
                 */
                TaskConfigName: string;
            };
            /**
             * 客服相关信息。
             */
            Agent: {
                /**
                 * 客服姓名。
                 * @example `智能对话分析客服`
                 */
                Name: string;
                /**
                 * 技能组名称。
                 * @example `质检技能`
                 */
                SkillGroup: string;
                /**
                 * 客服ID。
                 * @example `28240****15643`
                 */
                Id: string;
            };
            SchemeIdList: {
                /**
                 * 质检方案ID列表。
                 */
                SchemeIdList: number[];
            };
            SchemeNameList: {
                /**
                 * 质检方案名称列表。
                 */
                SchemeNameList: string[];
            };
        }[];
    };
}
