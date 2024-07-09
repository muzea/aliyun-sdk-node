export interface DescribeNamespaceListResponse {
    /**
     * 请求ID。
     * @example `30375C38-F4ED-4135-A0AE-5C75DC7F****`
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
     * @example `ac1a0b2215622920113732501e****`
     */
    TraceId: string;
    /**
     * 命名空间列表。
     */
    Data: {
        /**
         * VPC ID。
         * @example `vpc-2ze0i263cnn311nvj****`
         */
        VpcId: string;
        /**
         * vSwitch ID。
         * @example `vsw-2ze559r1z1bpwqxwp****`
         */
        VSwitchId: string;
        /**
         * 是否返回自定义命名空间。取值说明如下：
         * - **true**：返回自定义命名空间。
         * - **false**：不返回自定义命名空间。
         * @example `true`
         */
        Custom: boolean;
        /**
         * Agent安装命令。
         * @example `http://edas-bj.oss-cn-beijing-internal.aliyuncs.com/test/install.sh`
         */
        AgentInstall: string;
        /**
         * 命名空间ID。
         * @example `cn-beijing:test`
         */
        NamespaceId: string;
        /**
         * 是否排除混合云命名空间。取值说明如下：
         * - **true**：排除混合云命名空间。
         * - **false**：不排除混合云命名空间。
         * @example `false`
         */
        HybridCloudEnable: boolean;
        /**
         * 安全组ID。
         * @example `sg-wz969ngg2e49q5i4****`
         */
        SecurityGroupId: string;
        /**
         * 废弃参数，无特殊含义。
         * @example `false`
         */
        Current: boolean;
        /**
         * 命名空间名称。
         * @example `test`
         */
        NamespaceName: string;
        /**
         * 命名空间所属地域。
         * @example `cn-beijing`
         */
        RegionId: string;
        /**
         * 短版命名空间ID。
         * @example `test`
         */
        NameSpaceShortId: string;
    }[];
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
     * 获取命名空间列表是否成功。取值说明如下：
     * - **true**：获取成功。
     * - **false**：获取失败。
     * @example `true`
     */
    Success: boolean;
}
