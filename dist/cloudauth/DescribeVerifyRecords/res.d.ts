// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.IdCardInfo
export interface IdCardInfo {
	Name: string;
	Sex: string;
	EndDate: string;
	BackImageUrl: string;
	Nationality: string;
	Authority: string;
	Birth: string;
	Address: string;
	StartDate: string;
	FrontImageUrl: string;
	Number: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.Material
export interface Material {
	FaceImageUrl: string;
	IdCardNumber: string;
	IdCardName: string;
	IdCardInfo: IdCardInfo;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.Records
export interface Records {
	BizType: string;
	BizId: string;
	VerifyId: string;
	FinishTime: number;
	Status: number;
	IdCardFaceComparisonScore: number;
	AuthorityComparisonScore: number;
	Material: Material;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.DescribeVerifyRecordsResponse
export interface DescribeVerifyRecordsResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	CurrentPage: number;
	QueryId: string;
	RecordsList: Records[];
}

