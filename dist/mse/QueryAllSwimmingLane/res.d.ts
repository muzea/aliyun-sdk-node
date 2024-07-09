export interface QueryAllSwimmingLaneResponse {
    /**
     * 请求ID。
     * @example `DC34E4A3-5F1C-4E40-86EA-02EDF967****`
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
     * @example `Success`
     */
    ErrorCode: string;
    /**
     * 返回信息。
     * @example `OK`
     */
    Message: string;
    /**
     * 数据概览。
     * @example `[{id:100,name:"test"}]`
     */
    Data: {
        /**
         * 泳道组名称。
         * @example `swimmingGroup`
         */
        Name: string;
        /**
         * 泳道所属的用户id。
         * @example `12345`
         */
        UserId: string;
        /**
         * 在哪一侧实现消息灰度。
         * @example `Client`
         */
        MessageQueueFilterSide: string;
        /**
         * 泳道所属的MSE命名空间。
         * @example `default`
         */
        Namespace: string;
        /**
         * 是否记录请求详情（全链路灰度可观测）。
         * @example `false`
         */
        RecordCanaryDetail: boolean;
        /**
         * 泳道组Id。
         * @example `123`
         */
        Id: number;
        /**
         * 所属地域。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 是否开启消息灰度。
         * @example `false`
         */
        MessageQueueGrayEnable: boolean;
        /**
         * 是否开启规则。
         * @example `true`
         */
        enableRules: boolean;
        /**
         * 入口应用规则列表
         */
        EntryRules: {
            /**
             * 路径列表
             */
            paths: string[];
            /**
             * 路径
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
                 * 匹配列表
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
                 * @example `test`
                 */
                value: string;
            }[];
        }[];
        /**
         * 泳道创建时间。
         * @example `1683598484000`
         */
        gmtCreate: string;
        /**
         * 泳道更新时间。
         * @example `1683598484000`
         */
        gmtModified: string;
        /**
         * 泳道组Id。
         * @example `72709`
         */
        groupId: string;
        /**
         * 泳道组Id。
         * @example `6859`
         */
        GroupId: string;
        /**
         * 泳道对应的标签。
         * @example `gray`
         */
        tag: string;
        /**
         * 泳道对应的标签。
         * @example `gray`
         */
        Tag: string;
        /**
         * 网关路由信息（使用云原生网关为入口时使用）
         */
        GatewaySwimmingLaneRoute: {
            /**
             * 网关ID
             * @example `1`
             */
            GatewayId: number;
            /**
             * 网关唯一ID
             * @example `gw-84efde2ee1464260bdb17a5b****`
             */
            GatewayUniqueId: string;
            /**
             * 路由ID列表
             */
            RouteIdList: number[];
            /**
             * 全链路灰度模式：
             * - 0: 按请求内容路由
             * - 1: 按比例路由
             * @example `0`
             */
            CanaryModel: number;
            /**
             * 匹配条件列表（按内容路由使用）
             */
            Conditions: {
                /**
                 * 参数名称
                 * @example `name`
                 */
                Name: string;
                /**
                 * 参数值
                 * @example `xiaoming`
                 */
                Value: string;
                /**
                 * 参数类型：
                 * - header：Header
                 * - param：Parameter
                 * @example `header`
                 */
                Type: string;
                /**
                 * 条件：
                 * - PRE：前缀匹配
                 * - EQUAL：精确匹配
                 * - ERGULAR：正则匹配
                 * @example `PRE`
                 */
                Cond: string;
            }[];
            /**
             * 流量比例（按比例路由使用，取值0-100）
             * @example `20`
             */
            Percentage: number;
            RouteIndependentPercentageEnable: string;
            RouteIndependentPercentageList: {
                RouteId: string;
                Percentage: string;
            }[];
        };
        PathIndependentPercentageEnable: boolean;
    }[];
}
