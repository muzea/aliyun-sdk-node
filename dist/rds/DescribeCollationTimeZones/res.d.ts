export interface DescribeCollationTimeZonesResponse {
    /**
     * 请求ID。
     * @example `4EAED246-DB18-4C8D-9EB5-C319626F2A77`
     */
    RequestId: string;
    CollationTimeZones: {
        /**
         * 支持的字符集排序规则和时区列表。
         */
        CollationTimeZone: {
            /**
             * 时区。
             * @example `Afghanistan Standard Time`
             */
            TimeZone: string;
            /**
             * 世界协调时间偏移。由世界协调时间UTC+时区差组成，格式：(UTC+<i>HH:mm</i>)。
             * @example `(UTC+04:30)`
             */
            StandardTimeOffset: string;
            /**
             * 描述。
             * @example `Kabul`
             */
            Description: string;
        }[];
    };
}
