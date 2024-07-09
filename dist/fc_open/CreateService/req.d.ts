export interface CreateServiceRequest {
    /**
     * 服务定义。
     */
    "body"?: {
        /**
         * 服务的描述。
         * @example `service_description`
         */
        description: string;
        /**
         * 是否允许函数访问公网：
         * - **true**：允许函数访问公网，默认值。
         * - **false**：不允许函数访问公网。
         * @example `true`
         */
        internetAccess: boolean;
        /**
         * 日志配置。函数产生的日志会被写入到配置的日志库中。
         */
        logConfig: any;
        /**
         * NAS配置。配置此参数后，函数可以访问指定的NAS资源。
         */
        nasConfig: any;
        /**
         * 授予函数计算所需权限的RAM角色，使用场景包含：
         * - 把函数产生的日志发送到您的日志库中。
         * - 为函数在执行过程中访问其他云资源生成的临时访问令牌。
         * @example `acs:ram::188077086902****:role/fc-test`
         */
        role: string;
        /**
         * 服务的名称。只能包含字母、数字、下划线（_）和短划线（-）。不能以数字、短划线（-）开头。长度范围为1~128个字符。
         * @example `service_Name`
         */
        serviceName: string;
        /**
         * VPC配置。配置此参数后，函数可以访问指定的VPC资源。
         */
        vpcConfig: any;
        /**
         * 链路追踪配置。当函数计算与链路追踪集成后，您可以记录请求在函数计算的耗时时间、查看函数的冷启动时间、记录函数内部时间的消耗等。更多信息，请参见[链路追踪](~~189804~~)。
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
