// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.PrivateZoneInfo
export interface PrivateZoneInfo {
	AccessRegionId: string;
	HostRegionId: string;
	HostVpcId: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.PrivateZoneInfos
export interface PrivateZoneInfos {
	PrivateZoneInfo: PrivateZoneInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cbn.DescribeCenPrivateZoneRoutesResponse
export interface DescribeCenPrivateZoneRoutesResponse {
	RequestId: string;
	CenId: string;
	PrivateZoneDnsServers: string;
	PageNumber: number;
	TotalCount: number;
	PageSize: number;
	PrivateZoneInfos: PrivateZoneInfos;
}

