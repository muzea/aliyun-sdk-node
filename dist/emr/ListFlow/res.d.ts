// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.FlowItem
export interface FlowItem {
	Id: string;
	GmtCreate: number;
	GmtModified: number;
	Name: string;
	Description: string;
	Type: string;
	Status: string;
	Periodic: boolean;
	StartSchedule: number;
	EndSchedule: number;
	CronExpr: string;
	CreateCluster: boolean;
	ClusterId: string;
	ProjectId: string;
	HostName: string;
	Graph: string;
	AlertUserGroupBizId: string;
	AlertDingDingGroupBizId: string;
	AlertConf: string;
	CategoryId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Flow
export interface Flow {
	FlowItem: FlowItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListFlowResponse
export interface ListFlowResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	Total: number;
	Flow: Flow;
}

