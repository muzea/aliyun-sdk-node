export interface CreateCostUnitResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful！`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `F5B803CF-94D8-43AF-ADB3-D819AAD30E27`
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
         * 财务单元实体列表。
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
             * @example `84327659328`
             */
            UnitId: number;
            /**
             * 新财务单元的属主用户ID。
             * @example `26387563`
             */
            OwnerUid: number;
        }[];
    };
}
