export interface GetServiceTemplateParameterConstraintsResponse {
    /**
     * 请求ID。
     * @example `449DC03D-A039-56A6-8D6F-6EBCCCE0EE2C`
     */
    RequestId: string;
    /**
     * 参数约束信息。
     */
    ParameterConstraints: {
        /**
         * 参数的类型。
         * @example `String`
         */
        Type: string;
        /**
         * 参数的取值。
         */
        AllowedValues: string[];
        /**
         * 关联参数列表。
         */
        AssociationParameterNames: string[];
        /**
         * 参数的名称。
         * @example `ZoneInfo`
         */
        ParameterKey: string;
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
         * 原始约束信息。
         */
        OriginalConstraints: {
            /**
             * 参数的取值。
             */
            AllowedValues: string[];
            /**
             * 属性名称。
             * @example `ZoneId`
             */
            PropertyName: string;
            /**
             * 模板中定义的资源名称。
             * @example `MyECS`
             */
            ResourceName: string;
            /**
             * 资源类型。
             * @example `ALIYUN::ECS::InstanceGroup`
             */
            ResourceType: string;
        }[];
        /**
         * 查询失败的详情。
         */
        QueryErrors: {
            /**
             * 错误详情。
             * @example `record not exist`
             */
            ErrorMessage: string;
            /**
             * 资源名称。
             * @example `MyECS`
             */
            ResourceName: string;
            /**
             * 资源类型。
             * @example `ALIYUN::ECS::InstanceGroup`
             */
            ResourceType: string;
        }[];
    }[];
    /**
     * 套餐族约束。
     */
    FamilyConstraints: string[];
}
