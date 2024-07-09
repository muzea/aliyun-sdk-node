export interface EvaluateRegionResourceRequest {
    /**
     * 数据库引擎类型，取值范围如下：
     * - **MySQL**
     * - **PostgreSQL**
     * - **Oracle**
     * @example `MySQL`
     */
    "DBType": string;
    /**
     * 数据库引擎版本号。
     * * MySQL版本号取值范围如下：
     *     * **5.6**
     *     * **5.7**
     *     * **8.0**
     * * PostgreSQL版本号取值范围如下：
     *     * **11**
     *     * **14**
     * * Oracle版本号取值范围如下：
     *     * **11**
     *     * **14**
     * @example `8.0`
     */
    "DBVersion": string;
    /**
     * 子域。即顶级域名（一级域名或父域名）的下一级。例如：父域名为：cn-beijing，则它的子域可以为cn-beijing-i-aliyun。
     * @example `cn-beijing-i-aliyun`
     */
    "SubDomain"?: string;
    /**
     * 节点规格，详情请参见如下文档：
     * - PolarDB MySQL版：[计算节点规格](~~102542~~)。
     * - PolarDB PostgreSQL版（兼容Oracle）：[计算节点规格](~~207921~~)。
     * - PolarDB PostgreSQL版：[计算节点规格](~~209380~~)。
     * @example `polar.mysql.x4.large`
     */
    "DBNodeClass": string;
    /**
     * 指定集群链路类型，后端随机选择默认值，取值范围如下：
     * * **lvs**：Linux虚拟服务器。
     * * **proxy**：代理服务器。
     * * **dns**：域名系统。
     * @example `lvs`
     */
    "DBInstanceConnType"?: string;
    /**
     * 是否返回支持单可用区部署功能的可用区列表。取值范围如下：
     * * **0**（默认）：不返回。
     * * **1**：返回。
     * @example `1`
     */
    "DispenseMode"?: string;
    /**
     * 是否创建Maxscale，取值范围如下：
     * * **true**（默认）：创建Maxscale。
     * * **false**：不创建Maxscale。
     * @example `true`
     */
    "NeedMaxScaleLink": string;
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
    /**
     * 地域ID。
     * > 您可以通过[DescribeRegions](~~98041~~)接口查看可用地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID。
     * > 您可以通过[DescribeRegions](~~98041~~)接口查看可选的可用区。
     * @example `cn-hangzhou-g`
     */
    "ZoneId": string;
}
