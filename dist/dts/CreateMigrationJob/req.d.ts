export interface CreateMigrationJobRequest {
    /**
     * 数据迁移实例所属的地域，无需设置，该参数即将下线。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据迁移实例所属的地域，即迁移的目标数据库实例所属地域，详情请参见支持的[地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 数据迁移实例的规格，取值为：**small**、**medium**、**large**、**xlarge**、**2xlarge**。
     * > - 各个规格的测试性能，请参见[数据迁移规格说明](~~26606~~)。
     * - 实例规格及定价，请参见[产品定价](~~117780~~)。
     * @example `2xlarge`
     */
    "MigrationJobClass": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**参数只支持传入ASCII字符，且不能超过64个字符。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe63****`
     */
    "ClientToken"?: string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
    "ResourceGroupId"?: string;
}
