export interface CancelImportRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 迁移任务ID。
     * >发起迁移任务时会返回此参数，参见ImportDatabaseBetweenInstances。
     * @example `8562584`
     */
    "ImportId": number;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
