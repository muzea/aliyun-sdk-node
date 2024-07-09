export interface ListCommonTicketFieldsResponse {
    /**
     * 数据。
     */
    Data: {
        /**
         * 实例ID。
         * @example `ccc-test`
         */
        InstanceId: string;
        /**
         * Schema ID。
         * @example `ticketing`
         */
        Id: string;
        /**
         * 字段列表。
         */
        Properties: any;
        /**
         * 创建时间。
         * @example `1703517780627`
         */
        CreatedTime: string;
        /**
         * 上次修改的时间。
         * @example `1716211430928`
         */
        UpdatedTime: string;
    };
    /**
     * 请求ID。
     * @example `30C7D235-DDCF-4C7F-A462-5E2598252C2B`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 错误参数列表。
     */
    Params: string[];
}
