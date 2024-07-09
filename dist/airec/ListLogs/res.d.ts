export interface ListLogsResponse {
    /**
     * 查询结果
     */
    result: any[];
    /**
     * headers info
     */
    headers: {
        /**
         * 查询总量
         * @example `12`
         */
        X-Total-Count: number;
    };
    /**
     * 错误码
     * @example `200`
     */
    code: string;
    /**
     * 请求id
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 错误详情
     * @example `success`
     */
    message: string;
}
