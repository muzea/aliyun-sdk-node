// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.ZoneRequestTop
export interface ZoneRequestTop {
	Time: string;
	RequestCount: number;
	Timestamp: number;
	ZoneName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.RequestDetails
export interface RequestDetails {
	ZoneRequestTop: ZoneRequestTop[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.DescribeRequestGraphResponse
export interface DescribeRequestGraphResponse {
	RequestId: string;
	RequestDetails: RequestDetails;
}

