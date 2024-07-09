export interface DescribeChangeOrderResponse {
    /**
     * 请求ID。
     * @example `91F93257-7A4A-4BD3-9A7E-2F6EAE6D****`
     */
    RequestId: string;
    /**
     * 调用结果的附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `0a98a02315955564772843261e****`
     */
    TraceId: string;
    /**
     * 变更单信息。
     */
    Data: {
        /**
         * 批次状态。取值说明如下：
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
         * 发布单子状态，用于判断发布单是否在发布过程中存在异常。取值说明如下：
         * - **0**：发布正常。
         * - **1**：发布异常。例如分批发布时出错，需要您手动回滚，此时发布单虽然出错，但因不能完结而依然处于执行中。
         * @example `0`
         */
        SubStatus: number;
        /**
         * 操作审批ID。
         * @example `67de0b39-a9d4-4c09-a170-cf438208****`
         */
        ApprovalId: string;
        /**
         * 错误信息。
         * @example `success`
         */
        ErrorMessage: string;
        /**
         * 自动分批方式时，开始下一批次前的等待时间。单位：分钟。
         * @example `0`
         */
        BatchWaitTime: number;
        /**
         * 创建时间。
         * @example `2020-12-17 21:06:45`
         */
        CreateTime: string;
        /**
         * 分批数。
         * @example `1`
         */
        BatchCount: number;
        /**
         * 变更类型Code。取值说明如下：
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
         * @example `CoRestartInstances`
         */
        CoTypeCode: string;
        /**
         * 是否支持回滚。取值说明如下：
         * - **true**：支持回滚。
         * - **false**：不支持回滚。
         * @example `false`
         */
        SupportRollback: boolean;
        /**
         * 变更单ID。
         * @example `765fa5c0-9ebb-4bb4-b383-1f885447**`
         */
        ChangeOrderId: string;
        /**
         * 应用名称。
         * @example `app-test`
         */
        AppName: string;
        /**
         * 分批类型。取值说明如下：
         * - **auto**：自动。
         * - **manual**：手动。
         * @example `auto`
         */
        BatchType: string;
        /**
         * 变更单描述信息。
         * @example `description`
         */
        Description: string;
        /**
         * 变更类型，是对**CoTypeCode**的描述。
         * @example `批量重启实例`
         */
        CoType: string;
        /**
         * 是否为自动分批。取值说明如下：
         * - **true**：自动分批变更。
         * - **false**：不是自动分批变更。
         * @example `true`
         */
        Auto: boolean;
        /**
         * 当前批次ID。
         * @example `0e4acf82-c9b1-4c1e-ac28-55776338****`
         */
        CurrentPipelineId: string;
        /**
         * 批次信息。
         */
        Pipelines: {
            /**
             * 批次状态。取值说明如下：
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
             * 开始时间。
             * @example `1562831689704`
             */
            StartTime: number;
            /**
             * 最近更新时间。
             * @example `1562847178007`
             */
            UpdateTime: number;
            /**
             * 分批类型。
             * @example `0`
             */
            BatchType: number;
            /**
             * 分批内并行任务数。
             * @example `0`
             */
            ParallelCount: number;
            /**
             * 批次名称。
             * @example `Batch 1 Change`
             */
            PipelineName: string;
            /**
             * 批次ID。
             * @example `0e4acf82-c9b1-4c1e-ac28-55776338****`
             */
            PipelineId: string;
        }[];
        /**
         * 应用ID。
         * @example `bbbbb-3fd370b2-3646-4ba6-91f9-9423e19ab0cd-*****`
         */
        AppId: string;
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
     * 是否成功查询变更单信息。取值说明如下：
     * - **true**：查询成功。
     * - **false**：查询失败。
     * @example `true`
     */
    Success: boolean;
}
