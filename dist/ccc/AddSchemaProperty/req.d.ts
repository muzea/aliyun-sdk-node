export interface AddSchemaPropertyRequest {
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
         * 名称
         * @example `name`
         */
        DisplayName: string;
        /**
         * 描述信息。
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
         * @example `*`
         */
        Pattern: string;
        /**
         * 正则表达式校验错误提示信息
         * @example `格式错误`
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
         * @example `1`
         */
        Minimum: number;
        /**
         * 数字最大值
         * @example `1`
         */
        Maximum: number;
        /**
         * 是否必填
         * @example `false`
         */
        Required: boolean;
        /**
         * 是否被禁用
         * @example `False`
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
         * @example `{\"newName\":\"小桔充电-demo\",\"appId\":\"69FRKB4193W8BYP0\"}`
         */
        Attributes: string;
        /**
         * 列表展示顺序
         * @example `10`
         */
        DisplayOrder: number;
    };
    /**
     * 请求ID。
     * @example `03C67DAD-EB26-41D8-949D-9B0C470FB716`
     */
    "RequestId"?: string;
    /**
     * 实例ID。
     * @example `b0eb2742-f37e-4c67-82d4-25c651c1xxxx`
     */
    "InstanceId": string;
}
