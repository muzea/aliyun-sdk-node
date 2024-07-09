export interface ListInstancesRequest {
    /**
     * 服务的名称。
     * @example `demoService`
     */
    "serviceName": string;
    /**
     * 函数的名称。
     * @example `demoFunction`
     */
    "functionName": string;
    /**
     * 版本或者别名。
     * @example `dev`
     */
    "qualifier"?: string;
    /**
     * 实例ID。
     */
    "instanceIds"?: string[];
    /**
     * 限定此次返回资源的数量，取值范围[0,1000]。
     * 返回结果可以小于指定的数量，但不能多于指定的数量。
     * @example `20`
     */
    "limit"?: number;
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    "X-Fc-Date"?: string;
    "X-Fc-Trace-Id"?: string;
}
