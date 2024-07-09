export interface GetRuleResponse {
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
     * @example `F190ADE9-619A-447D-84E3-7E241A5C428E`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：**true**表示成功；**false/null**表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果
     */
    Data: {
        Rules: {
            /**
             * 分析结果信息列表
             */
            RuleInfo: {
                /**
                 * 状态，可能值：0：待生效，1：生效中，2：已失效。
                 * @example `1`
                 */
                Status: number;
                /**
                 * 【已废弃】规则类型
                 * @example `1`
                 */
                Type: number;
                /**
                 * 评分小项id。
                 * @example `22`
                 */
                ScoreSubId: number;
                /**
                 * 【已废弃】是否已经上线，0：未上线；1：已上线。目前值固定为1.
                 * @example `1`
                 */
                IsOnline: number;
                /**
                 * 创建时间
                 * @example `2016-08-05 10:37:10`
                 */
                CreateTime: string;
                /**
                 * 规则创建者ID
                 * @example `123`
                 */
                CreateEmpid: string;
                /**
                 * 最近更新的用户ID
                 * @example `123`
                 */
                LastUpdateEmpid: string;
                /**
                 * 是否删除，可能值：0：未删除，1：已删除。
                 * @example `0`
                 */
                IsDelete: number;
                /**
                 * 规则ID
                 * @example `4`
                 */
                Rid: string;
                /**
                 * 是否计分，可能值：1：不计分，3：计分。
                 * @example `1`
                 */
                RuleScoreType: number;
                /**
                 * 到期时间
                 * @example `2016-08-05 10:37:10`
                 */
                EndTime: string;
                /**
                 * 【已废弃】规则权重
                 * @example `1`
                 */
                Weight: string;
                /**
                 * 开始时间
                 * @example `2016-08-05 10:37:10`
                 */
                StartTime: string;
                /**
                 * 【已废弃】规则条件间关系
                 * @example `a && b`
                 */
                RuleLambda: string;
                /**
                 * 评分子项名称，当`ruleScoreType=3`时存在。
                 * @example `评分子项`
                 */
                ScoreSubName: string;
                /**
                 * 审核选项，可能值：1：不自动审核，3：自动审核。
                 * @example `1`
                 */
                AutoReview: number;
                /**
                 * 备注
                 * @example `测试规则`
                 */
                Comments: string;
                /**
                 * 最近更新时间
                 * @example `2019-10-28 14:23:28`
                 */
                LastUpdateTime: string;
                /**
                 * 评分大项名称，当`ruleScoreType=3`时存在。
                 * @example `评分大项`
                 */
                ScoreName: string;
                /**
                 * 规则名称
                 * @example `demo`
                 */
                Name: string;
                /**
                 * 评分大项ID。
                 * @example `123`
                 */
                ScoreId: number;
                BusinessCategoryNameList: {
                    /**
                     * 所属业务分类列表
                     */
                    BusinessCategoryNameList: string[];
                };
            }[];
        };
    };
}
