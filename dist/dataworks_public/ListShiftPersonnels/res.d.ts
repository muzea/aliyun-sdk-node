export interface ListShiftPersonnelsResponse {
    /**
     * 请求ID。用于出现错误后排查问题。
     * @example `0000-ABCD-EFG`
     */
    RequestId: string;
    /**
     * 分页结果
     */
    Paging: {
        /**
         * 页码数，用于翻页。最小值为1，最大值为100，默认为1。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的条数，默认为10条，最大100条。
         * @example `10`
         */
        PageSize: number;
        /**
         * 满足条件的数据总条数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 值班人列表
         */
        ShiftPersons: {
            /**
             * 值班人UID
             * @example `3726346****`
             */
            ShiftPersonUID: string;
            /**
             * 值班人名称
             * @example `张三`
             */
            ShiftPersonName: string;
            /**
             * 值班周期开始时间
             * @example `1593950832000`
             */
            BeginTime: number;
            /**
             * 值班周期结束时间
             * @example `1593950832000`
             */
            EndTime: number;
        }[];
    };
}
