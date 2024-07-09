export interface DescribeTableRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `drds*********`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库名。
     * @example `drds_flashback`
     */
    "DbName": string;
    /**
     * 表名。
     * @example `employee_split`
     */
    "TableName": string;
}
