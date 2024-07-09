export interface DescribeClusterNodePoolDetailResponse {
    /**
     * 节点池配置。
     */
    nodepool_info: {
        /**
         * 节点池ID。
         * @example `np615c0e0966124216a0412e10afe0****`
         */
        nodepool_id: string;
        /**
         * 节点池名称。
         * 命名规则：由数字、汉字、英文字符或短划线（-）组成，长度范围1~63个字符，且不能以短划线（-）开头。
         * @example `default-nodepool`
         */
        name: string;
        /**
         * 节点池类型。
         * @example `ess`
         */
        type: string;
        /**
         * 是否为默认节点池，通常一个集群仅有一个默认节点池。取值：
         * `true`：设置为默认节点池。
         * `false`：不设置为默认节点池。
         * @example `true`
         */
        is_default: boolean;
        /**
         * 资源组ID。
         * @example `rg-acfmyvw3wjmb****`
         */
        resource_group_id: string;
        /**
         * 地域ID。
         * @example `cn-beijing`
         */
        region_id: string;
        /**
         * 节点池创建时间。
         * @example `2020-09-27T19:14:09.156823496+08:00`
         */
        created: string;
        /**
         * 节点池更新时间。
         * @example `2020-09-27T20:37:46+08:00`
         */
        updated: string;
    };
    /**
     * 节点池状态配置。
     */
    status: {
        /**
         * 节点池状态，取值：
         * - `active`：已激活。
         * - `scaling`：伸缩中。
         * - `removing`：节点移除中。
         * - `deleting`：删除中。
         * - `updating`：更新中。
         * @example `active`
         */
        state: string;
        /**
         * 健康节点数。
         * @example `3`
         */
        healthy_nodes: number;
        /**
         * 正在创建节点数。
         * @example `0`
         */
        initial_nodes: number;
        /**
         * 失败节点数。
         * @example `0`
         */
        failed_nodes: number;
        /**
         * 离线节点数。
         * @example `0`
         */
        offline_nodes: number;
        /**
         * 正在被移除节点数。
         * @example `0`
         */
        removing_nodes: number;
        /**
         * 工作中节点数。
         * @example `3`
         */
        serving_nodes: number;
        /**
         * 节点池内总节点数。
         * @example `3`
         */
        total_nodes: number;
    };
    /**
     * 自动伸缩节点池配置。
     */
    auto_scaling: {
        /**
         * 是否启用自动伸缩。取值：
         * - `true`：开启节点池自动伸缩功能。
         * - `false`：不开启自动伸缩，当取值为false时，`auto_scaling`内的其他配置参数将不生效。
         * @example `true`
         */
        enable: boolean;
        /**
         * 自动伸缩类型，按照自动伸缩实例类型划分。取值：
         * - `cpu`：普通实例型。
         * - `gpu`：GPU实例型。
         * - `gpushare`：GPU共享型。
         * - `spot`：抢占式实例型。
         * @example `cpu`
         */
        type: string;
        /**
         * 最大实例数。
         * @example `10`
         */
        max_instances: number;
        /**
         * 最小实例数。
         * @example `1`
         */
        min_instances: number;
        /**
         * EIP计费类型，取值：
         * - `PayByBandwidth`：按固定带宽计费。
         * - `PayByTraffic`：按使用流量计费。
         * @example `PayByBandwidth`
         */
        eip_internet_charge_type: string;
        /**
         * 是否绑定EIP，取值：
         * - `true`：绑定EIP。
         * - `false`：不绑定EIP。
         * @example `true`
         */
        is_bond_eip: boolean;
        /**
         * EIP带宽峰值。
         * @example `5`
         */
        eip_bandwidth: number;
    };
    /**
     * 托管节点池配置。
     */
    management: {
        /**
         * 是否开启托管版节点池，取值：
         * - `true`：开启托管节点池。
         * - `false`：不开启托管节点池，只有当`enable=true`时，其他相关配置才生效。
         * @example `true`
         */
        enable: boolean;
        /**
         * 自动修复，仅当`enable=true`时生效。
         * - `true`：自动修复。
         * - `false`：不自动修复。
         * @example `true`
         */
        auto_repair: boolean;
        /**
         * 自动修复节点策略。
         */
        auto_repair_policy: {
            /**
             * 是否允许重启节点。
             * @example `true`
             */
            restart_node: boolean;
        };
        /**
         * 是否自动修复CVE。
         * @example `true`
         */
        auto_vul_fix: boolean;
        /**
         * 自动修复CVE策略。
         */
        auto_vul_fix_policy: {
            /**
             * 是否允许重启节点。
             * @example `true`
             */
            restart_node: boolean;
            /**
             * 允许自动修复的漏洞级别，以逗号分隔。
             * @example `asap,nntf`
             */
            vul_level: string;
        };
        /**
         * 是否自动升级。
         * @example `true`
         */
        auto_upgrade: boolean;
        /**
         * 自动升级策略。
         */
        auto_upgrade_policy: {
            /**
             * 是否允许自动升级kubelet。
             * @example `true`
             */
            auto_upgrade_kubelet: boolean;
        };
        /**
         * 自动升级配置，仅当`enable=true`时生效。
         */
        upgrade_config: {
            /**
             * 是否启用自动升级，取值：
             * - `true`：启用自动升级。
             * - `false`：不启用自动升级。
             * @example `true`
             */
            auto_upgrade: boolean;
            /**
             * 额外节点数量。
             * @example `5`
             */
            surge: number;
            /**
             * 额外节点比例，和`surge`二选一。
             * @example `50`
             */
            surge_percentage: number;
            /**
             * 最大不可用节点数量，取值范围：\[1,1000\]。
             * 默认值：1。
             * @example `1`
             */
            max_unavailable: number;
        };
    };
    /**
     * 扩容组配置。
     */
    scaling_group: {
        /**
         * 伸缩组ID。
         * @example `asg-2zeieod8giqmov7z****`
         */
        scaling_group_id: string;
        /**
         * 虚拟交换机ID，取值范围：\[1,20\]。
         * > 为保证高可用性，建议选择不同可用区的虚拟交换机。
         */
        vswitch_ids: string[];
        /**
         * 节点实例规格列表，您可以选择多个实例规格作为备选，每个节点创建时，将从第一个规格开始尝试购买，直到创建成功。最终购买的实例规格可能随库存变化而不同。
         */
        instance_types: string[];
        /**
         * 节点池节点付费类型，取值：
         * - `PrePaid`：预付费。
         * - `PostPaid`：按量付费。
         * @example `PostPaid`
         */
        instance_charge_type: string;
        /**
         * 节点包年包月时长，当`instance_charge_type`取值为`PrePaid`时才生效且为必选值。
         * 当`PeriodUnit=Month`时，取值范围：{1, 2 , 3, 6, 12, 24, 36, 48, 60}。
         * @example `0`
         */
        period: number;
        /**
         * 节点付费周期，当`instance_charge_type`取值为`PrePaid`时时候需要指定周期。
         * `Month`：目前只支持以月为单位。
         * @example `Month`
         */
        period_unit: string;
        /**
         * 节点是否开启自动续费，当`instance_charge_type`取值为`PrePaid`时才生效，取值：
         * - `true`：自动续费。
         * - `false`：不自动续费。
         * @example `false`
         */
        auto_renew: boolean;
        /**
         * 节点自动续费周期。当`instance_charge_type`取值为`PrePaid`时才生效，且为必选值。
         * 当`PeriodUnit=Month`时，取值范围：{1, 2, 3, 6, 12}。
         * @example `1`
         */
        auto_renew_period: number;
        /**
         * 抢占式实例类型，取值：
         * - NoSpot：非抢占式实例。
         * - SpotWithPriceLimit：设置抢占实例价格上限。
         * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
         * 更多信息，请参见[抢占式实例](~~157759~~)。
         * @example `NoSpot`
         */
        spot_strategy: string;
        /**
         * 抢占实例市场价格区间配置。
         */
        spot_price_limit: {
            /**
             * 抢占式实例规格。
             * @example `ecs.c6.large`
             */
            instance_type: string;
            /**
             * 单台实例市场价格。
             * <props="china">单位：元/时。
             * </props>
             * <props="intl">单位：美元/时。</props>
             * @example `0.39`
             */
            price_limit: string;
        }[];
        /**
         * 操作系统镜像类型。
         * @example `AliyunLinux`
         */
        image_type: string;
        /**
         * 自定义镜像ID，可通过`DescribeKubernetesVersionMetadata`查询系统支持的镜像。
         * @example `aliyun_2_1903_x64_20G_alibase_20200529.vhd`
         */
        image_id: string;
        /**
         * 节点系统盘类型，取值：
         * - `cloud`：普通云盘。
         * - `cloud_efficiency`：高效云盘。
         * - `cloud_ssd`：SSD云盘。
         * - `cloud_essd`：ESSD云盘。
         * - `cloud_auto`：ESSD AutoPL 云盘。
         * - `cloud_essd_entry`：ESSD Entry 云盘。
         * 默认值：`cloud_efficiency`
         * @example `cloud_efficiency`
         */
        system_disk_category: string;
        /**
         * 系统盘的多磁盘类型。当无法使用高优先级的磁盘类型时，自动尝试下一优先级的磁盘类型创建系统盘。取值：
         * - `cloud`：普通云盘。
         * - `cloud_efficiency`：高效云盘。
         * - `cloud_ssd`：SSD云盘。
         * - `cloud_essd`：ESSD云盘。
         * - `cloud_auto`：ESSD AutoPL 云盘。
         * - `cloud_essd_entry`：ESSD Entry 云盘。
         * 默认值：`cloud_efficiency`
         */
        system_disk_categories: string[];
        /**
         * 节点系统盘大小，单位为GiB。
         * 取值范围：\[20,500\]。
         * @example `120`
         */
        system_disk_size: number;
        /**
         * 节点系统盘磁盘性能，只针对ESSD磁盘生效。
         * @example `PL1`
         */
        system_disk_performance_level: string;
        /**
         * 是否加密系统盘。取值：
         * - `true`：加密。
         * - `false`：不加密。
         * @example `false`
         */
        system_disk_encrypted: boolean;
        /**
         * 系统盘使用的KMS密钥ID。
         * @example `0e478b7a-4262-4802-b8cb-00d3fb40****`
         */
        system_disk_kms_key_id: string;
        /**
         * 系统盘采用的加密算法。取值范围：aes-256。
         * @example `aes-256`
         */
        system_disk_encrypt_algorithm: string;
        /**
         * 节点系统盘是否开启Burst（性能突发），磁盘类型为cloud_auto时配置。
         * @example `true`
         */
        system_disk_bursting_enabled: boolean;
        /**
         * 节点系统盘预配置的读写IOPS，磁盘类型为cloud_auto时配置。
         * @example `1000`
         */
        system_disk_provisioned_iops: number;
        /**
         * 节点数据盘类型、大小等配置的组合。
         */
        data_disks: any[];
        /**
         * 节点池安全组ID列表。
         */
        security_group_ids: string[];
        /**
         * 密钥对名称，和`login_password`二选一。当节点池为托管版节点池时，只支持`key_pair`。
         * @example `pro-nodepool`
         */
        key_pair: string;
        /**
         * SSH登录密码，和`key_pair`二选一。密码规则为8~30个字符，且至少同时包含三项（大小写字母、数字和特殊符号）。
         * 出于安全性考虑，密码查询结果经过加密处理。
         * @example `********`
         */
        login_password: string;
        /**
         * 弹出的ECS实例是否使用以非root用户登录。
         * @example `true`
         */
        login_as_non_root: boolean;
        /**
         * 【已废弃】请使用参数security_hardening_os替代。
         * @example `false`
         */
        cis_enabled: boolean;
        /**
         * 是否开启等保加固，仅当系统镜像选择Alibaba Cloud Linux 2或Alibaba Cloud Linux 3时，可为节点开启等保加固。阿里云为Alibaba Cloud Linux 2和Alibaba Cloud Linux 3等保2.0三级版镜像提供等保合规的基线检查标准和扫描程序。
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
         * 节点公网IP网络计费类型。
         * @example `PayByBandwidth`
         */
        internet_charge_type: string;
        /**
         * 节点公网IP出带宽最大值，单位为Mbps（Mega bit per second），取值范围：1~100。
         * @example `10`
         */
        internet_max_bandwidth_out: number;
        /**
         * 仅为ECS实例添加标签。
         * 标签键不可以重复，最大长度为128个字符；标签键和标签值都不能以“aliyun”、“acs:”开头，或包含“https://”、“http://”。
         */
        tags: any[];
        /**
         * 节点池期望节点数。
         * @example `2`
         */
        desired_size: number;
        /**
         * 多可用区伸缩组ECS实例扩缩容策略。取值：
         * - `PRIORITY`：根据您定义的虚拟交换机（VSwitchIds.N）扩缩容。当优先级较高的虚拟交换机所在可用区无法创建ECS实例时，自动使用下一优先级的虚拟交换机创建ECS实例。
         * - `COST_OPTIMIZED`：按vCPU单价从低到高进行尝试创建。当伸缩配置设置了抢占式计费方式的多实例规格时，优先创建对应抢占式实例。您可以继续通过`CompensateWithOnDemand`参数指定当抢占式实例由于库存等原因无法创建时，是否自动尝试以按量付费的方式创建。
         *   >`COST_OPTIMIZED`仅在伸缩配置设置了多实例规格或者选用了抢占式实例的情况下生效。
         * - `BALANCE`：在伸缩组指定的多可用区之间均匀分配ECS实例。如果由于库存不足等原因可用区之间变得不平衡，您可以通过API RebalanceInstances平衡资源。更多信息，请参见[RebalanceInstances](~~71516~~)。
         * 默认值：`PRIORITY`。
         * @example `BALANCE`
         */
        multi_az_policy: string;
        /**
         * 伸缩组模式，取值：
         * - `release`：标准模式，根据申请资源值的使用量，通过创建、释放ECS的方式进行伸缩。
         * - `recycle`：极速模式，通过创建、停机、启动的方式进行伸缩，提高再次伸缩的速度（停机时计算资源不收费，只收取存储费用，本地盘机型除外）。
         * @example `release`
         */
        scaling_policy: string;
        /**
         * 伸缩组所需要按量实例个数的最小值，取值范围：\[0,1000\]。当按量实例个数少于该值时，将优先创建按量实例。
         * @example `0`
         */
        on_demand_base_capacity: number;
        /**
         * 伸缩组满足最小按量实例数（`on_demand_base_capacity`）要求后，超出的实例中按量实例应占的比例。取值范围：\[0,100\]。
         * @example `20`
         */
        on_demand_percentage_above_base_capacity: number;
        /**
         * 指定可用实例规格的个数，伸缩组将按成本最低的多个规格均衡创建抢占式实例。取值范围：\[1,10\]。
         * @example `5`
         */
        spot_instance_pools: number;
        /**
         * 是否开启补齐抢占式实例。开启后，当收到抢占式实例将被回收的系统消息时，伸缩组将尝试创建新的实例，替换掉将被回收的抢占式实例。取值：
         * - `true`：开启补齐抢占式实例。
         * - `false`：不开启补齐抢占式实例。
         * @example `false`
         */
        spot_instance_remedy: boolean;
        /**
         * 当`multi_az_policy`取值为`COST_OPTIMIZED`时，如果因价格、库存等原因无法创建足够的抢占式实例，是否允许自动尝试创建按量实例满足ECS实例数量要求。取值：
         * - `true`：允许自动尝试创建按量实例满足ECS实例数量要求。
         * - `false`：不允许自动尝试创建按量实例满足ECS实例数量要求。
         * @example `true`
         */
        compensate_with_on_demand: boolean;
        /**
         * 部署集ID。
         * @example `ds-bp1d19mmbsv3jf6xxxxx`
         */
        deploymentset_id: string;
        /**
         * 如果指定了RDS实例列表，集群节点ECS会自动加入RDS访问白名单。
         */
        rds_instances: string[];
        /**
         * 私有节点池配置。
         */
        private_pool_options: {
            /**
             * 私有节点池ID。
             * @example `eap-bp67acfmxazb4****`
             */
            id: string;
            /**
             * 私有节点池类型，实例启动的私有池容量选项。弹性保障服务或容量预定服务在生效后会生成私有池容量，供实例启动时选择。取值：
             * - `Open`：开放模式。将自动匹配开放类型的私有池容量。如果没有符合条件的私有池容量，则使用公共池资源启动。
             * - `Target`：指定模式。使用指定的私有池容量启动实例，如果该私有池容量不可用，则实例会启动失败。
             * - `None`：不使用模式。实例启动将不使用私有池容量。
             * @example `Open`
             */
            match_criteria: string;
        };
        /**
         * 节点池安全组ID，当节点池绑定了多个安全组时，为`security_group_ids`中的第一个值。
         * @example `sg-2ze60ockeekspl3d****`
         */
        security_group_id: string;
        /**
         * 操作系统发行版。取值：
         * - `CentOS`
         * - `AliyunLinux`
         * - `Windows`
         * - `WindowsCore`
         * @example `AliyunLinux`
         */
        platform: string;
        /**
         * Worker RAM角色名称，授权ECS实例为集群Woker节点。
         * @example `KubernetesWorkerRole-021dc54f-929b-437a-8ae0-34c24d3e****`
         */
        ram_policy: string;
        /**
         * 实例属性
         */
        instance_patterns: any[];
    };
    /**
     * 节点配置。
     */
    node_config: {
        /**
         * Kubelet参数配置。
         */
        kubelet_configuration: any;
    };
    /**
     * 集群相关配置。
     */
    kubernetes_config: {
        /**
         * 节点标签，为Kubernetes集群节点添加标签。标签定义规则：
         * - 标签由区分大小写的键值对组成，您最多可以设置20个标签。
         * - 标签键不可以重复，最长为64个字符；标签值可以为空，最长为128个字符。标签键和标签值都不能以`aliyun`、`acs:`、`https://`或`http://`开头。更多信息，请参见[Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set)。
         */
        labels: any[];
        /**
         * 节点污点信息。污点和容忍度（Toleration）相互配合，可以用来避免Pod被分配到不合适的节点上。更多信息，请参见[taint-and-toleration](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/)。
         */
        taints: any[];
        /**
         * 容器运行时名称。
         * @example `docker`
         */
        runtime: string;
        /**
         * 容器运行时版本。
         * @example `19.03.5`
         */
        runtime_version: string;
        /**
         * 节点CPU管理策略。当集群版本在1.12.6及以上时支持以下两种策略：
         * - `static`：允许为节点上具有某些资源特征Pod增强其CPU亲和性和独占性。
         * - `none`：表示启用现有的默认CPU亲和性方案。
         * @example `none`
         */
        cpu_policy: string;
        /**
         * 节点池自定义数据。更多详情，请参见[生成实例自定义数据](~~49121~~)。
         * @example `IyEvYmluL3NoCmVjaG8gIkhlbGxvIEFDSyEi`
         */
        user_data: string;
        /**
         * 扩容后的节点是否可调度。
         * @example `true`
         */
        unschedulable: boolean;
        /**
         * 是否在ECS节点上安装云监控，安装后可以在云监控控制台查看所创建ECS实例的监控信息，推荐开启。取值：
         * - `true`：在ECS节点上安装云监控。
         * - `false`：不在ECS节点上安装云监控。
         * @example `true`
         */
        cms_enabled: boolean;
        /**
         * 节点名称由三部分组成：前缀 \+ 节点 IP 地址子串 \+ 后缀：
         * - 前缀和后缀均可由“.”分隔的一个或多个部分构成，每个部分可以使用小写字母、数字和“-”，节点名称首尾必须为小写字母和数字。
         * - IP 地址段长度指截取节点 IP 地址末尾的位数，取值范围 5-12。
         * 例如，节点 IP 地址为：192.168.0.55，指定前缀为 aliyun.com，IP 地址段长度为 5，后缀为 test，则节点名称为aliyun.com00055test。
         * @example `customized,test.,5,.com`
         */
        node_name_mode: string;
    };
    /**
     * 加密计算节集群配置。
     */
    tee_config: {
        /**
         * 是否开启加密计算集群，取值：
         * - `true`：开启。
         * - `false`：不开启。
         * @example `false`
         */
        tee_enable: boolean;
    };
    /**
     * 【该字段已废弃】
     * 边缘节点池网络相关的配置。该值只对edge类型的节点池有意义。
     */
    interconnect_config: {
        /**
         * 【该字段已废弃】
         * 边缘增强型节点池绑定的云企业网实例ID (CENID)。
         * @example `cen-ey9k9nfhz0f*******`
         */
        cen_id: string;
        /**
         * 【该字段已废弃】
         * 边缘增强型节点池绑定的云连接网实例ID (CCNID)。
         * @example `ccn-qm5i0i0q9yi*******`
         */
        ccn_id: string;
        /**
         * 【该字段已废弃】
         * 边缘增强型节点池绑定的云连接网实例所属的区域。
         * @example `cn-shanghai`
         */
        ccn_region_id: string;
        /**
         * 【该字段已废弃】
         * 边缘增强型节点池的网络带宽，单位为Mbps。
         * @example `10`
         */
        bandwidth: number;
        /**
         * 【该字段已废弃】
         * 边缘增强型节点池的购买时长，单位为月。
         * @example `1`
         */
        improved_period: string;
    };
    /**
     * 边缘节点池允许容纳的最大节点数量. 节点池内可以容纳的最大节点数量，该参数大于等于0。0表示无额外限制（仅受限于集群整体可以容纳的节点数，节点池本身无额外限制）。边缘节点池该参数值往往大于0；ess类型节点池和默认的edge类型节点池该参数值为0。
     * @example `10`
     */
    max_nodes: number;
    /**
     * 边缘节点池的网络类型。该值只对edge类型的节点池有意义。
     * - basic：基础型；
     * - dedicated：专用型。
     * @example `basic`
     */
    interconnect_mode: string;
}
