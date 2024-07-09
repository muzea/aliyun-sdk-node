export interface UpdateAliasRequest {
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
    /**
     * 待更新的别名信息
     */
    "body": any;
}
