export interface DescribeInstanceAntiBruteForceRulesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `97286A-4A6B-4A4-95FA-EC7E3E2451`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 暴力破解防御规则生效服务器总数量。
         * @example `4`
         */
        TotalCount: number;
        /**
         * 当前页显示的暴力破解防御规则生效服务器的数量。
         * @example `4`
         */
        Count: number;
    };
    /**
     * 暴力破解防御规则生效服务器列表。
     */
    Rules: {
        /**
         * 暴力破解防御规则生效服务器的UUID。
         * @example `4fe8e1cd-3c37-4851-b9de-124da32c****`
         */
        Uuid: string;
        /**
         * 暴力破解防御规则的名称。
         * @example `TestRule`
         */
        Name: string;
        /**
         * 暴力破解防御规则的ID。
         * @example `215779601`
         */
        Id: number;
    }[];
}
