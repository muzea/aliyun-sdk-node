export interface DeployApplicationRequest {
    /**
     * 需要部署的应用ID。
     * @example `7171a6ca-d1cd-4928-8642-7d5cfe69****`
     */
    "AppId": string;
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
    "Jdk"?: string;
    /**
     * 部署包依赖的Tomcat版本。支持版本如下：
     * - **apache-tomcat-7.0.91**
     * - **apache-tomcat-8.5.42**
     * 当**Package Type**为**Image**时不支持。
     * @example `apache-tomcat-7.0.91`
     */
    "WebContainer"?: string;
    /**
     * 部署包的版本号。当**Package Type**为**FatJar**、**War**或**PythonZip**时必填。
     * @example `1.0.1`
     */
    "PackageVersion"?: string;
    /**
     * 部署包地址。当**Package Type**为**FatJar**、**War**或**PythonZip**时必填。
     * @example `http://myoss.oss-cn-hangzhou.aliyuncs.com/my-buc/2019-06-30/****.jar`
     */
    "PackageUrl"?: string;
    /**
     * 镜像地址。当**Package Type**为**Image**时必填。
     * @example `registry.cn-hangzhou.aliyuncs.com/sae_test/ali_sae_test:0.0.1`
     */
    "ImageUrl"?: string;
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
    "Command"?: string;
    /**
     * 镜像启动命令参数。上述启动命令**Command**所需参数。格式如下：
     * `["a","b"]`
     * 在上述示例中，`CommandArgs=["abc", ">", "file0"]`，其中`["abc", ">", "file0"]`需要转成String类型，里面的格式为JSON数组。如果无此参数，则无需填写。
     * @example `["a","b"]`
     */
    "CommandArgs"?: string;
    /**
     * 容器环境变量参数。支持自定义或引用配置项。如需引用配置项，请先创建ConfigMap实例。更多信息，请参见[CreateConfigMap](~~176914~~)。取值说明如下：
     * - 自定义配置
     *     - **name**：环境变量名称。
     *     - **value**：环境变量值。优先级高于valueFrom。
     * - 引用配置项（valueFrom）
     *     - **name**：环境变量名称。支持引用单个或全部键，如果引用全部键，需输入`sae-sys-configmap-all-<配置项名称>`，例如`sae-sys-configmap-all-test1`。
     *     - **valueFrom**：环境变量引用。取值为`configMapRef`。
     *     - **configMapId**：配置项ID。
     *     - **key**：键。如果引用全部健值，则不设置该字段。
     * @example `[     {         "name": "sae-sys-configmap-all-hello",         "valueFrom": {             "configMapRef": {                 "configMapId": 100,                 "key": ""             }         }     },     {         "name": "hello",         "valueFrom": {             "configMapRef": {                 "configMapId": 101,                 "key": "php-fpm"             }         }     },     {         "name": "envtmp",         "value": "newenv"     } ]`
     */
    "Envs"?: string;
    /**
     * 容器内自定义Host映射。取值说明如下：
     * - **hostName**：域名或主机名。
     * - **ip**：IP地址。
     * @example `[{"hostName":"samplehost","ip":"127.0.0.1"}]`
     */
    "CustomHostAlias"?: string;
    /**
     * JAR包启动应用选项。应用默认启动命令：`$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
     * @example `custom-option`
     */
    "JarStartOptions"?: string;
    /**
     * JAR包启动应用参数。应用默认启动命令：`$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
     * @example `-Xms4G -Xmx4G`
     */
    "JarStartArgs"?: string;
    /**
     * 容器健康检查，健康检查失败的容器将被关闭并恢复。支持方式如下：
     * - **exec**：例如 `{"exec":{"command":\["sh","-c","cat/home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}`
     * - **httpGet**：例如`{"httpGet":{"path":"/","port":18091,"scheme":"HTTP","isContainKeyWord":true,"keyWord":"SAE"},"initialDelaySeconds":11,"periodSeconds":10,"timeoutSeconds":1}`
     * - **tcpSocket**：例如`{"tcpSocket":{"port":18091},"initialDelaySeconds":11,"periodSeconds":10,"timeoutSeconds":1}`
     * > 只能选择一种方式进行健康检查。
     * 参数说明如下：
     * - **exec.command**：设置健康检查命令。
     * - **httpGet.path**：访问路径。
     * - **httpGet.scheme**：**HTTP**或**HTTPS**。
     * - **httpGet.isContainKeyWord**：**true**表示包含关键字，**false**表示不包含关键字，缺失该字段表示不使用高级功能。
     * - **httpGet.keyWord**：自定义的关键字，使用时不能缺失**isContainKeyWord**字段。
     * - **tcpSocket.port**：tcp连接检测的端口 。
     * - **initialDelaySeconds**：设置健康检查延迟检测时间，默认为10，单位为秒。
     * - **periodSeconds**：设置健康检查周期，默认为30，单位为秒。
     * - **timeoutSeconds**：设置健康检查超时等待时间，默认为1，单位为秒。如果设置为0或不设置，默认超时等待时间为1秒。
     * @example `{"exec":{"command":["sleep","5s"]},"initialDelaySeconds":10,"timeoutSeconds":11}`
     */
    "Liveness"?: string;
    /**
     * 应用启动状态检查，多次健康检查失败的容器将被关闭并重启。不通过健康检查的容器将不会有SLB流量进入。支持**exec**、**httpGet**和**tcpSocket**方式。具体示例，请参见**Liveness**参数。
     * > 只能选择一种方式进行健康检查。
     * @example `{"exec":{"command":["sleep","6s"]},"initialDelaySeconds":15,"timeoutSeconds":12}`
     */
    "Readiness"?: string;
    /**
     * 最小存活实例数。取值说明如下：
     * - 如果设置为**0**，应用在升级过程中将会中断业务。
     * - 如果设置为**-1**，最小存活实例数将使用系统推荐值，即取现有实例数的25%。如果当前为5个实例，5×25%=1.25，向上取整后，最小存活实例数为2。
     * > 每次滚动部署最小存活的实例数建议≥1，保证业务不中断。
     * @example `1`
     */
    "MinReadyInstances"?: number;
    /**
     * 最小存活实例数百分比。取值说明如下：
     *  - **-1**：初始化值，表示不采用百分比。
     *  - **0~100**：单位为百分比，向上取整。例如设置为**50**%，如果当前为5个实例，则最小存活实例数为3。
     * > 当**MinReadyInstance**和**MinReadyInstanceRatio**同时传递时，且**MinReadyInstanceRatio**的取值非**-1**时，以**MinReadyInstanceRatio**参数为准。假设**MinReadyInstances**取值为**5**，**MinReadyInstanceRatio**取值为**50**，则会用**50**来计算最小存活实例数。
     * @example `-1`
     */
    "MinReadyInstanceRatio"?: number;
    /**
     * 批次内部署间隔，单位为秒。
     * @example `10`
     */
    "BatchWaitTime"?: number;
    /**
     * HSF框架中应用运行环境版本，例如Ali-Tomcat容器。
     * @example `3.5.3`
     */
    "EdasContainerVersion"?: string;
    /**
     * 部署策略。当最小存活实例数等于1时，**UpdateStrategy**字段的值为""。当最小存活实例数大于1时，示例如下：
     *
     *  - 灰度1台+后续分2批+自动分批+分批间隔1分钟：`{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":1},"grayUpdate":{"gray":1}}`
     *   - 灰度1台+后续分2批+手动分批：`{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"manual"},"grayUpdate":{"gray":1}}`
     *   - 分2批+自动分批+分批间隔0分钟：`{"type":"BatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":0}}`
     * 参数说明如下：
     *   - **type**：发布策略类型，可选灰度发布**GrayBatchUpdate**或分批发布**BatchUpdate**。
     *   - **batchUpdate**：分批发布策略。
     *     - **batch**：发布批次。
     *     - **releaseType**：分批间处理方式，可选自动**auto**或手动**manual**。
     *     - **batchWaitTime**：分批间隔时间，单位为分钟。
     *   - **grayUpdate**：灰度后剩余批次，当**type**为**GrayBatchUpdate**时必填。
     * @example `{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":1},"grayUpdate":{"gray":1}}`
     */
    "UpdateStrategy"?: string;
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
     * > 随应用自动创建的Project会随着应用删除而删除，因此在选择已有Project时，不能选择SAE自动创建的Project。
     * @example `[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`
     */
    "SlsConfigs"?: string;
    /**
     * 时区，默认为**Asia/Shanghai**。
     * @example `Asia/Shanghai`
     */
    "Timezone"?: string;
    /**
     * 不推荐配置该字段，推荐配置**NasConfigs**。NAS文件系统的ID。部署时如果配置没有变更，则不需要设置该参数（即请求中无需包含**NasId**字段）；如果需要清除NAS配置，您需要在请求中将该字段的值设置为空字符串（即请求中**NasId**字段的值为""）。
     * @example `10d3b4****`
     */
    "NasId"?: string;
    /**
     * 不推荐配置该字段，推荐配置**NasConfigs**。NAS在应用VPC内的挂载点。部署时如果配置没有变更，则不需要设置该参数（即请求中无需包含**MountHost**字段）；如果需要清除NAS配置，您需要在请求中将该字段的值设置为空字符串（即请求中**MountHost**字段的值为""）。
     * @example `10d3b4bc9****.com`
     */
    "MountHost"?: string;
    /**
     * 不推荐配置该字段，推荐配置**NasConfigs**。NAS挂载描述。部署时如果配置没有变更，则不需要设置该参数（即请求中无需包含**MountDesc**字段）；如果需要清除NAS配置，您需要在请求中将该字段的值设置为空字符串（即请求中**MountDesc**字段的值为""）。
     * @example `[{mountPath: "/tmp", nasPath: "/"}]`
     */
    "MountDesc"?: string;
    /**
     * 容器启动后执行脚本。在容器被创建后立刻触发执行一段脚本，格式如：`{"exec":{"command":\["sh","-c","echo hello"\]}}`
     * @example `{"exec":{"command":["sh","-c","echo hello"]}}`
     */
    "PostStart"?: string;
    /**
     * 容器停止前执行脚本。在容器被删除前触发执行一段脚本，格式如：`{"exec":{"command":\["sh","-c","echo hello"\]}}`
     * @example `{"exec":{"command":["sh","-c","echo hello"]}}`
     */
    "PreStop"?: string;
    /**
     * 发布单描述信息。
     * @example `启动应用`
     */
    "ChangeOrderDesc"?: string;
    /**
     * 设置WAR包部署应用的启动命令，操作步骤与镜像部署的启动命令配置操作相同。更多信息，请参见[设置启动命令](~~96677~~)。
     * @example `CATALINA_OPTS=\"$CATALINA_OPTS $Options\" catalina.sh run`
     */
    "WarStartOptions"?: string;
    /**
     * 是否自动启用应用弹性伸缩策略。取值说明如下：
     * - **true**：开启。
     * - **false**：关闭。
     * @example `true`
     */
    "AutoEnableApplicationScalingRule"?: boolean;
    /**
     * **ConfigMap**挂载描述。使用在命名空间配置项页面创建的配置项来向容器中注入配置信息。参数说明如下：
     * - **configMapId**：ConfigMap实例ID。可通过调用[ListNamespacedConfigMaps](~~176917~~)接口获取。
     * - **key**：键值。
     * > 可通过传递`sae-sys-configmap-all`参数挂载所有键。
     * - **mountPath**：挂载路径。
     * @example `[{"configMapId":16,"key":"test","mountPath":"/tmp"}]`
     */
    "ConfigMapMountDesc"?: string;
    /**
     * 优雅下线超时时间，默认为30，单位为秒。取值范围为1~300。
     * @example `10`
     */
    "TerminationGracePeriodSeconds"?: number;
    /**
     * 是否接入AHAS。取值说明如下：
     * - **true**：接入AHAS。
     * - **false**：不接入AHAS。
     * @example `false`
     */
    "EnableAhas"?: string;
    /**
     * PHP应用监控挂载路径，需要您保证PHP服务器一定会加载这个路径的配置文件。您无需关注配置内容，SAE会自动渲染正确的配置文件。
     * @example `/usr/local/etc/php/conf.d/arms.ini`
     */
    "PhpArmsConfigLocation"?: string;
    /**
     * PHP应用启动配置挂载路径，需要您保证PHP服务器会使用这个配置文件启动。
     * @example `/usr/local/etc/php/php.ini`
     */
    "PhpConfigLocation"?: string;
    /**
     * PHP配置文件内容。
     * @example `k1=v1`
     */
    "PhpConfig"?: string;
    /**
     * Tomcat文件配置，设置为""或"{}"表示删除配置。取值说明如下：
     * - **port**：端口范围为1024~65535，小于1024的端口需要Root权限才能操作。因为容器配置的是Admin权限，所以请填写大于1024的端口。如果不配置，则默认为8080。
     * - **contextPath**：访问路径，默认为根目录"/"。
     * - **maxThreads**：配置连接池的连接数大小，默认大小为400。
     * - **uriEncoding**：Tomcat的编码格式，包括**UTF-8**、**ISO-8859-1**、**GBK和GB2312**。如果不设置，则默认为**ISO-8859-1**。
     * - **useBodyEncodingForUri**：是否使用**BodyEncoding for URL**，默认为**true**。
     * @example `{"port":8080,"contextPath":"/","maxThreads":400,"uriEncoding":"ISO-8859-1","useBodyEncodingForUri":true}`
     */
    "TomcatConfig"?: string;
    /**
     * OSS挂载描述信息。参数说明如下：
     * - **bucketName**：Bucket名称。
     * - **bucketPath**：您在OSS创建的目录或OSS对象，如果OSS挂载目录不存在，会触发异常。
     * - **mountPath**：您在SAE的容器路径。如果路径已存在，为覆盖关系；如果路径不存在，会新建。
     * - **readOnly**：容器路径是否对挂载目录资源有可读权限，取值说明如下：
     *     - **true**：只读权限。
     *     - **false**：读写权限。
     * @example `[{"bucketName": "oss-bucket", "bucketPath": "data/user.data", "mountPath": "/usr/data/user.data", "readOnly": true}]`
     */
    "OssMountDescs"?: string;
    /**
     * OSS读写的AccessKey ID。
     * @example `xxxxxx`
     */
    "OssAkId"?: string;
    /**
     * OSS读写的AccessKey Secret。
     * @example `xxxxxx`
     */
    "OssAkSecret"?: string;
    /**
     * 是否启用流量灰度规则。该规则仅适用于Spring Cloud和Dubbo框架的应用。取值说明如下：
     * - **true**：启用灰度规则。
     * - **false**：禁用灰度规则。
     * @example `false`
     */
    "EnableGreyTagRoute"?: boolean;
    /**
     * PHP部署包依赖的PHP版本。镜像不支持。
     * @example `PHP-FPM 7.0`
     */
    "Php"?: string;
    /**
     * ACR企业版实例ID。当**ImageUrl**为容器镜像服务企业版时必填。
     * @example `cri-xxxxxx`
     */
    "AcrInstanceId"?: string;
    /**
     * 跨账号拉取镜像时所需的RAM角色的ARN。更多信息，请参见[通过RAM角色实现跨云账号授权](~~223585~~)。
     * @example `acs:ram::123456789012****:role/adminrole`
     */
    "AcrAssumeRoleArn"?: string;
    /**
     * 对应保密字典ID。
     * @example `10`
     */
    "ImagePullSecrets"?: string;
    /**
     * 是否绑定EIP。取值说明如下：
     * - **true**：绑定。
     * - **false**：不绑定。
     * @example `true`
     */
    "AssociateEip"?: boolean;
    /**
     * 日志采集到Kafka的配置汇总信息。取值说明如下：
     * - **kafkaEndpoint**：Kafka API的服务接入地址。
     * - **kafkaInstanceId**：Kafka实例ID。
     * - **kafkaConfigs**：单条或多条日志的配置汇总信息。示例值与参数说明，请参见本文的请求参数** kafkaConfigs**。
     * @example `{"kafkaEndpoint":"10.0.X.XXX:XXXX,10.0.X.XXX:XXXX,10.0.X.XXX:XXXX","kafkaInstanceId":"alikafka_pre-cn-7pp2l8kr****","kafkaConfigs":[{"logType":"file_log","logDir":"/tmp/a.log","kafkaTopic":"test2"},{"logType":"stdout","logDir":"","kafkaTopic":"test"}]}`
     */
    "KafkaConfigs"?: string;
    /**
     * 开启K8s Service服务注册发现。取值说明如下：
     * - **portProtocols**：端口与协议。端口取值范围为\[1,65535]，协议支持**TCP**和**UDP**。
     * - **portAndProtocol**：端口与协议。端口取值范围为\[1,65535]，协议支持**TCP**和**UDP**。**优先推荐portProtocols，如果设置了portProtocols，仅portProtocols生效**。
     * - **enable**：开启K8s Service服务注册发现。
     * @example `{"portProtocols":[{"port":18012,"protocol":"TCP"}],"portAndProtocol":{"18012":"TCP"},"enable":true}`
     */
    "PvtzDiscoverySvc"?: string;
    /**
     * 选择Nacos注册中心，取值说明如下：
     * - **0**：SAE内置Nacos。
     * - **1**：用户自建Nacos。
     * - **2**：MSE商业版Nacos。
     * @example `"0"`
     */
    "MicroRegistration"?: string;
    /**
     * 注册中心配置，仅在注册中心类型为MSE Nacos企业版时生效
     */
    "MicroRegistrationConfig"?: string;
    /**
     * 挂载NAS的配置。取值说明如下：
     * - **mountPath**：容器挂载路径。
     * - **readOnly**：取值为**false**时，表示拥有读写权限。
     * - **nasId**：NAS ID。
     * - **mountDomain**：容器挂载点地址。更多信息，请参见[DescribeMountTargets](~~62626~~)。
     * - **nasPath**：NAS相对文件目录。
     * @example `[{"mountPath":"/test1","readOnly":false,"nasId":"nasId1","mountDomain":"nasId1.cn-shenzhen.nas.aliyuncs.com","nasPath":"/test1"},{"nasId":"nasId2","mountDomain":"nasId2.cn-shenzhen.nas.aliyuncs.com","readOnly":false,"nasPath":"/test2","mountPath":"/test2"}]`
     */
    "NasConfigs"?: string;
    /**
     * Python环境。支持**PYTHON 3.9.15**。
     * @example `PYTHON 3.9.15`
     */
    "Python"?: string;
    /**
     * 自定义安装模块依赖。默认安装根目录下requirements.txt定义的依赖项。如果未配置或自定义软件包，可以指定安装的依赖。
     * @example `Flask==2.0`
     */
    "PythonModules"?: string;
    /**
     * 该参数仅对停止状态的应用生效。如果运行中的应用调用**DeployApplication**接口，会立即重新部署。
     * - **true**：默认值。表示立即部署，生效新的部署配置，并立即拉起实例。
     * - **false**：表示仅生效新的部署配置，不会拉起应用实例。
     * @example `true`
     */
    "Deploy"?: string;
    /**
     * 应用包类型。取值说明如下：
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
     * @example `FatJar`
     */
    "PackageType"?: string;
    /**
     * 每个实例所需的CPU，单位为毫核，不能为0。目前仅支持以下固定规格：
     * - **500**
     * - **1000**
     * - **2000**
     * - **4000**
     * - **8000**
     * - **12000**
     * - **16000**
     * - **32000**
     * @example `1000`
     */
    "Cpu"?: number;
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
     * @example `1024`
     */
    "Memory"?: number;
    /**
     * 实例数。
     * @example `1`
     */
    "Replicas"?: number;
    /**
     * 安全组ID。
     * @example `sg-wz969ngg2e49q5i4****`
     */
    "SecurityGroupId"?: string;
    /**
     * 应用实例弹性网卡所在的虚拟交换机。该交换机必须位于上述VPC内。
     * @example `vsw-bp12mw1f8k3jgygk9****`
     */
    "VSwitchId"?: string;
    "ServiceTags"?: string;
}
