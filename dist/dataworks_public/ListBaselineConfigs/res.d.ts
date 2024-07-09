export interface ListBaselineConfigsResponse {
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 本次调用的唯一ID。出现错误后，您可以根据该ID排查问题。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `1031203110005`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的基线列表。
     */
    Data: {
        /**
         * 当前的页数。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页的大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 基线的总数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 基线列表。
         */
        Baselines: {
            /**
             * 小时基线的承诺时间配置（JSON格式），key为周期号，value为hh:mm格式。hh的取值范围为\[0,47\]，mm的取值范围为\[0,59\]。
             * @example `{"1":"03:58","2":"04:58","3":"05:58","4":"06:58","5":"07:58","6":"08:58","7":"09:58","8":"10:58","9":"11:58","10":"12:58","11":"13:58","12":"14:58","13":"15:58","14":"16:58","15":"17:58","16":"18:58","17":"19:58","18":"20:58","19":"21:58","20":"22:58","21":"23:58","22":"24:58","23":"25:58","24":"26:58"}`
             */
            HourSlaDetail: string;
            /**
             * 是否为工作空间的默认基线，包括true（是）和false（否）。
             * @example `true`
             */
            IsDefault: boolean;
            /**
             * 基线责任人的阿里云UID。有多个责任人时，使用英文逗号（,）分隔。
             * @example `952795****`
             */
            Owner: string;
            /**
             * 基线所在工作空间的ID。
             * @example `9527`
             */
            ProjectId: number;
            /**
             * 基线的优先级，取值集合为{1,3,5,7,8}。
             * @example `1`
             */
            Priority: number;
            /**
             * 天基线的预警分钟，取值范围为\[0, 59\]。
             * @example `30`
             */
            SlaMinu: number;
            /**
             * 天基线的承诺小时，取值范围为\[0, 47\]。
             * @example `9`
             */
            SlaHour: number;
            /**
             * 基线的ID。
             * @example `1234`
             */
            BaselineId: number;
            /**
             * 基线的名称。
             * @example `基线名称`
             */
            BaselineName: string;
            /**
             * 小时基线的预警时间配置（JSON格式），key为周期号，value为hh:mm格式。hh的取值范围为\[0,47\]，mm的取值范围为\[0,59\]。
             * @example `{"1":"03:28","2":"04:28","3":"05:28","4":"06:28","5":"07:28","6":"08:28","7":"09:28","8":"10:28","9":"11:28","10":"12:28","11":"13:28","12":"14:28","13":"15:28","14":"16:28","15":"17:28","16":"18:28","17":"19:28","18":"20:28","19":"21:28","20":"22:28","21":"23:28","22":"24:28","23":"25:28","24":"26:28"}`
             */
            HourExpDetail: string;
            /**
             * 基线是否开启，包括true（开启）和false（未开启）。
             * @example `true`
             */
            UseFlag: boolean;
            /**
             * 天基线的预警小时，取值范围为\[0, 47\]。
             * @example `7`
             */
            ExpHour: number;
            /**
             * 基线类型，包括DAILY（天基线）和HOURLY（小时基线）。
             * @example `DAILY`
             */
            BaselineType: string;
            /**
             * 天基线的预警分钟，取值范围为\[0, 59\]。
             * @example `30`
             */
            ExpMinu: number;
        }[];
    };
}
