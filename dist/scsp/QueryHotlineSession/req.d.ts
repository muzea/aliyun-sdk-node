export interface QueryHotlineSessionRequest {
    "InstanceId": string;
    "Acid"?: string;
    "CallType"?: number;
    "CalledNumber"?: string;
    "CallingNumber"?: string;
    "GroupId"?: number;
    "GroupName"?: string;
    "MemberId"?: string;
    "MemberName"?: string;
    "QueryEndTime"?: number;
    "QueryStartTime"?: number;
    "RequestId"?: string;
    "ServicerName"?: string;
    "ServicerId"?: string;
    "Params"?: string;
    "PageSize"?: number;
    "PageNo"?: number;
    "CallResult"?: string;
}
