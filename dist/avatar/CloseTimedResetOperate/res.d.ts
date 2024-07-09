export interface CloseTimedResetOperateResponse {
    /**
     * Id of the request
     * @example `4C8BF3A5-948F-1F89-AACD-D18DEF52D1XX`
     */
    RequestId: string;
    /**
     * 返回结果码
     * @example `0`
     */
    Code: string;
    /**
     * 返回信息
     * @example `operation success.`
     */
    Message: string;
    /**
     * 调用接口是否成功
     * - false: 调用失败。
     * - true：调用成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用结果数据
     */
    Data: {
        /**
         * 实例ID
         * @example `avatar_operation_public_cn-7pp2****802
        `
         */
        InstanceId: string;
        /**
         * 租户ID，从虚拟数字人开放平台中获取的TenantId
         * @example `xxxxx`
         */
        TenantId: number;
    };
}
