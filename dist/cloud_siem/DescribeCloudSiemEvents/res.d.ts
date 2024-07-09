export interface DescribeCloudSiemEventsResponse {
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
             * 事件发生时间。
             * @example `2021-01-06 16:37:29`
             */
            GmtCreate: string;
            /**
             * 事件最后更新时间。
             * @example `2021-01-06 16:37:29`
             */
            GmtModified: string;
            /**
             * 事件归属主账号ID。
             * @example `127608589417****`
             */
            Aliuid: number;
            /**
             * 事件关联告警数。
             * @example `4`
             */
            AlertNum: number;
            /**
             * 事件关联资产数。
             * @example `4`
             */
            AssetNum: number;
            /**
             * 事件全局唯一UUID。
             * @example `85ea4241-798f-4684-a876-65d4f0c3****`
             */
            IncidentUuid: string;
            /**
             * 事件名称。
             * @example `Multiple type of alerts, including Miner Network, Command line download and run malicious files, Backdoor Process, etc`
             */
            IncidentName: string;
            /**
             * 事件英文名称。
             * @example `Multiple type of alerts, including Miner Network, Command line download and run malicious files, Backdoor Process, etc`
             */
            IncidentNameEn: string;
            /**
             * 事件描述。
             * @example `The threat event contains 13 Miner Network,1 Execute suspicious encoded commands on Linux, etc`
             */
            Description: string;
            /**
             * 事件英文描述。
             * @example `The threat event contains 13 Miner Network,1 Execute suspicious encoded commands on Linux, etc`
             */
            DescriptionEn: string;
            /**
             * 事件关联告警来源产品。
             * @example `[sas,waf]`
             */
            DataSources: string[];
            /**
             * 威胁等级。取值：
             * - serious：高危
             * - suspicious：中危
             * - remind：低危
             * @example `remind`
             */
            ThreatLevel: string;
            /**
             * 事件的威胁分值，范围 0~100，分值越高风险等级越高。
             * @example `90.2`
             */
            ThreatScore: number;
            /**
             * 事件扩展信息 json格式。
             * @example `{"event_transfer_type":"customize_rule"}`
             */
            ExtContent: string;
            /**
             * 事件状态。  取值：
             * - 0：未处理
             * - 1：处理中
             * - 5：处理失败
             * - 10：已处理
             * @example `0`
             */
            Status: number;
            /**
             * ATTCT&攻击技术标签集合。
             * @example `["T1595.002 Vulnerability Scanning"]`
             */
            AttCkLabels: string[];
            /**
             * 关联账号。
             * @example `127608589417****`
             */
            ReferAccount: string;
            /**
             * 事件备注。
             * @example `dealed`
             */
            Remark: string;
        }[];
    };
}
