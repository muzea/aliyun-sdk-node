export interface GetK8sApplicationResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `1053-08e4-47a5-b2ab-5c0323de7b5a`
     */
    RequestId: string;
    /**
     * 应用信息。
     */
    Applcation: {
        /**
         * 应用ID，可通过调用ListApplication接口来获取，详情请参见[ListApplication](~~149390~~)。
         * @example `a5281053-****-47a5-b2ab-5c0323de****`
         */
        AppId: string;
        DeployGroups: {
            /**
             * 部署分组列表。
             */
            DeployGroup: {
                Components: {
                    /**
                     * 组件信息。
                     */
                    Components: {
                        /**
                         * 组件类型。
                         * @example `JDK`
                         */
                        Type: string;
                        /**
                         * 组件关键字。
                         * @example `Open JDK 8`
                         */
                        ComponentKey: string;
                        /**
                         * 组件ID。
                         * @example `5`
                         */
                        ComponentId: string;
                    }[];
                };
                /**
                 * 环境变量，相对于EnvList字段，本字段透出对ConfigMap/Secret引用的相关配置信息。
                 * @example `"["{\"name\":\"test1\",\"valueFrom\":{\"configMapKeyRef\":{\"name\":\"edas-demo-configmap\",\"key\":\"key1\"}}}","{\"name\":\"k2\",\"value\":\"v2\"}","{\"name\":\"s1\",\"valueFrom\":{\"secretKeyRef\":{\"name\":\"edas-demo-secret\",\"key\":\"k1\"}}}"]"`
                 */
                Env: string;
                /**
                 * 环境变量来源。
                 * @example `[{"configMapRef":{"name":"test-cm"}}]`
                 */
                EnvFrom: string;
            }[];
        };
        /**
         * 镜像信息。
         */
        ImageInfo: {
            /**
             * 镜像仓库ID。
             * @example `cn-hangzhou`
             */
            RepoId: string;
            /**
             * 镜像URL。
             * @example `registry.cn-beijing.aliyuncs.com/edas-serverless-****​/1314839****06888_shared_repo:5a166fbd-9d76-4f98-****-78165****c_1572***282`
             */
            ImageUrl: string;
            /**
             * 镜像仓库来源类型。
             * @example `ALI_HUB`
             */
            RepoOriginType: string;
            /**
             * 镜像Tag。
             * @example `5a166fbd-9d76-4f98-****-781659d9f54c_1572485443282`
             */
            Tag: string;
            /**
             * 镜像仓库名称。
             * @example `131****067006888_shared_repo`
             */
            RepoName: string;
            /**
             * 镜像仓库命名空间。
             * @example `edas-server****-user`
             */
            RepoNamespace: string;
            /**
             * 镜像地域ID。
             * @example `cn-beijing`
             */
            RegionId: string;
        };
        /**
         * 应用基础信息。
         */
        App: {
            /**
             * 内存资源预留，单位MiB。
             * @example `1024`
             */
            RequestMem: number;
            /**
             * 上次伸缩前的应用实例数。
             * @example `10`
             */
            InstancesBeforeScaling: number;
            /**
             * 部署类型，可选值为：Image。
             * @example `Image`
             */
            DeployType: string;
            /**
             * 应用名称。
             * @example `test`
             */
            ApplicationName: string;
            /**
             * 应用类型。
             * @example `War`
             */
            ApplicationType: string;
            /**
             * 应用实例数。
             * @example `4`
             */
            Instances: number;
            /**
             * 内存资源限制，单位MiB。
             * @example `1024`
             */
            LimitMem: number;
            /**
             * 启动命令。
             * @example `ls`
             */
            Cmd: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 应用构建类型ID。
             * @example `57`
             */
            BuildpackId: number;
            /**
             * Apache Tomcat版本。
             * @example `8.5.55`
             */
            TomcatVersion: string;
            /**
             * 容器集群ID。
             * @example `c383bc813c1974e****451b50c0c8****`
             */
            CsClusterId: string;
            /**
             * CPU资源请求，单位为毫核，1000为1核CPU。
             * @example `1000`
             */
            RequestCpuM: number;
            /**
             * 应用ID，可通过调用ListApplication接口获取，详情请参见[ListApplication](~~149390~~)。
             * @example `00ee517d-dd7d-4d4e-****-****`
             */
            AppId: string;
            /**
             * K8s命名空间。
             * @example `default`
             */
            K8sNamespace: string;
            /**
             * EDAS容器版本。
             * @example `3.60.0`
             */
            EdasContainerVersion: string;
            /**
             * CPU资源限制，单位为毫核，1000为1核CPU。
             * @example `1000`
             */
            LimitCpuM: number;
            /**
             * 集群ID。
             * @example `c37aec2a-bcca-4ec1-****-****`
             */
            ClusterId: string;
            EnvList: {
                /**
                 * 环境变量列表。
                 */
                Env: {
                    /**
                     * 环境变量名称。
                     * @example `CATALINA_OPTS`
                     */
                    Name: string;
                    /**
                     * 环境变量值。
                     * @example `-Xmx 1024m -Dhsf.default.tid=false $(EDAS_CATALINA_OPTS)`
                     */
                    Value: string;
                }[];
            };
            CmdArgs: {
                /**
                 * 命令列表。
                 */
                CmdArg: string[];
            };
            /**
             * 应用类型：
             * * General: 原生Java应用。
             * * Pandora: Pandora应用。
             * * Multilingual: 多语言应用。
             * @example `General`
             */
            DevelopType: string;
            /**
             * SLB配置信息。
             * @example `[
              {
                "addressType": "intranet",
                "externalTrafficPolicy": "Local",
                "ip": "192.168.254.***",
                "name": "intranet-testapp",
                "portMappings": [
                  {
                    "loadBalancerProtocol": "TCP",
                    "servicePort": {
                      "port": 8080,
                      "protocol": "TCP",
                      "targetPort": 18081,
                      "vServerGroupName": "k8s/31414/intranet-testapp/default/cc90e0c9508a44667bdae2e83d3******"
                    }
                  }
                ],
                "scheduler": "rr",
                "serviceType": "LoadBalancer",
                "slbId": "lb-bp1ikoh3nrpgqsm******",
                "source": "create",
                "specification": "slb.s3.large"
              }
            ]`
             */
            SlbInfo: string;
            /**
             * 应用Pod注解。
             * @example `{"test-annokey":"test-annovalue"}`
             */
            Annotations: string;
            /**
             * 应用Pod标签。
             * @example `{"test-labelkey":"test-labelvalue"}`
             */
            Labels: string;
            /**
             * 临时存储资源需求上限，单位：GB。设置0表示不限制。
             * @example `4`
             */
            LimitEphemeralStorage: string;
            /**
             * 临时存储资源需求预留，单位：GB。设置0表示不限制。
             * @example `2`
             */
            RequestEphemeralStorage: string;
            /**
             * 应用是否开启了推空保护。
             * @example `true`
             */
            EnableEmptyPushReject: boolean;
            /**
             * 应用是否开启了无损上线。
             * @example `true`
             */
            EnableLosslessRule: boolean;
            /**
             * 应用是否启用了无损滚动发布模式配置通过就绪检查前完成服务注册。
             * @example `true`
             */
            LosslessRuleAligned: boolean;
            /**
             * 应用配置的服务延迟注册时长，单位：秒。
             * @example `120`
             */
            LosslessRuleDelayTime: number;
            /**
             * 应用设置的服务预热曲线。
             * @example `2`
             */
            LosslessRuleFuncType: number;
            /**
             * 应用是否启用了无损滚动发布模式配置通过就绪检查前完成服务预热。
             * @example `true`
             */
            LosslessRuleRelated: boolean;
            /**
             * 应用设置的服务预热时长，单位：秒。
             * @example `120`
             */
            LosslessRuleWarmupTime: number;
            /**
             * 当前应用的高级配置标签，展示启用了哪些特性功能。可能的枚举值如下：
             * - base.combination.edas: EDAS一体化管控方案。
             * - base.combination.arms: 启用ARMS监控。
             * - base.combination.mse: 启用MSE微服务之力。
             * - base.combination.none: 仅启用生命周期管理。
             * @example `base.combination.edas`
             */
            FeatureAnnotations: string;
            /**
             * 创建应用时Workload的类型，目前支持Deployment和StatefulSet类型。留空时默认Deployment。
             * @example `Deployment`
             */
            WorkloadType: string;
        };
        /**
         * 配置信息。
         */
        Conf: {
            /**
             * K8s容器启动后执行信息。
             * @example `{\"exec\":{\"command\":[\"ls\",\"/\"]}}"`
             */
            PostStart: string;
            /**
             * K8s容器业务状态检查信息。
             * @example `{"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"httpGet": {"path": "/consumer","port": 8080,"scheme": "HTTP","httpHeaders": \[{"name": "test","value": "testvalue"}\]}}`
             */
            Readiness: string;
            /**
             * 应用是否已接入AHAS。
             * @example `true`
             */
            AhasEnabled: boolean;
            /**
             * 启动命令参数。
             * @example `-lh`
             */
            K8sCmdArgs: string;
            /**
             * K8s容器存活状态监测信息。
             * @example `{"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"tcpSocket":{"host":"", "port":8080}}`
             */
            Liveness: string;
            /**
             * 是否将应用实例分布到多节点：
             * - `true`代表是。
             * - 其他值代表否。
             * @example `true`
             */
            DeployAcrossNodes: string;
            /**
             * 启动命令。
             * @example `ls`
             */
            K8sCmd: string;
            /**
             * K8s容器停止前执行信息。
             * @example `{\"exec\":{\"command\":[\"ls\",\"/\"]}}"`
             */
            PreStop: string;
            /**
             * 是否将应用实例分布到多可用区：
             * - `true`代表是。
             * - 其他值代表否。
             * @example `true`
             */
            DeployAcrossZones: string;
            /**
             * JAR启动参数，已废弃。
             * @example `-lh`
             */
            JarStartArgs: string;
            /**
             * NAS存储信息。
             * @example `[{"nasPath":"/mnt/","mountPath":"/mnt/"}]`
             */
            K8sNasInfo: string;
            /**
             * JAR启动选项，已废弃。
             * @example `-h`
             */
            JarStartOptions: string;
            /**
             * 容器运行时类型，仅适用于使用安全沙箱容器的集群。
             * @example `runc`
             */
            RuntimeClassName: string;
            /**
             * 本地存储信息。
             * @example `[{"type":"","nodePath":"/mnt/","mountPath":"/mnt/"}]`
             */
            K8sLocalvolumeInfo: string;
            /**
             * 存储信息。
             * @example `"{\"hostPaths\":\"[]\",\"emptyDirs\":\"[]\"}"`
             */
            K8sVolumeInfo: string;
            /**
             * Pod亲和性配置。
             * @example `"{\"nodeAffinity\":{\"requiredDuringSchedulingIgnoredDuringExecution\":{\"nodeSelectorTerms\":[{\"matchExpressions\":[{\"key\":\"beta.kubernetes.io/arch\",\"operator\":\"NotIn\",\"values\":[\"arm64\",\"arm32\"]}]}]},\"preferredDuringSchedulingIgnoredDuringExecution\":[{\"weight\":5,\"preference\":{\"matchExpressions\":[{\"key\":\"kubernetes.io/os\",\"operator\":\"In\",\"values\":[\"linux\"]}]}}]},\"podAffinity\":{\"requiredDuringSchedulingIgnoredDuringExecution\":[{\"labelSelector\":{\"matchExpressions\":[{\"key\":\"edas.oam.acname\",\"operator\":\"NotIn\",\"values\":[\"edas-test-app\"]}]},\"namespaces\":[\"default\"],\"topologyKey\":\"kubernetes.io/hostname\"}]},\"podAntiAffinity\":{\"preferredDuringSchedulingIgnoredDuringExecution\":[{\"weight\":15,\"podAffinityTerm\":{\"labelSelector\":{\"matchExpressions\":[{\"key\":\"edas.oam.acname\",\"operator\":\"In\",\"values\":[\"edas-test-app-2\"]}]},\"namespaces\":[\"default\"],\"topologyKey\":\"failure-domain.beta.kubernetes.io/zone\"}}]}}"`
             */
            Affinity: string;
            /**
             * Pod调度容忍配置。
             * @example `"[{\"key\":\"edas-taint-key2\",\"operator\":\"Exists\",\"effect\":\"NoExecute\",\"tolerationSeconds\":50},{\"key\":\"edas-taint-key\",\"operator\":\"Equal\",\"value\":\"edas-taint-value\",\"effect\":\"PreferNoSchedule\"}]"`
             */
            Tolerations: string;
            /**
             * 使用自定义OpenJDK运行时，配置的基础镜像地址。
             * @example `openjdk:8u302`
             */
            UserBaseImageUrl: string;
        };
        /**
         * 最新版本信息。
         */
        LatestVersion: {
            /**
             * 部署包地址。通过FatJar或WAR包部署的应用需要配置部署包地址。
             * @example `https://e***.oss-cn-beijing.aliyuncs.com/s***-1.0-SNAPSHOT-spring-boot.jar`
             */
            Url: string;
            /**
             * 部署包地址。通过FatJar或WAR包部署的应用需要配置部署包地址。
             * @example `https://e***.oss-cn-beijing.aliyuncs.com/s***-1.0-SNAPSHOT-spring-boot.jar`
             */
            WarUrl: string;
            /**
             * 部署包的版本号。
             * @example `20200720`
             */
            PackageVersion: string;
        };
    };
}
