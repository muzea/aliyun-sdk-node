export interface ListFeatureConsistencyCheckJobScoreReportsResponse {
    /**
     * 请求ID。
     * @example `F0AB6527-093F-5C44-B3BD-42C8C210C619`
     */
    RequestId: string;
    /**
     * 分数比对报表。
     */
    ReportsOfScoreDiff: {
        /**
         * 用户ID。
         * @example `3`
         */
        LogUserId: string;
        /**
         * 物品ID。
         * @example `4`
         */
        LogItemId: string;
        /**
         * 请求ID。
         * @example `323`
         */
        LogRequestId: string;
        /**
         * 分数差值。
         * @example `0.00000234`
         */
        ScoreDiff: string;
        /**
         * 分数比对详细。
         * @example `{}`
         */
        ScoreDiffDetail: string;
    }[];
    /**
     * 数据路径。
     * @example `http://*******`
     */
    DataPath: string;
    /**
     * oss路径。
     * @example `oss://********`
     */
    OssPath: string;
}
