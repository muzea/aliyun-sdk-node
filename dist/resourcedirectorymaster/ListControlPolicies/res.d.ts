export interface ListControlPoliciesResponse {
    /**
     * 管控策略数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `9424A34C-3471-45AD-B6AB-924BBDFE42F9`
     */
    RequestId: string;
    /**
     * 分页时每页显示的数据条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    ControlPolicies: {
        /**
         * 管控策略列表。
         */
        ControlPolicy: {
            /**
             * 管控策略更新时间。
             * @example `2020-08-05T06:32:24Z`
             */
            UpdateDate: string;
            /**
             * 管控策略描述。
             * @example `支持阿里云所有操作的系统管控策略`
             */
            Description: string;
            /**
             * 管控策略生效范围。取值：
             * - All：表示该管控策略针对阿里云账号、RAM用户或RAM角色生效。
             * - RAM：表示该管控策略仅针对RAM用户或RAM角色生效。
             * @example `All`
             */
            EffectScope: string;
            /**
             * 管控策略被引用的次数。
             * @example `44`
             */
            AttachmentCount: string;
            /**
             * 管控策略名称。
             * @example `FullAliyunAccess`
             */
            PolicyName: string;
            /**
             * 管控策略ID。
             * @example `cp-FullAliyunAccess`
             */
            PolicyId: string;
            /**
             * 管控策略创建时间。
             * @example `2020-08-05T06:32:24Z`
             */
            CreateDate: string;
            /**
             * 管控策略类型。取值：
             * - System：系统管控策略。
             * - Custom：自定义管控策略。
             * @example `System`
             */
            PolicyType: string;
        }[];
    };
}
