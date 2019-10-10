// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.Domain
export interface Domain {
	DomainId: string;
	DomainName: string;
	DomainStatus: string;
	DomainRecord: string;
	ConfirmStatus: string;
	SpfAuthStatus: string;
	MxAuthStatus: string;
	CreateTime: string;
	UtcCreateTime: number;
	CnameAuthStatus: string;
	IcpStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.DataInQueryDomainByParam
export interface DataInQueryDomainByParam {
	domain: Domain[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.QueryDomainByParamResponse
export interface QueryDomainByParamResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	data: DataInQueryDomainByParam;
}

