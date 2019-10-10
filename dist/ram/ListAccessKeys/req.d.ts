interface ListAccessKeysRequest {
    "RegionId"?: string;
    /**
    * 指定用户，RAM用户访问时不提供此参数则表示列出自己的访问密钥。
    * @example `zhangq****`
    */ "UserName"?: string;
}
export { ListAccessKeysRequest };