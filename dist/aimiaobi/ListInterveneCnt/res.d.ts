export interface ListInterveneCntResponse {
    /**
     * 请求唯一标识
     * @example `3f7045e099474ba28ceca1b4eb6d6e21`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `0`
     */
    Code: string;
    /**
     * 错误说明
     * @example `success`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 业务数据
     */
    Data: {
        /**
         * 总页数
         * @example `10`
         */
        PageCnt: number;
        /**
         * 数量信息列表
         */
        CntList: any[];
        /**
         * 页号
         * @example `1`
         */
        PageIndex: number;
        /**
         * 页尺寸
         * @example `10`
         */
        PageSize: number;
    };
}
