export interface DescribeACLProtectTrendResponse {
    /**
     * 本次调用请求的ID。
     * @example `9063AB86-6FFA-5B2D-A16D-697C966DECA3`
     */
    RequestId: string;
    /**
     * 返回数据的步长，单位为秒，即每隔多少秒返回一个结果。
     * @example `86400`
     */
    Interval: number;
    /**
     * 互联网访问控制总拦截数。
     * @example `300`
     */
    TotalProtectCnt: number;
    /**
     * 互联网访问控制外对内拦截次数。
     * @example `100`
     */
    InProtectCnt: number;
    /**
     * 本参数已废弃。
     * @example `0`
     */
    InterVPCProtectCnt: number;
    /**
     * 互联网访问控制内对外拦截次数。
     * @example `200`
     */
    OutProtectCnt: number;
    /**
     * 互联网访问控制拦截趋势数据列表。
     */
    TrendList: {
        /**
         * 每天0点的时间戳，单位为秒，表示当天的时间。
         * @example `1697299200`
         */
        Time: number;
        /**
         * 互联网访问控制当天拦截数。
         * @example `100`
         */
        ProtectCnt: number;
    }[];
}
