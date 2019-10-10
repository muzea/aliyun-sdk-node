// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.ClothesBoxDetailItem
export interface ClothesBoxDetailItem {
	PUID: string;
	Type: string;
	Score: number;
	Box: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.QRCodesRectangle
export interface QRCodesRectangle {
	Left: string;
	Top: string;
	Width: string;
	Height: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.QRCodesItem
export interface QRCodesItem {
	Content: string;
	QRCodesRectangle: QRCodesRectangle;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.LogoBoxDetailItem
export interface LogoBoxDetailItem {
	PUID: string;
	Type: string;
	Score: number;
	Box: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.TagsItemInDetectTag
export interface TagsItemInDetectTag {
	TagId: string;
	TagLevel: string;
	TagName: string;
	ParentTagId: string;
	ParentTagName: string;
	TagScore: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.SuccessDetailsItem
export interface SuccessDetailsItem {
	Time: string;
	GetImageTime: string;
	DetectTime: string;
	SrcUri: string;
	ClothesBoxDetail: ClothesBoxDetailItem[];
	QRCodes: QRCodesItem[];
	LogoBoxDetail: LogoBoxDetailItem[];
	Tags: TagsItemInDetectTag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.FailDetailsItem
export interface FailDetailsItem {
	Reason: string;
	ErrorMessage: string;
	ErrorCode: string;
	SrcUri: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.DetectQRCodesResponse
export interface DetectQRCodesResponse {
	RequestId: string;
	SuccessDetails: SuccessDetailsItem[];
	FailDetails: FailDetailsItem[];
}

