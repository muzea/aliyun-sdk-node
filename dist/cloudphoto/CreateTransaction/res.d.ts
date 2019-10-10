// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.Upload
export interface Upload {
	Bucket: string;
	FileId: string;
	OssEndpoint: string;
	ObjectKey: string;
	SessionId: string;
	AccessKeyId: string;
	AccessKeySecret: string;
	StsToken: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.Transaction
export interface Transaction {
	Upload: Upload;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.CreateTransactionResponse
export interface CreateTransactionResponse {
	Code: string;
	Message: string;
	RequestId: string;
	Action: string;
	Transaction: Transaction;
}

