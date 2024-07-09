export interface UpdateABMetricRequest {
    /**
     * AB指标ID。
     * @example `1`
     */
    "ABMetricId": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 指标名称。
         * @example `pv`
         */
        Name: string;
        /**
         * 指标描述。
         * @example `pv 指标`
         */
        Description: string;
        /**
         * 场景ID，可通过接口[ListScenes](~~2402581~~)获取。
         * @example `1`
         */
        SceneId: string;
        /**
         * 指标类型。
         * - Single-单一指标。
         * - Derived-衍生指标。
         * @example `Single`
         */
        Type: string;
        /**
         * 是否为实时指标。
         * - true-是。
         * - false-否。
         * @example `false`
         */
        Realtime: boolean;
        /**
         * 数据表ID，可以通过ListTableMetas获取。
         * @example `2`
         */
        TableMetaId: string;
        /**
         * 写回数据表的数据源的ID，可以通过ListInstanceResources获取。
         * @example `3`
         */
        ResultResourceId: string;
        /**
         * 指标定义。
         * @example `sum(click_cnt)`
         */
        Definition: string;
        /**
         * 统计周期。
         * @example `1`
         */
        StatisticsCycle: number;
        /**
         * 衍生指标的左指标ID。
         * @example `2`
         */
        LeftMetricId: string;
        /**
         * 衍生指标的右指标ID。
         * @example `3`
         */
        RightMetricId: string;
        /**
         * 衍生指标计算的操作符。
         * - Plus-加
         * - Minus-减
         * - Multiplication-乘
         * - Division-除
         * @example `Division`
         */
        Operator: string;
        /**
         * 实例ID，可通过接口[ListInstances](~~2411819~~)获取。
         * @example `pairec-cn-test123`
         */
        InstanceId: string;
    };
}
