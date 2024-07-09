export interface QueryApprovalInfoResponse {
    /**
     * 请求ID。
     * @example `D787E1A3-A93C-424A-B626-C2B05DF8D885`
     */
    RequestId: string;
    /**
     * 返回接口执行结果。
     */
    Result: {
        /**
         * 总数目。
         * @example `3`
         */
        Total: number;
        /**
         * 总页码。
         * @example `1`
         */
        TotalPages: number;
        /**
         * 当前页起始位置。
         * @example `0`
         */
        Start: number;
        /**
         * 当前页请求记录数。
         * @example `1000`
         */
        PageSize: number;
        /**
         * 当前页。
         * @example `1`
         */
        Page: number;
        /**
         * 审批流信息数组。
         */
        Data: {
            /**
             * 空间名称。
             * @example `测试工作空间`
             */
            WorkspaceName: string;
            /**
             * 申请id。
             * @example `64813ef6da58e80eef8ed2f9`
             */
            ApplicationId: string;
            /**
             * 申请人userID，qbi用户id。
             * @example `1359508`
             */
            ApplicantId: string;
            /**
             * 申请人昵称。
             * @example `李飞`
             */
            ApplicantName: string;
            /**
             * 审批人userID，qbi用户id。
             * @example `sdasascasxasd`
             */
            ApproverId: string;
            /**
             * 审批人昵称。
             * @example `data_fusion_002`
             */
            ApproverName: string;
            /**
             * 申请权限资源ID。
             * @example `acl-ct4t2e4u2x4ej1bzur`
             */
            ResourceId: string;
            /**
             * 申请权限资源名称(报表名、空间名...)。
             * @example `测试资源`
             */
            ResourceName: string;
            /**
             * 资源类型。
             * @example `DASHBOARD`
             */
            ResourceType: string;
            /**
             * 申请理由。
             * @example `开发需要`
             */
            ApplyReason: string;
            /**
             * 处理理由。
             * @example `开发需要`
             */
            HandleReason: string;
            /**
             * 权限有效期限，时间戳。
             * @example `1708568097135`
             */
            ExpireDate: number;
            /**
             * 申请创建时间，时间戳。
             * @example `1687315758`
             */
            GmtCreate: number;
            /**
             * 申请修改时间，时间戳。
             * @example `1640595729000`
             */
            GmtModified: number;
            /**
             * 权限审批状态：
             * - 0：审批中,对应请求参数中的0
             * - 1：审批通过，对应请求参数送1
             * - 2：审批拒绝，对应请求参数送1
             * @example `0`
             */
            FlagStatus: number;
            /**
             * 资源是否已被删除：
             * - true：已被删除
             * - false：未被删除
             * @example `true`
             */
            DeleteFlag: boolean;
        }[];
    };
    /**
     * 接口是否成功返回，取值范围：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
