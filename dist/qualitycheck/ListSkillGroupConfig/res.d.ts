export interface ListSkillGroupConfigResponse {
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
     * 请求ID。
     * @example `3CEA0495-341B-4482-9AD9-8191EF4***	`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败。
     * @example `true`
     */
    Success: boolean;
    Data: {
        /**
         * 配置列表信息
         */
        SkillGroupConfig: {
            /**
             * 配置类型，可能值：1（自定义新建配置）；0（系统内置配置）
             * @example `1`
             */
            Type: number;
            /**
             * 启用状态，可能值：0（未启用）；1（启用）
             * @example `1`
             */
            Status: number;
            /**
             * 更新时间
             * @example `2020-12-01T19:28Z	`
             */
            UpdateTime: string;
            /**
             * 实时质检结束后是否进行全文质检。可能值：1（进行全文质检）；0（不进行全文质检）
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
             * @example `123`
             */
            SkillGroupId: string;
            /**
             * 是否启用随录数据匹配。
             * @example `true`
             */
            ScreenSwitch: boolean;
            /**
             * 内部字段，请忽略。
             * @example `xxx`
             */
            InstanceId: string;
            /**
             * 热词模型ID。
             * @example `323`
             */
            VocabId: number;
            /**
             * 技能组来源，固定为0
             * @example `0`
             */
            SkillGroupFrom: number;
            /**
             * 质检规则ID。
             * @example `2221`
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
             * 全文质检时的质检规则id
             * @example `223`
             */
            AllRids: string;
            /**
             * 配置名称。
             * @example `xxx`
             */
            Name: string;
            /**
             * 语言模型ID
             * @example `211`
             */
            ModelId: number;
            /**
             * 配置ID
             * @example `221`
             */
            Id: number;
            /**
             * 质检类型，可能值：0（离线质检）；1（实时质检）
             * @example `0`
             */
            QualityCheckType: number;
            /**
             * 热词模型名称
             * @example `xxx`
             */
            VocabName: string;
            RuleList: {
                /**
                 * 规则列表
                 */
                RuleNameInfo: {
                    /**
                     * 规则名称
                     * @example `x'x'x`
                     */
                    RuleName: string;
                    /**
                     * 规则ID
                     * @example `2221`
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
                     * 规则名称
                     * @example `test`
                     */
                    RuleName: string;
                    /**
                     * 规则ID。
                     * @example `221`
                     */
                    Rid: number;
                }[];
            };
            SkillGroupScreens: {
                /**
                 * 随录数据信息。
                 */
                SkillGroupScreen: {
                    /**
                     * 随录数据匹配值。
                     * @example `张三`
                     */
                    Value: string;
                    /**
                     * value的类型，0：String；1：Number；2：List（在使用=的时候，都使用list类型来传递参数value）
                     * @example `0`
                     */
                    DataType: number;
                    /**
                     * 运算符
                     * - 1：=
                     * - 2：>
                     * - 3：<
                     * @example `1`
                     */
                    Symbol: number;
                    /**
                     * 随录数据字段名称，随录数据指的是在上传质检任务时，传入的参数，也就是质检结果列表页表格的表头内容。这里具体的值是英文，例如客服姓名=>customerName，更多可用字段对应的英文可参考对应上传质检数据接口文档中的请求入参。
                     * @example `customerName`
                     */
                    Name: string;
                }[];
            };
        }[];
    };
}
