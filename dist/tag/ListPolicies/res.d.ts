export interface ListPoliciesResponse {
    /**
     * 请求ID。
     * @example `72477CFF-5B24-5E30-9861-3DD9C4BD46E5`
     */
    RequestId: string;
    /**
     * 根据`NextToken`判断是否具备下一个查询开始的Token。取值：
     * - 如果`NextToken`为空，即`"NextToken": ""`，表示没有下一个。
     * - 如果`NextToken`有值，则该值就是下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 标签策略列表。
     */
    PolicyList: {
        /**
         * 标签策略名称。
         * @example `example`
         */
        PolicyName: string;
        /**
         * 标签策略描述。
         * @example `This is a tag policy example.`
         */
        PolicyDesc: string;
        /**
         * 标签策略内容。
         * @example `{\"tags\":{\"CostCenter\":{\"tag_value\":{\"@@assign\":[\"Beijing\",\"Shanghai\"]},\"tag_key\":{\"@@assign\":\"CostCenter\"}}}}`
         */
        PolicyContent: string;
        /**
         * 标签策略ID。
         * @example `p-de62a0bf400e4b69****`
         */
        PolicyId: string;
        /**
         * 标签策略模式。取值：
         * - USER：单账号模式。
         * - RD：多账号模式。
         * 关于标签策略模式的更多信息，请参见[标签策略模式](~~417434~~)。
         * @example `USER`
         */
        UserType: string;
    }[];
}
