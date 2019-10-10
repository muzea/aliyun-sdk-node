// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.DataItem
export interface DataItem {
	OwnerUid: number;
	UnitId: number;
	IsSuccess: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.ModifyFinanceUnitResponse
export interface ModifyFinanceUnitResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataItem[];
}

