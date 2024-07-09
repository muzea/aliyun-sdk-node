export interface GetFunctionResponse {
    /**
     * 函数代码包的CRC-64值。
     * @example `2825179536350****`
     */
    codeChecksum: string;
    /**
     * 系统返回的函数代码包的大小，单位Byte。
     * @example `421`
     */
    codeSize: number;
    /**
     * 函数的创建时间。
     * @example `2020-04-01T08:15:27Z`
     */
    createdTime: string;
    /**
     * 函数的描述。
     * @example `test_description`
     */
    description: string;
    /**
     * 为函数设置的环境变量，可以在函数中获取环境变量的值。更多信息，请参见[环境变量](~~69777~~)。
     */
    environmentVariables: any;
    /**
     * 系统为每个函数生成的ID，全局唯一。
     * @example `aa715851-1c20-4b89-a8fb-***`
     */
    functionId: string;
    /**
     * 函数的名称。
     * @example `function_name`
     */
    functionName: string;
    /**
     * 函数执行的入口，更多信息，请参见[函数入口](~~157704~~)。
     * @example `index.handler`
     */
    handler: string;
    /**
     * 函数上一次被更新的时间。
     * @example `2020-04-01T08:15:27Z`
     */
    lastModifiedTime: string;
    /**
     * 函数的内存规格，单位为MB，内存大小为64 MB的倍数。不同的函数实例类型，内存规格存在差异。更多信息，请参见[实例规格](~~179379~~)。
     * @example `256`
     */
    memorySize: number;
    /**
     * 函数运行的语言环境。当前支持**nodejs20**、**nodejs18**、**nodejs16**、**nodejs14**、**nodejs12**、**nodejs10**、**nodejs8**、**nodejs6**、**nodejs4.4**、**python3.10**、**python3.9**、**python3**、**python2.7**、**java11**、**java8**、**go1**、**php7.2**、**dotnetcore2.1**、**custom.debian10**、**custom**和**custom-container**。
     * @example `python3`
     */
    runtime: string;
    /**
     * 函数运行的超时时间，单位为秒，默认60秒。最小1秒，最长10分钟。如果函数运行超过设置的时间，函数运行将被终止。
     * @example `60`
     */
    timeout: number;
    /**
     * 初始化函数运行的超时时间，单位为秒，默认3秒。最小1秒，最长5分钟。初始化函数超过这个时间后会被终止执行。
     * @example `60`
     */
    initializationTimeout: number;
    /**
     * 初始化函数执行的入口，具体格式与语言相关，更多信息，请参见[Initializer函数](~~157704~~)。
     * @example `index.handler`
     */
    initializer: string;
    /**
     * Custom Runtime或Custom Container运行时HTTP Server的监听端口。
     * @example `9000`
     */
    caPort: number;
    /**
     * Custom Container运行时的相关配置，配置后函数可以使用自定义容器镜像执行函数。
     */
    customContainerConfig: any;
    /**
     * 层的列表（ARN V1版本）。
     * > 多个层会按照数组下标从大到小的顺序进行合并，下标小的层的内容会覆盖下标大的层的同名文件。
     * ><warning>该参数待废弃，请使用layersArnV2。></warning>
     */
    layers: string[];
    /**
     * 单个函数实例的并发度。
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
     * *   **fc.gpu.tesla.1**: GPU实例Tesla系列T4卡型。
     * *   **fc.gpu.ampere.1**: GPU实例Ampere系列A10卡型。
     * *   **g1**: 同fc.gpu.tesla.1。
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
     * 层的列表（ARN V2版本）。
     * > 多个层会按照数组下标从大到小的顺序进行合并，下标小的层的内容会覆盖下标大的层的同名文件。
     */
    layersArnV2: string[];
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
}
