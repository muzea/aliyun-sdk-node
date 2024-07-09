export interface GetServiceResponse {
    /**
     * 服务的创建时间。
     * @example `2020-04-03T05:57:28Z`
     */
    createdTime: string;
    /**
     * 服务的描述。
     * @example `demo-service-test`
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
     * @example `2020-04-03T05:57:28Z`
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
     * 服务中函数所使用的角色，使函数可以获得角色所拥有的权限，实现跨产品访问。使用场景包含：
     *   - 把函数产生的日志发送到您的Logstore中。
     *   - 为函数在执行中访问其他云资源生成Token。
     * @example `acs:ram::1234567890:role/fc-test`
     */
    role: string;
    /**
     * 系统生成的服务ID，全网唯一。
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
