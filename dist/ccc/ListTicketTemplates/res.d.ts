export interface ListTicketTemplatesResponse {
    /**
     * 数据。
     */
    Data: {
        /**
         * 总数。
         * @example `25`
         */
        TotalCount: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小。
         * @example `100`
         */
        PageSize: number;
        /**
         * 模板列表。
         */
        List: {
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 模板ID。
             * @example `b5c21219-3a1e-4bc0-92e7-da66e057d2f6`
             */
            TemplateId: string;
            /**
             * 模板名称。
             * @example `测试模板`
             */
            Name: string;
            /**
             * 状态。
             * @example `Enabled`
             */
            State: string;
            /**
             * 编辑人。
             * @example `creator@ccc-test`
             */
            Editor: string;
            /**
             * 模板字段列表。
             */
            TicketFields: {
                /**
                 * 显示名称。
                 * @example `姓名
                `
                 */
                DisplayName: string;
                /**
                 * 描述。
                 * @example `姓名字段`
                 */
                Description: string;
                /**
                 * 名称。
                 * @example `name`
                 */
                Name: string;
                /**
                 * 数据类型
                 * 。
                 * @example `String`
                 */
                DataType: string;
                /**
                 * 正则表达式校验规则。
                 * @example `^`
                 */
                Pattern: string;
                /**
                 * 正则表达式校验错误提示信息
                 * @example `不是有效的email地址
                `
                 */
                PatternErrorMessage: string;
                /**
                 * 最小长度。
                 * @example `1`
                 */
                MinLength: number;
                /**
                 * 最大长度。
                 * @example `30`
                 */
                MaxLength: number;
                /**
                 * 数字最小值。
                 * @example `1`
                 */
                Minimum: number;
                /**
                 * 数字最大值。
                 * @example `10`
                 */
                Maximum: number;
                /**
                 * 是否必填。
                 * @example `false`
                 */
                Required: boolean;
                /**
                 * 是否是系统字段。
                 * @example `false`
                 */
                System: boolean;
                /**
                 * 是否被禁用。
                 * @example `false`
                 */
                Disabled: boolean;
                /**
                 * 是否是数组。
                 * @example `false`
                 */
                Array: boolean;
                /**
                 * 是否只读。
                 * @example `false`
                 */
                ReadOnly: boolean;
                /**
                 * 编辑器类型。
                 * @example `textbox`
                 */
                EditorType: string;
                /**
                 * 扩展属性。
                 * @example `{}`
                 */
                Attribute: string;
                /**
                 * 列表展示顺序。
                 * @example `1`
                 */
                DisplayOrder: number;
                /**
                 * 创建时间。
                 * @example `1715780670000`
                 */
                CreatedTime: number;
                /**
                 * 更新时间。
                 * @example `1715780670000`
                 */
                UpdatedTime: number;
                /**
                 * 创建者。
                 * @example `creator`
                 */
                Creator: string;
            }[];
            /**
             * 流程信息(废弃)。
             * @example `无`
             */
            ProcessDefinition: string;
            /**
             * 更新时间。
             * @example `1715780670000`
             */
            UpdatedTime: number;
            /**
             * 类⽬ID。
             * @example `43c2671b-*****-4223-86d0-6bd187905cc8`
             */
            CategoryId: string;
            /**
             * 当前正在工作的版本。
             * @example `0`
             */
            AppliedVersion: string;
            /**
             * 草稿版本。
             * @example `1715780670000`
             */
            LatestVersion: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `8707EB29-BAED-4302-B999-40BA61877437`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 错误参数列表。
     */
    Params: string[];
}
