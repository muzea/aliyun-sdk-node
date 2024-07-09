export interface ListAuthorityResponse {
    /**
     * HTTP状态码
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `57609587-DFA2-41EC-****-*********`
     */
    RequestId: string;
    AuthorityList: {
        /**
         * 权限列表
         */
        Authority: {
            /**
             * 权限组ID
             * @example `1`
             */
            GroupId: string;
            /**
             * 权限组名称
             * @example `应用管理`
             */
            Name: string;
            /**
             * 权限组描述
             * @example `对应用的所有操作`
             */
            Description: string;
            ActionList: {
                /**
                 * 权限集合
                 */
                Action: {
                    /**
                     * 权限码
                     * @example `1`
                     */
                    Code: string;
                    /**
                     * 权限描述
                     * @example `创建应用`
                     */
                    Description: string;
                    /**
                     * 权限组ID
                     * @example `1`
                     */
                    GroupId: string;
                    /**
                     * 权限名称
                     * @example `创建应用`
                     */
                    Name: string;
                }[];
            };
        }[];
    };
}
