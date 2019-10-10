// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.DownloadParams
export interface DownloadParams {
	SignatureUrl: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.DownloadOriginalStatisticsReportResponse
export interface DownloadOriginalStatisticsReportResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	DownloadParams: DownloadParams;
}

