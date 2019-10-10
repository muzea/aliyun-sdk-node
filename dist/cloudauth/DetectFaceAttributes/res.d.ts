// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.FaceRect
export interface FaceRect {
	Top: number;
	Left: number;
	Width: number;
	Height: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.Gender
export interface Gender {
	Score: number;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.Smiling
export interface Smiling {
	Value: number;
	Threshold: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.Headpose
export interface Headpose {
	PitchAngle: number;
	RollAngle: number;
	YawAngle: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.FaceAttributes
export interface FaceAttributes {
	Age: number;
	Glasses: string;
	Facetype: string;
	Blur: number;
	Ethnicity: string;
	Gender: Gender;
	Smiling: Smiling;
	Headpose: Headpose;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.FaceAttributesDetectInfo
export interface FaceAttributesDetectInfo {
	FaceRect: FaceRect;
	FaceAttributes: FaceAttributes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.FaceInfos
export interface FaceInfos {
	FaceAttributesDetectInfo: FaceAttributesDetectInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.Data
export interface Data {
	ImgWidth: number;
	ImgHeight: number;
	SimilarityScore: number;
	ConfidenceThresholds: string;
	FaceInfos: FaceInfos;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.DetectFaceAttributesResponse
export interface DetectFaceAttributesResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: Data;
}

