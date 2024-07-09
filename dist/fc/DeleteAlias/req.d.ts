export interface DeleteAliasRequest {
    /**
     * 函数名称
     * @example `my-func`
     */
    "functionName": string;
    /**
     * 函数别名名称
     * @example `my-alias`
     */
    "aliasName": string;
}
