interface CreateApplicationRequest {
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
}
export { CreateApplicationRequest };