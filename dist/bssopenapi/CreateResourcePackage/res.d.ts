// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.DataInCreateResourcePackage
export interface DataInCreateResourcePackage {
	OrderId: number;
	InstanceId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.CreateResourcePackageResponse
export interface CreateResourcePackageResponse {
	RequestId: string;
	OrderId: number;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInCreateResourcePackage;
}

