export interface GetOutbounNumListResponse {
    /**
     * 错误描述
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID，用于跟踪错误原因
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 号码列表信息
     */
    Data: {
        /**
         * 号码组信息
         */
        NumGroup: {
            /**
             * 类型，有以下枚举：
             * 1：号码
             * 2：号码组
             * @example `2`
             */
            Type: number;
            /**
             * 号码组id
             * @example `Jella`
             */
            Value: string;
            /**
             * 号码组描述（号码组名称）
             * @example `76`
             */
            Description: string;
        }[];
        /**
         * 主叫号码信息
         */
        Num: {
            /**
             * 类型，有以下枚举：
             * 1：号码
             * 2：号码组
             * @example `1`
             */
            Type: number;
            /**
             * 主叫号码
             * @example `9065446`
             */
            Value: string;
            /**
             * 主叫号码描述（归属地信息）
             * @example `浙江省杭州市`
             */
            Description: string;
        }[];
    };
    /**
     * 错误编码
     * @example `Success`
     */
    Code: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
    HttpStatusCode: number;
}
