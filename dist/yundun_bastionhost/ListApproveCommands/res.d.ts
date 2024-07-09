export interface ListApproveCommandsResponse {
    /**
     * 命令列表。
     */
    ApproveCommands: {
        /**
         * 待审批的命令ID。
         * @example `1`
         */
        ApproveCommandId: string;
        /**
         * 运维的资产账户名。
         * @example `root`
         */
        AssetAccountName: string;
        /**
         * 运维的资产IP。
         * @example `10.167.XX.XX`
         */
        AssetIp: string;
        /**
         * 运维的资产名称。
         * @example `poros-test`
         */
        AssetName: string;
        /**
         * 提交申请的来源IP。
         * @example `172.18.XX.XX`
         */
        ClientIp: string;
        /**
         * 提交申请的堡垒机用户。
         * @example `test`
         */
        ClientUser: string;
        /**
         * 待审批的命令。
         * @example `/bin/bash`
         */
        Command: string;
        /**
         * 提交申请的时间。（秒，时间戳格式）
         * @example `1679393152`
         */
        CreateTime: string;
        /**
         * 运维的协议名。
         * @example `SSH`
         */
        ProtocolName: string;
        /**
         * 触发审批的运维的会话ID。
         * @example `95f873ab64a76d5b0000000000004d5e`
         */
        SessionId: string;
        /**
         * 审批状态。
         *  **Wait**：待审批
         * @example `Wait`
         */
        State: string;
    }[];
    /**
     * 接口请求的唯一ID标识。
     * @example `E3EF7711-766D-5888-997B-EFBA76809229`
     */
    RequestId: string;
    /**
     * 待审批的命令总数。
     * @example `15`
     */
    TotalCount: number;
}
