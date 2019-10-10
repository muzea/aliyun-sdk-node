// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.CheckWarning
export interface CheckWarning {
	Uuid: string;
	CheckId: number;
	CheckWarningId: number;
	Level: string;
	Item: string;
	Type: string;
	Status: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.DescribeCheckWarningsResponse
export interface DescribeCheckWarningsResponse {
	RequestId: string;
	Count: number;
	PageSize: number;
	TotalCount: number;
	CurrentPage: number;
	CheckWarnings: CheckWarning[];
}

