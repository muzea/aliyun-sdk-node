export interface StartTimedResetOperateResponse {
    /**
     * 请求ID
     * @example `13E0445E-CA7F-5DD3-9B0F-D4B39E0180F7`
     */
    RequestId: string;
    /**
     * 返回结果码
     * @example `0`
     */
    Code: string;
    /**
     * 返回信息。
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
         * 实例id
         * @example `avatar_operation_public_cn-7pp2****802`
         */
        InstanceId: string;
        /**
         * 从虚拟数字人开放平台中获取的TenantId
         * @example `xxxxxx`
         */
        TenantId: number;
    };
}
