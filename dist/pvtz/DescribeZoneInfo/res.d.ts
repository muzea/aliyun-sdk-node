// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.Vpc
export interface Vpc {
	RegionId: string;
	VpcName: string;
	VpcId: string;
	RegionName: string;
	ReionId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.BindVpcs
export interface BindVpcs {
	Vpc: Vpc[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.DescribeZoneInfoResponse
export interface DescribeZoneInfoResponse {
	RequestId: string;
	ZoneId: string;
	ZoneName: string;
	Remark: string;
	RecordCount: number;
	CreateTime: string;
	CreateTimestamp: number;
	UpdateTime: string;
	UpdateTimestamp: number;
	IsPtr: boolean;
	ProxyPattern: string;
	BindVpcs: BindVpcs;
}

