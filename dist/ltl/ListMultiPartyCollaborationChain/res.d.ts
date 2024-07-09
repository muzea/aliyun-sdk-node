export interface ListMultiPartyCollaborationChainResponse {
    /**
     * 响应状态。
     * @example `200`
     */
    Code: number;
    /**
     * 调用失败时，返回的出错信息。
     * @example `The system is busy. Please try again later.`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `D5C69894-9709-4653-B3D8-25234034C2FC`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应内容。
     */
    Data: {
        /**
         * 页码。
         * @example `1`
         */
        Num: number;
        /**
         * 总条数。
         * @example `1`
         */
        Total: number;
        /**
         * 每页数量。
         * @example `1`
         */
        Size: number;
        /**
         * 数据项。
         */
        PageData: {
            /**
             * 业务链名称。
             * @example `某业务链`
             */
            Name: string;
            /**
             * 业务链备注。
             * @example `某业务某服务`
             */
            Remark: string;
            /**
             * 账号角色。
             * - **ADMIN**：业务管理方。
             * - **MEMBER**：业务使用方。
             * @example `ADMIN`
             */
            RoleType: string;
            /**
             * 业务链标识。
             * @example `489973087549****`
             */
            BizChainId: string;
        }[];
    };
}
