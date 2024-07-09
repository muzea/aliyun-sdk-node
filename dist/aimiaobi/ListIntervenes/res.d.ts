export interface ListIntervenesResponse {
    /**
     * 请求唯一标识
     * @example `428DCC0D-3C63-5306-BD1B-124396AB97BE`
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
         * 干预项列表
         */
        InterveneList: {
            /**
             * id
             * @example `36559`
             */
            Id: string;
            /**
             * 干预query
             * @example `伊家楼`
             */
            Query: string;
        }[];
        /**
         * 总页书
         * @example `1`
         */
        TotalSize: number;
        /**
         * 页尺寸
         * @example `10`
         */
        PageSize: number;
        /**
         * 页号
         * @example `1`
         */
        PageIndex: number;
    };
}
