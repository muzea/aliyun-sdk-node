// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.Data
export interface Data {
	Domain: string;
	Cname: string;
	Status: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.CnameDatas
export interface CnameDatas {
	Data: Data[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DescribeScdnDomainCnameResponse
export interface DescribeScdnDomainCnameResponse {
	RequestId: string;
	CnameDatas: CnameDatas;
}

