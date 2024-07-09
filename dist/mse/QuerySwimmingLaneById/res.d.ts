export interface QuerySwimmingLaneByIdResponse {
    /**
     * 请求ID。
     * @example `69AD2AA7-DB47-449B-941B-B14409DF****`
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
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 数据概览。
     * @example `{id:102,name:"test"}`
     */
    Data: {
        /**
         * 泳道名称
         * @example `test`
         */
        name: string;
        /**
         * 泳道ID
         * @example `1`
         */
        id: number;
        /**
         * 泳道对应的标签。
         * @example `gray`
         */
        tag: string;
        /**
         * 泳道状态
         * @example `1`
         */
        status: number;
        /**
         * 泳道开关
         * @example `true`
         */
        enable: boolean;
        /**
         * 区域ID。
         * @example `cn-shanghai`
         */
        regionId: string;
        /**
         * 泳道组Id。
         * @example `8`
         */
        groupId: number;
        /**
         * 入口应用规则
         * @example `{}`
         */
        entryRule: string;
        /**
         * 入口应用规则详情
         */
        entryRules: {
            /**
             * 路径列表
             */
            paths: string[];
            /**
             * 路径
             * @example `/`
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
                 * @example `11111`
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
                 * @example `hello`
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
         * 规则创建时间
         * @example `1683598484000`
         */
        gmtCreate: string;
        /**
         * 规则修改时间
         * @example `1683598484000`
         */
        gmtModified: string;
        /**
         * MSE网关路由规则
         * @example `{}`
         */
        gatewaySwimmingLaneRouteJson: string;
        PathIndependentPercentageEnable: boolean;
    };
}
