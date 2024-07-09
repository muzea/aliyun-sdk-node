export interface CreateApplicationRequest {
    /**
     * 应用名称。允许数字、字母以及短划线（-）组合。必须以字母开始，不超过36个字符。
     * @example `test`
     */
    "AppName": string;
    /**
     * SAE命名空间ID。仅支持名称为小写字母加短划线（-）的命名空间，必须以字母开始。
     * 命名空间可通过调用[DescribeNamespaceList](~~126547~~)接口获取。
     * @example `cn-beijing:test`
     */
    "NamespaceId"?: string;
    /**
     * 应用描述信息。不超过1024个字符。
     * @example `This is a test description.`
     */
    "AppDescription"?: string;
    /**
     * SAE命名空间对应的VPC。在SAE中，一个命名空间只能对应一个VPC，且不能修改。第一次在命名空间内创建SAE应用将形成绑定关系。多个命名空间可以对应一个VPC。不填则默认为命名空间绑定的VPC ID。
     * @example `vpc-bp1aevy8sofi8mh1q****`
     */
    "VpcId"?: string;
    /**
     * 应用实例弹性网卡所在的虚拟交换机。该交换机必须位于上述VPC内。该交换机与SAE命名空间同样存在绑定关系。不填则默认为命名空间绑定的vSwitch ID。
     * @example `vsw-bp12mw1f8k3jgygk9****`
     */
    "VSwitchId"?: string;
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
    "PackageType": string;
    /**
     * 部署包的版本号。当**Package Type**为**FatJar**、**War**或**PythonZip**时必填。
     * @example `1.0.0`
     */
    "PackageVersion"?: string;
    /**
     * 部署包地址。当**Package Type**为**FatJar**、**War**或**PythonZip**时必填。
     * @example `http://myoss.oss-cn-****.aliyuncs.com/my-buc/2019-06-30/****.jar`
     */
    "PackageUrl"?: string;
    /**
     * 镜像地址。当**Package Type**为**Image**时必填。
     * @example `registry.cn-hangzhou.aliyuncs.com/sae_test/ali_sae_test:0.0.1`
     */
    "ImageUrl"?: string;
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
     * WebContainer部署包依赖的Tomcat版本。支持版本如下：
     * - **apache-tomcat-7.0.91**
     * - **apache-tomcat-8.5.42**
     * 当**Package Type**为**Image**时不支持。
     * @example `apache-tomcat-7.0.91`
     */
    "WebContainer"?: string;
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
     * 初始实例数。
     * @example `1`
     */
    "Replicas": number;
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
     * @example `-Xms4G -Xmx4G`
     */
    "JarStartOptions"?: string;
    /**
     * JAR包启动应用参数。应用默认启动命令：`$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
     * @example `custom-args`
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
     * @example `{"exec":{"command":["sh","-c","cat /home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}`
     */
    "Liveness"?: string;
    /**
     * 应用启动状态检查，多次健康检查失败的容器将被关闭并重启。不通过健康检查的容器将不会有SLB流量进入。支持**exec**、**httpGet**和**tcpSocket**方式。具体示例，请参见**Liveness**参数。
     * > 只能选择一种方式进行健康检查。
     * @example `{"exec":{"command":["sh","-c","cat /home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}`
     */
    "Readiness"?: string;
    /**
     * 是否立即部署。取值说明如下：
     * - **true**：默认值，立即部署。
     * - **false**：稍后部署。
     * @example `true`
     */
    "Deploy"?: boolean;
    /**
     * HSF框架中应用运行环境版本，例如Ali-Tomcat容器。
     * @example `3.5.3`
     */
    "EdasContainerVersion"?: string;
    /**
     * 时区，默认为**Asia/Shanghai**。
     * @example `Asia/Shanghai`
     */
    "Timezone"?: string;
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
     * 不推荐配置该字段，推荐配置**NasConfigs**。挂载的NAS的ID，必须与集群处在同一个地域。它必须有可用的挂载点创建额度，或者其挂载点已经在VPC内的交换机上。如果不填，且存在**mountDescs**字段，则默认将自动购买一个NAS并挂载至VPC内的交换机上。
     * 部署时如果配置没有变更，则不需要设置该参数（即请求中无需包含**NASId**字段）；如果需要清除NAS配置，您需要在请求中将该字段的值设置为空字符串（即请求中**NASId**字段的值为""）。
     * @example `KSAK****`
     */
    "NasId"?: string;
    /**
     * 不推荐配置该字段，推荐配置**NasConfigs**。NAS在应用VPC内的挂载点。部署时如果配置没有变更，则不需要设置该参数（即请求中无需包含**MountHost**字段）；如果需要清除NAS配置，您需要在请求中将该字段的值设置为空字符串（即请求中**MountHost**字段的值为""）。
     * @example `example.com`
     */
    "MountHost"?: string;
    /**
     * 不推荐配置该字段，推荐配置**NasConfigs**。NAS挂载描述。部署时如果配置没有变更，则不需要设置该参数（即请求中无需包含**MountDesc**字段）；如果需要清除NAS配置，您需要在请求中将该字段的值设置为空字符串（即请求中**MountDesc**字段的值为""）。
     * @example `[{mountPath: "/tmp", nasPath: "/"}]`
     */
    "MountDesc"?: string;
    /**
     * 容器停止前执行脚本。在容器被删除前触发执行一段脚本，格式如：`{"exec":{"command":\["cat","/etc/group"]}}`
     * @example `{"exec":{"command":["cat","/etc/group"]}}`
     */
    "PreStop"?: string;
    /**
     * 容器启动后执行脚本。在容器被创建后立刻触发执行一段脚本，格式如：`{"exec":{"command":\["cat","/etc/group"]}}`
     * @example `{"exec":{"command":["cat","/etc/group"]}}`
     */
    "PostStart"?: string;
    /**
     * 设置WAR包部署应用的启动命令，操作步骤与镜像部署的启动命令配置操作相同。更多信息，请参见[设置启动命令](~~96677~~)。
     * @example `CATALINA_OPTS=\"$CATALINA_OPTS $Options\" catalina.sh run`
     */
    "WarStartOptions"?: string;
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
     * 安全组ID。
     * @example `sg-wz969ngg2e49q5i4****`
     */
    "SecurityGroupId"?: string;
    /**
     * 是否自动配置网络环境。取值说明如下：
     * - **true**：创建应用时SAE自动配置网络环境。**NamespaceId**、**VpcId**、**vSwitchId**和**SecurityGroupId**的取值将被忽略。
     * - **false**：创建应用时SAE手动配置网络环境。
     * @example `true`
     */
    "AutoConfig"?: boolean;
    /**
     * 优雅下线超时时间，默认为30，单位为秒。取值范围为1~300。
     * @example `30`
     */
    "TerminationGracePeriodSeconds"?: number;
    /**
     * PHP应用监控挂载路径，需要您保证PHP服务器一定会加载这个路径的配置文件。
     * 您无需关注配置内容，SAE会自动渲染正确的配置文件。
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
     * Tomcat文件配置，设置为""或"{}"表示删除配置：
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
     * PHP部署包依赖的PHP版本。镜像不支持。
     * @example `PHP-FPM 7.0`
     */
    "Php"?: string;
    /**
     * 容器镜像服务ACR企业版实例ID。当**ImageUrl**为容器镜像服务企业版时必填。
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
     * 创建应用的技术栈语言。取值说明如下：
     * - **java**：Java语言。
     * - **php**：PHP语言。
     * - **other**：多语言，例如Python、C++、Go、.NET和Node.js等。
     * @example `java`
     */
    "ProgrammingLanguage"?: string;
    /**
     * 日志采集到Kafka的配置汇总信息。取值说明如下：
     * - **kafkaEndpoint**：Kafka API的服务接入地址。
     * - **kafkaInstanceId**：Kafka实例ID。
     * - **kafkaConfigs**：单条或多条日志的配置汇总信息。取值说明，请参见本文的请求参数**kafkaConfigs**。
     * @example `{"kafkaEndpoint":"10.0.X.XXX:XXXX,10.0.X.XXX:XXXX,10.0.X.XXX:XXXX","kafkaInstanceId":"alikafka_pre-cn-7pp2l8kr****","kafkaConfigs":[{"logType":"file_log","logDir":"/tmp/a.log","kafkaTopic":"test2"},{"logType":"stdout","logDir":"","kafkaTopic":"test"}]}`
     */
    "KafkaConfigs"?: string;
    /**
     * 开启K8s Service服务注册发现。取值说明如下：
     * - **serviceName**：服务名称。格式为`自定义-命名空间ID`，其中后缀`-命名空间ID`不支持自定义，需根据应用所在命名空间填写。例如，选择华北2（北京）地域的默认命名空间，则为`-cn-beijing-default`。
     * - **namespaceId**：命名空间ID。
     * - **portProtocols**：端口与协议。端口取值范围为\[1,65535]，协议支持**TCP**和**UDP**。
     * - **portAndProtocol**：端口与协议。端口取值范围为\[1,65535]，协议支持**TCP**和**UDP**。**优先推荐portProtocols，如果设置了portProtocols，仅portProtocols生效**。
     * - **enable**：开启K8s Service服务注册发现。
     * @example `{"serviceName":"bwm-poc-sc-gateway-cn-beijing-front","namespaceId":"cn-beijing:front","portAndProtocol":{"18012":"TCP"},"enable":true,"portProtocols":[{"port":18012,"protocol":"TCP"}]}`
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
     * 注册中心配置信息
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
     * 基于eBPF技术，对非Java应用开启应用监控能力。取值说明如下：
     * - **true**：开启。
     * - **false**：关闭。默认值。
     * @example `false`
     */
    "EnableEbpf"?: string;
    "SaeVersion"?: string;
    "AppSource"?: string;
    "BaseAppId"?: string;
    "ServiceTags"?: string;
}
