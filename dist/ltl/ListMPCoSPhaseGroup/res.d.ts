export interface ListMPCoSPhaseGroupResponse {
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
     * 响应状态码。
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
             * 协同模型标识。
             * @example `987823074334****`
             */
            PhaseGroupId: string;
            /**
             * 协同模型名称。
             * @example `某协同模型`
             */
            Name: string;
            /**
             * 协同模型备注。
             * @example `某协同模型的备注信息。`
             */
            Remark: string;
        }[];
    };
}
