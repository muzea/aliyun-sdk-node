export interface ListHoneypotEventFlowsResponse {
    /**
     * 攻击时间线列表。
     */
    HoneypotEventFlows: {
        /**
         * 攻击事件的唯一ID。
         * @example `306527555`
         */
        SecurityEventId: number;
        /**
         * 攻击事件ID，字符格式。
         * @example `19bec028-d98b-45c4-a4d9-cc3d593f****`
         */
        HoneypotEventId: string;
        /**
         * 攻击事件最新发生时间，时间戳格式。
         * @example `1686622222000`
         */
        LastTime: number;
        /**
         * 攻击事件首次发生时间，时间戳格式。
         * @example `1686621122000`
         */
        FirstTime: number;
        /**
         * 攻击中连接唯一标识ID。
         * @example `fd7f1ff4-0c4b-41cb-99ad-0724349d****`
         */
        EventConnection: string;
        /**
         * 探针ID。
         * @example `d3c0dafa-5059-4eb0-8c28-7d40f58*****`
         */
        AgentId: string;
        /**
         * 探针名称。
         * @example `hw-d***`
         */
        AgentName: string;
        /**
         * 蜜罐ID。
         * @example `911df9d6fe20451c059edbcffa1d1c33452f6a71e59d4826da067af224*****`
         */
        HoneypotId: string;
        /**
         * 蜜罐名称。
         * @example `hw-zhi*****`
         */
        HoneypotName: string;
        /**
         * 容器ID。
         * @example `eca09895****`
         */
        DockerId: string;
        /**
         * 目的IP。
         * @example `112.126.205.***`
         */
        DstIp: string;
        /**
         * 目的端口。
         * @example `80`
         */
        DstPort: number;
        /**
         * 攻击来源IP。
         * @example `121.41.48.***`
         */
        SrcIp: string;
        /**
         * 攻击来源MAC地址。
         * @example `00:0C:29:CA:**:**`
         */
        SrcMac: string;
        /**
         * 源端口号。
         * @example `80`
         */
        SrcPort: number;
        /**
         * 攻击类型ID。
         * @example `web_access`
         */
        TypeId: string;
        /**
         * 风险等级。取值：
         * - **2**：低风险等级。
         * - **3**：中风险等级。
         * - **4**：高风险等级。
         * @example `4`
         */
        RiskLevel: string;
        /**
         * 攻击载荷的扩展信息。
         * @example `{\"payload\":{\"format\":\"line\",\"name\":{\"cn\":\"攻击载荷\",\"en\":\"payload\"},\"value\":\"\"},\"uid\":{\"format\":\"line\",\"name\":{\"cn\":\"\",\"en\":\"\"},\"uid\":\"5fa2ece9-aa08-4bbd-a272-5d27*********\",\"value\":\"\"}}`
         */
        Extra: string;
        /**
         * VPC拓展信息。
         * @example `{\"vpc_id\":\"\",\"vpc_dest_port\":\"\",\"vpc_dest_ip\":\"\"}`
         */
        Extra1: string;
        /**
         * 攻击事件中的一次攻击行为的唯一ID。
         * @example `5fa2ece9-aa08-4bbd-a272-5d27d1c6*****`
         */
        Uid: string;
        /**
         * 攻击事件处理状态。取值：
         * - **1**：待处理。
         * - **2**：已忽略。
         * - **4**：已确认。
         * @example `1`
         */
        Status: number;
        /**
         * 文件的OSS地址。
         * @example `https://pop-test-file-upload.oss-cn-beijing.aliyuncs.com/5626_26331*****`
         */
        FileOssUrl: string;
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
         * @example `78`
         */
        TotalCount: number;
        /**
         * 当前页显示的数据条数。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `9F4E6157-9600-5588-86B9-38F09067****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
