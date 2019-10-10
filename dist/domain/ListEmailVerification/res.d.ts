// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.EmailVerification
export interface EmailVerification {
	GmtCreate: string;
	GmtModified: string;
	Email: string;
	UserId: string;
	EmailVerificationNo: string;
	TokenSendTime: string;
	VerificationStatus: number;
	VerificationTime: string;
	SendIp: string;
	ConfirmIp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.ListEmailVerificationResponse
export interface ListEmailVerificationResponse {
	RequestId: string;
	TotalItemNum: number;
	CurrentPageNum: number;
	TotalPageNum: number;
	PageSize: number;
	PrePage: boolean;
	NextPage: boolean;
	Data: EmailVerification[];
}

