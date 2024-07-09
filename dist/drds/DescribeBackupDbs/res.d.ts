export interface DescribeBackupDbsResponse {
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `842DFA7F-B09B-42A2-B115-E684AE******`
     */
    RequestId: string;
    DbNames: {
        dbName: string[];
    };
}
