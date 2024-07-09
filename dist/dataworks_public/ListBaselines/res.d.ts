export interface ListBaselinesResponse {
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `103630001`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `The user does not exist. 276571706358178756`
     */
    ErrorMessage: string;
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回的基线列表。
     */
    Data: {
        /**
         * 当前的页数。
         * @example `1`
         */
        PageNumber: string;
        /**
         * 每页的大小。
         * @example `10`
         */
        PageSize: string;
        /**
         * 基线的总数。
         * @example `100`
         */
        TotalCount: string;
        /**
         * 基线列表。
         */
        Baselines: {
            /**
             * 基线的ID。
             * @example `1234`
             */
            BaselineId: number;
            /**
             * 基线所在工作空间的ID。
             * @example `9527`
             */
            ProjectId: number;
            /**
             * 基线类型，包括DAILY（天基线）和HOURLY（小时基线）。
             * @example `DAILY`
             */
            BaselineType: string;
            /**
             * 基线的优先级，取值范围为{1,2,5,7,8}。
             * @example `1`
             */
            Priority: number;
            /**
             * 基线责任人的阿里云UID。有多个责任人时，使用英文逗号（,）分隔。
             * @example `952795****`
             */
            Owner: string;
            /**
             * 基线的名称。
             * @example `BaselineName`
             */
            BaselineName: string;
            /**
             * 基线是否开启，包括true（可用）和false（不可用）。
             * @example `true`
             */
            Enabled: boolean;
            /**
             * 是否开启告警，包括true（开启）和false（关闭）。
             * @example `true`
             */
            AlertEnabled: boolean;
            /**
             * 基线实例的预警阈值，单位为分钟。
             * @example `30`
             */
            AlertMarginThreshold: number;
            /**
             * 基线承诺时间设置。
             */
            OverTimeSettings: {
                /**
                 * 承诺时间对应的周期，天基线为1，小时基线可以配置最多24个周期。
                 * @example `1`
                 */
                Cycle: number;
                /**
                 * 承诺时间，hh:mm格式，hh的取值范围为\[0,47\]，mm的取值范围为\[0,59\]。
                 * @example `00:00`
                 */
                Time: string;
            }[];
        }[];
    };
    /**
     * 本次调用的唯一id。出现错误后，您可以根据该ID排查问题。
     * @example `952795279527ab****`
     */
    RequestId: string;
}
