// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.Sign
export interface Sign {
	SignId: number;
	OrderId: string;
	Remark: string;
	AuditState: string;
	SignType: string;
	GmtCreate: string;
	SignName: string;
	RejectInfo: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.DataInQuerySignByParam
export interface DataInQuerySignByParam {
	sign: Sign[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.QuerySignByParamResponse
export interface QuerySignByParamResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	data: DataInQuerySignByParam;
}

