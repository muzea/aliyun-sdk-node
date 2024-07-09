export interface ListInstancesRequest {
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
    /**
     * 是否列出所有实例。true或者false。
     * @example `true`
     */
    "withAllActive"?: boolean;
}
