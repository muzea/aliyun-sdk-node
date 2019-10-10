// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.WarningMachine
export interface WarningMachine {
	Uuid: string;
	MachineName: string;
	InternetIp: string;
	IntranetIp: string;
	PassCount: number;
	HighWarningCount: number;
	MediumWarningCount: number;
	LowWarningCount: number;
	Status: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.DescribeWarningMachinesResponse
export interface DescribeWarningMachinesResponse {
	RequestId: string;
	Count: number;
	PageSize: number;
	TotalCount: number;
	CurrentPage: number;
	WarningMachines: WarningMachine[];
}

