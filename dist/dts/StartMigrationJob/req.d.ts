export interface StartMigrationJobRequest {
    /**
     * 地域ID，传入本参数来指定实例所在地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据迁移实例ID，可以通过调用**DescribeMigrationJobs**接口查询。
     * @example `dtss0611o8vv90****`
     */
    "MigrationJobId": string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
    "ResourceGroupId"?: string;
}
