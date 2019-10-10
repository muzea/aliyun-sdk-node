// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.Address
export interface Address {
	Country: string;
	Township: string;
	AddressLine: string;
	City: string;
	Province: string;
	District: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.FaceBoundary
export interface FaceBoundary {
	Width: number;
	Height: number;
	Top: number;
	Left: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.HeadPose
export interface HeadPose {
	Pitch: number;
	Roll: number;
	Yaw: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.FaceAttributes
export interface FaceAttributes {
	Glasses: string;
	MaskConfidence: number;
	Mask: string;
	GlassesConfidence: number;
	RaceConfidence: number;
	Beard: string;
	Race: string;
	BeardConfidence: number;
	FaceBoundary: FaceBoundary;
	HeadPose: HeadPose;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.EmotionDetails
export interface EmotionDetails {
	SURPRISED: number;
	HAPPY: number;
	ANGRY: number;
	DISGUSTED: number;
	SAD: number;
	CALM: number;
	SCARED: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.FacesItemInGetImage
export interface FacesItemInGetImage {
	FaceId: string;
	FaceConfidence: number;
	Age: string;
	Gender: string;
	Emotion: string;
	Attractive: number;
	GenderConfidence: number;
	GroupId: string;
	FaceQuality: number;
	FaceAttributes: FaceAttributes;
	EmotionDetails: EmotionDetails;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.OCRBoundary
export interface OCRBoundary {
	Width: number;
	Height: number;
	Top: number;
	Left: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.OCRItem
export interface OCRItem {
	OCRContents: string;
	OCRConfidence: number;
	OCRBoundary: OCRBoundary;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.TagsItem
export interface TagsItem {
	TagEnName: string;
	TagName: string;
	TagCount: number;
	TagConfidence: number;
	ParentTagEnName: string;
	TagLevel: number;
	ParentTagName: string;
	Num: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.CelebrityBoundary
export interface CelebrityBoundary {
	Width: number;
	Height: number;
	Top: number;
	Left: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.CelebrityItem
export interface CelebrityItem {
	CelebrityConfidence: number;
	CelebrityName: string;
	CelebrityLibraryName: string;
	CelebrityNum: number;
	CelebrityGender: string;
	CelebrityBoundary: CelebrityBoundary;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.GetImageResponse
export interface GetImageResponse {
	RequestId: string;
	SetId: string;
	ImageUri: string;
	RemarksA: string;
	RemarksB: string;
	CreateTime: string;
	ModifyTime: string;
	ImageWidth: number;
	ImageHeight: number;
	ImageFormat: string;
	Exif: string;
	FileSize: number;
	ImageTime: string;
	Orientation: string;
	SourceType: string;
	SourceUri: string;
	SourcePosition: string;
	FacesStatus: string;
	FacesModifyTime: string;
	Location: string;
	OCRStatus: string;
	OCRModifyTime: string;
	OCRFailReason: string;
	FacesFailReason: string;
	TagsFailReason: string;
	TagsModifyTime: string;
	CelebrityStatus: string;
	CelebrityModifyTime: string;
	CelebrityFailReason: string;
	TagsStatus: string;
	RemarksC: string;
	RemarksD: string;
	ExternalId: string;
	AddressModifyTime: string;
	AddressStatus: string;
	AddressFailReason: string;
	Address: Address;
	Faces: FacesItemInGetImage[];
	OCR: OCRItem[];
	Tags: TagsItem[];
	Celebrity: CelebrityItem[];
}

