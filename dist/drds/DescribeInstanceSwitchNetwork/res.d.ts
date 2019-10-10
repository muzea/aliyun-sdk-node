// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.VswitchInfo
export interface VswitchInfo {
	VswitchId: string;
	VpcId: string;
	VswitchName: string;
	AzoneId: string;
	DrdsSupported: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.VswitchInfos
export interface VswitchInfos {
	VswitchInfo: VswitchInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.VpcInfo
export interface VpcInfo {
	VpcId: string;
	RegionId: string;
	VpcName: string;
	VswitchInfos: VswitchInfos;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.VpcInfos
export interface VpcInfos {
	VpcInfo: VpcInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeInstanceSwitchNetworkResponse
export interface DescribeInstanceSwitchNetworkResponse {
	RequestId: string;
	Success: boolean;
	VpcInfos: VpcInfos;
}

