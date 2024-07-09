export interface CreateSchedulerRuleResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `8DFB602D-1AAC-46C4-90F2-C84086E7A6E4`
     */
    RequestId: string;
    /**
     * 规则对应的流量调度器CNAME值。
     * > 您必须将业务解析到流量调度器的CNAME，才能启用规则。
     * @example `48k7b372gpl4****.aliyunddos0001.com`
     */
    Cname: string;
    /**
     * 规则名称。
     * @example `testrule`
     */
    RuleName: string;
}
