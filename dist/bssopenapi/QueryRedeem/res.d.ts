// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.RedeemItem
export interface RedeemItem {
	RedeemId: string;
	RedeemNo: string;
	Status: string;
	GrantedTime: string;
	EffectiveTime: string;
	ExpiryTime: string;
	NominalValue: string;
	Balance: string;
	ApplicableProducts: string;
	Specification: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.Redeem
export interface Redeem {
	Redeem: RedeemItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.DataInQueryRedeem
export interface DataInQueryRedeem {
	PageNum: number;
	PageSize: number;
	TotalCount: number;
	Redeem: Redeem;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.QueryRedeemResponse
export interface QueryRedeemResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInQueryRedeem;
}

