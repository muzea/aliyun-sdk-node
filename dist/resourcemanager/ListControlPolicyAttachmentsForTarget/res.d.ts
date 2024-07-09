export interface ListControlPolicyAttachmentsForTargetResponse {
    /**
     * 请求ID。
     * @example `C276B600-7B7A-49E8-938C-E16CFA955A82`
     */
    RequestId: string;
    ControlPolicyAttachments: {
        /**
         * 已绑定的管控策略列表。
         */
        ControlPolicyAttachment: {
            /**
             * 管控策略描述。
             * @example `ExampleControlPolicy`
             */
            Description: string;
            /**
             * 管控策略生效范围。取值：
             * - All：表示该管控策略针对阿里云账号、RAM用户或RAM角色生效。
             * - RAM：表示该管控策略仅针对RAM用户或RAM角色生效。
             * @example `RAM`
             */
            EffectScope: string;
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
             * 绑定管控策略的时间。
             * @example `2021-03-19T02:56:24Z`
             */
            AttachDate: string;
            /**
             * 管控策略类型。取值：
             * - System：系统管控策略。
             * - Custom：自定义管控策略。
             * @example `Custom`
             */
            PolicyType: string;
        }[];
    };
}
