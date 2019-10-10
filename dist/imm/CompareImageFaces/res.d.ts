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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.FaceA
export interface FaceA {
	ImageUri: string;
	FaceId: string;
	Axis: string[];
	FaceAttributes: FaceAttributes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.FaceB
export interface FaceB {
	ImageUri: string;
	FaceId: string;
	Axis: string[];
	FaceAttributes: FaceAttributes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.CompareImageFacesResponse
export interface CompareImageFacesResponse {
	RequestId: string;
	SetId: string;
	Similarity: number;
	FaceA: FaceA;
	FaceB: FaceB;
}

