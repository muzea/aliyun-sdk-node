export interface UpdateFunctionRequest {
    /**
     * 用于确保实际更改的资源和期望更改的资源是一致的，该值来自[CreateFunction](~~415747~~)、[GetFunction](~~415750~~)和[UpdateFunction](~~415749~~)的响应。
     * @example `e19d5cd5af0378da05f63f891c7467af`
     */
    "If-Match"?: string;
    /**
     * 服务名称。
     * @example `demoService`
     */
    "serviceName": string;
    /**
     * 函数名称。
     * @example `demoFunction`
     */
    "functionName": string;
    /**
     * 更新函数结构体。
     */
    "functionUpdateFields"?: {
        /**
         * **Code**支持两种方式提供函数代码包，在一次请求中必须且只能使用其中一种：
         * - 指定存储代码包的**ossBucketName**和**ossObjectName**。
         * - 指定**zipFile**为ZIP包的Base64编码内容。
         */
        code: any;
        /**
         * Custom Container运行时的相关配置。配置后函数可以使用自定义容器镜像执行函数。
         */
        customContainerConfig: any;
        /**
         * 层的列表。
         * > 多个层会按照数组下标从大到小的顺序进行合并，下标小的层的内容会覆盖下标大的层的同名文件。
         */
        layers: string[];
        /**
         * 函数描述。
         * @example `test desc`
         */
        description: string;
        /**
         * 为函数设置的环境变量，可以在函数中获取环境变量的值。更多信息，请参见[环境变量](~~69777~~)。
         */
        environmentVariables: any;
        /**
         * 函数执行的入口，具体格式和语言相关。详细信息，请参见[函数入口](~~157704~~)。
         * @example `index.handler`
         */
        handler: string;
        /**
         * 函数的内存规格，单位为MB，内存大小为64 MB的倍数。不同的函数实例类型，内存规格存在差异。更多信息，请参见[实例规格](~~179379~~)。
         * @example `512`
         */
        memorySize: number;
        /**
         * 函数运行的语言环境。目前支持**nodejs20**、**nodejs18**、**nodejs16**、**nodejs14**、**nodejs12**、**nodejs10**、**nodejs8**、**nodejs6**、**nodejs4.4**、**python3.10**、**python3.9**、**python3**、**python2.7**、**java11**、**java8**、**go1**、**php7.2**、**dotnetcore3.1**、**dotnetcore2.1**、**custom.debian10**、**custom**和**custom-container**。更多信息，请参见[支持的函数运行环境列表](~~73338~~)。
         * @example `python3.9`
         */
        runtime: string;
        /**
         * 函数运行的超时时间，单位为秒，最小1秒，默认3秒。函数超过这个时间后会被终止执行。
         * @example `60`
         */
        timeout: number;
        /**
         * 初始化函数运行的超时时间，单位为秒，最小1秒，默认3秒。初始化函数超过这个时间后会被终止执行。
         * @example `60`
         */
        initializationTimeout: number;
        /**
         * 初始化函数执行的入口，具体格式和语言相关。详细信息，请参见[函数入口](~~157704~~)。
         * @example `index.handler`
         */
        initializer: string;
        /**
         * 自定义、自定义容器运行时HTTP Server的监听端口。
         * @example `9000`
         */
        caPort: number;
        /**
         * 实例最大并发度。
         * @example `10`
         */
        InstanceConcurrency: number;
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
    };
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 函数代码包的CRC-64值。
     * @example `1506052139770049xxxx`
     */
    "X-Fc-Code-Checksum"?: string;
    /**
     * 函数的调用开始日期，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Wed, 11 May 2022 09:00:00 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 调用函数的ID，与返回参数requestId对应。
     * @example `test-trace-id`
     */
    "X-Fc-Trace-Id"?: string;
}
