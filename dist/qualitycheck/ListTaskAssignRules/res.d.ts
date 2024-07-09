export interface ListTaskAssignRulesResponse {
    /**
     * 请求ID。
     * @example `106C6CA0-282D-4AF7-85F0-D2D24F4CE647`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败。
     * @example `true`
     */
    Success: boolean;
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
     * 总条数。
     * @example `23`
     */
    Count: number;
    Data: {
        /**
         * 详细返回数据。
         */
        TaskAssignRuleInfo: {
            /**
             * 最后更新时间。
             * @example `2019-07-12T14:47Z`
             */
            UpdateTime: string;
            /**
             * 弃用字段，请忽略。
             * @example `XX`
             */
            SkillGroupsStr: string;
            /**
             * 通话时间结束值，单位：秒，例如上午十一点，则传入39600。
             * @example `39600`
             */
            CallTimeEnd: number;
            /**
             * 通话时长区间最大值（秒）。
             * @example `400`
             */
            DurationMax: number;
            /**
             * 创建时间。
             * @example `2019-07-12T14:47Z`
             */
            CreateTime: string;
            /**
             * 弃用字段，请忽略。
             * @example `1`
             */
            Priority: number;
            /**
             * 通话时长区间最小值（秒）。
             * @example `100`
             */
            DurationMin: number;
            /**
             * 弃用字段，请忽略。
             * @example `XX`
             */
            AgentsStr: string;
            /**
             * 规则名称。
             * @example `分配规则`
             */
            RuleName: string;
            /**
             * 规则ID。
             * @example `23`
             */
            RuleId: number;
            /**
             * 分配类型，可能值：0指定分配，1随机分配。
             * @example `0`
             */
            AssignmentType: number;
            /**
             * 呼叫类型，可取值：1呼出；3呼入；0不限。
             * @example `1`
             */
            CallType: number;
            /**
             * 弃用字段，请忽略。
             * @example `1`
             */
            Enabled: number;
            /**
             * 通话时间结束值，单位：秒，例如上午十一点，则传入39600。
             * @example `39600`
             */
            CallTimeStart: number;
            Agents: {
                /**
                 * 客服列表。
                 */
                Agent: {
                    /**
                     * 客服名称。
                     * @example `agent`
                     */
                    AgentName: string;
                    /**
                     * 客服的用户ID。
                     * @example `202526561358712105`
                     */
                    AgentId: string;
                }[];
            };
            SkillGroups: {
                /**
                 * 技能组列表信息。
                 */
                SkillGroup: {
                    /**
                     * 技能组名称。
                     * @example `客服组`
                     */
                    SkillName: string;
                    /**
                     * 弃用字段，请忽略。
                     * @example `XXX`
                     */
                    SkillId: string;
                }[];
            };
            Reviewers: {
                /**
                 * 质检员信息。
                 */
                Reviewer: {
                    /**
                     * 质检员的用户ID。
                     * @example `2337235457340978`
                     */
                    ReviewerId: string;
                    /**
                     * 质检员名称。
                     * @example `客服审核1`
                     */
                    ReviewerName: string;
                }[];
            };
            Rules: {
                /**
                 * 所选的质检规则列表。
                 */
                RuleBasicInfo: {
                    /**
                     * 质检规则名称。
                     * @example `用户可能要投诉`
                     */
                    Name: string;
                    /**
                     * 质检规则ID。
                     * @example `2312`
                     */
                    Rid: string;
                }[];
            };
            /**
             * 随机分配参数。
             */
            SamplingMode: {
                /**
                 * 按客服维度指定客服时，每个客服抽检的文件条数。
                 * @example `20`
                 */
                NumberOfDraws: number;
                /**
                 * 按时间维度模式下，抽取通话录音的时长，单位：分钟。
                 * @example `60`
                 */
                AnyNumberOfDraws: number;
                /**
                 * 抽检文件条数上限。
                 * @example `30`
                 */
                Limit: number;
                /**
                 * 抽检比例，0.1代表10%。
                 * @example `0.1`
                 */
                Proportion: number;
                /**
                 * 抽样模式，可能值：0：按会话维度，1：按客服维度，2：按时间维度。
                 * @example `0`
                 */
                Dimension: number;
                /**
                 * 抽样模式为按客服维度时，是否指定客服。
                 * @example `true`
                 */
                Designated: boolean;
                /**
                 * 按客服维度不指定客服时，随机抽检客服的个数。
                 * @example `5`
                 */
                RandomInspectionNumber: number;
                SamplingModeAgents: {
                    /**
                     * 按客服维度指定客服时客服的列表。
                     */
                    SamplingModeAgent: {
                        /**
                         * 客服用户名。
                         * @example `zhangsan`
                         */
                        AgentName: string;
                        /**
                         * 客服id。
                         * @example `123`
                         */
                        AgentId: string;
                    }[];
                };
            };
        }[];
    };
}
