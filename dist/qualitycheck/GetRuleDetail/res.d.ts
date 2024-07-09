export interface GetRuleDetailResponse {
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
     * 请求ID
     * @example `4987D326-83D9-4A42-B9A5-0B27F9B40539`
     */
    RequestId: string;
    /**
     * 请求是否成功。调用方可根据此字段来判断请求是否成功：
     * - **true**表示成功
     * - **false/null**表示失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果
     */
    Data: {
        /**
         * 每页条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 当前页。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 总条数。
         * @example `10`
         */
        Count: number;
        Conditions: {
            /**
             * 所有条件的配置信息
             */
            ConditionBasicInfo: {
                /**
                 * 条件的ID
                 * @example `7`
                 */
                ConditionInfoCid: string;
                /**
                 * 条件中算子的逻辑关系
                 * @example `7`
                 */
                OperLambda: string;
                Operators: {
                    /**
                     * 条件包含的算子
                     */
                    OperatorBasicInfo: {
                        /**
                         * 算子类型
                         * @example `REGULAR_EXPRESSION`
                         */
                        Type: string;
                        /**
                         * 算子的ID
                         * @example `8`
                         */
                        Oid: string;
                        /**
                         * 算子名称，描述。
                         * @example `operator demo`
                         */
                        OperName: string;
                        /**
                         *  算子表达式具体内容
                         */
                        Param: {
                            /**
                             *  用以时间间隔算子，判断时间间隔，为true则目标句子如果与本句是同一个角色说的话就不参与计算。
                             * @example `true`
                             */
                            DifferentRole: boolean;
                            /**
                             *  用于正则算子，正则表达式。
                             * @example `.*修改密码.*`
                             */
                            Regex: string;
                            /**
                             *  用于判断重复算子，如果本句匹配上该正则表达式，那么匹配上的部份会在本句之前target_role指定的句子中查找。
                             * @example `客户`
                             */
                            TargetRole: string;
                            /**
                             * 语速检查算子中，每分钟的语速值（字数），用以判断本句的语速是否超过指定值。
                             * @example `280`
                             */
                            VelocityInMint: number;
                            /**
                             * 语速检查模式，可能值：true：检测整个对话的平均语速；false：检测单句话的语速。
                             * @example `true`
                             */
                            Average: boolean;
                            /**
                             * 关键词检查算子中，是否开启同义词扩展。
                             * @example `true`
                             */
                            KeywordExtension: boolean;
                            /**
                             * 文本相似度算子的相似度值
                             * @example `80`
                             */
                            Score: number;
                            /**
                             * 正则表达式检查中，排除的正则表达式。
                             * @example `发一下|告诉我`
                             */
                            NotRegex: string;
                            /**
                             * 大于还是小于，可能值：gt（大于）；lt（小于），默认值：gt。
                             * @example `gt`
                             */
                            CompareOperator: string;
                            /**
                             * 抢话检查算子中，延时判定抢话情况，比如，设置为1000，则表示同时一方开始说话1000毫秒后，再出现对话重叠才算作抢话，单位：毫秒
                             * @example `1000`
                             */
                            DelayTime: number;
                            /**
                             * 关键词检查算子中，匹配关键字的数量，不同的检测类型与该参数取值的关系：包含任意一个关键字（取值为1）、包含全部关键字（取值为-1）、包含任意N个关键字（取值为大于等于1并且小于等于关键字的个数正整数）、全部不包含（取值为0）。默认值根据关键字检测类型（type值）的不同而不同：HIT_ANY_KEYWORDS（1）、INCLUDE_KEYWORDS（-1）
                             * @example `3`
                             */
                            KeywordMatchSize: number;
                            /**
                             * 上下文重复算子中，表示第几次重复出现时才算违规，默认：1。
                             * @example `1`
                             */
                            HitTime: number;
                            /**
                             * 非正常挂机算子中使用，固定传DIALOGUE。
                             * @example `DIALOGUE`
                             */
                            BeginType: string;
                            /**
                             * 目标句子是当前句子的前多少句，为0时间间隔等于本句的结束时间-本句的开始时间。
                             * @example `1`
                             */
                            Target: number;
                            /**
                             * 能量检测算子中的能量值，取值范围：1-10。
                             * @example `8`
                             */
                            MaxEmotionChangeValue: number;
                            /**
                             * 用于编辑距离和匹配予以算子，指定的阈值。
                             * @example `4`
                             */
                            Threshold: number;
                            /**
                             * 上下文重复算子中，表示重复的两句话间隔在几句以内时才算违规，默认：2，即从当前局往前数2句（包含）之内重复算违规。
                             * @example `3`
                             */
                            From: number;
                            /**
                             * 用于时间间隔算子，判断时间间隔，指定时间间隔的计算方式是否用本句的结束时间减目标句子的结束时间。
                             * @example `true`
                             */
                            FromEnd: boolean;
                            /**
                             * 语速检查中，表示当一句话少于多少字时不检测。
                             * @example `4`
                             */
                            MinWordSize: number;
                            /**
                             * 用以判断是否是单句还是整句。
                             * @example `true`
                             */
                            InSentence: boolean;
                            /**
                             * 用于最小编辑距离算子，参考句子。
                             * @example `xxx`
                             */
                            Phrase: string;
                            /**
                             * 弃用字段，请忽略。
                             * @example `90`
                             */
                            Similarity_threshold: number;
                            /**
                             * 能量检测中的检测方式，可能值：1（相邻句能量波动）；2（最大能量跨度）；3（能量范围检测），默认值：3。
                             * @example `1`
                             */
                            CheckType: number;
                            /**
                             * 用于时间间隔算子，时间间隔。
                             * @example `5000`
                             */
                            Interval: number;
                            /**
                             * 关键词检查算子中，是否多句分析，用来指定分析方式，可能值：true多句分析；false单句分析，默认false。详见下方的分析方式详细说明。
                             * @example `true`
                             */
                            ContextChatMatch: boolean;
                            Excludes: {
                                /**
                                 * 上下文重复算子例外句子。
                                 */
                                Excludes: string[];
                            };
                            AntModelInfo: {
                                /**
                                 * 弃用字段，请忽略。
                                 */
                                AntModelInfo: string[];
                            };
                            Pvalues: {
                                /**
                                 * 弃用字段，请忽略。
                                 */
                                Pvalues: string[];
                            };
                            References: {
                                /**
                                 * 用于相似度匹配
                                 */
                                Reference: string[];
                            };
                            SimilarlySentences: {
                                /**
                                 * 文本相似度算子的示例语句集合
                                 */
                                SimilarlySentence: string[];
                            };
                            OperKeyWords: {
                                /**
                                 * 关键字列表
                                 */
                                OperKeyWord: string[];
                            };
                        };
                    }[];
                };
                /**
                 * 条件的检查范围
                 */
                CheckRange: {
                    /**
                     * 是否独立
                     * @example `true`
                     */
                    Absolute: boolean;
                    /**
                     * 角色，条件的作用角色范围
                     * @example `客服`
                     */
                    Role: string;
                    /**
                     * 条件的锚定关系
                     */
                    Anchor: {
                        /**
                         * `1~N`代表条件第一（N）次命中，**-1**代表条件最后一次命中。
                         * @example `1`
                         */
                        HitTime: number;
                        /**
                         * - **CURRENT**：条件命中的当前句
                         * - **BEFORE**：命中句子之前
                         * - **AFTER**：命中句子之后
                         * @example `AFTER`
                         */
                        Location: string;
                        /**
                         * 条件ID，用于确定anchor的条件
                         * @example `7`
                         */
                        AnchorCid: string;
                    };
                    /**
                     * Role和Anchor共同决定的范围。`1~N`表示由anchor和role共同限定的第1（N）句，-1表示由anchor和role共同限定的最后一句。
                     */
                    Range: {
                        /**
                         * `1~N`表示由anchor和role共同限定的第1（N）句，**-1**表示由anchor和role共同限定的最后一句。
                         * @example `10`
                         */
                        To: number;
                        /**
                         * `1~N`表示由anchor和role共同限定的第1（N）句，**-1**表示由anchor和role共同限定的最后一句。
                         * @example `1`
                         */
                        From: number;
                    };
                };
            }[];
        };
        Rules: {
            /**
             * 所有规则的配置信息
             */
            RuleBasicInfo: {
                /**
                 * 规则中条件的逻辑关系
                 * @example `7&&!8`
                 */
                RuleLambda: string;
                /**
                 * 规则的ID
                 * @example `4`
                 */
                Rid: string;
                BusinessCategories: {
                    /**
                     * 规则所属业务
                     */
                    BusinessCategoryBasicInfo: {
                        /**
                         * 规则所属业务名称
                         * @example `业务A`
                         */
                        BusinessName: string;
                        /**
                         * 业务类型
                         * @example `1`
                         */
                        ServiceType: number;
                        /**
                         * 规则所属业务BID，必须数字字符
                         * @example `264971810`
                         */
                        Bid: number;
                    }[];
                };
                Triggers: {
                    /**
                     * 触发列表。
                     */
                    Trigger: string[];
                };
            }[];
        };
    };
}
