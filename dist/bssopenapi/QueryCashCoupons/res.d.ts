// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.CashCoupon
export interface CashCoupon {
	CashCouponId: number;
	CashCouponNo: string;
	GrantedTime: string;
	EffectiveTime: string;
	ExpiryTime: string;
	ApplicableProducts: string;
	ApplicableScenarios: string;
	NominalValue: string;
	Balance: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.DataInQueryCashCoupons
export interface DataInQueryCashCoupons {
	CashCoupon: CashCoupon[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.QueryCashCouponsResponse
export interface QueryCashCouponsResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInQueryCashCoupons;
}

