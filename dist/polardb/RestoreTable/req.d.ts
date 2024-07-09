export interface RestoreTableRequest {
    /**
     * 集群ID。
     * > 您可以通过[DescribeDBClusters](~~98094~~)接口查询账号下所有集群的信息详情。
     * @example `pc-bp***************`
     */
    "DBClusterId": string;
    /**
     * 需要还原的目标库表信息的JSON串，库表信息的值都是字符串类型。
     * 例如，`[
     *    {
     *        "tables":[
     *            {
     *                "name":"testtb",
     *                "type":"table",
     *                "newname":"testtb_restore"
     *            }
     *        ],
     *        "name":"testdb",
     *        "type":"db",
     *        "newname":"testdb_restore"
     *    }
     * ]`。
     * > 您可以通过[DescribeMetaList](~~194770~~)接口查看支持恢复的库表名称详情，并将支持恢复的库表信息填入上述例子中的对应位置。
     * @example `[ { "tables":[ { "name":"testtb", "type":"table", "newname":"testtb_restore" } ], "name":"testdb", "type":"db", "newname":"testdb_restore" } ]`
     */
    "TableMeta": string;
    /**
     * 备份集ID。
     * > 若需要按备份集还原目标库表，该参数必传。您可以通过[DescribeBackups](~~98102~~)接口查看备份集ID。
     * @example `111111`
     */
    "BackupId"?: string;
    /**
     * 还原时间点，格式为YYYY-MM-DDThh:mmZ（UTC时间）。
     * >* 若需要按时间点还原，该参数必填。
     * >* 仅支持恢复到7天内的任意时间点。
     * @example `2020-10-04T01:40:00Z `
     */
    "RestoreTime"?: string;
}
