// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.OssUploadToken
export interface OssUploadToken {
	Key: string;
	Bucket: string;
	Path: string;
	Token: string;
	EndPoint: string;
	Expired: number;
	Secret: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.DescribeOssUploadTokenResponse
export interface DescribeOssUploadTokenResponse {
	RequestId: string;
	OssUploadToken: OssUploadToken;
}

