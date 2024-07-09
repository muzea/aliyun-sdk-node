export interface QueryHostBaseInfoByInstanceRequest {
    /**
     * 实例所在地域ID。可查看[地域信息](~~198326~~)获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `rm-bp15rszyxs4t3****`
     */
    "DBInstanceId": string;
}
