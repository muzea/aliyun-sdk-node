export interface DescribeSQLLogCountResponse {
    /**
     * 查询结束时间。
     * @example `2020-12-14T11:22Z`
     */
    EndTime: string;
    /**
     * 请求ID。
     * @example `7565770E-7C45-462D-BA4A-8A**********`
     */
    RequestId: string;
    /**
     * 查询开始时间。
     * @example `2020-12-12T11:22Z`
     */
    StartTime: string;
    /**
     * 实例ID。
     * @example `gp-xxxxxxxx`
     */
    DBClusterId: string;
    /**
     * 返回项目列表。
     */
    Items: {
        /**
         * 返回值集合。
         */
        Series: {
            /**
             * 返回值。
             */
            Values: {
                /**
                 * 无
                 */
                Point: string[];
            }[];
        }[];
        /**
         * 实例名称。
         * @example `gp-xxxxxxxx`
         */
        Name: string;
    }[];
}
