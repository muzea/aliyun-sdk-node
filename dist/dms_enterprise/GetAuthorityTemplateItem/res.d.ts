export interface GetAuthorityTemplateItemResponse {
    /**
     * 请求ID。
     * @example `5B96E35F-A58E-5399-9041-09CF9A1E46EA`
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
    AuthorityTemplateItemList: {
        /**
         * 权限模版列表。
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
             * - **LOGIC_TABLE**：物理表。
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
    /**
     * 请求是否成功。返回值如下：
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
