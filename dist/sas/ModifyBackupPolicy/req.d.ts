export interface ModifyBackupPolicyRequest {
    /**
     * 要修改的防勒索防护策略的ID。
     * @example `11`
     */
    "Id": number;
    /**
     * 要修改的防勒索防护策略的名称。
     * @example `policy_name_A`
     */
    "Name": string;
    /**
     * 要修改的防护策略的内容。格式为JSON格式的字符串，包含以下字段：
     * - **Source**：需要防护的服务器目录。需要防护全部目录时，该字段设置为：\[]。
     * - **Include**：需要防护的文件类型。例："\*.jpg"、"\*.doc"。
     * - **Exclude**：自定义需要排除的目录。"/home/user"排除目录，调用DescribeExcludeSystemPath接口获取所有目录，然后添加需要排除的目录。例如：排除目录"/home/user"。
     * - **Schedule**：数据备份任务的执行开始时间和执行间隔时间。建议指定在业务低峰期非整点。
     *     - 例1：I|1583216092|P21D表示执行开始时间为2020-03-03 14:14:52，执行间隔时间为3周。
     *     - 例2：I|1583216092|PT24H表示执行开始时间为2020-03-03 14:14:52，执行间隔时间为24小时。
     * - **Retention**：备份数据保留时间，单位：天。7表示1周，365表示1年，-1表示永久。
     * - **SpeedLimiter**：备份网络带宽限制。例如：12:15:15360|6:12:5120表示12\~15点15 MB，6\~12点5 MB。
     * 云上主机连接内网，建议不要对备份网络带宽进行限制，不限制网络带宽该参数值设置为空字符串（""） 。
     * @example `{"Source":["home","admin"]}`
     */
    "Policy": any;
    /**
     * 防护策略的版本。可调用[DescribeBackupPolicies](~~DescribeBackupPolicies~~)接口查询。
     * - **1.0.0**
     * - **2.0.0**
     * @example `2.0.0`
     */
    "PolicyVersion"?: string;
    /**
     * 要修改防护策略的服务器所在的地域。
     * 您可通过调用[DescribeSupportRegion](~~DescribeSupportRegion~~)，查询防勒索功能支持的地域。
     * @example `cn-hangzhou`
     */
    "PolicyRegionId"?: string;
    /**
     * 防护策略防护的服务器的UUID列表。
     * @example `["3bb30859-b3b5-4f28-868f-b0892c98****", "3bb30859-b3b5-4f28-868f-b0892c98****"]`
     */
    "UuidList": string[];
}
