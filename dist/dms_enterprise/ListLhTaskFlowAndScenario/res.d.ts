export interface ListLhTaskFlowAndScenarioResponse {
    RawDAGList: {
        /**
         * 默认业务场景的任务流列表。
         */
        Dag: {
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
             * 任务流是否已被删除，返回值如下：
             * - **true**：已删除
             * - **false**：没有删除
             * @example `false`
             */
            IsDeleted: boolean;
            /**
             * 扩展字段，暂无含义。
             * @example `-`
             */
            DemoId: string;
            /**
             * 最近一次部署记录的ID。
             * @example `12**`
             */
            DeployId: number;
            /**
             * 扩展字段，暂无含义。
             * @example `-`
             */
            DataFlowId: number;
            /**
             * 应用场景ID。
             * @example `2**`
             */
            ScenarioId: number;
            /**
             * 项目空间ID。
             * @example `1`
             */
            SpaceId: number;
            /**
             * 创建人的昵称。
             * @example `Creator_Name`
             */
            CreatorNickName: string;
            /**
             * 任务流Owner的昵称。
             * @example `Owner_Name`
             */
            DagOwnerNickName: string;
            /**
             * 任务流是否支持编辑，返回值如下：
             * - **true**：支持修改
             * - **false**：不支持修改
             * @example `true`
             */
            CanEdit: boolean;
            /**
             * 任务流状态，返回值如下：
             * - **0**：无效
             * - **1**：无调度配置
             * - **2**：等待调度
             * @example `2`
             */
            Status: number;
            /**
             * 最近一个运行记录的状态，返回值如下：
             * - **0**：无效
             * - **1**：无调度配置
             * - **2**：等待调度
             * @example `0`
             */
            LatestInstanceStatus: number;
            /**
             * 最近一个运行记录的创建时间。
             * @example `2022-04-14`
             */
            LatestInstanceTime: number;
            /**
             * 任务流名称。
             * @example `Dag_Name`
             */
            DagName: string;
            /**
             * 任务流Owner的用户ID。
             * @example `51****`
             */
            DagOwnerId: string;
        }[];
    };
    ScenarioDAGList: {
        /**
         * 其他业务场景的任务流列表。
         */
        ScenarioDAG: {
            /**
             * 业务场景信息列表。
             */
            Scenario: {
                /**
                 * 应用场景名称。
                 * @example `Scenario_2`
                 */
                ScenarioName: string;
                /**
                 * 创建人的用户ID。
                 * @example `51****`
                 */
                CreatorId: string;
                /**
                 * 描述信息。
                 * @example `test`
                 */
                Description: string;
            };
            DagList: {
                /**
                 * 任务流信息列表。
                 */
                Dag: {
                    /**
                     * 任务流ID。
                     * @example `9***`
                     */
                    Id: number;
                    /**
                     * 创建人的用户ID。
                     * @example `51****`
                     */
                    CreatorId: string;
                    /**
                     * 任务流是否已被删除，返回值如下：
                     * - **true**：已删除
                     * - **false**：没有删除
                     * @example `false`
                     */
                    IsDeleted: boolean;
                    /**
                     * 扩展字段，暂无含义。
                     * @example `-`
                     */
                    DemoId: string;
                    /**
                     * 最近一次部署记录的ID。
                     * @example `12**`
                     */
                    DeployId: number;
                    /**
                     * 扩展字段，暂无含义。
                     * @example `-`
                     */
                    DataFlowId: number;
                    /**
                     * 应用场景ID。
                     * @example `2**`
                     */
                    ScenarioId: number;
                    /**
                     * 项目空间ID。
                     * @example `1`
                     */
                    SpaceId: number;
                    /**
                     * 创建人的昵称。
                     * @example `Creator_Name`
                     */
                    CreatorNickName: string;
                    /**
                     * 任务流Owner昵称。
                     * @example `Owner_Name`
                     */
                    DagOwnerNickName: string;
                    /**
                     * 任务流是否支持编辑。返回值如下：
                     * - **true**：支持修改
                     * - **false**：不支持修改
                     * @example `true`
                     */
                    CanEdit: boolean;
                    /**
                     * 任务流状态，返回值如下：
                     * - **0**：无效
                     * - **1**：无调度配置
                     * - **2**：等待调度
                     * @example `1`
                     */
                    Status: number;
                    /**
                     * 最近一个运行实例的状态，返回值如下：
                     * - 0：无效
                     * - 1：无调度配置
                     * - 2：等待调度
                     * @example `1`
                     */
                    LatestInstanceStatus: number;
                    /**
                     * 最近一个运行记录的创建时间。
                     * @example `2022-04-14`
                     */
                    LatestInstanceTime: number;
                    /**
                     * 任务流名称。
                     * @example `Dag_Name`
                     */
                    DagName: string;
                    /**
                     * 任务流Owner的用户ID。
                     * @example `51****`
                     */
                    DagOwnerId: string;
                }[];
            };
        }[];
    };
    /**
     * 请求ID。
     * @example `48602B78-0DDF-414C-8688-70CAB6070115`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
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
}
