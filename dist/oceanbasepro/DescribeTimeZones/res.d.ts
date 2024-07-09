export interface DescribeTimeZonesResponse {
    /**
     * 租户允许的时区信息。
     */
    TimeZones: {
        /**
         * 时区列表信息。
         */
        List: {
            /**
             * 时区名称。
             * @example `Asia/Shanghai`
             */
            TimeZone: string;
            /**
             * 时区描述。
             * @example `(GMT+8:00) Asia/Shanghai`
             */
            Description: string;
        }[];
        /**
         * 默认时区。
         * @example `Asia/Shanghai`
         */
        Default: string;
    };
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
}
