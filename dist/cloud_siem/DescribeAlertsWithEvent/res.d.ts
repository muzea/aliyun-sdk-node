export interface DescribeAlertsWithEventResponse {
    /**
     * 请求是否成功。取值：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9AAA9ED9-78F4-5021-86DC-D51C7511****`
     */
    RequestId: string;
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 分页记录。
         */
        PageInfo: {
            /**
             * 列表当前页号。
             * @example `1`
             */
            CurrentPage: number;
            /**
             * 每页返回记录数。
             * @example `10`
             */
            PageSize: number;
            /**
             * 记录总数。
             * @example `100`
             */
            TotalCount: number;
        };
        /**
         * 详细数据。
         */
        ResponseData: {
            /**
             * 告警唯一ID。
             * @example `123456789`
             */
            Id: number;
            /**
             * 告警入库时间。
             * @example `2021-01-06 16:37:29`
             */
            GmtCreate: string;
            /**
             * 告警最后更新时间。
             * @example `2021-01-06 16:37:29`
             */
            GmtModified: string;
            /**
             * 告警关联siem主账号ID。
             * @example `127608589417****`
             */
            MainUserId: number;
            /**
             * 事件全局唯一UUID。
             * @example `85ea4241-798f-4684-a876-65d4f0c3****`
             */
            IncidentUuid: string;
            /**
             * 告警UUID。
             * @example `sas_71e24437d2797ce8fc59692905a4****`
             */
            AlertUuid: string;
            /**
             * 告警记录时间。
             * @example `2021-01-06 16:37:29`
             */
            LogTime: string;
            /**
             * 事件关联告警来源产品。
             * @example `sas`
             */
            AlertSrcProd: string;
            /**
             * 告警标题。
             * @example `Scan-Try SNMP weak password`
             */
            AlertTitle: string;
            /**
             * 告警标题英文。
             * @example `Scan-Try SNMP weak password`
             */
            AlertTitleEn: string;
            /**
             * 告警类型。
             * @example `Scan`
             */
            AlertType: string;
            /**
             * 告警类型英文。
             * @example `Scan`
             */
            AlertTypeEn: string;
            /**
             * 告警类型美杜莎Code。
             * @example `security_event_config.event_name.webshellName`
             */
            AlertTypeCode: string;
            /**
             * 告警名称。
             * @example `Try SNMP weak password`
             */
            AlertName: string;
            /**
             * 告警名称。
             * @example `Try SNMP weak password`
             */
            AlertNameEn: string;
            /**
             * 告警名称美杜莎Code。
             * @example `security_event_config.event_name.webshell`
             */
            AlertNameCode: string;
            /**
             * 威胁等级。 取值：
             * - serious：高危
             * - suspicious：中危
             * - remind：低危
             * @example `remind`
             */
            AlertLevel: string;
            /**
             * 资产列表。
             * @example `[
                  {
                        "is_main_asset": "1",
                        "asset_name": "47.245.*",
                        "port": "22",
                        "ip": "47.245.*",
                        "asset_type": "ip",
                        "location": "ap-southeast-1",
                        "asset_id": "47.245.*",
                        "net_connect_dir": "in"
                  }
            ]`
             */
            AssetList: string;
            /**
             * 告警发生时间。
             * @example `2021-01-06 16:37:29`
             */
            OccurTime: string;
            /**
             * 告警首次发生时间。
             * @example `2021-01-06 16:37:29`
             */
            StartTime: string;
            /**
             * 告警结束时间。
             * @example `2021-01-06 16:37:29`
             */
            EndTime: string;
            /**
             * 事件关联告警来源产品子模块。
             * @example `waf`
             */
            AlertSrcProdModule: string;
            /**
             * 告警描述。
             * @example `The detection model found a suspicious Webshell file on your server, which may be a backdoor file implanted to maintain permissions after the attacker successfully invaded the website.`
             */
            AlertDesc: string;
            /**
             * 告警英文描述。
             * @example `The detection model found a suspicious Webshell file on your server, which may be a backdoor file implanted to maintain permissions after the attacker successfully invaded the website.`
             */
            AlertDescEn: string;
            /**
             * 告警描述美杜莎Code。
             * @example `security_event_config.event_name.webshell
            `
             */
            AlertDescCode: string;
            /**
             * 告警详情。
             * @example `{"main_user_id": "165295629792****";"log_uuid_count": "99";"attack_ip": "21.92.*.*"}`
             */
            AlertDetail: string;
            /**
             * 告警日志UUID。
             * @example `cfw_d12e285a-a042-4d7e-be89-f8a795ef****`
             */
            LogUuid: string;
            /**
             * 实体详情。
             * @example `[{&quot;entity_user_id&quot;:&quot;198921674491****&quot;,&quot;entity_account_id&quot;:&quot;N/A&quot;,&quot;entity_uuid&quot;:&quot;6245f979d5dd9ef8dd19bdc72228****&quot;,&quot;entity_type&quot;:&quot;host&quot;,&quot;entity_name&quot;:&quot;zhh-test-20240409&quot;,&quot;is_comprised&quot;:&quot;1&quot;,&quot;os_type&quot;:&quot;linux&quot;,&quot;entity_id&quot;:&quot;a88f44dd-b8d4-4ded-831c-77a4835****&quot;,&quot;host_uuid&quot;:&quot;a88f44dd-b8d4-4ded-831c-77a4835****&quot;,&quot;host_name&quot;:&quot;zhh-test-2024****&quot;}]`
             */
            EntityList: string;
            /**
             * ATTCT&攻击技术标签。
             * @example `T1595.002 Vulnerability Scanning`
             */
            AttCk: string;
            /**
             * 产生告警阿里账号ID。
             * @example `176555323***`
             */
            SubUserId: number;
            /**
             * 云code。  取值：
             * - aliyun：阿里云
             * - qcloud：腾讯云
             * - hcloud：华为云
             * @example `aliyun`
             */
            CloudCode: string;
            /**
             * 是否已防御。取值：
             * - 0：检出
             * - 1：拦截
             * @example `1`
             */
            IsDefend: string;
            /**
             * 告警详细数据。
             * @example `aliyun`
             */
            AlertInfoList: {
                /**
                 * 告警详细属性KEY。
                 * @example `suspicious.wbd.wb.trojanpath`
                 */
                Key: string;
                /**
                 * 告警详细数据名称。
                 * @example `Trojan Path
                `
                 */
                KeyName: string;
                /**
                 * 告警详细数据值。
                 * @example `/root/test33.php`
                 */
                Values: string;
            }[];
        }[];
    };
}
