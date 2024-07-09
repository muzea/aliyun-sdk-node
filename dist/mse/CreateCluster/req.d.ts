export interface CreateClusterRequest {
    /**
     * ConnectionType为`slb`时有效，0表示不创建公网接入SLB，1以上值表示公网接入SLB的带宽固定值；单位Mbps。
     * 取值范围：0~5000。
     * @example `0`
     */
    "PubNetworkFlow"?: string;
    /**
     * 不再使用
     */
    "PubSlbSpecification"?: string;
    /**
     * 不再使用
     */
    "DiskType"?: string;
    /**
     * VPC ID。
     * @example `vpc-bp1t50e045b5g7i3p****`
     */
    "VpcId"?: string;
    /**
     * 网络类型，取值如下：
     * - `privatenet`：表示专有网络。
     * - `pubnet`：表示公网。
     * @example `privatenet`
     */
    "NetType": string;
    /**
     * 交换机ID。
     * @example `vsw-bp17opt4v18sto39k****`
     */
    "VSwitchId"?: string;
    /**
     * 实例节点数，范围限制：1~9个。
     * [专业版]
     * - 实例数大于等于3，且必须为奇数。
     * [开发版]
     * - 实例数只能为1。
     * [Serverless版]
     * 忽略该参数。
     * @example `3`
     */
    "InstanceCount": number;
    /**
     * 引擎规格，取值如下：
     * [专业版]
     * - `MSE_SC_2_4_60_c`：2核4G
     * - `MSE_SC_1_2_60_c`：1核2G
     * - `MSE_SC_4_8_60_c`：4核8G
     * - `MSE_SC_8_16_60_c`：8核16G
     * - `MSE_SC_16_32_60_c`：16核32G
     * [开发版]
     * - `MSE_SC_1_2_60_c`：1核2G
     * - `MSE_SC_2_4_60_c`：2核4G
     * [Serverless版]
     * 忽略该参数，也可填`MSE_SC_SERVERLESS`。
     * @example `MSE_SC_2_4_60_c`
     */
    "ClusterSpecification": string;
    /**
     * 集群版本，取值如下：
     * [专业版]
     * -  `NACOS_2_0_0`：表示Nacos 2.x.x 版本。
     * - `ZooKeeper_3_8_0`：表示ZooKeeper 3.8.x 版本。
     * [开发版]
     * -  `NACOS_2_0_0`：表示Nacos 2.x 版本。
     * - `ZooKeeper_3_8_0`：表示ZooKeeper 3.8.x 版本。
     * [Serverless版]
     * -  `NACOS_2_0_0`：表示Nacos 2.x 版本。
     * - `ZooKeeper_3_8_0`：表示ZooKeeper 3.8.x 版本。
     * @example `NACOS_2_0_0`
     */
    "ClusterVersion": string;
    /**
     * 集群类型，包括ZooKeeper、Nacos-Ans。
     * @example `Nacos-Ans`
     */
    "ClusterType": string;
    /**
     * 集群所在地域，包括但不限于如下地域：
     * - `cn-hangzhou`：杭州
     * - `cn-beijing`：北京
     * - `cn-shanghai`：上海
     * - `cn-zhangjiakou`：张家口
     * - `cn-shenzhen`：深圳
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 不再使用
     */
    "PrivateSlbSpecification"?: string;
    /**
     * 网络接入类型，`slb`或`single_eni`；部分Region开发版只支持`single_eni`类型。
     */
    "ConnectionType"?: string;
    /**
     * 扩展请求参数，JSON格式。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 非特殊情况必填，取值如下：
     * - `mse_pro`：表示专业版。
     * - `mse_dev`：表示开发版。
     * - `mse_serverless`：表示Serverless版。
     * @example `mse_pro`
     */
    "MseVersion"?: string;
    /**
     * 实例自定义名称
     * @example `tanshuyingtest001`
     */
    "InstanceName"?: string;
    /**
     * 资源组ID。资源组详情请参见查看[资源组基本信息](~~457230~~)。
     * @example `rg-aekzcqmoay3dlyq`
     */
    "ResourceGroupId"?: string;
    /**
     * 待添加的标签列表。最多包含20个子项。
     */
    "Tag"?: {
        /**
         * 标签KEY。
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。
         * @example `prd`
         */
        Value: string;
    }[];
    /**
     * 付费模式，包括PREPAY（包年包月）和POSTPAY（按量付费）。
     * Serverless版忽略该参数。
     * @example `POSTPAY`
     */
    "ChargeType"?: string;
    /**
     * ConnectionType为`single_eni`时有效，表示实例所在的安全组类型
     * @example `enterprise`
     */
    "SecurityGroupType"?: string;
    /**
     * ConnectionType为`single_eni`时有效，表示是否开启公网访问（弹性公网IP）
     */
    "EipEnabled"?: boolean;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
