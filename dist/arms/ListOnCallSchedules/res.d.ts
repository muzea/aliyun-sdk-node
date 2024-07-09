export interface ListOnCallSchedulesResponse {
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
         * 排班策略信息列表。
         */
        OnCallSchedules: {
            /**
             * 排班策略ID。
             * @example `1234`
             */
            Id: number;
            /**
             * 排班策略名称。
             * @example `OnCallSchedule_test`
             */
            Name: string;
            /**
             * 排班策略描述。
             * @example `测试排班策略`
             */
            Description: string;
        }[];
    };
}
