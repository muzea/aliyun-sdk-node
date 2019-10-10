// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.Record
export interface Record {
	RecordId: number;
	Rr: string;
	Type: string;
	Ttl: number;
	Priority: number;
	Value: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.Records
export interface Records {
	Record: Record[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.DescribeZoneRecordsResponse
export interface DescribeZoneRecordsResponse {
	RequestId: string;
	TotalItems: number;
	TotalPages: number;
	PageSize: number;
	PageNumber: number;
	Records: Records;
}

