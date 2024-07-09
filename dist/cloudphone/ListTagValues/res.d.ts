export interface ListTagValuesResponse {
    /**
     * 下一个查询开始Token，NextToken为空说明没有下一个
     * @example `ADBAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 单页返回最大数
     * @example `50`
     */
    MaxResults: number;
    Values: {
        /**
         * 资源列表
         */
        Value: string[];
    };
}
