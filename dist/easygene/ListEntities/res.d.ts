export interface ListEntitiesResponse {
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
     * 下次查询的起始Token
     * @example `MTIzNDU2P1dvcmtzcGFjZT93cy1mMDE4OTgxNGU1ZTkK`
     */
    NextToken: string;
    /**
     * 请求的最大结果数
     * @example `1`
     */
    MaxResults: number;
    /**
     * 返回总个数
     * @example `1`
     */
    TotalCount: number;
    /**
     * 实体类型数组
     */
    Entities: {
        /**
         * 实体类型
         * @example `sample`
         */
        EntityType: string;
    }[];
}
