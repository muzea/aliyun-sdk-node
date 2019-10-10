// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.PrepaidCard
export interface PrepaidCard {
	PrepaidCardId: number;
	PrepaidCardNo: string;
	GrantedTime: string;
	EffectiveTime: string;
	ExpiryTime: string;
	ApplicableProducts: string;
	ApplicableScenarios: string;
	NominalValue: string;
	Balance: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.DataInQueryPrepaidCards
export interface DataInQueryPrepaidCards {
	PrepaidCard: PrepaidCard[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.QueryPrepaidCardsResponse
export interface QueryPrepaidCardsResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInQueryPrepaidCards;
}

