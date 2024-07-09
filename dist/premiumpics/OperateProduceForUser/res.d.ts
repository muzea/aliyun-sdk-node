export interface OperateProduceForUserResponse {
    /**
     * 请求id
     * @example `CDCCC923-5BA8-5D38-9B0F-66516448716F`
     */
    RequestId: string;
    /**
     * 错误信息
     * @example `获取数据失败，无法显示应用列表`
     */
    ErrorMsg: string;
    /**
     * 错误代码。
     * @example `0`
     */
    ErrorCode: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `True`
     */
    Success: boolean;
}
