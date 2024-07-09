export interface DescribeDBInstancePerformanceResponse {
    /**
     * 查询结束时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2012-06-19T15:00Z`
     */
    EndTime: string;
    /**
     * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2012-06-10T15:00Z`
     */
    StartTime: string;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 数据库类型。
     * @example `MySQL`
     */
    Engine: string;
    /**
     * 请求ID。
     * @example `A5409D02-D661-4BF3-8F3D-0A814D0574E7`
     */
    RequestId: string;
    PerformanceKeys: {
        /**
         * 实例性能参数列表。
         */
        PerformanceKey: {
            /**
             * 性能参数。
             * @example `MySQL_NetworkTraffic`
             */
            Key: string;
            /**
             * 性能值的格式。
             * > 如果性能值由多个参数构成，以“&amp;”分隔，例如com_delete&amp;com_insert&amp;com_insert_select&amp;com_replace。
             * @example `recv_k&sent_k`
             */
            ValueFormat: string;
            /**
             * 数据单位。
             * @example `KB`
             */
            Unit: string;
            Values: {
                /**
                 * 性能参数值列表。
                 */
                PerformanceValue: {
                    /**
                     * 记录日期。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
                     * @example `2011-05-30T03:29:00Z`
                     */
                    Date: string;
                    /**
                     * 性能值。
                     * @example `5.35&6.74`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
