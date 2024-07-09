export interface ListTagResourcesResponse {
    /**
     * http 状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 下一个查询开始Token
     * @example `b949ae1f-01dc-4191-ae5a-70fbe6772fd8`
     */
    NextToken: string;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示信息
     * @example `Success`
     */
    Message: string;
    /**
     * 资源列表
     */
    TagResources: {
        /**
         * 资源类型
         * @example `instance`
         */
        ResourceType: string;
        /**
         * 标签值
         * @example `value1`
         */
        TagValue: string;
        /**
         * 资源ID
         * @example `b949ae1f-01dc-4191-ae5a-70fbe6772fd8`
         */
        ResourceId: string;
        /**
         * 标签键
         * @example `key1`
         */
        TagKey: string;
    }[];
}
