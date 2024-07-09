export interface FindUserGatewayByIdResponse {
    /**
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * 报错信息。
     * @example `Gateway exception, please launch local dg first`
     */
    ErrorMsg: string;
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `41FC4DFE-EA8A-5A56-A16C-F607C3409C79`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 网关详情。
     */
    Gateway: {
        /**
         * 网关描述。
         * @example `本地测试`
         */
        GatewayDesc: string;
        /**
         * 网关名称。
         * @example `本地测试`
         */
        GatewayName: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 网关ID
         * @example `dg-pv33g51gw69h****`
         */
        GatewayId: string;
        /**
         * 状态。
         * @example `RUNNING`
         */
        Status: string;
        /**
         * 用户ID。
         * @example `100****`
         */
        UserId: string;
        /**
         * 网关创建人。
         * @example `test_user`
         */
        CreatorId: string;
        /**
         * DG版本。
         * @example `3.0`
         */
        DgVersion: string;
        /**
         * 错误信息。
         * @example `Gateway exception, please launch local dg first`
         */
        ExceptionMsg: string;
        /**
         * 异常网关节点数量。
         * @example `3`
         */
        NumOfExceptionInstance: number;
        /**
         * 运行中网关节点数量。
         * @example `3`
         */
        NumOfRunningInstance: number;
    };
}
