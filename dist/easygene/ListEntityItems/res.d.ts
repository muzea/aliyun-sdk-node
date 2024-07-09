export interface ListEntityItemsResponse {
    /**
     * 主机ID
     * @example `easygene.cn-beijing.aliyuncs.com`
     */
    HostId: string;
    /**
     * 请求ID
     * @example `DA980AD0-158F-44F3-847D-5EAB96C0EB6B`
     */
    RequestId: string;
    /**
     * 请求的最大结果数
     * @example `10`
     */
    MaxResults: number;
    /**
     * 下次查询的起始Token
     * @example `MTIzNDU2P1dvcmtzcGFjZT93cy1mMDE4OTgxNGU1ZTkK`
     */
    NextToken: string;
    /**
     * 返回总个数
     * @example `10`
     */
    TotalCount: number;
    /**
     * 实体类型数组
     */
    EntityItems: {
        /**
         * 实体元素名称
         * @example `s1`
         */
        EntityName: string;
        /**
         * 数据元素属性
         */
        EntityData: any;
    }[];
}
