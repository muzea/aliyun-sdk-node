export interface DescribeInstanceResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 是否包含专有主节点。取值含义如下：
         * - true：包含。
         * - false：不包含。
         * @example `true`
         */
        advancedDedicateMaster: boolean;
        /**
         * 访问协议。支持：HTTP和HTTPS。
         * @example `HTTP`
         */
        protocol: string;
        /**
         * 是否开启Kibana公网访问。取值含义如下：
         * - true：开启。
         * - false：不开启。
         * @example `true`
         */
        enableKibanaPublicNetwork: boolean;
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
         * 是否开启Kibana私网访问。取值含义如下：
         * - true：开启。
         * - false：不开启。
         * @example `false`
         */
        enableKibanaPrivateNetwork: boolean;
        /**
         * 专有网络ID。
         * @example `vpc-bp1uag5jj38c****`
         */
        vpcInstanceId: string;
        /**
         * 实例的访问端口。
         * @example `9200`
         */
        port: number;
        /**
         * 是否开启实例的公网地址。取值含义如下：
         * - true：开启。
         * - false：不开启。
         * @example `true`
         */
        enablePublic: boolean;
        /**
         * 专有主节点（已废弃）。
         * @example `false`
         */
        dedicateMaster: boolean;
        /**
         * Kibana的访问端口。
         * @example `5601`
         */
        kibanaPort: number;
        /**
         * 实例的YML文件配置信息。
         * @example `{"http.cors.allow-credentials":"false"}`
         */
        esConfig: any;
        /**
         * 实例所属的资源组ID。
         * @example `rg-aekzvowej3i****`
         */
        resourceGroupId: string;
        /**
         * 实例的付费方式。支持：
         * - prepaid：包年包月。
         * - postpaid：按量付费。
         * @example `postpaid`
         */
        paymentType: string;
        /**
         * 预付费实例叠加的后付费服务状态。取值含义如下：
         * - active：正常。
         * - closed：关闭。
         * - indebt：欠费冻结中。
         * @example `active`
         */
        postpaidServiceStatus: string;
        /**
         * 实例版本。
         * @example `6.3.2_with_X-Pack`
         */
        esVersion: string;
        /**
         * 是否包含Kibana节点。取值含义如下：
         * - true：包含。
         * - false：不包含。
         * @example `true`
         */
        haveKibana: boolean;
        /**
         * 是否为新部署架构。
         * @example `true`
         */
        isNewDeployment: boolean;
        /**
         * 是否开启冷数据节点。取值含义如下：
         * - true：开启。
         * - false：不开启。
         * @example `true`
         */
        warmNode: boolean;
        /**
         * 实例最后更新时间。
         * @example `2018-07-13T03:58:07.253Z`
         */
        updatedAt: string;
        /**
         * 实例ID。
         * @example `es-cn-3h4k3axh33th9****`
         */
        instanceId: string;
        /**
         * 实例的可用区个数。
         * @example `2`
         */
        zoneCount: number;
        /**
         * 实例的公网地址。
         * @example `es-cn-3h4k3axh33th9****.elasticsearch.aliyuncs.com`
         */
        publicDomain: string;
        /**
         * 实例的状态，取值含义如下：
         * - active：正常。
         * - activating：生效中。
         * - inactive：冻结。
         * - invalid：失效。
         * @example `active`
         */
        status: string;
        /**
         * 是否为服务vpc。
         * @example `true`
         */
        serviceVpc: boolean;
        /**
         * 实例的公网访问端口。
         * @example `9200`
         */
        publicPort: number;
        /**
         * 是否包含协调节点。取值含义如下：
         * - true：包含。
         * - false：不包含。
         * @example `true`
         */
        haveClientNode: boolean;
        /**
         * 实例的内网地址。
         * @example `es-cn-3h4k3axh33th9****.elasticsearch.aliyuncs.com`
         */
        domain: string;
        /**
         * 实例名称。
         * @example `es-cn-abc`
         */
        description: string;
        /**
         * Kibana地址。
         * @example `es-cn-3h4k3axh33th9****.kibana.elasticsearch.aliyuncs.com`
         */
        kibanaDomain: string;
        /**
         * IK词典配置。
         */
        dictList: {
            /**
             * 词典文件大小，单位：Byte。
             * @example `2782602`
             */
            fileSize: number;
            /**
             * 词典文件来源类型，取值含义如下：
             * - OSS：OSS开放存储（需要确保OSS存储空间为公共可读）。
             * - ORIGIN：开源Elasticsearch。
             * - UPLOAD：上传的文件。
             * @example `ORIGIN`
             */
            sourceType: string;
            /**
             * 词典文件名称。
             * @example `SYSTEM_MAIN.dic`
             */
            name: string;
            /**
             * 词典文件类型，取值含义如下：
             * - STOP：停用词。
             * - MAIN：主词典。
             * - SYNONYMS：同义词词典。
             * - ALI_WS：阿里词典。
             * @example `MAIN`
             */
            type: string;
        }[];
        /**
         * 同义词词典配置。
         */
        synonymsDicts: {
            /**
             * 词典文件大小，单位：字节。
             * @example `2782602`
             */
            fileSize: number;
            /**
             * 来源类型。
             * @example `ORIGIN`
             */
            sourceType: string;
            /**
             * 词典文件名称。
             * @example `SYSTEM_MAIN.dic`
             */
            name: string;
            /**
             * 词典类型。取值含义如下：
             * - STOP：停用词。
             * - MAIN：主词典。
             * - SYNONYMS：同义词词典。
             * - ALI_WS：阿里词典。
             * @example `STOP`
             */
            type: string;
        }[];
        /**
         * 可用区信息。
         */
        zoneInfos: {
            /**
             * 可用区状态。支持：
             * - ISOLATION：下线
             * - NORMAL：正常
             * @example `NORMAL`
             */
            status: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-b`
             */
            zoneId: string;
        }[];
        /**
         * 阿里分词词典配置。
         */
        aliwsDicts: {
            /**
             * 词典文件大小，单位：字节。
             * @example `2782602`
             */
            fileSize: number;
            /**
             * 词典文件来源类型，取值含义如下：
             * - OSS：OSS开放存储（需要确保OSS存储空间为公共可读）。
             * - ORIGIN：开源Elasticsearch。
             * - UPLOAD：上传的文件。
             * @example `OSS`
             */
            sourceType: string;
            /**
             * 词典文件名称。
             * @example `aliws_ext_dict.txt`
             */
            name: string;
            /**
             * 词典文件类型，取值含义如下：
             * - STOP：停用词。
             * - MAIN：主词典。
             * - SYNONYMS：同义词词典。
             * - ALI_WS：阿里词典。
             * @example `ALI_WS`
             */
            type: string;
        }[];
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
         * 私网访问白名单列表（已废弃）。
         */
        esIPWhitelist: string[];
        /**
         * 实例的扩展配置数组。
         */
        extendConfigs: any[];
        /**
         * 实例的私网地址访问白名单列表。
         */
        privateNetworkIpWhiteList: string[];
        /**
         * 实例的公网地址访问白名单列表。
         */
        publicIpWhitelist: string[];
        /**
         * kibana私网地址访问白名单列表。
         */
        kibanaPrivateIPWhitelist: string[];
        /**
         * 私网访问黑名单（已废弃）。
         */
        esIPBlacklist: string[];
        /**
         * kibana公网地址访问白名单列表。
         */
        kibanaIPWhitelist: string[];
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
             * 节点存储空间大小，单位：GB。
             * @example `0`
             */
            disk: number;
            /**
             * 是否开启云盘加密：
             * - true：开启。
             * - false：不开启。
             * @example `true`
             */
            diskEncryption: boolean;
            /**
             * 节点磁盘类型。支持：
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
         * 网络配置。
         */
        networkConfig: {
            /**
             * VPC网络ID。
             * @example `vpc-abc`
             */
            vpcId: string;
            /**
             * 实例所在的可用区。
             * @example `cn-hangzhou-b`
             */
            vsArea: string;
            /**
             * 网络类型，只支持专有网络VPC（Virtual Private Cloud）。
             * @example `vpc`
             */
            type: string;
            /**
             * 虚拟交换机ID。
             * @example `vsw-abc`
             */
            vswitchId: string;
            /**
             * 白名单组列表。
             */
            whiteIpGroupList: {
                /**
                 * 白名单类型。取值含义如下：
                 * - PRIVATE_ES：Elasticsearch私网。
                 * - PUBLIC_ES：Elasticsearch公网。
                 * - PRIVATE_KIBANA：Kibana私网。
                 * - PUBLIC_KIBANA：Kibana公网。
                 * @example `PRIVATE_ES`
                 */
                whiteIpType: string;
                /**
                 * 白名单组的组名。默认包含default分组。
                 * @example `default`
                 */
                groupName: string;
                /**
                 * 白名单组中的ip列表。
                 */
                ips: string[];
            }[];
        };
        /**
         * Kibana节点的配置信息。
         */
        kibanaConfiguration: {
            /**
             * 节点数量。
             * @example `1`
             */
            amount: number;
            /**
             * 节点规格。规格信息可通过[产品规格](~~271718~~)查看。
             * @example `elasticsearch.n4.small`
             */
            spec: string;
            /**
             * 单节点存储空间大小。，单位：GB。
             * @example `20`
             */
            disk: number;
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
             * @example `elasticsearch.n4.small`
             */
            spec: string;
            /**
             * 节点数量。
             * @example `3`
             */
            amount: number;
            /**
             * 节点存储空间大小，单位：GB。
             * @example `40`
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
         * 协调节点配置信息。
         */
        clientNodeConfiguration: {
            /**
             * 节点规格。规格信息可通过[产品规格](~~271718~~)查看。
             * @example `elasticsearch.n4.small`
             */
            spec: string;
            /**
             * 节点数量。
             * @example `3`
             */
            amount: number;
            /**
             * 节点存储空间大小，单位：GB。
             * @example `40`
             */
            disk: number;
            /**
             * 节点存储类型，只支持高效云盘（cloud_efficiency）。
             * @example `cloud_efficiency`
             */
            diskType: string;
            /**
             * 节点规格描述
             * @example `1C 2G `
             */
            specInfo: string;
        };
        /**
         * 冷数据节点配置信息。
         */
        warmNodeConfiguration: {
            /**
             * 节点数量。
             * @example `6`
             */
            amount: number;
            /**
             * 节点规格。规格信息可通过[产品规格](~~271718~~)查看。
             * @example `elasticsearch.n4.small`
             */
            spec: string;
            /**
             * 节点存储空间大小，单位：GB。
             * @example `500`
             */
            disk: number;
            /**
             * 是否开启云盘加密。取值含义如下：
             * - true：开启。
             * - false：不开启。
             * @example `true`
             */
            diskEncryption: boolean;
            /**
             * 节点存储空间类型。只支持cloud_efficiency（高效云盘）。
             * @example `cloud_efficiency`
             */
            diskType: string;
            /**
             * 节点规格描述
             * @example `1C 2G`
             */
            specInfo: string;
        };
        /**
         * 高级配置。
         */
        advancedSetting: {
            /**
             * GC垃圾回收器名称。支持CMS、G1。
             * @example `CMS`
             */
            gcName: string;
        };
        /**
         * 弹性数据节点配置。
         */
        elasticDataNodeConfiguration: {
            /**
             * 节点数量。
             * @example `3`
             */
            amount: number;
            /**
             * 节点规格。规格信息可通过[产品规格](~~271718~~)查看。
             * @example `elasticsearch.sn2ne.large`
             */
            spec: string;
            /**
             * 节点存储空间大小，单位：GB。
             * @example `20`
             */
            disk: number;
            /**
             * 是否为节点开启云盘加密，取值含义如下：
             * - true：开启。
             * - false：不开启。
             * @example `true`
             */
            diskEncryption: boolean;
            /**
             * 节点存储类型。支持：
             * - cloud_ssd：SSD云盘。
             * - cloud_essd：ESSD云盘。
             * - cloud_efficiency：高效云盘。
             * @example `cloud_ssd`
             */
            diskType: string;
            /**
             * 节点规格描述。
             * @example `1C 2G `
             */
            specInfo: string;
        };
        /**
         * IK词典热更新配置。
         */
        ikHotDicts: {
            /**
             * 要更新的词典类型。支持：
             * - MAIN：IK主分词词库
             * - STOP：IK停用词库
             * @example `MAIN`
             */
            type: string;
            /**
             * 词典文件来源类型，支持：
             * - OSS：使用OSS开放存储
             * - ORIGIN：保留之前已经上传的词典
             * @example `OSS`
             */
            sourceType: string;
            /**
             * 词典文件大小，单位：Byte。
             * @example `6`
             */
            fileSize: number;
            /**
             * 词典文件名。
             * @example `deploy_0.dic`
             */
            name: string;
        }[];
        /**
         * 实例版本类型。返回值含义如下：
         * - x-pack：商业版
         * - advanced/IS：增强版
         * - community：基础版
         * @example `advanced`
         */
        instanceCategory: string;
        /**
         * 实例到期时间。
         * @example `1715826092044`
         */
        endtime: number;
        /**
         * 部署模式，架构类型：
         *  exclusive：基础管控
         *  public：云原生新管控
         * @example `public`
         */
        archType: string;
    };
}
