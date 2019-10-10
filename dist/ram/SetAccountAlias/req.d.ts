interface SetAccountAliasRequest {
    "RegionId"?: string;
    /**
    * 指定云账号的别名, 长度限制为3~32个字符。
    * 限制：`^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$`。
    * @example `myalias`
    */ "AccountAlias"?: string;
}
export { SetAccountAliasRequest };