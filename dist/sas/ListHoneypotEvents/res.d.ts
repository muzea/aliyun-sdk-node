export interface ListHoneypotEventsResponse {
    /**
     * 蜜罐攻击事件列表。
     */
    HoneypotEvents: {
        /**
         * 攻击源IP。
         * @example `192.168.62.***`
         */
        SrcIp: string;
        /**
         * 攻击的目的IP。
         * @example `112.126.205.***`
         */
        DstIp: string;
        /**
         * 探针ID。
         * @example `27d44bd5815d401992ea672874d9****`
         */
        AgentId: string;
        /**
         * 探针名称。
         * @example `1193474_test_****`
         */
        AgentName: string;
        /**
         * 协议。取值：
         * - **tcp**。
         * - **udp**。
         * @example `tcp`
         */
        Protocol: string;
        /**
         * 首次发生时间戳。
         * @example `1692670297`
         */
        FirstTime: number;
        /**
         * 最新发现时间戳。
         * @example `1676558664`
         */
        LastTime: number;
        /**
         * 地域。
         * @example `北京市`
         */
        Location: string;
        /**
         * 风险等级。取值：
         * - **2**：低风险等级。
         * - **3**：中风险等级。
         * - **4**：高风险等级。
         * @example `4`
         */
        RiskLevel: string;
        /**
         * 蜜罐名称。
         * @example `主机 tcp监听****`
         */
        HoneypotName: string;
        /**
         * 告警事件id。
         * @example `1900752`
         */
        AlarmEventId: number;
        /**
         * 攻击事件的唯一ID。
         * @example `70427821`
         */
        SecurityEventId: number;
        /**
         * 字段键对应值扩展值列表。
         */
        MergeFieldList: {
            /**
             * 字段类型。
             * @example `level2_item1`
             */
            FieldType: string;
            /**
             * 字段的键。
             * @example `type`
             */
            FieldKey: string;
            /**
             * 字段键对应值。
             * @example `web_access`
             */
            FieldValue: string;
            /**
             * 字段的补充信息。
             * @example `data`
             */
            FieldExtInfo: string;
        }[];
    }[];
    /**
     * 分页查询时的页面信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `30`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `20`
         */
        Count: number;
        /**
         * 最后一条数据的键。
         * @example `CAESGgoSChAKDGNvbXBsZXRlVGltZRABCgQiAggAGAAiQAoJAGYXFWIAAAAACjMDLgAAADFTNzMyZDMwMzAzMDM1Mzc3Njc4MzA2ODY5NmI2YTY*********`
         */
        LastRowKey: string;
        /**
         * 使用NextToken方式下返回的NextToken值。
         * @example `B604532DEF982B875E8360A6EFA3B***`
         */
        NextToken: string;
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `FBD28009-6096-5E90-BFE6-62CCD67*****`
     */
    RequestId: string;
}
