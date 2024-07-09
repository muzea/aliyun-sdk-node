export interface ListQualityCheckSchemeResponse {
    /**
     * 请求ID。
     * @example `82C91484-B2D5-4D2A-A21F-A6D73F4***	`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：**true**表示成功；**false/null**表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 内部字段，请忽略。
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
     * 当前页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页显示条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总条数。
     * @example `22`
     */
    Count: number;
    /**
     * 质检方案列表数据
     */
    Data: {
        /**
         * 质检方案ID。
         * @example `112**`
         */
        SchemeId: number;
        /**
         * 质检方案名称
         * @example `test`
         */
        Name: string;
        /**
         * 描述信息。
         * @example `售前使用`
         */
        Description: string;
        /**
         * 质检方案的数据类型，可能值：0文本；1音频。
         * @example `1`
         */
        DataType: number;
        /**
         * 质检方案类型，可能值：0系统内置；1自定义创建。
         * @example `1`
         */
        Type: number;
        /**
         * 质检方案模板的类型，可能值：1系统内置；2自定义创建。
         * @example `1`
         */
        TemplateType: number;
        /**
         * 质检方案的状态，可能值：0已删除；1已发布；2未发布；3已更新未发布。
         * @example `1`
         */
        Status: number;
        /**
         * 创建者名字
         * @example `张三`
         */
        CreateUserName: string;
        /**
         * 创建时间
         * @example `2022-05-10T09:34Z`
         */
        CreateTime: string;
        /**
         * 更新者名字
         * @example `李四`
         */
        UpdateUserName: string;
        /**
         * 更新时间
         * @example `2022-05-10T10:34Z`
         */
        UpdateTime: string;
        /**
         * 质检维度列表
         */
        SchemeCheckTypeList: {
            /**
             * 质检维度type
             * @example `1`
             */
            CheckType: number;
            /**
             * 启用状态，可能值：0（禁用）；1（启用）。
             * @example `1`
             */
            Enable: number;
            /**
             * 质检维度名称。
             * @example `服务规范性检测`
             */
            CheckName: string;
            /**
             * 内置字段，请忽略。
             * @example `10`
             */
            TargetType: number;
            /**
             * 质检维度分数。
             * @example `20`
             */
            Score: number;
        }[];
        /**
         * 检测项列表。
         */
        RuleList: {
            /**
             * 规则信息：这里只有一条，预留扩展
             */
            Rules: {
                /**
                 * 检测项ID
                 * @example `12`
                 */
                Rid: number;
                /**
                 * 检测项名称
                 * @example `测试规则`
                 */
                Name: string;
                /**
                 * 是否计分，可能值：1（不计分）；3（计分）
                 * @example `1`
                 */
                RuleScoreType: number;
                /**
                 * 分数
                 * @example `2`
                 */
                ScoreNum: number;
                /**
                 * 加减分，可能值：1（加分）；3（减分）
                 * @example `1`
                 */
                ScoreType: number;
                /**
                 * 所属质检维度。
                 * @example `1`
                 */
                CheckType: number;
                /**
                 * 检测项应用场景，可能值：10（普通检测项）；11（SOP流程检测项）
                 * @example `10`
                 */
                TargetType: number;
                /**
                 * 计分类型，可能值：0（触发规则后加减分）；1（触发规则后一次性得分）
                 * @example `0`
                 */
                ScoreNumType: number;
            }[];
        }[];
        /**
         * 质检方案版本
         * @example `1`
         */
        Version: number;
    }[];
}
