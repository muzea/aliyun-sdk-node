// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.DataInQueryUserOmsData
export interface DataInQueryUserOmsData {
	Marker: string;
	HostId: string;
	OmsData: map[string]interface {}[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.QueryUserOmsDataResponse
export interface QueryUserOmsDataResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInQueryUserOmsData;
}

