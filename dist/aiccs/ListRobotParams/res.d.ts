export interface ListRobotParamsResponse {
    /**
     * 请求ID。
     * @example `FF67D4D5-4E90-1DF5-BB8F-060BBFAD72DB`
     */
    RequestId: string;
    /**
     * 参数列表。
     */
    Data: {
        /**
         * 是否必填。
         * @example `0`
         */
        IsEmpty: number;
        /**
         * 参数代码。
         * @example `name`
         */
        ParamCode: string;
        /**
         * 参数名称。
         * @example `名称`
         */
        ParamName: string;
    }[];
    /**
     * 状态码。返回200表示请求成功。
     * @example `200`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `successful`
     */
    Message: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
}
