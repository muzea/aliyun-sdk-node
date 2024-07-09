export interface ListOperationTicketsResponse {
    /**
     * 待审批的运维申请列表。
     */
    OperationTickets: {
        /**
         * 运维申请人ID。
         * @example `1`
         */
        ApplyUserId: string;
        /**
         * 运维申请人用户名。
         * @example `test`
         */
        ApplyUsername: string;
        /**
         * 申请运维的资产账户ID。
         * @example `1`
         */
        AssetAccountId: string;
        /**
         * 申请运维的资产账户登录名。
         * @example `root`
         */
        AssetAccountName: string;
        /**
         * 申请运维的资产地址。
         * @example `10.167.XX.XX`
         */
        AssetAddress: string;
        /**
         * 申请运维的资产ID。
         * @example `2`
         */
        AssetId: string;
        /**
         * 申请运维的资产名称。
         * @example `poros-test`
         */
        AssetName: string;
        /**
         * 申请运维的资产所属的网络域ID。
         * @example `2`
         */
        AssetNetworkDomainId: string;
        /**
         * 申请运维的资产操作系统类型。
         * @example `Linux`
         */
        AssetOs: string;
        /**
         * 申请运维的资产所属资产源的名称。取值：
         * - **Local**：本地主机
         * - **Ecs**：ECS实例
         * - **Rds**：RDS实例
         * - 第三方资产源名称
         * @example `Local`
         */
        AssetSource: string;
        /**
         * 申请运维的资产所属资产源的ID。
         * @example `1`
         */
        AssetSourceInstanceId: string;
        /**
         * 提交申请的时间（秒，时间戳格式）。
         * @example `1669965908`
         */
        CreatedTime: number;
        /**
         * 需要审批的运维申请单的ID。
         * @example `1`
         */
        OperationTicketId: string;
        /**
         * 申请运维的协议名称。
         * @example `SSH`
         */
        ProtocolName: string;
        /**
         * 审批状态。取值：
         * - Normal：待审批
         * @example `Normal`
         */
        State: string;
    }[];
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 待审批的运维申请单总数。
     * @example `20`
     */
    TotalCount: number;
}
