export interface LuggageDirectResponse {
    /**
     * http 请求成功，status 值均为 200
     * @example `200`
     */
    status: number;
    /**
     * 业务错误码
     * @example `null`
     */
    error_code: string;
    /**
     * 错误信息
     * @example `null`
     */
    error_msg: string;
    /**
     * 是否正确
     * @example `true`
     */
    success: boolean;
    /**
     * 请求 RequestId
     * @example `51593418-8C73-5E47-8BA8-3F1D4A00CC0B`
     */
    RequestId: string;
    /**
     * 正确处理返回数据
     */
    data: {
        /**
         * 城市三字码
         * @example `BJS`
         */
        city_code: string;
        /**
         * 行李直挂规则类型 0:非行李直挂; 1:行李直挂
         * @example `1`
         */
        direct_type: number;
    }[];
    /**
     * 错误处理携带数据
     * @example `null`
     */
    error_data: any;
}
