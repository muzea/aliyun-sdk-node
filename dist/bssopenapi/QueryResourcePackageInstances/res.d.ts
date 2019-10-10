// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.ApplicableProducts
export interface ApplicableProducts {
	Product: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.InstanceInQueryResourcePackageInstances
export interface InstanceInQueryResourcePackageInstances {
	InstanceId: string;
	Region: string;
	TotalAmount: string;
	TotalAmountUnit: string;
	RemainingAmount: string;
	RemainingAmountUnit: string;
	EffectiveTime: string;
	ExpiryTime: string;
	Remark: string;
	PackageType: string;
	Status: string;
	DeductType: string;
	ApplicableProducts: ApplicableProducts;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.Instances
export interface Instances {
	Instance: InstanceInQueryResourcePackageInstances[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.DataInQueryResourcePackageInstances
export interface DataInQueryResourcePackageInstances {
	HostId: string;
	PageNum: string;
	PageSize: string;
	TotalCount: string;
	Instances: Instances;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.QueryResourcePackageInstancesResponse
export interface QueryResourcePackageInstancesResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Page: number;
	PageSize: number;
	Total: number;
	Data: DataInQueryResourcePackageInstances;
}

