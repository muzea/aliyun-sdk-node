// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.SubCheckItemsItem
export interface SubCheckItemsItem {
	PreCheckItemName: string;
	State: string;
	ErrorMsgCode: string;
	ErrorMsgParams: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.PreCheckResult
export interface PreCheckResult {
	PreCheckName: string;
	State: string;
	SubCheckItems: SubCheckItemsItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribePreCheckResultResponse
export interface DescribePreCheckResultResponse {
	RequestId: string;
	Success: boolean;
	PreCheckResult: PreCheckResult;
}

