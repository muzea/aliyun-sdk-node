interface QueryEvaluateListRequest {
    "RegionId"?: string;
    "Type"?: number;
    "OutBizId"?: string;
    "OwnerId"?: number;
    "PageNum"?: number;
    "PageSize"?: number;
    "StartAmount"?: number;
    "EndAmount"?: number;
    "StartBizTime"?: string;
    "EndBizTime"?: string;
    "SortType"?: number;
    "StartSearchTime"?: string;
    "EndSearchTime"?: string;
    "BillCycle"?: string;
    "BizTypeList"?: string[];
}
export { QueryEvaluateListRequest };