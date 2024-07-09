export interface ListChangeOrdersResponse {
    /**
     * 请求ID。
     * @example `65E1F-43BA-4D0C-8E61-E4D1337F****`
     */
    RequestId: string;
    /**
     * 调用结果的附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `0bb6f815638568884597879d****`
     */
    TraceId: string;
    /**
     * 变更单列表信息。
     */
    Data: {
        /**
         * 当前分页。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 变更单总数。
         * @example `1`
         */
        TotalSize: number;
        /**
         * 变更单列表。
         */
        ChangeOrderList: {
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
            Status: number;
            /**
             * 结束时间。
             * @example `2019-07-11 20:12:58`
             */
            FinishTime: string;
            /**
             * 创建时间。
             * @example `2019-07-11 15:54:49`
             */
            CreateTime: string;
            /**
             * 用户ID。
             * @example `sae-beta-test`
             */
            UserId: string;
            /**
             * 变更单操作入口来源。
             * @example `console`
             */
            Source: string;
            /**
             * 分批数。
             * @example `1`
             */
            BatchCount: number;
            /**
             * 创建用户ID。
             * @example `sae-beta-test`
             */
            CreateUserId: string;
            /**
             * 变更类型Code。取值说明如下：
             *
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
            CoTypeCode: string;
            /**
             * 变更单ID。
             * @example `7fa5c0-9ebb-4bb4-b383-1f885447****`
             */
            ChangeOrderId: string;
            /**
             * 分批类型。取值说明如下：
             *   - **auto**：自动。
             *   - **manual**：手动。
             * @example `auto`
             */
            BatchType: string;
            /**
             * 分组ID。
             * @example `c9ecd2-cf6c-46c3-9f20-525de202****`
             */
            GroupId: string;
            /**
             * 描述信息。
             * @example `版本：1.0 | 镜像名称：nginx`
             */
            Description: string;
            /**
             * 变更类型，是对**CoTypeCode**的描述。
             * @example `创建应用`
             */
            CoType: string;
            /**
             * 应用ID。
             * @example `164341c-9708-4967-b3ec-24933767****`
             */
            AppId: string;
        }[];
        /**
         * 分页大小。
         * @example `20`
         */
        PageSize: number;
    };
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**列表。
     * @example `空`
     */
    ErrorCode: string;
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 获取变更单列表是否成功。取值说明如下：
     * - **true**：获取成功。
     * - **false**：获取失败。
     * @example `true`
     */
    Success: boolean;
}
