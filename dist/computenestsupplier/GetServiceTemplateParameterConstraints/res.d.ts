export interface GetServiceTemplateParameterConstraintsResponse {
    /**
     * 请求ID。
     * @example `C81C0732-DEBC-559C-B563-7EB2BEB21088`
     */
    RequestId: string;
    /**
     * 参数信息。
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
         * @example `PayType`
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
         * @example `none`
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
             * @example `lnch_Source`
             */
            PropertyName: string;
            /**
             * 资源名称。
             * @example `i-8vb0smn1lf6g77md****`
             */
            ResourceName: string;
            /**
             * 资源类型。
             * @example `serviceinstance`
             */
            ResourceType: string;
        }[];
    }[];
    /**
     * 套餐族约束。
     */
    FamilyConstraints: string[];
}
