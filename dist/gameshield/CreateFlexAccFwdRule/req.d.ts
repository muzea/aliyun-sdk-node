interface CreateFlexAccFwdRuleRequest {
    "RegionId"?: string;
    "BizId": number;
    "Identity": string;
    "ProtocolEx": string;
    "SourceIp"?: string;
    "IpList"?: string;
    "DomainList"?: string;
    "Remark"?: string;
    "MasterIpList"?: string;
    "SlaveIpList"?: string;
    "AccType"?: number;
}
export { CreateFlexAccFwdRuleRequest };