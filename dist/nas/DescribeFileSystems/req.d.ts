export interface DescribeFileSystemsRequest {
    /**
     * 文件系统ID。
     * - 通用型NAS：31a8e4****。
     * - 极速型NAS：必须以extreme-开头，例如extreme-0015****。
     * - CPFS：必须以cpfs-开头，例如cpfs-125487****。
     * >仅中国站支持cpfs文件系统。
     * @example `31a8e4****`
     */
    "FileSystemId"?: string;
    /**
     * 文件系统类型。
     * 取值：
     * - all（默认值）：所有类型
     * - standard：通用型NAS
     * - extreme：极速型NAS
     * - cpfs：CPFS
     * >仅中国站支持CPFS文件系统。
     * @example `standard`
     */
    "FileSystemType"?: string;
    /**
     * 专有网络ID。
     * 必须与待挂载的云服务器ECS选择相同的VPC网络。
     * @example `vpc-bp1sevsgtqvk5gxbl****`
     */
    "VpcId"?: string;
    /**
     * 分页查询时，每个分页包含的文件系统个数。
     * 取值范围：1~100
     * 默认值：10
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * 文件系统列表的分页页码。
     * 起始值（默认值）：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 标签信息集合。
     */
    "Tag"?: {
        /**
         * 标签键。
         * 限制：
         * - N的取值范围为1~20。
         * - 最多支持128个字符。
         * - 不能以`aliyun`或`acs:`开头。
         * - 不能包含`http://`和`https://`。
         * @example `无`
         */
        Key: string;
        /**
         * 标签值。
         * 限制：
         * - N的取值范围为1~20。
         * - 最多支持128个字符。
         * - 不能以`aliyun`或`acs:`开头。
         * - 不能包含`http://`和`https://`。
         * @example `无`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。
     * 您可以通过[资源管理控制台](https://resourcemanager.console.aliyun.com/resource-groups?)查看资源组ID。
     * @example `rg-acfmwavnfdf****
    `
     */
    "ResourceGroupId"?: string;
}
