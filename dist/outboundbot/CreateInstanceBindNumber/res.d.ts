export interface CreateInstanceBindNumberResponse {
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示信息
     * @example `Success`
     */
    Message: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 号码数据列表
         */
        List: {
            /**
             * 实例id
             * @example `96b847ad-2683-4794-b7b4-7ef094fb81f6`
             */
            InstanceId: string;
            /**
             * 是否绑定成功
             * @example `true`
             */
            Success: boolean;
        }[];
    };
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
}
