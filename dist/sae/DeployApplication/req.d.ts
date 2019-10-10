interface DeployApplicationRequest {
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
}
export { DeployApplicationRequest };