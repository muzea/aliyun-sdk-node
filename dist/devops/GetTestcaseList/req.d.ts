export interface GetTestcaseListRequest {
    /**
     * 企业id
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 用例库id，用例库唯一标识
         * @example `6d5984c7d92b23fa53d4743c37`
         */
        spaceIdentifier: string;
        /**
         * 目录id，目录唯一标识，如果不填写，则默认该用例库下所有用例
         * @example `e27b8eace6501ce51cf5d56784`
         */
        directoryIdentifier: string;
        /**
         * 过滤器条件
         * @example `{\"conditionGroups\":[[{\"fieldIdentifier\":\"status\",\"operator\":\"CONTAINS\",\"value\":[\"cc961a18adf770c6e423ccc5\"],\"toValue\":null,,\"className\":\"status\",\"format\":\"list\"}]]}`
         */
        conditions: string;
        /**
         * 分页标识，第一页默认不用填写，下一页的参数从上一次调用结果获取
         * @example `2591861102250c4522380b33a6`
         */
        nextToken: string;
        /**
         * 分页大小，默认为20
         * @example `20`
         */
        maxResult: string;
    };
}
