export interface CreateFunctionRequest {
    /**
     * 服务的名称。
     * @example `serviceName`
     */
    "serviceName": string;
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 函数的定义。
     */
    "function"?: {
        /**
         * 函数代码ZIP包。**code**和**customContainerConfig**二选一。
         */
        code: any;
        /**
         * Custom Container运行时的相关配置，成功配置后函数可以使用自定义容器镜像执行函数。**code**和**customContainerConfig**二选一。
         */
        customContainerConfig: any;
        /**
         * 层的列表。
         * > 多个层会按照数组下标从大到小的顺序进行合并，下标小的层的内容会覆盖下标大的层的同名文件。
         */
        layers: string[];
        /**
         * 函数的描述。
         * @example `function-description`
         */
        description: string;
        /**
         * 函数的名称。只能包含字母、数字、下划线（_）和短划线（-），不能以数字、短划线（-）开头，长度范围为1~64个字符。
         * @example `functionName`
         */
        functionName: string;
        /**
         * 函数执行的入口，具体格式和语言相关。详细信息，请参见[函数入口](~~157704~~)。
         * @example `index.handler`
         */
        handler: string;
        /**
         * 初始化函数运行的超时时间，默认值为3秒，单位为秒。最小1秒，最大为5分钟。当初始化函数超过这个时间后，函数会被终止执行。
         * @example `60`
         */
        initializationTimeout: number;
        /**
         * 初始化函数执行的入口。详细信息，请参见[Initializer函数](~~157704~~)。
         * @example `index.initializer`
         */
        initializer: string;
        /**
         * 函数的内存规格，单位为MB，内存大小为64 MB的倍数。不同的函数实例类型，内存规格存在差异。更多信息，请参见[实例规格](~~179379~~)。
         * @example `512`
         */
        memorySize: number;
        /**
         * 函数运行的语言环境。目前支持**nodejs20**、**nodejs18**、**nodejs20**、**nodejs18**、**nodejs16**、**nodejs14**、**nodejs12**、**nodejs10**、**nodejs8**、**nodejs6**、**nodejs4.4**、**python3.10**、**python3.9**、**python3**、**python2.7**、**java11**、**java8**、**go1**、**php7.2**、**dotnetcore3.1**、**dotnetcore2.1**、**custom.debian10**、**custom**和**custom-container**。更多信息，请参见[支持的函数运行环境列表](~~73338~~)。
         * @example `python3.9`
         */
        runtime: string;
        /**
         * 函数运行的超时时间，单位为秒，最小1秒，默认3秒。函数超过这个时间后会被终止执行。
         * @example `60`
         */
        timeout: number;
        /**
         * 自定义、自定义容器运行时HTTP Server的监听端口。
         * @example `9000`
         */
        caPort: number;
        /**
         * 函数的环境变量，您可以在函数中通过环境变量访问环境变量。更多信息，请参见[环境变量](~~69777~~)。
         */
        environmentVariables: any;
        /**
         * 实例最大并发度。
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
         * 默认值：e1
         * @example `e1`
         */
        instanceType: string;
        /**
         * Custom Runtime函数详细配置。
         */
        customRuntimeConfig: any;
        /**
         * 实例生命周期配置。
         */
        instanceLifecycleConfig: any;
        /**
         * 函数自定义DNS配置。
         */
        customDNS: any;
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
