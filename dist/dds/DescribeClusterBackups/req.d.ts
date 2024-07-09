export interface DescribeClusterBackupsRequest {
    /**
     * 实例ID。
     * @example `dds-bp16cb162771****`
     */
    "DBInstanceId": string;
    /**
     * 集群备份ID。
     * @example `5664****`
     */
    "BackupId"?: string;
    /**
     * 分页页号。默认值为**1**，取值范围为正整数。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页记录数，取值：
     * - **30**（默认值）
     * - **50**
     * - **100**
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2019-03-13T12:11Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间，必须晚于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2019-03-14T13:10Z`
     */
    "EndTime"?: string;
    /**
     * 是否查询集群备份下的子节点信息。取值说明：
     * - **true**：只返回集群备份基本信息，不返回全量的子节点的备份信息。
     * - **false**（默认 ）：返回全量的子节点的备份信息。
     * @example `true`
     */
    "IsOnlyGetClusterBackUp"?: boolean;
    /**
     * 实例所在地域。
     * > - 查询已释放实例的备份集列表式，该参数必填。
     * > - 查询异地备份时，该参数必填。
     * @example `cn-hangzhou`
     */
    "SrcRegion"?: string;
    /**
     * 异地备份所在地域。
     * > 查询异地备份时，该参数必填。
     * @example `cn-shanghai`
     */
    "DestRegion"?: string;
}
