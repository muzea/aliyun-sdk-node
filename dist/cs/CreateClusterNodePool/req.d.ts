export interface CreateClusterNodePoolRequest {
    /**
     * 集群ID。
     * @example `c61da77e8bfbc4c4c999af2b51b65****`
     */
    "ClusterId": string;
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
             * @example `nodepool-test`
             */
            name: string;
            /**
             * 节点池类型，取值范围：
             * - `ess`：普通节点池（包含托管功能和自动弹性伸缩功能）。
             * - `edge`：边缘节点池。
             * - `lingjun`：灵骏节点池。
             * @example `ess`
             */
            type: string;
            /**
             * 节点池的资源组ID，节点池弹出的实例将属于该资源组内。
             * @example `rg-acfmyvw3wjmb****`
             */
            resource_group_id: string;
        };
        /**
         * 自动弹性伸缩配置。
         */
        auto_scaling: {
            /**
             * 是否启用自动伸缩。取值：
             * - `true`：开启节点池自动伸缩功能。
             * - `false`：不开启自动伸缩，当取值为false时，其他`auto_scaling`配置参数将不生效。
             * 默认值：`false`。
             * @example `false`
             */
            enable: boolean;
            /**
             * 自动弹性伸缩实例类型。仅当`enable=true`生效，取值：
             * - `cpu`：普通实例型。
             * - `gpu`：GPU实例型。
             * - `gpushare`：GPU共享型。
             * - `spot`：抢占式实例型。
             * 默认值：`cpu`。
             * ><notice>节点池创建后，该字段不支持修改></notice>
             * @example `cpu`
             */
            type: string;
            /**
             * 自动伸缩最大实例数，节点池的节点数将不会超过该值。仅当`enable=true`生效，取值范围[min_instances, 2000]，默认值为0。
             * @example `10`
             */
            max_instances: number;
            /**
             * 自动伸缩最小实例数，节点池的节点数将不会低于该值。仅当`enable=true`生效，取值范围[0, max_instances]，默认值为0。
             * @example `1`
             */
            min_instances: number;
            /**
             * 【该字段已废弃】
             * 是否绑定EIP。取值：
             * - `true`：绑定EIP。
             * - `false`：不绑定EIP。
             * 默认值：`false`。
             * <danger>该字段已废弃，请使用internet_charge_type和internet_max_bandwidth_out替代></danger>
             * @example `true`
             */
            is_bond_eip: boolean;
            /**
             * 【该字段已废弃】
             * EIP计费类型。取值：
             * - `PayByBandwidth`：按固定带宽计费。
             * - `PayByTraffic`：按使用流量计费。
             * 默认值：`PayByBandwidth`。
             * ><danger>该字段已废弃，请使用internet_charge_type和internet_max_bandwidth_out替代></danger>
             * @example `PayByBandwidth`
             */
            eip_internet_charge_type: string;
            /**
             * 【该字段已废弃】
             * EIP带宽峰值。单位：Mbps。
             * ><danger>该字段已废弃，请使用internet_charge_type和internet_max_bandwidth_out替代></danger>
             * @example `5`
             */
            eip_bandwidth: number;
        };
        /**
         * 节点池托管功能配置。
         */
        management: {
            /**
             * 是否开启节点池的托管功能，取值：
             * - `true`：开启托管功能。
             * - `false`：不开启托管功能，只有当enable=true时，其他相关配置才生效。
             * 默认值：false。
             * @example `false`
             */
            enable: boolean;
            /**
             * 是否自动修复节点，仅当`enable=true`时生效。
             * - `true`：自动修复。
             * - `false`：不自动修复。
             * 当`enable=true`时，默认值为`true`，当`enable=false`时，默认值为`false`
             * @example `true`
             */
            auto_repair: boolean;
            /**
             * 自动修复节点策略。
             */
            auto_repair_policy: {
                /**
                 * 是否允许重启节点，仅当`auto_repair=true`时生效。取值：
                 * - `true`：允许重启节点。
                 * - `false`：不允许重启节点。
                 * 当`auto_repair=true`时，默认值为`true`，当`auto_repair=false`时，默认值为`false`
                 * @example `true
                `
                 */
                restart_node: boolean;
            };
            /**
             * 是否自动修复CVE漏洞，仅当`enable=true`时生效。
             * - `true`：允许自动修复CVE。
             * - `false`：不允许自动修复CVE。
             * 当`enable=true`时，默认值为`true`，当`enable=false`时，默认值为`false`
             * @example `true`
             */
            auto_vul_fix: boolean;
            /**
             * 自动修复CVE策略。
             */
            auto_vul_fix_policy: {
                /**
                 * 是否允许重启节点，仅当`auto_vul_fix=true`时生效。取值：
                 * - `true`：允许重启节点。
                 * - `false`：不允许重启节点。
                 * 当`auto_vul_fix=true`时，默认值为`false`，当`auto_vul_fix=false`时，默认值为`false`
                 * @example `false`
                 */
                restart_node: boolean;
                /**
                 * 允许自动修复的漏洞级别，以英文逗号分隔，例如：`asap,later`。支持的漏洞级别：
                 * - `asap`：高
                 * - `later`：中
                 * - `nntf`：低
                 * 当`auto_vul_fix=true`时，默认值为`asap`
                 * @example `asap,nntf`
                 */
                vul_level: string;
            };
            /**
             * 是否自动升级节点，仅当`enable=true`时生效。
             * - `true`：启用自动升级。
             * - `false`：不启用自动升级。
             * 当`enable=true`时，默认值为`true`，当`enable=false`时，默认值为`false`
             * @example `true
            `
             */
            auto_upgrade: boolean;
            /**
             * 自动升级节点策略。
             */
            auto_upgrade_policy: {
                /**
                 * 是否允许自动升级kubelet，仅当`auto_upgrade=true`时生效。取值：
                 * - `true`：允许自动升级kubelet。
                 * - `false`：不允许自动升级kubelet。
                 * 当`auto_upgrade=true`时，默认值为`true`，当`auto_upgrade=false`时，默认值为`false`
                 * @example `true
                `
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
                 * 是否启用自动升级，取值：
                 * - `true`：启用自动升级。
                 * - `false`：不启用自动升级。
                 * ><danger>该字段已废弃，请使用上层的auto_upgrade替代></danger>
                 * @example `false`
                 */
                auto_upgrade: boolean;
                /**
                 * 额外节点数量。
                 * @example `0`
                 */
                surge: number;
                /**
                 * 额外节点比例， 和`surge`二选一。
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
         * 节点池伸缩组配置。
         */
        scaling_group: {
            /**
             * 虚拟交换机ID列表，取值范围：\[1,8\]。
             * > 为保证高可用性，建议选择不同可用区的虚拟交换机。
             */
            vswitch_ids: string[];
            /**
             * 节点池节点实例规格列表，节点池弹出节点时，将从指定的实例规格列表中，挑选出符合要求的实例规格弹出实例。支持的实例规格数量范围：[1,10]
             * > 为保证高可用性，建议选择多个实例规格。
             */
            instance_types: string[];
            /**
             * 节点池节点付费类型，取值：
             *
             * - `PrePaid`：预付费实例。
             * - `PostPaid`：按量付费实例。
             * 默认值：`PostPaid`。
             * @example `PostPaid`
             */
            instance_charge_type: string;
            /**
             * 节点池节点包年包月时长，仅当`instance_charge_type`取值为`PrePaid`时生效，且为必选值。
             * - 当`period_unit=Week`时，`period`取值范围：{ 1、2、3、4}。
             * - 当`period_unit=Month`时，`period` 取值范围：{1、2、3、4、5、6、7、8、9、12、24、36、48、60}。
             * @example `1`
             */
            period: number;
            /**
             * 节点池节点付费周期，仅当`instance_charge_type`取值为`PrePaid`时生效，且为必选值。
             * - `Month`：以月为计时单位。
             * - `Week`：以周为计算单位。
             * 默认值`Month`
             * @example `Month`
             */
            period_unit: string;
            /**
             * 节点池节点是否开启自动续费，当`instance_charge_type`取值为`PrePaid`时才生效。取值：
             * - `true`：自动续费。
             * - `false`：不自动续费。
             * 默认值：`false`。
             * @example `true`
             */
            auto_renew: boolean;
            /**
             * 节点池节点自动续费周期，当选择预付费和自动续费时才生效，且为必选值。当`PeriodUnit=Month`时，取值范围：{1, 2, 3, 6, 12}。
             * 默认值：1
             * @example `1`
             */
            auto_renew_period: number;
            /**
             * 抢占式实例类型。取值：
             * - `NoSpot`：非抢占式实例。
             * - `SpotWithPriceLimit`：设置抢占实例价格上限。
             * - `SpotAsPriceGo`：系统自动出价，跟随当前市场实际价格。
             * 更多信息，请参见[抢占式实例](~~165053~~)。
             * @example `NoSpot`
             */
            spot_strategy: string;
            /**
             * 当前单台抢占式实例规格市场价格区间配置。
             */
            spot_price_limit: {
                /**
                 * 抢占式实例规格。
                 * @example `ecs.c6.large`
                 */
                instance_type: string;
                /**
                 * 单台实例上限价格。
                 * @example `0.39`
                 */
                price_limit: string;
            }[];
            /**
             * 操作系统镜像类型，和`platform`参数二选一，取值范围：
             * - `AliyunLinux`：Alinux2镜像。
             * - `AliyunLinuxSecurity`：Alinux2镜像UEFI版。
             * - `AliyunLinux3`：Alinux3镜像。
             * - `AliyunLinux3Arm64`：Alinux3镜像ARM版。
             * - `AliyunLinux3Security`：Alinux3镜像UEFI版。
             * - `CentOS`：CentOS镜像。
             * - `Windows`：Windows镜像。
             * - `WindowsCore`：WindowsCore镜像。
             * - `ContainerOS`：容器优化镜像。
             * @example `AliyunLinux3`
             */
            image_type: string;
            /**
             * 自定义镜像ID，默认使用系统提供的镜像。
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
             * 系统盘的多磁盘类型。当无法使用高优先级的磁盘类型时，自动尝试下一优先级的磁盘类型创建系统盘。取值范围：
             * - `cloud`：普通云盘。
             * - `cloud_efficiency`：高效云盘。
             * - `cloud_ssd`：SSD云盘。
             * - `cloud_essd`：ESSD云盘。
             * - `cloud_auto`：ESSD AutoPL云盘。
             * - `cloud_essd_entry`：ESSD Entry云盘。
             */
            system_disk_categories: string[];
            /**
             * 节点系统盘大小，单位：GiB。
             * 取值范围：\[20,20248\]。
             * @example `120`
             */
            system_disk_size: number;
            /**
             * 节点系统盘磁盘性能，只对ESSD磁盘生效。
             * - PL0：并发极限I/O性能中等，读写时延较为稳定。
             * - PL1：并发极限I/O性能中等，读写时延较为稳定。
             * - PL2：并发极限I/O性能较高，读写时延稳定。
             * - PL3：并发极限I/O性能极高，读写时延极稳定。
             * > 云盘支持以上四种磁盘性能。但实际创建时，此处可选的性能与您所选的ECS实例规格有关。更多信息，请参见[实例规格族](~~25378~~)。
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
             * 节点系统盘是否开启Burst（性能突发）。 取值：
             * - true：是。
             * - false：否。
             * 当`SystemDiskCategory`取值为`cloud_auto`时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。
             * @example `true`
             */
            system_disk_bursting_enabled: boolean;
            /**
             * 节点系统盘预配置的读写IOPS。可能值：0~min{50,000, 1000\*容量-基准性能}。 基准性能=min{1,800+50\*容量, 50000}。
             * 当`SystemDiskCategory`取值为`cloud_auto`时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。
             * @example `1000`
             */
            system_disk_provisioned_iops: number;
            /**
             * 节点池节点数据盘配置。
             */
            data_disks: any[];
            /**
             * 安全组ID列表，与`security_group_id`二选一，推荐使用`security_group_ids`，当同时指定`security_group_id`和`security_group_ids`将优先使用`security_group_ids`。
             */
            security_group_ids: string[];
            /**
             * 免密登录密钥对名称，和`login_password`二选一。
             * >如果创建托管节点池，则只支持`key_pair`。
             * @example `np-key-name`
             */
            key_pair: string;
            /**
             * SSH登录密码，和`key_pair `二选一。密码规则为8~30个字符，且至少同时包含三项（大小写字母、数字和特殊符号）。
             * @example `Hello1234`
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
             */
            security_hardening_os: boolean;
            /**
             * 公网IP收费类型。取值：
             * - PayByBandwidth：按固定带宽计费。
             * - PayByTraffic：按使用流量计费。
             * @example `PayByTraffic`
             */
            internet_charge_type: string;
            /**
             * 节点公网IP出带宽最大值，单位为Mbps（Mega bit per second），取值范围：\[1,100\]
             * @example `5`
             */
            internet_max_bandwidth_out: number;
            /**
             * 仅为ECS实例添加标签。
             * 标签键不可以重复，最大长度为128个字符；标签键和标签值都不能以“aliyun”、“acs:”开头，或包含“https://”、“http://”。
             */
            tags: {
                /**
                 * 标签的名称。
                 * @example `node-k-1`
                 */
                key: string;
                /**
                 * 标签值。
                 * @example `node-v-1`
                 */
                value: string;
            }[];
            /**
             * 节点池期望节点数量。
             * @example `0`
             */
            desired_size: number;
            /**
             * 多可用区伸缩组ECS实例扩缩容策略。取值：
             * - `PRIORITY`：根据您定义的虚拟交换机（VSwitchIds.N）扩缩容。当优先级较高的虚拟交换机所在可用区无法创建ECS实例时，自动使用下一优先级的虚拟交换机创建ECS实例。
             * - `COST_OPTIMIZED`：按vCPU单价从低到高进行尝试创建。当伸缩配置设置了抢占式计费方式的多实例规格时，优先创建对应抢占式实例。您可以继续通过`CompensateWithOnDemand`参数指定当抢占式实例由于库存等原因无法创建时，是否自动尝试以按量付费的方式创建。
             *   >`COST_OPTIMIZED`仅在伸缩配置设置了多实例规格或者选用了抢占式实例的情况下生效。
             * - `BALANCE`：在伸缩组指定的多可用区之间均匀分配ECS实例。如果由于库存不足等原因可用区之间变得不平衡，您可以通过API [RebalanceInstances](~~71516~~)平衡资源。
             * 默认值：`PRIORITY`。
             * @example `COST_OPTIMIZED`
             */
            multi_az_policy: string;
            /**
             * 伸缩组模式，取值：
             * - `release`：标准模式，根据申请资源值的使用量，通过创建、释放ECS的方式进行伸缩。
             * - `recycle`：极速模式，通过创建、停机、启动的方式进行伸缩，提高再次伸缩的速度（停机时计算资源不收费，只收取存储费用，本地盘机型除外）。
             * 默认值：`release`。
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
             * 节点池安全组ID，与`security_group_ids`二选一，推荐使用`security_group_ids`。
             * @example `sg-wz9a8g2mt6x5llu0****`
             */
            security_group_id: string;
            /**
             * 操作系统发行版。取值：
             * - `CentOS`
             * - `AliyunLinux`
             * - `Windows`
             * - `WindowsCore`
             * 默认值：`AliyunLinux`。
             * @example `AliyunLinux`
             */
            platform: string;
            /**
             * 实例属性
             */
            instance_patterns: any[];
        };
        /**
         * 节点配置
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
             * 节点标签，为Kubernetes集群节点添加标签。
             */
            labels: any[];
            /**
             * 污点配置。
             */
            taints: any[];
            /**
             * 容器运行时。
             * @example `containerd`
             */
            runtime: string;
            /**
             * 容器运行时版本。
             * @example `1.6.20`
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
             * 节点自定义数据。
             * @example `dGhpcyBpcyBhIGV4YW1wbGU=`
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
             * 默认值：`false`。
             * @example `true`
             */
            cms_enabled: boolean;
            /**
             * 节点名称由三部分组成：前缀 \+ 节点 IP \+ 后缀：
             * - 前缀和后缀均可由“.”分隔的一个或多个部分构成，每个部分可以使用小写字母、数字和“-”，节点名称首尾必须为小写字母和数字；
             * - 节点 IP为完整的节点私网 IP 地址；
             * 传参包含四个部分，由逗号分隔，例如：参数传入"customized,aliyun,ip,com"字符串（其中“customized”和"ip"为固定的字符串，aliyun为前缀，com为后缀），则节点的名称为：aliyun192.168.xxx.xxxcom。
             * @example `customized,aliyun,ip,com`
             */
            node_name_mode: string;
        };
        /**
         * 加密计算集群配置。
         */
        tee_config: {
            /**
             * 是否开启加密计算集群。
             * @example `true`
             */
            tee_enable: boolean;
        };
        /**
         * 【该字段已废弃】
         * 边缘节点池配置。
         */
        interconnect_config: {
            /**
             * 【该字段已废弃】
             * 边缘增强型节点池绑定的云企业网实例ID(CENID)。
             * @example `cen-ey9k9nfhz0f*******`
             */
            cen_id: string;
            /**
             * 【该字段已废弃】
             * 边缘增强型节点池绑定的云连接网实例ID(CCNID)。
             * @example `ccn-qm5i0i0q9yi*******`
             */
            ccn_id: string;
            /**
             * 【该字段已废弃】
             * 边缘增强型节点池绑定的云连接网实例所属的地域。
             * @example `cn-shanghai`
             */
            ccn_region_id: string;
            /**
             * 【该字段已废弃】
             * 边缘增强型节点池的网络带宽，单位：Mbps。
             * @example `10`
             */
            bandwidth: number;
            /**
             * 【该字段已废弃】
             * 边缘增强型节点池的购买时长，单位：月。
             * @example `1`
             */
            improved_period: string;
        };
        /**
         * 【该字段已废弃，请使用desired_size代替】
         * 节点池节点数量。
         * @example `1`
         */
        count: number;
        /**
         * 边缘节点池允许容纳的最大节点数量.。该参数大于等于0。0表示无额外限制（仅受限于集群整体可以容纳的节点数，节点池本身无额外限制）。边缘节点池该参数值往往大于0；ess类型节点池和默认的edge类型节点池该参数值为0。
         * @example `10`
         */
        max_nodes: number;
        /**
         * 边缘节点池的网络类型，该值只对`type`为`edge`类型的节点池有意义，取值范围：
         * - `basic`：基础型。
         * - `private`: 专用型。1.22及以上版本支持。
         * @example `basic`
         */
        interconnect_mode: string;
    };
}
