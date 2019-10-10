interface CreateBizRequest {
    "RegionId"?: string;
    "BizName": string;
    "UseCc": number;
    "SourceIp"?: string;
    "Lang"?: string;
    "AppId"?: number;
    "AppName"?: string;
    "CcQps"?: number;
    "L4Rules"?: string;
    "Groups"?: string;
}
export { CreateBizRequest };