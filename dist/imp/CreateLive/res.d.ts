export interface CreateLiveResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 创建直播的返回结果。
     */
    Result: {
        /**
         * 直播的唯一标识ID。
         * @example `b7f2****ebb3`
         */
        LiveId: string;
    };
}
