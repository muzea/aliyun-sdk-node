export interface UpdateServiceRequest {
    /**
     * 确保实际更改的服务和期望更改的服务是一致的，该值来源于[CreateService](~~175256~~)、[UpdateService](~~188167~~)和[GetService](~~189225~~)接口的响应。
     * @example `e19d5cd5af0378da05f63f891c7467af`
     */
    "If-Match"?: string;
    /**
     * 服务的名称。
     * @example `demo-service`
     */
    "serviceName": string;
    /**
     * 服务定义。
     */
    "body"?: {
        /**
         * 服务的描述。
         * @example `test service`
         */
        description: string;
        /**
         * 是否允许函数访问公网：
         *   - **true**：允许函数访问公网。
         *   - **false**：不允许函数访问公网。
         * @example `true`
         */
        internetAccess: boolean;
        /**
         * 日志配置，函数产生的日志会写入这里配置的Logstore中。
         */
        logConfig: any;
        /**
         * NAS配置，配置后函数可以访问指定NAS资源。
         */
        nasConfig: any;
        /**
         * 授予函数计算所需权限的RAM角色，使用场景包含：
         *   - 把函数产生的日志发送到您的Logstore中。
         *   - 为函数在执行中访问其他云资源生成Token。
         * @example `acs:ram::1234567890:role/fc-test`
         */
        role: string;
        /**
         * VPC配置，配置后函数计算可以访问指定VPC资源。
         */
        vpcConfig: any;
        /**
         * 链路追踪配置。当函数计算与链路追踪集成后，您可以记录请求在函数计算的耗时时间、查看函数的冷启动时间、记录函数内部时间的消耗等，更多信息，请参见[链路追踪](~~189804~~)。
         */
        tracingConfig: any;
        /**
         * OSS挂载配置。
         */
        ossMountConfig: any;
    };
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 函数计算的API被调用的时间，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Wed, 11 May 2022 09:00:00 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 自定义请求ID。
     * @example `rid281s******`
     */
    "X-Fc-Trace-Id"?: string;
}
