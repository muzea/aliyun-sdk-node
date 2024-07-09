export interface CreateOrUpdateSwimmingLaneRequest {
    /**
     * 地域。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * MSE命名空间名字
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 主键ID。-1时为创建泳道，大于0时为修改指定泳道。
     * @example `-1`
     */
    "Id"?: number;
    /**
     * 泳道名称。
     * @example `gray`
     */
    "Name": string;
    /**
     * 标识。
     * @example `gray`
     */
    "Tag"?: string;
    /**
     * 是否开启。
     * @example `true`
     */
    "Enable"?: boolean;
    /**
     * 所属泳道组。
     * @example `115`
     */
    "GroupId"?: number;
    /**
     * 是否配置泳道的路由规则，Ingress为网关暂时不需要配置。
     * @example `false`
     */
    "EnableRules"?: boolean;
    "PathIndependentPercentageEnable"?: boolean;
    /**
     * SwimmingLane
     */
    "EntryRules"?: {
        /**
         * 路径列表
         */
        Paths: string[];
        /**
         * 指示RestItems如何组合成最终的条件
         * @example `AND`
         */
        Condition: string;
        /**
         * 匹配列表
         */
        RestItems: {
            /**
             * 匹配类型
             * @example `header`
             */
            Type: string;
            /**
             * 名称
             * @example `x-mse-tag`
             */
            Name: string;
            /**
             * 操作符
             * @example `rawvalue`
             */
            Operator: string;
            /**
             * 匹配列表
             */
            NameList: string[];
            /**
             * 数值
             * @example `x`
             */
            Datum: string;
            /**
             * 匹配符
             * @example `==
            `
             */
            Cond: string;
            /**
             * 除数
             * @example `10`
             */
            Divisor: number;
            /**
             * 余数
             * @example `10`
             */
            Remainder: number;
            /**
             * 百分比
             * @example `30`
             */
            Rate: number;
            /**
             * 值
             * @example `gray`
             */
            Value: string;
        }[];
        /**
         * 优先级
         * @example `1`
         */
        Priority: number;
    }[];
    /**
     * json string。
     * @example `[{"Priority":1,"Paths":[],"Condition":"AND","RestItems":[{"Type":"param","Name":"name","Value":"xiaoming","Cond":"==","Operator":"rawvalue"}]}]`
     */
    "EntryRule"?: string;
    /**
     * 网关路由信息（使用云原生网关为入口时使用）
     */
    "GatewaySwimmingLaneRouteJson"?: {
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
         * 匹配条件列表
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
         * @example `30`
         */
        Percentage: number;
        RouteIndependentPercentageEnable: boolean;
        RouteIndependentPercentageList: {
            RouteId: number;
            Percentage: number;
        }[];
    };
    /**
     * 返回结果显示的语言。取值：zh（默认值）：中文，en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
