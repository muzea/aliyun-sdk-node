export interface ListInstanceResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****`
     */
    RequestId: string;
    /**
     * 返回头信息。
     */
    Headers: {
        /**
         * 实例总记录数。
         * @example `10`
         */
        X-Total-Count: number;
    };
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 是否包含专有主节点，取值含义如下：
         * - true：包含
         * - false：不包含
         * @example `false`
         */
        advancedDedicateMaster: boolean;
        /**
         * 实例的数据节点数量。
         * @example `2`
         */
        nodeAmount: number;
        /**
         * 实例创建时间。
         * @example `2018-07-13T03:58:07.253Z`
         */
        createdAt: string;
        /**
         * 实例的状态，取值含义如下：
         * - active：正常
         * - activating：生效中
         * - inactive：冻结
         * - invalid：失效
         * @example `active`
         */
        status: string;
        /**
         * 是否包含专有主节点（已废弃），取值含义如下：
         * - true：包含
         * - false：不包含
         * @example `false`
         */
        dedicateMaster: boolean;
        /**
         * 是否为服务VPC。
         * @example `true`
         */
        serviceVpc: boolean;
        /**
         * 实例的付费方式。支持：
         * - **prepaid**：包年包月
         * - **postpaid**：按量付费
         * @example `postpaid`
         */
        paymentType: string;
        /**
         * 资源组ID。
         * @example `rg-aekzvowej3i****`
         */
        resourceGroupId: string;
        /**
         * 预付费实例叠加的后付费服务状态。支持：
         * - **active**：正常
         * - **closed**：关闭
         * - **indebt**：欠费冻结中
         * @example `active`
         */
        postpaidServiceStatus: string;
        /**
         * 实例名称。
         * @example `es-cn-abc`
         */
        description: string;
        /**
         * 实例版本。
         * @example `6.7_with_X-Pack`
         */
        esVersion: string;
        /**
         * 是否为新部署架构。
         * @example `true`
         */
        isNewDeployment: string;
        /**
         * 实例最后更新的时间。
         * @example `2018-07-18T10:10:04.484Z`
         */
        updatedAt: string;
        /**
         * 实例ID。
         * @example `es-cn-v641a0ta3000g****`
         */
        instanceId: string;
        /**
         * 实例标签。
         */
        tags: {
            /**
             * 标签键。
             * @example `env`
             */
            tagKey: string;
            /**
             * 标签值。
             * @example `dev`
             */
            tagValue: string;
        }[];
        /**
         * 集群扩展参数配置。
         */
        extendConfigs: any[];
        /**
         * 协调节点配置。
         */
        clientNodeConfiguration: {
            /**
             * 节点规格。规格信息可通过[产品规格](~~271718~~)查看。
             * @example `elasticsearch.sn2ne.large`
             */
            spec: string;
            /**
             * 节点数量。
             * @example `3`
             */
            amount: number;
            /**
             * 节点存储空间大小，单位为GB。
             * @example `20`
             */
            disk: number;
            /**
             * 节点的存储类型，只支持高效云盘（cloud_efficiency）。
             * @example `cloud_efficiency`
             */
            diskType: string;
            /**
             * 节点规格描述。
             * @example `1C 2G`
             */
            specInfo: string;
        };
        /**
         * 弹性数据节点配置。
         */
        elasticDataNodeConfiguration: {
            /**
             * 节点规格。规格信息可通过[产品规格](~~271718~~)查看。
             * @example `elasticsearch.sn2ne.large`
             */
            spec: string;
            /**
             * 节点数量。
             * @example `3`
             */
            amount: number;
            /**
             * 节点存储空间大小，单位为GB。
             * @example `20`
             */
            disk: number;
            /**
             * 是否为节点开启云盘加密，取值含义如下：
             * - true：开启
             * - false：不开启
             * @example `true`
             */
            diskEncryption: boolean;
            /**
             * 节点存储类型。支持：
             * - cloud_ssd：SSD云盘
             * - cloud_essd：ESSD云盘
             * - cloud_efficiency：高效云盘
             * @example `cloud_ssd`
             */
            diskType: string;
            /**
             * 节点规格描述
             * @example `1C 2G `
             */
            specInfo: string;
        };
        /**
         * Kibana节点配置。
         */
        kibanaConfiguration: {
            /**
             * 节点规格。规格信息可通过[产品规格](~~271718~~)查看。
             * @example `elasticsearch.n4.small`
             */
            spec: string;
            /**
             * 节点数量。
             * @example `1`
             */
            amount: number;
            /**
             * 节点存储空间大小，单位为GB。
             * @example `20`
             */
            disk: number;
            /**
             * 节点存储类型。
             * @example `cloud_ssd`
             */
            diskType: string;
            /**
             * 节点规格描述
             * @example `1C 2G `
             */
            specInfo: string;
        };
        /**
         * Master节点配置。
         */
        masterConfiguration: {
            /**
             * 节点规格。规格信息可通过[产品规格](~~271718~~)查看。
             * @example `elasticsearch.sn2ne.large`
             */
            spec: string;
            /**
             * 节点数量。
             * @example `3`
             */
            amount: number;
            /**
             * 节点存储空间大小，单位为GB。
             * @example `20`
             */
            disk: number;
            /**
             * 节点存储类型。只支持cloud_ssd（SSD云盘）。
             * @example `cloud_ssd`
             */
            diskType: string;
            /**
             * 节点规格描述
             * @example `1C 2G `
             */
            specInfo: string;
        };
        /**
         * 网络配置。
         */
        networkConfig: {
            /**
             * 专有网络ID。
             * @example `vpc-abc`
             */
            vpcId: string;
            /**
             * 实例所在的可用区。
             * @example `cn-hangzhou-e`
             */
            vsArea: string;
            /**
             * 网络类型，只支持专有网络VPC（Virtual Private Cloud）。
             * @example `vpc`
             */
            type: string;
            /**
             * 虚拟交换机ID。
             * @example `vsw-def`
             */
            vswitchId: string;
            /**
             * 集群公私网网络白名单分组设置。
             */
            whiteIpGroupList: {
                /**
                 * 分组名。
                 * @example `default`
                 */
                groupName: string;
                /**
                 * 网络类型。PRIVATE_ES，ES私网。PUBLIC_KIBANA。Kibana公网。PUBLIC_ES，ES公网。PRIVATE_KIBANA，Kibana私网。
                 * @example `PUBLIC_KIBANA`
                 */
                whiteIpType: string;
                /**
                 * 网络白名单列表。
                 */
                ips: string[];
            }[];
        };
        /**
         * 数据节点配置信息。
         */
        nodeSpec: {
            /**
             * 节点规格。规格信息可通过[产品规格](~~271718~~)查看。
             * @example `elasticsearch.n4.small`
             */
            spec: string;
            /**
             * 节点的存储空间大小，单位为GB。
             * @example `50`
             */
            disk: number;
            /**
             * 是否使用磁盘加密，取值含义如下：
             * - true：使用
             * - false：不使用
             * @example `false`
             */
            diskEncryption: boolean;
            /**
             * 节点的存储类型。支持：
             * - cloud_ssd：SSD云盘
             * - cloud_efficiency：高效云盘
             * @example `cloud_ssd`
             */
            diskType: string;
            /**
             * ESSD云盘的性能级别。当diskType为cloud_essd时，该参数必选，支持PL1、PL2、PL3。
             * @example `PL1`
             */
            performanceLevel: string;
            /**
             * 节点规格描述
             * @example `1C 2G `
             */
            specInfo: string;
        };
        /**
         * 专有网络ID。
         * @example `vpc-bp1uag5jj38c****`
         */
        vpcInstanceId: string;
        /**
         * 集群Kibana节点公网访问白名单。
         */
        kibanaIPWhitelist: string[];
        /**
         * 集群Kibana节点私网访问白名单。
         */
        kibanaPrivateIPWhitelist: string[];
        /**
         * Elasticsearch集群公网访问白名单。
         */
        publicIpWhitelist: string[];
        /**
         * Elasticsearch集群私网访问白名单。
         */
        privateNetworkIpWhiteList: string[];
        /**
         * 实例到期时间。
         * @example `1715826092044`
         */
        endTime: number;
        /**
         * 部署模式，架构类型：
         * exclusive：基础管控
         * public：云原生新管控
         * @example `public`
         */
        archType: string;
    }[];
}
