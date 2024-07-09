export interface ListEscalationPoliciesResponse {
    /**
     * 请求ID。
     * @example `78901766-3806-4E96-8E47-CFEF59E4****`
     */
    RequestId: string;
    /**
     * 分页对象。
     */
    PageBean: {
        /**
         * 查询到的总数。
         * @example `1`
         */
        Total: number;
        /**
         * 查询的页数。
         * @example `1`
         */
        Page: number;
        /**
         * 每页展示的数目。
         * @example `20`
         */
        Size: number;
        /**
         * 升级策略列表。
         */
        EscalationPolicies: {
            /**
             * 升级策略ID。
             * @example `1234`
             */
            Id: number;
            /**
             * 升级策略名称。
             * @example `prod升级策略`
             */
            Name: string;
        }[];
    };
}
