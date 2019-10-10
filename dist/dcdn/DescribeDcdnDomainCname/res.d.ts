// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.Data
export interface Data {
	Domain: string;
	Cname: string;
	Status: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.CnameDatas
export interface CnameDatas {
	Data: Data[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnDomainCnameResponse
export interface DescribeDcdnDomainCnameResponse {
	RequestId: string;
	CnameDatas: CnameDatas;
}

