export interface GetSqlConcurrencyControlKeywordsFromSqlTextRequest {
    /**
     * 备用参数。
     * @example `None`
     */
    "ConsoleContext"?: string;
    /**
     * 实例ID。
     * @example `rm-2ze5hpn2b99d2****`
     */
    "InstanceId": string;
    /**
     * 待生成限流关键词的SQL文本。
     * @example `SELECT * FROM test where name = 'das'`
     */
    "SqlText": string;
}
