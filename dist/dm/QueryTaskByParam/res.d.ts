// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.Task
export interface Task {
	TaskId: string;
	ReceiversName: string;
	TemplateName: string;
	TaskStatus: string;
	CreateTime: string;
	UtcCreateTime: number;
	AddressType: string;
	TagName: string;
	RequestCount: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.DataInQueryTaskByParam
export interface DataInQueryTaskByParam {
	task: Task[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.QueryTaskByParamResponse
export interface QueryTaskByParamResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	data: DataInQueryTaskByParam;
}

