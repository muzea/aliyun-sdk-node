export interface ListRuleConditionsResponse {
    /**
     * 返回详情结果
     */
    result: {
        /**
         * 选品规则过滤条件类型
         * @example `QUERY_ITEM_TYPE`
         */
        selectType: string;
        /**
         * 选品规则过滤条件具体数值
         * @example `[\"image\",\"article\",\"video\",\"shortvideo\",\"item\",\"recipe\",\"audio\"]`
         */
        selectValue: string;
        /**
         * 选品规则过滤条件操作
         * @example `QUERY_VALUE_IN`
         */
        selectionOperation: string;
    }[];
    /**
     * 错误码
     * @example `200`
     */
    code: string;
    /**
     * 请求id
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 错误详情
     * @example `success`
     */
    message: string;
}
