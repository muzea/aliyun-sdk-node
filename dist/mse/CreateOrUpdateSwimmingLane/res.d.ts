export interface CreateOrUpdateSwimmingLaneResponse {
    /**
     * 请求ID。
     * @example `EE5C32A1-BC0E-4B79-817C-103E4EDF****`
     */
    RequestId: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * Code仅仅用来和Success同步。
     * @example `200`
     */
    Code: number;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 数据概览。
     * @example `{}`
     */
    Data: {
        /**
         * 泳道名称
         * @example `test`
         */
        name: string;
        /**
         * 泳道ID
         * @example `94765`
         */
        id: number;
        /**
         * 泳道对应的标签。
         * @example `release`
         */
        tag: string;
        /**
         * 泳道状态
         * @example `0`
         */
        status: number;
        /**
         * 泳道开关
         * @example `true`
         */
        enable: boolean;
        /**
         * 应用所在的区域。
         * @example `cn-beijing`
         */
        regionId: string;
        /**
         * 泳道组Id。
         * @example `72586`
         */
        groupId: number;
        /**
         * 入口应用规则
         * @example `{}`
         */
        entryRule: string;
        /**
         * 名称
         */
        entryRules: {
            /**
             * 路径列表
             */
            paths: string[];
            /**
             * 代码组路径
             * @example `/adump/wxb/prod`
             */
            path: string;
            /**
             * 条件
             * @example `AND`
             */
            condition: string;
            /**
             * Rest匹配规则列表
             */
            restItems: {
                /**
                 * 匹配类型
                 * @example `cookie`
                 */
                type: string;
                /**
                 * 名称
                 * @example `test`
                 */
                name: string;
                /**
                 * 操作符
                 * @example `rawvalue`
                 */
                operator: string;
                /**
                 * 名称列表
                 */
                nameList: string[];
                /**
                 * 数值
                 * @example `x`
                 */
                datum: string;
                /**
                 * 匹配符
                 * @example `==`
                 */
                cond: string;
                /**
                 * 除数
                 * @example `10`
                 */
                divisor: number;
                /**
                 * 余数
                 * @example `10`
                 */
                remainder: number;
                /**
                 * 百分比
                 * @example `30`
                 */
                rate: number;
                /**
                 * 值
                 * @example `9`
                 */
                value: string;
            }[];
        }[];
        /**
         * 是否开启规则。
         * @example `true`
         */
        enableRules: boolean;
        /**
         * 泳道创建时间。
         * @example `1545726028000`
         */
        gmtCreate: string;
        /**
         * 泳道更新时间。
         * @example `1565701886000`
         */
        gmtModified: string;
        /**
         * MSE网关路由规则
         * @example `{}`
         */
        gatewaySwimmingLaneRouteJson: string;
        pathIndependentPercentageEnable: boolean;
    };
}
