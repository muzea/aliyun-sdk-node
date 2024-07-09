export interface QueryTimedResetOperateStatusResponse {
    /**
     * Id of the request
     * @example `74d42913-f13c-47ac-a8ac-8610685688eb`
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
     * 返回结果。
     */
    Data: {
        /**
         * 实例id。
         * @example `avatar_operation_public_cn-7pp2****802
        `
         */
        InstanceId: string;
        /**
         * 当前停复机实例开关机状态中文描述
         * @example `开机`
         */
        StatusStr: string;
        /**
         * 从虚拟数字人开放平台中获取的TenantId
         * @example `xxxxx`
         */
        TenantId: string;
        /**
         * 当前停复机实例开关机状态枚举值：
         * - 10：开机，表示已完成开机，可正常使用
         * - 11：开机中，表示正在开机中，不可使用，需等待状态变为开机
         * - 20：关机，表示已完成关机，不可使用
         * - 21：关机中，表示正在关机中，此时不可使用
         * @example `10`
         */
        Status: number;
    };
}
