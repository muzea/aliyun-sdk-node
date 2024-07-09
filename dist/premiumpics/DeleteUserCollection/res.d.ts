export interface DeleteUserCollectionResponse {
    /**
     * status
     * @example `True`
     */
    Status: boolean;
    /**
     * 请求id
     * @example `AEA9CED1-57F2-5E33-A86A-427D46E7EBF7`
     */
    RequestId: string;
    /**
     * errorMsg
     * @example `dabukai dabukaidabukaidabukai`
     */
    ErrorMsg: string;
    /**
     * 错误码。当您删除规则成功时，该参数为空。当您删除规则失败时，该参数显示错误码。错误码详情，请参见错误中心。
     * @example `0`
     */
    ErrorCode: string;
    /**
     * 是否成功回收了指定的实例角色。
     * @example `True`
     */
    Success: boolean;
}
