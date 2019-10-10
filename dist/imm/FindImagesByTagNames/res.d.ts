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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.SimilarFacesItem
export interface SimilarFacesItem {
	FaceId: string;
	ImageUri: string;
	Similarity: number;
	FaceAttributes: FaceAttributes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.FacesItem
export interface FacesItem {
	FaceConfidence: number;
	EmotionConfidence: number;
	ImageUri: string;
	FaceQuality: number;
	Similarity: number;
	Attractive: number;
	AttractiveConfidence: number;
	Age: number;
	AgeConfidence: number;
	Gender: string;
	Emotion: string;
	GenderConfidence: number;
	FaceId: string;
	GroupId: string;
	FaceAttributes: FaceAttributes;
	EmotionDetails: EmotionDetails;
	SimilarFaces: SimilarFacesItem[];
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.Frames
export interface Frames {
	FacesStatus: string;
	AddressModifyTime: string;
	ModifyTime: string;
	AddressFailReason: string;
	CreateTime: string;
	CelebrityFailReason: string;
	OCRModifyTime: string;
	ImageFormat: string;
	FacesFailReason: string;
	AddressStatus: string;
	Exif: string;
	ImageHeight: number;
	SourceType: string;
	RemarksB: string;
	FileSize: number;
	Orientation: string;
	TagsStatus: string;
	FacesModifyTime: string;
	CelebrityModifyTime: string;
	RemarksD: string;
	TagsFailReason: string;
	CelebrityStatus: string;
	OCRStatus: string;
	ImageUri: string;
	ExternalId: string;
	ImageTime: string;
	Location: string;
	TagsModifyTime: string;
	RemarksA: string;
	SourcePosition: string;
	OCRFailReason: string;
	RemarksC: string;
	SourceUri: string;
	ImageWidth: number;
	Address: Address;
	OCR: OCRItem[];
	Faces: FacesItem[];
	Celebrity: CelebrityItem[];
	Tags: TagsItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.FindImagesByTagNamesResponse
export interface FindImagesByTagNamesResponse {
	SetId: string;
	NextMarker: string;
	RequestId: string;
	Images: Frames[];
}

