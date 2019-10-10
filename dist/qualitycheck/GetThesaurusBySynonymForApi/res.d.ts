// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.SynonymList
export interface SynonymList {
	SynonymList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ThesaurusPo
export interface ThesaurusPo {
	Id: number;
	Business: string;
	SynonymList: SynonymList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInGetThesaurusBySynonymForApi
export interface DataInGetThesaurusBySynonymForApi {
	ThesaurusPo: ThesaurusPo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.GetThesaurusBySynonymForApiResponse
export interface GetThesaurusBySynonymForApiResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInGetThesaurusBySynonymForApi;
}

