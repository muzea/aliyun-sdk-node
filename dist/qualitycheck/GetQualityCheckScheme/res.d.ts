export interface GetQualityCheckSchemeResponse {
    /**
     * QualityCheckScheme
     * 质检方案的Json，具体参考文档《[`质检任务对象说明`](~~453292~~)》
     */
    Data: {
        /**
         * 质检方案ID。
         * @example `112**`
         */
        SchemeId: number;
        /**
         * 质检方案名称。
         * @example `xxx`
         */
        Name: string;
        /**
         * 描述信息。
         * @example `售前使用`
         */
        Description: string;
        /**
         * 质检方案模板ID。
         * @example `1`
         */
        SchemeTemplateId: number;
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
         * 状态：0：已删除，1：已发布，2：未发布，3：已更新未发布，默认2
         * @example `1`
         */
        Status: number;
        /**
         * 关联的规则ID列表。
         */
        RuleIds: string[];
        /**
         * 规则列表
         */
        RuleList: any[];
        /**
         * 创建用户名
         * @example `xxx`
         */
        CreateUserName: string;
        /**
         * 任务创建时间。
         * @example `1616113198000`
         */
        CreateTime: string;
        /**
         * 上次更新用户名
         * @example `xxx`
         */
        UpdateUserName: string;
        /**
         * 最后更新时间。
         * @example `1616113198000`
         */
        UpdateTime: string;
        /**
         * 版本号。
         * @example `1616113198000`
         */
        Version: number;
        /**
         * 质检维度列表
         */
        SchemeCheckTypeList: {
            /**
             * 质检维度类型Id
             * @example `0`
             */
            CheckType: number;
            /**
             * 质检维度名称。
             * @example `服务规范性检测`
             */
            CheckName: string;
            /**
             * 原始得分。
             * @example `10`
             */
            SourceScore: number;
            /**
             * 质检维度分数。
             * @example `20`
             */
            Score: number;
            /**
             * 启用状态，可能值：0（禁用）；1（启用）。
             * @example `1`
             */
            Enable: number;
            /**
             * 质检方案ID。
             * @example `32`
             */
            SchemeId: number;
        }[];
    };
    /**
     * 请求ID
     * @example `96138D8D-8D26-4E41-BFF4-77AED1088BBD`
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
     * 出错时表示出错详情，成功时为**successful**。
     * @example `successful`
     */
    Message: string;
    /**
     * 返回提示信息列表
     */
    Messages: string[];
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
