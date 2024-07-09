export interface PutProvisionConfigRequest {
    /**
     * 函数名称
     * @example `my-func`
     */
    "functionName": string;
    /**
     * 函数别名或LATEST
     * @example `LATEST`
     */
    "qualifier"?: string;
    /**
     * 预留配置信息
     */
    "body": any;
}
