export interface DeleteDBInstanceRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 实例释放后的归档备份保留策略。取值：
     * * **None**：不保留
     * * **Lastest**：保留最后一个
     * * **All**：全部保留
     * >仅RDS MySQL本地盘实例支持。
     * @example `Lastest`
     */
    "ReleasedKeepPolicy"?: string;
}
