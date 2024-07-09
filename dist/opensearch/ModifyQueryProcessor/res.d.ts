export interface ModifyQueryProcessorResponse {
    /**
     * 请求ID
     * @example `D77D0DAF-790D-F5F5-A9C0-133738165014`
     */
    requestId: string;
    /**
     * 规则信息
     * @example `{}`
     */
    result: {
        /**
         * 创建时间
         * @example `0`
         */
        created: number;
        /**
         * 是否默认规则
         * @example `true`
         */
        active: boolean;
        /**
         * 更新时间
         * @example `1`
         */
        updated: number;
        /**
         * 规则名称
         * @example `synonym`
         */
        name: string;
        /**
         * 行业类型
         * - GENERAL 通用
         * - ECOMMERCE 电商
         * - IT_CONTENT IT内容
         * @example `GENERAL`
         */
        domain: string;
        /**
         * 应用的索引范围
         * @example `["default"]`
         */
        indexes: string[];
        /**
         * 分析规则
         * @example `[]`
         */
        processors: any[];
    };
}
