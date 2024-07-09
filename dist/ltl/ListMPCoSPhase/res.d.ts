export interface ListMPCoSPhaseResponse {
    /**
     * 响应状态码。
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
             * 阶段名称。
             * @example `某阶段`
             */
            Name: string;
            /**
             * 阶段备注。
             * @example `某阶段的备注信息。`
             */
            Remark: string;
            /**
             * 访问权限。
             * - **1**：读权限。
             * - **2**：写权限。
             * - **3**：读写权限。
             * @example `1`
             */
            AccessPermission: number;
            /**
             * 阶段标识。
             * @example `196487512811****`
             */
            PhaseId: string;
        }[];
    };
}
