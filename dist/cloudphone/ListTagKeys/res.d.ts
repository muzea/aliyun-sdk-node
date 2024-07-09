export interface ListTagKeysResponse {
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
     * 单页最大结果数
     * @example `50`
     */
    MaxResults: number;
    Keys: {
        /**
         * 标签键列表
         */
        Key: string[];
    };
}
