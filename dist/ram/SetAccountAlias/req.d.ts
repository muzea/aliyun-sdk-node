export interface SetAccountAliasRequest {
    /**
     * 指定云账号的别名。
     * 长度为3~32个字符，可以包含小写字母、数字和短划线（-）。
     * >云账号别名不能以短横线开头或结尾且不能有两个连续的短横线。
     * @example `myalias`
     */
    "AccountAlias"?: string;
}
