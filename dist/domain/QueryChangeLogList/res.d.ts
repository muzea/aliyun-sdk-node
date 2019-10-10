// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.ChangeLog
export interface ChangeLog {
	DomainName: string;
	Result: string;
	Operation: string;
	OperationIPAddress: string;
	Details: string;
	Time: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.DataInQueryChangeLogList
export interface DataInQueryChangeLogList {
	ChangeLog: ChangeLog[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.QueryChangeLogListResponse
export interface QueryChangeLogListResponse {
	RequestId: string;
	TotalItemNum: number;
	CurrentPageNum: number;
	TotalPageNum: number;
	PageSize: number;
	PrePage: boolean;
	NextPage: boolean;
	ResultLimit: boolean;
	Data: DataInQueryChangeLogList;
}

