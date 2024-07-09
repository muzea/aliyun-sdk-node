export interface GetSkillGroupConfigResponse {
    /**
     * 结果代码，**200**表示成功。
     * > 若为别的值则表示失败，调用方可根据此字段判断失败原因。
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
     * @example `3CEA0495-341B-4482-9AD9-8191EF4***	`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * 调用方可根据此字段来判断请求是否成功：
     * - **true**表示成功
     * - **false/null**表示失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 技能组规则配置详情列表
     */
    Data: {
        /**
         * 配置类型，可能值：1（自定义新建配置）；0（系统内置配置）
         * @example `1`
         */
        Type: number;
        /**
         * 启用状态，可能值：0（未启用）；1（启用）
         * @example `0`
         */
        Status: number;
        /**
         * 更新时间
         * @example `2020-12-01T19:28Z`
         */
        UpdateTime: string;
        /**
         * 实时质检结束后是否进行全文质检。可能值：
         * - 1：进行全文质检
         * - 0：不进行全文质检
         * @example `1`
         */
        AllContentQualityCheck: number;
        /**
         * 创建时间
         * @example `2020-12-01T15:12Z`
         */
        CreateTime: string;
        /**
         * 技能组ID
         * @example `111`
         */
        SkillGroupId: string;
        /**
         * 内部字段，请忽略。
         * @example `xxx`
         */
        InstanceId: string;
        /**
         * 热词ID
         * @example `123`
         */
        VocabId: number;
        /**
         * 技能组来源，固定为0
         * @example `0`
         */
        SkillGroupFrom: number;
        /**
         * 质检规则ID。
         * @example `2332`
         */
        Rid: string;
        /**
         * 技能组名称
         * @example `xxx`
         */
        SkillGroupName: string;
        /**
         * 语言模型名称
         * @example `xxx`
         */
        ModelName: string;
        /**
         * 全文质检时的质检规则ID。
         * @example `223`
         */
        AllRids: string;
        /**
         * 配置名称
         * @example `xxx`
         */
        Name: string;
        /**
         * 语言模型ID
         * @example `1321`
         */
        ModelId: number;
        /**
         * 配置ID。
         * @example `1212`
         */
        Id: number;
        /**
         * 质检类型，可能值：
         * - 0：离线质检
         * - 1：实时质检
         * @example `0`
         */
        QualityCheckType: number;
        /**
         * 热词名称
         * @example `test`
         */
        VocabName: string;
        RuleList: {
            /**
             * 规则列表
             */
            RuleNameInfo: {
                /**
                 * 规则名称
                 * @example `test`
                 */
                RuleName: string;
                /**
                 * 规则ID。
                 * @example `222`
                 */
                Rid: number;
            }[];
        };
        AllRuleList: {
            /**
             * 全文质检使用的规则明细
             */
            RuleNameInfo: {
                /**
                 * 规则名称。
                 * @example `test`
                 */
                RuleName: string;
                /**
                 * 规则ID。
                 * @example `12`
                 */
                Rid: number;
            }[];
        };
    };
}
