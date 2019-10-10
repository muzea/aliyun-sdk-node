// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.SignatureItem
export interface SignatureItem {
	SignatureId: string;
	SignatureName: string;
	BoundTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.Signatures
export interface Signatures {
	SignatureItem: SignatureItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeSignaturesByApiResponse
export interface DescribeSignaturesByApiResponse {
	RequestId: string;
	Signatures: Signatures;
}

