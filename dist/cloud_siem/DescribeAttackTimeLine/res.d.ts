export interface DescribeAttackTimeLineResponse {
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 资产名称。
         * @example `zsw-agentless-centos****`
         */
        AssetName: string;
        /**
         * 告警发生时间。
         * @example `2021-01-06 16:37:29`
         */
        AlertTime: number;
        /**
         * 资产逻辑ID。
         * @example `0616caeb-acb8-45e0-8520-4ee5fbe251f0`
         */
        AssetId: string;
        /**
         * 事件UUID。
         * @example `85ea4241-798f-4684-a876-65d4f0c3****`
         */
        IncidentUuid: string;
        /**
         * 事件关联告警UUID。
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
         * 事件关联告警来源产品子模块。
         * @example `waf`
         */
        AlertSrcProdModule: string;
        /**
         * ATTCT&攻击技术标签。
         * @example `T1595.002 Vulnerability Scanning`
         */
        AttCk: string;
        /**
         * 云Code。  取值：
         * - aliyun：阿里云
         * - qcloud：腾讯云
         * - hcloud：华为云
         * @example `aliyun`
         */
        CloudCode: string;
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
    }[];
    /**
     * 请求是否成功。取值：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回消息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9AAA9ED9-78F4-5021-86DC-D51C7511****`
     */
    RequestId: string;
}
