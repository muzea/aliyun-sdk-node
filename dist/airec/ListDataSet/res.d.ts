// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/airec.ResultItemInListDataSet
export interface ResultItemInListDataSet {
	InstanceId: string;
	VersionId: string;
	State: string;
	GmtCreate: number;
	GmtModified: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/airec.ListDataSetResponse
export interface ListDataSetResponse {
	RequestId: string;
	Code: string;
	Message: string;
	Result: ResultItemInListDataSet[];
}

