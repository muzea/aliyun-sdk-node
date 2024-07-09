export interface CreateSchemaRequest {
    /**
     * schema id
     * @example `profile`
     */
    "Id"?: string;
    /**
     * 信息描述
     * @example `-`
     */
    "Description"?: string;
    /**
     * 字段列表
     */
    "Properties"?: {
        /**
         * 坐席展示名。
         * @example `显示名称`
         */
        DisplayName: string;
        /**
         * 版本描述。
         * @example `-`
         */
        Description: string;
        /**
         * 名称。
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
         * @example `错误的格式`
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
         * @example `false`
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
         * @example `{'Clusters': {'Description': 'The list of clusters.'}, 'ClusterIds': {'Description': 'The list of cluster IDs.'}}`
         */
        Attributes: string;
        /**
         * 列表展示顺序
         * @example `2`
         */
        DisplayOrder: number;
    }[];
    /**
     * 请求ID。
     * @example `7BEEA660-A45A-45E3-98CC-AFC65E715C23`
     */
    "RequestId"?: string;
    /**
     * 实例ID。
     * @example `b0eb2742-f37e-4c67-82d4-25c651c1c450`
     */
    "InstanceId": string;
}
