export interface DescribeNamespaceResourcesResponse {
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
         * VPC ID。
         * @example `vpc-2ze0i263cnn311nvj****`
         */
        VpcId: string;
        /**
         * 发布单ID。
         * @example `afedb3c4-63f8-4a3d-aaa3-2c30363f****`
         */
        LastChangeOrderId: string;
        /**
         * 命名空间所属地域。
         * @example `cn-shanghai`
         */
        BelongRegion: string;
        /**
         * 命名空间ID。
         * @example `cn-shangha:test`
         */
        NamespaceId: string;
        /**
         * 安全组ID。
         * @example `sg-wz969ngg2e49q5i4****`
         */
        SecurityGroupId: string;
        /**
         * 用户ID。
         * @example `test@aliyun.com`
         */
        UserId: string;
        /**
         * 命名空间名称。
         * @example `test`
         */
        NamespaceName: string;
        /**
         * 最近一次发布单状态。取值说明如下：
         *   - **READY**：最近一次发布单准备就绪。
         *   - **RUNNING**：最近一次发布单处于执行中。
         *   - **SUCCESS**：最近一次发布单发布成功。
         *   - **FAIL**：最近一次发布单发布失败。
         *   - **ABORT**：最近一次发布单中止运行。
         *   - **WAIT\_BATCH\_CONFIRM**：最近一次发布单等待手工批量确认。
         *   - **AUTO\_BATCH\_WAIT**：最近一次发布单处于自动批量等待状态。
         *   - **SYSTEM\_FAIL**：系统故障。
         *   - **WAIT\_APPROVAL**：最近一次发布单等待审批。
         *   - **APPROVED**：最近一次发布单处于审批通过的待执行状态。
         * @example `SUCCESS`
         */
        LastChangeOrderStatus: string;
        /**
         * VPC名称。
         * @example `test`
         */
        VpcName: string;
        /**
         * vSwitch ID。
         * @example `vsw-2ze559r1z1bpwqxwp****`
         */
        VSwitchId: string;
        /**
         * 命名空间描述信息。
         * @example `decs`
         */
        Description: string;
        /**
         * 命名空间是否有发布单运行。取值说明如下：
         * - **true**：有发布单运行。
         * - **false**：没有发布单运行。
         * @example `true`
         */
        LastChangeOrderRunning: boolean;
        /**
         * 应用个数。
         * @example `1`
         */
        AppCount: number;
        /**
         * vSwitch名称。
         * @example `test`
         */
        VSwitchName: string;
        /**
         * 发布单通知是否过期。取值说明如下：
         * - **true**：发布单已过期。
         * - **false**：发布单没有过期。
         * @example `true`
         */
        NotificationExpired: boolean;
        /**
         * SAE命名空间租户ID。
         * @example `838cad95-973f-48fe-830b-2a8546d7****`
         */
        TenantId: string;
        /**
         * 跳板机应用ID。
         * @example `5ec46468-6b26-4a3c-9f7c-bf88761a****`
         */
        JumpServerAppId: string;
        /**
         * 跳板机IP地址。
         * @example `120.78.XXX.XX`
         */
        JumpServerIp: string;
        /**
         * 短版命名空间ID。
         * @example `test`
         */
        NameSpaceShortId: string;
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
     * 查询命名空间资源信息是否成功。取值说明如下：
     * - **true**：查询成功。
     * - **false**：查询失败。
     * @example `true`
     */
    Success: boolean;
}
