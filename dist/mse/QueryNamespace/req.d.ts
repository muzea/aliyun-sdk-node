export interface QueryNamespaceRequest {
    /**
     * 操作的地域。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 要搜索的命名空间名称。
     * @example `default`
     */
    "Name"?: string;
    /**
     * 返回结果显示的语言。取值：zh（默认值）：中文，en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
