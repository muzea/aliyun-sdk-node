export interface ListEnvironmentsResponse {
    /**
     * Id of the request
     * @example `1A9C645C-C83F-4C9D-8CCB-29BEC9E1****`
     */
    RequestId: string;
    /**
     * 操作是否成功：true：操作成功                                 false：操作失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 环境集合。
         */
        Environments: {
            /**
             * Addon集合。
             */
            Addons: {
                /**
                 * Addon别名。
                 * @example `Prometheus探针`
                 */
                Alias: string;
                /**
                 * Addon描述。
                 * @example `以 Prometheus 采集规范采集 Metric 数据`
                 */
                Description: string;
                /**
                 * 图标地址。
                 * @example `http://xxxx`
                 */
                Icon: string;
                /**
                 * Addon名称。
                 * @example `metric-agent`
                 */
                Name: string;
            }[];
            /**
             * 用户ID。
             * @example `13990957477389`
             */
            UserId: string;
            /**
             * 环境绑定的资源实例ID，包括容器实例ID 或 VPCID。
             * @example `vpc-bp1bgo8ronn`
             */
            BindResourceId: string;
            /**
             * 绑定资源的Profile。
             * @example `xxx`
             */
            BindResourceProfile: string;
            /**
             * 绑定的资源类型。
             * @example `VPC`
             */
            BindResourceType: string;
            /**
             * 绑定VPC的网段。
             * @example `172.16.0.0/12`
             */
            BindVpcCidr: string;
            /**
             * 创建时间。
             * @example `2023-03-24 11:58:35 +0800`
             */
            CreateTime: string;
            /**
             * 创建的用户ID。
             * @example `12378523784982`
             */
            CreatedUserId: string;
            /**
             * 环境实例ID。
             * @example `env-xxx`
             */
            EnvironmentId: string;
            /**
             * 环境名称。
             * @example `feiliks-biz-prod-edas`
             */
            EnvironmentName: string;
            /**
             * 环境类型：
             * - CS：容器服务。
             * - ECS。
             * - Cloud：云服务。
             * @example `CS`
             */
            EnvironmentType: string;
            /**
             * Feature列表。
             */
            Features: {
                /**
                 * Feature别名。
                 * @example `Prometheus 探针`
                 */
                Alias: string;
                /**
                 * Feature描述。
                 * @example `以 Prometheus 采集规范采集 Metric 数据`
                 */
                Description: string;
                /**
                 * Feature图标地址。
                 * @example `http://xxx`
                 */
                Icon: string;
                /**
                 * Feature名称。
                 * @example `metirc-agent`
                 */
                Name: string;
            }[];
            /**
             * Grafana目录名。
             * @example `filepath`
             */
            GrafanaFolderTitle: string;
            /**
             * Grafana目录唯一ID。
             * @example `1798319482935`
             */
            GrafanaFolderUid: string;
            /**
             * Prometheus的ID。
             * @example `124769812`
             */
            PrometheusId: number;
            /**
             * 绑定的Prometheus实例ID。
             * @example `vpc-m5e4alj2i24ndbn`
             */
            PrometheusInstanceId: string;
            /**
             * 地域ID。
             * @example `cn-zhangjiakou`
             */
            RegionId: string;
            /**
             * 资源组ID。
             * @example `rg-acfmvt3xpr5aema`
             */
            ResourceGroupId: string;
            /**
             * 环境资源标签。
             */
            Tags: {
                /**
                 * 标签的键。
                 * @example `fpx-tag`
                 */
                Key: string;
                /**
                 * 标签的值。
                 * @example `cn-beijing`
                 */
                Value: string;
            }[];
            /**
             * Grafana数据源唯一ID。
             * @example `12374890`
             */
            GrafanaDatasourceUid: string;
            /**
             * 已安装Addon的数量。
             * @example `122`
             */
            ReleaseCount: number;
            /**
             * 最后一次Addon创建的时间。
             * @example `2023-09-22T16:56:29+08:00`
             */
            LatestReleaseCreateTime: string;
            /**
             * 托管类型：
             * - none： 非托管。ACK集群的默认值。
             * - agent：托管agent（含ksm）。ASK、ACS、AckOne集群的默认值。
             * - agent-exproter： 托管agent和exporter。云服务类型的默认值。
             * @example `agent`
             */
            ManagedType: string;
            /**
             * 付费套餐。
             * * EnvironmentType为CS时：可选为CS_Basic或CS_Pro。
             * * EnvironmentType为其它值时，为空值。
             * @example `CS_Pro`
             */
            FeePackage: string;
        }[];
        /**
         * 总数。
         * @example `12`
         */
        Total: number;
    };
}
