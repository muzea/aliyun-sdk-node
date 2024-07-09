export interface CreateSiteMonitorResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `68192f5d-0d45-4b98-9724-892813f86c71`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: string;
    /**
     * 监控任务的结果详情。
     */
    Data: {
        AttachAlertResult: {
            /**
             * 关联已有报警规则的结果。
             */
            Contact: {
                /**
                 * 关联报警规则的状态码。
                 * > 200表示成功。
                 * @example `200`
                 */
                Code: string;
                /**
                 * 关联报警规则的返回信息。
                 * @example `successful`
                 */
                Message: string;
                /**
                 * 关联报警规则的请求ID。
                 * @example `5dd33455-4f65-4b0c-9200-33d66f3f340b`
                 */
                RequestId: string;
                /**
                 * 关联报警规则是否成功。取值：
                 * - true：成功。
                 * - false：失败。
                 * @example `true`
                 */
                Success: string;
                /**
                 * 关联报警规则的ID。
                 * @example `SystemDefault_acs_ecs_dashboard_InternetOutRate_Percent`
                 */
                RuleId: string;
            }[];
        };
    };
    CreateResultList: {
        /**
         * 返回结果。
         * 当创建监控任务成功时，有返回结果；当创建监控任务失败时，无返回结果。
         */
        CreateResultList: {
            /**
             * 监控任务ID。
             * @example `2c8dbdf9-a3ab-46a1-85a4-f094965e****`
             */
            TaskId: string;
            /**
             * 监控任务名称。
             * @example `HanZhou_ECS1`
             */
            TaskName: string;
        }[];
    };
}
