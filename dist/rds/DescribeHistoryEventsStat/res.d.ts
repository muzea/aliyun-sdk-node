export interface DescribeHistoryEventsStatResponse {
    /**
     * 请求ID。
     * @example `E52666CC-330E-418A-8E5B-A19E3FB42D13`
     */
    RequestId: string;
    /**
     * 事件列表。
     */
    Items: {
        /**
         * 系统事件分类。详情请参见[历史事件](~~129759~~)。
         * @example `Exception`
         */
        EventCategory: string;
        /**
         * 总记录数。
         * @example `31`
         */
        TotalCount: number;
    }[];
}
