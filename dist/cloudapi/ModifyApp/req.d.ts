export interface ModifyAppRequest {
    /**
     * APP的唯一标识
     * @example `20112314518278`
     */
    "AppId": number;
    /**
     * 支持汉字、英文字母、数字、英文格式的下划线，且必须以字母或汉字开始，4~26个字符，1个中文汉字算2个字符。
     * 若不修改，可不传该参数。
     * @example `jiedian_pord`
     */
    "AppName"?: string;
    /**
     * APP描述信息，长度不超过180个字符。
     * 若不修改，可不传该参数。
     * @example `modidyTest`
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
         * @example `key`
         */
        Key: string;
        /**
         * 标签值。
         * n 的取值范围为 `[1, 20]`
         * @example `value`
         */
        Value: string;
    }[];
    /**
     * 扩展信息
     * @example `110461946884`
     */
    "Extend"?: string;
}
