// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ParentFlow
export interface ParentFlow {
	BizDate: number;
	FlowId: string;
	ScheduleKey: string;
	ParentFlowId: string;
	ProjectName: string;
	ProjectId: string;
	DependencyFlowId: string;
	FlowInstanceId: string;
	DependencyInstanceId: string;
	ParentFlowName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ParentFlowList
export interface ParentFlowList {
	ParentFlow: ParentFlow[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.DescribeFlowResponse
export interface DescribeFlowResponse {
	RequestId: string;
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
	HostName: string;
	Graph: string;
	CategoryId: string;
	AlertConf: string;
	AlertUserGroupBizId: string;
	AlertDingDingGroupBizId: string;
	Application: string;
	ParentFlowList: ParentFlowList;
}

