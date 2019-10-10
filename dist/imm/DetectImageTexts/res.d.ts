// this file was automatically generated, DO NOT EDIT
// structs
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.DetectImageTextsResponse
export interface DetectImageTextsResponse {
	RequestId: string;
	ImageUri: string;
	OCR: OCRItem[];
}

