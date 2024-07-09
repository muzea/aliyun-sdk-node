export interface DescribeBackupClientsRequest {
    /**
     * 分页页码，从1开始，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，最小值为1，最大值为99，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 备份客户端类型。取值：
     * - **ECS_CLIENT**，表示ECS文件备份客户端。
     * - **CONTAINER_CLIENT**，表示容器备份客户端。
     * @example `ECS_CLIENT`
     */
    "ClientType": string;
    /**
     * 备份集群ID。
     * @example `cl-000ge4wa61b4d337xblq`
     */
    "ClusterId"?: string;
    /**
     * 备份客户端ID列表。
     * @example `["c-*********************"]`
     */
    "ClientIds"?: string[];
    /**
     * ECS实例ID列表。
     * @example `["i-*********************"]`
     */
    "InstanceIds"?: string[];
    /**
     * 返回的标签信息。
     * @example `33738719#`
     */
    "Tag"?: {
        /**
         * 仓库的标签键。N的取值范围：1~20。
         * - 不支持以`aliyun`、`acs:`开头。
         * - 不允许包含`http://`和`https://` 。
         * - 不允许为空字符串。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 仓库的标签值。N的取值范围：1~20。
         * - 不支持以`aliyun`、`acs:`开头。
         * - 不允许包含`http://`和`https:// `。
         * - 不允许为空字符串。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 跨账号备份类型。支持：
     * - SELF_ACCOUNT：本账号备份
     * - CROSS_ACCOUNT：跨账号备份
     * @example `CROSS_ACCOUNT`
     */
    "CrossAccountType"?: string;
    /**
     * 用于跨账号备份功能中的原账号ID。
     * @example `129374672382xxxx`
     */
    "CrossAccountUserId"?: number;
    /**
     * 用于跨账号备份的原账号RAM中创建的角色名。
     * @example `hbrcrossrole`
     */
    "CrossAccountRoleName"?: string;
}
