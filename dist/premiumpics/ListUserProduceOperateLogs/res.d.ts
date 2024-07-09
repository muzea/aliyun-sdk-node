export interface ListUserProduceOperateLogsResponse {
    /**
     * 页码。
     * @example `2`
     */
    PageNum: number;
    /**
     * 请求id
     * @example `DA789D6E-875B-5473-B374-ABA909970BAB`
     */
    RequestId: string;
    /**
     * 返回分页大小。
     * @example `20`
     */
    PageSize: number;
    /**
     * 总计页码。
     * @example `3`
     */
    TotalPageNum: number;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 操作时间戳
         * @example `1662531548`
         */
        OperateTime: number;
        /**
         * OperateUserType
         * @example `OperateUserType`
         */
        OperateUserType: string;
        /**
         * 业务ID
         * @example `P20220722103530000001`
         */
        BizId: string;
        /**
         * 操作人名称
         * @example `StopOperationScriptInvocation`
         */
        OperateName: string;
        /**
         * BizType
         * @example `esp.logo`
         */
        BizType: string;
    }[];
    /**
     * 总条数。
     * @example `1`
     */
    TotalItemNum: number;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `True`
     */
    Success: boolean;
}
