export interface DescribeJobResponse {
    /**
     * 请求ID。
     * @example `01CF26C7-00A3-4AA6-BA76-7E95F2A3****`
     */
    RequestId: string;
    /**
     * 调用结果的附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `ac1a0b2215622246421415014e****`
     */
    TraceId: string;
    /**
     * 任务模板信息。
     */
    Data: {
        /**
         * VPC ID。
         * @example `vpc-2ze0i263cnn311nvj****`
         */
        VpcId: string;
        /**
         * ConfigMap信息。
         */
        ConfigMapMountDesc: {
            /**
             * ConfigMap键值对。
             * @example `k1`
             */
            Key: string;
            /**
             * ConfigMap名称。
             * @example `test`
             */
            ConfigMapName: string;
            /**
             * 容器挂载路径。
             * @example `/tmp`
             */
            MountPath: string;
            /**
             * ConfigMap ID。
             * @example `1`
             */
            ConfigMapId: number;
        }[];
        /**
         * 安全组ID。
         * @example `sg-wz969ngg2e49q5i4****`
         */
        SecurityGroupId: string;
        /**
         * 部署包依赖的JDK版本。支持版本如下：
         * - **Open JDK 8**
         * - **Open JDK 7**
         * - **Dragonwell 11**
         * - **Dragonwell 8**
         * - **openjdk-8u191-jdk-alpine3.9**
         * - **openjdk-7u201-jdk-alpine3.9**
         * 当**Package Type**为**Image**时不支持。
         * @example `Open JDK 8`
         */
        Jdk: string;
        /**
         * 镜像地址。当**Package Type**为**Image**时必填。
         * @example `docker.io/library/nginx:1.14.2`
         */
        ImageUrl: string;
        /**
         * 日志采集到SLS的配置。
         * - 使用SAE自动创建的SLS资源：`[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`。
         * - 使用自定义的SLS资源：`[{"projectName":"test-sls","logType":"stdout","logDir":"","logstoreName":"sae","logtailName":""},{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]`。
         * 参数说明如下：
         * - **projectName**：配置SLS上的Project名称。
         * - **logDir**：日志路径。
         * - **logType**：日志类型。**stdout**表示容器标准输出日志，仅可设置1条；如果不设置，则表示收集文件日志。
         * - **logstoreName**：配置SLS上的Logstore名称。
         * - **logtailName**：配置SLS上的Logtail名称，如果不指定，则表示新建Logtail。
         * 多次部署时如果SLS采集配置没有变更，则不需要设置该参数（即请求中无需包含**SlsConfigs**字段）；如果不再需要使用SLS采集功能，您需要在请求中将该字段的值设置为空字符串（即请求中**SlsConfigs**字段的值为""）。
         * @example `[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`
         */
        SlsConfigs: string;
        /**
         * 标签信息。
         */
        Tags: {
            /**
             * 标签键。
             * @example `k1`
             */
            Key: string;
            /**
             * 标签值。
             * @example `v1`
             */
            Value: string;
        }[];
        /**
         * 部署包地址。当**Package Type**为**FatJar**或**War**时必填。
         * @example `https://edas-bj.oss-cn-beijing.aliyuncs.com/apps/K8s_APP_ID/d4c97c37-aba3-403e-ae1e-6f7d8742****​/hello-sae.war`
         */
        PackageUrl: string;
        /**
         * 任务包类型。取值说明如下：
         * - 当您选择用Java部署时，支持**FatJar**、**War**和**Image**。
         * - 当您选择用PHP部署时，支持类型如下：
         *     - **PhpZip**
         *     - **IMAGE\_PHP\_5\_4**
         *     - **IMAGE\_PHP\_5\_4\_ALPINE**
         *     - **IMAGE\_PHP\_5\_5**
         *     - **IMAGE\_PHP\_5\_5\_ALPINE**
         *     - **IMAGE\_PHP\_5\_6**
         *     - **IMAGE\_PHP\_5\_6\_ALPINE**
         *     - **IMAGE\_PHP\_7\_0**
         *     - **IMAGE\_PHP\_7\_0\_ALPINE**
         *     - **IMAGE\_PHP\_7\_1**
         *     - **IMAGE\_PHP\_7\_1\_ALPINE**
         *     - **IMAGE\_PHP\_7\_2**
         *     - **IMAGE\_PHP\_7\_2\_ALPINE**
         *     - **IMAGE\_PHP\_7\_3**
         *     - **IMAGE\_PHP\_7\_3\_ALPINE**
         * - 当您选择用Python部署时，支持**PythonZip**和**Image**。
         * @example `War`
         */
        PackageType: string;
        /**
         * 容器停止前执行脚本。在容器被删除前触发执行一段脚本，格式如：`{"exec":{"command":\["cat","/etc/group"\]}}`
         * @example `{"exec":{"command":["cat","/etc/group"]}}`
         */
        PreStop: string;
        /**
         * 部署包的版本号。当**Package Type**为**FatJar**或**War**时必填。
         * @example `1.0`
         */
        PackageVersion: string;
        /**
         * JAR包启动任务参数。任务默认启动命令：`$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
         * @example `start`
         */
        JarStartArgs: string;
        /**
         * 任务模板名称。
         * @example `demo-app`
         */
        AppName: string;
        /**
         * 任务模板ID。
         * @example `7171a6ca-d1cd-4928-8642-7d5cfe69****`
         */
        AppId: string;
        /**
         * JAR包启动任务选项。任务默认启动命令：`$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
         * @example `-Dtest=true`
         */
        JarStartOptions: string;
        /**
         * 任务实例个数。
         * @example `2`
         */
        Replicas: number;
        /**
         * 每个实例所需的内存，单位为MB，不能为0。与CPU为一一对应关系，目前仅支持以下固定规格：
         * - **1024**：对应CPU为500毫核和1000毫核。
         * - **2048**：对应CPU为500、1000毫核和2000毫核。
         * - **4096**：对应CPU为1000、2000毫核和4000毫核。
         * - **8192**：对应CPU为2000、4000毫核和8000毫核。
         * - **12288**：对应CPU为12000毫核。
         * - **16384**：对应CPU为4000、8000毫核和16000毫核。
         * - **24576**：对应CPU为12000毫核。
         * - **32768**：对应CPU为16000毫核。
         * - **65536**：对应CPU为8000、16000和32000毫核。
         * - **131072**：对应CPU为32000毫核。
         * @example `2048`
         */
        Memory: number;
        /**
         * PHP配置文件内容。
         * @example `k1=v1`
         */
        PhpConfig: string;
        /**
         * PHP任务启动配置挂载路径，需要您保证PHP服务器会使用这个配置文件启动。
         * @example `/usr/local/etc/php/php.ini`
         */
        PhpConfigLocation: string;
        /**
         * 容器启动后执行脚本。在容器被创建后立刻触发执行一段脚本，格式如：`{"exec":{"command":\["cat","/etc/group"\]}}`
         * @example `{"exec":{"command":["cat","/etc/group"]}}`
         */
        PostStart: string;
        /**
         * 优雅下线超时时间，默认为30，单位为秒。取值范围为1~300。
         * @example `10`
         */
        TerminationGracePeriodSeconds: number;
        /**
         * 镜像启动命令参数。启动命令**Command**所需参数。格式如下：
         * `["a","b"]`
         * 在**Command**参数的示例中，`CommandArgs=["abc", ">", "file0"]`，其中`["abc", ">", "file0"]`需要转成String类型，里面的格式为JSON数组。如果无此参数，则无需填写。
         * @example `["a","b"]`
         */
        CommandArgs: string;
        /**
         * 命名空间ID。
         * @example `cn-beijing:test`
         */
        NamespaceId: string;
        /**
         * NAS在任务模板VPC内的挂载点。部署时如果配置没有变更，则不需要设置该参数（即请求中无需包含**MountHost**字段）；如果需要清除NAS配置，您需要在请求中将该字段的值设置为空字符串（即请求中**MountHost**字段的值为""）。
         * @example `example.com`
         */
        MountHost: string;
        /**
         * Tomcat文件配置，设置为""或"{}"表示删除配置：
         * - **port**：端口范围为1024~65535，小于1024的端口需要Root权限才能操作。因为容器配置的是Admin权限，所以请填写大于1024的端口。如果不配置，则默认为8080。
         * - **contextPath**：访问路径，默认为根目录"/"。
         * - **maxThreads**：配置连接池的连接数大小，默认大小为400。
         * - **uriEncoding**：Tomcat的编码格式，包括**UTF-8**、**ISO-8859-1**、**GBK**和**GB2312**。如果不设置，则默认为**ISO-8859-1**。
         * - **useBodyEncoding**：是否使用**BodyEncoding for URL**，默认为**true**。
         * @example `{"port":8080,"contextPath":"/","maxThreads":400,"uriEncoding":"ISO-8859-1","useBodyEncodingForUri":true}`
         */
        TomcatConfig: string;
        /**
         * 地域ID。
         * @example `cn-beijing`
         */
        RegionId: string;
        /**
         * vSwitch ID。
         * @example `vsw-2ze559r1z1bpwqxwp****`
         */
        VSwitchId: string;
        /**
         * 每个实例所需的CPU，单位为毫核，不能为0。目前仅支持以下固定规格：
         * - **500**
         * - **1000**
         * - **2000**
         * - **4000**
         * - **8000**
         * - **16000**
         * - **32000**
         * @example `1000`
         */
        Cpu: number;
        /**
         * 容器环境变量参数。支持自定义或引用配置项。如需引用配置项，请先创建ConfigMap实例。更多信息，请参见[CreateConfigMap](~~176914~~)。取值说明如下：
         * - 自定义配置
         *     - **name**：环境变量名称。
         *     - **value**：环境变量值。
         * - 引用配置项
         *     - **name**：环境变量名称。支持引用单个或全部键，如果引用全部键，需输入`sae-sys-configmap-all-<配置项名称>`，例如`sae-sys-configmap-all-test1`。
         *     - **valueFrom**：环境变量引用。取值为`configMapRef`。
         *     - **configMapId**：配置项ID。
         *     - **key**：键。如果引用全部健值，则不设置该字段。
         * @example `[{"name":"TEST_ENV_KEY","value":"TEST_ENV_VAR"}]`
         */
        Envs: string;
        /**
         * 挂载描述信息。
         */
        MountDesc: {
            /**
             * 容器挂载路径。
             * @example `/tmp`
             */
            MountPath: string;
            /**
             * NAS相对文件目录。
             * @example `/`
             */
            NasPath: string;
        }[];
        /**
         * 容器内自定义Host映射。取值说明如下：
         * - **hostName**：域名或主机名。
         * - **ip**：IP地址。
         * @example `[{"hostName":"test.host.name","ip":"0.0.0.0"}]`
         */
        CustomHostAlias: string;
        /**
         * 部署包依赖的Tomcat版本。支持版本如下：
         * - **apache-tomcat-7.0.91**
         * - **apache-tomcat-8.5.42**
         * 当**Package Type**为**Image**时不支持。
         * @example `apache-tomcat-7.0.91`
         */
        WebContainer: string;
        /**
         * 镜像启动命令。该命令必须为容器内存在的可执行的对象。示例如下：
         * ```
         * command:
         *       - echo
         *       - abc
         *       - >
         *       - file0
         * ```
         * 根据上述示例，则`Command="echo", CommandArgs=["abc", ">", "file0"]`。
         * @example `echo`
         */
        Command: string;
        /**
         * WAR包启动任务选项。任务默认启动命令：`java $JAVA_OPTS $CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$@" start`。
         * @example `custom-option`
         */
        WarStartOptions: string;
        /**
         * NAS ID。
         * @example `AKSN89**`
         */
        NasId: string;
        /**
         * OSS读写的AccessKey ID。
         * @example `xxxxxx`
         */
        OssAkId: string;
        /**
         * OSS读写的AccessKey Secret。
         * @example `xxxxxx`
         */
        OssAkSecret: string;
        /**
         * OSS挂载描述信息。
         */
        OssMountDescs: {
            /**
             * Bucket名称。
             * @example `oss-bucket`
             */
            bucketName: string;
            /**
             * 您在OSS创建的目录或OSS对象，如果OSS挂载目录不存在，会触发异常。
             * @example `data/user.data`
             */
            bucketPath: string;
            /**
             * 您在SAE的容器路径。如果路径已存在，为覆盖关系；如果路径不存在，会新建。
             * @example `/usr/data/user.data`
             */
            mountPath: string;
            /**
             * 容器路径是否对挂载目录资源有可读权限，取值说明如下：
             * - **true**：只读权限。
             * - **false**：读写权限。
             * @example `true`
             */
            readOnly: boolean;
        }[];
        /**
         * HSF框架中任务运行环境版本，例如Ali-Tomcat容器。
         * @example `3.5.3`
         */
        EdasContainerVersion: string;
        /**
         * 时区，默认为**Asia/Shanghai**。
         * @example `Asia/Shanghai`
         */
        Timezone: string;
        /**
         * 任务模板描述信息。
         * @example `示例应用`
         */
        AppDescription: string;
        /**
         * ACR企业版实例ID。
         * @example `cri-xxxxxx`
         */
        AcrInstanceId: string;
        /**
         * 跨账号拉取镜像时所需的RAM角色的ARN。更多信息，请参见[跨账号拉取阿里云镜像](~~190675~~)和[通过RAM角色实现跨云账号授权](~~223585~~)。
         * @example `acs:ram::123456789012****:role/adminrole`
         */
        AcrAssumeRoleArn: string;
        /**
         * 对应保密字典ID。
         * @example `10`
         */
        ImagePullSecrets: string;
        /**
         * 任务触发配置，根据任务类型进行配置。
         * - **定时任务**：**type**字段设为time，**config**字段为具体Cron表达式，**timezone**字段为指定时区。
         * 配置示例：`{"type":"time","config":"0 1 *​/1 * ?","timezone":"GMT+8:00"}`
         * - **一次性任务**：**type**字段设为http，**config**配置具体的HTTP触发规则。更多信息，请参见[请求参数SourceHttpEventParameters](https://help.aliyun.com/document_detail/347586.html#section-lp1-vq0-ho3)。
         * 配置示例：`{"type":"http","config":{"type":"HTTPS","method"、["GET"],"ip":[],"referer":[],"securityConfig":"none"}}`
         * @example `{"type":"time","config":"0 1 *​/1 * ?","timezone":"GMT+8:00"}`
         */
        TriggerConfig: string;
        /**
         * 任务并发策略。取值说明如下：
         * - **Forbid**：禁止并发运行，在前一个任务未完成时，不创建新任务。
         * - **Allow**：允许并发运行任务。
         * - **Replace**：当到达新任务创建时间点，而前一个任务未完成时，新的任务会取代前一个任务。
         * @example `Allow`
         */
        ConcurrencyPolicy: string;
        /**
         * 是否暂停任务模板。
         * @example `false`
         */
        Suspend: boolean;
        /**
         * 任务超时时间，单位为秒。
         * @example `3600`
         */
        Timeout: number;
        /**
         * 任务重试次数。
         * @example `3`
         */
        BackoffLimit: number;
        /**
         * 启用任务分片。
         * @example `true`
         */
        Slice: boolean;
        /**
         * 任务分片参数。
         * @example `SliceEnvs`
         */
        SliceEnvs: string;
        /**
         * 引用的任务模板ID。
         * @example `7171a6ca-d1cd-4928-8642-7d5cfe69****`
         */
        RefAppId: string;
        /**
         * 被引用的任务目标ID列表。
         */
        RefedAppIds: string[];
        /**
         * 一次性任务的公网请求 URL列表。
         */
        PublicWebHookUrls: string[];
        /**
         * 一次性任务的内网请求 URL列表。
         */
        VpcWebHookUrls: string[];
        /**
         * 创建任务模板的技术栈语言。取值说明如下：
         * - **java**：Java语言。
         * - **php**：PHP语言。
         * - **python**：Python语言。
         * - **other**：多语言，例如C++、Go、.NET和Node.js等。
         * @example `java`
         */
        ProgrammingLanguage: string;
        /**
         * 挂载NAS的配置。
         * @example `[{"mountPath":"/test1","readOnly":false,"nasId":"nasId1","mountDomain":"nasId1.cn-shenzhen.nas.aliyuncs.com","nasPath":"/test1"},{"nasId":"nasId2","mountDomain":"nasId2.cn-shenzhen.nas.aliyuncs.com","readOnly":false,"nasPath":"/test2","mountPath":"/test2"}]`
         */
        NasConfigs: string;
        /**
         * Python环境。支持PYTHON 3.9.15。
         * @example `PYTHON 3.9.15`
         */
        Python: string;
        /**
         * 自定义安装模块依赖。默认安装根目录下requirements.txt定义的依赖项。如果未配置或自定义软件包，可以指定安装的依赖。
         * @example `Flask==2.0`
         */
        PythonModules: string;
    };
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**列表。
     * @example `空`
     */
    ErrorCode: string;
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 获取任务模板配置信息是否成功。取值说明如下：
     * - **true**：获取成功。
     * - **false**：获取失败。
     * @example `true`
     */
    Success: boolean;
}
