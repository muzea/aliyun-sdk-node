export interface UpgradeLindormInstanceRequest {
    /**
     * 实例所属的地域ID，可调用[DescribeRegions](~~426062~~)接口获取。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 可用区ID，可调用[GetLindormInstance](~~426067~~)接口获取。
     * @example `cn-shanghai-f`
     */
    "ZoneId": string;
    /**
     * 实例ID，可调用[GetLindormInstanceList](~~426069~~)接口获取。
     * @example `ld-bp1o3y0yme2i2****`
     */
    "InstanceId": string;
    /**
     * 实例需要变配的类型，支持的变配类型请参见请求参数补充中的UpgradeType参数说明。
     * @example `upgrade-cold-storage`
     */
    "UpgradeType": string;
    /**
     * 变配后实例的存储容量，单位为GB，取值：**480**~**1017600**。
     * @example `480`
     */
    "ClusterStorage"?: number;
    /**
     * 变配后实例的冷存储容量，单位为GB，取值：**800**~**1000000**。
     * @example `800`
     */
    "ColdStorage"?: number;
    /**
     * 变配后实例的搜索引擎节点规格，取值：
     * - **lindorm.g.xlarge**：表示4核16GB（独享规格）。
     * - **lindorm.g.2xlarge**：表示8核32GB（独享规格）。
     * - **lindorm.g.4xlarge**：表示16核64GB（独享规格）。
     * - **lindorm.g.8xlarg**e：表示32核128GB（独享规格）。
     * @example `lindorm.g.xlarge`
     */
    "SolrSpec"?: string;
    /**
     * 变配后实例的搜索引擎节点数量，取值：**0**~**60**。
     * @example `2`
     */
    "SolrNum"?: number;
    /**
     * 变配后实例的宽表引擎节点规格，取值：
     * - **lindorm.c.xlarge**：表示4核8GB（独享规格）。
     * - **lindorm.c.2xlarge**：表示8核16GB（独享规格）。
     * - **lindorm.c.4xlarge**：表示16核32GB（独享规格）。
     * - **lindorm.c.8xlarge**：表示32核64GB（独享规格）。
     * @example `lindorm.c.xlarge`
     */
    "LindormSpec"?: string;
    /**
     * 变配后实例的宽表引擎节点数量，取值：**0**~**90**。
     * > 本参数需要和LindormSpec参数同时传入。
     * @example `2`
     */
    "LindormNum"?: number;
    /**
     * 变配后实例的时序引擎节点规格，取值：
     * - **lindorm.g.xlarge**：表示4核16GB（独享规格）。
     * - **lindorm.g.2xlarge**：表示8核32GB（独享规格）。
     * - **lindorm.g.4xlarge**：表示16核64GB（独享规格）。
     * - **lindorm.g.8xlarge**：表示32核128GB（独享规格）。
     * @example `lindorm.g.xlarge`
     */
    "TsdbSpec"?: string;
    /**
     * 变配后实例的时序引擎节点数量，取值：**0**~**24**。
     * @example `2`
     */
    "TsdbNum"?: number;
    /**
     * 变配后实例的文件引擎节点规格，取值：
     * **indorm.c.xlarge**：表示4核8GB（标准规格）。
     * @example `lindorm.c.xlarge`
     */
    "FilestoreSpec"?: string;
    /**
     * 变配后实例的文件引擎节点数量，取值：**0**~**60**。
     * @example `2`
     */
    "FilestoreNum"?: number;
    /**
     * 变配后实例的流引擎节点规格，取值：
     * - **lindorm.c.2xlarge**：表示8核16GB（独享规格）。
     * - **lindorm.c.4xlarge**：表示16核32GB（独享规格）。
     * - **lindorm.c.8xlarge**：表示32核64GB（独享规格）。
     * @example `lindorm.g.xlarge`
     */
    "StreamSpec"?: string;
    /**
     * 变配后实例的流引擎节点数量，取值：**0**~**90**。
     * @example `2`
     */
    "StreamNum"?: number;
    /**
     * 变配后实例的LTS节点规格，取值：
     * - **lindorm.g.xlarge**：表示4核16GB（独享规格）。
     * - **lindorm.g.2xlarge**：表示8核32GB（独享规格）。
     * @example `lindorm.g.xlarge`
     */
    "LtsCoreSpec"?: string;
    /**
     * 变配后实例的LTS节点数量，取值：**0**~**50**。
     * @example `2`
     */
    "LtsCoreNum"?: number;
    /**
     * 多可用区实例，变配后实例的core单节点容量。取值范围400~64000，单位GB。**如果目标实例是多可用区实例，选填该参数。**
     * @example `400GB`
     */
    "CoreSingleStorage"?: number;
    /**
     * 多可用区实例，变配后实例的log节点规格。取值如下：
     * - **lindorm.sn1.large**：表示4核8GB（独享规格）。
     * - **lindorm.sn1.2xlarge**：表示8核16GB（独享规格）。
     * **如果目标实例是多可用区实例，选填该参数。**
     * @example `lindorm.sn1.large`
     */
    "LogSpec"?: string;
    /**
     * 多可用区实例，变配后实例的log节点数量。取值范围4~400。**如果目标实例是多可用区实例，选填该参数。**
     * @example `4`
     */
    "LogNum"?: number;
    /**
     * 多可用区实例，变配后实例的log单节点磁盘容量。取值范围400-64000，单位GB。**如果目标实例是多可用区实例，选填该参数。**
     * @example `400GB`
     */
    "LogSingleStorage"?: number;
}
