export interface DescribeClusterDetailResponse {
    /**
     * 集群ID。
     * @example `c82e6987e2961451182edacd74faf****`
     */
    cluster_id: string;
    /**
     * - `Kubernetes`: ACK专有集群。
     * - `ManagedKubernetes`：ACK托管类的集群，包括ACK托管集群（ACK集群Pro版、ACK集群基础版）、ACK Serverless集群（Pro版、基础版）、ACK Edge集群（Pro版、基础版）、ACK灵骏集群（Pro版）。
     * - `ExternalKubernetes`：注册集群。
     * @example `Kubernetes`
     */
    cluster_type: string;
    /**
     * 集群创建时间。
     * @example `2019-11-25T15:50:20+08:00`
     */
    created: string;
    /**
     * 集群初始化版本。
     * @example `1.16.6-aliyun.1`
     */
    init_version: string;
    /**
     * 集群当前版本。ACK支持的Kubernetes版本，请参见[Kubernetes版本发布概览](~~185269~~)。
     * @example `1.16.6-aliyun.1`
     */
    current_version: string;
    /**
     *
     * @example `1.18.8-aliyun.1`
     */
    next_version: string;
    /**
     * 集群删除保护，防止通过控制台或API误删除集群。取值：
     * - `true`：启用集群删除保护，将不能通过控制台或API删除集群。
     * - `false`：不启用集群删除保护，则能通过控制台或API删除集群。
     * @example `true`
     */
    deletion_protection: boolean;
    /**
     * 集群中的Docker版本。
     * @example `19.03.5`
     */
    docker_version: string;
    /**
     *
     * @example `lb-2zehc05z3b8dwiifh****`
     */
    external_loadbalancer_id: string;
    /**
     * 集群元数据信息。
     * @example `\"Addons\":***`
     */
    meta_data: string;
    /**
     * 集群名称。
     * 命名规则：由数字、汉字、英文字符或短划线（-）组成，长度范围1~63个字符，且不能以短划线（-）开头。
     * @example `cluster-demo`
     */
    name: string;
    /**
     *
     * @example `vpc`
     */
    network_mode: string;
    /**
     * 集群所在地域ID。
     * @example `cn-beijing`
     */
    region_id: string;
    /**
     * 集群资源组ID。
     * @example `rg-acfmyvw3wjm****`
     */
    resource_group_id: string;
    /**
     * 集群安全组ID。
     * @example `sg-25yq****`
     */
    security_group_id: string;
    /**
     * 集群节点数，包含Master节点及Worker节点。
     * @example `5`
     */
    size: number;
    /**
     * 集群运行状态，取值：
     * - `initial`：集群创建中。
     * - `failed`：集群创建失败。
     * - `running`：集群运行中。
     * - `updating`：集群升级中。
     * - `updating_failed`：集群升级失败。
     * - `scaling`：集群伸缩中。
     * - `waiting`：等待接入状态。
     * - `disconnected`：断开状态。
     * - `stopped`：集群已经停止运行。
     * - `deleting`：集群删除中。
     * - `deleted`：集群已经被删除。
     * - `delete_failed`：集群删除失败。
     * @example `running`
     */
    state: string;
    /**
     * 集群资源标签。
     */
    tags: any[];
    /**
     * 集群更新时间。
     * @example `2020-01-13T23:01:03+08:00`
     */
    updated: string;
    /**
     * 集群专有网络ID，创建集群时的必填参数。
     * @example `vpc-2zecuu62b9zw7a7qn****`
     */
    vpc_id: string;
    /**
     * 虚拟交换机ID，创建集群时可选择1~3个虚拟交换机。为保证集群高可用，建议选择不同可用区的虚拟交换机。
     * @example `vsw-2zete8s4qocqg0mf6****,vsw-2zete8s4qocqg0mf6****`
     */
    vswitch_id: string;
    /**
     * Pod网络地址段，必须是有效的私有网段，即以下网段及其子网：
     * - 10.0.0.0/8
     * - 172.16-31.0.0/12-16
     * - 192.168.0.0/16
     * 不能与VPC及VPC内已有Kubernetes集群使用的网段重复，创建成功后不能被修改。
     * 关于集群网络规划，请参见[VPC下Kubernetes的网络地址段规划](~~186964~~)。
     * @example `172.20.0.0/16`
     */
    subnet_cidr: string;
    /**
     *
     * @example `cn-beijing-a`
     */
    zone_id: string;
    /**
     * 集群访问地址，包含内网访问地址及公网访问地址。
     * @example `{\"intranet_api_server_endpoint\":\"https://192.168.0.251:6443\"***}`
     */
    master_url: string;
    /**
     *
     * @example `false`
     */
    private_zone: boolean;
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
     * 当您选择`cluster_type`为`ManagedKubernetes`并配置`profile`后，您可以进一步指定集群的规格。
     * - `ack.pro.small`：集群Pro版。
     * - `ack.standard`：集群基础版（取值为空时默认选择）。
     * @example `ack.pro.small`
     */
    cluster_spec: string;
    /**
     * Worker RAM角色名称，授权ECS实例为集群Woker节点。
     * @example `KubernetesWorkerRole-ec87d15b-edca-4302-933f-c8a16bf0****`
     */
    worker_ram_role_name: string;
    /**
     * 集群维护窗口配置，只在专业托管版本（即：ACK Pro版集群）中生效。
     */
    maintenance_window: any;
    /**
     * 集群ROS参数集合。
     */
    parameters: any;
}
