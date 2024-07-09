export interface InsertK8sApplicationRequest {
    /**
     * 内网SLB后端端口，也是应用的服务端口，范围为1~65535。
     * @example `80`
     */
    "IntranetTargetPort"?: number;
    /**
     * 内网SLB前端端口，范围为1~65535。
     * @example `80`
     */
    "IntranetSlbPort"?: number;
    /**
     * 镜像地址，当设置`PackageType`为`Image`时，此参数项为必填。
     * @example `registry.cn-beijing.aliyuncs.com/****_test/****-cons****:1.0`
     */
    "ImageUrl"?: string;
    /**
     * 应用描述信息。
     * @example `生产环境应用`
     */
    "ApplicationDescription"?: string;
    /**
     * 镜像的仓库ID。
     * @example `ced********`
     */
    "RepoId"?: string;
    /**
     * 应用实例数。
     * @example `4`
     */
    "Replicas"?: number;
    /**
     * 应用运行过程中，应用实例的CPU限额，单位：核数。如果LimitmCpu不为空，则忽略该参数。
     * @example `4`
     */
    "LimitCpu"?: number;
    /**
     * 应用运行过程中，应用实例的内存限额，单位：MB。LimitMem取值要不小于RequestsMem。
     * @example `2`
     */
    "LimitMem"?: number;
    /**
     * 应用创建时，应用实例的CPU限额，单位：核数。设置为0时表示不限制。如果RequestsmCpu，则使用RequestsmCpu，忽略该参数。
     * @example `0`
     */
    "RequestsCpu"?: number;
    /**
     * 应用创建时，应用实例的内存限额，单位：MB。设置为0时表示不限制。RequestsMem的取值不能大于LimitMem的取值。
     * @example `0`
     */
    "RequestsMem"?: number;
    /**
     * 应用启动命令。如果设置该参数，镜像在启动时，会替代镜像中的原有的启动命令。
     * @example `ls`
     */
    "Command"?: string;
    /**
     * 与命令组合使用，命令的参数是JsonArray字符串，格式如：`[{"argument":"-c"},{"argument":"test"}]`。其中`-c`、`test`为需要设置的两个参数。
     * @example `[{"argument":"-lh"}]`
     */
    "CommandArgs"?: string;
    /**
     * 应用名称。必须以字母开头，支持数字、字母和短划线（-），最多支持36个字符。
     * @example `doc-test`
     */
    "AppName": string;
    /**
     * 私网SLB协议，支持TCP、HTTP和HTTPS协议。
     * @example `TCP`
     */
    "IntranetSlbProtocol"?: string;
    /**
     * 私网SLB ID，不配置时，EDAS会自动为用户新购SLB。
     * @example `ae93********`
     */
    "IntranetSlbId"?: string;
    /**
     * 集群ID，可调用ListCluster接口获取，详情请参见[ListCluster](~~154995~~)。
     * @example `c9cd****`
     */
    "ClusterId": string;
    /**
     * 公网SLB ID，不配置时，EDAS会自动为用户新购SLB。
     * @example `a3d4********`
     */
    "InternetSlbId"?: string;
    /**
     * 公网SLB协议，支持TCP、HTTP和HTTPS协议。
     * @example `TCP`
     */
    "InternetSlbProtocol"?: string;
    /**
     * 公网SLB前端端口，范围为1~65535。
     * @example `80`
     */
    "InternetSlbPort"?: number;
    /**
     * 私网SLB后端端口，也是应用的服务端口，范围为1~65535。
     * @example `8080`
     */
    "InternetTargetPort"?: number;
    /**
     * 部署环境变量，格式需要符合JSON对象数组。支持三种类型的环境变量，分别是普通环境变量，K8s ConfigMap环境变量，K8s Secret环境变量。普通环境变量格式如下所示：
     * `{"name":"x", "value": "y"}`
     * ConfigMap环境变量配置可以将指定的ConfigMap中对应的key的值注入到容器的环境变量中，配置的格式如下所示：
     * `{
     *   "name": "x2",
     *   "valueFrom": {
     *     "configMapKeyRef": {
     *       "name": "my-config",
     *       "key": "y2"
     *     }
     *   }
     * }`
     * Secret环境变量配置可以将指定的Secret中对应的key的值注入到容器的环境变量中，配置的格式如下所示：
     * `{
     *   "name": "x3",
     *   "valueFrom": {
     *     "secretKeyRef": {
     *       "name": "my-secret",
     *       "key": "y3"
     *     }
     *   }
     * }`
     * > 如果要取消该配置，需设置一个空JSON数组“[]”来表示不做配置。
     * @example `[{"name":"x1","value":"y1"},{"name":"x2","valueFrom":{"configMapKeyRef":{"name":"my-config","key":"y2"}}},{"name":"x3","valueFrom":{"secretKeyRef":{"name":"my-secret","key":"y3"}}}]`
     */
    "Envs"?: string;
    /**
     * 停止前执行脚本，示例格式：`{"tcpSocket":{"host":"", "port":8080}}`。
     * 如果设置为`""`或者`{}`表示删除，不设置表示忽略。
     * @example `{\"exec\":{\"command\":[\"ls\",\"/\"]}}"`
     */
    "PreStop"?: string;
    /**
     * 启动后执行脚本，格式如：`{"exec":{"command":\["cat","/etc/group"\]}}`。
     * 如果设置为`""`或者`{}`表示删除，不设置表示忽略。
     * @example `{\"exec\":{\"command\":[\"ls\",\"/\"]}}"`
     */
    "PostStart"?: string;
    /**
     * 容器存活状态监测 ，格式如`{"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"tcpSocket":{"host":"", "port":8080}}`。
     * 如果设置为`""`或者`{}`表示删除，不设置表示忽略。
     * @example `{"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"tcpSocket":{"host":"", "port":8080}}`
     */
    "Liveness"?: string;
    /**
     * 容器业务状态检查，如果检查失败，经过K8s Service的流量将不转入到该容器，格式如：`{"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"httpGet": {"path": "/consumer","port": 8080,"scheme": "HTTP","httpHeaders": \[{"name": "test","value": "testvalue"}\]}}`。
     * 如果设置为`""`或者`{}`表示删除，不设置表示忽略。
     * @example `{"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"httpGet": {"path": "/consumer","port": 8080,"scheme": "HTTP","httpHeaders": [{"name": "test","value": "testvalue"}]}}`
     */
    "Readiness"?: string;
    /**
     * 挂载的NAS的ID。如果不填，且存在mountDescs字段，则默认将自动购买一个NAS并挂载到VPC内的交换机上。
     * @example `dfs23****`
     */
    "NasId"?: string;
    /**
     * 挂载配置描述，为一个序列化的JSON。例如：`\[{"nasPath": "/k8s","mountPath": "/mnt"},{"nasPath": "/files","mountPath": "/app/files"}\]`。其中，`nasPath`是指文件储存路径；`mountPath`是指挂载到容器内的路径。
     * @example `[{"nasPath": "/k8s","mountPath": "/mnt"},{"nasPath": "/files","mountPath": "/app/files"}]`
     */
    "MountDescs"?: string;
    /**
     * NAS存储类型，包括：
     * * 通用型NAS：Capacity（容量型）、Performance（性能型）
     * * 极速型NAS：Standard（标准型）、Advance（高级型）
     * 目前只支持Performance类型。
     * @example `Performance`
     */
    "StorageType"?: string;
    /**
     * 宿主机文件挂载到容器内的配置。例如：`\[{"type":"","nodePath":"/localfiles","mountPath":"/app/files"},{"type":"Directory","nodePath":"/mnt","mountPath":"/app/storage"}\]`。其中：
     * - `nodePath`为宿主机路径。
     * - `mountPath`为容器内的路径。
     * - `type`为挂载类型。
     * @example `[{"type":"","nodePath":"/localfiles","mountPath":"/app/files"},{"type":"Directory","nodePath":"/mnt","mountPath":"/app/storage"}]`
     */
    "LocalVolume"?: string;
    /**
     * K8s集群的命名空间，它将决定您的应用部署在哪个K8s命名空间。默认为default。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * EDAS命名空间对应ID，非默认命名空间须填写。
     * @example `cn-shenzhen:beta****`
     */
    "LogicalRegionId"?: string;
    /**
     * 应用包类型。可选参数值包含：FatJar、WAR和Image。
     * @example `WAR`
     */
    "PackageType"?: string;
    /**
     * 部署包地址。通过FatJar或WAR包部署的应用需要配置部署包地址。
     * > EDAS POP API的Java或者Python SDK需要2.44.0或以上版本。
     * @example `https://e***.oss-cn-beijing.aliyuncs.com/s***-1.0-SNAPSHOT-spring-boot.jar`
     */
    "PackageUrl"?: string;
    /**
     * 部署包的版本号，WAR和FatJar类型必填。请自定义它的含义。
     * > EDAS POP API的Java或者Python SDK需要2.44.0或以上版本。
     * @example `20200720`
     */
    "PackageVersion"?: string;
    /**
     * 部署的包依赖的JDK版本。可选的参数值为Open JDK 7、Open JDK 8或Custom OpenJDK。镜像部署方式不支持此参数。当使用Custom OpenJDK时，还需配置UserBaseImageUrl字段。
     * @example `Open JDK 8`
     */
    "JDK"?: string;
    /**
     * 部署包依赖的Tomcat版本。适用于通过WAR包部署的Spring Cloud和Dubbo应用，镜像不支持此参数。
     * @example `apache-tomcat-7.0.91`
     */
    "WebContainer"?: string;
    /**
     * 部署的包依赖的` EDAS-Container `版本。
     * > 使用镜像部署时不支持此参数。
     * @example `3.5.9`
     */
    "EdasContainerVersion"?: string;
    /**
     * URI编码方式，支持ISO-8859-1、GBK、GB2312和UTF-8。
     * > 应用配置不设置该参数，使用Tomcat默认值。
     * @example `GBK`
     */
    "UriEncoding"?: string;
    /**
     * useBodyEncodingForURI是否启用。
     * > 应用配置不设置该参数，使用默认值false。
     * @example `false`
     */
    "UseBodyEncoding"?: boolean;
    /**
     * 应用创建时，应用实例的CPU限额，单位：毫核数。
     * @example `500`
     */
    "RequestsmCpu"?: number;
    /**
     * 应用运行过程中，应用实例的CPU限额。 单位：毫核数，设置为0表示不限制。
     * @example `1000`
     */
    "LimitmCpu"?: number;
    /**
     * 容器运行时类型，仅适用于使用安全沙箱容器的集群。
     * @example `runc`
     */
    "RuntimeClassName"?: string;
    /**
     * 是否将应用实例分布到多可用区。`true`代表是，其他值为否。
     * @example `true`
     */
    "DeployAcrossZones"?: string;
    /**
     * 变更流程超时时间，单位：秒。取值范围为1~1800秒，不填默认为1800秒。
     * @example `60`
     */
    "Timeout"?: number;
    /**
     * 是否接入AHAS：
     *
     * - true：接入AHAS。
     * - false：不接入AHAS。
     * @example `true`
     */
    "EnableAhas"?: boolean;
    /**
     * Tomcat容器配置，设置为""或"{}"表示删除配置：
     * - useDefaultConfig：是否使用自定义配置，若为true，则表示不使用自定义配置，若为false，则表示使用自定义配置。若不使用自定义配置，则下面的参数配置将不会生效。
     * - contextInputType：选择应用的访问路径。
     *     - war：无需填写自定义路径，应用的访问路径是WAR包名称。
     *     - root：无需填写自定义路径，应用的访问路径是`/`。
     *     - custom：需要在下面的自定义路径中填写自定义的路径。
     * - contextPath：自定义路径，当contextInputType类型为custom时，才需要配置此参数。
     * - httpPort：端口范围为1024~65535，小于1024的端口需要Root权限才能操作。因为容器配置的是Admin权限，所以请填写大于1024的端口。如果不配置，则默认为8080。
     * - maxThreads：配置连接池的连接数大小，默认大小是400。
     *    > 此项配置对应用性能有很大影响，请由专业人士配置。
     * - uriEncoding：Tomcat的编码格式，包括UTF-8、ISO-8859-1、GBK和GB2312。如果不设置则默认为ISO-8859-1。
     * - useBodyEncoding：是否使用BodyEncoding for URL。
     * - useAdvancedServerXml：是否使用高级配置自定义设置server.xml文件，当上述参数类型和具体参数无法满足您的需求时，可以选中使用高级设置，直接对Tomcat的Server.xml文件进行编辑。
     * - serverXml：高级配置中自定义设置的server.xml文本文件内容，当useAdvancedServerXml为true时生效。
     * @example `{"useDefaultConfig":false,"contextInputType":"custom","contextPath":"hello","httpPort":8088,"maxThreads":400,"uriEncoding":"UTF-8","useBodyEncoding":true,"useAdvancedServerXml":false}`
     */
    "WebContainerConfig"?: string;
    /**
     * Java启动参数用于在Java应用启动时配置启动参数。可配置：内存配置、应用、GC策略、工具、服务注册和发现配置和自定义等配置，正确配置这些参数有助于降低垃圾回收（GC）开销，从而缩短服务器响应时间并提高吞吐量。参数格式为JSON字符串：original为配置值，startup为启动参数，系统将自动拼接所有的startup作为应用程序的Java启动参数。设置为`""`或`"{}"`表示删除配置。JSON中key取值如下：
     * - InitialHeapSize：代表初始化堆大小。
     * - MaxHeapSize：代表最大堆大小。
     * - CustomParams：代表用户自定义内容，如JVM -D参数等。
     * - 其它情况：可自行查看前端提交的JSON结构。
     * @example `{"InitialHeapSize":{"original":512,"startup":"-Xms512m"},"MaxHeapSize":{"original":1024,"startup":"-Xmx1024m"},"CustomParams":{"original":"-Dcustom.property.sample=false","startup":"-Dcustom.property.sample=false"}}`
     */
    "JavaStartUpConfig"?: string;
    /**
     * Logstore配置，设置为`""`或`"{}"`表示删除配置：
     * - Configs：
     *     - type：采集类型，文件类型为file，标准输出类型为stdout。
     *     - Logstore：Logstore名称。请确保Logstore名称在同一个集群中不重复，其命名应符合规则。
     *         - 日志库名称仅支持小写字母、数字、短划线（-）和下划线（_）。
     *         - 必须以小写字母和数字开头和结尾。
     *         - 名称长度为3~63个字符。若为空，则由系统自动生成。
     *     - LogDir：若为标准输出类型，则采集路径为stdout.log，若为文件类型，则为采集的文件路径，支持通配，采集路径应符合正则：`^/(.+)/(.*)^/$`。
     * @example `[{"logstore":"thisisanotherfilelog","type":"file","logDir":"/var/log/*"},{"logstore":"","type":"stdout","logDir":"stdout.log"},{"logstore":"thisisafilelog","type":"file","logDir":"/tmp/log/*"}]`
     */
    "SlsConfigs"?: string;
    /**
     * 是否为多语言应用。
     * @example `true`
     */
    "IsMultilingualApp"?: boolean;
    /**
     * 是否将应用实例分布到多个节点。`true`代表是，其他值为否。
     * @example `true`
     */
    "DeployAcrossNodes"?: string;
    /**
     * 配置K8s PVC（PersistentVolumeClaim）挂载，支持将K8s PVC卷挂载到指定的容器目录。PvcMountDescs的配置参数说明如下：
     * - pvcName：PVC卷名称，PVC卷必须已经存在，且处于Bound状态。
     * -  mountPaths：挂载目录列表，支持配置多个挂载目录。每个挂载目录支持两个配置参数。
     *     * mountPath：挂载路径，以正斜线（/）开头的容器绝对路径。
     *     * readOnly：挂载模式，true为只读，false为可读写，默认为false。
     * @example `[{"pvcName":"nas-pvc-1","mountPaths":[{"mountPath":"/usr/share/nginx/data"},{"mountPath":"/usr/share/nginx/html","readOnly":true}]}]`
     */
    "PvcMountDescs"?: string;
    /**
     * 配置K8s ConfigMap和Secret挂载，支持将ConfigMap和Secret挂载到指定的容器目录。ConfigMountDescs的配置参数说明如下：
     * - name：ConfigMap或Secret的名称。
     * - type：配置类型，支持ConfigMap和Secret两种类型。
     * - mountPath：挂载路径，以正斜线（/）开头的容器绝对路径。
     * @example `[{"name":"nginx-config","type":"ConfigMap","mountPath":"/etc/nginx"},{"name":"tls-secret","type":"secret","mountPath":"/etc/ssh"}]`
     */
    "ConfigMountDescs"?: string;
    /**
     * 只有在用户使用一个从未导入的集群来创建应用时，才需要指定csClusterId。
     * @example `abcdefg`
     */
    "CsClusterId"?: string;
    /**
     * 只有在用户使用一个从未导入的集群来创建应用，同时开启ASM时，才需要设置这个值为true。
     * @example `false`
     */
    "EnableAsm"?: boolean;
    /**
     * 配置K8s EnvFrom类型的环境变量，将指定的ConfigMap或Secret挂载到指定目录，每个key对应目录下的一个文件，文件的内容为该key对应的value。
     * EnvFroms的配置参数说明如下：
     *  - configMapRef：ConfigMap引用，该字段包括以下参数：
     *     - name：ConfigMap名称。
     * - secretRef：Secret引用，该字段包括以下参数：
     *     - name：Secret名称。
     * @example `[{"name":"appname","valueFrom":{"configMapKeyRef":{"name":"appconf","key":"name"}}}]`
     */
    "EnvFroms"?: string;
    /**
     * 配置K8s emptyDir挂载，支持将emptyDir卷挂载到指定的容器目录。EmptyDirs的配置参数说明如下：
     * - mountPath：容器挂载路径，必填。
     * - readOnly：是否只读，可选，true为只读，false为读写，默认为false。
     * - subPathExpr：子目录表达式，可选。
     * @example `[{"mountPath":"/app-log","subPathExpr":"$(POD_IP)"},{"readOnly":true,"mountPath":"/etc/nginx"}]`
     */
    "EmptyDirs"?: string;
    /**
     * 配置`edas container`版本，与`edasContainerVersion`字段冲突。建议使用`edasContainerVersion`字段。
     * @example `-1`
     */
    "BuildPackId"?: string;
    /**
     * 自定义关联。
     * @example `demo`
     */
    "CustomAffinity"?: string;
    /**
     * 自定义公差。
     * @example `demo`
     */
    "CustomTolerations"?: string;
    /**
     * 资源组ID。
     * @example `461`
     */
    "ResourceGroupId"?: string;
    /**
     * 应用Pod注解。
     * @example `{"annotation-name-1":"annotation-value-1","annotation-name-2":"annotation-value-2"}`
     */
    "Annotations"?: string;
    /**
     * 应用Pod标签。
     * @example `{"label-name-1":"label-value-1","label-name-2":"label-value-2"}`
     */
    "Labels"?: string;
    /**
     * 是否开启推空保护：
     * - true：开启推空保护。
     * - false：不开启推空保护。
     * @example `false`
     */
    "EnableEmptyPushReject"?: boolean;
    /**
     * 是否启用无损上线规则：
     * - true：启用无损上线规则。
     * - false：不启用无损上线规则。
     * @example `true`
     */
    "EnableLosslessRule"?: boolean;
    /**
     * 服务预热时长，单位：秒。取值范围为0~86400秒。
     * @example `120`
     */
    "LosslessRuleWarmupTime"?: number;
    /**
     * 服务延迟注册时长，单位：秒。取值范围为0~86400秒。
     * @example `0`
     */
    "LosslessRuleDelayTime"?: number;
    /**
     * 服务预热曲线。取值范围0~20。默认为2（适合于一般预热场景），表示在预热周期内服务提供者的流量接收曲线形状呈2次曲线形状。
     * @example `2`
     */
    "LosslessRuleFuncType"?: number;
    /**
     * 是否启用无损滚动发布模式配置通过就绪检查前完成服务注册：
     * - true：打开开关会为应用无侵入提供55199端口和/health路径的健康检查方式，当完成服务注册后，该接口返回200，否则返回500。
     *     > 若同时配置`LosslessRuleRelated`为`true`，则该接口检查是否完成服务预热。
     * - false：不为应用提供检查是否完成服务注册的接口。
     * @example `false`
     */
    "LosslessRuleAligned"?: boolean;
    /**
     * 是否启用无损滚动发布模式配置通过就绪检查前完成服务预热：
     * - true：打开开关会为应用无侵入提供55199端口和/health路径的健康检查方式，当完成服务预热后，该接口返回200，否则返回500。
     * - false：不为应用提供检查是否完成服务预热的接口。
     * @example `false`
     */
    "LosslessRuleRelated"?: boolean;
    /**
     * K8s服务Service配置。
     * @example `[{"name": "test-svc-create","serviceType":"ClusterIP","portMappings":[{"servicePort": {"targetPort":8080,"port":80,"protocol":"TCP"}}]}]`
     */
    "ServiceConfigs"?: string;
    /**
     * 创建应用使用的应用模版名称，若创建应用时指定应用模版，则将优先使用应用模版和AppConfig参数确定应用配置，忽略其他配置。
     * @example `app-template001`
     */
    "AppTemplateName"?: string;
    /**
     * 使用应用模版时的应用配置，JSON格式字符串。
     * @example `{}`
     */
    "AppConfig"?: string;
    /**
     * 临时存储资源需求上限，单位：GB。设置0表示不限制。
     * @example `4`
     */
    "LimitEphemeralStorage"?: number;
    /**
     * 临时存储最小资源需求，单位：GB。设置0表示不限制。
     * @example `2`
     */
    "RequestsEphemeralStorage"?: number;
    /**
     * 用户指定的镜像拉取凭证名，需要自行创建相关Secret配置。
     * @example `edas-app-01-image-secret`
     */
    "SecretName"?: string;
    /**
     * 构建镜像仓库使用的仓库ID，留空表示使用EDAS提供的默认仓库。当前只支持EDAS提供的默认仓库。
     * @example `留空`
     */
    "ContainerRegistryId"?: string;
    /**
     * 创建应用时Workload的类型，目前仅支持Deployment类型。
     * @example `Deployment`
     */
    "WorkloadType"?: string;
    /**
     * 为应用Pod设置Sidecar容器。支持设置容器配置的格式YAML，其值为Sidecar容器YAML配置base64编码后的值。
     * @example `[{"yamlEncoded":"Y29tbWFuZDoKICAtIHRhaWwKICAtICctZicKICAtIC9kZXYvbnVsbAppbWFnZTogJ2J1c3lib3g6bGF0ZXN0JwpuYW1lOiBidXN5Ym94Cg=="}]`
     */
    "Sidecars"?: string;
    /**
     * 为应用Pod设置初始化容器。支持设置容器配置的格式YAML，其值为Init容器YAML配置base64编码后的值。
     * @example `[
          {
                "yamlEncoded": "Y29tbWFuZDoKICAtIHNsZWVwCiAgLSAnNjAnCmltYWdlOiAnYnVzeWJveDpsYXRlc3QnCm5hbWU6IGluaXQtYnVzeWJveAo="
          }
    ]`
     */
    "InitContainers"?: string;
    /**
     * 使用自定义JDK运行时，需要配置基础镜像地址。该地址需要可公开访问，EDAS服务端会拉取该镜像，用于构建应用镜像。
     * @example `openjdk:8u302`
     */
    "UserBaseImageUrl"?: string;
    /**
     * 设置应用优雅停止超时时间。单位：秒。
     * @example `120`
     */
    "TerminateGracePeriod"?: number;
    /**
     * 镜像目标平台架构，当使用war、jar部署时有效，输入样例：
     * - 指定x86 64架构：linux/amd64
     * - 指定arm 64架构：linux/arm64
     * - 指定构建双架构镜像：linux/amd64,linux/arm64
     * - 不输入：默认架构
     */
    "ImagePlatforms"?: string;
    /**
     * 启动探针可以用于对慢启动容器进行存活性检测，避免它们在启动运行之前就被杀掉，格式如：{"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"httpGet": {"path": "/consumer","port": 8080,"scheme": "HTTP","httpHeaders": \[{"name": "test","value": "testvalue"}\]}}。
     * 如果设置为""或者{}表示删除，不设置表示忽略。
     * @example `{"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"tcpSocket":{"host":"", "port":8080}}`
     */
    "Startup"?: string;
    "FeatureConfig"?: string;
    "CustomAgentVersion"?: string;
}
