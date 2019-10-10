// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.Record
export interface Record {
	Value: string;
	TTL: number;
	Remark: string;
	DomainName: string;
	RR: string;
	Priority: number;
	RecordId: string;
	Status: string;
	Locked: boolean;
	Weight: number;
	Line: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DomainRecordsInDescribeSubDomainRecords
export interface DomainRecordsInDescribeSubDomainRecords {
	Record: Record[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeSubDomainRecordsResponse
export interface DescribeSubDomainRecordsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	DomainRecords: DomainRecordsInDescribeSubDomainRecords;
}

