export interface DescribeDomainStatusCodeListResponse {
    /**
     * 本次请求的ID。
     * @example `3B63C0DD-8AC5-44B2-95D6-064CA9296B9C`
     */
    RequestId: string;
    /**
     * 响应状态码的统计信息。
     */
    StatusCodeList: {
        /**
         * 返回数据的索引号。
         * @example `0`
         */
        Index: number;
        /**
         * 502状态码的统计值。
         * @example `0`
         */
        Status502: number;
        /**
         * 统计时间。时间戳格式，单位：秒。
         * @example `1582992000`
         */
        Time: number;
        /**
         * 405状态码的统计值。
         * @example `0`
         */
        Status405: number;
        /**
         * 3XX类状态码的统计值。
         * @example `0`
         */
        Status3XX: number;
        /**
         * 503状态码的统计值。
         * @example `0`
         */
        Status503: number;
        /**
         * 4XX类状态码的统计值。
         * @example `4486`
         */
        Status4XX: number;
        /**
         * 2XX类状态码的统计值。
         * @example `15520`
         */
        Status2XX: number;
        /**
         * 5XX类状态码的统计值。
         * @example `0`
         */
        Status5XX: number;
        /**
         * 504状态码的统计值。
         * @example `0`
         */
        Status504: number;
        /**
         * 200状态码的统计值。
         * @example `15520`
         */
        Status200: number;
        /**
         * 403状态码的统计值。
         * @example `0`
         */
        Status403: number;
        /**
         * 404状态码的统计值。
         * @example `0`
         */
        Status404: number;
        /**
         * 501状态码的统计值。
         * @example `0`
         */
        Status501: number;
    }[];
}
