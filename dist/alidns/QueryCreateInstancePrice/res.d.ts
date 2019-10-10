// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.Rule
export interface Rule {
	RuleId: number;
	Name: string;
	Title: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.Rules
export interface Rules {
	Rule: Rule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.QueryCreateInstancePriceResponse
export interface QueryCreateInstancePriceResponse {
	RequestId: string;
	Origin: string;
	Discount: string;
	Amount: string;
	Currency: string;
	Rules: Rules;
}

