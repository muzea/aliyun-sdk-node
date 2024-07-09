export interface ListOperationResponse {
    /**
     * 威胁分析服务返回的具体内容。
     */
    Data: {
        /**
         * 是否具备管理员权限。取值：
         * - true：拥有管理员权限
         * - false：拥有普通成员权限
         * @example `true`
         */
        AdminOrNot: boolean;
        /**
         * 拥有权限的资源列表。
         */
        OperationList: string[];
    };
    /**
     * 请求消息ID。
     * @example `CCEEE128-6607-503E-AAA6-C5E57D94****`
     */
    RequestId: string;
}
