export interface CreateAppRequest {
    /**
     * APP名称。支持汉字、英文字母、数字、英文格式的下划线，且必须以字母或汉字开始，长度限制为4~26个字符
     * @example `CreateAppTest`
     */
    "AppName": string;
    /**
     * APP描述信息，长度不超过180个字符
     * @example `test`
     */
    "Description"?: string;
    /**
     * 指定规则所适用的对象标签，可设置多个。
     * @example `Key， Value`
     */
    "Tag"?: {
        /**
         * 标签键。
         * n 的取值范围为 `[1, 20]`
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。
         * n 的取值范围为 `[1, 20]`。当参数有值，要求对应当tag.N.Key在相同的N的标签键也传入值，否则会报错。
         * @example `' '`
         */
        Value: string;
    }[];
    /**
     * App的Key，用于调用API时使用
     * @example `60030986`
     */
    "AppKey"?: string;
    /**
     * App的密码
     * @example `nzyNqFkRWB2uLw86`
     */
    "AppSecret"?: string;
    /**
     * 应用的AppCode
     * @example `3aaf905a0a1f4f0eabc6d891dfa08afc`
     */
    "AppCode"?: string;
    /**
     * 扩展信息
     * @example `110210264071`
     */
    "Extend"?: string;
}
