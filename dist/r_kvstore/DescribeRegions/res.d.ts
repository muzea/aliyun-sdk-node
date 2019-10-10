// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.ZoneIdList
export interface ZoneIdList {
	ZoneId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.KVStoreRegion
export interface KVStoreRegion {
	RegionId: string;
	ZoneIds: string;
	LocalName: string;
	RegionEndpoint: string;
	ZoneIdList: ZoneIdList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.RegionIds
export interface RegionIds {
	KVStoreRegion: KVStoreRegion[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeRegionsResponse
export interface DescribeRegionsResponse {
	RequestId: string;
	RegionIds: RegionIds;
}

