// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ContactFlowVersion
export interface ContactFlowVersion {
	Canvas: string;
	Content: string;
	LockedBy: string;
	ContactFlowVersionDescription: string;
	Version: string;
	LastModified: string;
	LastModifiedBy: string;
	Status: string;
	ContactFlowVersionId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.CommitContactFlowVersionModificationResponse
export interface CommitContactFlowVersionModificationResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	ContactFlowVersion: ContactFlowVersion;
}

