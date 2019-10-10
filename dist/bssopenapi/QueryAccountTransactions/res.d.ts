// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.UidList
export interface UidList {
	Item: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.OmsData
export interface OmsData {
	Item: map[string]interface {}[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.FinanceUnitStatisInfo
export interface FinanceUnitStatisInfo {
	ResourceCount: number;
	ResourceGroupCount: number;
	SubUnitCount: number;
	UserCount: number;
	TotalResourceCount: number;
	TotalUserCount: number;
	TotalResourceGroupCount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.FinanceUnit
export interface FinanceUnit {
	OwnerUid: number;
	ParentUnitId: number;
	UnitId: number;
	UnitName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.ResourceInstanceList
export interface ResourceInstanceList {
	ResourceUserId: number;
	ResourceId: number;
	CommodityCode: string;
	ResourceUserName: string;
	CommodityName: string;
	ResourceGroup: string;
	ResourceTag: string;
	ResourceNick: string;
	ResourceType: string;
	ResourceStatus: string;
	RelatedResources: string;
	ApportionCode: string;
	ApportionName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.ConfigList
export interface ConfigList {
	ConfigList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.Module
export interface Module {
	MonthGaapDeductedByPrepaidCard: string;
	DeductedByCashCoupons: string;
	PayerAccount: string;
	GaapPretaxAmountLocal: string;
	UsageStartDate: string;
	MonthGaapPaymentAmount: string;
	OrderId: string;
	UnallocatedDeductedByCoupons: string;
	ModuleName: string;
	PretaxGrossAmount: string;
	PaymentAmount: string;
	UnallocatedDeductedByCashCoupons: string;
	PretaxAmount: string;
	BillingCycle: string;
	UnallocatedPricingDiscount: string;
	GaapPretaxGrossAmount: string;
	ProductCode: string;
	InstanceID: string;
	UnallocatedPretaxAmount: string;
	PriceType: string;
	GaapPricingDiscount: string;
	AccountingUnit: string;
	MonthGaapPretaxAmount: string;
	Region: string;
	PricingDiscount: string;
	GaapPretaxAmount: string;
	ResourceGroup: string;
	SubOrderId: string;
	UnallocatedDeductedByPrepaidCard: string;
	MonthGaapPretaxGrossAmount: string;
	UnallocatedPretaxGrossAmount: string;
	DeductedByCoupons: string;
	Tag: string;
	OwnerID: string;
	SubscriptionType: string;
	PayTime: string;
	GaapDeductedByPrepaidCard: string;
	ModuleCode: string;
	MonthGaapPretaxAmountLocal: string;
	GaapDeductedByCashCoupons: string;
	DeductedByPrepaidCard: string;
	GaapDeductedByCoupons: string;
	PaymentCurrency: string;
	UnallocatedPretaxAmountLocal: string;
	ProductType: string;
	Currency: string;
	MonthGaapPricingDiscount: string;
	UsageEndDate: string;
	OrderType: string;
	GaapPaymentAmount: string;
	MonthGaapDeductedByCoupons: string;
	PretaxAmountLocal: string;
	BillType: string;
	UnallocatedPaymentAmount: string;
	MonthGaapDeductedByCashCoupons: string;
	ConfigList: ConfigList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.ModuleList
export interface ModuleList {
	Module: Module[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.Item
export interface Item {
	Tax: number;
	PreviousBillingCycleBalance: number;
	PayerAccount: string;
	UsageStartTime: string;
	SuborderID: string;
	SolutionCode: string;
	ProductDetail: string;
	Promotion: string;
	Usage: string;
	Seller: string;
	PretaxAmountLocal: number;
	OutstandingAmount: number;
	DeductedByResourcePackage: string;
	ProductCode: string;
	ListPrice: string;
	Quantity: string;
	InvoiceDiscount: number;
	MybankPaymentAmount: number;
	PretaxGrossAmount: number;
	InstanceID: string;
	RecordID: string;
	Config: string;
	Status: string;
	Item: string;
	ProductName: string;
	Region: string;
	PaymentAmount: number;
	UsageEndTime: string;
	RoundDownDiscount: string;
	SolutionID: string;
	ClearedTime: string;
	InternetIP: string;
	PaymentTime: string;
	CreateTime: string;
	LinkedCustomerOrderID: string;
	CostUnit: string;
	AfterTaxAmount: number;
	ResourceGroup: string;
	BillingType: string;
	InstanceSpec: string;
	Tag: string;
	OwnerID: string;
	SolutionName: string;
	NickName: string;
	SubscriptionType: string;
	InstanceConfig: string;
	DeductedByCashCoupons: number;
	ServicePeriod: string;
	InvoiceNo: string;
	DiscountAmount: number;
	BillID: string;
	ListPriceUnit: string;
	PaymentCurrency: string;
	UsageUnit: string;
	ProductType: string;
	AccountDiscount: number;
	Currency: string;
	DeductedByPrepaidCard: number;
	OriginalOrderID: string;
	PaymentTransactionID: string;
	OrderID: string;
	OrderType: string;
	DeductedByCoupons: number;
	BillingItem: string;
	Zone: string;
	ChargeDiscount: number;
	PretaxAmount: number;
	IntranetIP: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.ItemsInQueryInstanceBill
export interface ItemsInQueryInstanceBill {
	Item: Item[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.Instance
export interface Instance {
	Region: string;
	ExpectedReleaseTime: string;
	PackageType: string;
	DeductType: string;
	CreateTime: string;
	OwnerId: number;
	TotalAmount: string;
	RenewStatus: string;
	SubStatus: string;
	InstanceId: string;
	TotalAmountUnit: string;
	SubscriptionType: string;
	RemainingAmountUnit: string;
	StopTime: string;
	Seller: string;
	Remark: string;
	ProductType: string;
	ProductCode: string;
	RenewalDuration: number;
	RenewalDurationUnit: string;
	RemainingAmount: string;
	EffectiveTime: string;
	ExpiryTime: string;
	EndTime: string;
	SellerId: number;
	InstanceID: string;
	ReleaseTime: string;
	Status: string;
	ApplicableProducts: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.Order
export interface Order {
	Region: string;
	UsageEndTime: string;
	PaymentTime: string;
	CreateTime: string;
	PaymentStatus: string;
	Operator: string;
	SubOrderId: string;
	AfterTaxAmount: string;
	OrderId: string;
	OriginalConfig: string;
	PretaxGrossAmount: string;
	SubscriptionType: string;
	Tax: string;
	UsageStartTime: string;
	PretaxAmount: string;
	PaymentCurrency: string;
	OrderSubType: string;
	ProductType: string;
	Currency: string;
	ProductCode: string;
	InstanceIDs: string;
	OrderType: string;
	Quantity: string;
	PretaxAmountLocal: string;
	Config: string;
	RelatedOrderId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.OrderListInQueryOrders
export interface OrderListInQueryOrders {
	Order: Order[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.Modules
export interface Modules {
	Module: Module[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.Property
export interface Property {
	Name: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.Properties
export interface Properties {
	Property: Property[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.AvailableDuration
export interface AvailableDuration {
	Name: string;
	Value: number;
	Unit: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.AvailableDurations
export interface AvailableDurations {
	AvailableDuration: AvailableDuration[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.Specification
export interface Specification {
	Name: string;
	Value: string;
	AvailableDurations: AvailableDurations;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.Specifications
export interface Specifications {
	Specification: Specification[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.PackageType
export interface PackageType {
	Name: string;
	Code: string;
	Properties: Properties;
	Specifications: Specifications;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.PackageTypes
export interface PackageTypes {
	PackageType: PackageType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.ResourcePackage
export interface ResourcePackage {
	ProductCode: string;
	ProductType: string;
	Name: string;
	PackageTypes: PackageTypes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.ResourcePackages
export interface ResourcePackages {
	ResourcePackage: ResourcePackage[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.Product
export interface Product {
	ProductCode: string;
	ProductName: string;
	ProductType: string;
	SubscriptionType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.ProductList
export interface ProductList {
	Product: Product[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.ModuleDetail
export interface ModuleDetail {
	InvoiceDiscount: number;
	UnitPrice: number;
	OriginalCost: number;
	CostAfterDiscount: number;
	ModuleCode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.ModuleDetailsInGetPayAsYouGoPrice
export interface ModuleDetailsInGetPayAsYouGoPrice {
	ModuleDetail: ModuleDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.PromotionDetail
export interface PromotionDetail {
	PromotionId: number;
	PromotionName: string;
	PromotionDesc: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.PromotionDetailsInGetPayAsYouGoPrice
export interface PromotionDetailsInGetPayAsYouGoPrice {
	PromotionDetail: PromotionDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.AccountTransactionsListItem
export interface AccountTransactionsListItem {
	TransactionNumber: string;
	TransactionTime: string;
	TransactionFlow: string;
	TransactionType: string;
	TransactionChannel: string;
	TransactionChannelSN: string;
	FundType: string;
	RecordID: string;
	Remarks: string;
	BillingCycle: string;
	Amount: string;
	Balance: string;
	TransactionAccount: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.AccountTransactionsList
export interface AccountTransactionsList {
	AccountTransactionsList: AccountTransactionsListItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.Evaluate
export interface Evaluate {
	Id: number;
	GmtCreate: string;
	GmtModified: string;
	UserId: number;
	UserNick: string;
	OutBizId: string;
	BillId: number;
	ItemId: number;
	BillCycle: string;
	BizType: string;
	OriginalAmount: number;
	PresentAmount: number;
	CanInvoiceAmount: number;
	InvoicedAmount: number;
	OffsetCostAmount: number;
	OffsetAcceptAmount: number;
	Status: number;
	OpId: string;
	Name: string;
	BizTime: string;
	Type: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.EvaluateList
export interface EvaluateList {
	Evaluate: Evaluate[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.FinanceUnitDtoListItem
export interface FinanceUnitDtoListItem {
	ParentUnitId: number;
	UnitName: string;
	OwnerUid: number;
	UnitId: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.Promotion
export interface Promotion {
	Id: number;
	Name: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.Promotions
export interface Promotions {
	Promotion: Promotion[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.CustomerInvoiceAddress
export interface CustomerInvoiceAddress {
	Id: number;
	UserId: number;
	UserNick: string;
	Addressee: string;
	Province: string;
	City: string;
	County: string;
	Street: string;
	PostalCode: string;
	Phone: string;
	BizType: string;
	DeliveryAddress: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.CustomerInvoiceAddressList
export interface CustomerInvoiceAddressList {
	CustomerInvoiceAddress: CustomerInvoiceAddress[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.CustomerInvoice
export interface CustomerInvoice {
	Id: number;
	UserId: number;
	UserNick: string;
	InvoiceTitle: string;
	CustomerType: number;
	TaxpayerType: number;
	Bank: string;
	BankNo: string;
	OperatingLicenseAddress: string;
	OperatingLicensePhone: string;
	RegisterNo: string;
	StartCycle: number;
	Status: number;
	GmtCreate: string;
	TaxationLicense: string;
	AdjustType: number;
	EndCycle: number;
	TitleChangeInstructions: string;
	IssueType: number;
	Type: number;
	DefaultRemark: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.CustomerInvoiceList
export interface CustomerInvoiceList {
	CustomerInvoice: CustomerInvoice[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.AttributeValue
export interface AttributeValue {
	Type: string;
	Name: string;
	Value: string;
	Remark: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.Values
export interface Values {
	AttributeValue: AttributeValue[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.Attribute
export interface Attribute {
	Code: string;
	Name: string;
	Unit: string;
	Values: Values;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.AttributeList
export interface AttributeList {
	Attribute: Attribute[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.Data
export interface Data {
	ToUnitUserId: number;
	TradePrice: number;
	HostId: string;
	TotalUnAppliedInvoiceAmount: number;
	OriginalPrice: number;
	ToUnitId: number;
	OrderId: string;
	HostingStatus: string;
	TotalCount: number;
	CreditLimitStatus: string;
	BillingCycle: string;
	OutstandingAmount: number;
	Quantity: number;
	AvailableCashAmount: string;
	HostName: string;
	TotalOutstandingAmount: number;
	NewInvoiceAmount: number;
	Marker: string;
	AccountType: string;
	AvailableAmount: string;
	PageSize: number;
	MybankCreditAmount: string;
	UnitId: number;
	CreditAmount: string;
	AccountID: string;
	InstanceId: string;
	OwnerUid: number;
	InvoiceApplyId: number;
	Boolean: boolean;
	IsCertified: boolean;
	TotalInvoiceAmount: number;
	PageNum: number;
	IsSuccess: boolean;
	Currency: string;
	LoginEmail: string;
	DiscountPrice: number;
	AccountName: string;
	Mpk: number;
	UidList: UidList;
	OmsData: OmsData;
	FinanceUnitStatisInfo: FinanceUnitStatisInfo;
	FinanceUnit: FinanceUnit;
	ResourceInstanceDtoList: ResourceInstanceList[];
	ModuleList: ModuleList;
	Items: ItemsInQueryInstanceBill;
	InstanceList: Instance[];
	OrderList: OrderListInQueryOrders;
	Modules: Modules;
	ResourcePackages: ResourcePackages;
	ProductList: ProductList;
	ModuleDetails: ModuleDetailsInGetPayAsYouGoPrice;
	PromotionDetails: PromotionDetailsInGetPayAsYouGoPrice;
	AccountTransactionsList: AccountTransactionsList;
	EvaluateList: EvaluateList;
	FinanceUnitDtoList: FinanceUnitDtoListItem[];
	Promotions: Promotions;
	CustomerInvoiceAddressList: CustomerInvoiceAddressList;
	CustomerInvoiceList: CustomerInvoiceList;
	AttributeList: AttributeList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/bssopenapi.QueryAccountTransactionsResponse
export interface QueryAccountTransactionsResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: Data;
}

