// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.CheckResult
export interface CheckResult {
	BinlogExists: boolean;
	SupportBinlogRowQueryEvents: boolean;
	BinlogRowQueryEventEnabled: boolean;
	CanUpgradeSupportBinlogRowQueryEvents: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.PreCheckSqlFlashbackTaskResponse
export interface PreCheckSqlFlashbackTaskResponse {
	RequestId: string;
	Success: boolean;
	CheckResult: CheckResult;
}

