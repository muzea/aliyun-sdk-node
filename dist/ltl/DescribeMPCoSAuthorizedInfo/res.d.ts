export interface DescribeMPCoSAuthorizedInfoResponse {
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
         * 已授权阶段列表。
         */
        AuthorizedPhaseList: {
            /**
             * 阶段名称。
             * @example `某阶段`
             */
            PhaseName: string;
            /**
             * 阶段标识。
             * @example `987823074334****`
             */
            PhaseId: string;
        }[];
        /**
         * 未授权阶段列表。
         */
        UnAuthorizedPhaseList: {
            /**
             * 阶段名称。
             * @example `某某阶段`
             */
            PhaseName: string;
            /**
             * 阶段标识。
             * @example `987823074334****`
             */
            PhaseId: string;
        }[];
    };
}
