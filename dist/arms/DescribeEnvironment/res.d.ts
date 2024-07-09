export interface DescribeEnvironmentResponse {
    /**
     * Id of the request
     * @example `C21AB7CF-B7AF-410F-BD61-82D1567F****`
     */
    RequestId: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 环境实例ID。
         * @example `env-xxxxx`
         */
        EnvironmentId: string;
        /**
         * 环境类型：
         * - CS：容器服务。
         * - ECS。
         * - Cloud：云服务。
         * @example `CS`
         */
        EnvironmentType: string;
        /**
         * 环境名称。
         * @example `env1`
         */
        EnvironmentName: string;
        /**
         * 环境的子类型：
         * - CS：目前支持ACK。
         * - ECS：目前支持ECS。
         * - Cloud：目前支持Cloud。
         * @example `ACK`
         */
        EnvironmentSubType: string;
        /**
         * 地域id
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 用户Id。
         * @example `13002222xxxx`
         */
        UserId: string;
        /**
         * 环境绑定的资源实例ID，包括容器实例ID 或 VpcId。
         * @example `vpc-xxxxx`
         */
        BindResourceId: string;
        /**
         * 绑定的资源类型。
         * @example `ECS`
         */
        BindResourceType: string;
        /**
         * 绑定资源的状态。
         * @example `running`
         */
        BindResourceStatus: string;
        /**
         * 绑定资源的Profile。
         * @example `Default`
         */
        BindResourceProfile: string;
        /**
         * 绑定vpc的网段。
         * @example `192.168.0.0/16`
         */
        BindVpcCidr: string;
        /**
         * 绑定的prometheus实例ID。
         * @example `xxxxyyyyyzzzzz`
         */
        PrometheusInstanceId: string;
        /**
         * 绑定的prometheus实例名称。
         * @example `name1`
         */
        PrometheusInstanceName: string;
        /**
         * grafana工作区id
         * @example `grafana-cn-i7m2qn9xa01`
         */
        GrafanaWorkspaceId: string;
        /**
         * Grafana目录唯一ID。
         * @example `xyz`
         */
        GrafanaFolderUid: string;
        /**
         * Grafana数据源唯一ID。
         * @example `zuvw`
         */
        GrafanaDatasourceUid: string;
        /**
         * VPC ID。
         * @example `vpc-8vb02uk57qbcktqcvqqqj`
         */
        VpcId: string;
        /**
         * Grafana目录URL。
         * @example `https://g.console.aliyun.com/dashboards/f/xxx/yyyy`
         */
        GrafanaFolderUrl: string;
        /**
         * 绑定资源的保存时长(天)。
         * @example `15`
         */
        BindResourceStoreDuration: string;
        /**
         * Grafana数据源名称。
         * @example `datasource1`
         */
        GrafaDataSourceName: string;
        /**
         * Grafana目录名。
         * @example `folder1`
         */
        GrafanaFolderTitle: string;
        /**
         * 托管类型：
         * - none： 非托管。ACK集群的默认值。
         * - agent：托管agent（含ksm）。ASK、ACS、AckOne集群的默认值。
         * - agent-exproter： 托管agent和exporter。云服务类型的默认值。
         * @example `none`
         */
        ManagedType: string;
        /**
         * 付费套餐。
         * * EnvironmentType为CS时：可选为CS_Basic或CS_Pro。
         * * EnvironmentType为其它值时，为空值。
         * @example `CS_Basic`
         */
        FeePackage: string;
        /**
         * 绑定prometheus实例的db状态。
         * @example `RUNNING`
         */
        DbInstanceStatus: string;
        /**
         * 环境绑定的安全组Id
         */
        SecurityGroupId: string;
        /**
         * 资源组 ID。
         * @example `rg-aek2vezare****`
         */
        ResourceGroupId: string;
        /**
         * 标签。
         */
        Tags: {
            /**
             * Tag的键。
             * @example `user1`
             */
            Key: string;
            /**
             * Tag的值
             * @example `p_运维`
             */
            Value: string;
        }[];
    };
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
}
