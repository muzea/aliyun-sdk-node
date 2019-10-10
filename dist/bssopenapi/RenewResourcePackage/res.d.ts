// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.DataInRenewResourcePackage
export interface DataInRenewResourcePackage {
	OrderId: number;
	InstanceId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.RenewResourcePackageResponse
export interface RenewResourcePackageResponse {
	RequestId: string;
	OrderId: number;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInRenewResourcePackage;
}

