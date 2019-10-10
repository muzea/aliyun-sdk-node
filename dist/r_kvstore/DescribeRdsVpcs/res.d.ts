// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.VSwitch
export interface VSwitch {
	GmtCreate: string;
	IsDefault: boolean;
	VSwitchId: string;
	VSwitchName: string;
	GmtModified: string;
	Status: string;
	CidrBlock: string;
	IzNo: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.VpcItem
export interface VpcItem {
	VpcId: string;
	VpcName: string;
	Bid: string;
	AliUid: string;
	RegionNo: string;
	CidrBlock: string;
	IsDefault: boolean;
	Status: string;
	GmtCreate: string;
	GmtModified: string;
	VSwitchs: VSwitch[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.Vpcs
export interface Vpcs {
	Vpc: VpcItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeRdsVpcsResponse
export interface DescribeRdsVpcsResponse {
	RequestId: string;
	Vpcs: Vpcs;
}

