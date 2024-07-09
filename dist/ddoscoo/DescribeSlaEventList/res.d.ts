export interface DescribeSlaEventListResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CF33B4C3-196E-4015-AADD-5CAD00057B80`
     */
    RequestId: string;
    /**
     * 目的限速事件列表。
     */
    SlaEvent: {
        /**
         * 查询事件的开始时间，单位：秒。
         * @example `1678080840`
         */
        StartTime: number;
        /**
         * 查询事件的结束时间，单位：秒。
         * @example `1671886740`
         */
        EndTime: number;
        /**
         * 要查询的高防实例IP。
         * @example `203.107.XX.XX`
         */
        Ip: string;
        /**
         * 目的限速IP所属地区。取值：
         * - **cn**：中国内地。
         * - **cn-hongkong**：中国香港。
         * @example `cn`
         */
        Region: string;
    }[];
    /**
     * 目的限速列表总数。
     * @example `10`
     */
    Total: number;
}
