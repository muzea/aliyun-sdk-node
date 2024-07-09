export interface ListAgentlessMaliciousFilesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CE343162-35BF-565E-B85E-8E3B7A2B****`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 返回结果中显示的当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的恶意文件总个数。
         * @example `23`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的恶意文件条数。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 恶意文件列表。
     */
    List: {
        /**
         * 事件ID。
         * @example `1****`
         */
        Id: number;
        /**
         * 首次扫描时间戳，单位：毫秒。
         * @example `168257753****`
         */
        FirstScanTimestamp: number;
        /**
         * 最新扫描时间戳，单位：毫秒。
         * @example `168257753****`
         */
        LatestScanTimestamp: number;
        /**
         * 紧急程度。取值：
         * - serious：紧急
         * - suspicious：可疑
         * - remind：提醒
         * @example `serious`
         */
        Level: string;
        /**
         * 恶意文件的MD5值。
         * @example `1f2e13a7c51ee89316ae50066515****`
         */
        MaliciousMd5: string;
        /**
         * 文件路径。
         * @example `/root/etc/g****`
         */
        FilePath: number;
        /**
         * 资产实例的UUID。
         * @example `49e25e0f-bb51-4a5a-a1b3-13a4ddaa****`
         */
        Uuid: string;
        /**
         * 资产实例名称。
         * @example `sql-test-001****`
         */
        InstanceName: string;
        /**
         * 服务器的公网IP。
         * @example `8.210.XX.XX`
         */
        InternetIp: string;
        /**
         * 服务器的私网IP。
         * @example `172.25.XX.XX`
         */
        IntranetIp: string;
        /**
         * 扫描对象ID。
         * @example `m-****`
         */
        TargetId: string;
        /**
         * 扫描对象名称。
         * @example `jenkins****`
         */
        TargetName: string;
        /**
         * 扫描对象类型。取值：
         * - 2：镜像
         * @example `2`
         */
        TargetType: string;
        /**
         * 恶意样本下载链接。
         * @example `https://upgrade-rule-pkg.oss-cn-beijing.aliyuncs.com/totalpackage/rule/V3.166.2/totalpackage_rule_V3.16_6.2_tip_20230220110****`
         */
        DownloadUrl: string;
        /**
         * 高亮显示文本，JSON字符串。
         * @example `{\"highlight\":{\"ruleVersion\":\"20230223\",\"ruleId\":600139,\"events\":[[207,284]]}}`
         */
        HighLight: string;
        /**
         * 备注信息。
         */
        Notes: {
            /**
             * 备注信息。
             * @example `Serious***`
             */
            Note: string;
            /**
             * 备注记录ID。
             * @example `50****`
             */
            NoteId: string;
            /**
             * 备注记录时间。
             * @example `2023-04-27 14:49:21`
             */
            NoteTime: string;
        }[];
        /**
         * 告警事件详情。
         */
        Details: {
            /**
             * 告警事件详情项的名称。
             * @example `MD5`
             */
            Name: string;
            /**
             * 告警事件详情项的类型。
             * @example `text`
             */
            Type: string;
            /**
             * 告警事件详情项的值。
             * @example `1`
             */
            Value: string;
            /**
             * 告警事件详情项的名称key。
             * @example `${suspicious.mp.db.maliciousfilemd5}`
             */
            NameKey: string;
        }[];
        /**
         * 恶意文件的名称。
         * @example `WebShell`
         */
        MaliciousName: string;
        /**
         * 磁盘分区。
         * @example `/dev/xvda1`
         */
        Partition: string;
        /**
         * 告警处理结果。
         * @example `addWhitelist.USER.Success`
         */
        OperateResult: string;
        /**
         * 告警处理时间戳，单位：毫秒。
         * @example `168257753****`
         */
        OperateTimestamp: string;
        /**
         * 病毒类型。
         * @example `WebShell`
         */
        MaliciousType: string;
    }[];
}
