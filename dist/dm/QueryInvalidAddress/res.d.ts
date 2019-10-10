// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.MailDetailInQueryInvalidAddress
export interface MailDetailInQueryInvalidAddress {
	LastUpdateTime: string;
	UtcLastUpdateTime: number;
	ToAddress: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.DataInQueryInvalidAddress
export interface DataInQueryInvalidAddress {
	mailDetail: MailDetailInQueryInvalidAddress[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.QueryInvalidAddressResponse
export interface QueryInvalidAddressResponse {
	RequestId: string;
	NextStart: number;
	TotalCount: number;
	data: DataInQueryInvalidAddress;
}

