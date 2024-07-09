export interface GetUserGatewaysResponse {
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
     * 已创建的网关数量。
     * @example `20`
     */
    Count: number;
    GatewayList: {
        /**
         * 网关列表信息。
         */
        Gateway: {
            /**
             * 网关描述。
             * @example `本地测试`
             */
            GatewayDesc: string;
            /**
             * 网关名称。
             * @example `本地测试。`
             */
            GatewayName: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 网关ID。
             * @example `dg-lch384wg5701****`
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
             * 网关创建者ID。
             * @example `100****`
             */
            CreatorId: string;
            /**
             * 网关版本。
             * @example `3.0`
             */
            DgVersion: string;
            /**
             * 网关异常信息。
             * @example `exception`
             */
            ExceptionMsg: string;
            /**
             * 异常实例数量。
             * @example `3`
             */
            NumOfExceptionInstance: number;
            /**
             * 运行中实例数量。
             * @example `3`
             */
            NumOfRunningInstance: number;
        }[];
    };
}
