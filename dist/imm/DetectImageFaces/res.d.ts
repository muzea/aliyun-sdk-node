// this file was automatically generated, DO NOT EDIT
// structs
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.DetectImageFacesResponse
export interface DetectImageFacesResponse {
	RequestId: string;
	ImageUri: string;
	Faces: FacesItem[];
}

