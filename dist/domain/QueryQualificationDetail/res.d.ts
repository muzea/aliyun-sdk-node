// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.QualificationCredential
export interface QualificationCredential {
	CredentialNo: string;
	CredentialType: string;
	CredentialUrl: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.Credentials
export interface Credentials {
	QualificationCredential: QualificationCredential[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.QueryQualificationDetailResponse
export interface QueryQualificationDetailResponse {
	TrackId: string;
	AuditStatus: number;
	RequestId: string;
	Credentials: Credentials;
}

