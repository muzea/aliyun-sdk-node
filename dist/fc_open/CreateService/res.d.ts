export interface CreateServiceResponse {
    /**
     * 服务的创建时间。
     * @example `2016-08-15T16:06:05.000+0000`
     */
    createdTime: string;
    /**
     * 服务的描述。
     * @example `service_description`
     */
    description: string;
    /**
     * 是否允许函数访问公网：
     * - **true**：允许函数访问公网。
     * - **false**：不允许函数访问公网。
     * @example `true`
     */
    internetAccess: boolean;
    /**
     * 服务上一次被更新的时间。
     * @example `2016-08-15T16:06:05.000+0000`
     */
    lastModifiedTime: string;
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
     * - 把函数产生的日至发送到您的日志库中。
     * - 为函数在执行过程中访问其他云资源生成的临时访问令牌。
     * @example `acs:ram::188077086902****:role/fc-test`
     */
    role: string;
    /**
     * 系统为服务生成的ID，全网唯一。
     * @example `2d28e0e9-9ba5-4eed-8b1a-d3d9cd24e737`
     */
    serviceId: string;
    /**
     * 服务的名称。
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
    /**
     * 服务是否使用服务关联角色授权模式：
     * - true：使用服务关联角色授权模式。
     * - false：未使用服务关联角色授权模式。
     * @example `true`
     */
    useSLRAuthentication: boolean;
}
