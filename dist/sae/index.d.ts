interface SAE {
    /**
    * 查询变更单信息
    */ DescribeChangeOrder(query: {
        "RegionId"?: string;
        /**
        * 变更单ID
        * @example `76fa5c0-9ebb-4bb4-b383-1f885447b109`
        */ "ChangeOrderId": string;
    }): Promise<{}>;
    /**
    * 重启应用
    */ RestartApplication(query: {
        "RegionId"?: string;
        /**
        * 目标应用ID
        * @example `0099b7be-5f5b-4512-a7fc-56049ef1aa6b`
        */ "AppId": string;
        /**
        * 最小可用实例数。在变更期间保证可用的实例数。
        * @example `1`
        */ "MinReadyInstances"?: number;
    }): Promise<{}>;
    /**
    * 获取变更单列表
    */ ListChangeOrders(query: {
        "RegionId"?: string;
        /**
        * 应用ID
        * @example `145341c-9708-4967-b3ec-24933767fd44`
        */ "AppId": string;
        /**
        * 当前分页
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 分页大小
        * @example `20`
        */ "PageSize"?: number;
        /**
        * 模糊查询值
        * @example `test`
        */ "Key"?: string;
        /**
        * 变更单类型
        * @example `CoCreateApp`
        */ "CoType"?: string;
        /**
        * 0：准备 1：执行中 2：执行成功 3：执行失败 6：终止 10：系统异常执行失败
        * @example `2`
        */ "CoStatus"?: string;
    }): Promise<{}>;
    /**
    * 获取应用实例规格信息
    */ DescribeInstanceSpecifications(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    /**
    * 中止变更单
    */ AbortChangeOrder(query: {
        "RegionId"?: string;
        /**
        * 变更单ID
        * @example `xxx-xxxx-xxx-xxx`
        */ "ChangeOrderId": string;
    }): Promise<{}>;
    /**
    * 中止或回滚变更单
    */ AbortAndRollbackChangeOrder(query: {
        "RegionId"?: string;
        /**
        * 变更单ID
        * @example `xxx-xxxx-xxx-xxxx`
        */ "ChangeOrderId": string;
    }): Promise<{}>;
    /**
    * 获取命名空间列表
    */ DescribeNamespaceList(query: {
        "RegionId"?: string;
        /**
        * 是否返回自定义命名空间
        * @example `true`
        */ "ContainCustom"?: boolean;
        /**
        * 是否排除混合云命名空间
        * @example `true`
        */ "HybridCloudExclude"?: boolean;
    }): Promise<{}>;
    /**
    * 应用扩缩
    */ RescaleApplication(query: {
        "RegionId"?: string;
        /**
        * 目标应用ID
        * @example `0099b7be-5f5b-4512-a7fc-56049ef1aa6b`
        */ "AppId": string;
        /**
        * 目标实例数
        * @example `2`
        */ "Replicas": number;
    }): Promise<{}>;
    /**
    * 是否开始一下批次
    */ ConfirmPipelineBatch(query: {
        "RegionId"?: string;
        /**
        * 批次 ID
        * @example `xxx-xxx-xxx-xxx`
        */ "PipelineId": string;
        /**
        * 是否开始下一批次
        * @example `true`
        */ "Confirm": boolean;
    }): Promise<{}>;
    /**
    * 停止应用
    */ StopApplication(query: {
        "RegionId"?: string;
        /**
        * 目标应用ID
        * @example `0099b7be-5f5b-4512-a7fc-56049ef1aa6b`
        */ "AppId": string;
    }): Promise<{}>;
    /**
    * 启动应用
    */ StartApplication(query: {
        "RegionId"?: string;
        /**
        * 目标应用ID
        * @example `0099b7be-5f5b-4512-a7fc-56049ef1aa6b`
        */ "AppId": string;
    }): Promise<{}>;
    /**
    * 删除应用
    */ DeleteApplication(query: {
        "RegionId"?: string;
        /**
        * 要删除的应用ID
        * @example `017f39b8-dfa4-4e16-a84b-1dcee4b17106`
        */ "AppId": string;
    }): Promise<{}>;
    /**
    * 改变应用实例规格
    */ RescaleApplicationVertically(query: {
        "RegionId"?: string;
        /**
        * 目标应用ID
        * @example `0099b7be-5f5b-4512-a7fc-56049ef1aa6b`
        */ "AppId": string;
        /**
        * 目标CPU规格，单位毫核。目前只支持有限几种规格。
        * @example `1000`
        */ "Cpu": string;
        /**
        * 目标memory规格，单位MB。目前只支持有限几种规格。
        * @example `2048`
        */ "Memory": string;
    }): Promise<{}>;
    /**
    * 解绑内网或公网SLB
    */ UnbindSlb(query: {
        "RegionId"?: string;
        /**
        * 目标应用ID
        * @example `0099b7be-5f5b-4512-a7fc-56049ef1aa6b`
        */ "AppId": string;
        /**
        * 是否解绑公网SLB
        * @example `true`
        */ "Internet"?: boolean;
        /**
        * 是否解绑私网SLB
        * @example `true`
        */ "Intranet"?: boolean;
    }): Promise<{}>;
    /**
    * 创建一个SAE应用
    */ CreateApplication(query: {
        "RegionId"?: string;
        /**
        * 应用名称。允许数字，字母以及中划线组合。必须字母打头，最大长度36个字符
        * @example `test-app`
        */ "AppName": string;
        /**
        * EDAS命名空间对应ID。只支持名称为小写字母加中划线的命名空间，必须以字母开头。命名空间可从DescribeNamespaceList接口获取。
        * @example `cn-beijing:test`
        */ "NamespaceId": string;
        /**
        * 应用包类型。支持FatJar、War、Image。
        * @example `FatJar`
        */ "PackageType": string;
        /**
        * 初始实例数。
        * @example `1`
        */ "Replicas": number;
        /**
        * 应用描述信息。不超过1024个字符
        * @example `This is a test description.`
        */ "AppDescription"?: string;
        /**
        * EDAS命名空间对应的VPC。在serverless中，一个命名空间只能对应一个VPC，且不能修改。第一次在命名空间内创建Serverless应用将形成绑定关系。多个命名空间可以对应一个VPC。不填则为命名空间绑定的VpcId。
        * @example `vpc-xxxxxxxxxxxxxxxxxxx`
        */ "VpcId"?: string;
        /**
        * 应用实例弹性网卡所在的虚拟交换机。该交换机必须位于上述VPC内。该交换机与EDAS命名空间同样存在绑定关系。不填则为命名空间绑定的VSwitchId。
        * @example `vsw-xxxxxxxxxxxxxxxxxxx`
        */ "VSwitchId"?: string;
        /**
        * 部署的包的版本号，War FatJar类型必填。请自定义它的含义。
        * @example `1.0.0`
        */ "PackageVersion"?: string;
        /**
        * 部署包地址。只有FatJar或War类型应用可以配置部署包地址。
        * @example `http://myoss.oss-cn-hangzhou.aliyuncs.com/my-buc/2019-06-30/sae-test.jar`
        */ "PackageUrl"?: string;
        /**
        * 镜像地址。只有Image类型应用可以配置镜像地址。
        * @example `registry.cn-hangzhou.aliyuncs.com/sae_test/ali_sae_test:0.0.1`
        */ "ImageUrl"?: string;
        /**
        * 部署的包依赖的JDK版本。镜像不支持。
        * @example `Open JDK 8`
        */ "Jdk"?: string;
        /**
        * 部署的包依赖的tomcat版本。镜像不支持。
        * @example `apache-tomcat-7.0.91`
        */ "WebContainer"?: string;
        /**
        * 每个实例所需的CPU，单位为毫核，不能为0。目前仅支持固定规格的实例类型。
        * @example `1000`
        */ "Cpu"?: number;
        /**
        * 每个实例所需的内存，单位为MB，不能为0。目前仅支持固定规格的实例类型。
        * @example `1024`
        */ "Memory"?: number;
        /**
        * 镜像启动命令。该命令必须为容器内存在的可执行的对象。例如: sleep。设置该命令将导致镜像原本的启动命令失效。
        * @example `sleep`
        */ "Command"?: string;
        /**
        * 镜像启动命令参数。上述启动命令所需参数。例如: \["1d"\]
        * @example `1d`
        */ "CommandArgs"?: string;
        /**
        * 容器环境变量参数。例如: \[{"name":"envtmp","value":"0"}\]
        * @example `[{"name":"envtmp","value":"0"}]`
        */ "Envs"?: string;
        /**
        * 容器内自定义host映射。例如: \[{"hostName":"samplehost","ip":"127.0.0.1"}\]
        * @example `[{"hostName":"samplehost","ip":"127.0.0.1"}]`
        */ "CustomHostAlias"?: string;
        /**
        * Jar包启动应用选项。应用默认启动命令: $JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs
        * @example `custom-option`
        */ "JarStartOptions"?: string;
        /**
        * Jar包启动应用参数。应用默认启动命令: $JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs
        * @example `custom-args`
        */ "JarStartArgs"?: string;
        /**
        * 容器健康检查，健康检查失败的容器将被杀死并恢复。目前仅支持容器内下发命令的方式。{"exec":{"command":\["sleep","5s"\]},"initialDelaySeconds":10,"timeoutSeconds":11}
        * @example `{"exec":{"command":["sleep","5s"]},"initialDelaySeconds":10,"timeoutSeconds":11}`
        */ "Liveness"?: string;
        /**
        * 应用启动状态检查，多次健康检查失败的容器将被杀死并重启。不通过健康检查的容器将不会有SLB流量进入。例如: {"exec":{"command":\["sleep","6s"\]},"initialDelaySeconds":15,"timeoutSeconds":12}
        * @example `{"exec":{"command":["sleep","6s"]},"initialDelaySeconds":15,"timeoutSeconds":12}`
        */ "Readiness"?: string;
        /**
        * 是否立即部署生效。默认为否。
        * @example `true`
        */ "Deploy"?: boolean;
        /**
        * EDAS pandora应用使用的运行环境
        * @example `3.5.3`
        */ "EdasContainerVersion"?: string;
        "Timezone"?: string;
        "SlsConfigs"?: string;
    }): Promise<{}>;
    /**
    * 获取应用的状态信息
    */ DescribeApplicationStatus(query: {
        "RegionId"?: string;
        /**
        * 目标应用ID
        * @example `0099b7be-5f5b-4512-a7fc-56049ef1aa6b`
        */ "AppId": string;
    }): Promise<{}>;
    /**
    * 部署应用
    */ DeployApplication(query: {
        "RegionId"?: string;
        /**
        * 需要部署的应用ID
        * @example `017f39b8-dfa4-4e16-a84b-1dcee4b17106`
        */ "AppId"?: string;
        /**
        * 部署的包依赖的JDK版本。镜像不支持。
        * @example `Open JDK 8`
        */ "Jdk"?: string;
        /**
        * 部署的包依赖的tomcat版本。镜像不支持。
        * @example `apache-tomcat-7.0.91`
        */ "WebContainer"?: string;
        /**
        * 部署的包的版本号，War FatJar类型必填。请自定义它的含义。
        * @example `1.0.1`
        */ "PackageVersion"?: string;
        /**
        * 部署包地址。只有FatJar或War类型应用可以配置部署包地址。
        * @example `http://myoss.oss-cn-hangzhou.aliyuncs.com/my-buc/2019-06-30/sae-test.jar`
        */ "PackageUrl"?: string;
        /**
        * 镜像地址。只有Image类型应用可以配置镜像地址。
        * @example `registry.cn-hangzhou.aliyuncs.com/sae_test/ali_sae_test:0.0.1`
        */ "ImageUrl"?: string;
        /**
        * 镜像启动命令。该命令必须为容器内存在的可执行的对象。例如: sleep。设置该命令将导致镜像原本的启动命令失效。
        * @example `sleep`
        */ "Command"?: string;
        /**
        * 镜像启动命令参数。上述启动命令所需参数。例如: \["1d"\]
        * @example `1d`
        */ "CommandArgs"?: string;
        /**
        * 容器环境变量参数。例如: \[{"name":"envtmp","value":"0"}\]
        * @example `[{"name":"envtmp","value":"0"}]`
        */ "Envs"?: string;
        /**
        * 容器内自定义host映射。例如: \[{"hostName":"samplehost","ip":"127.0.0.1"}\]
        * @example `[{"hostName":"samplehost","ip":"127.0.0.1"}]`
        */ "CustomHostAlias"?: string;
        /**
        * Jar包启动应用选项。应用默认启动命令: $JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs
        * @example `custom-option`
        */ "JarStartOptions"?: string;
        /**
        * Jar包启动应用参数。应用默认启动命令: $JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs
        * @example `custom-args`
        */ "JarStartArgs"?: string;
        /**
        * 容器健康检查，健康检查失败的容器将被杀死并恢复。目前仅支持容器内下发命令的方式。{"exec":{"command":\["sleep","5s"\]},"initialDelaySeconds":10,"timeoutSeconds":11}
        * @example `{"exec":{"command":["sleep","5s"]},"initialDelaySeconds":10,"timeoutSeconds":11}`
        */ "Liveness"?: string;
        /**
        * 应用启动状态检查，多次健康检查失败的容器将被杀死并重启。不通过健康检查的容器将不会有SLB流量进入。例如: {"exec":{"command":\["sleep","6s"\]},"initialDelaySeconds":15,"timeoutSeconds":12}
        * @example `{"exec":{"command":["sleep","6s"]},"initialDelaySeconds":15,"timeoutSeconds":12}`
        */ "Readiness"?: string;
        /**
        * 最小可用实例数。任何变更都尽量不会违背这个设置，保证业务稳定性。
        * @example `1`
        */ "MinReadyInstances"?: number;
        /**
        * 分批等待时间。单位秒。
        * @example `10`
        */ "BatchWaitTime"?: number;
        /**
        * EDAS pandora应用使用的运行环境
        * @example `3.5.3`
        */ "EdasContainerVersion"?: string;
        /**
        * 部署策略
        * @example `{}`
        */ "UpdateStrategy"?: string;
        "SlsConfigs"?: string;
        "Timezone"?: string;
    }): Promise<{}>;
    /**
    * 获取应用的资源使用量
    */ QueryResourceStatics(query: {
        "RegionId"?: string;
        /**
        * 应用ID
        * @example `7171a6ca-d1cd-4928-8642-7d5cfe69a26c`
        */ "AppId": string;
    }): Promise<{}>;
    /**
    * 为应用绑定SLB
    */ BindSlb(query: {
        "RegionId"?: string;
        /**
        * 部署成功的目标应用ID
        * @example `0099b7be-5f5b-4512-a7fc-56049ef1aa6b`
        */ "AppId": string;
        /**
        * 绑定公网SLB。例如: \[{"port":80,"targetPort":8080,"protocol":"TCP"}\]，表示将容器的8080端口通过slb的80端口暴露服务，协议为TCP，为空忽略。
        * @example `[{"port":80,"targetPort":8080,"protocol":"TCP"}]`
        */ "Internet"?: string;
        /**
        * 绑定私网SLB。例如: \[{"port":80,"targetPort":8080,"protocol":"TCP"}\]，表示将容器的8080端口通过slb的80端口暴露服务，协议为TCP，为空忽略。
        * @example `[{"port":80,"targetPort":8080,"protocol":"TCP"}]`
        */ "Intranet"?: string;
        "InternetSlbId"?: string;
        "IntranetSlbId"?: string;
    }): Promise<{}>;
    /**
    * 获取应用SLB配置信息
    */ DescribeApplicationSlbs(query: {
        "RegionId"?: string;
        /**
        * 目标应用ID
        * @example `017f39b8-dfa4-4e16-a84b-1dcee4b17106`
        */ "AppId": string;
    }): Promise<{}>;
    /**
    * 获取应用列表
    */ ListApplications(query: {
        "RegionId"?: string;
        /**
        * 当前页数
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 页大小
        * @example `20`
        */ "PageSize"?: number;
        /**
        * 应用名
        * @example `demo-app`
        */ "AppName"?: string;
    }): Promise<{}>;
    /**
    * 创建命名空间
    */ CreateNamespace(query: {
        "RegionId"?: string;
        /**
        * 命名空间ID
        * @example `cn-beijing:test`
        */ "NamespaceId": string;
        /**
        * 命名空间名称
        * @example `name`
        */ "NamespaceName"?: string;
        /**
        * 描述
        * @example `description`
        */ "NamespaceDescription"?: string;
    }): Promise<{}>;
    /**
    * 更新命名空间信息
    */ UpdateNamespace(query: {
        "RegionId"?: string;
        /**
        * 命名空间ID
        * @example `cn-beijing:test`
        */ "NamespaceId": string;
        /**
        * 命名空间名称
        * @example `name`
        */ "NamespaceName"?: string;
        /**
        * 命名空间描述
        * @example `desc`
        */ "NamespaceDescription"?: string;
    }): Promise<{}>;
    /**
    * 获取发布的微服务列表
    */ ListPublishedServices(query: {
        "RegionId"?: string;
        /**
        * 应用ID
        * @example `00000000-0000-0000-0000-000000000000`
        */ "AppId": string;
    }): Promise<{}>;
    /**
    * 获取应用配置信息。
    */ DescribeApplicationConfig(query: {
        "RegionId"?: string;
        /**
        * 应用ID。
        * @example `7171a6ca-d1cd-4928-8642-7d5cfe69a26c`
        */ "AppId": string;
    }): Promise<{}>;
    /**
    * 获取订阅的微服务列表
    */ ListConsumedServices(query: {
        "RegionId"?: string;
        /**
        * 应用ID
        * @example `00000000-0000-0000-0000-000000000000`
        */ "AppId": string;
    }): Promise<{}>;
    /**
    * 查询命名空间详细信息
    */ DescribeNamespace(query: {
        "RegionId"?: string;
        /**
        * 命名空间ID
        * @example `cn-beijing:test`
        */ "NamespaceId": string;
    }): Promise<{}>;
    /**
    * 获取应用实例分组
    */ DescribeApplicationGroups(query: {
        "RegionId"?: string;
        /**
        * 应用ID
        * @example `00000000-0000-0000-0000-000000000000`
        */ "AppId": string;
        /**
        * 页码
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 页面大小
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 删除命名空间
    */ DeleteNamespace(query: {
        "RegionId"?: string;
        /**
        * 命名空间ID
        * @example `cn-beijing:test`
        */ "NamespaceId": string;
    }): Promise<{}>;
    /**
    * 获取应用实例列表
    */ DescribeApplicationInstances(query: {
        "RegionId"?: string;
        /**
        * 应用ID
        * @example `00000000-0000-0000-0000-000000000000`
        */ "AppId": string;
        /**
        * 应用分组ID。请通过 DescribeApplicationGroups 接口获得
        * @example `00000000-0000-0000-0000-000000000000`
        */ "GroupId": string;
        /**
        * 页码
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 页面大小
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 获取应用微服务容器组件列表
    */ DescribeEdasContainers(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    /**
    * 描述应用镜像信息
    */ DescribeApplicationImage(query: {
        "RegionId"?: string;
        /**
        * 应用ID
        * @example `00000000-0000-0000-0000-000000000000`
        */ "AppId": string;
        /**
        * 镜像Url
        * @example `registry-vpc.cn-hangzhou.aliyuncs.com/demo/demo:latest`
        */ "ImageUrl": string;
    }): Promise<{}>;
    /**
    * 获取应用创建部署时所需的组件版本
    */ DescribeComponents(query: {
        "RegionId"?: string;
        /**
        * 支持的组件类型。
        * - Tomcat
        * - JDK
        * @example `TOMCAT`
        */ "Type": string;
        /**
        * 应用ID
        * @example `00000000-0000-0000-0000-000000000000`
        */ "AppId"?: string;
    }): Promise<{}>;
    /**
    * 使用 DescribeRegions 查询可用地域。
    */ DescribeRegions(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    /**
    * 获取实例日志
    */ DescribeInstanceLog(query: {
        "RegionId"?: string;
        /**
        * 实例ID
        * @example `xxx`
        */ "InstanceId": string;
    }): Promise<{}>;
    /**
    * 查询命名空间列表
    */ DescribeNamespaces(query: {
        "RegionId"?: string;
        /**
        * 页码
        * @example `1`
        */ "CurrentPage": number;
        /**
        * 翻页大小
        * @example `10`
        */ "PageSize": number;
    }): Promise<{}>;
    ListLogConfigs(query: {
        "RegionId"?: string;
        "AppId": string;
        "PageSize": number;
        "CurrentPage": number;
    }): Promise<{}>;
}
export default SAE;
