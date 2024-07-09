export interface DeleteVpcBindingRequest {
    /**
     * 服务名称。
     * @example `demoService`
     */
    "serviceName": string;
    /**
     * 要删除的绑定VPC ID。
     * @example `vpc-xxxx`
     */
    "vpcId": string;
    /**
     * 阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 函数的调用开始日期，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Wed, 11 May 2022 09:00:00 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 自定义请求ID。
     * @example `asdf****`
     */
    "X-Fc-Trace-Id"?: string;
}
