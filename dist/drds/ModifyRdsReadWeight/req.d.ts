export interface ModifyRdsReadWeightRequest {
    /**
     * DRDS实例ID。
     * @example `drds************`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库名称。
     * @example `test`
     */
    "DbName": string;
    /**
     * RDS实例列表，多个列表间用英文逗号（,）隔开。
     * @example `rm-****************,rm-****************`
     */
    "InstanceNames": string;
    /**
     * RDS各个实例对应的权重值，多个权重间用英文逗号（,）隔开。
     * @example `14,86`
     */
    "Weights": string;
}
