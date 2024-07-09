export interface DeployK8sApplicationRequest {
    /**
     * 停止前执行脚本，示例格式：`{"tcpSocket":{"host":"", "port":8080}}`。
     * 如果设置为`{}`代表删除，不设置表示忽略。
     * @example `{
        "exec":{
            "command":[
                "ls",
                "/"
            ]
        }
    }`
     */
    "PreStop"?: string;
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
     * 镜像Tag。
     * @example `latest`
     */
    "ImageTag"?: string;
    /**
     * Pod分批发布的最小间隔时间，详细信息请参见[minReadySeconds](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#min-ready-seconds)。
     * @example `0`
     */
    "BatchWaitTime"?: number;
    /**
     * 容器启动命令。
     * > 如果要取消该配置，需设置一个空字符串`""`来表示不做配置。
     * @example `ls`
     */
    "Command"?: string;
    /**
     * 应用ID，可通过调用ListApplication接口获取，详情请参见[ListApplication](~~149390~~)。
     * @example `e83acea6-****-47e1-96ae-c0e953772cdc`
     */
    "AppId": string;
    /**
     * 启动后执行脚本，格式如：`{"exec":{"command":\["cat","/etc/group"\]}}`。如果设置为`{}`表示删除，不设置表示忽略。
     * @example `{
        "exec":{
            "command":[
                "ls",
                "/"
            ]
        }
    }`
     */
    "PostStart"?: string;
    /**
     * 容器业务状态检查，如果检查失败，经过K8s service的流量将不转入到该容器，格式如：`{"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"httpGet": {"path": "/consumer","port": 8080,"scheme": "HTTP","httpHeaders": \[{"name": "test","value": "testvalue"}\]}}`。如果设置为`""`或者`{}`表示删除，不设置表示忽略。
     * @example `{"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"httpGet": {"path": "/consumer","port": 8080,"scheme": "HTTP","httpHeaders": [{"name": "test","value": "testvalue"}]}}`
     */
    "Readiness"?: string;
    /**
     * 容器存活状态监测，格式如`{"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"tcpSocket":{"host":"", "port":8080}}`。如果设置为`""`或者`{}`表示删除，不设置表示忽略。
     * @example `{"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"tcpSocket":{"host":"", "port":8080}}`
     */
    "Liveness"?: string;
    /**
     * 容器启动Args命令参数，格式必须符合JSON数组`\["参数1","参数2"\]`，其中key固定为字符串，清空需设置为空JSON数组`"\[\]"`。
     * @example `["args1","args2"]`
     */
    "Args"?: string;
    /**
     * 应用实例数，最小为0。
     * @example `1`
     */
    "Replicas"?: number;
    /**
     * 镜像完整URL，覆盖镜像Tag参数。
     * @example `registry-vpc.cn-beijing.aliyuncs.com/t****​/app:v1`
     */
    "Image"?: string;
    /**
     * 应用运行过程中，应用实例的CPU限制。 单位：核数，设置为0表示不限制。
     * @example `1`
     */
    "CpuLimit"?: number;
    /**
     * 应用运行过程中，应用实例的内存限制。单位：MB，设置为0表示不限制。
     * @example `0`
     */
    "MemoryLimit"?: number;
    /**
     * 应用运行过程中，应用实例需要申请的CPU配额，推荐设置。
     * 单位：核数，设置为0表示不限制。
     * > 设置该参数时，还需要设置CpuLimit参数，且需要小于等于CpuLimit的参数值。
     * @example `0`
     */
    "CpuRequest"?: number;
    /**
     * 应用运行过程中，应用实例需要申请的内存配额，推荐设置。单位：MB。设置为0表示不申请。
     * > 设置该参数时，还需要设置MemoryLimit参数，且需要小于等于MemoryLimit的参数值。
     * @example `0`
     */
    "MemoryRequest"?: number;
    /**
     * 挂载的NAS的ID，必须与集群在同一个地域。它必须有可用的挂载点创建额度，或者它的挂载点已经在VPC内的交换机上。如果不填，且存在mountDescs字段，则默认将自动购买一个NAS并挂载到VPC内的交换机上。
     * @example `dfs23****`
     */
    "NasId"?: string;
    /**
     * 挂载配置描述，为一个序列化的JSON。例如：`\[{"nasPath": "/k8s","mountPath": "/mnt"},{"nasPath": "/files","mountPath": "/app/files"}\]`。其中，nasPath是指文件储存路径；mountPath是指挂载到容器内的路径。
     * @example `[{"nasPath": "/k8s","mountPath": "/mnt"},{"nasPath": "/files","mountPath": "/app/files"}]`
     */
    "MountDescs"?: string;
    /**
     * NAS存储类型，包括：
     * * 通用型NAS：Capacity（容量型）、Performance（性能型）
     * * 极速型NAS：standard（标准型）、advance（高级型）
     * 目前只支持Performance类型。
     * @example `Performance`
     */
    "StorageType"?: string;
    /**
     * 宿主机文件挂载到容器内的配置。例如：`\[{"type":"","nodePath":"/localfiles","mountPath":"/app/files"},{"type":"Directory","nodePath":"/mnt","mountPath":"/app/storage"}\]`。其中，nodePath为宿主机路径；mountPath为容器内的路径；type为挂载类型。
     * @example `[{"type":"","nodePath":"/localfiles","mountPath":"/app/files"},{"type":"Directory","nodePath":"/mnt","mountPath":"/app/storage"}]`
     */
    "LocalVolume"?: string;
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
     * 部署包依赖的EDAS Container版本。适用于通过WAR包部署的HSF应用，镜像不支持此参数。
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
     * 分批发布策略
     * - 例1：灰度1台+后续分2批+自动分批+分批间隔1分钟。
     * `{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":1},"grayUpdate":{"gray":1}}`
     * - 例2：灰度1台+后续分2批+手动分批。
     * `{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"manual"},"grayUpdate":{"gray":1}}`
     * - 例3：分2批+自动分批+分批间隔0分钟。
     * `{"type":"BatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":0}}`
     * @example `{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":1},"grayUpdate":{"gray":1}}`
     */
    "UpdateStrategy"?: string;
    /**
     * CPU最小资源需求，单位：核数。设置为0表示不限制。
     * > 设置该参数时，还需要设置CpuLimit参数，且需要小于等于CpuLimit的参数值。
     * @example `4`
     */
    "McpuRequest"?: number;
    /**
     * CPU能使用的最大值，单位：核数。设置为0表示不做限制。
     * @example `0`
     */
    "McpuLimit"?: number;
    /**
     * 数据卷。
     * @example `test`
     */
    "VolumesStr"?: string;
    /**
     * 部署包版本ID。
     * @example `2bcc********`
     */
    "PackageVersionId"?: string;
    /**
     * 变更记录描述。
     * @example `升级`
     */
    "ChangeOrderDesc"?: string;
    /**
     * 容器运行时类型：
     * * runc：普通容器运行时。
     * * runv：安全沙箱容器。
     * 该参数仅适用于使用安全沙箱容器的集群。
     * @example `runc`
     */
    "RuntimeClassName"?: string;
    /**
     * 是否将应用实例分布到多可用区。true为是，其他值为否。
     * @example `true`
     */
    "DeployAcrossZones"?: string;
    /**
     * 单批发布超时时间，单位：秒。
     * @example `60`
     */
    "BatchTimeout"?: number;
    /**
     * 是否接入AHAS。
     * @example `true`
     */
    "EnableAhas"?: boolean;
    /**
     * Tomcat容器配置，设置为`""`或`"{}"`表示删除配置：
     * - useDefaultConfig：是否使用自定义配置，若为true，则表示不使用自定义配置，若为false，则表示使用自定义配置。若不使用自定义配置，则下面的参数配置将不会生效。
     * - contextInputType：选择应用的访问路径。
     *     - war：无需填写自定义路径，应用的访问路径是WAR包名称。
     *     - root：无需填写自定义路径，应用的访问路径是/。
     *     - custom：需要在下面的自定义路径中填写自定义的路径。
     * - contextPath：自定义路径，当contextInputType类型为custom时，才需要配置此参数。
     * - httpPort：端口范围为1024~65535，小于1024的端口需要Root权限才能操作。因为容器配置的是Admin权限，所以请填写大于1024的端口。如果不配置，则默认为8080。
     * - maxThreads：配置连接池的连接数大小，默认大小是400。
     *
     *   > 此项配置对应用性能有很大影响，请由专业人士配置。
     * - uriEncoding：Tomcat的编码格式，包括UTF-8、ISO-8859-1、GBK和GB2312。如果不设置则默认为ISO-8859-1。
     * - useBodyEncoding：是否使用BodyEncoding for URL。
     * - useAdvancedServerXml：是否使用高级配置自定义设置`server.xml`文件，当上述参数类型和具体参数无法满足您的需求时，可以选中使用高级设置，直接编辑Tomcat的`Server.xml`文件。
     * - serverXml：高级配置中自定义设置的`server.xml`文本文件内容，当useAdvancedServerXml为true时生效。
     * @example `{"useDefaultConfig":false,"contextInputType":"custom","contextPath":"hello","httpPort":8088,"maxThreads":400,"uriEncoding":"UTF-8","useBodyEncoding":true,"useAdvancedServerXml":false}`
     */
    "WebContainerConfig"?: string;
    /**
     * Java启动参数用于在Java应用启动时配置启动参数。可配置：内存配置、应用、GC策略、工具、服务注册和发现配置和自定义等配置，正确配置这些参数有助于降低垃圾回收（GC）开销，从而缩短服务器响应时间并提高吞吐量。参数格式为JSON字符串：original为配置值，startup为启动参数，系统将自动拼接所有的startup作为应用程序的Java启动参数。设置为`""`或`"{}"`表示删除配置。
     * @example `{"InitialHeapSize":{"original":512,"startup":"-Xms512m"},"MaxHeapSize":{"original":1024,"startup":"-Xmx1024m"}}`
     */
    "JavaStartUpConfig"?: string;
    /**
     * Logstore配置，设置为`""`或`"{}"`表示删除配置：
     * - Configs：
     *     - type：采集类型，文件类型为file，标准输出类型为stdout。
     *     - Logstore：logstore名称。请确保Logstore名称在同一个集群中不重复，其命名应符合规则：
     *         - Logstore名称仅支持小写字母、数字、短划线（-）和下划线（_）。
     *         - 必须以小写字母和数字开头和结尾。
     *         - 名称长度为3~63个字符。若为空，则由系统自动生成。
     *     - LogDir：若为标准输出类型，则采集路径为stdout.log，若为文件类型，则为采集的文件路径，支持通配，采集路径应符合正则：`^/(.+)/(.*)^/$`。
     * @example `[{"logstore":"thisisanotherfilelog","type":"file","logDir":"/var/log/*"},{"logstore":"","type":"stdout","logDir":"stdout.log"},{"logstore":"thisisafilelog","type":"file","logDir":"/tmp/log/*"}]`
     */
    "SlsConfigs"?: string;
    /**
     * 是否将应用实例分布到多个节点。true为是，其他值为否。
     * @example `true`
     */
    "DeployAcrossNodes"?: string;
    /**
     * 灰度发布流量控制策略。
     * @example `{"http":{"rules":[{"conditionType":"percent","percent":10}]}}`
     */
    "TrafficControlStrategy"?: string;
    /**
     * 配置K8s PVC（PersistentVolumeClaim）挂载，支持将K8s PVC卷挂载到指定的容器目录。PvcMountDescs的配置参数说明如下：
     * - pvcName：PVC卷名称，PVC卷必须已经存在，且处于Bound状态。
     * -  mountPaths：挂载目录列表，支持配置多个挂载目录。每个挂载目录支持以下两个配置参数：
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
     * @example `[
          {
                "name": "nginx-config",
                "type": "ConfigMap",
                "mountPath": "/etc/nginx"
          },
          {
                "name": "tls-secret",
                "type": "Secret",
                "mountPath": "/etc/ssh"
          }
    ]`
     */
    "ConfigMountDescs"?: string;
    /**
     * 配置K8s EnvFrom类型的环境变量，将指定的ConfigMap或Secret挂载到指定目录，每个key对应目录下的一个文件，文件的内容为该key对应的value。
     * EnvFroms的配置参数说明如下。
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
     * Pod亲和性配置，当且仅当DeployAcrossNodes与DeployAcrossZones都为false时生效。
     * @example `{"nodeAffinity":{"requiredDuringSchedulingIgnoredDuringExecution":{"nodeSelectorTerms":[{"matchExpressions":[{"key":"beta.kubernetes.io/arch","operator":"NotIn","values":["arm64","arm32"]}]}]},"preferredDuringSchedulingIgnoredDuringExecution":[{"weight":5,"preference":{"matchExpressions":[{"key":"kubernetes.io/os","operator":"In","values":["linux"]}]}}]},"podAffinity":{"requiredDuringSchedulingIgnoredDuringExecution":[{"namespaces":["default"],"topologyKey":"kubernetes.io/hostname","labelSelector":{"matchExpressions":[{"key":"edas.oam.acname","operator":"NotIn","values":["edas-test-app"]}]}}]},"podAntiAffinity":{"preferredDuringSchedulingIgnoredDuringExecution":[{"podAffinityTerm":{"namespaces":["default"],"topologyKey":"failure-domain.beta.kubernetes.io/zone","labelSelector":{"matchExpressions":[{"key":"edas.oam.acname","operator":"In","values":["edas-test-app-2"]}]}},"weight":15}]}}`
     */
    "CustomAffinity"?: string;
    /**
     * Pod调度容忍配置，当且仅当DeployAcrossNodes与DeployAcrossZones都为false时生效。
     * @example `[{"key":"edas-taint-key2","operator":"Exists","effect":"NoExecute","tolerationSeconds":50},{"key":"edas-taint-key","operator":"Equal","value":"edas-taint-value","effect":"PreferNoSchedule"}]`
     */
    "CustomTolerations"?: string;
    /**
     * EDAS-Container构建包号：
     * - 如果部署时不需要更改EDAS-Container版本，则该参数可不设置。
     * - 如果需要在本次部署时，更新目标应用的EDAS-Container版本，则需要设置。
     * 有以下两种获取方式：
     * - 可通过查询容器版本列表接口ListBuildPack获取，请参见[ListBuildPack](~~423222~~)。
     * - 在[容器版本说明](~~92614~~)表格中的**构建包序号**列获取。例如`59`表示`EDAS-Container 3.5.8 版本`。
     * @example `59`
     */
    "BuildPackId"?: string;
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
     * > 若同时配置`LosslessRuleRelated`为true，则该接口检查是否完成服务预热。
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
     * 为应用Pod设置Sidecar容器。支持设置容器配置的格式YAML，其值为Sidecar容器YAML配置base64编码后的值。
     * @example `[
          {
                "yamlEncoded": "Y29tbWFuZDoKICAtIHRhaWwKICAtICctZicKICAtIC9kZXYvbnVsbAppbWFnZTogJ2J1c3lib3g6bGF0ZXN0JwpuYW1lOiBidXN5Ym94Cg=="
          }
    ]`
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
     * 金丝雀规则策略ID。
     * @example `a8daf22e-****-968c7ff2ea34`
     */
    "CanaryRuleId"?: string;
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
     * 启动探针可以用于对慢启动容器进行存活性检测，避免它们在启动运行之前就被杀掉，格式如：{"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"httpGet": {"path": "/consumer","port": 8080,"scheme": "HTTP","httpHeaders": [{"name": "test","value": "testvalue"}]}}。
     * 如果设置为""或者{}表示删除，不设置表示忽略。
     * @example `{"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"tcpSocket":{"host":"", "port":8080}}`
     */
    "Startup"?: string;
    /**
     * 设置应用挂载的自定义ArmsAgent探针版本。
     * > 该功能为白名单开放。如有需求，请提交工单申请加入白名单。
     * @example `3.1.4`
     */
    "CustomAgentVersion"?: string;
}
