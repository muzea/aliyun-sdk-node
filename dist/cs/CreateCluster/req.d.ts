export interface CreateClusterRequest {
    /**
     * 请求体参数。
     * @example `cluster-demo`
     */
    "body"?: {
        /**
         * 集群名称。
         * 命名规则：由数字、汉字、英文字符或短划线（-）组成，长度范围1~63个字符，且不能以短划线（-）开头。
         * @example `cluster-demo`
         */
        name: string;
        /**
         * 集群所在的地域ID。
         * @example `cn-beijing`
         */
        region_id: string;
        /**
         * - `Kubernetes`: ACK专有集群。
         * - `ManagedKubernetes`：ACK托管类的集群，包括ACK托管集群（ACK集群Pro版、ACK集群基础版）、ACK Serverless集群（Pro版、基础版）、ACK Edge集群（Pro版、基础版）、ACK灵骏集群（Pro版）。
         * - `ExternalKubernetes`：注册集群。
         * @example `Kubernetes`
         */
        cluster_type: string;
        /**
         * 当您选择`cluster_type`为`ManagedKubernetes`并配置`profile`后，您可以进一步指定集群的规格。
         * - `ack.pro.small`：集群Pro版。
         * - `ack.standard`：集群基础版（取值为空时默认选择）。
         * @example `ack.pro.small`
         */
        cluster_spec: string;
        /**
         * 集群版本，与Kubernetes社区基线版本保持一致。建议选择最新版本，若不指定，默认使用最新版本。
         * 目前您可以在ACK控制台创建两种最新版本的集群。您可以通过API创建其他Kubernetes版本集群。关于ACK支持的Kubernetes版本，请参见[Kubernetes版本发布概览](~~185269~~)。
         * @example `1.16.9-aliyun.1`
         */
        kubernetes_version: string;
        /**
         * 集群内容器运行时，默认采用Docker运行时，同时还支持Containerd和安全沙箱容器运行时。
         * 更多有关容器引擎的选择，请参见[如何选择Docker运行时与安全沙箱运行时](~~160313~~)。
         */
        runtime: any;
        /**
         * 集群使用的专有网络，创建集群时必须为集群提供。
         * @example `vpc-2zeik9h3ahvv2zz95****`
         */
        vpcid: string;
        /**
         * Pod虚拟交换机列表，您需要为每一个节点虚拟交换机指定至少一个相同可用区的Pod虚拟交换机并且不能跟节点`vswitch`重复，建议选择网段掩码不大于19的虚拟交换机。
         * > 当集群采用Terway网络类型时，必须为集群指定`pod_vswitch_ids`。
         */
        pod_vswitch_ids: string[];
        /**
         * Pod网络地址段，必须是有效的私有网段，即以下网段及其子网：10.0.0.0/8、172.16-31.0.0/12-16、192.168.0.0/16。不能与VPC及VPC内已有Kubernetes集群使用的网段重复，创建成功后不能修改。
         * 有关集群网络规划，请参见[VPC下 Kubernetes的网络地址段规划](~~86500~~)。
         * > 当创建Flannel网络类型的集群时，该字段为必填。
         * @example `172.20.0.0/16`
         */
        container_cidr: string;
        /**
         * Service网络地址段，可选范围：10.0.0.0/16-24，172.16-31.0.0/16-24，192.168.0.0/16-24
         * 不能与VPC网段10.1.0.0/21及VPC内已有Kubernetes集群使用的网段重复，创建成功后不能修改。
         * 默认使用172.19.0.0/20网段。
         * @example `172.21.0.0/20`
         */
        service_cidr: string;
        /**
         * 使用已有安全组创建集群时需要指定安全组ID，和`is_enterprise_security_group`二选一，集群节点自动加入到此安全组。
         * @example `sg-bp1bdue0qc1g7k****`
         */
        security_group_id: string;
        /**
         * 自动创建企业级安全组，当`security_group_id`为空的时生效。
         * > 使用普通安全组时，集群内节点与Terway Pod数量之和不能超过2000。所以创建Terway网络类型集群时，建议使用企业安全组。
         * - `true`：创建并使用企业级安全组。
         * - `false`：不使用企业级安全组。
         * 默认值：`true`。
         * @example `true`
         */
        is_enterprise_security_group: boolean;
        /**
         * 为专有网络配置SNAT。取值：
         * - `true`：将为您创建NAT网关并自动配置SNAT规则，若您集群内的节点、应用等需要访问公网需要设置为`true`。
         * - `false`：不为您创建NAT网关及SNAT规则。这种模式下，集群内节点及应用将不能访问公网。
         * > 如果创建集群时未开启，后续业务需要访问公网，可手动开启。更多信息，请参见[手动开启](~~178480~~)。
         * 默认值：`true`。
         * @example `true`
         */
        snat_entry: boolean;
        /**
         * 是否开启公网访问。通过EIP暴露API Server，实现集群公网访问。
         * - `true`：开启公网访问。
         * - `false`：不开启公网访问。选择不开放时，则无法通过外网访问集群API Server。
         * 默认值：`false`。
         * @example `true`
         */
        endpoint_public_access: boolean;
        /**
         * 是否开放公网SSH登录。用登录"专有版集群"的Master节点，托管版集群中该参数不生效。
         * - `true`：开放。
         * - `false`：不开放。
         * 默认值：`false`。
         * @example `true`
         */
        ssh_flags: boolean;
        /**
         * 集群使用的时区。
         * @example `Asia/Shanghai`
         */
        timezone: string;
        /**
         * 节点IP数量，通过指定网络的CIDR来确定IP的数量，只对于Flannel网络类型集群生效。
         * 默认值：`26`。
         * @example `25`
         */
        node_cidr_mask: string;
        /**
         * 自定义集群CA。
         * @example `-----BEGIN CERTIFICATE-----****`
         */
        user_ca: string;
        /**
         * 自定义节点数据。
         * @example `IyEvdXNyL2Jpbi9iYXNoCmVjaG8gIkhlbGxvIEFD****`
         */
        user_data: string;
        /**
         * 集群本地域名。
         * 命名规则：域名由小数点（.）分隔的一个或多个部分构成，每个部分最长为63个字符，可以使用小写字母、数字和短划线（-），且首尾必须为小写字母或数字。
         * @example `cluster.local`
         */
        cluster_domain: string;
        /**
         * 自定义节点名称。
         * 节点名称由三部分组成：前缀+节点IP地址子串+后缀：
         * - 前缀和后缀均可由英文句号（.）分隔的一个或多个部分构成，每个部分可以使用小写字母、数字和短划线（-），且首尾必须为小写字母和数字。
         * - IP地址段长度指截取节点IP地址末尾的位数，取值范围\[5,12\]。
         * 例如，节点IP地址为：192.168.0.55，指定前缀为aliyun.com，IP地址段长度为5，后缀为test，则节点名称为aliyun.com00055test。
         * @example `aliyun.com00055test`
         */
        node_name_mode: string;
        /**
         * 自定义证书SAN，多个IP或域名以英文逗号（,）分隔。
         * @example `cs.aliyun.com`
         */
        custom_san: string;
        /**
         * KMS密钥ID，使用该密钥对数据盘进行加密。更多详情，请参见[密钥管理服务](~~28935~~)。
         * > 该功能只在专业托管版集群（ACK Pro版集群）中生效。
         * @example `0fe64791-55eb-4fc7-84c5-c6c7cdca****`
         */
        encryption_provider_key: string;
        /**
         * ServiceAccount是Pod和集群`apiserver`通讯的访问凭证。而`service-account-issuer`是`serviceaccount token`中的签发身份，即`token payload`中的`iss`字段。
         * 关于`ServiceAccount`更多详情，请参见[部署服务账户令牌卷投影](~~160384~~)。
         * @example `kubernetes.default.svc`
         */
        service_account_issuer: string;
        /**
         * ServiceAccount是Pod和集群`apiserver`通讯的访问凭证，而`api-audiences`是合法的请求`token`身份，用于`apiserver`服务端认证请求`token`是否合法。支持配置多个`audience`，通过英文半角逗号（,）分割。
         * 关于`ServiceAccount`更多详情，请参见[部署服务账户令牌卷投影](~~160384~~)。
         * @example `kubernetes.default.svc`
         */
        api_audiences: string;
        /**
         * 节点自定义镜像，默认使用系统镜像。当选择自定义镜像时，将取代默认系统镜像。请参见[自定义镜像](~~146647~~)。
         * @example `m-bp16z7xko3vvv8gt****`
         */
        image_id: string;
        /**
         * RDS实例列表，选择您想想要添加白名单的RDS实例。 建议前往RDS加入容器Pod网段与Node网段，设置RDS实例会由于实例非运行的状态导致无法弹出。
         */
        rds_instances: string[];
        /**
         * 节点标签。标签定义规则：
         * - 标签由区分大小写的键值对组成，您最多可以设置20个标签。
         * - 标签键不可以重复，最长为64个字符；标签值可以为空，最长为128个字符。标签键和标签值都不能以“aliyun”、“acs:”、“https://”或“http://”开头。详情请参见[Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set)。
         */
        tags: any[];
        /**
         * 集群组件列表，创建集群时通过`addons`指定想要安装的集群组件。
         * **网络组件**：必选，包含Flannel和Terway两种网络类型，创建集群时二选一：
         * - Flannel网络：\[{"name":"flannel","config":""}\]。
         * - Terway网络：\[{"name": "terway-eniip","config": ""}\] 。
         * **存储组件**：可选，仅支持`csi`类型：
         * `csi`：\[{"name":"csi-plugin","config": ""},{"name": "csi-provisioner","config": ""}\]。
         * **日志组件**：可选。推荐开启，如果不开启日志服务时，将无法使用集群审计功能。
         * - 使用已有`SLS Project`：\[{"name": "logtail-ds","config": "{\"IngressDashboardEnabled\":\"true\",\"sls_project_name\":\"your_sls_project_name\"}"}\] 。
         * - 创建新的`SLS Project`：\[{"name": "logtail-ds","config": "{\"IngressDashboardEnabled\":\"true\"}"}\] 。
         * **Ingress组件**：可选，ACK专有版集群默认安装Ingress组件`nginx-ingress-controller`。
         * - 安装Ingress并且开启公网：\[{"name":"nginx-ingress-controller","config":"{\"IngressSlbNetworkType\":\"internet\"}"}\] 。
         * - 禁止默认安装Ingress：\[{"name": "nginx-ingress-controller","config": "","disabled": true}\] 。
         * **事件中心**：可选，默认开启。
         * 事件中心提供对Kubernetes事件的存储、查询、告警等能力。Kubernetes事件中心关联的Logstore在90天内免费。关于免费策略的更多信息，请参见[创建并使用Kubernetes事件中心](~~150476~~)。
         * 开启事件中心示例：\[{"name":"ack-node-problem-detector","config":"{\"sls_project_name\":\"your_sls_project_name\"}"}\]。
         */
        addons: any[];
        /**
         * 节点污点信息。污点和容忍度（Toleration）相互配合，可以用来避免Pod被分配到不合适的节点上。更多信息，请参见[taint-and-toleration](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/)。
         */
        taints: any[];
        /**
         * 集群是否安装云监控插件。取值：
         * - `true`：安装云监控插件。
         * - `false`：不安装云监控插件。
         * 默认值：`false`。
         * @example `true`
         */
        cloud_monitor_flags: boolean;
        /**
         * 操作系统发行版。取值：
         * - CentOS
         * - AliyunLinux
         * - QbootAliyunLinux
         * - Qboot
         * - Windows
         * - WindowsCore
         * 默认值：`CentOS`。
         * @example `CentOS`
         */
        platform: string;
        /**
         * 操作系统平台类型。取值：
         * - Windows
         * - Linux
         * 默认值：`Linux`。
         * @example `Linux`
         */
        os_type: string;
        /**
         * 等保加固。更多信息，请参见[ACK等保加固使用说明](~~196148~~)。
         * 取值：
         * - `true`：开启等保加固。
         * - `false`：不开启等保加固。
         * 默认值：`false`。
         * @example `false`
         */
        soc_enabled: boolean;
        /**
         * 阿里云OS安全加固。取值：
         * - `true`：开启阿里云OS安全加固。
         * - `false`：不开启阿里云OS安全加固。
         * 默认值：`false`。
         * @example `false`
         */
        security_hardening_os: boolean;
        /**
         * 【已废弃】请使用参数security_hardening_os替代。
         * @example `false`
         */
        cis_enabled: boolean;
        /**
         * 节点CPU管理策略。当集群版本在1.12.6及以上时支持以下两种策略：
         * - `static`：允许为节点上具有某些资源特征Pod增强其CPU亲和性和独占性。
         * - `none`：表示启用现有的默认CPU亲和性方案。
         * 默认值：`none`。
         * @example `none`
         */
        cpu_policy: string;
        /**
         * kube-proxy代理模式
         * - `iptables`: 成熟稳定的kube-proxy代理模式，Kubernetes Service的服务发现和负载均衡使用iptables规则配置，但是性能一般，受规模影响较大，适用于集群存在少量的Service。
         * - `ipvs`：高性能的kube-proxy代理模式，Kubernetes Service的服务发现和负载均衡使用Linux IPVS模块进行配置，适用于集群存在大量的Service，对负载均衡有高性能要求的场景。
         * 默认值：`ipvs`。
         * @example `ipvs`
         */
        proxy_mode: string;
        /**
         * 节点服务端口，可选端口范围：\[30000,65535\]。
         * 默认值：`30000-32767`。
         * @example `30000~32767	`
         */
        node_port_range: string;
        /**
         * Master节点交换机ID列表，交换机个数取值范围为\[1,3\]。为确保集群的高可用性，推荐您选择3个交换机，且分布在不同的可用区。
         * 指定的实例规格数量需要和`master_count`保持一致，和`master_vswitch_ids`中的元素一一对应。
         */
        master_vswitch_ids: string[];
        /**
         * 密钥对名称，和`login_password`二选一。
         * @example `secrity-key`
         */
        key_pair: string;
        /**
         * SSH登录密码，和`key_pair `二选一。密码规则为8~30个字符，且至少同时包含三项（大小写字母、数字和特殊符号）。
         * @example `Hello@1234`
         */
        login_password: string;
        /**
         * Master节点数量，可选值`3`或`5`。
         * 默认值：`3`。
         * @example `3`
         */
        master_count: number;
        /**
         * Master节点实例类型。更多信息，请参见[实例规格族](~~25378~~)。
         */
        master_instance_types: string[];
        /**
         * Master节点系统盘类型，取值：
         * - `cloud_efficiency`：高效云盘。
         * - `cloud_ssd`：SSD云盘。
         * - `cloud_essd`：ESSD云盘。
         * 默认值：`cloud_ssd`。不同可用区，默认值可能会有所差异。
         * @example `cloud_ssd`
         */
        master_system_disk_category: string;
        /**
         * Master节点系统盘类型，取值范围\[40,500\]，单位：GiB。
         * 默认值：`120`。
         * @example `120`
         */
        master_system_disk_size: number;
        /**
         * 集群Master节点系统盘磁盘性能等级， 仅对ESSD磁盘生效。磁盘性能等级和磁盘大小有关，更多信息，请参见[ESSD云盘](~~122389~~)。
         * @example `PL1`
         */
        master_system_disk_performance_level: string;
        /**
         * Master节点系统盘采用的自动快照策略ID。
         * @example `sp-2zej1nogjvovnz4z****`
         */
        master_system_disk_snapshot_policy_id: string;
        /**
         * Master节点付费类型，取值：
         * - `PrePaid`：包年包月。
         * - `PostPaid`：按量付费。
         * 默认值：`PostPaid`。
         * @example `PrePaid`
         */
        master_instance_charge_type: string;
        /**
         * Master节点付费周期，当付费类型为`PrePaid`的时候必须指定周期。
         * 取值：`Month`，当前仅支持以月为周期。
         * @example `Month`
         */
        master_period_unit: string;
        /**
         * Master节点包年包月时长，当`master_instance_charge_type`取值为`PrePaid`时才生效且为必选值。
         * 取值范围：{1, 2, 3, 6, 12, 24, 36, 48, 60}。
         * 默认值：1。
         * @example `1`
         */
        master_period: number;
        /**
         * Master节点是否开启自动续费，当`master_instance_charge_type`取值为`PrePaid`时才生效，可选值为：
         * - `true`：自动续费。
         * - `false`：不自动续费。
         * 默认值：`true`。
         * @example `true`
         */
        master_auto_renew: boolean;
        /**
         * Master节点自动续费周期，当选择包年包月付费类型时才生效，且为必选值。
         * 取值范围：{1, 2, 3, 6, 12}。
         * 默认值：1。
         * @example `1`
         */
        master_auto_renew_period: number;
        /**
         * Worker节点数。范围是\[0，100\]。
         * @example `3`
         */
        num_of_nodes: number;
        /**
         * 集群节点所在虚拟交换机，当创建零节点的托管版集群时，该字段必填。
         */
        vswitch_ids: string[];
        /**
         * 集群节点使用的虚拟交换机列表，一个节点对应一个值。
         * 当创建零节点的托管版集群时，字段`worker_vswitch_ids `非必填，但是需要提供`vswitch_ids`。
         */
        worker_vswitch_ids: string[];
        /**
         * Worker节点实例配置。
         */
        worker_instance_types: string[];
        /**
         * Worker节点系统盘类型。更多信息，请参见[块存储概述](~~63136~~)。
         * 取值：
         * - `cloud_efficiency`：高效云盘。
         * - `cloud_ssd`：SSD云盘。
         * 默认值：`cloud_ssd`。
         * @example `cloud_efficiency`
         */
        worker_system_disk_category: string;
        /**
         * Worker节点系统盘大小，单位为GiB。
         * 取值范围：\[40,500\]。
         * 该参数的取值必须大于或者等于max{40, ImageSize}。
         * 默认值：`120`。
         * @example `120`
         */
        worker_system_disk_size: number;
        /**
         * Worker节点系统盘采用的自动快照策略ID。
         * @example `sp-2zej1nogjvovnz4z****`
         */
        worker_system_disk_snapshot_policy_id: string;
        /**
         * 当系统盘为ESSD云盘时，可设置ESSD云盘的性能级别PL（Performance Level）。更多信息，请参见[ESSD云盘](~~122389~~)。
         * 取值：
         * - PL0
         * - PL1
         * - PL2
         * - PL3
         * @example `PL1`
         */
        worker_system_disk_performance_level: string;
        /**
         * Worker节点数据盘类型、大小等配置的组合。
         */
        worker_data_disks: {
            /**
             * 数据盘类型。
             * @example `cloud_essd`
             */
            category: string;
            /**
             * 是否对数据盘加密。取值：
             * - `true`：对数据盘加密。
             * - `false`：不对数据盘加密。
             * 默认值：`false`。
             * @example `true`
             */
            encrypted: string;
            /**
             * 数据盘大小，取值范围：40～32767。单位：GiB。
             * @example `120`
             */
            size: string;
            /**
             * 节点数据盘磁盘性能等级，仅对ESSD磁盘生效。磁盘性能等级和磁盘大小有关。更多信息，请参见[ESSD云盘](~~122389~~)。
             * @example `PL1`
             */
            performance_level: string;
        }[];
        /**
         * Worker节点付费类型，取值：
         * - `PrePaid`：包年包月。
         * - `PostPaid`：按量付费。
         * 默认值：按量付费。
         * @example `PrePaid`
         */
        worker_instance_charge_type: string;
        /**
         * Wroker节点付费周期，当付费类型为`PrePaid`的时候需要指定周期。
         * 取值：`Month`，当前只支持以月为周期。
         * @example `Month`
         */
        worker_period_unit: string;
        /**
         * Worker节点包年包月时长，当`worker_instance_charge_type`取值为`PrePaid`时才生效且为必选值。
         * 取值范围：{1, 2, 3, 6, 12, 24, 36, 48, 60}。
         * 默认值：1。
         * @example `1`
         */
        worker_period: number;
        /**
         * Worker节点是否开启自动续费，当`worker_instance_charge_type`取值为`PrePaid`时才生效，取值：
         * - `true`：自动续费。
         * - `false`：不自动续费。
         * 默认值：`true`。
         * @example `true`
         */
        worker_auto_renew: boolean;
        /**
         * Worker节点自动续费周期，当选择包年包月付费类型时才生效，且为必选值。
         * 取值范围：{1, 2, 3, 6, 12}。
         * @example `1`
         */
        worker_auto_renew_period: number;
        /**
         * 使用已经节点创建集群时，需要指定ECS实例列表，该实例会作为Worker节点加入集群。
         * > 使用已有实例创建集群时，该字段必填。
         */
        instances: string[];
        /**
         * 使用已有实例创建集群时，是否对实例进行数据盘挂载，取值：
         * - `true`：将容器和镜像存储在数据盘，数据盘内原有数据将丢失，请注意备份数据。
         * - `false`：不将容器和镜像存储在数据盘。
         * 默认值：`false`。
         * 数据盘挂载规则：
         * - 如果ECS已挂载数据盘，且最后一块数据盘的文件系统未初始化，系统会自动将该数据盘格式化为ext4，用来存放内容/var/lib/docker、/var/lib/kubelet。
         * - 如果ECS未挂载数据盘，则不会挂载新的数据盘。
         * @example `false`
         */
        format_disk: boolean;
        /**
         * 使用已有实例创建集群时，是否保留实例名称。
         * - `true`：保留。
         * - `false`：不保留，会用系统规则进行替换。
         * 默认值：`true`。
         * @example `true`
         */
        keep_instance_name: boolean;
        /**
         * 集群内服务发现类型，用于在`ASK`集群中指定服务发现方式。
         * - `CoreDNS`：使用Kubernetes原生标准服务发现组件CoreDNS，需要在集群部署一组容器用于DNS解析。默认采用两个0.25 Core 512 MiB规格的ECI实例。
         * - `PrivateZone`：使用阿里云PrivateZone产品提供服务发现能力，需要开启PrivateZone服务。
         * 默认值：不开启。
         */
        service_discovery_types: string[];
        /**
         * 创建ASK集群时，是否在VPC中创建NAT网关并配置SNAT规则。取值：
         * - `true`：将为您创建NAT网关并自动配置SNAT规则，集群VPC将具备公网访问能力。
         * - `false`：不为您创建NAT网关及SNAT规则。集群VPC将不具备公网访问能力。
         * 默认值：`false`。
         * @example `true`
         */
        nat_gateway: boolean;
        /**
         * 集群所属地域的可用区ID。此参数为ASK集群特有参数。
         * 当创建ASK集群时，如果未指定`vpc_id`和`vswitch_ids`，必须为集群指定`zone_id`，用于自动在该可用区创建VPC网络资源。
         * @example `cn-beiji****`
         */
        zone_id: string;
        /**
         * 当您选择`cluster_type`为`ManagedKubernetes`时，即ACK托管类的集群时，您可以进一步指定集群的子类型。
         * - `Default`：ACK托管集群，包括ACK集群Pro版和ACK集群基础版。
         * - `Edge`：ACK Edge集群，包括ACK Edge集群Pro版和ACK Edge集群基础版。
         * - `Serverless`：ACK Serverless集群，包括ACK Serverless集群Pro版和ACK Serverless集群基础版。
         * - `Lingjun`：ACK灵骏集群，提供Pro版。
         * @example `Default`
         */
        profile: string;
        /**
         * 集群开启日志服务，只针对ACK Serverless集群生效，且取值必须是`SLS`。
         * @example `SLS`
         */
        logging_type: string;
        /**
         * 控制平面组件日志保存天数。
         * @example `30`
         */
        controlplane_log_ttl: string;
        /**
         * 控制平面组件日志服务Project，可以使用已有Project用于日志存储，也可以使用系统自动创建Project用户日志存储。如果选择自动创建日志服务Project将会自动创建一个名称为`k8s-log-{ClusterID}`的日志服务Project。
         * @example `k8s-log-xxx`
         */
        controlplane_log_project: string;
        /**
         * 组件名称列表，指定那些控制平面的组件日志需要被收集。
         * 默认采集apiserver、kcm、scheduler组件的日志。
         */
        controlplane_log_components: string[];
        /**
         * 集群删除保护，防止通过控制台或API误删除集群。取值：
         * - `true`：启用集群删除保护，将不能通过控制台或API删除集群。
         * - `false`：不启用集群删除保护，则能通过控制台或API删除集群。
         * 默认值：`false`。
         * @example `true`
         */
        deletion_protection: boolean;
        /**
         * 集群创建失败是否回滚。取值：
         * - `true`：当集群创建失败时，进行回滚操作。
         * - `false`：当集群创建失败时，不进行回滚操作。
         * 默认值：`true`。
         * @example `true`
         */
        disable_rollback: boolean;
        /**
         * 集群创建超时时间，单位分钟。
         * 默认值：`60`。
         * @example `60`
         */
        timeout_mins: number;
        /**
         * 操作系统发行版类型，推荐使用该字段指定节点操作系统。取值：
         * - CentOS
         * - AliyunLinux
         * - AliyunLinux Qboot
         * - AliyunLinuxUEFI
         * - AliyunLinux3
         * - Windows
         * - WindowsCore
         * - AliyunLinux3Arm64
         * - ContainerOS
         * 默认值：`CentOS`。
         * @example `AliyunLinux`
         */
        image_type: string;
        /**
         * 负载均衡规格，取值：
         * - slb.s1.small
         * - slb.s2.small
         * - slb.s2.medium
         * - slb.s3.small
         * - slb.s3.medium
         * - slb.s3.large
         * 默认值：`slb.s2.small`。
         * @example `slb.s2.small`
         */
        load_balancer_spec: string;
        /**
         * 是否启用RRSA功能。
         * @example `true`
         */
        enable_rrsa: boolean;
        /**
         * 集群所属资源组ID，实现不同资源的隔离。
         * @example `rg-acfm3mkrure****`
         */
        resource_group_id: string;
        /**
         * 集群付费类型，如下资源的计费方式属于包年包月计费类型：
         * 节点池的节点（ECS）。
         * API Server的私网SLB实例。
         * 取值：
         * PrePaid：包年包月。
         * PostPaid：按量付费。
         * 默认值：PostPaid。
         * @example `PostPaid`
         */
        charge_type: string;
        /**
         * 付费周期，当付费类型为PrePaid的时候，需要指定周期。
         * 取值：Month，当前仅支持以月为周期。
         * @example `Month`
         */
        period_unit: string;
        /**
         * 购买时长。包年包月时长，当charge_type取值为PrePaid时才生效，且为必选值。
         * 取值范围：{1, 2, 3, 6, 12, 24, 36, 48, 60}。
         * 默认值：1。
         * @example `1`
         */
        period: number;
        /**
         * 集群ip_stack。
         * @example `可选值：
        ipv4（单栈）
        dual（双栈），默认值为ipv4。`
         */
        ip_stack: string;
        /**
         * 注册集群 API Server SLB 访问控制列表。
         */
        access_control_list: string[];
        /**
         * 节点池列表。
         */
        nodepools: any[];
    };
}
