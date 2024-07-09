export interface ListAgentRequest {
    /**
     * 当前⻚码，默认值是1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 返回结果中每页显示的记录数量。最大取值100，默认值是10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 业务空间名称，按照名称检索
     * @example `业务空间_001`
     */
    "AgentName"?: string;
    /**
     * 商品code，可按照商品code进行过滤，查询实例信息
     * @example `G_cloudBeeBot_public`
     */
    "GoodsCodes"?: string;
}
