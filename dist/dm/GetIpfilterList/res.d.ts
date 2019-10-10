// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.Ipfilters
export interface Ipfilters {
	Id: string;
	IpAddress: string;
	CreateTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.DataInGetIpfilterList
export interface DataInGetIpfilterList {
	ipfilters: Ipfilters[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.GetIpfilterListResponse
export interface GetIpfilterListResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	data: DataInGetIpfilterList;
}

