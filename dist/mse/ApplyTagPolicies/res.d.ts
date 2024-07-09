export interface ApplyTagPoliciesResponse {
    /**
     * 响应信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `316F5F64-F73D-42DC-8632-01E308B6****`
     */
    RequestId: string;
    /**
     * 数据概览
     */
    Data: {
        /**
         * 生效状态
         * @example `1`
         */
        Status: number;
        /**
         * 实例数量
         * @example `1`
         */
        InstanceNum: number;
        /**
         * 是否删除成功。
         */
        Remove: boolean;
        /**
         * 是否为主键。
         * @example `true`
         */
        CarryData: boolean;
        /**
         * 标签。
         * @example `gray`
         */
        Tag: string;
        /**
         * 策略名称
         * @example `test`
         */
        Name: string;
        /**
         * 标签规则
         * @example `{\"_base\": {\"rate\": 100, \"remove\": true}, \"blue\": {\"rate\": 0}}`
         */
        Rules: string;
        /**
         * 主键ID。
         * @example `12`
         */
        Id: number;
        /**
         * 比例
         * @example `10`
         */
        Rate: number;
        /**
         * 开启或关闭。
         * - `true`：开启。
         * - `false`：关闭。
         * @example `true`
         */
        Enable: boolean;
    }[];
    /**
     * 请求结果
     * @example `true`
     */
    Success: boolean;
}
