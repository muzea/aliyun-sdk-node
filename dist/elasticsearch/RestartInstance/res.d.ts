export interface RestartInstanceResponse {
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DC****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 实例的数据节点数量。
         * @example `2`
         */
        nodeAmount: number;
        /**
         * 公网访问地址。
         * @example `es-cn-n6w1o1x0w001c****.public.elasticsearch.aliyuncs.com`
         */
        publicDomain: string;
        /**
         * 实例创建时间。
         * @example `2020-07-06T10:18:48.662Z`
         */
        createdAt: string;
        /**
         * 实例的状态。
         * 支持：active（正常）、activating（生效中）、inactive（冻结）和invalid（失效）。
         * @example `active`
         */
        status: string;
        /**
         * Kibana公网端口。
         * @example `5601`
         */
        kibanaPort: number;
        /**
         * 公网端口。
         * @example `9200`
         */
        publicPort: number;
        /**
         * 实例的付费方式。
         * 支持：prepaid（包年包月）和postpaid（按量付费）。
         * @example `postpaid`
         */
        paymentType: string;
        /**
         * 实例的内网访问地址。
         * @example `es-cn-nif1q8auz0003****.elasticsearch.aliyuncs.com`
         */
        domain: string;
        /**
         * 实例名称。
         * @example `es-cn-abc`
         */
        description: string;
        /**
         * 实例版本。
         * @example `6.7.0_with_X-Pack`
         */
        esVersion: string;
        /**
         * Kibana公网访问地址。
         * @example `es-cn-nif1q8auz0003****.kibana.elasticsearch.aliyuncs.com`
         */
        kibanaDomain: string;
        /**
         * 实例最后更新的时间。
         * @example `2018-07-18T10:10:04.484Z`
         */
        updatedAt: string;
        /**
         * 实例ID。
         * @example `es-cn-n6w1o1x0w001c****`
         */
        instanceId: string;
        /**
         * IK词典配置。
         */
        dictList: {
            /**
             * 词典文件大小，单位：字节。
             * @example `2782602`
             */
            fileSize: number;
            /**
             * 词典类型，取值：
             * - STOP：停用词
             * - MAIN：主词典
             * - SYNONYMS：同义词词典
             * - ALI_WS：阿里词典
             * @example `MAIN`
             */
            type: string;
            /**
             * 词典文件名称。
             * @example `SYSTEM_MAIN.dic`
             */
            name: string;
            /**
             * 来源类型，支持：
             * - OSS：OSS开放存储（需要确保OSS存储空间为公共可读）
             * - ORIGIN：开源Elasticsearch
             * - UPLOAD：上传的文件
             * @example `ORIGIN`
             */
            sourceType: string;
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
             * 词典类型，取值：
             * - STOP：停用词
             * - MAIN：主词典
             * - SYNONYMS：同义词词典
             * - ALI_WS：阿里词典
             * @example `STOP`
             */
            type: string;
            /**
             * 词典文件名称。
             * @example `SYSTEM_MAIN.dic`
             */
            name: string;
            /**
             * 来源类型，支持：
             * - OSS：OSS开放存储（需要确保OSS存储空间为公共可读）
             * - ORIGIN：开源Elasticsearch
             * - UPLOAD：上传的文件
             * @example `ORIGIN`
             */
            sourceType: string;
        }[];
        /**
         * Kibana节点配置。
         */
        kibanaConfiguration: {
            /**
             * 节点规格。
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
        };
        /**
         * Master节点配置。
         */
        masterConfiguration: {
            /**
             * 节点规格。
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
        };
        /**
         * 网络配置。
         */
        networkConfig: {
            /**
             * 专有网络ID。
             * @example `vpc-bp16k1dvzxtmagcva****`
             */
            vpcId: string;
            /**
             * 实例所在的可用区。
             * @example `cn-hangzhou-i`
             */
            vsArea: string;
            /**
             * 网络类型，只支持专有网络VPC（Virtual Private Cloud）。
             * @example `vpc`
             */
            type: string;
            /**
             * 虚拟交换机ID。
             * @example `vsw-bp1k4ec6s7sjdbudw****`
             */
            vswitchId: string;
        };
        /**
         * 数据节点配置信息。
         */
        nodeSpec: {
            /**
             * 节点规格。
             * @example `elasticsearch.n4.small`
             */
            spec: string;
            /**
             * 节点的存储空间大小，单位为GB。
             * @example `50`
             */
            disk: number;
            /**
             * 节点的存储类型。
             * @example `cloud_ssd`
             */
            diskType: string;
        };
    };
}
