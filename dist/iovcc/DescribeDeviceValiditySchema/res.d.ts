export interface DescribeDeviceValiditySchemaResponse {
    /**
     * 请求ID
     * @example `629586FE-CB2E-4742-995E-121F952CEB72`
     */
    RequestId: string;
    /**
     * 验证schema列表
     */
    ItemList: {
        /**
         * 最小数量
         * @example `5`
         */
        Minimum: number;
        /**
         * 类型
         * @example `string`
         */
        Type: string;
        /**
         * 最大数量
         * @example `10`
         */
        Maximum: number;
        /**
         * 数据类型
         * @example `boolean`
         */
        ItemType: string;
        /**
         * 枚举值的字符串信息
         * @example `[a,b]`
         */
        EnumListStr: string;
        /**
         * 是否不包含最小值
         * @example `true`
         */
        ExclusiveMinimum: boolean;
        /**
         * 最大长度
         * @example `10`
         */
        MaxLength: number;
        /**
         * 是否是必须的
         * @example `true`
         */
        Required: string;
        /**
         * 描述信息
         * @example `机型验证信息`
         */
        Description: string;
        /**
         * 是否不包含最大值
         * @example `false`
         */
        ExclusiveMaximum: boolean;
        /**
         * 路径
         * @example `/havc/oil_level`
         */
        Path: string;
        /**
         * 最小长度
         * @example `5`
         */
        MinLength: number;
    }[];
}
