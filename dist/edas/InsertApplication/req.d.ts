export interface InsertApplicationRequest {
    /**
     * ECS集群ID。ECS集群ID不为空，则为指定的ECS集群创建应用，为空则为默认集群创建应用（推荐指定）。
     * @example `13136119-f384-4f50-b76e-xxxxxxxxxxx`
     */
    "ClusterId"?: string;
    /**
     * EDAS-Container构建包号，当创建HSF应用时，该参数必须指定。有以下两种获取方式：
     * - 通过容器版本列表接口ListBuildPack获取，请参见[ListBuildPack](~~149391~~)。
     * - 在参见[容器版本](~~92614~~)表格中的**构建包序号**列获取。
     * @example `59`
     */
    "BuildPackId"?: number;
    /**
     * 应用描述信息。
     * @example `create by edas pop api`
     */
    "Description"?: string;
    /**
     * 应用名称。仅允许使用数字、英文字母、短划线（-）和下划线（_） ，而且必须以英文字母开头，最长36个字符。
     * @example `hello-edas-test-1`
     */
    "ApplicationName": string;
    /**
     * **（废弃参数）**应用预留端口号。
     * @example `8090`
     */
    "ReservedPortStr"?: string;
    /**
     * 需要扩容的ECS实例的`ecu_id`（导入EDAS的ECS实例在EDAS中的唯一身份），多个`ecu_id`用英文逗号（,）分开。`ecu_id`可通过查询ListScaleOutEcu接口获取，请参见[ListScaleOutEcu](~~149371~~)。
     * @example `07bd417a-b863-477d-****-************`
     */
    "EcuInfo"?: string;
    /**
     * **（废弃参数）**Swarm集群应用容器CPU核数。
     * @example `2`
     */
    "Cpu"?: number;
    /**
     * **（废弃参数）**Swarm集群应用容器Memory大小。
     * @example `2048`
     */
    "Mem"?: number;
    /**
     * 应用健康检查URL。
     * @example `http://127.0.0.1:8080/_ehc.html`
     */
    "HealthCheckURL"?: string;
    /**
     * 微服务空间ID，您可在EDAS控制台左侧菜单栏选择**资源管理** > **微服务空间**，找到目标微服务空间对应的微服务空间ID，也可通过ListUserDefineRegion接口获取到微服务空间ID，请参见[ListUserDefineRegion](~~149377~~)。
     *
     * - 如果指定的集群不在默认微服务空间下，则需要指定该参数，否则会遇到`application regionId is different with cluster regionId!`的错误提示。
     * - 如果在默认微服务空间下，则不需要指定。该参数需要与指定的集群ID所在的微服务空间保持一致。
     * @example `cn-beijing:prod`
     */
    "LogicalRegionId"?: string;
    /**
     * **（废弃参数）**  用来指定应用使用的JDK版本。
     * @example `8`
     */
    "Jdk"?: string;
    /**
     * **（废弃参数）** 用于指定Apache Tomcat版本。
     * @example `4`
     */
    "WebContainer"?: string;
    /**
     * 应用部署包格式，可设置为war或者jar。
     * @example `war`
     */
    "PackageType"?: string;
    /**
     * 应用组件ID。可通过查询组件列表接口ListComponents接口获取，请参见[ListComponents](~~97502~~)。
     * 当创建的应用运行环境使用Apache Tomcat（适用于WAR包部署的Dubbo应用）或者标准Java应用运行环境（适用于JAR包部署的Spring Boot或Spring Cloud应用）时需要指定。
     * 常用的应用组件ID及含义：
     * - 4：Apache Tomcat 7.0.91
     * - 7：Apache Tomcat 8.5.42
     * - 5：表示OpenJDK 1.8.x
     * - 6：表示 OpenJDK 1.7.x
     * 该参数需要更新Java或者Python SDK版本到2.57.3或以上版本才可以设置，未使用EDAS提供的SDK的（例如在使用aliyun-python-sdk-core、aliyun-java-sdk-core、aliyun cli等）用户可直接设置该参数。
     * @example `7`
     */
    "ComponentIds"?: string;
    /**
     * 挂载脚本配置，为一段JSON格式文本，如：
     * `[{"ignoreFail":false,"name":"postprepareInstanceEnvironmentOnScaleOut","script":"ls"},{"ignoreFail":true,"name":"postdeleteInstanceDataOnScaleIn","script":""},{"ignoreFail":true,"name":"prestartInstance","script":""},{"ignoreFail":true,"name":"poststartInstance","script":""},{"ignoreFail":true,"name":"prestopInstance","script":""},{"ignoreFail":true,"name":"poststopInstance","script":""}]`
     * @example `[{"ignoreFail":false,"name":"postprepareInstanceEnvironmentOnScaleOut","script":"ls"}]`
     */
    "Hooks"?: string;
    /**
     * 自定义参数。
     * @example `-Dproperty=value`
     */
    "JvmOptions"?: string;
    /**
     * 初始化堆内存大小，单位M。
     * @example `500`
     */
    "MinHeapSize"?: number;
    /**
     * 持久代内存大小，单位M。
     * @example `200`
     */
    "MaxPermSize"?: number;
    /**
     * 最大堆内存大小，单位M。
     * @example `1000`
     */
    "MaxHeapSize"?: number;
    /**
     * 是否启用健康检查URL，取值如下：
     * - **true**：启用
     * - **false**：不启用
     * @example `true`
     */
    "EnableUrlCheck"?: boolean;
    /**
     * 是否启用端口健康检查，取值如下：
     * - **true**：启用
     * - **false**：不启用
     * @example `true`
     */
    "EnablePortCheck"?: boolean;
    /**
     * 应用健康检查URL（等价于HealthCheckURL参数）。
     * @example `http://127.0.0.1:8080/_ehc.html`
     */
    "HealthCheckUrl"?: string;
    /**
     * 资源组ID。
     * @example `rg-aek24j4s4b*****`
     */
    "ResourceGroupId"?: string;
}
