export interface CreateFunctionResponse {
    /**
     * 函数代码包的CRC64值。
     * @example `5434025278388143772`
     */
    codeChecksum: string;
    /**
     * 系统返回的函数代码包的大小，单位为Byte。
     * @example `1024`
     */
    codeSize: number;
    /**
     * 函数的创建时间。
     * @example `2016-08-15T15:00:00.000+0000`
     */
    createdTime: string;
    /**
     * Custom Container运行时的相关配置，配置后函数可以使用自定义容器镜像执行函数。
     */
    customContainerConfig: any;
    /**
     * 层的列表。
     * > 多个层会按照数组下标从大到小的顺序进行合并，下标小的层的内容会覆盖下标大的层的同名文件。
     */
    layers: string[];
    /**
     * 函数描述。
     * @example `This is a demo hello world function`
     */
    description: string;
    /**
     * 系统为每个函数生成的唯一ID。
     * @example `2d28e0e9-9ba5-4eed-8b1a-d3d9cd24
    ****`
     */
    functionId: string;
    /**
     * 函数名称。
     * @example `demo-function`
     */
    functionName: string;
    /**
     * 函数的执行入口。
     * @example `index.handler`
     */
    handler: string;
    /**
     * 函数上次修改时间。
     * @example `2016-08-15T17:00:00.000+0000`
     */
    lastModifiedTime: string;
    /**
     * 函数设置的内存大小，单位为MB。
     * @example `512`
     */
    memorySize: number;
    /**
     * 函数运行的语言环境。目前支持**nodejs20**、**nodejs18**、**nodejs20**、**nodejs18**、**nodejs16**、**nodejs14**、**nodejs12**、**nodejs10**、**nodejs8**、**nodejs6**、**nodejs4.4**、**python3.10**、**python3.9**、**python3**、**python2.7**、**java11**、**java8**、**go1**、**php7.2**、**dotnetcore3.1**、**dotnetcore2.1**、**custom.debian10**、**custom**和**custom-container**。更多信息，请参见[支持的函数运行环境列表](~~73338~~)。
     * @example `python3.9`
     */
    runtime: string;
    /**
     * 函数运行的超时时间，单位为秒，默认60秒。最小1秒，最长10分钟。如果函数运行超过设置的时间，函数运行将被终止。
     * @example `10`
     */
    timeout: number;
    /**
     * 初始化函数运行的超时时间，单位为秒，最小1秒，默认3秒。初始化函数超过这个时间后会被终止执行。
     * @example `60`
     */
    initializationTimeout: number;
    /**
     * 初始化函数执行的入口，具体格式和语言相关。
     * @example `index.handler`
     */
    initializer: string;
    /**
     * Custom Runtime或Custom Container运行时HTTP Server的监听端口。
     * @example `9000`
     */
    caPort: number;
    /**
     * 为函数设置的环境变量，可以在函数中获取环境变量的值。更多信息，请参见[环境变量](~~69777~~)。
     */
    environmentVariables: any;
    /**
     * 单个函数实例允许的最大并发度。
     * @example `10`
     */
    instanceConcurrency: number;
    /**
     * 实例软并发度，用于优雅扩容。当实例上的并发数超过软并发度时，会触发实例扩容。例如，您的实例启动较慢，可以通过设置合适的软实例并发度，提前启动实例。
     * 取值小于或等于**instanceConcurrency**。
     * @example `5`
     */
    instanceSoftConcurrency: number;
    /**
     * 函数的实例类型，取值如下：
     *   * **e1**：弹性实例。
     *   * **c1**：性能实例。
     *   * **fc.gpu.tesla.1**：GPU实例Tesla系列T4卡型。
     *   * **fc.gpu.ampere.1**：GPU实例Ampere系列A10卡型。
     *   * **g1**：同**fc.gpu.tesla.1**。
     * @example `e1`
     */
    instanceType: string;
    /**
     * 实例生命周期配置。
     */
    instanceLifecycleConfig: any;
    /**
     * 函数自定义DNS配置。
     */
    customDNS: any;
    /**
     * Custom Runtime函数详细配置。
     */
    customRuntimeConfig: any;
    /**
     * 函数自定义健康检查配置，仅适用于Custom Runtime和Custom Container。
     */
    customHealthCheckConfig: any;
    /**
     * 函数的CPU规格，单位为vCPU，为0.05 vCPU的倍数。
     * @example `1.5`
     */
    cpu: number;
    /**
     * 函数的磁盘规格，单位为MB，可选值为512 MB或10240 MB。
     * @example `512`
     */
    diskSize: number;
    /**
     * function的GPU显存规格，单位为MB，为1024MB的倍数
     * @example `2048`
     */
    gpuMemorySize: number;
    /**
     * 层的arn列表
     */
    layersArnV2: string[];
}
