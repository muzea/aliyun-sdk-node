export interface DescribeClustersV1Response {
    /**
     * 集群信息列表。
     */
    clusters: {
        /**
         * 集群ID。
         * @example `c3fb96524f9274b4495df0f12a6b5****`
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
         * @example `2020-08-20T10:51:29+08:00`
         */
        created: string;
        /**
         * 集群版本，与Kubernetes社区基线版本保持一致。建议选择最新版本，若不指定，默认使用最新版本。
         * 目前ACK控制台提供两种最新Kubernetes版本的集群。您可以通过API创建其他Kubernetes版本集群。ACK支持的Kubernetes版本，请参见[Kubernetes版本发布概览](~~185269~~)。
         * @example `1.16.9-aliyun.1`
         */
        init_version: string;
        /**
         * 集群当前版本。
         * @example `1.16.9-aliyun.1`
         */
        current_version: string;
        /**
         * 集群可升级版本。
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
         * 集群Docker版本。
         * @example `19.03.5`
         */
        docker_version: string;
        /**
         * 集群中Ingress SLB实例。
         * 默认实例规格：性能保障型（slb.s1.small）。
         * @example `lb-2vcrbmlevo6kjpgch****`
         */
        external_loadbalancer_id: string;
        /**
         * 集群API Server访问地址，包含内网访问地址以及公网访问地址。
         * @example `{\"api_server_endpoint\":\"\",\"intranet_api_server_endpoint\":\"https://192.168.0.251:6443\"}`
         */
        master_url: string;
        /**
         * 集群元数据信息。
         * @example `{\"Addons\":[{\"config\":***}`
         */
        meta_data: string;
        /**
         * 集群名称。
         * 命名规则：由数字、汉字、英文字符或短划线（-）组成，长度范围1~63个字符，且不能以短划线（-）开头。
         * @example `cluster-demo`
         */
        name: string;
        /**
         * 集群网络模式。取值：
         * - `classic`：经典网络。
         * - `vpc`：专有网络。
         * - `overlay`：叠加网络。
         * - `calico`：Calico网络。
         * @example `vpc`
         */
        network_mode: string;
        /**
         * 集群Private Zone配置。取值：
         * - `true`：启用Private Zone。
         * - `false`：不启用Private Zone。
         * @example `false`
         */
        private_zone: boolean;
        /**
         * 集群标识，取值：
         * - `Default`：ACK托管集群，包括ACK集群Pro版和ACK集群基础版。
         * - `Edge`：ACK Edge集群，包括ACK Edge集群Pro版和ACK Edge集群基础版。
         * - `Serverless`：ACK Serverless集群，包括ACK Serverless集群Pro版和ACK Serverless集群基础版。
         * - `Lingjun`：ACK灵骏集群，提供Pro版。
         * @example `Default`
         */
        profile: string;
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
         * @example `sg-2vcgwsrwgt5mp0yi****`
         */
        security_group_id: string;
        /**
         * 集群当前节点数量，包含Master节点以及Worker节点。
         * @example `5`
         */
        size: number;
        /**
         * 集群运行状态，取值：
         * - `initial`：集群创建中。
         * - `failed`：集群创建失败。
         * - `running`：集群运行中。
         * - `updating`：集群升级中。
         * - ` updating_failed`：集群升级失败。
         * - `scaling`：集群伸缩中。
         * - `stopped`：集群已经停止运行。
         * - `deleting`：集群删除中。
         * - `deleted`：集群已经被删除。
         * - `delete_failed`：集群删除失败。
         * @example `running`
         */
        state: string;
        /**
         * Pod网络地址段，必须是有效的私有网段，即以下网段及其子网：
         * - 10.0.0.0/8
         * - 172.16-31.0.0/12-16
         * - 192.168.0.0/16
         * 不能与VPC及VPC内已有Kubernetes集群使用的网段重复，创建成功后不能修改。
         * 关于集群网络规划，请参见[VPC下Kubernetes的网络地址段规划](~~86500~~)。
         * @example `172.21.0.0/16`
         */
        subnet_cidr: string;
        /**
         * 集群资源标签。
         */
        tags: any[];
        /**
         * 集群更新时间。
         * @example `2020-09-16T11:09:55+08:00`
         */
        updated: string;
        /**
         * 集群专有网络ID，创建集群时必传。
         * @example `vpc-2vcg932hsxsxuqbgl****`
         */
        vpc_id: string;
        /**
         * 虚拟交换机ID，创建集群时可选择1~3个虚拟交换机。为保证集群高可用，建议选择不同可用区的虚拟交换机。
         * @example `vsw-2vc41xuumx5z2rdma****,vsw-2vc41xuumx5z2rdma****`
         */
        vswitch_id: string;
        /**
         * Worker RAM角色名称，授权ECS实例为集群Woker节点。
         * @example `KubernetesWorkerRole-ec87d15b-edca-4302-933f-c8a16bf0****`
         */
        worker_ram_role_name: string;
        /**
         * 集群所属可用区ID。
         * @example `cn-beijing-b`
         */
        zone_id: string;
        /**
         * 当您选择`cluster_type`为`ManagedKubernetes`并配置`profile`后，您可以进一步指定集群的规格。
         * - `ack.pro.small`：集群Pro版。
         * - `ack.standard`：集群基础版（取值为空时默认选择）。
         * @example `ack.standard`
         */
        cluster_spec: string;
        /**
         * 集群维护窗口，该功能只在ACK托管集群和ACK Serverless集群中生效。
         */
        maintenance_window: any;
    }[];
    /**
     * 分页信息。
     */
    page_info: {
        /**
         * 分页数。
         * @example `3`
         */
        page_number: number;
        /**
         * 单页大小。
         * @example `20`
         */
        page_size: number;
        /**
         * 结果总数。
         * @example `50`
         */
        total_count: number;
    };
}
