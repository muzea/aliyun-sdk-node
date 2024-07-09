export interface GetTestResultListRequest {
    /**
     * 企业id
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 测试计划id，测试计划唯一标识
     * @example `592531xxxxxx15f2e98dbc7e27`
     */
    "testPlanIdentifier": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 目录唯一标识，测试计划中对应的目录id
         * @example `e27b8eace6501ce51cf5d56784`
         */
        directoryIdentifier: string;
        /**
         * 过滤器条件
         * @example `{'conditionGroups': [[{'fieldIdentifier': 'gmtModified', 'operator': 'MORE_THAN_AND_EQUAL', 'value': ['2023-04-20 18:03:12.442140'], 'className': 'dateTime', 'format': 'input'}]]}`
         */
        conditions: string;
    };
}
