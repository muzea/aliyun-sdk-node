interface CreateLayer4RuleRequest {
    "RegionId"?: string;
    "AppId": number;
    "BizId": number;
    "FrontPort": number;
    "BackPort": number;
    "Rservers": string;
    "SourceIp"?: string;
    "Lang"?: string;
}
export { CreateLayer4RuleRequest };