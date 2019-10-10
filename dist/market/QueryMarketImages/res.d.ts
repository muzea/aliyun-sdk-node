// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.SkuCodes
export interface SkuCodes {
	SkuCode: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.Quota
export interface Quota {
	TotalQuota: number;
	UsingQuota: number;
	UnusedQuota: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.RuleIdSet
export interface RuleIdSet {
	RuleId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.Order
export interface Order {
	OriginalPrice: number;
	DiscountPrice: number;
	TradePrice: number;
	Currency: string;
	Period: number;
	PriceUnit: string;
	RuleIdSet: RuleIdSet;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.Rule
export interface Rule {
	RuleId: number;
	Title: string;
	Name: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.Rules
export interface Rules {
	Rule: Rule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.PriceInfo
export interface PriceInfo {
	Order: Order;
	Rules: Rules;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.DiskDeviceMapping
export interface DiskDeviceMapping {
	DiskType: string;
	Format: string;
	SnapshotId: string;
	Size: number;
	Device: string;
	ImportOSSBucket: string;
	ImportOSSObject: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.DiskDeviceMappings
export interface DiskDeviceMappings {
	DiskDeviceMapping: DiskDeviceMapping[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.Image
export interface Image {
	Version: string;
	VersionDescription: string;
	ImageId: string;
	ImageSize: number;
	Region: string;
	IsDefault: boolean;
	SupportIO: boolean;
	DiskDeviceMappings: DiskDeviceMappings;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.Images
export interface Images {
	Image: Image[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.ImageProduct
export interface ImageProduct {
	ImageProductCode: string;
	ProductName: string;
	CategoryName: string;
	SupplierName: string;
	BaseSystem: string;
	OsKind: string;
	OsBit: number;
	PictureUrl: string;
	SmallPicUrl: string;
	ShortDescription: string;
	AgreementUrl: string;
	DetailUrl: string;
	BuyUrl: string;
	StoreUrl: string;
	Score: number;
	UserCount: number;
	SupportIO: boolean;
	CreatedOn: number;
	SkuCodes: SkuCodes;
	Quota: Quota;
	PriceInfo: PriceInfo;
	Images: Images;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.Result
export interface Result {
	ImageProduct: ImageProduct[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.QueryMarketImagesResponse
export interface QueryMarketImagesResponse {
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	RequestId: string;
	Result: Result;
}

