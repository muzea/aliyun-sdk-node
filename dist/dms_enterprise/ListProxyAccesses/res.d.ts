export interface ListProxyAccessesResponse {
    /**
     * 请求ID。
     * @example `E53D178A-85E9-5E1F-88B6-3CB1FCF2****`
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
     * 错误信息。
     * @example `ProxyId is mandatory for this action.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `MissingProxyId`
     */
    ErrorCode: string;
    /**
     * 安全访问代理授权列表。
     */
    ProxyAccessList: {
        /**
         * 安全访问代理授权ID，当安全访问代理授权目标用户后，系统会自动生成一个安全访问授权ID，该ID全局唯一。
         * @example `****`
         */
        ProxyAccessId: number;
        /**
         * 安全访问代理权限的授权时间。
         * @example `2021-03-31 10:34:18`
         */
        GmtCreate: string;
        /**
         * 安全访问代理授权账号。
         * @example `MXPL8HalI22m****`
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
         * @example `****`
         */
        IndepAccount: string;
        /**
         * 用户ID。
         * @example `26****`
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
         * @example `47`
         */
        ProxyId: number;
        /**
         * 实例ID。
         * @example `164****`
         */
        InstanceId: number;
    }[];
}
