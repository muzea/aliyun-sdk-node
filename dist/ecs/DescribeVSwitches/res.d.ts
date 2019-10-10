// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.VSwitch
export interface VSwitch {
	VSwitchId: string;
	VpcId: string;
	Status: string;
	CidrBlock: string;
	ZoneId: string;
	AvailableIpAddressCount: number;
	Description: string;
	VSwitchName: string;
	CreationTime: string;
	IsDefault: boolean;
	ResourceGroupId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.VSwitches
export interface VSwitches {
	VSwitch: VSwitch[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeVSwitchesResponse
export interface DescribeVSwitchesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	VSwitches: VSwitches;
}

