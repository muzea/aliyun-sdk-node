export interface GetProxyAccessResponse {
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `3CDB8601-AD74-4A47-8114-08E08CD6****`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误信息。
     * @example `The specified user not exists.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UserNotExist`
     */
    ErrorCode: string;
    /**
     * 安全访问代理授权信息。
     */
    ProxyAccess: {
        /**
         * 安全访问授权ID，当安全访问代理授权目标用户后，系统会自动生成一个安全访问授权ID，该ID全局唯一。您可以调用[ListProxyAccesses](~~295386~~)接口获取该参数。
         * @example `2002`
         */
        ProxyAccessId: number;
        /**
         * 安全访问代理权限的授权时间。
         * @example `1643034647`
         */
        GmtCreate: string;
        /**
         * 安全访问代理授权账号。
         * @example `hObpgEXoca42q***`
         */
        AccessId: string;
        /**
         * 开通安全访问代理权限的来源信息，返回值如下：
         * - **责任人授权（）**：括号中为责任人的UID。
         * - **工单授权（）**：括号中为用户申请权限的工单号。
         * @example `责任人授权（29490401597700****）`
         */
        OriginInfo: string;
        /**
         * 独立账号。
         * @example `***`
         */
        IndepAccount: string;
        /**
         * 用户ID。
         * @example `12***`
         */
        UserId: number;
        /**
         * 用户UID。
         * @example `25936669186260****`
         */
        UserUid: string;
        /**
         * 用户昵称。
         * @example `user`
         */
        UserName: string;
        /**
         * 安全访问代理ID。
         * > 您可以通过调用[ListProxies](~~295371~~)接口获取该参数。
         * @example `1905`
         */
        ProxyId: number;
        /**
         * 实例ID。
         * @example `1922545`
         */
        InstanceId: number;
    };
}
