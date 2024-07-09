export interface ListShiftSchedulesResponse {
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `E6F0DBDD-5AD****`
     */
    RequestId: string;
    /**
     * 分页详情。
     */
    Paging: {
        /**
         * 页码数，用于翻页。最小值为1，最大值为100。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的条数
         * @example `10`
         */
        PageSize: number;
        /**
         * 数据量总数
         * @example `100`
         */
        TotalCount: number;
        /**
         * 值班表列表数据
         */
        ShiftSchedules: {
            /**
             * 值班表唯一标识，可用来查询值班表值班人员列表
             * @example `2ab6456ada634b2f938ee******9b45b`
             */
            ShiftScheduleIdentifier: string;
            /**
             * 值班表的名称。
             * @example `值班表名称`
             */
            ShiftScheduleName: string;
        }[];
    };
}
