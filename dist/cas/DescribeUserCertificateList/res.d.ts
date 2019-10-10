// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cas.Certificate
export interface Certificate {
	id: number;
	name: string;
	common: string;
	fingerprint: string;
	issuer: string;
	orgName: string;
	province: string;
	city: string;
	country: string;
	startDate: string;
	endDate: string;
	sans: string;
	expired: boolean;
	buyInAliyun: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cas.DescribeUserCertificateListResponse
export interface DescribeUserCertificateListResponse {
	RequestId: string;
	TotalCount: number;
	ShowSize: number;
	CurrentPage: number;
	CertificateList: Certificate[];
}

