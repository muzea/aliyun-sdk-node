export interface ListQueryProcessorsResponse {
    /**
     * 请求ID
     * @example `0A6EB64B-B4C8-CF02-810F-E660812972FF`
     */
    requestId: string;
    /**
     * 规则信息
     * 参考：[QueryProcessor](~~170014~~)
     */
    result: {
        /**
         * 创建时间
         * @example `1587398402`
         */
        created: number;
        /**
         * 是否默认规则
         * @example `true`
         */
        active: boolean;
        /**
         * 更新时间
         * @example `1587398402`
         */
        updated: number;
        /**
         * 规则名称
         * @example `ner`
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
         */
        indexes: string[];
        /**
         * 包含功能
         */
        processors: any[];
    }[];
}
