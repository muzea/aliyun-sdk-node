export interface createInstanceRequest {
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "clientToken"?: string;
    /**
     * 请求体参数。
     * @example `{   "description": "xpack-hot-cold",   "nodeAmount": 2,   "esVersion": "7.10_with_X-Pack",   "instanceCategory": "x-pack",   "nodeSpec": {     "spec": "elasticsearch.sn2ne.xlarge",     "disk": 20,     "diskType": "cloud_ssd"   },   "warmNodeConfiguration": {     "spec": "elasticsearch.sn1ne.xlarge",     "amount": 3,     "diskType": "cloud_efficiency",     "disk": 500   },   "networkConfig": {     "type": "vpc",     "vpcId": "vpc-8vbfu74bmw4m7m84a****",     "vswitchId": "vsw-8vbnk6cmurbpump2f****",     "vsArea": "cn-zhangjiakou-c"   },   "paymentType": "postpaid",   "esAdminPassword": "yourPassword",   "kibanaConfiguration": {     "spec": "elasticsearch.sn1ne.large"   } }`
     */
    "body"?: {
        /**
         * 实例的可用区数量。可选值：1、2、3，默认值：1。
         * @example `2`
         */
        zoneCount: number;
        /**
         * 付费类型。可选值：
         * - postpaid：按量计费
         * - prepaid：包年包月
         * @example `postpaid`
         */
        paymentType: string;
        /**
         * 包年包月实例的付费详情。创建包年包月实例时必填。
         */
        paymentInfo: any;
        /**
         * 数据节点个数，取值范围为2~50。
         * @example `3`
         */
        nodeAmount: number;
        /**
         * 版本类型：
         * - x-pack：创建商业版实例，或不开启Indexing Service和OpenStore的内核增强版实例。
         * - IS：创建开启Indexing Service或OpenStore的内核增强版实例。
         * @example `advanced`
         */
        instanceCategory: string;
        /**
         * 实例的访问密码。要求包含以下字符中的三种：大写字母、小写字母、数字、特殊字符：!@#$%^&*()_+-=，长度为8~32位。
         * @example `Es_password`
         */
        esAdminPassword: string;
        /**
         * 实例版本。可选值：
         * - 8.5.1_with_X-Pack
         * - 7.10_with_X-Pack
         * - 6.7_with_X-Pack
         * - 7.7_with_X-Pack
         * - 6.8_with_X-Pack
         * - 6.3_with_X-Pack
         * - 5.6_with_X-Pack
         * - 5.5.3_with_X-Pack
         * > 以上所列版本不一定包含Elasticsearch实例支持的所有版本，实际支持的版本可调用[GetRegionConfiguration](~~254099~~)接口查看。
         * @example `5.5.3_with_X-Pack`
         */
        esVersion: string;
        /**
         * 数据节点配置。
         * > 在北京、上海、杭州和深圳地域，通过createInstance创建新一代云盘型数据节点的实例时，需指定规格族+后缀`.new`，例如， elasticsearch.sn1ne.large.new。
         */
        nodeSpec: any;
        /**
         * 专有主节点配置。
         * > 在北京、上海、杭州和深圳地域，通过createInstance创建新一代云盘型数据节点的实例时，需指定规格族+后缀`.new`，例如， elasticsearch.sn1ne.large.new。
         */
        masterConfiguration: any;
        /**
         * 冷数据节点配置。
         */
        warmNodeConfiguration: any;
        /**
         * 协调节点配置。
         */
        clientNodeConfiguration: any;
        /**
         * 弹性节点配置。
         */
        elasticDataNodeConfiguration: any;
        /**
         * Kibana节点配置。
         * > 强烈建议开启Kibana节点。
         */
        kibanaConfiguration: any;
        /**
         * 网络配置。
         * > 创建实例时不支持指定IP白名单。
         */
        networkConfig: any;
        /**
         * 实例所属的资源组ID。
         * @example `rg-aekzu7tsu4n****`
         */
        resourceGroupId: string;
        /**
         * 实例名称。
         * @example `es`
         */
        description: string;
        /**
         * 实例标签组。
         */
        tags: {
            /**
             * 实例的标签键。
             * @example `KeyTest`
             */
            tagKey: string;
            /**
             * 实例的标签值。
             * @example `KeyValue`
             */
            tagValue: string;
        }[];
    };
}
