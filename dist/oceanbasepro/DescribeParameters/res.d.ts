export interface DescribeParametersResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 参数列表信息。
     */
    Parameters: {
        /**
         * 参数的描述信息。
         * @example `弱读允许的最大时间延迟时间`
         */
        Description: string;
        /**
         * 参数取值的类型。其支持：
         * - ENUM: 数值枚举。
         * - RANGE: 数值范围。
         * - TIME: 时间。
         * - STRING：字符串。
         * - ENUM_MULTIPLE：数值枚举多选。
         * - CAPACITY：存储容量值（K，M，G）。
         * @example `CAPACITY`
         */
        ValueType: string;
        /**
         * 参数的当前取值。
         * @example `600`
         */
        CurrentValue: string;
        /**
         * 修改此参数是否需要重启。
         * - true：需要重启。
         * - false：不需要重启。
         * @example `false`
         */
        NeedReboot: boolean;
        /**
         * 参数名称。
         * @example `connect_timeout`
         */
        Name: string;
        /**
         * 参数的默认取值。
         * @example `600s`
         */
        DefaultValue: string;
        /**
         * 参数的不允许取值范围。
         * 其格式为具备两个字符串元素的数组类型，表示一个范围值，第一个元素为最小值，第二个元素为最大值。
         */
        RejectedValue: string[];
        /**
         * 参数的可接受取值范围。
         */
        AcceptableValue: string[];
        /**
         * 参数是否只读。
         * @example `false`
         */
        Readonly: boolean;
        /**
         * 当前参数值单位。
         * @example `s`
         */
        Unit: string;
    }[];
}
