export interface CreateWorkspaceResponse {
    /**
     * 工作空间信息
     */
    workspace: {
        /**
         * 工作空间唯一标识，字符串形式，可在云效DevStudio访问空间链接中获取
         * @example `6ed82817-ab75-4563-865d-81e60dxxxxxx`
         */
        id: string;
        /**
         * 工作空间名称
         * @example `Demo`
         */
        name: string;
        /**
         * 空间状态，枚举：CREATING-创建中, SUCCESS-运行中, FROZEN-冻结中, RECOVERING-恢复中
         * @example `SUCCESS`
         */
        status: string;
        /**
         * 工作空间模板
         * @example `all-in-one`
         */
        template: string;
        /**
         * 创建者，阿里云PK
         * @example `1470227819xxxxxx`
         */
        creator: string;
        /**
         * 创建时间戳
         * @example `1628564442000`
         */
        createTime: string;
    };
    /**
     * 请求ID
     * @example `F7B85D1B-D1C2-140F-A039-341859F130B9`
     */
    requestId: string;
    /**
     * 请求是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `WorkspaceQuotaExceeded`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `The maximum number of workspace per user is exceeded.`
     */
    errorMessage: string;
}
