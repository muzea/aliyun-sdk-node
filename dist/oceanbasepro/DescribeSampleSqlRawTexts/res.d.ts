export interface DescribeSampleSqlRawTextsResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 数据列表信息。
     */
    Data: {
        /**
         * SQL 语句。
         */
        SqlText: string[];
    };
}
