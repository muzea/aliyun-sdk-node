export interface GetOpaStrategyTemplateSummaryResponse {
    /**
     * 风险镜像阻断规则模板使用统计数据列表。
     */
    Data: {
        /**
         * 模板编号。
         * @example `1`
         */
        TemplateId: number;
        /**
         * 模板名称。
         * @example `Blank template`
         */
        TemplateName: string;
        /**
         * 该模板被规则使用总数。
         * @example `2`
         */
        Count: number;
        /**
         * 模板描述。
         * @example `Custom defense configuration`
         */
        Description: string;
    }[];
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 错误码的详细信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `54572138-3390-5774-B71D-799DC8C2161B`
     */
    RequestId: string;
}
