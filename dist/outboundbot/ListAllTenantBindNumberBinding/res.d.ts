export interface ListAllTenantBindNumberBindingResponse {
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示消息
     * @example `Success`
     */
    Message: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 数组
         */
        List: {
            /**
             * 绑定id
             * @example `b5bfb844-ce85-4779-bc8f-161fba46aa07`
             */
            BindingId: string;
            /**
             * 号码
             * @example `15005059355`
             */
            Number: string;
            /**
             * trunk名称
             * @example `小码-公共`
             */
            TrunkName: string;
            /**
             * 策略
             * @example `{\"rateLimitPeriod\":\"1\",\"rateLimitCount\":\"1\"}`
             */
            SerializedParams: string;
            /**
             * 实例名字列表
             */
            InstanceNameList: string[];
            BillingType: string;
        }[];
    };
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求id
     * @example `A4BEAB4B-C810-5386-B72A-1A35FF1E6B15`
     */
    RequestId: string;
}
