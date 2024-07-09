export interface DescribeTenantBindNumberResponse {
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示信息
     * @example `Success`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 作业组描述
         */
        List: {
            /**
             * 实例id
             * @example `e2d7a184-7d6c-45d4-ac24-34ab48f54669`
             */
            InstanceId: string;
            /**
             * 实例名字
             * @example `xxxx`
             */
            InstanceName: string;
            /**
             * 是否是绑定状态
             * @example `true`
             */
            IsBinding: boolean;
        }[];
    };
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求id
     * @example `1364f208-982d-4d0c-89aa-d56e22b47589`
     */
    RequestId: string;
}
