// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.VSwitchItem
export interface VSwitchItem {
	VSwitchId: string;
	VSwitchName: string;
	IzNo: string;
	Bid: string;
	AliUid: string;
	RegionNo: string;
	CidrBlock: string;
	IsDefault: boolean;
	Status: string;
	GmtCreate: string;
	GmtModified: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.VSwitches
export interface VSwitches {
	VSwitch: VSwitchItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeRdsVSwitchsResponse
export interface DescribeRdsVSwitchsResponse {
	RequestId: string;
	VSwitches: VSwitches;
}

