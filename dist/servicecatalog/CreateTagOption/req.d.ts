export interface CreateTagOptionRequest {
    /**
     * 用户输入的标签选项键。
     * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
     * @example `k1`
     */
    "Key": string;
    /**
     * 用户输入的标签选项值。
     * 最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
     * @example `v1`
     */
    "Value": string;
}
