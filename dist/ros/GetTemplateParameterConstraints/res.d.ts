export interface GetTemplateParameterConstraintsResponse {
    /**
     * 请求ID。
     * @example `9816785B-BCF8-514D-8B76-C1EC2BC954FC`
     */
    RequestId: string;
    /**
     * 参数约束信息。
     */
    ParameterConstraints: {
        /**
         * 参数的名称。
         * @example `ZoneInfo`
         */
        ParameterKey: string;
        /**
         * 参数的类型。
         * @example `String`
         */
        Type: string;
        /**
         * 参数的取值列表。
         */
        AllowedValues: string[];
        /**
         * 参数的行为。取值：
         * - NoLimit：无限制，此参数没有取值限制。
         * - NotSupport：不支持，此参数不支持查询取值。
         * - QueryError：查询失败。
         * > 当查询结果没有返回AllowedValues时，会额外返回Behavior和BehaviorReason，说明参数的行为和原因。
         * @example `NoLimit`
         */
        Behavior: string;
        /**
         * 参数行为出现的原因。
         * @example `No resource property refer to the parameter`
         */
        BehaviorReason: string;
        /**
         * 关联参数列表。
         */
        AssociationParameterNames: string[];
        /**
         * 不符合参数约束的值列表。
         * > 当查询结果有返回AllowedValues时，会额外返回IllegalValueByParameterConstraints和IllegalValueByRules，说明被参数约束和模板规则过滤掉的不合法的值。
         */
        IllegalValueByParameterConstraints: any[];
        /**
         * 不符合模板规则的值列表。
         * > 当查询结果有返回AllowedValues时，会额外返回IllegalValueByParameterConstraints和IllegalValueByRules，说明被参数约束和模板规则过滤掉的不合法的值。
         */
        IllegalValueByRules: any[];
        /**
         * 不支持的资源详情。
         */
        NotSupportResources: {
            /**
             * 资源类型。
             * @example `ALIYUN::ECS::InstanceGroup`
             */
            ResourceType: string;
            /**
             * 资源属性名称。
             * @example `InstanceName`
             */
            PropertyName: string;
        }[];
        /**
         * 查询失败的详情。
         */
        QueryErrors: {
            /**
             * 错误详情。
             * @example `ALIYUN::ECS::InstanceGroup`
             */
            ErrorMessage: string;
            /**
             * 资源名称。
             * @example `MyECS`
             */
            ResourceName: string;
            /**
             * 资源类型。
             * @example `InstanceType is needed while query DataDisk`
             */
            ResourceType: string;
        }[];
        /**
         * 原始约束信息。
         */
        OriginalConstraints: {
            /**
             * 模板中定义的资源名称。
             * @example `MyECS`
             */
            ResourceName: string;
            /**
             * 参数的取值列表。
             */
            AllowedValues: any[];
            /**
             * 资源类型。
             * @example `ALIYUN::ECS::InstanceGroup
            `
             */
            ResourceType: string;
            /**
             * 属性名称。
             * @example `ZoneId`
             */
            PropertyName: string;
        }[];
    }[];
}
