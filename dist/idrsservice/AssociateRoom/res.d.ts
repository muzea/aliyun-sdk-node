export interface AssociateRoomResponse {
    /**
     * requestId
     * @example `84118BF0-56F7-54D2-8C1A-35BBBBD5016B`
     */
    RequestId: string;
    /**
     * code
     * @example `OK`
     */
    Code: string;
    /**
     * 提示
     * @example `-`
     */
    Message: string;
    /**
     * 数据
     * @example `{'Name': u'\u4ee3\u7406\u4eba', 'CreatedAt': '2021-11-11T15:27:39.449+08:00', 'Channel': '063756', 'Id': '5ead2d7f-9e2c-4521-bac4-e37bd44b6a56'}`
     */
    Data: string;
    /**
     * 给 pop 使用的
     * @example `True`
     */
    Success: boolean;
    /**
     * HTTP 状态码
     * @example `200`
     */
    HttpCode: number;
    /**
     * 错误列表
     */
    Errors: {
        /**
         * 错误 ID
         * @example `-`
         */
        Field: string;
        /**
         * 错误消息
         * @example `-`
         */
        Message: string;
    }[];
}
