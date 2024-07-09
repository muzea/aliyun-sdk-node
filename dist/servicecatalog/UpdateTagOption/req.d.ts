export interface UpdateTagOptionRequest {
    /**
     * 标签选项ID。
     * @example `tag-bp1u6mdf3d****`
     */
    "TagOptionId": string;
    /**
     * 标签选项值。
     * 最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
     * @example `v1`
     */
    "Value"?: string;
    /**
     * 是否启用。取值：
     * - true（默认值）：启用。
     * - false：禁用。
     * @example `true`
     */
    "Active"?: boolean;
}
