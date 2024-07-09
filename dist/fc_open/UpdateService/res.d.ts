export interface UpdateServiceResponse {
    /**
     * 服务的创建时间。
     * @example `2016-08-15T16:06:05.000+0000`
     */
    createdTime: string;
    /**
     * 服务的描述。
     * @example `test_description`
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
     * 服务上一次被更新的时间。
     * @example `2016-08-15T16:06:05.000+0000`
     */
    lastModifiedTime: string;
    /**
     * 日志配置，函数产生的日志会写入这里配置的Logstore。
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
     * 系统为每个服务生成的唯一ID。
     * @example `2d28e0e9-9ba5-4eed-8b1a-d3d9cd24e737`
     */
    serviceId: string;
    /**
     * 服务的名称。
     * @example `demo-service`
     */
    serviceName: string;
    /**
     * VPC配置，配置后函数可以访问指定VPC资源。
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
    /**
     * 服务是否使用服务关联角色授权模式：
     * - true：使用服务关联角色授权模式。
     * - false：未使用服务关联角色授权模式。
     * @example `true`
     */
    useSLRAuthentication: boolean;
}
