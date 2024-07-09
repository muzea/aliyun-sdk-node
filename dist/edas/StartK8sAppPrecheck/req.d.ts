export interface StartK8sAppPrecheckRequest {
    /**
     * 集群ID。
     * @example `c37aec2a-bcca-4ec1-****-****`
     */
    "ClusterId": string;
    /**
     * K8s集群的命名空间，它将决定您的应用部署在哪个K8s命名空间。默认为default。
     * @example `default`
     */
    "Namespace": string;
    /**
     * 应用ID。
     * @example `af58edcf-f7eb-****-****-db4e425f****`
     */
    "AppId"?: string;
    /**
     * 应用名称。必须以字母开头，支持数字、字母和短划线（-），最多支持36个字符。
     * @example `testapp`
     */
    "AppName"?: string;
    /**
     * 应用实例数。
     * @example `2`
     */
    "Replicas"?: number;
    /**
     * 应用运行过程中，应用实例的CPU限额。 单位：毫核数，设置为0表示不限制。
     * @example `1000`
     */
    "LimitmCpu"?: number;
    /**
     * 应用创建时，应用实例的CPU限额，单位：毫核数。
     * @example `500`
     */
    "RequestsmCpu"?: number;
    /**
     * 应用运行过程中，应用实例的内存限额，单位：MB。LimitMem取值要不小于RequestsMem。
     * @example `4096`
     */
    "LimitMem"?: number;
    /**
     * 应用创建时，应用实例的内存限额，单位：MB。设置为0时表示不限制。RequestsMem的取值不能大于LimitMem的取值。
     * @example `1024`
     */
    "RequestsMem"?: number;
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
     * 配置K8s EnvFrom类型的环境变量，将指定的ConfigMap或Secret挂载到指定目录，每个key对应目录下的一个文件，文件的内容为该key对应的value。
     * EnvFroms的配置参数说明如下：
     *  - configMapRef：ConfigMap引用，该字段包括以下参数：
     *     name：ConfigMap名称。
     * - secretRef：Secret引用，该字段包括以下参数：
     *    name：Secret名称。
     * @example `[
          {
                "name": "appname",
                "valueFrom": {
                      "configMapKeyRef": {
                            "name": "appconf"
                      }
                }
          }
    ]`
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
     * Java启动参数用于在Java应用启动时配置启动参数。可配置：内存配置、应用、GC策略、工具、服务注册和发现配置和自定义等配置，正确配置这些参数有助于降低垃圾回收（GC）开销，从而缩短服务器响应时间并提高吞吐量。参数格式为JSON字符串：original为配置值，startup为启动参数，系统将自动拼接所有的startup作为应用程序的Java启动参数。设置为`""`或`"{}"`表示删除配置。JSON中key取值如下：
     * - InitialHeapSize：代表初始化堆大小。
     * - MaxHeapSize：代表最大堆大小。
     * - CustomParams：代表用户自定义内容，如JVM -D参数等。
     * - 其它情况：可自行查看前端提交的JSON结构。
     * @example `{"InitialHeapSize":{"original":512,"startup":"-Xms512m"},"MaxHeapSize":{"original":1024,"startup":"-Xmx1024m"}}`
     */
    "JavaStartUpConfig"?: string;
    /**
     * 配置K8s ConfigMap和Secret挂载，支持将ConfigMap和Secret挂载到指定的容器目录。ConfigMountDescs的配置参数说明如下：
     * - name：ConfigMap或Secret的名称。
     * - type：配置类型，支持ConfigMap和Secret两种类型。
     * - mountPath：挂载路径，以正斜线（/）开头的容器绝对路径。
     * @example `[{"name":"nginx-config","type":"ConfigMap","mountPath":"/etc/nginx"},{"name":"tls-secret","type":"secret","mountPath":"/etc/ssh"}]`
     */
    "ConfigMountDescs"?: string;
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
     * 镜像URL。
     * @example `registry.cn-hangzhou.aliyuncs.com/mw/testapp:latest`
     */
    "ImageUrl"?: string;
    /**
     * 部署包地址。
     * @example `https://e***.oss-cn-beijing.aliyuncs.com/s***-1.0-SNAPSHOT-spring-boot.jar`
     */
    "PackageUrl"?: string;
    /**
     * 宿主机文件挂载到容器内的配置。例如：`\[{"type":"","nodePath":"/localfiles","mountPath":"/app/files"},{"type":"Directory","nodePath":"/mnt","mountPath":"/app/storage"}\]`。其中：
     * - `nodePath`为宿主机路径。
     * - `mountPath`为容器内的路径。
     * - `type`为挂载类型。
     * @example `[{"type":"","nodePath":"/localfiles","mountPath":"/app/files"},{"type":"Directory","nodePath":"/mnt","mountPath":"/app/storage"}]`
     */
    "LocalVolume"?: string;
    /**
     * 阿里云地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 应用组件ID。可通过查询组件列表接口ListComponents接口获取。当创建的应用运行环境使用Apache Tomcat（适用于WAR包部署的Dubbo应用）或者标准Java应用运行环境（适用于JAR包部署的Spring Boot或Spring Cloud应用）时需要指定。
     * 常用的应用组件ID及含义：
     * * 4：Apache Tomcat 7.0.91。
     * * 5：表示OpenJDK 1.8.x。
     * * 6：表示 OpenJDK 1.7.x。
     * * 7：Apache Tomcat 8.5.42。
     * 该参数需要更新Java或者Python SDK版本到2.57.3或以上版本才可以设置，未使用EDAS提供的SDK的（例如在使用aliyun-python-sdk-core、aliyun-java-sdk-core、aliyun cli等）用户可直接设置该参数。
     * @example `7`
     */
    "ComponentIds"?: string;
}
