export interface PutMonitorGroupDynamicRuleRequest {
    /**
     * 应用分组ID。
     * @example `123456`
     */
    "GroupId": number;
    /**
     * 无。
     */
    "GroupRules": {
        /**
         * 动态报警规则的组合条件。N的取值范围：1~3。取值：
         * - and：满足所有报警规则的实例才会自动添加到应用分组。
         * - or：满足任意报警规则的实例都会自动添加到应用分组。
         * @example `and`
         */
        FilterRelation: string;
        /**
         * 无。
         */
        Filters: {
            /**
             * 满足报警条件的值。N的取值范围：1~3。
             * @example `nginx`
             */
            Value: string;
            /**
             * 实例匹配的字段名称。N的取值范围：1~3。
             * 目前仅支持主机名，例如：hostName。
             * @example `hostName`
             */
            Name: string;
            /**
             * 实例的过滤条件。N的取值范围：1~3。取值：
             * - contains：包含。
             * - notContains：不包含。
             * - startWith：前缀。
             * - endWith：后缀。
             * @example `contains`
             */
            Function: string;
        }[];
        /**
         * 动态报警规则的云服务类型。N的取值范围：1~3。取值：
         * - ecs：云服务器ECS。
         * - rds：关系型数据库。
         * - slb：负载均衡。
         * @example `ecs`
         */
        Category: string;
    }[];
    /**
     * 创建动态报警规则的模式。取值：
     * - true：异步创建。
     * - false（默认值）：同步创建。
     * @example `false`
     */
    "IsAsync"?: boolean;
}
