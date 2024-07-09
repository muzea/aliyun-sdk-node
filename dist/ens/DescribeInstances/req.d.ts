export interface DescribeInstancesRequest {
    /**
     * 地域ID。
     * @example `cn-beijing-cmcc`
     */
    "EnsRegionId"?: string;
    /**
     * 实例ID。
     * @example `i-5iqczfxps7csjrxeca****`
     */
    "InstanceId"?: string;
    /**
     * 节点的编号列表。参数为一个带有格式的JSON数组，最多100个ID，英文逗号（,）分隔。
     * @example `["cn-suzhou-telecom","cn-chengdu-telecom"]`
     */
    "EnsRegionIds"?: string;
    /**
     * 实例的编号列表。参数为一个带有格式的JSON数组，最多100个ID，英文逗号（,）分隔。
     * @example `["i-5iqczfxps7csjrxeca07****", "i-5iqczfxps7csjrxeca07****"]`
     */
    "InstanceIds"?: string;
    /**
     * 实例名称。
     * @example `TestName`
     */
    "InstanceName"?: string;
    /**
     * 镜像ID。
     * @example `centos_6_08_64_20G_alibase_****`
     */
    "ImageId"?: string;
    /**
     * 实例状态列表的页码，起始值为**1**。
     * 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值为**100**行。
     * 默认值：**10**。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 实例状态。取值：
     * - Running：运行中。
     * - Stopped：已停止。
     * - Expired：已过期。
     * @example `Running`
     */
    "Status"?: string;
    /**
     * 排序参数，JSON格式。
     * 按照实例名称、到期时间、节点ID、创建时间排序，可以组合使用。
     * @example `{
        "InstanceNameSort": "asc",
        "ExpireTimeSort": "asc",
        "CreationTimeSort": "desc",
        "EnsRegionId": "desc"
    }`
     */
    "OrderByParams"?: string;
    /**
     * 边缘服务ID，可按此ID查询边缘服务下所创建的实例信息。
     * @example `ens-20190730202316s****`
     */
    "EnsServiceId"?: string;
    /**
     * 过滤的类型。取值：
     * - EnsInstance：单独购买实例。
     * - EnsService：边缘服务实例。
     * - BuildMachine：镜像构建机。
     * - EnsPostPaidInstance：单独购买后付费。
     * @example `EnsService`
     */
    "InstanceResourceType"?: string;
    /**
     * 查询的关键字。支持**ip**、**InstanceName**、**InstanceId**等参数。
     * @example `Joshua`
     */
    "SearchKey"?: string;
    /**
     * 网络ID。
     * @example `n-2zeuphj08tt7q3brd****`
     */
    "NetworkId"?: string;
    /**
     * 交换机ID。
     * @example `vsw-2zeh0r1pabwtg6wcs****`
     */
    "VSwitchId"?: string;
    /**
     * 安全组ID。
     * @example `sg-5kyicq2kfcapxrdds6tar7jqb`
     */
    "SecurityGroupId"?: string;
    /**
     * 内网IP地址。
     * @example `47.100.XX.XX`
     */
    "IntranetIp"?: string;
    /**
     * 资源标签。此接口暂不支持标签信息返回，可以结合标签目录下的API进行组合使用。
     */
    "Tags"?: {
        /**
         * 实例的标签键。N的取值范围为1~20。
         * @example `tag`
         */
        Key: string;
        /**
         * 实例的标签值。N的取值范围：1~20。
         * @example `2`
         */
        Value: string;
    }[];
    /**
     * 实例规格。
     * @example `ens.se1.tiny`
     */
    "InstanceType"?: string;
}
