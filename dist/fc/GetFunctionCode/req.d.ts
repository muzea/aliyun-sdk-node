export interface GetFunctionCodeRequest {
    /**
     * 函数名称
     * @example `my-func`
     */
    "functionName": string;
    /**
     * 函数版本或别名
     * @example `LATEST`
     */
    "qualifier"?: string;
}
