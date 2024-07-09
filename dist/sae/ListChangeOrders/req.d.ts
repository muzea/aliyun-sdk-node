export interface ListChangeOrdersRequest {
    /**
     * 应用ID。
     * @example `145341c-9708-4967-b3ec-24933767****`
     */
    "AppId": string;
    /**
     * 当前分页。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页大小。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 发布单描述信息模糊查询（包含这此**key**的都会返回）。
     * @example `test`
     */
    "Key"?: string;
    /**
     * 变更单类型。取值说明如下：
     * - **CoBindSlb**：绑定SLB。
     * - **CoUnbindSlb**：解绑SLB。
     * - **CoCreateApp**：创建应用。
     * - **CoDeleteApp**：删除应用。
     * - **CoDeploy**：部署应用。
     * - **CoRestartApplication**：重启应用。
     * - **CoRollback**：回滚应用。
     * - **CoScaleIn**：应用缩容。
     * - **CoScaleOut**：应用扩容。
     * - **CoStart**：启动应用。
     * - **CoStop**：停止应用。
     * - **CoRescaleApplicationVertically**：修改实例规格。
     * - **CoDeployHistroy**：回退历史版本。
     * - **CoBindNas**：绑定NAS。
     * - **CoUnbindNas**：解绑NAS。
     * - **CoBatchStartApplication**：批量启动应用。
     * - **CoBatchStopApplication**：批量停止应用。
     * - **CoRestartInstances**：重启实例。
     * - **CoDeleteInstances**：删除实例。
     * - **CoScaleInAppWithInstances**：指定实例缩容。
     * @example `CoCreateApp`
     */
    "CoType"?: string;
    /**
     * 变更单状态。取值说明如下：
     * - **0**：准备。
     * - **1**：执行中。
     * - **2**：执行成功。
     * - **3**：执行失败。
     * - **6**：终止。
     * - **8**：等待手工确认分批。
     * - **9**：等待自动确认分批。
     * - **10**：系统异常执行失败。
     * - **11**：等待审批。
     * - **12**：审批通过，等待执行。
     * @example `2`
     */
    "CoStatus"?: string;
}
