export interface QueryCostUnitResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful!`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `6000EE23-274B-4E07-A697-FF2E999520A4`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 页码。
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 财务单元列表。
         */
        CostUnitDtoList: {
            /**
             * 父财务单元ID，-1表示财务单元根。
             * @example `-1`
             */
            ParentUnitId: number;
            /**
             * 财务单元名称。
             * @example `test`
             */
            UnitName: string;
            /**
             * 财务单元ID。
             * @example `23534`
             */
            UnitId: number;
            /**
             * 财务单元的属主用户。
             * @example `2343464`
             */
            OwnerUid: number;
        }[];
    };
}
