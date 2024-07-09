export interface ListSchedulesRequest {
    /**
     * 定时调度绑定的流程名称。该名称在同一地域内唯一，创建后不可修改。取值说明如下：
     * - 支持英文字符（a~z）或（A~Z）、数字（0~9）、下划线（_）和短划线（-）。
     * - 首字母必须为英文字母（a~z）、（A~Z）或下划线（_）。
     * - 区分大小写。
     * - 长度为1~128个字符。
     * @example `my_flow_name`
     */
    "FlowName": string;
    /**
     * 首次查询非必填，**NextToken**是以**FlowName**作为下次查询的Token，无下一页数据时，该字段不返回。
     * @example `testNextToken`
     */
    "NextToken"?: string;
    /**
     * 查询数量。取值范围\[1,1000]。
     * @example `1`
     */
    "Limit"?: number;
}
