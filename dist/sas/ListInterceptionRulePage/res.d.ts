export interface ListInterceptionRulePageResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `ACF97412-FD09-4D1F-994F-34DF12BR****`
     */
    RequestId: string;
    /**
     * 查询结果页面的信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `19`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询结果的总记录数。
         * @example `2`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 查询到的规则信息。
     */
    InterceptionRuleList: {
        /**
         * 规则类型。
         * @example `customize`
         */
        RuleType: string;
        /**
         * 调度规则的开关状态。取值：
         * - **1**：表示开启。
         * - **0**：表示关闭。
         * @example `1`
         */
        RuleSwitch: number;
        /**
         * 规则ID。
         * @example `30****`
         */
        RuleId: number;
        /**
         * 规则名称。
         * @example `test`
         */
        RuleName: string;
        /**
         * 源对象。
         */
        SrcTarget: {
            /**
             * 应用名称。
             * @example `ack-jenkins-lawr****`
             */
            AppName: string;
            /**
             * 规则类型。取值：
             * - **suggest**: 智能推荐
             * - **customize**: 用户自定义
             * - **system**: 系统
             * @example `customize`
             */
            RuleType: string;
            /**
             * 网络对象的ID。
             * @example `40****`
             */
            TargetId: number;
            /**
             * 网络对象的名称。
             * @example `mhh-te****`
             */
            TargetName: string;
            /**
             * 命名空间。
             * @example `jenkins`
             */
            Namespace: string;
            /**
             * 受影响的资产类型。
             * @example `containerId`
             */
            TargetType: string;
            /**
             * 对应镜像列表。
             */
            ImageList: string[];
            /**
             * 网络对象源标签列表。
             */
            TagList: string[];
        };
        /**
         * 目标对象。
         */
        DstTarget: {
            /**
             * 应用名称。
             * @example `console`
             */
            AppName: string;
            /**
             * 规则类型。取值：
             * - **suggest**: 智能推荐
             * - **customize**: 用户自定义
             * - **system**: 系统
             * @example `customize`
             */
            RuleType: string;
            /**
             * 网络对象的ID。
             * @example `302001`
             */
            TargetId: number;
            /**
             * 网络对象的名称。
             * @example `demo4****`
             */
            TargetName: string;
            /**
             * 命名空间。
             * @example `test`
             */
            Namespace: string;
            /**
             * 网络对象的类型。
             * @example `IMAGE`
             */
            TargetType: string;
            /**
             * 目标服务器的端口信息。
             */
            Ports: string[];
            /**
             * 受影响的镜像列表。
             */
            ImageList: string[];
            /**
             * 网络对象目标标签列表。
             */
            TagList: string[];
        };
        /**
         * 排序。
         * @example `1`
         */
        OrderIndex: number;
        /**
         * 拦截模式。取值：
         * - **0**: 观察模式
         * - **1**: 拦截模式
         * - **2**: 告警模式
         * - **3**: 放行模式
         * @example `1`
         */
        InterceptType: number;
    }[];
}
