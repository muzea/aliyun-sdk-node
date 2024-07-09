export interface UpdateSchemaPropertyRequest {
    /**
     * schema id
     * @example `profile`
     */
    "SchemaId": string;
    /**
     * 字段
     */
    "Property"?: {
        /**
         * 显示名称
         * @example `姓名`
         */
        DisplayName: string;
        /**
         * 描述。
         * @example `-`
         */
        Description: string;
        /**
         * 名称
         * @example `name`
         */
        Name: string;
        /**
         * 数据类型
         * @example `string`
         */
        DataType: string;
        /**
         * 正则表达式校验规则
         * @example `(.*)`
         */
        Pattern: string;
        /**
         * 正则表达式校验错误提示信息
         * @example `不是有效的email地址`
         */
        PatternErrorMessage: string;
        /**
         * 最小长度
         * @example `1`
         */
        MinLength: number;
        /**
         * 最大长度
         * @example `100`
         */
        MaxLength: number;
        /**
         * 数字最小值
         * @example `10800`
         */
        Minimum: number;
        /**
         * 数字最大值
         * @example `11`
         */
        Maximum: number;
        /**
         * 是否必填
         * @example `false`
         */
        Required: boolean;
        /**
         * 是否被禁用
         * @example `true`
         */
        Disabled: boolean;
        /**
         * 是否是数组
         * @example `false`
         */
        Array: boolean;
        /**
         * 是否只读
         * @example `true`
         */
        ReadOnly: boolean;
        /**
         * 编辑器类型
         * @example `textbox`
         */
        EditorType: string;
        /**
         * 扩展属性
         * @example `{\"instanceId\":\"4cc3f160-ca64-49ff-bc70-390a044a4e83\",\"appId\":\"1684145288664\",\"commodityCode\":\"dide_pre\",\"dide_pre_set\":\"version_ent\"}`
         */
        Attributes: string;
        /**
         * 列表展示顺序
         * @example `10`
         */
        DisplayOrder: number;
    };
    /**
     * 请求ID
     * @example `BC976D32-AC4C-4E0F-8AA9-F4BC6C4E2B3E`
     */
    "RequestId"?: string;
    /**
     * 实例 ID
     * @example `b0eb2742-f37e-4c67-82d4-25c651c1xxxx`
     */
    "InstanceId": string;
}
