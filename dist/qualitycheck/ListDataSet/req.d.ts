export interface ListDataSetRequest {
    /**
     * 入参JSON字符串
     * @example `{"pageNumber":1,"pageSize":10}`
     */
    "JsonStr"?: string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
