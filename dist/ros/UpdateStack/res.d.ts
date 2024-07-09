export interface UpdateStackResponse {
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84B6E6F`
     */
    RequestId: string;
    /**
     * 资源栈ID。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    StackId: string;
    /**
     * 校验结果。仅在DryRun为true时返回。
     */
    DryRunResult: {
        /**
         * 允许修改的参数。
         */
        ParametersAllowedToBeModified: string[];
        /**
         * 可能允许修改的参数。
         */
        ParametersConditionallyAllowedToBeModified: string[];
        /**
         * 不确定是否允许修改的参数。
         */
        ParametersUncertainlyAllowedToBeModified: string[];
        /**
         * 不允许修改的参数。
         */
        ParametersNotAllowedToBeModified: string[];
        /**
         * 一定会引发资源中断的参数的列表。
         * > - 目前仅支持少量资源类型。
         * > - 仅适用于更新ROS类型资源栈。
         */
        ParametersCauseInterruptionIfModified: string[];
        /**
         * 可能会引发资源中断的参数的列表。
         * > - 目前仅支持少量资源类型。
         * > - 仅适用于更新ROS类型资源栈。
         */
        ParametersConditionallyCauseInterruptionIfModified: string[];
        /**
         * 不确定是否会引发资源中断的参数的列表。
         * > - 目前仅支持少量资源类型。
         * > - 仅适用于更新ROS类型资源栈。
         */
        ParametersUncertainlyCauseInterruptionIfModified: string[];
        /**
         * 一定会引发资源替换更新的参数的列表。
         * > - 仅在ReplacementOption为Enabled时返回。
         * > - 仅适用于更新ROS类型资源栈。
         */
        ParametersCauseReplacementIfModified: string[];
        /**
         * 可能会引发资源替换更新的参数的列表。
         * > - 仅在ReplacementOption为Enabled时返回。
         * > - 仅适用于更新ROS类型资源栈。
         */
        ParametersConditionallyCauseReplacementIfModified: string[];
        /**
         * 不确定是否会引发资源替换更新的参数的列表。
         * > - 仅在ReplacementOption为Enabled时返回。
         * > - 仅适用于更新ROS类型资源栈。
         */
        ParametersUncertainlyCauseReplacementIfModified: string[];
    };
}
