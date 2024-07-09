export interface DescribeApplicationStatusResponse {
    /**
     * 请求ID。
     * @example `91F93257-7A4A-4BD3-9A7E-2F6EAE6D****`
     */
    RequestId: string;
    /**
     * 附加信息。取值说明如下：
     * - 请求正常，返回**success**。
     * - 请求异常，返回具体异常错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `0a98a02315955564772843261e****`
     */
    TraceId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 是否开通ARMS高级版。取值说明如下：
         * - **true**：开通ARMS高级版。
         * - **false**：不开通ARMS高级版。
         * @example `false`
         */
        ArmsAdvancedEnabled: string;
        /**
         * 最近一次执行的发布单ID，未执行过或发布单信息过期则为空。
         * @example `1ccc2339-fc19-49aa-bda0-1e7b8497****`
         */
        LastChangeOrderId: string;
        /**
         * 该应用在ARMS侧元数据信息。
         * @example `{"appId":"0099b7be-5f5b-4512-a7fc-56049ef1****","licenseKey":"d5cgdt5pu0@7303f55292a****"}`
         */
        ArmsApmInfo: string;
        /**
         * 应用创建时间。
         * @example `1563373372746`
         */
        CreateTime: string;
        /**
         * 应用当前状态。取值说明如下：
         * - **RUNNING**：应用正在运行。
         * - **STOPPED**：应用停止运行。
         * - **UNKNOWN**：应用状态未知。
         * @example `RUNNING`
         */
        CurrentStatus: string;
        /**
         * 当前应用ID。
         * @example `0099b7be-5f5b-4512-a7fc-56049ef1****`
         */
        AppId: string;
        /**
         * 最近一次发布单是否处于执行中。取值说明如下：
         * - **true**：最近一次发布单处于执行中。
         * - **false**：最近一次发布单不处于执行中。
         * @example `false`
         */
        LastChangeOrderRunning: boolean;
        /**
         * 当前应用运行中的实例数。
         * @example `1`
         */
        RunningInstances: number;
        /**
         * 最近一次发布单状态。取值说明如下：
         * - **READY**：最近一次发布单准备就绪。
         * - **RUNNING**：最近一次发布单处于执行中。
         * - **SUCCESS**：最近一次发布单发布成功。
         * - **FAIL**：最近一次发布单发布失败。
         * - **ABORT**：最近一次发布单中止运行。
         * - **WAIT\_BATCH\_CONFIRM**：最近一次发布单等待手工批量确认。
         * - **AUTO\_BATCH\_WAIT**：最近一次发布单处于自动批量等待状态。
         * - **SYSTEM\_FAIL**：系统故障。
         * - **WAIT\_APPROVAL**：最近一次发布单等待审批。
         * - **APPROVED**：最近一次发布单处于审批通过的待执行状态。
         * @example `SUCCESS`
         */
        LastChangeOrderStatus: string;
        /**
         * 发布单子状态，用于判断发布单是否在发布过程中存在异常。取值说明如下：
         * - **NORMAL**：发布正常。
         * - **RUNNING\_BUT\_HAS\_ERROR**：发布异常。例如分批发布时出错，需要您手动回滚，此时发布单虽然出错，但因不能完结而依然处于执行中。
         * @example `NORMAL`
         */
        SubStatus: string;
        /**
         * 是否启用SAE Agent。
         * - **true**：启用。
         * - **false**：不启用。
         * @example `false`
         */
        EnableAgent: boolean;
        /**
         * 文件大小限制。取值范围\[0,10240\]，单位为KB。
         * @example `10240`
         */
        FileSizeLimit: number;
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
     * 获取应用状态信息是否成功。取值说明如下：
     * - **true**：获取成功。
     * - **false**：获取失败。
     * @example `true`
     */
    Success: boolean;
}
