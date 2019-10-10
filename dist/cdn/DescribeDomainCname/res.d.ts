// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.Data
export interface Data {
	Domain: string;
	Cname: string;
	Status: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.CnameDatas
export interface CnameDatas {
	Data: Data[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeDomainCnameResponse
export interface DescribeDomainCnameResponse {
	RequestId: string;
	CnameDatas: CnameDatas;
}

