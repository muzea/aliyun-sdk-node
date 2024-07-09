export interface GetAuthorityTemplateResponse {
    /**
     * 请求ID。
     * @example `0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 权限模板的详细信息。
     */
    AuthorityTemplateView: {
        /**
         * 权限模板ID。
         * @example `1563`
         */
        TemplateId: number;
        /**
         * 权限模板创建者ID。
         * @example `12***`
         */
        CreatorId: number;
        /**
         * 权限模板名称。
         * @example `测试模板。`
         */
        Name: string;
        /**
         * 模板描述。
         * @example `此模板用于业务测试。`
         */
        Description: string;
        /**
         * 权限模板的创建时间，时间格式为yyyy-MM-DD HH:mm:ss。
         * @example `2023-01-01 00:00:00`
         */
        CreateTime: string;
        AuthorityTemplateItemList: {
            /**
             * 权限模板资源列表。
             */
            AuthorityTemplateItem: {
                /**
                 * 资源ID。
                 * @example `12***`
                 */
                ItemId: number;
                /**
                 * 权限模板ID。
                 * @example `1563`
                 */
                TemplateId: number;
                /**
                 * 资源修改者ID。
                 * @example `51***`
                 */
                ModifierId: number;
                /**
                 * 资源类型。取值如下：
                 * - **INSTANCE**：实例。
                 * - **LOGIC_DB**：逻辑库。
                 * - **META_DB**：物理库。
                 * - **LOGIC_TABLE**：逻辑表。
                 * - **SINGLE_TABLE**：物理表。
                 * @example `INSTANCE`
                 */
                ResourceType: string;
                /**
                 * 实例ID。
                 * @example `188****`
                 */
                InstanceId: number;
                /**
                 * 数据库ID。
                 * @example `43***`
                 */
                DbId: number;
                /**
                 * 表名。
                 * @example `ExampleTable`
                 */
                TableName: string;
                /**
                 * 其他补充信息。例如在该权限模板中，添加某个实例的登录权限。
                 * @example `"permissionTypes": [
                            "LOGIN"
                          ]`
                 */
                Attribute: string;
            }[];
        };
    };
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    Tid: number;
}
