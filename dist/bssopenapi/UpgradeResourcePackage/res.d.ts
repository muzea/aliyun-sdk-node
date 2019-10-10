// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.DataInUpgradeResourcePackage
export interface DataInUpgradeResourcePackage {
	OrderId: number;
	InstanceId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.UpgradeResourcePackageResponse
export interface UpgradeResourcePackageResponse {
	RequestId: string;
	OrderId: number;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInUpgradeResourcePackage;
}

