export interface HandleSimilarSecurityEventsRequest {
    /**
     * 访问源的IP地址。
     * @example `192.168.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 批量处理所有相同类型告警事件的任务的ID。
     * >调用[CreateSimilarSecurityEventsQueryTask](~~CreateSimilarSecurityEventsQueryTask~~)接口可以获取该参数。
     * @example `666038`
     */
    "TaskId": number;
    /**
     * 批量处理同类告警事件的操作类型。
     * >调用[DescribeSecurityEventOperations](~~DescribeSecurityEventOperations~~)接口可以获取该参数。
     * @example `offline_handled`
     */
    "OperationCode": string;
    /**
     * 告警事件处理方式子操作的配置。该值为JSON格式。
     * > **OperationCode**值为**kill\_and\_quara**、**block\_ip**、**virus\_quara**此参数必填外，**OperationCode**为其他值的情况下，该参数值可为空。
     * > **OperationCode**为**block_ip**时包含以下字段：
     * > - **expireTime**：锁定截至时间。单位：毫秒
     * >
     * > **OperationCode**为**kill\_and\_quara**时包含以下字段：
     * > - **subOperation**：查杀方式。取值如下
     * >     - **killAndQuaraFileByMd5andPath**：结束进程并隔离文件
     * >     - **killByMd5andPath**：结束该运行进程
     * >
     * > **OperationCode**为**virus\_quara**时包含以下字段：
     * > - **subOperation**：查杀方式。取值如下
     * >    - **quaraFileByMd5andPath**：隔离该进程的源文件
     * @example `{"expireTime":1646208726195}`
     */
    "OperationParams"?: string;
    /**
     * 设置加白名单的规则。例如要针对文件MD5进行加白，加白规则是文件中包含字符串a，则该加白的参数就是{"field":"md5","operate":"contains","fieldValue":"aa"}。
     * @example `{"field":"md5","operate":"contains","fieldValue":"aa"}`
     */
    "MarkMissParam"?: string;
    /**
     * 操作的备注信息。
     * @example `remark test.`
     */
    "Remark"?: string;
}
