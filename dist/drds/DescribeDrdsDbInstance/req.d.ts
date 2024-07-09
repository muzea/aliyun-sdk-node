export interface DescribeDrdsDbInstanceRequest {
    /**
     * 实例名称。
     * @example `drdshbga1138****`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库名称。
     * @example `drds_test`
     */
    "DbName": string;
    /**
     * 私有定制RDS实例ID。
     * @example `rm-bp1t1mk5a5bdj****`
     */
    "DbInstanceId": string;
}
