export interface ModifyClusterNodePoolRequest {
    /**
     * 集群ID。
     * @example `c23421cfa74454bc8b37163fd19af****`
     */
    "ClusterId": string;
    /**
     * 节点池ID。
     * @example `p31da1b38983f4511b490fc62108a****`
     */
    "NodepoolId": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 节点池配置。
         */
        nodepool_info: {
            /**
             * 节点池名称。
             * 命名规则：由数字、汉字、英文字符或短划线（-）组成，长度范围1~63个字符，且不能以短划线（-）开头。
             * @example `default-nodepool`
             */
            name: string;
            /**
             * 资源组ID。
             * @example `rg-acfmyvw3wjm****`
             */
            resource_group_id: string;
        };
        /**
         * 自动伸缩配置。
         */
        auto_scaling: {
            /**
             * 是否启用自动伸缩，取值：
             * - `true`：开启节点池自动伸缩功能。
             * - `false`：不开启自动伸缩，当取值为false时，`auto_scaling`内的其他配置参数将不生效。
             * 默认值：`false`。
             * @example `true`
             */
            enable: boolean;
            /**
             * 自动伸缩类型，按照自动伸缩实例类型划分。取值：
             * - `cpu`：普通实例型。
             * - `gpu`：GPU实例型。
             * - `gpushare`：GPU共享型。
             * - `spot`：抢占式实例型。
             * 默认值：`cpu`。
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
             * @example `2`
             */
            min_instances: number;
            /**
             * 是否绑定EIP，取值：
             * - `true`：绑定EIP。
             * - `false`：不绑定EIP。
             * 默认值：`false`。
             * @example `true`
             */
            is_bond_eip: boolean;
            /**
             * EIP计费类型，取值：
             * - `PayByBandwidth`：按固定带宽计费。
             * - `PayByTraffic`：按使用流量计费。
             * 默认值：`PayByBandwidth`。
             * @example `PayByBandwidth`
             */
            eip_internet_charge_type: string;
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
             * 是否开启托管节点池，取值：
             * - `true`：开启托管节点池。
             * - `false`：不开启托管节点池，只有当`enable=true`时，其他相关配置才生效。
             * 默认值：`false`。
             * @example `true`
             */
            enable: boolean;
            /**
             * 是否自动修复，仅当`enable=true`时生效。取值：
             * - `true`：自动修复。
             * - `false`：不自动修复。
             * 默认值：`true`。
             * @example `true`
             */
            auto_repair: boolean;
            /**
             * 自动修复节点策略。
             */
            auto_repair_policy: {
                /**
                 * 是否允许重启节点，取值：
                 * - `true`：允许重启节点。
                 * - `false`：不允许重启节点。
                 * @example `true`
                 */
                restart_node: boolean;
            };
            /**
             * 是否自动修复CVE，取值：
             * - `true`：允许自动修复CVE。
             * - `false`：不允许自动修复CVE。
             * @example `true`
             */
            auto_vul_fix: boolean;
            /**
             * 自动修复CVE策略。
             */
            auto_vul_fix_policy: {
                /**
                 * 是否允许重启节点，取值：
                 * - `true`：允许重启节点。
                 * - `false`：不允许重启节点。
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
             * 是否启用自动升级，取值：
             * - `true`：启用自动升级。
             * - `false`：不启用自动升级。
             * @example `true`
             */
            auto_upgrade: boolean;
            /**
             * 自动升级策略。
             */
            auto_upgrade_policy: {
                /**
                 * 是否允许自动升级kubelet，取值：
                 * - `true`：允许自动升级kubelet。
                 * - `false`：不允许自动升级kubelet。
                 * @example `true`
                 */
                auto_upgrade_kubelet: boolean;
                /**
                 * 是否允许自动升级运行时，仅当`auto_upgrade=true`时生效。取值：
                 * - `true`：允许自动升级运行时。
                 * - `false`：不允许自动升级运行时。
                 * 默认值为`false`
                 */
                auto_upgrade_runtime: boolean;
                /**
                 * 是否允许自动升级操作系统，仅当`auto_upgrade=true`时生效。取值：
                 * - `true`：允许自动升级操作系统。
                 * - `false`：不允许自动升级操作系统。
                 * 默认值为`false`
                 */
                auto_upgrade_os: boolean;
            };
            /**
             * 自动升级配置，仅当`enable=true`时生效。
             */
            upgrade_config: {
                /**
                 * 是否启用自动升级：
                 * - true：启用。
                 * - false：不启用。
                 * 默认值：`true`。
                 * @example `true`
                 */
                auto_upgrade: boolean;
                /**
                 * 额外节点数量。升级的时候节点会不可用，您可以创建额外节点补偿集群的负载。
                 * > 建议创建的额外节点不超过当前的节点数。
                 * @example `5`
                 */
                surge: number;
                /**
                 * 额外节点比例，和`surge`二选一。
                 * @example `0`
                 */
                surge_percentage: number;
                /**
                 * 最大不可用节点数量。
                 * 取值范围：\[1,1000\]
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
             * 虚拟交换机ID列表，取值范围\[1,20\]。
             * > 为保证高可用性，建议选择不同可用区的虚拟交换机。
             */
            vswitch_ids: string[];
            /**
             * 节点实例规格列表，您可以选择多个实例规格作为备选，每个节点创建时，将从第一个规格开始尝试购买，直到创建成功。最终购买的实例规格可能随库存变化而不同。
             */
            instance_types: string[];
            /**
             * 节点池节点付费类型，取值：
             * - `PrePaid`：预付费
             * - `PostPaid`：按量付费
             * 默认值：`PostPaid`。
             * @example `PostPaid`
             */
            instance_charge_type: string;
            /**
             * 节点包年包月时长，当`instance_charge_type`取值为`PrePaid`时才生效且为必选值。
             * 当`PeriodUnit=Month`时，取值范围：{1, 2 , 3, 6, 12, 24, 36, 48, 60}。
             * @example `1`
             */
            period: number;
            /**
             * 节点付费周期，当`instance_charge_type`取值为`PrePaid`时时候需要指定周期。
             * 目前只支持以月为计时单位。
             * 默认值：`Month`。
             * @example `Month`
             */
            period_unit: string;
            /**
             * 节点是否开启自动续费，当`instance_charge_type`取值为`PrePaid`时才生效。取值：
             * - `true`：自动续费。
             * - `false`：不自动续费。
             * 默认值：`true`。
             * @example `true`
             */
            auto_renew: boolean;
            /**
             * 节点自动续费周期。当`instance_charge_type`取值为`PrePaid`时才生效，且为必选值。
             * 当`PeriodUnit=Month`时，取值范围：{1, 2 , 3, 6, 12}。
             * @example `1`
             */
            auto_renew_period: number;
            /**
             * 抢占式实例类型，取值：
             * - `NoSpot`：非抢占式实例。
             * - `SpotWithPriceLimit`：设置抢占实例价格上限。
             * - `SpotAsPriceGo`：系统自动出价，跟随当前市场实际价格。
             * 更多信息，请参见[抢占式实例](~~157759~~)。
             * @example `SpotWithPriceLimit`
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
                 * 单台实例上限价格。
                 * <props="china">单位：元/小时。
                 * </props>
                 * <props="intl">单位：美元/小时。</props>
                 * @example `0.39`
                 */
                price_limit: string;
            }[];
            /**
             * 操作系统发行版类型，推荐使用该字段指定节点操作系统。取值：
             * - `AliyunLinux`：Alinux2镜像。
             * - `AliyunLinuxSecurity`：Alinux2镜像UEFI版。
             * - `AliyunLinux3`：Alinux3镜像。
             * - `AliyunLinux3Arm64`：Alinux3镜像ARM版。
             * - `AliyunLinux3Security`：Alinux3镜像UEFI版。
             * - `CentOS`：CentOS镜像。
             * - `Windows`：Windows镜像。
             * - `WindowsCore`：WindowsCore镜像。
             * - `ContainerOS`：容器优化镜像。
             * @example `AliyunLinux`
             */
            image_type: string;
            /**
             * 自定义镜像ID。可通过`DescribeKubernetesVersionMetadata`查询系统支持的镜像，默认使用系统最新镜像。
             * @example `aliyun_2_1903_x64_20G_alibase_20200904.vhd`
             */
            image_id: string;
            /**
             * 节点系统盘类型，取值：
             * - `cloud_efficiency`：高效云盘。
             * - `cloud_ssd`：SSD云盘。
             * 默认值：`cloud_ssd`。
             * @example `cloud_efficiency`
             */
            system_disk_category: string;
            /**
             * 系统盘的多磁盘类型。当无法使用高优先级的磁盘类型时，自动尝试下一优先级的磁盘类型创建系统盘。取值范围：cloud：普通云盘。cloud_efficiency：高效云盘。cloud_ssd：SSD云盘。cloud_essd：ESSD云盘。
             */
            system_disk_categories: string[];
            /**
             * 节点系统盘大小，单位为GiB。
             * 取值范围：\[20,500\]。
             * 该参数的取值必须大于或者等于max{20, ImageSize}。
             * 默认值：max{40, 参数ImageId对应的镜像大小}。
             * @example `120`
             */
            system_disk_size: number;
            /**
             * 节点系统盘磁盘性能等级， 仅对ESSD磁盘生效。磁盘性能等级和磁盘大小有关。更多信息，请参见[ESSD云盘](~~122389~~)
             * @example `PL1`
             */
            system_disk_performance_level: string;
            /**
             * 是否加密系统盘。取值范围：true：加密。false：不加密。
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
             * 节点系统盘预配置的读写IOPS，磁盘类型为cloud_auto时配置。
             * @example `1000`
             */
            system_disk_provisioned_iops: number;
            /**
             * 节点系统盘是否开启Burst（性能突发），磁盘类型为cloud_auto时配置。
             * @example `true`
             */
            system_disk_bursting_enabled: boolean;
            /**
             * 节点数据盘配置，取值范围\[0,10\]。最多支持添加10块数据盘。
             */
            data_disks: any[];
            /**
             * 密钥对名称，和`login_password`二选一。当节点池为托管版节点池时，只支持`key_pair`。
             * @example `pro-nodepool`
             */
            key_pair: string;
            /**
             * SSH登录密码，和`key_pair`二选一。密码规则为8~30个字符，且至少同时包含三项（大小写字母、数字和特殊符号）。
             * @example `Hello1234`
             */
            login_password: string;
            /**
             * 公网IP收费类型。取值：
             * - `PayByBandwidth`：按固定带宽计费。
             * - `PayByTraffic`：按使用流量计费。
             * @example `PayByBandwidth`
             */
            internet_charge_type: string;
            /**
             * 节点公网IP出带宽最大值，单位为Mbps（Mega bit per second），取值范围：\[1,100\]。
             * @example `5`
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
             *   > `COST_OPTIMIZED`仅在伸缩配置设置了多实例规格或者选用了抢占式实例的情况下生效。
             * - `BALANCE`：在伸缩组指定的多可用区之间均匀分配ECS实例。如果由于库存不足等原因可用区之间变得不平衡，您可以通过API `RebalanceInstances`平衡资源。更多信息，请参见[RebalanceInstances](~~71516~~)。
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
             * RDS实例列表。
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
             * 操作系统平台。取值：
             * - `AliyunLinux`
             * - `CentOS`
             * - `Windows`
             * - `WindowsCore`
             * @example `AliyunLinux`
             */
            platform: string;
            instance_patterns: any[];
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
             * 节点污点配置。
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
             * 默认值：`none`。
             * @example `none`
             */
            cpu_policy: string;
            /**
             * 扩容后的节点是否不可调度。
             * @example `false`
             */
            unschedulable: boolean;
            /**
             * 节点池自定义数据。更多信息，请参见[生成实例自定义数据](~~49121~~)。
             * @example `IyEvdXNyL2Jpbi9iYXNoCmVjaG8gIkhlbGxvIEFDSyEi`
             */
            user_data: string;
            /**
             * 是否在ECS节点上安装云监控，安装后可以在云监控控制台查看所创建ECS实例的监控信息，推荐开启。取值：
             * - `true`：在ECS节点上安装云监控。
             * - `false`：不在ECS节点上安装云监控。
             * 默认值：`false`。
             * @example `true`
             */
            cms_enabled: boolean;
        };
        /**
         * 加密计算集群配置。
         */
        tee_config: {
            /**
             * 是否开启加密计算集群，取值：
             * - `true`：开启。
             * - `false`：不开启。
             * 默认值：`false`。
             * @example `false`
             */
            tee_enable: boolean;
        };
        /**
         * 同步更新节点标签及污点。
         * @example `true`
         */
        update_nodes: boolean;
        /**
         * 是否并发。
         * @example `true`
         */
        concurrency: boolean;
    };
}
