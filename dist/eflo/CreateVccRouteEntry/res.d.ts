export interface CreateVccRouteEntryResponse {
    /**
     * 响应码
     * @example `0`
     */
    Code: number;
    /**
     * 返回信息
     * @example `成功`
     */
    Message: string;
    /**
     * 当次请求的Request ID。
     * @example `039C3C3A-3C37-5672-80D5-D8CD48C676D1`
     */
    RequestId: string;
    /**
     * 返回结果
     */
    Content: {
        /**
         * 路由条目ID
         * @example `vcc-rte-5cey1sap`
         */
        VccRouteEntryId: string;
    };
}
