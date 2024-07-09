export interface CreateControlPolicyResponse {
    /**
     * 管控策略详情。
     */
    ControlPolicy: {
        /**
         * 管控策略更新时间。
         * @example `2021-03-18T09:24:19Z`
         */
        UpdateDate: string;
        /**
         * 管控策略描述。
         * @example `ExampleControlPolicy`
         */
        Description: string;
        /**
         * 管控策略生效范围。
         * 取值：RAM，表示该管控策略仅针对RAM用户或RAM角色生效。
         * @example `RAM`
         */
        EffectScope: string;
        /**
         * 管控策略被引用的次数。
         * @example `0`
         */
        AttachmentCount: string;
        /**
         * 管控策略名称。
         * @example `ExampleControlPolicy`
         */
        PolicyName: string;
        /**
         * 管控策略ID。
         * @example `cp-jExXAqIYkwHN****`
         */
        PolicyId: string;
        /**
         * 管控策略创建时间。
         * @example `2021-03-18T09:24:19Z`
         */
        CreateDate: string;
        /**
         * 管控策略类型。取值：
         * - System：系统管控策略。
         * - Custom：自定义管控策略。
         * @example `Custom`
         */
        PolicyType: string;
    };
    /**
     * 请求ID。
     * @example `776B05B3-A0B0-464B-A191-F4E1119A94B2`
     */
    RequestId: string;
}
