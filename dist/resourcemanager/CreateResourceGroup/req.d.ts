export interface CreateResourceGroupRequest {
    /**
     * 资源组唯一标识。
     * 长度为3~50个字符，可包含英文字母、数字和短划线（-）。必须以英文字母开头。
     * @example `my-project`
     */
    "Name": string;
    /**
     * 资源组显示名称。
     * 长度为1~50个字符或汉字。
     * @example `my-project`
     */
    "DisplayName": string;
    /**
     * 标签。
     */
    "Tag"?: {
        /**
         * 标签键。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `k1`
         */
        Key: string;
        /**
         * 标签值。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `v1`
         */
        Value: string;
    }[];
}
