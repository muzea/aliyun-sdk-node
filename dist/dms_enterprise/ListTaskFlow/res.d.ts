export interface ListTaskFlowResponse {
    /**
     * 请求ID。
     * @example `4116147E-C628-5816-8779-8EEAF8E973F4`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `403`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    TaskFlowList: {
        /**
         * 任务流信息列表。
         */
        TaskFlow: {
            /**
             * 任务流ID。
             * @example `134137****`
             */
            Id: number;
            /**
             * 创建人的用户ID。
             * @example `51****`
             */
            CreatorId: string;
            /**
             * 创建人的昵称。
             * @example `Creator_NickName`
             */
            CreatorNickName: string;
            /**
             * 任务流Owner的昵称。
             * @example `Owner_NickName`
             */
            DagOwnerNickName: string;
            /**
             * 最近一次部署记录的ID。
             * @example `12**`
             */
            DeployId: number;
            /**
             * 任务流状态，返回值如下：
             * - **0**：无效
             * - **1**：无调度配置
             * - **2**：等待调度
             * @example `2`
             */
            Status: number;
            /**
             * 最后一个运行记录的状态，返回值如下：
             * - **0**：无效
             * - **1**：无调度配置
             * - **2**：等待调度
             * @example `0`
             */
            LatestInstanceStatus: number;
            /**
             * 最近一个运行记录的创建时间。
             * @example `2022-04-13`
             */
            LatestInstanceTime: string;
        }[];
    };
}
