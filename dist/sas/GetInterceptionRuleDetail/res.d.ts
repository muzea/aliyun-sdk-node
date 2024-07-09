export interface GetInterceptionRuleDetailResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `9FBC6E47-7508-xxx`
     */
    RequestId: string;
    /**
     * 拦截规则详情。
     */
    InterceptionRuleDetail: {
        /**
         * 规则类型。取值：
         * - **suggest**：建议规则
         * - **customize**：自定义规则
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
         * @example `467`
         */
        RuleId: number;
        /**
         * 规则名称。
         * @example `dmz-frontend-accept`
         */
        RuleName: string;
        /**
         * 源网络对象。
         */
        SrcTarget: {
            /**
             * 应用名称。
             * @example `console`
             */
            AppName: string;
            /**
             * 规则类型。
             * @example `customize`
             */
            RuleType: string;
            /**
             * 网络对象ID。
             * @example `300635`
             */
            TargetId: number;
            /**
             * 对象名称。
             * @example `dmz`
             */
            TargetName: string;
            /**
             * 网络对象所在命名空间。
             * @example `default`
             */
            Namespace: string;
            /**
             * 网络对象类型。
             * @example `IMAGE`
             */
            TargetType: string;
            /**
             * 网络对象包含的镜像列表。
             */
            ImageList: string[];
            /**
             * 网络对象包含的标签列表。
             */
            TagList: string[];
        };
        /**
         * 目的网络对象。
         */
        DstTarget: {
            /**
             * 应用名称。
             * @example `console`
             */
            AppName: string;
            /**
             * 规则类型。
             * @example `customize`
             */
            RuleType: string;
            /**
             * 网络对象ID。
             * @example `200014`
             */
            TargetId: number;
            /**
             * 对象名称。
             * @example `demo4-be1`
             */
            TargetName: string;
            /**
             * 网络对象所在命名空间。
             * @example `kube-system`
             */
            Namespace: string;
            /**
             * 网络对象类型。
             * @example `IMAGE`
             */
            TargetType: string;
            /**
             * 目的网络对象端口范围。
             */
            Ports: string[];
            /**
             * 指定网络对象包含的镜像名称。
             */
            ImageList: string[];
            /**
             * 指定网络对象包含的标签列表。
             */
            TagList: string[];
        };
        /**
         * 拦截模式。取值：
         * - **0**: 观察模式
         * - **1**: 拦截模式
         * - **2**: 告警模式
         * - **3**: 放行模式
         * @example `1`
         */
        InterceptType: number;
        /**
         * 规则优先级，取值为1~1000，数字越小优先级越高。
         * @example `1`
         */
        OrderIndex: number;
    };
}
