export interface InsertInterveneRuleRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `xxxxx_p_efm`
     */
    "AgentKey": string;
    /**
     * 干预规则配置
     */
    "InterveneRuleConfig"?: {
        /**
         * 规则Id
         * @example `2`
         */
        RuleId: number;
        /**
         * 规则名字
         * @example `tf-test-rule`
         */
        RuleName: string;
        /**
         * 干预类型
         * @example `0`
         */
        InterveneType: number;
        /**
         * 命名空间列表
         */
        NamespaceList: string[];
        /**
         * 答案配置
         */
        AnswerConfig: {
            /**
             * 答案类型
             * @example `0`
             */
            AnswerType: number;
            /**
             * 命名空间
             * @example `namespace_qa_query`
             */
            Namespace: string;
            /**
             * 答案内容
             * @example `抱歉我无法回答`
             */
            Message: string;
        }[];
        /**
         * 生效配置
         */
        EffectConfig: {
            /**
             * 生效类型
             * @example `0`
             */
            EffectType: number;
            /**
             * 开始时间
             * @example `2023-03-28 06:04:29`
             */
            StartTime: string;
            /**
             * 结束时间
             * @example `2023-03-28 06:04:29`
             */
            EndTime: string;
        };
        /**
         * 干预配置列表
         */
        InterveneConfigList: {
            /**
             * id
             * @example `37249`
             */
            Id: string;
            /**
             * 干预query配置
             * @example `早上好`
             */
            Query: string;
            /**
             * 操作类型
             * @example `0`
             */
            OperationType: number;
        }[];
    };
}
